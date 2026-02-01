import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultSkillLinkObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "尖锋", "skill": [MXLaohenEnum.化险为夷, MXLaohenEnum.烈焰暴击], "attr": "yan", "star": "6",
    "nameEn": "CATULUS", "tag": ["爆发", "元素区域"], "originWorld": "黎威尔", "orginChar": "古剑奇谭网络版",
    "cv": "孙晔", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"],
    "introText": "海临中央警局特殊事件处理小队R.E.D.，昊苍，哈哈，咱们这就算认识喽。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "b/bb/eusfr3z5n2bkt4a6f2lsbgpuwbcrci0.png",
            "e/e0/5899t5lh1vlmac82m13elpshr0j31xy.png",
            "0/01/pvvestsnroxmu3qkemcvbt6v2728t1c.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["海谣"],
            "imgs": [
                "2/23/jhgtf9ug47gmo7ku8ucoyybua6xwlv8.png"
            ],
            "listImg": [
                "9/95/2ih78jv2s6gds3khji9y71lrifpa8be.png"
            ]
        }
    ]
}

const skill1: DefaultNormalSkillObj = {
    "name": "破晓·血脉印记",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["炎区域", "伤害", "格挡条破坏3"],//技能标签
        "sizeLevel": [
            ["1080%", "360%", "1380%", "216%"],
            ["1242%", "414%", "1587%", "248%"],
            ["1404%", "468%", "1794%", "281%"],
            ["1566%", "522%", "2001%", "313%"],
            ["1728%", "576%", "2208%", "346%"],
            ["1890%", "630%", "2415%", "378%"],
            ["2050%", "684%", "2622%", "410%"],
            ["2214%", "738%", "2829%", "443%"],
            ["2376%", "792%", "3036%", "475%"],
            ["2484%", "828%", "3174%", "497%"],
            ["2592%", "864%", "3312%", "518%"],
            ["2700%", "900%", "3450%", "540%"],
            ["2808%", "936%", "3588%", "562%"],
            ["2916%", "972%", "3726%", "583%"],
            ["3024%", "1008%", "3864%", "605%"]
        ],
        "content": [
            speSkillCon("【破晓】技能形态", SkillColorEnum.injuries),
            "",
            "人形状态下可使用",
            "",
            "向前突进，对沿途敌人造成",
            speSkillCon("100%最终攻击的炎元素伤害"),
            "，到达目标位置后对半径",
            speSkillCon("300"),
            "范围内距离自身最近的一名敌方造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "并对其他敌人造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的炎元素伤害"),
            "，随后突进回初始位置",
            "",
            speSkillCon("【血脉印记】技能形态", SkillColorEnum.injuries),
            "",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」状态下可使用",
            "",
            "向目标位置扔出武器，对半径",
            speSkillCon("300"),
            "范围内最多三名敌人造成",
            speSkillCon("216%最终攻击的炎元素伤害"),
            "，随后向前突进对沿途敌人造成",
            speSkillCon("200%最终攻击的炎元素伤害"),
            "，到达目标位置后对半径",
            speSkillCon("300"),
            "范围内距离自身最近的三名敌人总计造成",
            speSkillCon("", 0, -1, 2),
            speSkillCon("最终攻击的炎元素伤害"),
            "，并对其他敌人造成",
            speSkillCon("", 0, -1, 3),
            speSkillCon("最终攻击的炎元素伤害"),
            "，随后突进回初始位置，对沿途敌人再次造成",
            speSkillCon("200%最终攻击的炎元素伤害"),
            "；突进和造成伤害时留下炎元素区域"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "猎风·呼啸",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["指令冷却", "15秒"], ["增益持续", "15秒"]],
        "tab": ["伤害", "自身增益"],
        "sizeLevel": [
            ["15%", "20%"],
            ["16%", "23%"],
            ["17%", "26%"],
            ["18%", "29%"],
            ["19%", "32%"],
            ["20%", "35%"],
            ["21%", "38%"],
            ["22%", "41%"],
            ["24%", "44%"],
            ["25%", "46%"],
            ["27%", "48%"],
            ["30%", "50%"],
            ["31%", "52%"],
            ["32%", "54%"],
            ["34%", "56%"]
        ],
        "content": [
            speSkillCon("【猎风】技能形态", SkillColorEnum.injuries),
            "",
            "人形状态下可使用",
            "",
            "自身暴击率提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒，期间普通攻击变为范围炎元素伤害，每次攻击额外造成",
            speSkillCon("100%最终攻击的炎元素伤害"),
            "",
            speSkillCon("【呼啸】技能形态", SkillColorEnum.injuries),
            "",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」状态下可使用",
            "",
            "自身暴击率提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "、暴击伤害提升",
            speSkillCon("", 0, -1, 1),
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒，期间普通攻击变为范围炎元素伤害，造成的伤害提升（提升幅度为目标当前生命值百分比，最高提升100%）"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "无赦之罪",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害", "自身增益", "回复", "格挡条破坏3"],
        "sizeLevel": [
            ["1800%"],
            ["2100%"],
            ["2400%"],
            ["2700%"],
            ["2850%"],
            ["3000%"],
        ],
        "content": [
            "从人形状态切换到",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」状态",
            "",
            "对自身半径",
            speSkillCon("600"),
            "范围内的所有敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "，并根据命中敌方数量回复自身生命值，每命中一名敌方单位，回复自身",
            speSkillCon("8%最大生命值"),
            "，随后切换到",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」形态，普通攻击变为炎元素伤害，",
            speSkillCon("攻击速度：0.67次每秒"),
            "，持续",
            speSkillCon("30"),
            "秒，每次发生暴击都会延长自身",
            speSkillCon("2"),
            "秒",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」形态的持续时间",
            "",
            "使用后立即激活自动技能【呼啸】"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：原罪者",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "200"], ["攻击速度", "0.56次每秒"]],
        "atType": ["单体", "格挡条破坏1"],
        "content": [
            "攻击面前的目标造成",
            speSkillCon("200%最终攻击的物理伤害"),
            "",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」状态下的第三段普通攻击将挥出远程剑气，对沿途的敌人造成炎元素伤害；该状态下普通攻击命中目标有几率（同自身当前暴击率）触发犬爪幻影追击，造成",
            speSkillCon("100%最终攻击的炎元素伤害"),
            "，伤害随目标当前生命值百分比提升（最高提升100%）并回复自身",
            speSkillCon("5%最大生命值")
        ],//普通攻击
        "specialContent": [
            [
                "登场异核充能增加50%",
                "",
                "不攻击时，每秒回复",
                speSkillCon("1%最大生命值"),
                "",
                "人形：不攻击时，5秒后，进入格挡姿态，受到的伤害减免",
                speSkillCon("80%"),
                speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                "",
                speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
                "「坎尼斯」形态：基础减伤增加",
                speSkillCon("12%~20%"),
                speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                "；不攻击时，5秒后，下一次普通攻击将造成范围炎元素伤害，并在路径上留下炎元素区域"
            ],//零花本体特性
            [
                "登场可立即施放异核技能，且异核技能【无赦之罪】冷却时间缩短",
                speSkillCon("10"),
                "秒"
            ],//一花特性
            [
                "场上每有一名炎元素同调者（包含自己），昊苍的暴击率提升",
                speSkillCon("5%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "、攻击力提升",
                speSkillCon("5%"),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries)
            ]//三花特性
        ]
    }
}
const skillTeseStrong: DefaultTeseSkillObj = {
    "name": "特性强化",
    "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "content": [
            "【血脉印记】和【破晓·血脉印记】伤害提高",
            speSkillCon("15%"),
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
        ]
    }
}
const skillLink: DefaultSkillLinkObj = {
    "name": "技能同调",
    "aliasNum": "技能同调",
    "repSkill": 1,//被替换的技能，值为该角色技能组数据对应技能下标
    "unlock": LaohenNameEnum.蚀冕,//该技能解锁条件，拥有对应的烙痕ID
    "detail": {
        "name": "自赎之火",
        "aliasNum": "2",
        "maxLevel": 15,
        "type": "自动技能",
        "skillTab": [["增益冷却", "15秒"], ["增益持续", "18秒"]],
        "tab": ["伤害", "自身增益"],
        "sizeLevel": [
            ["15%", "1400%", "20%", "2000%"],
            ["16%", "1610%", "23%", "2300%"],
            ["17%", "1820%", "26%", "2600%"],
            ["18%", "2030%", "29%", "2900%"],
            ["19%", "2240%", "32%", "3200%"],
            ["20%", "2450%", "35%", "3500%"],
            ["21%", "2660%", "38%", "3800%"],
            ["22%", "2870%", "41%", "4100%"],
            ["24%", "3080%", "44%", "4400%"],
            ["25%", "3220%", "46%", "4600%"],
            ["27%", "3360%", "48%", "4800%"],
            ["30%", "3500%", "50%", "5000%"],
            ["31%", "3640%", "52%", "5200%"],
            ["32%", "3780%", "54%", "5400%"],
            ["34%", "3920%", "56%", "5600%"]
        ],
        "content": [
            speSkillCon("人形状态下可使用", SkillColorEnum.injuries),
            "",
            "自身暴击率提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("18"),
            "秒，期间普通攻击变为范围炎元素伤害，受到攻击会触发反击，对正前方直线区域造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的炎元素伤害"),
            "，且",
            speSkillCon("5"),
            "秒内未受到伤害会自动触发一次反击。反击施放期间无法再次反击",
            "",
            "",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            speSkillCon("「坎尼斯」状态下可使用", SkillColorEnum.injuries),
            "",
            "自身暴击率提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
            "、暴击伤害提升",
            speSkillCon("", 0, -1, 2),
            speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("18"),
            "秒，期间普通攻击变为范围炎元素伤害，受到攻击会触发反击，对正前方扇形区域造成",
            speSkillCon("", 0, -1, 3),
            speSkillCon("最终攻击的炎元素伤害"),
            "，并延长",
            speSkillConWithImg(SkillDescStatusImg.昊苍坎尼斯),
            "「坎尼斯」状态",
            speSkillCon("6"),
            "秒。若",
            speSkillCon("4"),
            "秒内未受到伤害会自动触发一次反击。反击造成的伤害提升（提升幅度为目标当前生命值百分比，最高提升",
            speSkillCon("100%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "）。反击施放期间无法再次反击"
        ],
        "specialContent": [
            [
                "反击会使目标受到伤害提高25%",
                speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                "，炎元素抗性降低30%",
                speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续20秒"
            ],//特质Ⅱ级解锁
            [
                "「坎尼斯」状态下暴击伤害额外提高80%",
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "，反击和主动技能【血脉印记】伤害提高150%",
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
            ],//特质Ⅴ级解锁
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese,
    skillTeseStrong,
    skillLink
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "灵敏味觉",
            "limit": "【默契值1级】",
            "tips": [
                "“奎斯坎尼斯的味觉可比海临人灵敏几万倍，无糖热姜茶是不是有点过分了，嗯？”"
            ],
            "recipe": [
                "简约至上",
                "姜茶",
                "无糖",
                "热",
                "三叶长签"
            ]
        },
        {
            "name": "伤心了汪",
            "limit": "【默契值1级】",
            "tips": [
                "“一点味道都没有的话，不知道为什么，有点伤心呢哈哈。”"
            ],
            "recipe": [
                "自证方圆",
                "白开水",
                "多冰",
                "盐",
                "樱花"
            ]
        },
        {
            "name": "苦啤兑苦咖",
            "limit": "【默契值1级】",
            "tips": [
                "“本来都这么苦了，还要加双倍浓缩。小监督，你在白荆科技过得还好吗？”"
            ],
            "recipe": [
                "简约至上",
                "恩利都苦啤兑苦咖",
                "少冰",
                "柠檬汁",
                "加双份",
                "水果签"
            ]
        },
        {
            "name": "被名字欺骗",
            "limit": "【默契值4级】",
            "tips": [
                "“我还以为拿铁是什么……原来还是咖啡啊。小监督，帮我再加些糖浆吧。”"
            ],
            "recipe": [
                "竹节茶杯",
                "好椰拿铁",
                "糖浆",
                "标准",
                "空心圆匙"
            ]
        },
        {
            "name": "特殊情况",
            "limit": "【默契值6级】",
            "tips": [
                "每当昊苍做了关于黎威尔的梦，他就会来休息室点一杯惑星的艾琳。",
                "他并不喜欢那味道，也不会醉，但借着酒精的名义，他才能跟监督说些……不愿提起的过去。"
            ],
            "recipe": [
                "自证方圆",
                "惑星的艾琳",
                "盐",
                "杨桃",
                "经典长签"
            ]
        },
        {
            "name": "小燕子推荐",
            "limit": "【默契值13级】",
            "tips": [
                "“小监督，上次小燕子在你这喝了什么来着？回去之后，他跟我念叨了好几天呢。”",
                "“杨枝甘露，加樱桃和芒果果冻。”",
                "“那我来一份一样的就行。”"
            ],
            "recipe": [
                "熊熊杯",
                "杨枝甘露",
                "樱桃",
                "芒果果冻",
                "圆柄长签"
            ]
        },
        {
            "name": "蜂蜜啤酒",
            "limit": "【默契值18级】",
            "tips": [
                "“……一杯蜂蜜啤酒，让我摸一下你的耳朵。”",
                "“噗。小监督，为了摸我的耳朵，你还真是什么办法都想出来了啊？”",
                "“……是我不好，你忘了我说的话吧。”",
                "“我没说不同意啊。记得多加点冰块。”"
            ],
            "recipe": [
                "熊熊杯",
                "蜂蜜啤酒",
                "多冰",
                "偏烈",
                "精致纸伞"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "恩利都苦啤兑苦咖",
                "标准",
                "盐",
                "少冰"
            ],
            "ex": [448],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "惑星的艾琳",
                "盐",
                "原味雪顶"
            ],
            "ex": [467],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "杨枝甘露",
                "原味雪顶",
                "椰果"
            ],
            "ex": [567],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 昊苍 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 昊苍 }