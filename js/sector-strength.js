/* ============================================================
   行业强弱分布 — 交互逻辑（v7 数据库驱动 + 动态轴）
   - 数据来源：window.SECTOR_DB（由 data/sector-db.json 经 build-data.py 生成）
   - 行业集合固定为数据库中的 31 个，每日期数量一致
   - 轴范围、刻度、值范围全部根据数据库动态计算
   ============================================================ */

// ---------- 视图基础常量 ----------
const VIEW = { w: 1000, h: 700, pad: { top: 50, right: 60, bottom: 60, left: 60 } };
const COLOR = { blue: "#7B92B5", red: "#DC5F5F" };

// 业务参考线
const REF_Y = 0.50;  // 强弱分界
const REF_X = 0.21;  // 波动性分界

// ---------- 从 SECTOR_DB 计算动态范围 ----------
function computeRanges(db) {
  let xMin = Infinity, xMax = -Infinity;
  let yMin = Infinity, yMax = -Infinity;
  let vMin = Infinity, vMax = -Infinity;
  let cMin = Infinity, cMax = -Infinity;

  Object.values(db.dates).forEach(arr => {
    arr.forEach(s => {
      if (!s) return;
      xMin = Math.min(xMin, s.x);
      xMax = Math.max(xMax, s.x);
      yMin = Math.min(yMin, s.y);
      yMax = Math.max(yMax, s.y);
      vMin = Math.min(vMin, s.value);
      vMax = Math.max(vMax, s.value);
      cMin = Math.min(cMin, s.cont);
      cMax = Math.max(cMax, s.cont);
    });
  });

  const xSpan = xMax - xMin;
  const ySpan = yMax - yMin;
  const xPad = xSpan * 0.06;
  const yPad = ySpan * 0.06;
  const cSpan = cMax - cMin || 0.1;
  const cPad = cSpan * 0.08;

  return {
    X: [xMin - xPad, xMax + xPad],
    Y: [yMin - yPad, yMax + yPad],
    V: [Math.floor((vMin - 0.5) * 2) / 2, Math.ceil((vMax + 0.5) * 2) / 2],
    C: [Math.round((cMin - cPad) * 100) / 100, Math.round((cMax + cPad) * 100) / 100],
    C_RAW: [cMin, cMax]
  };
}

// nice ticks 算法
function niceTicks(min, max, count) {
  const span = max - min;
  const step0 = span / Math.max(count, 1);
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  let step;
  if (norm < 1.5) step = 1;
  else if (norm < 3) step = 2;
  else if (norm < 7) step = 5;
  else step = 10;
  step *= mag;
  const start = Math.ceil(min / step) * step;
  const ticks = [];
  for (let v = start; v <= max + 1e-9; v += step) {
    ticks.push(Math.round(v * 1000) / 1000);
  }
  return ticks;
}

// 圆大小：将连续性(cont)按数据库全局范围归一化后映射到 [R_MIN, R_MAX]，
// 拉大圆大小差异（最大/最小 ≈ 4.3 倍），便于肉眼分辨
const R_MIN = 6;
const R_MAX = 26;

function rScale(cont) {
  const [cLo, cHi] = C_RAW;
  const span = (cHi - cLo) || 0.1;
  const t = Math.min(1, Math.max(0, (cont - cLo) / span));
  return R_MIN + t * (R_MAX - R_MIN);
}

// ---------- 构建 sectors（直接取数据库中该日期的数组，每条数据带完整坐标） ----------
function buildSectors(date, db) {
  return db.dates[date] || [];
}

// ---------- 主逻辑 ----------
function $(id) { return document.getElementById(id); }
const svg = $("chart");
const tooltip = $("tooltip");
const countEl = $("dot-count");

if (!svg || !tooltip || !window.SECTOR_DB) {
  // 关键容器或数据库缺失：静默退出
} else {

const DB = window.SECTOR_DB;
const ranges = computeRanges(DB);
const X_RANGE = ranges.X;
const Y_RANGE = ranges.Y;
const V_RANGE = ranges.V;
const C_RANGE = ranges.C;
const C_RAW = ranges.C_RAW;

const xScale = (x) => {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  return VIEW.pad.left + (x - X_RANGE[0]) / (X_RANGE[1] - X_RANGE[0]) * innerW;
};
const yScale = (y) => {
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;
  return VIEW.pad.top + (Y_RANGE[1] - y) / (Y_RANGE[1] - Y_RANGE[0]) * innerH;
};

// ---------- 排序后的日期（最新在前） ----------
const AVAILABLE_DATES = Object.keys(DB.dates).sort().reverse();
let currentDate = AVAILABLE_DATES[0];

// URL hash 支持：#date=2026-08-07
const hashDate = (location.hash || "").replace("#date=", "").match(/^\d{4}-\d{2}-\d{2}$/) ? location.hash.replace("#date=", "") : null;
if (hashDate && DB.dates[hashDate]) currentDate = hashDate;

let currentSectors = buildSectors(currentDate, DB);

const state = {
  yLo: Y_RANGE[0], yHi: Y_RANGE[1],
  xLo: X_RANGE[0], xHi: X_RANGE[1],
  cLo: C_RANGE[0], cHi: C_RANGE[1],
  vLo: V_RANGE[0],  vHi: V_RANGE[1],
  color: "all",
  current: null
};

const dots = [];

function svgEl(name, attrs, parent) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const k in attrs) {
    if (k === "text") el.textContent = attrs[k];
    else el.setAttribute(k, attrs[k]);
  }
  if (parent) parent.appendChild(el);
  return el;
}

// ---------- 坐标轴（动态范围 + 动态刻度） ----------
function renderAxes(date) {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;

  // 参考线：仅当在范围内时画
  if (REF_Y >= Y_RANGE[0] && REF_Y <= Y_RANGE[1]) {
    const yMid = yScale(REF_Y);
    svgEl("line", { x1: VIEW.pad.left, y1: yMid, x2: VIEW.pad.left + innerW, y2: yMid, class: "axis-line" }, svg);
  }
  if (REF_X >= X_RANGE[0] && REF_X <= X_RANGE[1]) {
    const xMid = xScale(REF_X);
    svgEl("line", { x1: xMid, y1: VIEW.pad.top, x2: xMid, y2: VIEW.pad.top + innerH, class: "axis-line" }, svg);
  }

  // 动态刻度
  const xTicks = niceTicks(X_RANGE[0], X_RANGE[1], 5);
  const yTicks = niceTicks(Y_RANGE[0], Y_RANGE[1], 6);

  xTicks.forEach(v => {
    if (v < X_RANGE[0] || v > X_RANGE[1]) return;
    svgEl("text", { x: xScale(v), y: VIEW.pad.top + innerH + 24, "text-anchor": "middle", class: "axis-label", text: v.toFixed(2) }, svg);
  });
  yTicks.forEach(v => {
    if (v < Y_RANGE[0] || v > Y_RANGE[1]) return;
    svgEl("text", { x: VIEW.pad.left - 12, y: yScale(v) + 4, "text-anchor": "end", class: "axis-label", text: v.toFixed(2) }, svg);
  });

  // 轴标题
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
    const r = rScale(d.cont);

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

// ---------- 双端范围滑块 ----------
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
  const trackEl = $(trackId) || $(trackId.replace("df-", "filter-"));
  const valEl = $(valId) || $(valId.replace("df-", "filter-"));
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
const bindings = [
  { id: "y", min: Y_RANGE[0], max: Y_RANGE[1], lo: state.yLo, hi: state.yHi, step: 0.005 },
  { id: "x", min: X_RANGE[0], max: X_RANGE[1], lo: state.xLo, hi: state.xHi, step: 0.005 },
  { id: "c", min: C_RANGE[0], max: C_RANGE[1], lo: state.cLo, hi: state.cHi, step: 0.01 },
  { id: "v", min: V_RANGE[0],  max: V_RANGE[1],  lo: state.vLo,  hi: state.vHi,  step: 0.01 }
];
bindings.forEach(b => {
  const trackId = "df-" + b.id;
  const valId = "df-" + b.id + "-values";
  createFilterControl(trackId, valId, b.min, b.max, b.lo, b.hi, (lo, hi) => {
    if (b.id === "y") { state.yLo = lo; state.yHi = hi; }
    if (b.id === "x") { state.xLo = lo; state.xHi = hi; }
    if (b.id === "c") { state.cLo = lo; state.cHi = hi; }
    if (b.id === "v") { state.vLo = lo; state.vHi = hi; }
    applyFilter();
  }, b.step);
});

// 颜色按钮组
document.querySelectorAll(".seg-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.color = btn.dataset.color;
    applyFilter();
  });
});

// ---------- 日历日期选择（三视图：days / months / years） ----------
const dpWrap = $("datepicker-wrap");
const dpBtn = $("date-picker-btn");
const dpPop = $("datepicker-pop");
const dpLabel = $("date-picker-label");
const dataDates = new Set(Object.keys(DB.dates));
let calView = { y: 2026, m: 8 };
let viewMode = "days"; // "days" | "months" | "years"

const pad2 = (n) => (n < 10 ? "0" : "") + n;

function buildCalendar(y, m, mode) {
  calView = { y, m };
  viewMode = mode || viewMode;
  if (viewMode === "days") buildDaysView(y, m);
  else if (viewMode === "months") buildMonthsView(y);
  else buildYearsView(y);
}

function buildDaysView(y, m) {
  const first = new Date(y, m - 1, 1);
  const startDow = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m, 0).getDate();

  let html =
    '<div class="dp-head">' +
    '<button type="button" class="dp-nav" data-nav="prev-m" aria-label="上个月">‹</button>' +
    '<button type="button" class="dp-title-btn" data-nav="pick-m" aria-label="选择月份">' + y + ' 年 ' + m + ' 月 ▾</button>' +
    '<button type="button" class="dp-nav" data-nav="next-m" aria-label="下个月">›</button>' +
    '</div>' +
    '<div class="dp-dow-row"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>' +
    '<div class="dp-grid">';

  for (let i = 0; i < startDow; i++) html += '<span class="dp-blank"></span>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = y + "-" + pad2(m) + "-" + pad2(d);
    const hasData = dataDates.has(dateStr);
    const isCur = dateStr === currentDate;
    html +=
      '<button type="button" class="dp-day' +
      (hasData ? " has-data" : "") +
      (isCur ? " selected" : "") +
      '" data-date="' + dateStr + '"' +
      (hasData ? "" : " disabled") +
      '>' + d + '</button>';
  }
  html += "</div>";
  dpPop.innerHTML = html;
}

function buildMonthsView(y) {
  // 检查哪几个月有数据
  const monthHasData = {};
  dataDates.forEach(d => {
    const parts = d.split("-");
    if (parseInt(parts[0], 10) === y) monthHasData[parseInt(parts[1], 10)] = true;
  });

  let html =
    '<div class="dp-head">' +
    '<button type="button" class="dp-nav" data-nav="prev-y" aria-label="上一年">‹</button>' +
    '<button type="button" class="dp-title-btn" data-nav="pick-y" aria-label="选择年份">' + y + ' 年 ▾</button>' +
    '<button type="button" class="dp-nav" data-nav="next-y" aria-label="下一年">›</button>' +
    '</div>' +
    '<div class="dp-months">';
  for (let m = 1; m <= 12; m++) {
    const has = monthHasData[m];
    html +=
      '<button type="button" class="dp-month' + (has ? " has-data" : "") + '" data-nav="pick-d" data-month="' + m + '"' + (has ? "" : " disabled") + '>' +
      m + '月' + (has ? ' <span class="dp-dot"></span>' : '') + '</button>';
  }
  html += "</div>";
  dpPop.innerHTML = html;
}

function buildYearsView(y) {
  // 显示以 y 为中心前后 6 年共 12 年
  const startY = y - 5;
  const endY = y + 6;
  let html =
    '<div class="dp-head">' +
    '<button type="button" class="dp-nav" data-nav="prev-12y" aria-label="上 12 年">‹</button>' +
    '<button type="button" class="dp-title-btn" data-nav="back" aria-label="返回">' + startY + ' – ' + endY + '</button>' +
    '<button type="button" class="dp-nav" data-nav="next-12y" aria-label="下 12 年">›</button>' +
    '</div>' +
    '<div class="dp-years">';
  for (let yr = startY; yr <= endY; yr++) {
    const hasYear = Array.from(dataDates).some(d => d.startsWith(yr + "-"));
    html +=
      '<button type="button" class="dp-year' + (hasYear ? " has-data" : "") + '" data-nav="pick-m" data-year="' + yr + '">' +
      yr + (hasYear ? ' <span class="dp-dot"></span>' : '') + '</button>';
  }
  html += "</div>";
  dpPop.innerHTML = html;
}

function openCalendar() {
  const parts = currentDate.split("-");
  buildCalendar(parseInt(parts[0], 10), parseInt(parts[1], 10), "days");
  dpPop.hidden = false;
}

function closeCalendar() {
  dpPop.hidden = true;
}

if (dpBtn && dpPop) {
  dpBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (dpPop.hidden) openCalendar();
    else closeCalendar();
  });

  // 日历内部交互（事件委托）
  dpPop.addEventListener("click", (e) => {
    // 月份/年份快选（months 视图点击月份 → 切 days 视图）
    const month = e.target.closest("[data-nav='pick-d']");
    if (month) {
      buildCalendar(calView.y, parseInt(month.dataset.month, 10), "days");
      return;
    }
    // 年份快选（years 视图点击年份按钮 → 切 months 视图）
    const year = e.target.closest(".dp-year");
    if (year) {
      buildCalendar(parseInt(year.dataset.year, 10), 1, "months");
      return;
    }
    // 标题按钮：days 视图点标题 → months；months 视图点标题 → years
    const titleBtn = e.target.closest(".dp-title-btn");
    if (titleBtn) {
      const nav = titleBtn.dataset.nav;
      if (nav === "pick-m") buildCalendar(calView.y, 1, "months");
      else if (nav === "pick-y") buildCalendar(calView.y, 1, "years");
      else if (nav === "back") buildCalendar(calView.y, 1, "months");
      return;
    }
    // 箭头翻页
    const navBtn = e.target.closest(".dp-nav");
    if (navBtn) {
      const nav = navBtn.dataset.nav;
      let { y, m } = calView;
      if (nav === "prev-m") { m--; if (m < 1) { m = 12; y--; } buildCalendar(y, m, "days"); }
      else if (nav === "next-m") { m++; if (m > 12) { m = 1; y++; } buildCalendar(y, m, "days"); }
      else if (nav === "prev-y") { y--; buildCalendar(y, m, "months"); }
      else if (nav === "next-y") { y++; buildCalendar(y, m, "months"); }
      else if (nav === "prev-12y") { y -= 12; buildCalendar(y, m, "years"); }
      else if (nav === "next-12y") { y += 12; buildCalendar(y, m, "years"); }
      return;
    }
    // 日期点击
    const day = e.target.closest(".dp-day");
    if (day && day.dataset.date && !day.disabled) {
      switchDate(day.dataset.date);
      if (dpLabel) dpLabel.textContent = currentDate;
      closeCalendar();
    }
  });

  // 点击外部关闭
  document.addEventListener("click", (e) => {
    if (!dpPop.hidden && dpWrap && !dpWrap.contains(e.target)) {
      closeCalendar();
    }
  });
}

function switchDate(date) {
  if (!DB.dates[date]) return;
  currentDate = date;
  currentSectors = buildSectors(date, DB);
  clearDots();
  renderDots(currentSectors);
  avoidOverlap();
  applyFilter();
  updateDateTag(date);
  playEnter();
}

const btnReplay = $("btn-replay");
if (btnReplay) btnReplay.addEventListener("click", playEnter);

// ---------- 启动 ----------
if (dpLabel) dpLabel.textContent = currentDate;
renderAxes(currentDate);
renderDots(currentSectors);
avoidOverlap();
applyFilter();
updateDateTag(currentDate);
setTimeout(playEnter, 100);

} // end of safe-guard block