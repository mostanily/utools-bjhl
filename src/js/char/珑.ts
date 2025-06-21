import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "护佑者", "skill": [MXLaohenEnum.核心充能菱形α型, MXLaohenEnum.碎易蚀影], "attr": "shi", "star": "6",
    "nameEn": "LONG", "tag": ["支援", "治疗"], "originWorld": "黑曜", "orginChar": "原创",
    "cv": "缇安", "openDate": "2024年11月21日", "resourse": ["定向潜航·振玉知微"]
}

const Skill = [
    {
        "name": "观天运",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "回复", "负面状态"],//技能标签
            "content": [
                "向目标区域投掷骰盅，对",
                speSkillCon("300"),
                "范围内敌人造成",
                speSkillCon("1300%最终攻击的蚀元素伤害"),
                "且使目标陷入",
                speSkillCon("3"),
                "秒的眩晕状态，并为终端附加",
                speSkillCon("15点蚀爆值"),
                "",
                "同时，对全体友方同调者进行急救，当生命值低于",
                speSkillCon("50%"),
                "时，使生命回复到",
                speSkillCon("50%"),
                "，并为全体友方同调者回复",
                speSkillCon("750%治愈力"),
                "的生命值"
            ]//满级技能内容描述
        }
    },
    {
        "name": "掷乾坤",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "3"]],
            "tab": ["自身增益", "友方增益", "回复"],
            "content": [
                "被动：每隔",
                speSkillCon("3"),
                "秒，对自己和除自己以外的当前场上生命值最低的友方同调者回复",
                speSkillCon("125%治愈力"),
                "的生命值",
                "",
                "",
                "主动：全体友方同调者获得一个持续",
                speSkillCon("15"),
                "秒的增益效果，并为终端附加",
                speSkillCon("15点蚀爆值"),
                "。在增益效果持续期间，主动技能回复速度提高",
                speSkillCon("60%"),
                "，且每次普攻回复",
                speSkillCon("1.5"),
                "秒异核充能，最多可以回复",
                speSkillCon("15"),
                "秒异核充能（珑重伤或离场时，此效果消失）",
                "",
                "在珑首次施放异核技能【翻覆手】的增益效果持续时间内，主动技能回复效果翻倍。"
            ]
        }
    },
    {
        "name": "翻覆手",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "友方增益", "自身增益", "回复", "拦截"],
            "content": [
                "向目标区域投掷骰盅，摧毁范围内投射物，对区域内目标造成",
                speSkillCon("2000％最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("15点蚀爆值"),
                "。同时，对全体友方同调者施加持续",
                speSkillCon("15"),
                "秒的治疗，每秒回复",
                speSkillCon("150%治愈力"),
                "的生命值。",
                "",
                "骰盅掀开时，使全体同调者获得增益效果，提高",
                speSkillCon("50％"),
                speSkillCon("[同调者暴击伤害]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击伤害),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "，并根据当前队长的元素属性同时获得以下不同的效果，持续",
                speSkillCon("15"),
                "秒（珑重伤或离场时，此效果消失）",
                "",
                "蚀元素队长：提高",
                speSkillCon("40%"),
                speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "，提高",
                speSkillCon("60%"),
                speSkillCon("[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                speSkillCon("(属性乘区·攻击速度)", SkillColorEnum.injuries),
                "",
                "非蚀元素队长：提高",
                speSkillCon("25%"),
                speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                speSkillCon("(属性乘区·攻击力加成)", SkillColorEnum.injuries),
                "，造成的伤害无视目标",
                speSkillCon("20%"),
                speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                "基础减伤"
            ]
        }
    },
    {
        "name": "特性：玲珑心",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
            "atType": ["群体"],
            "content": [
                "对目标造成",
                speSkillCon("200%最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("3点蚀爆值")
            ],//普通攻击
            "specialContent": [
                [
                    "每2次普攻，会为当前场上生命值最低的友方同调者回复",
                    speSkillCon("50％~60％治愈力"),
                    "的生命值（该效果最多每",
                    speSkillCon("1.5"),
                    "秒触发",
                    speSkillCon("1"),
                    "次）",
                ],//零花本体特性
                [
                    "异核技能【翻覆手】的增益效果持续时间额外增加",
                    speSkillCon("10"),
                    "秒，且增益效果额外使队长暴击率提高",
                    speSkillCon("25%"),
                    speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "自身在场时使场上敌方全元素抗性降低",
                    speSkillCon("15％~20％"),
                    speSkillCon("([目标减益乘区·目标抗性降低])", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "（效果随终端提升，",
                    speSkillCon("1350"),
                    "点时达到最大值）"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "卦象",
            "limit": "【默契值1级】",
            "tips": [
                "“今日卦象，宜清水，宜温热，宜酸。”",
                "“……这也行？”"
            ],
            "recipe": [
                "鎏·金",
                "白开水",
                "热",
                "柠檬汁",
                "樱花"
            ]
        },
        {
            "name": "万事可赌",
            "limit": "【默契值13级】",
            "tips": [
                "“为什么我一把这杯熊熊燕麦牛奶端上来，邻座的员工就哀嚎着吞了一整杯酒。”",
                "“方才小执行官不在，我与那人开了个小小赌约。若是你加了整颗布丁，便算他输。”",
                "“这也可以赌……”",
                "“闲着也是闲着。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "焦糖布丁",
                "薄荷叶"
            ]
        },
        {
            "name": "新品追加",
            "limit": "【默契值1级】",
            "tips": [
                "“我虽不善酒力，但这一杯蜂蜜啤酒实是有些滋味，该让卯卯、绒绒加在茶楼的菜单上。”"
            ],
            "recipe": [
                "淑女风尚",
                "蜂蜜啤酒",
                "少冰",
                "偏淡",
                "水果签"
            ]
        },
        {
            "name": "有效体验",
            "limit": "【默契值1级】",
            "tips": [
                "“我记得这是你第一次喝姜汁可可。你可以先闻一下，接受不了的话，可以不喝。”",
                "“无妨，我会喝的。经历有好有坏，总好过一片空白，不是吗？”"
            ],
            "recipe": [
                "经典格纹",
                "姜汁可可",
                "热",
                "椰浆",
                "三叶长签"
            ]
        },
        {
            "name": "幸运儿",
            "limit": "【默契值10级】",
            "tips": [
                "“除了口味，听闻青草薄荷还以其清新的颜色而知名，交予我手着实有些可惜了。”",
                "“不过色盲总好过心盲。在黑曜，我已是极幸运之人。”"
            ],
            "recipe": [
                "淑女风尚",
                "青草薄荷",
                "多冰",
                "偏烈",
                "青梅",
                "白玉兰"
            ]
        },
        {
            "name": "前尘忽至",
            "limit": "【默契值16级】",
            "tips": [
                "“怎么了？是这杯桂圆红枣茶味道不正吗？”",
                "“……只是忽然想起旒珠大人也颇为喜爱此物。”"
            ],
            "recipe": [
                "经典格纹",
                "桂圆红枣茶",
                "五分糖",
                "少冰",
                "青梅",
                "蝴蝶结"
            ]
        },
        {
            "name": "异世五彩",
            "limit": "【默契值18级】",
            "tips": [
                "珑看着杯中花茶，喃喃说道：“愿另一个世界的我尽览世间五彩。”"
            ],
            "recipe": [
                "鎏·金",
                "德里亚德风味花茶",
                "常温",
                "咸梅干",
                "精致纸伞"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "姜茶",
                "五分糖",
                "热"
            ],
            "ex": [512, 573, 625],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "枸杞菊花茶",
                "枸杞",
                "咸梅干"
            ],
            "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 珑 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 珑 }