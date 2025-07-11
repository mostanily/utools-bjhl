import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "护佑者", "skill": [MXLaohenEnum.及时援助菱形β型, MXLaohenEnum.因祸得福], "attr": "shui", "star": "4",
    "nameEn": "BUBBLES", "tag": ["治疗", "输出"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "富贵", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "奶茶双响炮",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "10秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["回复"],//技能标签
            "content": [
                "开启「治疗模式」，普通攻击改为向生命最低的友方同调者连续发射治疗弹，每",
                speSkillCon("2.4"),
                "秒总计治疗目标",
                speSkillCon("263%治愈力"),
                "的生命值，持续",
                speSkillCon("20"),
                "秒",
                "",
                "效果期间自动技能【青提波波】将暂停冷却回复"
            ]//满级技能内容描述
        }
    },
    {
        "name": "青提波波",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "负面状态"],
            "content": [
                "对一名敌方目标总计造成",
                speSkillCon("3000%最终攻击的水元素伤害"),
                "，并使其攻击速度降低",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("3"),
                "秒"
            ]
        }
    },
    {
        "name": "桃桃乌龙茶",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "90秒"]],
            "tab": ["水区域", "回复", "伤害"],
            "content": [
                "对指定区域内所有敌方目标总计造成",
                speSkillCon("2400%最终攻击的水元素伤害"),
                "，同时治疗所有友方同调者",
                speSkillCon("660%治愈力"),
                "的生命值，并在范围内生成水元素区域"
            ]
        }
    },
    {
        "name": "特性：奶茶双拼",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.75次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射波波弹造成",
                speSkillCon("133%最终攻击的水元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "可以切换攻击模式与治疗模式"
                ],//零花本体特性
                [
                    "主动技能【奶茶双响炮】使用次数+1"
                ],//一花特性
                [
                    "治愈力提升",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "经典，有经典的道理",
            "limit": "【默契值1级】",
            "tips": [
                "熬夜必备，白荆科技年度最受欢迎的朴实无华饮品！",
                "当然了，元桃桃觉得太苦了，还害怕睡不着觉。",
                "“再加点！再加点！”"
            ],
            "recipe": [
                "经典特浓咖啡",
                "糖包",
                "低因",
                "草莓冰淇淋"
            ]
        },
        {
            "name": "拒绝白开水",
            "limit": "【默契值1级】",
            "tips": [
                "“我能——”",
                "“你不能。”",
                "元桃桃捂着牙，哀怨地看着面前的玻璃杯。",
                "“那随便加点什么东西调味吧求求你了监督——”",
                "“好，你说的。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "白开水",
                "多冰",
                "柠檬汁"
            ]
        },
        {
            "name": "好孩子奖励？",
            "limit": "【默契值1级】",
            "tips": [
                "好孩子的标准睡前奖励，但是元桃桃坚持要甜的。",
                "“……你还要加冰？”",
                "“还要换点新花样！”"
            ],
            "recipe": [
                "甜牛乳",
                "正常糖",
                "正常冰",
                "燕麦奶"
            ]
        },
        {
            "name": "早年养生",
            "limit": "【默契值13级】",
            "tips": [
                "元桃桃最害怕的几样饮品之一——只是凑近金属杯口闻一闻都让她觉得整个人养生了起来。",
                "“这里面红红绿绿的是什么……？”",
                "“是你的健康。”"
            ],
            "recipe": [
                "环口杯",
                "枸杞菊花茶",
                "黄瓜片",
                "咸梅干"
            ]
        },
        {
            "name": "白桃猎人",
            "limit": "【默契值10级】",
            "tips": [
                "没有任何一杯白桃饮料能逃过元桃桃。",
                "没有任何一份芝士奶盖能逃过元桃桃。",
                "“所以为什么要在这里加西瓜？”",
                "“哎呀试试嘛，几分糖什么冰记住了么？”"
            ],
            "recipe": [
                "白桃芝士奶盖",
                "七分糖",
                "多冰",
                "西瓜"
            ]
        },
        {
            "name": "唯一的茶",
            "limit": "【默契值18级】",
            "tips": [
                "元桃桃唯一喜欢的“茶”，即便是不加糖、不加冰她也可以忍受。",
                "“但是至少不要在里面加冻冻！化了啊啊啊啊！”"
            ],
            "recipe": [
                "桃桃乌龙茶",
                "无糖",
                "热",
                "茶冻"
            ]
        },
        {
            "name": "双子星之恋",
            "limit": "【默契值16级】",
            "tips": [
                "“监督监督监督监督监督联动新品上了啊啊啊啊啊啊！”",
                "“……给给给你的点单，所有要加的都加上了，下、不、为、例。”",
                "“哇好漂亮的花！谢谢监督~”"
            ],
            "recipe": [
                "柯林杯/双层叶纹",
                "双莓之恋",
                "五分糖",
                "正常冰",
                "蜜桃冻",
                "樱花"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "酒酿凤梨",
                "正常糖",
                "正常冰"
            ],
            "ex": [472, 529, 576],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "青提啵啵奶茶",
                "正常糖",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [528, 591, 644],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "双莓之恋",
                "正常糖",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 元桃桃 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 元桃桃 }