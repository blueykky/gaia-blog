/* 自动生成文件 —— 由 tools/build-data.py 从 data/sector-db.json 生成，请勿手改 */
/* 修改数据请编辑 data/sector-db.json 后重新运行生成脚本 */
window.SECTOR_DB = {
  "meta": {
    "name": "行业强弱分布数据库",
    "description": "每次收到新图后：1) 把日期、行业、坐标、甜品度、颜色记录进 dates.{date}；2) 运行 tools/build-data.py 重新生成 js/sector-data.js；3) git 提交部署。行业集合固定 31 个，每个日期不得缺失。坐标按每日期图中实际位置记录（不同日期同一行业坐标可能略不同）。",
    "industryCount": 31,
    "lastUpdated": "2026-08-12",
    "coordinateNote": "x=波动性, y=强弱势级（按图中实际位置）",
    "dataNote": "value=甜品度（纯数字）, color=blue/red, cont 由 |value| 自动计算"
  },
  "industries": [
    "通信",
    "电子",
    "有色金属",
    "公用事业",
    "银行",
    "建筑材料",
    "基础化工",
    "电力设备",
    "机械设备",
    "家用电器",
    "环保",
    "建筑装饰",
    "房地产",
    "交通运输",
    "非银金融",
    "医药生物",
    "煤炭",
    "食品饮料",
    "纺织服饰",
    "轻工制造",
    "石油石化",
    "传媒",
    "国防军工",
    "计算机",
    "汽车",
    "社会服务",
    "美容护理",
    "农林牧渔",
    "商贸零售",
    "钢铁",
    "综合"
  ],
  "dates": {
    "2026-08-12": [
      {
        "name": "通信",
        "x": 0.233,
        "y": 0.583,
        "value": 2.79,
        "color": "blue",
        "cont": 9.3
      },
      {
        "name": "电子",
        "x": 0.247,
        "y": 0.625,
        "value": 3.24,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.262,
        "y": 0.575,
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      {
        "name": "公用事业",
        "x": 0.278,
        "y": 0.575,
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      {
        "name": "银行",
        "x": 0.26,
        "y": 0.555,
        "value": 0.14,
        "color": "blue",
        "cont": 0.5
      },
      {
        "name": "建筑材料",
        "x": 0.165,
        "y": 0.575,
        "value": 0.45,
        "color": "red",
        "cont": 1.5
      },
      {
        "name": "基础化工",
        "x": 0.182,
        "y": 0.56,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.56,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "机械设备",
        "x": 0.273,
        "y": 0.555,
        "value": 0.08,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "家用电器",
        "x": 0.11,
        "y": 0.555,
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.54,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "建筑装饰",
        "x": 0.143,
        "y": 0.51,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "房地产",
        "x": 0.155,
        "y": 0.515,
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      {
        "name": "交通运输",
        "x": 0.18,
        "y": 0.515,
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.515,
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      {
        "name": "医药生物",
        "x": 0.26,
        "y": 0.545,
        "value": 0.45,
        "color": "red",
        "cont": 1.5
      },
      {
        "name": "煤炭",
        "x": 0.26,
        "y": 0.535,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "食品饮料",
        "x": 0.165,
        "y": 0.495,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "纺织服饰",
        "x": 0.115,
        "y": 0.49,
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.49,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "石油石化",
        "x": 0.195,
        "y": 0.48,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "传媒",
        "x": 0.18,
        "y": 0.48,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "国防军工",
        "x": 0.215,
        "y": 0.485,
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      },
      {
        "name": "计算机",
        "x": 0.16,
        "y": 0.49,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.45,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "社会服务",
        "x": 0.16,
        "y": 0.43,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "美容护理",
        "x": 0.2,
        "y": 0.455,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "农林牧渔",
        "x": 0.2,
        "y": 0.425,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      {
        "name": "商贸零售",
        "x": 0.135,
        "y": 0.4,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "钢铁",
        "x": 0.17,
        "y": 0.41,
        "value": -2.6,
        "color": "blue",
        "cont": 8.7
      },
      {
        "name": "综合",
        "x": 0.135,
        "y": 0.305,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      }
    ],
    "2026-08-11": [
      {
        "name": "通信",
        "x": 0.23,
        "y": 0.583,
        "value": 2.47,
        "color": "blue",
        "cont": 8.2
      },
      {
        "name": "电子",
        "x": 0.25,
        "y": 0.64,
        "value": 3.09,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.236,
        "y": 0.575,
        "value": -0.8,
        "color": "red",
        "cont": 2.7
      },
      {
        "name": "公用事业",
        "x": 0.255,
        "y": 0.58,
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      {
        "name": "银行",
        "x": 0.247,
        "y": 0.56,
        "value": 0.37,
        "color": "blue",
        "cont": 1.2
      },
      {
        "name": "建筑材料",
        "x": 0.204,
        "y": 0.56,
        "value": 0.43,
        "color": "red",
        "cont": 1.4
      },
      {
        "name": "基础化工",
        "x": 0.186,
        "y": 0.56,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.56,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "机械设备",
        "x": 0.235,
        "y": 0.555,
        "value": -0.0,
        "color": "blue",
        "cont": 0.0
      },
      {
        "name": "家用电器",
        "x": 0.12,
        "y": 0.555,
        "value": 0.04,
        "color": "red",
        "cont": 0.1
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.545,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "建筑装饰",
        "x": 0.143,
        "y": 0.51,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "房地产",
        "x": 0.16,
        "y": 0.513,
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      {
        "name": "交通运输",
        "x": 0.182,
        "y": 0.51,
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.51,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "医药生物",
        "x": 0.243,
        "y": 0.535,
        "value": 0.53,
        "color": "red",
        "cont": 1.8
      },
      {
        "name": "煤炭",
        "x": 0.265,
        "y": 0.53,
        "value": 0.29,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "食品饮料",
        "x": 0.172,
        "y": 0.495,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "纺织服饰",
        "x": 0.116,
        "y": 0.49,
        "value": -0.6,
        "color": "red",
        "cont": 2.0
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.49,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "石油石化",
        "x": 0.198,
        "y": 0.48,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "传媒",
        "x": 0.178,
        "y": 0.475,
        "value": -1.2,
        "color": "red",
        "cont": 4.0
      },
      {
        "name": "国防军工",
        "x": 0.218,
        "y": 0.48,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      {
        "name": "计算机",
        "x": 0.162,
        "y": 0.49,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.45,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "社会服务",
        "x": 0.156,
        "y": 0.43,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "美容护理",
        "x": 0.196,
        "y": 0.455,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "农林牧渔",
        "x": 0.202,
        "y": 0.425,
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      },
      {
        "name": "商贸零售",
        "x": 0.137,
        "y": 0.4,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "钢铁",
        "x": 0.168,
        "y": 0.41,
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      {
        "name": "综合",
        "x": 0.133,
        "y": 0.305,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      }
    ],
    "2026-08-07": [
      {
        "name": "通信",
        "x": 0.237,
        "y": 0.585,
        "value": 2.92,
        "color": "blue",
        "cont": 9.7
      },
      {
        "name": "电子",
        "x": 0.25,
        "y": 0.64,
        "value": 3.28,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.236,
        "y": 0.575,
        "value": -0.6,
        "color": "red",
        "cont": 2.0
      },
      {
        "name": "公用事业",
        "x": 0.255,
        "y": 0.58,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "银行",
        "x": 0.247,
        "y": 0.56,
        "value": 0.24,
        "color": "blue",
        "cont": 0.8
      },
      {
        "name": "建筑材料",
        "x": 0.204,
        "y": 0.56,
        "value": 0.47,
        "color": "red",
        "cont": 1.6
      },
      {
        "name": "基础化工",
        "x": 0.186,
        "y": 0.56,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.56,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "机械设备",
        "x": 0.233,
        "y": 0.555,
        "value": 0.03,
        "color": "blue",
        "cont": 0.1
      },
      {
        "name": "家用电器",
        "x": 0.12,
        "y": 0.555,
        "value": -0.0,
        "color": "red",
        "cont": 0.0
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.545,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      {
        "name": "建筑装饰",
        "x": 0.143,
        "y": 0.51,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "房地产",
        "x": 0.16,
        "y": 0.513,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "交通运输",
        "x": 0.182,
        "y": 0.51,
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.51,
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      {
        "name": "医药生物",
        "x": 0.243,
        "y": 0.535,
        "value": 0.33,
        "color": "red",
        "cont": 1.1
      },
      {
        "name": "煤炭",
        "x": 0.265,
        "y": 0.53,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "食品饮料",
        "x": 0.172,
        "y": 0.495,
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      {
        "name": "纺织服饰",
        "x": 0.116,
        "y": 0.49,
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.49,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "石油石化",
        "x": 0.198,
        "y": 0.48,
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      {
        "name": "传媒",
        "x": 0.178,
        "y": 0.475,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "国防军工",
        "x": 0.218,
        "y": 0.48,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      {
        "name": "计算机",
        "x": 0.162,
        "y": 0.49,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.45,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "社会服务",
        "x": 0.156,
        "y": 0.43,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "美容护理",
        "x": 0.196,
        "y": 0.455,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "农林牧渔",
        "x": 0.202,
        "y": 0.425,
        "value": -1.9,
        "color": "blue",
        "cont": 6.3
      },
      {
        "name": "商贸零售",
        "x": 0.137,
        "y": 0.4,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "钢铁",
        "x": 0.168,
        "y": 0.41,
        "value": -2.6,
        "color": "blue",
        "cont": 8.7
      },
      {
        "name": "综合",
        "x": 0.133,
        "y": 0.305,
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      }
    ],
    "2026-08-05": [
      {
        "name": "通信",
        "x": 0.237,
        "y": 0.585,
        "value": 2.63,
        "color": "blue",
        "cont": 8.8
      },
      {
        "name": "电子",
        "x": 0.25,
        "y": 0.64,
        "value": 2.77,
        "color": "blue",
        "cont": 9.2
      },
      {
        "name": "有色金属",
        "x": 0.236,
        "y": 0.575,
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      {
        "name": "公用事业",
        "x": 0.255,
        "y": 0.58,
        "value": -0.2,
        "color": "blue",
        "cont": 0.7
      },
      {
        "name": "银行",
        "x": 0.247,
        "y": 0.56,
        "value": 0.4,
        "color": "blue",
        "cont": 1.3
      },
      {
        "name": "建筑材料",
        "x": 0.204,
        "y": 0.56,
        "value": 0.0,
        "color": "red",
        "cont": 0.0
      },
      {
        "name": "基础化工",
        "x": 0.186,
        "y": 0.56,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.56,
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      {
        "name": "机械设备",
        "x": 0.233,
        "y": 0.555,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "家用电器",
        "x": 0.12,
        "y": 0.555,
        "value": 0.16,
        "color": "red",
        "cont": 0.5
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.545,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "建筑装饰",
        "x": 0.143,
        "y": 0.51,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      {
        "name": "房地产",
        "x": 0.16,
        "y": 0.513,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      {
        "name": "交通运输",
        "x": 0.182,
        "y": 0.51,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.51,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "医药生物",
        "x": 0.243,
        "y": 0.535,
        "value": 0.3,
        "color": "red",
        "cont": 1.0
      },
      {
        "name": "煤炭",
        "x": 0.265,
        "y": 0.53,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "食品饮料",
        "x": 0.172,
        "y": 0.495,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "纺织服饰",
        "x": 0.116,
        "y": 0.49,
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.49,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "石油石化",
        "x": 0.198,
        "y": 0.48,
        "value": -2.1,
        "color": "blue",
        "cont": 7.0
      },
      {
        "name": "传媒",
        "x": 0.178,
        "y": 0.475,
        "value": -1.0,
        "color": "red",
        "cont": 3.3
      },
      {
        "name": "国防军工",
        "x": 0.218,
        "y": 0.48,
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      {
        "name": "计算机",
        "x": 0.162,
        "y": 0.49,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.45,
        "value": -1.3,
        "color": "blue",
        "cont": 4.3
      },
      {
        "name": "社会服务",
        "x": 0.156,
        "y": 0.43,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "美容护理",
        "x": 0.196,
        "y": 0.455,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "农林牧渔",
        "x": 0.202,
        "y": 0.425,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "商贸零售",
        "x": 0.137,
        "y": 0.4,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "钢铁",
        "x": 0.168,
        "y": 0.41,
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      {
        "name": "综合",
        "x": 0.133,
        "y": 0.305,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      }
    ],
    "2026-07-24": [
      {
        "name": "通信",
        "x": 0.239,
        "y": 0.615,
        "value": 3.67,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.247,
        "y": 0.665,
        "value": 3.19,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.265,
        "y": 0.575,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "公用事业",
        "x": 0.282,
        "y": 0.615,
        "value": 0.78,
        "color": "red",
        "cont": 2.6
      },
      {
        "name": "银行",
        "x": 0.273,
        "y": 0.575,
        "value": 0.89,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "建筑材料",
        "x": 0.188,
        "y": 0.61,
        "value": -0.2,
        "color": "blue",
        "cont": 0.7
      },
      {
        "name": "基础化工",
        "x": 0.184,
        "y": 0.585,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "电力设备",
        "x": 0.18,
        "y": 0.55,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "机械设备",
        "x": 0.243,
        "y": 0.565,
        "value": 0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "家用电器",
        "x": 0.117,
        "y": 0.555,
        "value": -0.2,
        "color": "red",
        "cont": 0.7
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.58,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "建筑装饰",
        "x": 0.132,
        "y": 0.515,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "房地产",
        "x": 0.162,
        "y": 0.465,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "交通运输",
        "x": 0.176,
        "y": 0.53,
        "value": -0.4,
        "color": "red",
        "cont": 1.3
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.505,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "医药生物",
        "x": 0.235,
        "y": 0.51,
        "value": -0.2,
        "color": "blue",
        "cont": 0.7
      },
      {
        "name": "煤炭",
        "x": 0.278,
        "y": 0.56,
        "value": 1.34,
        "color": "red",
        "cont": 4.5
      },
      {
        "name": "食品饮料",
        "x": 0.172,
        "y": 0.45,
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      {
        "name": "纺织服饰",
        "x": 0.137,
        "y": 0.46,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "轻工制造",
        "x": 0.1,
        "y": 0.48,
        "value": -2.2,
        "color": "blue",
        "cont": 7.3
      },
      {
        "name": "石油石化",
        "x": 0.204,
        "y": 0.515,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "传媒",
        "x": 0.196,
        "y": 0.42,
        "value": -3.5,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "国防军工",
        "x": 0.213,
        "y": 0.515,
        "value": 0.0,
        "color": "red",
        "cont": 0.0
      },
      {
        "name": "计算机",
        "x": 0.158,
        "y": 0.44,
        "value": -1.9,
        "color": "red",
        "cont": 6.3
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.445,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "社会服务",
        "x": 0.113,
        "y": 0.39,
        "value": -2.5,
        "color": "blue",
        "cont": 8.3
      },
      {
        "name": "美容护理",
        "x": 0.209,
        "y": 0.42,
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      {
        "name": "农林牧渔",
        "x": 0.231,
        "y": 0.435,
        "value": -1.2,
        "color": "red",
        "cont": 4.0
      },
      {
        "name": "商贸零售",
        "x": 0.128,
        "y": 0.355,
        "value": -2.6,
        "color": "red",
        "cont": 8.7
      },
      {
        "name": "钢铁",
        "x": 0.215,
        "y": 0.445,
        "value": -1.7,
        "color": "blue",
        "cont": 5.7
      },
      {
        "name": "综合",
        "x": 0.133,
        "y": 0.33,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      }
    ],
    "2026-07-23": [
      {
        "name": "通信",
        "x": 0.237,
        "y": 0.61,
        "value": 3.7,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.247,
        "y": 0.665,
        "value": 3.13,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.262,
        "y": 0.575,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "公用事业",
        "x": 0.282,
        "y": 0.61,
        "value": 0.89,
        "color": "red",
        "cont": 3.0
      },
      {
        "name": "银行",
        "x": 0.276,
        "y": 0.575,
        "value": 0.69,
        "color": "blue",
        "cont": 2.3
      },
      {
        "name": "建筑材料",
        "x": 0.186,
        "y": 0.61,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "基础化工",
        "x": 0.182,
        "y": 0.585,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.55,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "机械设备",
        "x": 0.243,
        "y": 0.555,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "家用电器",
        "x": 0.117,
        "y": 0.555,
        "value": -0.2,
        "color": "red",
        "cont": 0.7
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.575,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "建筑装饰",
        "x": 0.139,
        "y": 0.515,
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "房地产",
        "x": 0.162,
        "y": 0.47,
        "value": -1.6,
        "color": "red",
        "cont": 5.3
      },
      {
        "name": "交通运输",
        "x": 0.178,
        "y": 0.53,
        "value": -0.5,
        "color": "red",
        "cont": 1.7
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.505,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "医药生物",
        "x": 0.263,
        "y": 0.52,
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      {
        "name": "煤炭",
        "x": 0.278,
        "y": 0.56,
        "value": 1.37,
        "color": "red",
        "cont": 4.6
      },
      {
        "name": "食品饮料",
        "x": 0.174,
        "y": 0.45,
        "value": -1.0,
        "color": "red",
        "cont": 3.3
      },
      {
        "name": "纺织服饰",
        "x": 0.135,
        "y": 0.46,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "轻工制造",
        "x": 0.1,
        "y": 0.48,
        "value": -2.2,
        "color": "blue",
        "cont": 7.3
      },
      {
        "name": "石油石化",
        "x": 0.2,
        "y": 0.515,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "传媒",
        "x": 0.196,
        "y": 0.42,
        "value": -3.4,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "国防军工",
        "x": 0.213,
        "y": 0.51,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "计算机",
        "x": 0.158,
        "y": 0.44,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "汽车",
        "x": 0.15,
        "y": 0.445,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "社会服务",
        "x": 0.113,
        "y": 0.39,
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      {
        "name": "美容护理",
        "x": 0.211,
        "y": 0.42,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "农林牧渔",
        "x": 0.233,
        "y": 0.435,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "商贸零售",
        "x": 0.13,
        "y": 0.35,
        "value": -2.5,
        "color": "red",
        "cont": 8.3
      },
      {
        "name": "钢铁",
        "x": 0.215,
        "y": 0.445,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      {
        "name": "综合",
        "x": 0.131,
        "y": 0.33,
        "value": -1.3,
        "color": "blue",
        "cont": 4.3
      }
    ],
    "2026-07-09": [
      {
        "name": "通信",
        "x": 0.245,
        "y": 0.625,
        "value": 4.34,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.249,
        "y": 0.685,
        "value": 4.7,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.275,
        "y": 0.58,
        "value": -3.1,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "公用事业",
        "x": 0.282,
        "y": 0.61,
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      {
        "name": "银行",
        "x": 0.267,
        "y": 0.56,
        "value": -0.3,
        "color": "red",
        "cont": 1.0
      },
      {
        "name": "建筑材料",
        "x": 0.186,
        "y": 0.63,
        "value": 1.13,
        "color": "red",
        "cont": 3.8
      },
      {
        "name": "基础化工",
        "x": 0.182,
        "y": 0.605,
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      {
        "name": "电力设备",
        "x": 0.175,
        "y": 0.555,
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      {
        "name": "机械设备",
        "x": 0.241,
        "y": 0.6,
        "value": 0.91,
        "color": "blue",
        "cont": 3.0
      },
      {
        "name": "家用电器",
        "x": 0.119,
        "y": 0.54,
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      {
        "name": "环保",
        "x": 0.14,
        "y": 0.595,
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      {
        "name": "建筑装饰",
        "x": 0.13,
        "y": 0.515,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "房地产",
        "x": 0.158,
        "y": 0.46,
        "value": -2.3,
        "color": "red",
        "cont": 7.7
      },
      {
        "name": "交通运输",
        "x": 0.178,
        "y": 0.515,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "非银金融",
        "x": 0.2,
        "y": 0.51,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "医药生物",
        "x": 0.263,
        "y": 0.47,
        "value": -1.2,
        "color": "red",
        "cont": 4.0
      },
      {
        "name": "煤炭",
        "x": 0.278,
        "y": 0.56,
        "value": 0.06,
        "color": "blue",
        "cont": 0.2
      },
      {
        "name": "食品饮料",
        "x": 0.166,
        "y": 0.455,
        "value": -2.5,
        "color": "red",
        "cont": 8.3
      },
      {
        "name": "纺织服饰",
        "x": 0.162,
        "y": 0.475,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.495,
        "value": -2.1,
        "color": "blue",
        "cont": 7.0
      },
      {
        "name": "石油石化",
        "x": 0.204,
        "y": 0.52,
        "value": -2.1,
        "color": "blue",
        "cont": 7.0
      },
      {
        "name": "传媒",
        "x": 0.196,
        "y": 0.415,
        "value": -3.5,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "国防军工",
        "x": 0.215,
        "y": 0.5,
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "计算机",
        "x": 0.176,
        "y": 0.455,
        "value": -2.0,
        "color": "red",
        "cont": 6.7
      },
      {
        "name": "汽车",
        "x": 0.137,
        "y": 0.44,
        "value": -1.9,
        "color": "blue",
        "cont": 6.3
      },
      {
        "name": "社会服务",
        "x": 0.115,
        "y": 0.395,
        "value": -2.7,
        "color": "blue",
        "cont": 9.0
      },
      {
        "name": "美容护理",
        "x": 0.155,
        "y": 0.41,
        "value": -2.9,
        "color": "blue",
        "cont": 9.7
      },
      {
        "name": "农林牧渔",
        "x": 0.235,
        "y": 0.435,
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      {
        "name": "商贸零售",
        "x": 0.111,
        "y": 0.33,
        "value": -3.7,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "钢铁",
        "x": 0.225,
        "y": 0.445,
        "value": -2.7,
        "color": "blue",
        "cont": 9.0
      },
      {
        "name": "综合",
        "x": 0.133,
        "y": 0.33,
        "value": 0.53,
        "color": "blue",
        "cont": 1.8
      }
    ],
    "2026-06-29": [
      {
        "name": "通信",
        "x": 0.237,
        "y": 0.645,
        "value": 4.62,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.247,
        "y": 0.665,
        "value": 4.48,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.28,
        "y": 0.61,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "公用事业",
        "x": 0.284,
        "y": 0.625,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "银行",
        "x": 0.267,
        "y": 0.545,
        "value": -0.8,
        "color": "red",
        "cont": 2.7
      },
      {
        "name": "建筑材料",
        "x": 0.182,
        "y": 0.65,
        "value": 2.98,
        "color": "red",
        "cont": 9.9
      },
      {
        "name": "基础化工",
        "x": 0.178,
        "y": 0.62,
        "value": -0.2,
        "color": "blue",
        "cont": 0.7
      },
      {
        "name": "电力设备",
        "x": 0.121,
        "y": 0.625,
        "value": -0.5,
        "color": "red",
        "cont": 1.7
      },
      {
        "name": "机械设备",
        "x": 0.243,
        "y": 0.625,
        "value": 0.64,
        "color": "blue",
        "cont": 2.1
      },
      {
        "name": "家用电器",
        "x": 0.13,
        "y": 0.53,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "环保",
        "x": 0.117,
        "y": 0.605,
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      {
        "name": "建筑装饰",
        "x": 0.138,
        "y": 0.53,
        "value": -1.2,
        "color": "red",
        "cont": 4.0
      },
      {
        "name": "房地产",
        "x": 0.162,
        "y": 0.465,
        "value": -2.3,
        "color": "blue",
        "cont": 7.7
      },
      {
        "name": "交通运输",
        "x": 0.202,
        "y": 0.515,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "非银金融",
        "x": 0.225,
        "y": 0.475,
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      {
        "name": "医药生物",
        "x": 0.198,
        "y": 0.44,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "煤炭",
        "x": 0.276,
        "y": 0.56,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "食品饮料",
        "x": 0.194,
        "y": 0.43,
        "value": -2.3,
        "color": "blue",
        "cont": 7.7
      },
      {
        "name": "纺织服饰",
        "x": 0.113,
        "y": 0.47,
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.505,
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      {
        "name": "石油石化",
        "x": 0.206,
        "y": 0.55,
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      {
        "name": "传媒",
        "x": 0.221,
        "y": 0.42,
        "value": -3.6,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "国防军工",
        "x": 0.263,
        "y": 0.48,
        "value": -2.1,
        "color": "red",
        "cont": 7.0
      },
      {
        "name": "计算机",
        "x": 0.158,
        "y": 0.43,
        "value": -2.8,
        "color": "red",
        "cont": 9.3
      },
      {
        "name": "汽车",
        "x": 0.141,
        "y": 0.44,
        "value": -2.8,
        "color": "blue",
        "cont": 9.3
      },
      {
        "name": "社会服务",
        "x": 0.137,
        "y": 0.41,
        "value": -2.9,
        "color": "blue",
        "cont": 9.7
      },
      {
        "name": "美容护理",
        "x": 0.133,
        "y": 0.385,
        "value": -3.3,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "农林牧渔",
        "x": 0.225,
        "y": 0.435,
        "value": -2.8,
        "color": "red",
        "cont": 9.3
      },
      {
        "name": "商贸零售",
        "x": 0.109,
        "y": 0.31,
        "value": -4.0,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "钢铁",
        "x": 0.237,
        "y": 0.475,
        "value": -2.5,
        "color": "blue",
        "cont": 8.3
      },
      {
        "name": "综合",
        "x": 0.129,
        "y": 0.33,
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      }
    ],
    "2026-06-15": [
      {
        "name": "通信",
        "x": 0.245,
        "y": 0.625,
        "value": 4.61,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.249,
        "y": 0.67,
        "value": 3.27,
        "color": "red",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.271,
        "y": 0.625,
        "value": 0.03,
        "color": "blue",
        "cont": 0.1
      },
      {
        "name": "公用事业",
        "x": 0.285,
        "y": 0.625,
        "value": 0.43,
        "color": "red",
        "cont": 1.4
      },
      {
        "name": "银行",
        "x": 0.265,
        "y": 0.52,
        "value": -0.8,
        "color": "red",
        "cont": 2.7
      },
      {
        "name": "建筑材料",
        "x": 0.182,
        "y": 0.625,
        "value": 1.78,
        "color": "red",
        "cont": 5.9
      },
      {
        "name": "基础化工",
        "x": 0.182,
        "y": 0.605,
        "value": 0.06,
        "color": "red",
        "cont": 0.2
      },
      {
        "name": "电力设备",
        "x": 0.115,
        "y": 0.62,
        "value": 0.01,
        "color": "red",
        "cont": 0.0
      },
      {
        "name": "机械设备",
        "x": 0.197,
        "y": 0.625,
        "value": 1.06,
        "color": "red",
        "cont": 3.5
      },
      {
        "name": "家用电器",
        "x": 0.145,
        "y": 0.54,
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      {
        "name": "环保",
        "x": 0.124,
        "y": 0.615,
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      {
        "name": "建筑装饰",
        "x": 0.162,
        "y": 0.54,
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      {
        "name": "房地产",
        "x": 0.158,
        "y": 0.45,
        "value": -1.7,
        "color": "blue",
        "cont": 5.7
      },
      {
        "name": "交通运输",
        "x": 0.2,
        "y": 0.5,
        "value": -1.3,
        "color": "red",
        "cont": 4.3
      },
      {
        "name": "非银金融",
        "x": 0.196,
        "y": 0.485,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "医药生物",
        "x": 0.233,
        "y": 0.44,
        "value": -2.1,
        "color": "blue",
        "cont": 7.0
      },
      {
        "name": "煤炭",
        "x": 0.28,
        "y": 0.59,
        "value": 0.82,
        "color": "red",
        "cont": 2.7
      },
      {
        "name": "食品饮料",
        "x": 0.178,
        "y": 0.435,
        "value": -2.1,
        "color": "red",
        "cont": 7.0
      },
      {
        "name": "纺织服饰",
        "x": 0.141,
        "y": 0.46,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "轻工制造",
        "x": 0.105,
        "y": 0.505,
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      {
        "name": "石油石化",
        "x": 0.204,
        "y": 0.555,
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      {
        "name": "传媒",
        "x": 0.241,
        "y": 0.465,
        "value": -2.3,
        "color": "blue",
        "cont": 7.7
      },
      {
        "name": "国防军工",
        "x": 0.231,
        "y": 0.465,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "计算机",
        "x": 0.168,
        "y": 0.45,
        "value": -1.9,
        "color": "blue",
        "cont": 6.3
      },
      {
        "name": "汽车",
        "x": 0.137,
        "y": 0.45,
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      },
      {
        "name": "社会服务",
        "x": 0.133,
        "y": 0.42,
        "value": -1.8,
        "color": "red",
        "cont": 6.0
      },
      {
        "name": "美容护理",
        "x": 0.129,
        "y": 0.395,
        "value": -2.5,
        "color": "blue",
        "cont": 8.3
      },
      {
        "name": "农林牧渔",
        "x": 0.174,
        "y": 0.405,
        "value": -2.6,
        "color": "blue",
        "cont": 8.7
      },
      {
        "name": "商贸零售",
        "x": 0.125,
        "y": 0.325,
        "value": -3.0,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "钢铁",
        "x": 0.253,
        "y": 0.465,
        "value": -1.7,
        "color": "blue",
        "cont": 5.7
      },
      {
        "name": "综合",
        "x": 0.155,
        "y": 0.35,
        "value": 0.37,
        "color": "blue",
        "cont": 1.2
      }
    ],
    "2026-06-03": [
      {
        "name": "通信",
        "x": 0.245,
        "y": 0.605,
        "value": 4.14,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "电子",
        "x": 0.249,
        "y": 0.665,
        "value": 3.09,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "有色金属",
        "x": 0.269,
        "y": 0.625,
        "value": 0.57,
        "color": "red",
        "cont": 1.9
      },
      {
        "name": "公用事业",
        "x": 0.284,
        "y": 0.625,
        "value": 0.59,
        "color": "red",
        "cont": 2.0
      },
      {
        "name": "银行",
        "x": 0.265,
        "y": 0.465,
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      {
        "name": "建筑材料",
        "x": 0.18,
        "y": 0.605,
        "value": 1.11,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "基础化工",
        "x": 0.188,
        "y": 0.605,
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      {
        "name": "电力设备",
        "x": 0.119,
        "y": 0.64,
        "value": 0.3,
        "color": "red",
        "cont": 1.0
      },
      {
        "name": "机械设备",
        "x": 0.184,
        "y": 0.63,
        "value": 1.01,
        "color": "red",
        "cont": 3.4
      },
      {
        "name": "家用电器",
        "x": 0.13,
        "y": 0.54,
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      {
        "name": "环保",
        "x": 0.115,
        "y": 0.605,
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      {
        "name": "建筑装饰",
        "x": 0.138,
        "y": 0.54,
        "value": -0.8,
        "color": "red",
        "cont": 2.7
      },
      {
        "name": "房地产",
        "x": 0.158,
        "y": 0.46,
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      {
        "name": "交通运输",
        "x": 0.176,
        "y": 0.5,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "非银金融",
        "x": 0.189,
        "y": 0.505,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "医药生物",
        "x": 0.261,
        "y": 0.445,
        "value": -2.1,
        "color": "red",
        "cont": 7.0
      },
      {
        "name": "煤炭",
        "x": 0.28,
        "y": 0.545,
        "value": 1.42,
        "color": "red",
        "cont": 4.7
      },
      {
        "name": "食品饮料",
        "x": 0.196,
        "y": 0.405,
        "value": -2.3,
        "color": "red",
        "cont": 7.7
      },
      {
        "name": "纺织服饰",
        "x": 0.139,
        "y": 0.465,
        "value": -1.3,
        "color": "blue",
        "cont": 4.3
      },
      {
        "name": "轻工制造",
        "x": 0.1,
        "y": 0.515,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "石油石化",
        "x": 0.204,
        "y": 0.565,
        "value": 0.2,
        "color": "red",
        "cont": 0.7
      },
      {
        "name": "传媒",
        "x": 0.274,
        "y": 0.46,
        "value": -1.6,
        "color": "red",
        "cont": 5.3
      },
      {
        "name": "国防军工",
        "x": 0.276,
        "y": 0.53,
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      {
        "name": "计算机",
        "x": 0.155,
        "y": 0.405,
        "value": -2.7,
        "color": "blue",
        "cont": 9.0
      },
      {
        "name": "汽车",
        "x": 0.162,
        "y": 0.47,
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      {
        "name": "社会服务",
        "x": 0.111,
        "y": 0.43,
        "value": -2.7,
        "color": "blue",
        "cont": 9.0
      },
      {
        "name": "美容护理",
        "x": 0.163,
        "y": 0.405,
        "value": -2.5,
        "color": "blue",
        "cont": 8.3
      },
      {
        "name": "农林牧渔",
        "x": 0.2,
        "y": 0.42,
        "value": -2.7,
        "color": "red",
        "cont": 9.0
      },
      {
        "name": "商贸零售",
        "x": 0.131,
        "y": 0.33,
        "value": -3.1,
        "color": "blue",
        "cont": 10.0
      },
      {
        "name": "钢铁",
        "x": 0.241,
        "y": 0.465,
        "value": -1.7,
        "color": "blue",
        "cont": 5.7
      },
      {
        "name": "综合",
        "x": 0.135,
        "y": 0.355,
        "value": 0.58,
        "color": "blue",
        "cont": 1.9
      }
    ]
  }
};
