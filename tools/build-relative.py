#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
相对强度表数据库 → 页面数据生成脚本（独立于 sector-db / build-data.py）
从 data/relative-db.json 生成 js/relative-data.js（页面引用 window.RELATIVE_DB）

数据模型：
- industries: 31 个行业名（Excel 表头顺序）
- dates: {date: {行业: 相对强度值}}
校验：每个日期必须包含全部行业、值必须为数字、0~1 范围
"""
import json, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE, "data", "relative-db.json")
OUT_PATH = os.path.join(BASE, "js", "relative-data.js")

def main():
    with open(DB_PATH, encoding="utf-8") as f:
        db = json.load(f)

    industries = db["industries"]
    dates = db["dates"]
    if len(industries) != 31:
        print(f"!! 行业数={len(industries)}（应该 31）")
        sys.exit(1)

    errors = []
    for date, row in dates.items():
        if not isinstance(row, dict):
            errors.append(f"{date} 不是对象")
            continue
        missing = [n for n in industries if n not in row]
        if missing:
            errors.append(f"{date} 缺行业: {', '.join(missing)}")
        for n, v in row.items():
            if not isinstance(v, (int, float)) or isinstance(v, bool):
                errors.append(f"{date} {n} 值非法: {v!r}")
            elif not (0 <= v <= 1):
                errors.append(f"{date} {n} 超出范围: {v}")

    if errors:
        print("!! 相对强度校验失败（未生成 js/relative-data.js）:")
        for e in errors[:20]:
            print("   -", e)
        sys.exit(1)

    js = (
        "/* 自动生成文件 —— 由 tools/build-relative.py 从 data/relative-db.json 生成，请勿手改 */\n"
        "/* 修改数据请编辑 data/relative-db.json 后重新运行生成脚本 */\n"
        "window.RELATIVE_DB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    )
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"OK  生成 {os.path.relpath(OUT_PATH, BASE)}")
    print(f"    行业数: {len(industries)}，日期数: {len(dates)}")

if __name__ == "__main__":
    main()
