/* 自动生成文件 —— 由 tools/build-data.py 从 data/sector-db.json 生成，请勿手改 */
/* 修改数据请编辑 data/sector-db.json 后重新运行生成脚本 */
window.SECTOR_DB = {
  "meta": {
    "name": "行业强弱分布数据库",
    "description": "每次收到新图后：1) 把该日期各行业数据填入 dates 下的对应日期对象；2) 运行 tools/build-data.py 重新生成 js/sector-data.js；3) git 提交部署。行业集合固定为 industries 中的 31 个，每个日期都不得缺失。",
    "industryCount": 31,
    "lastUpdated": "2026-08-12",
    "coordinateNote": "x=波动性, y=强弱势级, 坐标跨日期固定",
    "dataNote": "value=甜品度（纯数字，非百分比）, color=blue/red, 连续性(cont)由 |value| 自动计算"
  },
  "industries": [
    {
      "name": "通信",
      "x": 0.23,
      "y": 0.583
    },
    {
      "name": "电子",
      "x": 0.25,
      "y": 0.64
    },
    {
      "name": "有色金属",
      "x": 0.236,
      "y": 0.575
    },
    {
      "name": "公用事业",
      "x": 0.255,
      "y": 0.58
    },
    {
      "name": "银行",
      "x": 0.245,
      "y": 0.56
    },
    {
      "name": "建筑材料",
      "x": 0.2,
      "y": 0.56
    },
    {
      "name": "基础化工",
      "x": 0.186,
      "y": 0.56
    },
    {
      "name": "电力设备",
      "x": 0.175,
      "y": 0.56
    },
    {
      "name": "机械设备",
      "x": 0.235,
      "y": 0.555
    },
    {
      "name": "家用电器",
      "x": 0.118,
      "y": 0.555
    },
    {
      "name": "环保",
      "x": 0.14,
      "y": 0.545
    },
    {
      "name": "建筑装饰",
      "x": 0.143,
      "y": 0.51
    },
    {
      "name": "房地产",
      "x": 0.158,
      "y": 0.513
    },
    {
      "name": "交通运输",
      "x": 0.18,
      "y": 0.51
    },
    {
      "name": "非银金融",
      "x": 0.2,
      "y": 0.51
    },
    {
      "name": "医药生物",
      "x": 0.245,
      "y": 0.535
    },
    {
      "name": "煤炭",
      "x": 0.265,
      "y": 0.53
    },
    {
      "name": "食品饮料",
      "x": 0.17,
      "y": 0.495
    },
    {
      "name": "纺织服饰",
      "x": 0.118,
      "y": 0.49
    },
    {
      "name": "轻工制造",
      "x": 0.105,
      "y": 0.49
    },
    {
      "name": "石油石化",
      "x": 0.198,
      "y": 0.48
    },
    {
      "name": "传媒",
      "x": 0.18,
      "y": 0.475
    },
    {
      "name": "国防军工",
      "x": 0.218,
      "y": 0.48
    },
    {
      "name": "计算机",
      "x": 0.16,
      "y": 0.49
    },
    {
      "name": "汽车",
      "x": 0.15,
      "y": 0.45
    },
    {
      "name": "社会服务",
      "x": 0.16,
      "y": 0.43
    },
    {
      "name": "美容护理",
      "x": 0.2,
      "y": 0.455
    },
    {
      "name": "农林牧渔",
      "x": 0.202,
      "y": 0.425
    },
    {
      "name": "商贸零售",
      "x": 0.135,
      "y": 0.4
    },
    {
      "name": "钢铁",
      "x": 0.17,
      "y": 0.41
    },
    {
      "name": "综合",
      "x": 0.135,
      "y": 0.305
    }
  ],
  "dates": {
    "2026-08-11": {
      "通信": {
        "value": 2.47,
        "color": "blue",
        "cont": 8.2
      },
      "电子": {
        "value": 3.09,
        "color": "blue",
        "cont": 10.0
      },
      "有色金属": {
        "value": -0.8,
        "color": "red",
        "cont": 2.7
      },
      "公用事业": {
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      "银行": {
        "value": 0.37,
        "color": "blue",
        "cont": 1.2
      },
      "建筑材料": {
        "value": 0.43,
        "color": "red",
        "cont": 1.4
      },
      "基础化工": {
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      "电力设备": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "机械设备": {
        "value": -0.0,
        "color": "blue",
        "cont": 0.0
      },
      "家用电器": {
        "value": 0.04,
        "color": "red",
        "cont": 0.1
      },
      "环保": {
        "value": -0.9,
        "color": "blue",
        "cont": 3.0
      },
      "建筑装饰": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "房地产": {
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      "交通运输": {
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      "非银金融": {
        "value": -0.3,
        "color": "blue",
        "cont": 1.0
      },
      "医药生物": {
        "value": 0.53,
        "color": "red",
        "cont": 1.8
      },
      "煤炭": {
        "value": 0.29,
        "color": "blue",
        "cont": 1.0
      },
      "食品饮料": {
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      "纺织服饰": {
        "value": -0.6,
        "color": "red",
        "cont": 2.0
      },
      "轻工制造": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "石油石化": {
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      "传媒": {
        "value": -1.2,
        "color": "red",
        "cont": 4.0
      },
      "国防军工": {
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      "计算机": {
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      "汽车": {
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      "社会服务": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "美容护理": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "农林牧渔": {
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      },
      "商贸零售": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "钢铁": {
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      "综合": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      }
    },
    "2026-08-07": {
      "通信": {
        "value": 2.92,
        "color": "blue",
        "cont": 9.7
      },
      "电子": {
        "value": 3.28,
        "color": "blue",
        "cont": 10.0
      },
      "有色金属": {
        "value": -0.6,
        "color": "red",
        "cont": 2.0
      },
      "公用事业": {
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      "银行": {
        "value": 0.24,
        "color": "blue",
        "cont": 0.8
      },
      "建筑材料": {
        "value": 0.47,
        "color": "red",
        "cont": 1.6
      },
      "基础化工": {
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      "电力设备": {
        "value": -1.2,
        "color": "blue",
        "cont": 4.0
      },
      "机械设备": {
        "value": 0.03,
        "color": "blue",
        "cont": 0.1
      },
      "家用电器": {
        "value": -0.0,
        "color": "red",
        "cont": 0.0
      },
      "环保": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      "建筑装饰": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "房地产": {
        "value": -1.1,
        "color": "red",
        "cont": 3.7
      },
      "交通运输": {
        "value": -0.7,
        "color": "blue",
        "cont": 2.3
      },
      "非银金融": {
        "value": -0.4,
        "color": "blue",
        "cont": 1.3
      },
      "医药生物": {
        "value": 0.33,
        "color": "red",
        "cont": 1.1
      },
      "煤炭": {
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      "食品饮料": {
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      "纺织服饰": {
        "value": -0.9,
        "color": "red",
        "cont": 3.0
      },
      "轻工制造": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "石油石化": {
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      "传媒": {
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      "国防军工": {
        "value": -1.8,
        "color": "blue",
        "cont": 6.0
      },
      "计算机": {
        "value": -1.1,
        "color": "blue",
        "cont": 3.7
      },
      "汽车": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "社会服务": {
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      "美容护理": {
        "value": -1.5,
        "color": "blue",
        "cont": 5.0
      },
      "农林牧渔": {
        "value": -1.9,
        "color": "blue",
        "cont": 6.3
      },
      "商贸零售": {
        "value": -1.7,
        "color": "red",
        "cont": 5.7
      },
      "钢铁": {
        "value": -2.6,
        "color": "blue",
        "cont": 8.7
      },
      "综合": {
        "value": -1.6,
        "color": "blue",
        "cont": 5.3
      }
    },
    "2026-08-05": {
      "通信": {
        "value": 2.63,
        "color": "blue",
        "cont": 8.8
      },
      "电子": {
        "value": 2.77,
        "color": "blue",
        "cont": 9.2
      },
      "有色金属": {
        "value": -0.1,
        "color": "red",
        "cont": 0.3
      },
      "公用事业": {
        "value": -0.2,
        "color": "blue",
        "cont": 0.7
      },
      "银行": {
        "value": 0.4,
        "color": "blue",
        "cont": 1.3
      },
      "建筑材料": {
        "value": 0.0,
        "color": "red",
        "cont": 0.0
      },
      "基础化工": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      "电力设备": {
        "value": -0.8,
        "color": "blue",
        "cont": 2.7
      },
      "机械设备": {
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      "家用电器": {
        "value": 0.16,
        "color": "red",
        "cont": 0.5
      },
      "环保": {
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      "建筑装饰": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      "房地产": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      },
      "交通运输": {
        "value": -0.6,
        "color": "blue",
        "cont": 2.0
      },
      "非银金融": {
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      "医药生物": {
        "value": 0.3,
        "color": "red",
        "cont": 1.0
      },
      "煤炭": {
        "value": -0.1,
        "color": "blue",
        "cont": 0.3
      },
      "食品饮料": {
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      "纺织服饰": {
        "value": -0.7,
        "color": "red",
        "cont": 2.3
      },
      "轻工制造": {
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      "石油石化": {
        "value": -2.1,
        "color": "blue",
        "cont": 7.0
      },
      "传媒": {
        "value": -1.0,
        "color": "red",
        "cont": 3.3
      },
      "国防军工": {
        "value": -2.0,
        "color": "blue",
        "cont": 6.7
      },
      "计算机": {
        "value": -0.5,
        "color": "blue",
        "cont": 1.7
      },
      "汽车": {
        "value": -1.3,
        "color": "blue",
        "cont": 4.3
      },
      "社会服务": {
        "value": -1.4,
        "color": "red",
        "cont": 4.7
      },
      "美容护理": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "农林牧渔": {
        "value": -1.4,
        "color": "blue",
        "cont": 4.7
      },
      "商贸零售": {
        "value": -1.5,
        "color": "red",
        "cont": 5.0
      },
      "钢铁": {
        "value": -2.4,
        "color": "blue",
        "cont": 8.0
      },
      "综合": {
        "value": -1.0,
        "color": "blue",
        "cont": 3.3
      }
    }
  }
};
