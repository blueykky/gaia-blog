/* ============================================================
   行业强弱分布 — 交互逻辑（v6 多日期库）
   30 个申万一级行业 · 3 个日期：2026-08-11 / 2026-08-07 / 2026-08-05
   5 维筛选：强弱、波动性、连续性、甜品度、颜色
   标签防重叠 + 入场动画
   ============================================================ */

// 基础坐标（覆盖所有日期可能出现的行业）
const SECTOR_BASE = {
  "通信":       { x: 0.230, y: 0.583 },
  "电子":       { x: 0.250, y: 0.640 },  // 8/7, 8/5 独有（申万一级电子）
  "有色金属":   { x: 0.236, y: 0.575 },
  "公用事业":   { x: 0.255, y: 0.580 },
  "银行":       { x: 0.245, y: 0.560 },
  "建筑材料":   { x: 0.200, y: 0.560 },
  "基础化工":   { x: 0.186, y: 0.560 },
  "电子设备":   { x: 0.173, y: 0.560 },  // 8/11 独有
  "电力设备":   { x: 0.175, y: 0.560 },  // 8/7, 8/5 独有
  "机械设备":   { x: 0.235, y: 0.555 },
  "家用电器":   { x: 0.118, y: 0.555 },
  "环保":       { x: 0.140, y: 0.545 },
  "建筑装饰":   { x: 0.143, y: 0.510 },
  "房地产":     { x: 0.158, y: 0.513 },
  "交通运输":   { x: 0.180, y: 0.510 },
  "非银金融":   { x: 0.200, y: 0.510 },
  "医药生物":   { x: 0.245, y: 0.535 },
  "煤炭":       { x: 0.265, y: 0.530 },
  "食品饮料":   { x: 0.170, y: 0.495 },
  "纺织服饰":   { x: 0.118, y: 0.490 },
  "轻工制造":   { x: 0.105, y: 0.490 },
  "石油石化":   { x: 0.198, y: 0.480 },
  "传媒":       { x: 0.180, y: 0.475 },
  "国防军工":   { x: 0.218, y: 0.480 },
  "计算机":     { x: 0.160, y: 0.490 },
  "汽车":       { x: 0.150, y: 0.450 },
  "社会服务":   { x: 0.160, y: 0.430 },
  "美容护理":   { x: 0.200, y: 0.455 },
  "农林牧渔":   { x: 0.202, y: 0.425 },
  "商贸零售":   { x: 0.135, y: 0.400 },
  "钢铁":       { x: 0.170, y: 0.410 },
  "综合":       { x: 0.135, y: 0.305 }
};

// 各日期的甜品度 + 颜色（连续性由 |value| 自动计算）
const SECTOR_DATA = {
  "2026-08-11": {
    "通信":       { value:  2.47, color: "blue" },
    "有色金属":   { value: -0.80, color: "red"  },
    "公用事业":   { value: -0.40, color: "blue" },
    "银行":       { value:  0.37, color: "blue" },
    "建筑材料":   { value:  0.43, color: "red"  },
    "基础化工":   { value: -1.10, color: "blue" },
    "电子设备":   { value: -1.40, color: "blue" },
    "机械设备":   { value: -0.00, color: "blue" },
    "家用电器":   { value:  0.04, color: "red"  },
    "环保":       { value: -0.90, color: "blue" },
    "建筑装饰":   { value: -1.40, color: "blue" },
    "房地产":     { value: -0.90, color: "red"  },
    "交通运输":   { value: -0.70, color: "blue" },
    "非银金融":   { value: -0.30, color: "blue" },
    "医药生物":   { value:  0.53, color: "red"  },
    "煤炭":       { value:  0.29, color: "blue" },
    "食品饮料":   { value: -0.50, color: "blue" },
    "纺织服饰":   { value: -0.60, color: "red"  },
    "轻工制造":   { value: -1.50, color: "red"  },
    "石油石化":   { value: -1.20, color: "blue" },
    "传媒":       { value: -1.20, color: "red"  },
    "国防军工":   { value: -1.80, color: "blue" },
    "计算机":     { value: -1.10, color: "blue" },
    "汽车":       { value: -1.40, color: "red"  },
    "社会服务":   { value: -1.50, color: "red"  },
    "美容护理":   { value: -1.40, color: "blue" },
    "农林牧渔":   { value: -1.60, color: "blue" },
    "商贸零售":   { value: -1.50, color: "red"  },
    "钢铁":       { value: -2.40, color: "blue" },
    "综合":       { value: -1.00, color: "blue" }
  },
  "2026-08-07": {
    "通信":       { value:  2.92, color: "blue" },
    "电子":       { value:  3.28, color: "blue" },
    "公用事业":   { value: -0.60, color: "blue" },
    "银行":       { value:  0.24, color: "blue" },
    "有色金属":   { value: -0.60, color: "red"  },
    "建筑材料":   { value:  0.47, color: "red"  },
    "基础化工":   { value: -1.10, color: "blue" },
    "电力设备":   { value: -1.20, color: "blue" },
    "机械设备":   { value:  0.03, color: "blue" },
    "家用电器":   { value: -0.00, color: "red"  },
    "环保":       { value: -1.00, color: "blue" },
    "建筑装饰":   { value: -1.40, color: "blue" },
    "房地产":     { value: -1.10, color: "red"  },
    "交通运输":   { value: -0.70, color: "blue" },
    "非银金融":   { value: -0.40, color: "blue" },
    "医药生物":   { value:  0.33, color: "red"  },
    "煤炭":       { value: -0.10, color: "blue" },
    "石油石化":   { value: -2.00, color: "blue" },
    "食品饮料":   { value: -0.80, color: "blue" },
    "传媒":       { value: -1.40, color: "red"  },
    "国防军工":   { value: -1.80, color: "blue" },
    "计算机":     { value: -1.10, color: "blue" },
    "纺织服饰":   { value: -0.90, color: "red"  },
    "轻工制造":   { value: -1.50, color: "red"  },
    "汽车":       { value: -1.50, color: "red"  },
    "社会服务":   { value: -1.70, color: "red"  },
    "美容护理":   { value: -1.50, color: "blue" },
    "农林牧渔":   { value: -1.90, color: "blue" },
    "商贸零售":   { value: -1.70, color: "red"  },
    "钢铁":       { value: -2.60, color: "blue" },
    "综合":       { value: -1.60, color: "blue" }
  },
  "2026-08-05": {
    "通信":       { value:  2.63, color: "blue" },
    "电子":       { value:  2.77, color: "blue" },
    "公用事业":   { value: -0.20, color: "blue" },
    "银行":       { value:  0.40, color: "blue" },
    "有色金属":   { value: -0.10, color: "red"  },
    "建筑材料":   { value:  0.00, color: "red"  },
    "基础化工":   { value: -1.00, color: "blue" },
    "电力设备":   { value: -0.80, color: "blue" },
    "机械设备":   { value: -0.10, color: "blue" },
    "家用电器":   { value:  0.16, color: "red"  },
    "环保":       { value: -0.60, color: "blue" },
    "煤炭":       { value: -0.10, color: "blue" },
    "医药生物":   { value:  0.30, color: "red"  },
    "交通运输":   { value: -0.60, color: "blue" },
    "房地产":     { value: -1.00, color: "blue" },
    "非银金融":   { value: -0.10, color: "blue" },
    "石油石化":   { value: -2.10, color: "blue" },
    "食品饮料":   { value: -0.50, color: "blue" },
    "建筑装饰":   { value: -1.00, color: "blue" },
    "国防军工":   { value: -2.00, color: "blue" },
    "传媒":       { value: -1.00, color: "red"  },
    "纺织服饰":   { value: -0.70, color: "red"  },
    "轻工制造":   { value: -1.40, color: "red"  },
    "计算机":     { value: -0.50, color: "blue" },
    "汽车":       { value: -1.30, color: "blue" },
    "社会服务":   { value: -1.40, color: "red"  },
    "美容护理":   { value: -1.40, color: "blue" },
    "农林牧渔":   { value: -1.40, color: "blue" },
    "商贸零售":   { value: -1.50, color: "red"  },
    "钢铁":       { value: -2.40, color: "blue" },
    "综合":       { value: -1.00, color: "blue" }
  }
};

// 视图
const VIEW = { w: 1000, h: 700, pad: { top: 50, right: 60, bottom: 60, left: 60 } };
const X_RANGE = [0.08, 0.28];
const Y_RANGE = [0.30, 0.65];
const COLOR = { blue: "#7B92B5", red: "#DC5F5F" };

// 当前日期（按日期排序，最新在前）
const AVAILABLE_DATES = Object.keys(SECTOR_DATA).sort().reverse();
let currentDate = AVAILABLE_DATES[0];

// URL hash 支持直接打开特定日期：sector-strength-0811.html#date=2026-08-07
const hashDate = (typeof location !== "undefined" && location.hash || "")
  .replace("#date=", "").match(/^\d{4}-\d{2}-\d{2}$/) ? location.hash.replace("#date=", "") : null;
if (hashDate && SECTOR_DATA[hashDate]) {
  currentDate = hashDate;
}

const DEFAULT_FILTER = {
  yLo: 0.30, yHi: 0.65,
  xLo: 0.08, xHi: 0.28,
  cLo: 0,    cHi: 10,
  vLo: -3.5, vHi: 3.5,
  color: "all"
};

let state = { ...DEFAULT_FILTER, current: null };

// 构造某日期的完整 sector 列表（基础坐标 + 数据 + 自动算 cont）
function buildSectors(date) {
  const data = SECTOR_DATA[date];
  return Object.keys(SECTOR_BASE).map(name => {
    const base = SECTOR_BASE[name];
    const d = data[name];
    if (!d) return null;  // 该日期没这个行业的图数据
    const value = d.value;
    const color = d.color;
    const abs = Math.min(Math.abs(value), 3);
    return {
      name,
      x: base.x,
      y: base.y,
      value,
      color,
      cont: Math.round(abs * 10 / 3 * 10) / 10
    };
  }).filter(Boolean);
}

let currentSectors = buildSectors(currentDate);

// ---------- 安全取元素 ----------
function $(id) { return document.getElementById(id); }
const svg = $("chart");
const tooltip = $("tooltip");
const countEl = $("dot-count");

if (!svg || !tooltip) {
  // 关键容器缺失：静默退出
} else {

const dots = [];

const xScale = (x) => {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  return VIEW.pad.left + (x - X_RANGE[0]) / (X_RANGE[1] - X_RANGE[0]) * innerW;
};
const yScale = (y) => {
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;
  return VIEW.pad.top + (Y_RANGE[1] - y) / (Y_RANGE[1] - Y_RANGE[0]) * innerH;
};
const rScale = (v) => 8 + Math.min(Math.abs(v), 3) * 4.5;

function svgEl(name, attrs, parent) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const k in attrs) {
    if (k === "text") el.textContent = attrs[k];
    else el.setAttribute(k, attrs[k]);
  }
  if (parent) parent.appendChild(el);
  return el;
}

// ---------- 坐标轴 + 日期标签 ----------
function renderAxes(date) {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;

  const yMid = yScale(0.50);
  svgEl("line", { x1: VIEW.pad.left, y1: yMid, x2: VIEW.pad.left + innerW, y2: yMid, class: "axis-line" }, svg);

  const xMid = xScale(0.21);
  svgEl("line", { x1: xMid, y1: VIEW.pad.top, x2: xMid, y2: VIEW.pad.top + innerH, class: "axis-line" }, svg);

  [0.08, 0.13, 0.18, 0.23, 0.28].forEach(v => {
    svgEl("text", { x: xScale(v), y: VIEW.pad.top + innerH + 24, "text-anchor": "middle", class: "axis-label", text: v.toFixed(2) }, svg);
  });
  [0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65].forEach(v => {
    svgEl("text", { x: VIEW.pad.left - 12, y: yScale(v) + 4, "text-anchor": "end", class: "axis-label", text: v.toFixed(2) }, svg);
  });

  svgEl("text", { x: VIEW.pad.left + innerW / 2, y: VIEW.h - 18, "text-anchor": "middle", class: "axis-title", text: "波动性" }, svg);
  svgEl("text", { x: 18, y: VIEW.pad.top + innerH / 2, transform: "rotate(-90 18 " + (VIEW.pad.top + innerH / 2) + ")", "text-anchor": "middle", class: "axis-title", text: "强弱势级" }, svg);
  svgEl("text", { x: VIEW.w - VIEW.pad.right, y: VIEW.pad.top - 16, "text-anchor": "end", class: "date-tag", text: date.replace(/-/g, ".") }, svg);
}

function updateDateTag(date) {
  const tag = svg.querySelector(".date-tag");
  if (tag) tag.textContent = date.replace(/-/g, ".");
  const subTime = document.querySelector(".post-head time");
  if (subTime) subTime.textContent = date.replace(/-/g, ".");
}

// ---------- 圆点 ----------
function renderDots(sectors) {
  sectors.forEach((d) => {
    const cx = xScale(d.x);
    const cy = yScale(d.y);
    const r = rScale(d.value);

    const g = svgEl("g", { class: "dot", "data-name": d.name }, svg);
    const circle = svgEl("circle", {
      cx, cy, r,
      fill: d.color === "blue" ? COLOR.blue : COLOR.red,
      "fill-opacity": "0.72",
      stroke: "rgba(255,255,255,0.6)",
      "stroke-width": "0.8"
    }, g);
    const label = svgEl("text", {
      x: cx + r + 4, y: cy + 4,
      class: "dot-label", text: d.name + " " + d.value.toFixed(2)
    }, g);

    g.addEventListener("mouseenter", (e) => onHover(d, g, e));
    g.addEventListener("mousemove", (e) => moveTooltip(e));
    g.addEventListener("mouseleave", () => onLeave(d, g));
    g.addEventListener("click", () => onClick(d, g));

    dots.push({ d, g, circle, label, cx, cy, r });
  });
}

function clearDots() {
  dots.forEach(d => d.g.remove());
  dots.length = 0;
}

// ---------- 标签防重叠 ----------
function avoidOverlap() {
  const order = [...dots].sort((a, b) => b.cy - a.cy || a.cx - b.cx);
  const placed = [];

  function overlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x &&
           a.y < b.y + b.h && a.y + a.h > b.y;
  }

  for (const item of order) {
    const lab = item.label;
    let lx = item.cx + item.r + 4;
    const bb = lab.getBBox();
    const bw = bb.width, bh = bb.height;
    const rightEdge = VIEW.w - VIEW.pad.right;
    if (lx + bw > rightEdge) lx = item.cx - item.r - 4 - bw;
    const baseY = item.cy - bh / 2;

    let found = null;
    outer:
    for (let step = 0; step <= 16; step++) {
      for (const dir of [1, -1]) {
        const dy = step * 13 * dir;
        const rect = { x: lx, y: baseY + dy, w: bw, h: bh };
        if (!placed.some(p => overlap(rect, p))) { found = rect; break outer; }
      }
    }

    if (found) {
      lab.setAttribute("x", found.x);
      lab.setAttribute("y", found.y + bh / 2);
      placed.push(found);
    } else {
      placed.push({ x: lx, y: baseY, w: bw, h: bh });
    }
  }
}

// ---------- 综合过滤 ----------
function applyFilter() {
  let visible = 0;
  dots.forEach(item => {
    const d = item.d;
    const show =
      d.y >= state.yLo && d.y <= state.yHi &&
      d.x >= state.xLo && d.x <= state.xHi &&
      d.cont >= state.cLo && d.cont <= state.cHi &&
      d.value >= state.vLo && d.value <= state.vHi &&
      (state.color === "all" || d.color === state.color);
    item.g.classList.toggle("faded", !show);
    if (show) visible++;
  });
  if (countEl) countEl.textContent = "显示 " + visible + " / " + currentSectors.length + " 个行业";
}

// ---------- 入场动画 ----------
function playEnter() {
  const cx0 = VIEW.w / 2, cy0 = VIEW.h / 2;
  dots.forEach((item, i) => {
    const c = item.circle;
    c.style.transition = "none";
    c.setAttribute("cx", cx0);
    c.setAttribute("cy", cy0);
    c.style.opacity = "0";
    void c.getBoundingClientRect();
    setTimeout(() => {
      c.style.transition = "cx .65s cubic-bezier(.22,.9,.3,1.2), cy .65s cubic-bezier(.22,.9,.3,1.2), opacity .3s ease";
      c.setAttribute("cx", item.cx);
      c.setAttribute("cy", item.cy);
      c.style.opacity = "0.72";
    }, 30 + i * 22);

    const lab = item.label;
    lab.style.transition = "opacity .3s ease";
    lab.style.opacity = "0";
    setTimeout(() => { lab.style.opacity = "0.75"; }, 500 + i * 22);
  });
}

// ---------- hover / tooltip ----------
function onHover(d, el, e) {
  dots.forEach(o => { if (o.g !== el) o.g.classList.add("faded"); });
  el.classList.add("active");
  el.classList.remove("faded");
  state.current = d;

  tooltip.innerHTML =
    '<div class="tt-name">' + d.name + '</div>' +
    '<div class="tt-row"><span>波动性</span><b>' + d.x.toFixed(3) + '</b></div>' +
    '<div class="tt-row"><span>强弱势级</span><b>' + d.y.toFixed(3) + '</b></div>' +
    '<div class="tt-row"><span>连续性</span><b>' + d.cont.toFixed(1) + '</b></div>' +
    '<div class="tt-row"><span>甜品度</span><b>' + d.value.toFixed(2) + '</b></div>';
  tooltip.classList.add("show");
  moveTooltip(e);
}

function onLeave(d, el) {
  el.classList.remove("active");
  dots.forEach(o => o.g.classList.remove("faded"));
  applyFilter();
  tooltip.classList.remove("show");
  state.current = null;
}

function onClick(d, el) {
  if (el.classList.contains("active")) {
    onLeave(d, el);
  } else {
    onHover(d, el, { clientX: el.getBoundingClientRect().left, clientY: el.getBoundingClientRect().top });
  }
}

function moveTooltip(e) {
  const area = document.querySelector(".chart-area").getBoundingClientRect();
  tooltip.style.left = (e.clientX - area.left) + "px";
  tooltip.style.top = (e.clientY - area.top) + "px";
}

// ---------- 双端范围滑块组件 ----------
function createDualRange(trackEl, valEl, min, max, lo, hi, onChange, step) {
  if (!trackEl) return null;
  const rail = document.createElement("div"); rail.className = "df-rail";
  const rng = document.createElement("div"); rng.className = "df-range";
  const t1 = document.createElement("div"); t1.className = "df-thumb";
  const t2 = document.createElement("div"); t2.className = "df-thumb";
  trackEl.appendChild(rail); trackEl.appendChild(rng);
  trackEl.appendChild(t1); trackEl.appendChild(t2);

  const span = max - min;
  const roundV = step ? (v) => Math.round(v / step) * step : (v) => Math.round(v * 100) / 100;
  const fmt = step ? (v) => v.toFixed(step >= 1 ? 0 : 2) : (v) => v.toFixed(2);
  let active = 0;

  const pct = (v) => (v - min) / span * 100;
  const valFromX = (px) => {
    const rect = trackEl.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (px - rect.left) / rect.width));
    return min + ratio * span;
  };

  function paint() {
    t1.style.left = pct(lo) + "%";
    t2.style.left = pct(hi) + "%";
    rng.style.left = pct(lo) + "%";
    rng.style.width = Math.max(0, pct(hi) - pct(lo)) + "%";
    if (valEl) valEl.textContent = fmt(roundV(lo)) + " – " + fmt(roundV(hi));
  }

  function moveTo(px) {
    let v = roundV(valFromX(px));
    if (active === 1) {
      lo = Math.min(v, roundV(hi - (step || 0.01)));
    } else if (active === 2) {
      hi = Math.max(v, roundV(lo + (step || 0.01)));
    }
    paint();
    onChange(roundV(lo), roundV(hi));
  }

  function pick(px) {
    const v = valFromX(px);
    const d1 = Math.abs(v - lo), d2 = Math.abs(v - hi);
    active = d1 <= d2 ? 1 : 2;
  }

  function onDown(e) {
    e.preventDefault();
    pick(e.clientX);
    moveTo(e.clientX);
    try { trackEl.setPointerCapture(e.pointerId); } catch (err) {}
    trackEl.addEventListener("pointermove", onMove);
    trackEl.addEventListener("pointerup", onUp);
    trackEl.addEventListener("pointercancel", onUp);
  }
  function onMove(e) { moveTo(e.clientX); }
  function onUp(e) {
    active = 0;
    trackEl.removeEventListener("pointermove", onMove);
    trackEl.removeEventListener("pointerup", onUp);
    trackEl.removeEventListener("pointercancel", onUp);
  }

  trackEl.addEventListener("pointerdown", onDown);
  paint();
  return {
    set: (l, h) => { lo = l; hi = h; paint(); onChange(l, h); },
    get: () => ({ lo: roundV(lo), hi: roundV(hi) })
  };
}

function createFilterControl(trackId, valId, min, max, lo, hi, onChange, step) {
  const trackEl = $(trackId);
  const valEl = $(valId);
  if (!trackEl) return null;
  if (trackEl.tagName === "DIV") {
    return createDualRange(trackEl, valEl, min, max, lo, hi, onChange, step);
  }
  if (trackEl.tagName === "INPUT") {
    trackEl.value = lo;
    const emit = () => {
      const v = parseFloat(trackEl.value);
      if (valEl) valEl.textContent = "≥ " + v.toFixed(2);
      onChange(v, max);
    };
    trackEl.addEventListener("input", emit);
    if (valEl) valEl.textContent = "≥ " + lo.toFixed(2);
    return { set: (l, h) => { trackEl.value = l; emit(); }, get: () => ({ lo: parseFloat(trackEl.value), hi: max }) };
  }
  return null;
}

// ---------- 控件绑定 ----------
const filterBindings = [
  { trackId: "df-y", valId: "df-y-values", min: 0.30, max: 0.65, key: "y", step: 0.01 },
  { trackId: "df-x", valId: "df-x-values", min: 0.08, max: 0.28, key: "x", step: 0.01 },
  { trackId: "df-c", valId: "df-c-values", min: 0,    max: 10,   key: "c", step: 0.1  },
  { trackId: "df-v", valId: "df-v-values", min: -3.5, max: 3.5,  key: "v", step: 0.01 }
];

filterBindings.forEach(b => {
  const trackEl = document.getElementById(b.trackId) || document.getElementById("filter-" + b.key);
  const valEl = document.getElementById(b.valId) || document.getElementById("filter-" + b.key + "-value");
  if (!trackEl) return;
  // 兼容 v2/v3
  const ctrlId = "df-" + b.key;
  const valId2 = "df-" + b.key + "-values";
  createFilterControl(ctrlId, valId2, b.min, b.max, state[b.key + "Lo"], state[b.key + "Hi"], (lo, hi) => {
    state[b.key + "Lo"] = lo;
    state[b.key + "Hi"] = hi;
    applyFilter();
  }, b.step) || createFilterControl("filter-" + b.key, "filter-" + b.key + "-value", b.min, b.max, state[b.key + "Lo"], state[b.key + "Hi"], (lo, hi) => {
    state[b.key + "Lo"] = lo;
    state[b.key + "Hi"] = hi;
    applyFilter();
  }, b.step);
});

// 颜色按钮组
const segBtns = document.querySelectorAll(".seg-btn");
segBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    segBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.color = btn.dataset.color;
    applyFilter();
  });
});

// ---------- 日期切换 ----------
function switchDate(date) {
  if (!SECTOR_DATA[date]) return;
  currentDate = date;
  currentSectors = buildSectors(date);
  clearDots();
  renderDots(currentSectors);
  avoidOverlap();
  applyFilter();
  updateDateTag(date);
  playEnter();
}

const dateBtns = document.querySelectorAll(".date-btn");
dateBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.date === currentDate) return;
    dateBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    switchDate(btn.dataset.date);
  });
});

const btnReplay = $("btn-replay");
if (btnReplay) btnReplay.addEventListener("click", playEnter);

// 启动时根据 currentDate 同步日期按钮 active
document.querySelectorAll(".date-btn").forEach(b => {
  b.classList.toggle("active", b.dataset.date === currentDate);
});

// ---------- 启动 ----------
renderAxes(currentDate);
renderDots(currentSectors);
avoidOverlap();
applyFilter();
updateDateTag(currentDate);
setTimeout(playEnter, 100);

} // end of safe-guard block
