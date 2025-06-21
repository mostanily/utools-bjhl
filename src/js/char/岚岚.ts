import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.对空特攻α型, MXLaohenEnum.风力加剧], "attr": "feng", "star": "4",
    "nameEn": "LANLAN", "tag": ["击退", "拦截"], "originWorld": "乌瑞亚", "orginChar": "原创",
    "cv": "张昱", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "风舞风舞风舞",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "拦截"],//技能标签
            "content": [
                "被动：特性击退目标的几率提升",
                speSkillCon("15%"),
                "",
                "朝目标方向",
                speSkillCon("600"),
                "距离内发射扇形疾风攻击，造成",
                speSkillCon("1250%最终攻击的风元素伤害"),
                "并以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退区域内敌人以及拦截投射物，同时吹散范围内的毒雾"
            ]//满级技能内容描述
        }
    },
    {
        "name": "疾疾疾",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "25秒"], ["增益持续", "20秒"]],
            "tab": ["自身增益", "负面状态"],
            "content": [
                "自身基础攻击速度提升",
                speSkillCon("120%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "，普通攻击击退目标的几率提升至原来的2倍，持续",
                speSkillCon("20"),
                "秒"
            ]
        }
    },
    {
        "name": "迅鸟不鸣",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "80秒"]],
            "tab": ["伤害", "自身增益", "友方增益", "拦截"],
            "content": [
                "以自身为中心放出狂风，以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退场上所有敌人造成",
                speSkillCon("3000%最终攻击的风元素伤害"),
                "、拦截场上所有敌对投射物并吹散自身半径",
                speSkillCon("600"),
                "范围内的毒雾，同时使全体友方同调者提高",
                speSkillCon("20%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("25"),
                "秒",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：学舌",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射羽箭造成",
                speSkillCon("200%最终攻击的风元素伤害"),
                "普通攻击命中时有",
                speSkillCon("10%"),
                "几率以",
                speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退目标，若无法击退目标，则本次伤害提升",
                speSkillCon("50%"),
                speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
            ],//普通攻击
            "specialContent": [
                [
                    "无"
                ],//零花本体特性
                [
                    "被岚岚击退的目标会被",
                    speSkillCon("[定身]5", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "秒"
                ],//一花特性
                [
                    "造成伤害使目标风元素抗性降低",
                    speSkillCon("20%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.normal, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，持续",
                    speSkillCon("5"),
                    "秒"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "讨厌的范围",
            "limit": "【默契值1级】",
            "tips": [
                "“讨厌讨厌讨厌讨厌——”",
                "“别只重复一个词，你具体讨厌什么啊？”",
                "“阿华田、双倍糖、饼干、蝴蝶结、环口杯……”",
                "“全部都讨厌吗！？”"
            ],
            "recipe": [
                "环口杯",
                "阿华田奶茶",
                "双倍糖",
                "汪汪饼干",
                "蝴蝶结"
            ]
        },
        {
            "name": "音调问题",
            "limit": "【默契值1级】",
            "tips": [
                "“一定要在巧克力里加樱桃和咖啡冻吗，比我捡回来筑巢的榴莲壳还难闻。”",
                "“……真伤人啊。”",
                "“会吗。是不是因为我的音调有点奇怪才——”",
                "“不，不关音调的事……”"
            ],
            "recipe": [
                "柯林杯",
                "巧克力风暴",
                "樱桃",
                "咖啡冻",
                "樱花"
            ]
        },
        {
            "name": "如有雷同",
            "limit": "【默契值1级】",
            "tips": [
                "“监督监督，我没想到海临人还会喝牙膏啊。”",
                "“……你的牙膏不会是薄荷蜜柚味的吧？”",
                "“对对对，就是这个。还好有叶子冻，不然我都想漱口了。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "薄荷蜜柚苏打",
                "多冰",
                "叶子冻",
                "长匙"
            ]
        },
        {
            "name": "实用主义",
            "limit": "【默契值13级】",
            "tips": [
                "“你对姜汁类的饮料还真是情有独钟。”",
                "“谁叫它那么特别。只要喝上一杯，就算在冬天飞一整晚也不会冷。”",
                "“……首先，你点的是冰姜茶。其次，气温太低，你就适当少飞一会。”",
                "“那可不行。”"
            ],
            "recipe": [
                "双层叶纹",
                "姜茶",
                "正常糖",
                "正常冰",
                "桂花"
            ]
        },
        {
            "name": "心结",
            "limit": "【默契值4级】",
            "tips": [
                "每当纽巍蒂朵绽放的时候，宁芙缇总是最先发现的。",
                "他们的视力是那样好。德里亚德哪里的浆果已经成熟，哪里的古树即将枯萎……他们全都知道。",
                "“然而我就站在他们面前，他们却‘看不见’我。”",
                "岚岚手中的圆匙在柯林杯的杯壁上，划出一道刺耳的哨音，宛如悲鸣。"
            ],
            "recipe": [
                "柯林杯",
                "德里亚德风味花茶",
                "常温",
                "椰果",
                "圆匙"
            ]
        },
        {
            "name": "严禁动物表演",
            "limit": "【默契值5级】",
            "tips": [
                "“为了感谢监督请我喝姜汁可可，我决定在二饭举行晚餐秀。”",
                "“不必了，真的不必了。”",
                "“别客气。看在焦糖布丁的份上，我还要加开呢。每天两场，持续一周。”",
                "“呃……”",
                "虽说海临严禁动物表演，但没人告诉监督“动物”非要表演该怎么办啊。"
            ],
            "recipe": [
                "环口杯",
                "姜汁可可",
                "热",
                "椰浆",
                "焦糖布丁",
                "薄荷叶"
            ]
        },
        {
            "name": "特别原因",
            "limit": "【默契值18级】",
            "tips": [
                "“岚岚你为什么这么喜欢喝杨枝甘露啊？”",
                "“听说在所有饮料之中，它的制作时间是最长的——这样我们就能聊久一点了，多好啊。”",
                "岚岚的脸被双层叶纹杯上的枫叶挡住了一些，看不清平静语气下的脸是不是有些红。"
            ],
            "recipe": [
                "双层叶纹",
                "杨枝甘露",
                "原味雪顶",
                "芒果果冻",
                "五叶长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "巧克力风暴",
                "青提",
                "焦糖布丁"
            ],
            "ex": [378, 423, 461],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "德里亚德风味花茶",
                "常温",
                "茶冻"
            ],
            "ex": [379, 425, 463],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "枸杞菊花茶",
                "枸杞",
                "茶冻"
            ],
            "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 岚岚 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 岚岚 }