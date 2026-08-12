#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
行业强弱数据库 → 页面数据生成脚本
从 data/sector-db.json 生成 js/sector-data.js（页面引用）

用法: python tools/build-data.py
校验: 每个日期必须包含 industries 中全部 31 个行业，缺失会报错（STRICT）
"""
import json, os, sys, datetime

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE, "data", "sector-db.json")
OUT_PATH = os.path.join(BASE, "js", "sector-data.js")

def main():
    with open(DB_PATH, encoding="utf-8") as f:
        db = json.load(f)

    industries = db["industries"]
    dates = db["dates"]
    ind_names = [ind["name"] for ind in industries]

    # ---- 校验：每个日期行业必须齐全 ----
    errors = []
    for date, data in dates.items():
        missing = [n for n in ind_names if n not in data or data[n] is None]
        if missing:
            errors.append(f"{date} 缺失行业: {', '.join(missing)}")

    if errors:
        print("!! 数据完整性校验失败（未生成 js/sector-data.js）:")
        for e in errors:
            print("   -", e)
        sys.exit(1)

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
