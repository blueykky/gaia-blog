/* ============================================================
   行业强弱分布 — 交互逻辑
   30 个申万一级行业（2026-08-11）
   ============================================================ */

const SECTORS = [
  // 名称, 波动性 x, 强弱势级 y, 涨跌幅 value, 颜色
  { name: "通信",       x: 0.235, y: 0.585, value:  2.47, color: "blue" },
  { name: "有色金属",   x: 0.230, y: 0.575, value: -0.80, color: "red"  },
  { name: "公用事业",   x: 0.255, y: 0.580, value: -0.40, color: "blue" },
  { name: "银行",       x: 0.245, y: 0.560, value:  0.37, color: "blue" },
  { name: "建筑材料",   x: 0.200, y: 0.560, value:  0.43, color: "red"  },
  { name: "基础化工",   x: 0.180, y: 0.560, value: -1.10, color: "blue" },
  { name: "电子设备",   x: 0.175, y: 0.560, value: -1.40, color: "blue" },
  { name: "机械设备",   x: 0.235, y: 0.555, value: -0.00, color: "blue" },
  { name: "家用电器",   x: 0.120, y: 0.555, value:  0.04, color: "red"  },
  { name: "环保",       x: 0.140, y: 0.545, value: -0.90, color: "blue" },
  { name: "建筑装饰",   x: 0.150, y: 0.510, value: -1.40, color: "blue" },
  { name: "房地产",     x: 0.160, y: 0.510, value: -0.90, color: "red"  },
  { name: "交通运输",   x: 0.180, y: 0.510, value: -0.70, color: "blue" },
  { name: "非银金融",   x: 0.200, y: 0.510, value: -0.30, color: "blue" },
  { name: "医药生物",   x: 0.245, y: 0.535, value:  0.53, color: "red"  },
  { name: "煤炭",       x: 0.265, y: 0.530, value:  0.29, color: "blue" },
  { name: "食品饮料",   x: 0.170, y: 0.495, value: -0.50, color: "blue" },
  { name: "纺织服饰",   x: 0.120, y: 0.490, value: -0.60, color: "red"  },
  { name: "轻工制造",   x: 0.105, y: 0.490, value: -1.50, color: "red"  },
  { name: "石油石化",   x: 0.200, y: 0.480, value: -1.20, color: "blue" },
  { name: "传媒",       x: 0.180, y: 0.475, value: -1.20, color: "red"  },
  { name: "国防军工",   x: 0.215, y: 0.480, value: -1.80, color: "blue" },
  { name: "计算机",     x: 0.160, y: 0.490, value: -1.10, color: "blue" },
  { name: "汽车",       x: 0.150, y: 0.450, value: -1.40, color: "red"  },
  { name: "社会服务",   x: 0.160, y: 0.430, value: -1.50, color: "red"  },
  { name: "美容护理",   x: 0.200, y: 0.455, value: -1.40, color: "blue" },
  { name: "农林牧渔",   x: 0.200, y: 0.425, value: -1.60, color: "blue" },
  { name: "商贸零售",   x: 0.135, y: 0.400, value: -1.50, color: "red"  },
  { name: "钢铁",       x: 0.170, y: 0.410, value: -2.40, color: "blue" },
  { name: "综合",       x: 0.135, y: 0.305, value: -1.00, color: "blue" }
];

// 视图配置
const VIEW = { w: 1000, h: 700, pad: { top: 50, right: 60, bottom: 60, left: 60 } };
const X_RANGE = [0.08, 0.28];
const Y_RANGE = [0.30, 0.65];

const COLOR = {
  blue: "#7B92B5",
  red:  "#DC5F5F",
  blueHover: "#5A77A0",
  redHover: "#B24545"
};

// 状态
let state = {
  view: "scatter",  // scatter | bar
  filter: 0.30,     // y 阈值
  current: null,    // hover/active 点
  enterPlayed: false
};

// 比例尺
const xScale = (x) => {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  return VIEW.pad.left + (x - X_RANGE[0]) / (X_RANGE[1] - X_RANGE[0]) * innerW;
};
const yScale = (y) => {
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;
  return VIEW.pad.top + (Y_RANGE[1] - y) / (Y_RANGE[1] - Y_RANGE[0]) * innerH;
};
const rScale = (v) => 8 + Math.min(Math.abs(v), 3) * 4.5;

// 排序柱状模式：x 改为按 value 排序
let barLayout = null;
function computeBarLayout() {
  const sorted = [...SECTORS].sort((a, b) => b.value - a.value);
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;
  const barW = innerW / sorted.length * 0.7;
  const gap = innerW / sorted.length * 0.3;
  barLayout = sorted.map((d, i) => ({
    ...d,
    bx: VIEW.pad.left + i * (barW + gap) + gap / 2,
    by: VIEW.pad.top + innerH,
    bw: barW,
    bh: Math.abs(d.value) / 3.5 * innerH * 0.85,
    up: d.value >= 0
  }));
}

// 渲染
const svg = document.getElementById("chart");
const tooltip = document.getElementById("tooltip");

function svgEl(name, attrs, parent) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const k in attrs) {
    if (k === "text") el.textContent = attrs[k];
    else el.setAttribute(k, attrs[k]);
  }
  if (parent) parent.appendChild(el);
  return el;
}

function renderAxes() {
  const innerW = VIEW.w - VIEW.pad.left - VIEW.pad.right;
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;

  // 横向虚线 y=0.50
  const yMid = yScale(0.50);
  svgEl("line", {
    x1: VIEW.pad.left, y1: yMid, x2: VIEW.pad.left + innerW, y2: yMid,
    class: "axis-line"
  }, svg);

  // 纵向虚线 x=0.21
  const xMid = xScale(0.21);
  svgEl("line", {
    x1: xMid, y1: VIEW.pad.top, x2: xMid, y2: VIEW.pad.top + innerH,
    class: "axis-line"
  }, svg);

  // x 轴刻度
  [0.08, 0.13, 0.18, 0.23, 0.28].forEach(v => {
    svgEl("text", {
      x: xScale(v), y: VIEW.pad.top + innerH + 24,
      "text-anchor": "middle", class: "axis-label", text: v.toFixed(2)
    }, svg);
  });

  // y 轴刻度
  [0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65].forEach(v => {
    svgEl("text", {
      x: VIEW.pad.left - 12, y: yScale(v) + 4,
      "text-anchor": "end", class: "axis-label", text: v.toFixed(2)
    }, svg);
  });

  // 轴标题
  svgEl("text", {
    x: VIEW.pad.left + innerW / 2, y: VIEW.h - 18,
    "text-anchor": "middle", class: "axis-title", text: "波动性"
  }, svg);

  const yTitle = svgEl("text", {
    x: 0, y: 0, class: "axis-title",
    transform: `translate(18, ${VIEW.pad.top + innerH / 2}) rotate(-90)`,
    "text-anchor": "middle", text: "强弱势级"
  }, svg);
  yTitle.setAttribute("text-anchor", "middle");

  // 日期标签
  svgEl("text", {
    x: VIEW.w - VIEW.pad.right, y: VIEW.pad.top - 16,
    "text-anchor": "end", class: "date-tag", text: "2026.08.11"
  }, svg);
}

function renderDots() {
  const g = svgEl("g", { id: "dots-group" }, svg);
  SECTORS.forEach((d, i) => {
    const dot = svgEl("g", { class: "dot enter", "data-name": d.name }, g);

    const cx = xScale(d.x);
    const cy = yScale(d.y);
    const r = rScale(d.value);

    const c = svgEl("circle", {
      cx, cy, r,
      fill: d.color === "blue" ? COLOR.blue : COLOR.red,
      "fill-opacity": "0.72",
      stroke: "rgba(255,255,255,0.6)",
      "stroke-width": "0.8"
    }, dot);

    const label = svgEl("text", {
      x: cx + r + 4, y: cy + 4,
      class: "dot-label", text: `${d.name} ${d.value.toFixed(2)}`
    }, dot);

    dot.addEventListener("mouseenter", (e) => onHover(d, dot, e));
    dot.addEventListener("mousemove", (e) => moveTooltip(e));
    dot.addEventListener("mouseleave", () => onLeave(d, dot));
    dot.addEventListener("click", () => onClick(d, dot));
  });
}

function renderBars() {
  const g = svgEl("g", { id: "bars-group" }, svg);
  const innerH = VIEW.h - VIEW.pad.top - VIEW.pad.bottom;
  barLayout.forEach((d) => {
    const top = d.up ? d.by - d.bh : d.by;
    const bar = svgEl("rect", {
      x: d.bx, y: top, width: d.bw, height: d.bh,
      fill: d.color === "blue" ? COLOR.blue : COLOR.red,
      "fill-opacity": "0.78",
      rx: 2,
      class: "dot enter",
      "data-name": d.name
    }, g);

    const labelY = d.up ? top - 6 : d.by + 16;
    svgEl("text", {
      x: d.bx + d.bw / 2, y: labelY,
      "text-anchor": "middle", class: "dot-label",
      text: `${d.name} ${d.value.toFixed(2)}`
    }, g);

    bar.addEventListener("mouseenter", (e) => onHover(d, bar, e));
    bar.addEventListener("mousemove", (e) => moveTooltip(e));
    bar.addEventListener("mouseleave", () => onLeave(d, bar));
    bar.addEventListener("click", () => onClick(d, bar));
  });

  // 0 基准线
  svgEl("line", {
    x1: VIEW.pad.left, y1: yScale(0.50),
    x2: VIEW.w - VIEW.pad.right, y2: yScale(0.50),
    class: "axis-line"
  }, g);
}

function clearChart() {
  // 保留 axes 和 date tag，只清点
  const d1 = svg.querySelector("#dots-group");
  if (d1) d1.remove();
  const d2 = svg.querySelector("#bars-group");
  if (d2) d2.remove();
  tooltip.classList.remove("show");
  state.current = null;
}

function render() {
  clearChart();
  renderAxes();
  if (state.view === "scatter") {
    renderDots();
  } else {
    computeBarLayout();
    renderBars();
  }
  if (state.enterPlayed) playEnter();
  applyFilter();
}

// 入场动画：点从中心放大出现
function playEnter() {
  const dots = svg.querySelectorAll(".dot.enter");
  const cx0 = VIEW.w / 2;
  const cy0 = VIEW.h / 2;
  dots.forEach((d, i) => {
    const c = d.querySelector("circle, rect");
    if (!c) return;
    // 记录目标位置
    let tx = 0, ty = 0;
    if (c.tagName === "circle") {
      tx = parseFloat(c.getAttribute("cx")) - cx0;
      ty = parseFloat(c.getAttribute("cy")) - cy0;
    }
    // 初始位移
    c.style.transition = "none";
    c.style.transformOrigin = "center";
    if (c.tagName === "circle") {
      c.setAttribute("cx", cx0);
      c.setAttribute("cy", cy0);
    } else {
      c.setAttribute("x", cx0);
      c.setAttribute("y", cy0);
      c.setAttribute("width", 0);
      c.setAttribute("height", 0);
    }
    c.style.opacity = "0";
    // 强制 reflow
    void c.getBoundingClientRect();
    // 过渡到目标
    setTimeout(() => {
      c.style.transition = "all .65s cubic-bezier(.22,.9,.3,1.2)";
      if (c.tagName === "circle") {
        c.setAttribute("cx", cx0 + tx);
        c.setAttribute("cy", cy0 + ty);
      } else {
        const d = barLayout.find(b => b.name === d.dataset.name);
        c.setAttribute("x", d.bx);
        c.setAttribute("y", d.up ? d.by - d.bh : d.by);
        c.setAttribute("width", d.bw);
        c.setAttribute("height", d.bh);
      }
      c.style.opacity = "0.78";
    }, 30 + i * 25);
  });

  // 文字淡入
  setTimeout(() => {
    svg.querySelectorAll(".dot-label").forEach((lab, i) => {
      lab.style.transition = "opacity .3s ease";
      lab.style.opacity = "0.75";
    });
  }, 600);
}

// 强弱过滤
function applyFilter() {
  const minY = state.filter;
  if (state.view === "scatter") {
    SECTORS.forEach(d => {
      const el = svg.querySelector(`.dot[data-name="${d.name}"]`);
      if (!el) return;
      if (d.y < minY) el.classList.add("faded");
      else el.classList.remove("faded");
    });
  } else {
    barLayout.forEach(d => {
      const el = svg.querySelector(`.dot[data-name="${d.name}"]`);
      if (!el) return;
      if (d.y < minY) el.classList.add("faded");
      else el.classList.remove("faded");
    });
  }
}

// hover / tooltip
function onHover(d, el, e) {
  applyFilter();
  // 高亮其他
  svg.querySelectorAll(".dot").forEach(o => {
    if (o !== el) o.classList.add("faded");
  });
  el.classList.add("active");
  el.classList.remove("faded");
  state.current = d;

  const up = d.value >= 0;
  tooltip.innerHTML = `
    <div class="tt-name">${d.name}</div>
    <div class="tt-row"><span>波动性</span><b>${d.x.toFixed(3)}</b></div>
    <div class="tt-row"><span>强弱势级</span><b>${d.y.toFixed(3)}</b></div>
    <div class="tt-row"><span>涨跌幅</span><b class="${up ? 'tt-up' : 'tt-down'}">${up ? '+' : ''}${d.value.toFixed(2)}%</b></div>
  `;
  tooltip.classList.add("show");
  moveTooltip(e);
}

function onLeave(d, el) {
  el.classList.remove("active");
  svg.querySelectorAll(".dot").forEach(o => o.classList.remove("faded"));
  applyFilter();
  tooltip.classList.remove("show");
  state.current = null;
}

function onClick(d, el) {
  // 切换 active
  if (el.classList.contains("active")) {
    onLeave(d, el);
  } else {
    onHover(d, el, { clientX: el.getBoundingClientRect().left, clientY: el.getBoundingClientRect().top });
  }
}

function moveTooltip(e) {
  const area = document.querySelector(".chart-area").getBoundingClientRect();
  const x = e.clientX - area.left;
  const y = e.clientY - area.top;
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

// 视图切换
const btnScatter = document.getElementById("btn-scatter");
const btnBar = document.getElementById("btn-bar");
btnScatter.addEventListener("click", () => {
  state.view = "scatter";
  btnScatter.classList.add("active");
  btnBar.classList.remove("active");
  render();
});
btnBar.addEventListener("click", () => {
  state.view = "bar";
  btnBar.classList.add("active");
  btnScatter.classList.remove("active");
  render();
});

// 强弱过滤
const range = document.getElementById("strength-filter");
const rangeValue = document.getElementById("strength-value");
range.addEventListener("input", () => {
  state.filter = parseFloat(range.value);
  rangeValue.textContent = `≥ ${state.filter.toFixed(2)}`;
  applyFilter();
});

// 重播
const btnReplay = document.getElementById("btn-replay");
btnReplay.addEventListener("click", () => {
  // 重新触发入场动画
  const dots = svg.querySelectorAll(".dot");
  dots.forEach(d => {
    const c = d.querySelector("circle, rect");
    if (!c) return;
    c.style.transition = "none";
    if (c.tagName === "circle") {
      c.setAttribute("cx", VIEW.w / 2);
      c.setAttribute("cy", VIEW.h / 2);
    } else {
      c.setAttribute("x", VIEW.w / 2);
      c.setAttribute("y", VIEW.h / 2);
      c.setAttribute("width", 0);
      c.setAttribute("height", 0);
    }
    c.style.opacity = "0";
  });
  svg.querySelectorAll(".dot-label").forEach(lab => lab.style.opacity = "0");
  void svg.getBoundingClientRect();
  setTimeout(playEnter, 50);
});

// 启动
render();
state.enterPlayed = true;
setTimeout(playEnter, 100);
