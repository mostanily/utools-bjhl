import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.铁杵磨成针菱形, MXLaohenEnum.霜汐共振], "attr": "shuang", "star": "6",
    "nameEn": "LABOLAS", "tag": ["输出", "控场"], "originWorld": "特默里恩", "orginChar": "原创",
    "cv": "", "openDate": "2025年05月08日", "resourse": ["定向共鸣·二分的狂徒"]
}

const Skill = [
    {
        "name": "剥荒",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "对空"],//技能标签
            "sizeLevel": [
                ["1440%"],
                ["1656%"],
                ["1872%"],
                ["2088%"],
                ["2304%"],
                ["2520%"],
                ["2736%"],
                ["2952%"],
                ["3168%"],
                ["3312%"],
                ["3456%"],
                ["3600%"],
                ["3744%"],
                ["3888%"],
                ["4032%"]
            ],
            "content": [
                "对矩形范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的霜元素伤害"),
                "。如果敌人处于",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "范围内，则额外触发一次持续",
                speSkillCon("3"),
                "秒的",
                speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
            ]//满级技能内容描述
        }
    },
    {
        "name": "直磨",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "10秒"], ["次数", "3"]],
            "tab": ["伤害", "负面状态", "对空"],
            "sizeLevel": [
                ["20%", "800%", "120%"],
                ["23%", "920%", "138%"],
                ["26%", "1040%", "156%"],
                ["29%", "1160%", "174%"],
                ["32%", "1280%", "192%"],
                ["35%", "1400%", "210%"],
                ["38%", "1520%", "228%"],
                ["41%", "1640%", "246%"],
                ["44%", "1760%", "264%"],
                ["46%", "1840%", "276%"],
                ["48%", "1920%", "288%"],
                ["50%", "2000%", "300%"],
                ["52%", "2080%", "312%"],
                ["54%", "2160%", "324%"],
                ["56%", "2240%", "336%"]
            ],
            "content": [
                "自动技能：",
                "",
                "每隔",
                speSkillCon("20"),
                "秒进入增益状态，持续",
                speSkillCon("15"),
                "秒。在持续时间内，提高自身的主动技能回复速度",
                speSkillCon("", 0, -1, 0),
                speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                "，且场上",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "造成伤害时使目标基础减伤降低",
                speSkillCon("40%"),
                speSkillCon("(目标减益乘区·目标基础减伤降低)", SkillColorEnum.injuries),
                "（该效果属于",
                speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                "），持续",
                speSkillCon("20"),
                "秒，编入队伍的同调者每有一个水或霜元素同调者（包含自己），此效果额外提高",
                speSkillCon("5%"),
                "，最多可以达到",
                speSkillCon("55%"),
                "。",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "重叠时，伤害可以叠加，融甲效果不可叠加。",
                "",
                "开场时自动技能充能增加80%",
                "",
                "",
                "主动技能：",
                "",
                "对目标半径",
                speSkillCon("250"),
                "范围的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的霜元素伤害"),
                "，并形成",
                speSkillCon("250"),
                "范围的",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "。当",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "存在时，每秒对区域内的敌人造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的霜元素伤害"),
            ]
        }
    },
    {
        "name": "锤刻之手",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "负面状态", "对空"],
            "sizeLevel": [
                ["2700%"],
                ["3150%"],
                ["3600%"],
                ["4050%"],
                ["4275%"],
                ["4500%"]
            ],
            "content": [
                "对目标",
                speSkillCon("500"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的霜元素伤害"),
                "，并形成",
                speSkillCon("500"),
                "范围",
                speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                "",
                "在潮湿环境下，直接形成霜元素区域",
                "",
                "战术家：开场充能50%"
            ]
        }
    },
    {
        "name": "特性：穿凿",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "对目标造成",
                speSkillCon("200%最终攻击的霜元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "施放【直磨】、【锤刻之手】时，能够在场上形成持续",
                    speSkillCon("15"),
                    "秒的",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "，最多可以同时存在",
                    speSkillCon("3"),
                    "个。每次产生",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "的时候，回复",
                    speSkillCon("3"),
                    "秒异核充能。敌人在进入",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "时，会触发持续",
                    speSkillCon("3"),
                    "秒的",
                    speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
                    "（如果敌人是空中单位，进入",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "时会被击落后再触发此效果）。",
                    "",
                    "当拉波离场或重伤时，场上所有的",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "消失。"
                ],//零花本体特性
                [
                    "进入自动状态时，如果场上存在",
                    speSkillCon("2"),
                    "名以上的水或霜元素同调者（包含自己），会直接在场上产生一个",
                    speSkillCon("300"),
                    "范围的",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "（优先精英及首领目标）。",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "区域内的敌人受到的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（目标减益乘区·目标受伤害增加）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加)
                ],//一花特性
                [
                    "每次产生",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "回复的异核充能翻倍。当场上存在",
                    speSkillConWithImg(SkillDescStatusImg.拉波重塑空间),
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "时，场上同调者额外攻击提高",
                    speSkillCon("45%"),
                    speSkillCon("（属性乘区·额外攻击力加成）", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "简与繁",
            "limit": "【默契值13级】",
            "tips": [
                "“好吵闹。”",
                "“我没在说话？”",
                "“我是指这杯白桃芝士奶盖一还有这一堆小料————吵到我的眼晴了。”"
            ],
            "recipe": [
                "淑女风尚",
                "白桃芝士奶盖",
                "双倍糖",
                "多冰",
                "青提",
                "白玉兰"
            ]
        },
        {
            "name": "罪与罚",
            "limit": "【默契值1级】",
            "tips": [
                "“我在乐园岛的文件里没有看到你的认罪书？”",
                "“他们是强制逮捕我的。时至今日，我也不认为我的所作所为是一种罪行。”",
                "监督将加了青梅的黑月亮推向拉波，神色平和，言语却尖锐。",
                "“哦？以我对你的了解，若你真觉得自己无罪，又怎么会老老实实在乐园岛认罚？”",
                "“罚？那可是我的乐园。”"
            ],
            "recipe": [
                "经典格纹",
                "黑月亮",
                "少冰",
                "盐",
                "青梅",
                "水果签"
            ]
        },
        {
            "name": "声与形",
            "limit": "【默契值1级】",
            "tips": [
                "“我听到了微风吹拂树叶的声音…你在准备玻璃橘子？”",
                "“静物也能被你听到？”",
                "“我只是听到了你的思绪————你准备不同的饮品时，思考的声音也不尽相同。”",
                "“白荆可有54种饮品啊。”",
                "“听得多了，自然能分辨出来。”"
            ],
            "recipe": [
                "鎏·金",
                "玻璃橘子",
                "少冰",
                "叶子冻",
                "迷迭香"
            ]
        },
        {
            "name": "黑与白",
            "limit": "【默契值10级】",
            "tips": [
                "“我看了你的档案，你似乎乐于从经历复杂的人中挑选受害者————为什么？”",
                "“污染一杯白水有什么意思？将坚石雕琢成形才更有成就感。”",
                "“太恶劣了……”",
                "监督不由地将手伸向盐罐，整瓶倒进了陶瓷杯中。"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "白开水",
                "常温",
                "盐",
                "圆匙"
            ]
        },
        {
            "name": "智与愚",
            "limit": "【默契值1级】",
            "tips": [
                "“现在已经20点了。你还要双倍浓缩的咖啡吗？”",
                "“比起愚钝的昏沉，我宁愿成为永久的理智的囚徒。”",
                "“特默里恩人讲话怎么都有点咏叹调的感觉……”"
            ],
            "recipe": [
                "经典格纹",
                "经典特浓咖啡",
                "糖包",
                "加双份",
                "原味雪顶",
                "蝴蝶结"
            ]
        },
        {
            "name": "问与答",
            "limit": "【默契值6级】",
            "tips": [
                "“你在看什么？这次的外勤报告吗？怎么样，你现在还相信你的协作外派计划对我们这些囚徒是有意义的吗？”",
                "“是的。”",
                "“为什么？”",
                "“因为你开始在乎这个问题的答案。”",
                "“…………………………………………………………呵。”",
                "拉波转动着手里的干苹果，难得没有反驳。"
            ],
            "recipe": [
                "鎏·金",
                "干苹果",
                "正常冰",
                "偏烈",
                "奇异果片",
                "空心圆匙"
            ]
        },
        {
            "name": "我与你",
            "limit": "【默契值13级】",
            "tips": [
                "————任何一段关系终将走向结束。",
                "————但是，作品，哦，我的作品，自诞生既已永恒。",
                "拉波浅抿了一口手中的咖啡，目光随着吧台后忙碌的监督而动。",
                "————愿你永恒。"
            ],
            "recipe": [
                "淑女风尚",
                "惑星的艾琳",
                "苦味素",
                "杨桃",
                "心形插签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "姜茶",
                "五分糖",
                "少冰"
            ],
            "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "惑星的艾琳",
                "盐",
                "樱桃"
            ],
            "ex": [558, 625, 682],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 拉波 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 拉波 }