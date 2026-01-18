import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "尖锋", "skill": [MXLaohenEnum.核心充能方块α型, MXLaohenEnum.无畏者], "attr": "lei", "star": "4",
    "nameEn": "MARS", "tag": ["破盾", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "不一", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "西陵重工，马尔斯。既然要合作，有什么要求你可以直接向我提。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "e/ec/bpul9njcst0dx7nxpljlgltsdhfqkkc.png",
            "0/02/8q0068kaixx9exwb75q2e5mn33c6t9q.png",
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "E.M.P干扰",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "15秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
        "tab": ["负面状态", "对空", "屏障破坏", "格挡条破坏3"],//技能标签
        "content": [
            "对半径",
            speSkillCon("400"),
            "范围内的敌方造成",
            speSkillCon("750%最终攻击的雷元素伤害"),
            "，并使其雷元素抗性降低",
            speSkillCon("25%"),
            speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
            "，持续",
            speSkillCon("15"),
            "秒，同时破坏范围内的敌方防御屏障",
            "",
            "范围内机械飞行单位将会被击落，马尔斯会优先攻击被击落的单位",
            "",
            "使用后立即激活自动技能【导电模块】"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "导电模块",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["增益冷却", "20秒"], ["增益持续", "15秒"]],
        "tab": ["自身增益"],
        "content": [
            "激活时普通攻击变为雷元素伤害，普通攻击伤害提升",
            speSkillCon("190"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "，基础攻击速度提升",
            speSkillCon("50%"),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "电磁海啸",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["伤害", "对空", "穿透屏障", "格挡条破坏3"],
        "content": [
            "对一条直线上的敌人造成",
            speSkillCon("4800%最终攻击的雷元素伤害"),
            "，可命中空中目标"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：机械强攻",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "200"], ["攻击速度", "0.90次每秒"]],
        "atType": ["单体", "格挡条破坏1"],
        "content": [
            "攻击面前的目标造成",
            speSkillCon("133%最终攻击的物理伤害")
        ],//普通攻击
        "specialContent": [
            [
                "技能可以命中空中目标",
                "",
                "对机械单位造成伤害提升",
                speSkillCon("30%"),
                speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
            ],//零花本体特性
            [
                "每次击败敌人将会获得作战数据，基础攻击力增加",
                speSkillCon("3%"),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "，可叠加",
                speSkillCon("20"),
                "次"
            ],//一花特性
            [
                "攻击机械单位时，暴击伤害提高",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries)
            ]//三花特性
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "非自愿品尝",
            "limit": "【默契值1级】",
            "tips": [
                "马尔斯看着面前堆满了奶油的神秘饮品，没有动。",
                "——仿佛喝一口就会影响他出刀的速度。"
            ],
            "recipe": [
                "熊熊杯",
                "奶油芭蕾",
                "全脂牛奶",
                "偏烈",
                "加双份",
                "菊花"
            ]
        },
        {
            "name": "“封口费”",
            "limit": "【默契值1级】",
            "tips": [
                "“长谣说感谢你上次帮她的忙，让我请你喝一杯这个。”",
                "“……”",
                "“虽然这么……可爱的燕麦牛奶可能跟你可能不太搭。”",
                "“谢谢。请帮我换成脱脂牛奶。”",
                "“嗯，顺便加了份咖啡冻，用长签吃更方便。说起来你帮了她什么？”",
                "“……”",
                "“……你的表情告诉我‘往事不堪回首’……是不是她在学校——啊，所以这其实是封口费？”",
                "“还有事，先走了。”"
            ],
            "recipe": [
                "熊熊杯",
                "熊熊燕麦牛奶",
                "脱脂牛奶",
                "咖啡冻",
                "圆柄长签"
            ]
        },
        {
            "name": "一杯热茶",
            "limit": "【默契值5级】",
            "tips": [
                "热姜茶，加糖。",
                "这是马尔斯最经常点的饮品。",
                "“今天要不要放朵桂花？”",
                "“嗯，谢谢。”"
            ],
            "recipe": [
                "自证方圆",
                "姜茶",
                "五分糖",
                "热",
                "桂花"
            ]
        },
        {
            "name": "某一日的谢礼",
            "limit": "【默契值1级】",
            "tips": [
                "“给，冰镇橘子汽水，任务辛苦了。”",
                "“合约上写的，你不必专门谢我。”",
                "“嗯，再加份叶子冻？”",
                "“好，谢谢。”",
                "马尔斯看着面前的汽水抬起手，接着，杯沿插上了一朵白玉兰。",
                "“……”"
            ],
            "recipe": [
                "自证方圆",
                "玻璃橘子",
                "少冰",
                "叶子冻",
                "白玉兰"
            ]
        },
        {
            "name": "双份惊喜",
            "limit": "【默契值6级】",
            "tips": [
                "有时因为工作需要，马尔斯不得不熬夜。",
                "今天，咖啡里被加了两份惊喜。",
                "味道有点奇怪，但也还好。",
                "马尔斯用圆匙搅拌着咖啡，冰淇淋又悄悄融化了一点。"
            ],
            "recipe": [
                "简约至上",
                "经典特浓咖啡",
                "椰浆",
                "标准",
                "咖啡雪顶",
                "圆匙"
            ]
        },
        {
            "name": "有效摄入",
            "limit": "【默契值10级】",
            "tips": [
                "运动后需要摄入适量的淡盐水。",
                "马尔斯十年如一日地坚持着。"
            ],
            "recipe": [
                "熊熊杯",
                "白开水",
                "常温",
                "盐",
                "菊花"
            ]
        },
        {
            "name": "难得一杯",
            "limit": "【默契值16级】",
            "tips": [
                "马尔斯很少主动摄入酒精，这是偶尔的一杯。",
                "杯口蘸了层淡盐，杯中加了青梅。",
                "——这个人很清楚自己的喜好。",
                "马尔斯看了看眼前这位执行官，用长签拨了拨冰块。"
            ],
            "recipe": [
                "简约至上/自证方圆",
                "黑月亮",
                "少冰",
                "盐",
                "青梅",
                "经典长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "薄暮飞行",
                "盐",
                "偏烈",
                "黄瓜片"
            ],
            "ex": [454],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "白开水",
                "盐",
                "常温"
            ],
            "ex": [594],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 马尔斯 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 马尔斯 }