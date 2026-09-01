(function () {
  "use strict";

  // 合成北大 · 合成链
  // 顺序 = 校友会 2025 中国大学排名（艾瑞深校友会，2025-01-06 发布），名次越靠后越小（起点），
  // 名次越靠前越大（终点）。北大 #1 为终极校徽。
  // 半径沿用原版 12 级递增数列；校徽 SVG 全部复用原版 assets/badges/，无新资源。
  //   #17 同济 → #15 西安交大 → #14 哈工大 → #12 人大 → #10 武大
  //   → #9 中科大 → #7 南大 → #6 上交 → #5 浙大 → #4 复旦 → #2 清华 → #1 北大
  window.MERGE_GAME_CONFIG = {
    id: "pku-demo",
    assetBase: "assets/badges/",
    spawnLevelCount: 5,

    ui: {
      title: "合成PKU",
      description: "高校校徽合成小游戏"
    },

    levels: [
      { radius: 13,  image: "tongji.svg" }, // 同济大学   校友会 #17
      { radius: 16,  image: "xjtu.svg"   }, // 西安交通大学 #15
      { radius: 20,  image: "hit.svg"    }, // 哈尔滨工业大学 #14
      { radius: 25,  image: "ruc.svg"    }, // 中国人民大学 #12
      { radius: 31,  image: "whu.svg"    }, // 武汉大学   #10
      { radius: 39,  image: "ustc.svg"   }, // 中国科学技术大学 #9
      { radius: 49,  image: "nju.svg"    }, // 南京大学   #7
      { radius: 61,  image: "sjtu.svg"   }, // 上海交通大学 #6
      { radius: 75,  image: "zju.svg"    }, // 浙江大学   #5
      { radius: 91,  image: "fdu.svg"    }, // 复旦大学   #4
      { radius: 109, image: "thu.svg"    }, // 清华大学   #2
      { radius: 129, image: "pku.svg"   }  // 北京大学   #1  ← 终点
    ]
  };
}());
