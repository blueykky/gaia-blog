#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
行业强弱数据库 → 页面数据生成脚本
从 data/sector-db.json 生成 js/sector-data.js（页面引用）

数据模型（v3）：
- industries: 31 个行业名列表（顺序固定）
- dates: {date: [sector objects]}, 每个 sector 含 name + x + y + value + color + cont
- 坐标按各日期图中实际位置记录（不同日期同一行业坐标可能略不同）

校验：每个日期数组必须包含 industries 中全部 31 个行业，且每个对象必须含 x/y/value/color/cont
"""
import json, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE, "data", "sector-db.json")
OUT_PATH = os.path.join(BASE, "js", "sector-data.js")

def main():
    with open(DB_PATH, encoding="utf-8") as f:
        db = json.load(f)

    industries = db["industries"]
    dates = db["dates"]
    if len(industries) != 31:
        print(f"!! 行业数={len(industries)}（应该 31）")
        sys.exit(1)

    # ---- 校验：每个日期数组齐全 + 要素完整 ----
    errors = []
    for date, arr in dates.items():
        if not isinstance(arr, list):
            errors.append(f"{date} 不是数组")
            continue
        names = [s.get("name") for s in arr]
        missing = [n for n in industries if n not in names]
        if missing:
            errors.append(f"{date} 缺行业: {', '.join(missing)}")
        for s in arr:
            for k in ("x", "y", "value", "color", "cont"):
                if k not in s:
                    errors.append(f"{date} {s.get('name', '?')} 缺 {k}")
            # 颜色必须是英文 red/blue（防 Excel 中文"红/蓝"漏转译导致全红）
            if s.get("color") not in ("red", "blue"):
                errors.append(f"{date} {s.get('name', '?')} 颜色非法: {s.get('color')!r}（必须 red/blue）")

    if errors:
        print("!! 数据完整性校验失败（未生成 js/sector-data.js）:")
        for e in errors:
            print("   -", e)
        sys.exit(1)

    # ---- 自动补 cont（如有缺失）----
    for date, arr in dates.items():
        for s in arr:
            if "cont" not in s:
                v = abs(s.get("value", 0))
                s["cont"] = round(min(v, 3) * 10 / 3 * 10) / 10

    # ---- 生成 JS ----
    js = (
        "/* 自动生成文件 —— 由 tools/build-data.py 从 data/sector-db.json 生成，请勿手改 */\n"
        "/* 修改数据请编辑 data/sector-db.json 后重新运行生成脚本 */\n"
        "window.SECTOR_DB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    )
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"OK  生成 {os.path.relpath(OUT_PATH, BASE)}")
    print(f"    行业数: {len(industries)}，日期数: {len(dates)}")
    for date in sorted(dates.keys(), reverse=True):
        print(f"    - {date}: {len(dates[date])} 个行业")

if __name__ == "__main__":
    main()