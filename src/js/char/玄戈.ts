import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.铁杵磨成针三角, MXLaohenEnum.连破留痕], "attr": "wuli", "star": "6",
    "nameEn": "LIONEL", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
    "cv": "夏磊", "openDate": "2025年01月02日", "resourse": ["定向潜航·灼金格言"]
}

const Skill = [
    {
        "name": "御厄",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "对空", "穿透屏障"],//技能标签
            "content": [
                speSkillCon("【御厄】技能形态指令冷却：", SkillColorEnum.injuries),
                speSkillCon("15"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "在目标区域创造空间裂缝，对",
                speSkillCon("450"),
                "范围内的敌人造成",
                speSkillCon("2352％最终攻击的物理伤害"),
                "",
                "【连击】：获得",
                speSkillCon("2"),
                "个",
                speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                "",
                "",
                speSkillCon("【荡厄】技能形态指令冷却：", SkillColorEnum.injuries),
                speSkillCon("10"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "激活后可以使用",
                speSkillCon("2"),
                "次",
                "",
                "在目标区域创造空间裂缝，对",
                speSkillCon("450"),
                "范围内的敌人造成",
                speSkillCon("4480％最终攻击的物理伤害"),
                "",
                "【连击】：回复",
                speSkillCon("15"),
                "秒的异核充能"
            ]//满级技能内容描述
        }
    },
    {
        "name": "纵略黑白",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
            "tab": ["自身增益"],
            "content": [
                "提高自身暴击率",
                speSkillCon("45%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "、暴击伤害",
                speSkillCon("90%"),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "，且获得",
                speSkillCon("1"),
                "个",
                speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                "",
                "当玄戈在增益持续期间，下一次【游徒】、【筑术师】、【战术家】职业的友方同调者使用主动技能时，玄戈会触发【璨星】效果，获得",
                speSkillCon("2"),
                "个",
                speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星)
            ]
        }
    },
    {
        "name": "抑扬话事",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "拦截", "对空", "穿透屏障"],
            "content": [
                "对",
                speSkillCon("500"),
                "范围内的敌人造成",
                speSkillCon("5000％最终攻击的物理伤害"),
                "，可以摧毁范围内的投射物，且获得",
                speSkillCon("3"),
                "个",
                speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                "",
                "技能释放结束后，受到伤害的敌人在接下来的",
                speSkillCon("60"),
                "秒内，受到【御厄】、【荡厄】的伤害提高",
                speSkillCon("25％"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
            ]
        }
    },
    {
        "name": "特性：破而后立",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "对当前目标造成",
                speSkillCon("200％最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "自身施放【御厄】、【纵略黑白】和【抑扬话事】可获得",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "",
                    "当获得",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "数量达到",
                    speSkillCon("5"),
                    "个时，会激活【荡厄】。在释放",
                    speSkillCon("2"),
                    "次【荡厄】后，恢复到【御厄】技能形态",
                    "",
                    "当获得",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "数量大于",
                    speSkillCon("5"),
                    "个时，会保留剩余的",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "，保留的",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "的数量上限是",
                    speSkillCon("5"),
                    "个",
                    "",
                    "",
                    "登场时获得",
                    speSkillCon("[同调]", SkillColorEnum.normal, ToastSkillEnum.同调),
                    "效果"
                ],//零花本体特性
                [
                    "登场时，异核充能",
                    speSkillCon("45"),
                    "秒，【纵略黑白】充能",
                    speSkillCon("15"),
                    "秒，且释放异核技能【抑扬话事】额外获得",
                    speSkillCon("2"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "。【御厄】、【荡厄】造成的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "【御厄】、【荡厄】造成伤害时忽略敌人减伤",
                    speSkillCon("40%"),
                    speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                    "。当玄戈在【纵略黑白】增益持续期间，下一次【游徒】、【筑术师】、【战术家】职业的队友使用主动技能时，玄戈触发【璨星】效果时，会额外获得",
                    speSkillCon("2"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "死敌",
            "limit": "【默契值4级】",
            "tips": [
                "“监督，即便是我的死敌，也不会端一杯熊熊燕麦牛奶给我。”",
                "“……一般人的人生可不会有死敌这种东西…”",
                "“而我有很多。”",
            ],
            "recipe": [
                "蝶形香槟杯",
                "熊熊燕麦牛奶",
                "燕麦奶",
                "焦糖布丁",
                "迷迭香"
            ]
        },
        {
            "name": "意外",
            "limit": "【默契值5级】",
            "tips": [
                "“玄戈，你看起来很惊讶？这杯盐水有什么问题吗？”",
                "“没什么，只是……它太简单了。而我的人生离这个词太远了。”",
            ],
            "recipe": [
                "马天尼杯",
                "白开水",
                "盐",
                "常温",
                "银杏叶"
            ]
        },
        {
            "name": "刻板印象",
            "limit": "【默契值1级】",
            "tips": [
                "“苦啤、苦咖、双倍浓缩咖啡液，还有额外添加的苦味素……也许我该反思一下，我在监督眼中究竟是什么形象？”",
                "“我看影视作品中的大佬都喜欢这种配置？”",
                "“……”"
            ],
            "recipe": [
                "笛型香槟杯",
                "恩利都苦啤兑苦咖",
                "多冰",
                "苦味素",
                "加双份",
                "薄荷叶"
            ]
        },
        {
            "name": "相似处？",
            "limit": "【默契值13级】",
            "tips": [
                "“说不定乌瑞亚也许是与北三岛最相似的地方。”",
                "“监督为什么这么说？”",
                "“我不是说自然环境，而是两地对于种群或者说家族的重视。”",
                "“若是在这一方面，我不否认。”"
            ],
            "recipe": [
                "郁金香酒杯",
                "德里亚德风味花茶",
                "常温",
                "叶子冻",
                "空心圆匙"
            ]
        },
        {
            "name": "礼物",
            "limit": "【默契值10级】",
            "tips": [
                "“蝴蝶结？”",
                "“咳。可以取下来，拿给陀螺玩。”",
                "“你想得还真是周全。多谢。”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "夜色危情",
                "少冰",
                "偏烈",
                "珍珠",
                "蝴蝶结"
            ]
        },
        {
            "name": "冬日气息",
            "limit": "【默契值16级】",
            "tips": [
                "“这杯饮品有北三岛的味道。”",
                "“毕竟是以银色青松为灵感调配的嘛。”",
                "“难怪。有一股凛冬的味道。”"
            ],
            "recipe": [
                "马天尼杯",
                "银色青松",
                "柠檬汁",
                "偏淡",
                "五叶长签"
            ]
        },
        {
            "name": "未来",
            "limit": "【默契值18级】",
            "tips": [
                "“我很好奇，你希望北洛毕业后回北三岛吗？”",
                "“比起我的‘希望’，他自己要先想清楚。”"
            ],
            "recipe": [
                "笛型香槟杯",
                "沉金记忆",
                "五分糖",
                "苦味素",
                "柠檬片"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "黑月亮",
                "多冰",
                "盐",
                "青提"
            ],
            "ex": [554, 620, 676],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 玄戈 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 玄戈 }