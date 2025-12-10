import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.利刃三角α型, MXLaohenEnum.狙击], "attr": "lei", "star": "6",
    "nameEn": "HASSEL", "tag": ["输出", "爆发"], "originWorld": "黑曜", "orginChar": "古剑奇谭网络版",
    "cv": "夏磊", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"],
    "introText": "监督阁下，幸会。在下崔远之，相信你已经听过我的恶名了。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "a/ab/h1n52vd5ui4lw9akfgha9t9fanf7owy.png",
            "f/f3/3apl24xn0vlxsg09l0300ddq24n16ck.png",
            "7/75/6ofhqb2vxf8ykj04mg9xddl93afpvu3.png"
        ],
    }
}

const Skill = [
    {
        "name": "据枪追猎",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害"],//技能标签
            "sizeLevel": [
                ["750%", "450%"],
                ["862%", "518%"],
                ["975%", "585%"],
                ["1087%", "653%"],
                ["1200%", "720%"],
                ["1313%", "788%"],
                ["1425%", "855%"],
                ["1537%", "923%"],
                ["1650%", "990%"],
                ["1725%", "1035%"],
                ["1800%", "1080%"],
                ["1875%", "1125%"],
                ["1950%", "1170%"],
                ["2025%", "1215%"],
                ["2100%", "1260%"],
            ],
            "content": [
                "对目标发动突袭射击，并在造成伤害后回复",
                speSkillCon("15"),
                "点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "",
                "【连击】：额外回复",
                speSkillCon("10"),
                "点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "",
                speSkillCon("【据枪追猎】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”未现身状态下可使用",
                "",
                "对单个目标造成总计",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "和",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的雷元素伤害"),
                "",
                speSkillCon("【据枪追猎·黑】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”持黑枪状态下可使用",
                "",
                "本体对单个目标造成总计",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，“鬼手”对目标及目标周围半径",
                speSkillCon("250"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("专精的雷元素伤害"),
                "",
                speSkillCon("【据枪追猎·白】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”持白枪状态下可使用",
                "",
                "本体对单个目标造成总计",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的雷元素伤害"),
                "，“鬼手”对目标及目标周围半径",
                speSkillCon("250"),
                "范围内的敌人造成总计",
                speSkillCon("", 0, -1, 1),
                speSkillCon("专精的物理伤害"),
                "",
                speSkillCon("【据枪追猎】", SkillColorEnum.injuries),
                "的可使用技能次数与",
                speSkillCon("【据枪追猎·黑/白】", SkillColorEnum.injuries),
                "独立计算"
            ]//满级技能内容描述
        }
    },
    {
        "name": "鬼枪上膛",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
            "tab": ["自身增益"],
            "sizeLevel": [
                ["150%", "145%"],
                ["173%", "167%"],
                ["195%", "188%"],
                ["217%", "210%"],
                ["240%", "232%"],
                ["263%", "254%"],
                ["285%", "275%"],
                ["308%", "297%"],
                ["330%", "319%"],
                ["345%", "334%"],
                ["360%", "348%"],
                ["375%", "362%"],
                ["390%", "377%"],
                ["405%", "392%"],
                ["420%", "406%"],
            ],
            "content": [
                "被动：每秒获得1点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "，登场时拥有",
                speSkillCon("30"),
                "点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "",
                speSkillCon("【鬼枪上膛】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”未现身且100点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "时可用，令“鬼手”现身，状态期间：",
                "",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "随时间消耗",
                "",
                "攻击速度提升",
                speSkillCon("150%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "",
                speSkillCon("10"),
                "秒后获得",
                speSkillConWithImg(SkillDescStatusImg.崔远之鬼枪强化),
                "强化，攻击力提升",
                speSkillCon("40%"),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "，专精值提升",
                speSkillCon("40%"),
                speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                "",
                speSkillCon("【鬼枪上膛·黑】【鬼枪上膛·白】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”现身期间可使用，切换“鬼手”持枪状态",
                "",
                "“鬼手”持黑枪状态：",
                "",
                "本体对目标造成",
                speSkillCon("180%最终攻击的物理伤害"),
                "，“鬼手”对目标及目标周围半径",
                speSkillCon("200"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("专精值的雷元素伤害"),
                "",
                "“鬼手”持白枪状态：",
                "",
                "本体对目标造成",
                speSkillCon("200%最终攻击的雷元素伤害"),
                "，“鬼手”对目标及目标周围半径",
                speSkillCon("200"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("专精值的物理伤害")
            ]
        }
    },
    {
        "name": "生还禁地",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["伤害", "拦截", "穿透屏障"],
            "sizeLevel": [
                ["120%", "870%", "3900%"],
                ["140%", "1015%", "4550%"],
                ["160%", "1160%", "5200%"],
                ["180%", "1305%", "5850%"],
                ["190%", "1378%", "6175%"],
                ["200%", "1450%", "6500%"]
            ],
            "content": [
                "仅“鬼手”在场时可用",
                "",
                "向指定区域射出巨大能量弹，对沿途单位造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的雷元素伤害"),
                "并击落投射物",
                "",
                "能量弹到达指定位置后，对半径",
                speSkillCon("400"),
                "范围内的所有目标造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("专精的雷元素伤害"),
                "，位于区域正中心的一名目标将额外受到一次",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的物理伤害"),
                "",
                "施放后",
                speSkillCon("15"),
                "秒内",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "不会随时间消耗"
            ]
        }
    },
    {
        "name": "特性：善恶争鸣",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.55次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "使用黑白双枪战斗，白枪为连射模式，共造成",
                speSkillCon("180%最终攻击的物理伤害"),
                "；黑枪为单发模式，造成",
                speSkillCon("200%最终攻击的雷元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "当“鬼手”现身时，崔远之会将一把枪交给“鬼手”协助作战；“鬼手”造成范围伤害",
                    "",
                    "崔远之造成的伤害受攻击力加成；“鬼手”造成的伤害受专精值加成",
                    "",
                    "攻击忽视目标",
                    speSkillCon("5%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤，“鬼手”在场时，此效果提升至",
                    speSkillCon("3"),
                    "倍"
                ],//零花本体特性
                [
                    "登场时额外获得",
                    speSkillCon("30"),
                    "点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "；激活“鬼手”时",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "上限提高",
                    speSkillCon("20%")
                ],//一花特性
                [
                    "主动技能【据枪追猎·黑/白】次数额外增加",
                    speSkillCon("2"),
                    "次"
                ],//二花特性
                [
                    "自身击败敌人时，额外获得",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "（击败精英级别敌人可以获得更多",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "）"
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "鬼手状态下提高",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "造成的雷元素和物理伤害，且异核技能对区域正中心目标造成的伤害提高",
                speSkillCon("30%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
            ]
        }
    },
    {
        "name": "技能同调",
        "aliasNum": "技能同调",
        "repSkill": 1,//被替换的技能，值为该角色技能组数据对应技能下标
        "unlock": LaohenNameEnum.无刃之刃,//该技能解锁条件，拥有对应的烙痕ID
        "detail": {
            "name": "生死予夺",
            "aliasNum": "2",
            "maxLevel": 15,
            "type": "主动技能",
            "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
            "tab": ["自身增益"],
            "sizeLevel": [
                ["180%", "480%", "240%"],
                ["207%", "552%", "276%"],
                ["234%", "624%", "312%"],
                ["261%", "696%", "348%"],
                ["288%", "768%", "384%"],
                ["315%", "840%", "420%"],
                ["342%", "912%", "456%"],
                ["369%", "984%", "492%"],
                ["396%", "1056%", "528%"],
                ["414%", "1104%", "552%"],
                ["432%", "1152%", "576%"],
                ["450%", "1200%", "600%"],
                ["468%", "1248%", "624%"],
                ["486%", "1296%", "648%"],
                ["504%", "1344%", "672%"]
            ],
            "content": [
                "被动：每秒获得1点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "，登场时拥有",
                speSkillCon("60"),
                "点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "",
                speSkillCon("【生死予夺】技能形态", SkillColorEnum.injuries),
                "",
                "“鬼手”未现身且100点",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "时可用，令“鬼手”现身，获得",
                speSkillConWithImg(SkillDescStatusImg.崔远之鬼枪强化),
                "强化，暴击率提升",
                speSkillCon("40%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "，状态期间：",
                speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                "随时间消耗，脱离战斗时不持续消耗",
                "",
                "“鬼手”现身期间可切换",
                speSkillCon("【生死予夺·黑】和【生死予夺·白】技能形态", SkillColorEnum.injuries),
                "",
                "每次普通攻击本体对目标造成",
                speSkillCon("250%最终攻击的雷元素或物理伤害"),
                "，“鬼手”对目标及周围半径",
                speSkillCon("200"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的雷元素或物理伤害"),
                "，且根据“鬼手”黑/白枪状态会根据攻击次数额外附加伤害。",
                "",
                "“鬼手”持黑枪状态：（",
                speSkillCon("该形态造成的所有伤害均为雷元素伤害", SkillColorEnum.injuries),
                "），攻击速度提升",
                speSkillCon("150%"),
                speSkillCon("(属性乘区·攻击速度)", SkillColorEnum.injuries),
                "，每3次攻击额外附加",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的雷元素伤害"),
                "",
                "“鬼手”持白枪状态：（",
                speSkillCon("该形态造成的所有伤害均为物理伤害", SkillColorEnum.injuries),
                "），攻击力提升",
                speSkillCon("90%"),
                speSkillCon("(属性乘区·攻击力加成)", SkillColorEnum.injuries),
                "，每次攻击额外附加",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的物理伤害")
            ],
            "specialContent": [
                [
                    "“鬼手”现身结束后，会获得60点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "，鬼手期间根据黑/白枪状态使场上敌方目标雷/物理抗性降低40%",
                    speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低)
                ],//特质Ⅱ级解锁
                [
                    "“鬼手”状态下，暴击伤害提高80%",
                    speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                    "，鬼手黑/白枪造成的附加伤害提高150%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ],//特质Ⅴ级解锁
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "什么意思",
            "limit": "【默契值1级】",
            "tips": [
                "“比起我，你更需要喝牛奶。”",
                "崔远之摘下杯口的枫叶，微笑的模样比他冷着脸更让人警惕——等下，他什么意思？"
            ],
            "recipe": [
                "简约至上",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "焦糖布丁",
                "枫叶"
            ]
        },
        {
            "name": "错误选择",
            "limit": "【默契值1级】",
            "tips": [
                "“加了枸杞和咸梅干的枸杞菊花茶？”",
                "“这么需要养生，不如早死。”"
            ],
            "recipe": [
                "竹节茶杯",
                "枸杞菊花茶",
                "枸杞",
                "咸梅干",
                "银杏叶"
            ]
        },
        {
            "name": "不满意",
            "limit": "【默契值1级】",
            "tips": [
                "“被我倒掉是这杯无糖酒酿凤梨唯一的归宿。”"
            ],
            "recipe": [
                "自证方圆",
                "酒酿凤梨",
                "无糖",
                "多冰",
                "紫藤"
            ]
        },
        {
            "name": "恶言",
            "limit": "【默契值13级】",
            "tips": [
                "“你就算加再多芒果果冻，这也还是一杯薄荷蜜柚苏打。”",
                "“无趣就是无趣。人也一样。”"
            ],
            "recipe": [
                "熊熊杯",
                "薄荷蜜柚苏打",
                "正常冰",
                "芒果果冻",
                "圆柄长签"
            ]
        },
        {
            "name": "毫无作用",
            "limit": "【默契值4级】",
            "tips": [
                "“这杯黑月亮有必要加青梅和盐吗？”",
                "“——算了，有些人活着不也毫无作用，我跟一杯饮料计较什么。”"
            ],
            "recipe": [
                "简约至上",
                "黑月亮",
                "少冰",
                "盐",
                "青梅",
                "水果签"
            ]
        },
        {
            "name": "辛辣点评",
            "limit": "【默契值13级】",
            "tips": [
                "“味道差强人意。”",
                "崔远之放下手中的夜色危情。",
                "“品味一塌糊涂。”",
                "……下次还给他用粘了蝴蝶结的熊熊杯！"
            ],
            "recipe": [
                "熊熊杯",
                "夜色危情",
                "正常冰",
                "偏烈",
                "珍珠",
                "蝴蝶结"
            ]
        },
        {
            "name": "不愉快的愉快",
            "limit": "【默契值18级】",
            "tips": [
                "“熟悉的味道……真是令人不愉快。”",
                "“那你还一饮而尽？”",
                "“我就是喜欢‘令人不愉快’。”",
                "……下次干脆把苦味素再加多一点算了。"
            ],
            "recipe": [
                "竹节茶杯",
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "奇异果片",
                "白玉兰"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "干苹果",
                "偏烈",
                "正常冰",
                "奇异果片"
            ],
            "ex": [385, 431, 470],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "黑月亮",
                "苦味素",
                "多冰",
                "樱桃"
            ],
            "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "夜色危情",
                "偏烈",
                "正常冰",
                "茶冻"
            ],
            "ex": [447, 501, 546],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "白开水",
                "柠檬汁",
                "正常冰"
            ],
            "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "恩利都苦啤兑苦咖",
                "加双份",
                "苦味素",
                "正常冰"
            ],
            "ex": [512, 573, 625],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "樱桃"
            ],
            "ex": [588, 658, 717],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 崔远之 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 崔远之 }