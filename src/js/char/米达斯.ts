import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.昂扬斗志方块α型, MXLaohenEnum.物理异能], "attr": "wuli", "star": "6",
    "nameEn": "MIDAS", "tag": ["输出", "召唤"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "刘雨轩", "openDate": "2024年10月31日", "resourse": ["定向共鸣·荒土悲歌"]
}

const Skill = [
    {
        "name": "暗噬",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "18秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "格挡条破坏3"],//技能标签
            "content": [
                speSkillCon("【暗噬】技能形态      指令冷却：", SkillColorEnum.injuries),
                speSkillCon("18"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "指挥「灾影」对",
                speSkillCon("300"),
                "范围内敌人造成",
                speSkillCon("1800％最终攻击的物理伤害"),
                "，并触发",
                speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                "",
                "",
                speSkillCon("【暗噬·归巢】技能形态    指令冷却：", SkillColorEnum.injuries),
                speSkillCon("10"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "当「灾影」处于「祸引」状态时，可以施放1次。",
                "",
                "「灾影」对目标区域",
                speSkillCon("300"),
                "范围内敌人造成",
                speSkillCon("2600％最终攻击的物理伤害"),
                "，并附加「苦痛涡核引爆」伤害。如果区域内有目标可以被拖拽，「灾影」会以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "将目标位置敌人拖拽到米达斯身边。",
                "",
                "「苦痛涡核引爆」：「灾影」对目标造成",
                speSkillCon("1200％最终攻击的物理伤害")
            ]//满级技能内容描述
        }
    },
    {
        "name": "沙啸",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "负面状态", "格挡条破坏3"],
            "content": [
                "对自身周围",
                speSkillCon("500"),
                "范围内敌人造成",
                speSkillCon("500％最终攻击的物理伤害"),
                "，且「灾影」会同时造成",
                speSkillCon("1500％最终攻击的物理伤害"),
                "，并触发",
                speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                "效果",
                "",
                "技能释放结束后，受到伤害的敌人根据身上物理抗性降低效果的",
                speSkillCon("60%"),
                speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                "获得受伤害增加效果，持续",
                speSkillCon("60"),
                "秒。（该效果在状态持续期间会随物理抗性效果动态变化，米达斯重伤或离场时该效果消失）"
            ]
        }
    },
    {
        "name": "灾渊来客",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["伤害", "自身增益", "格挡条破坏3"],
            "content": [
                "指挥「灾影」对扇形区域内敌人造成",
                speSkillCon("4000％最终攻击的物理伤害"),
                "，并清空指令冷却时间。",
                "",
                "",
                "使「灾影」进入持续18秒的「祸引」状态：可以施放1次「暗噬·归巢」，且「灾影」造成的所有伤害暴击时伤害提高",
                speSkillCon("25%"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "。"
            ]
        }
    },
    {
        "name": "特性：灾厄漩涡",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "格挡条破坏1"],
            "content": [
                "对当前目标造成",
                speSkillCon("80%最终攻击的物理伤害"),
                "，且「灾影」会协同攻击造成",
                speSkillCon("120%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "战斗开始时会召唤「灾影」，「灾影」视为召唤物米达斯的【暗噬】技能形态、【沙啸】技能会触发",
                    speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                    "效果：",
                    "",
                    "对敌人施加「苦痛涡核标记」，如果敌人已拥有「苦痛涡核标记」则消耗标记并造成「苦痛涡核引爆」伤害（受主动技能【暗噬】等级影响）。",
                    "",
                    "「苦痛涡核标记」不会随时间消失，米达斯重伤或离场时，标记消失。",
                    "",
                    "",
                    "当场上有物理同调者或属于同调者的召唤物造成伤害时，「灾影」会对伤害目标（优先精英及首领目标）追加一次",
                    speSkillCon("400%最终攻击的物理伤害"),
                    "，该效果每个同调者每",
                    speSkillCon("5"),
                    "秒最多触发1次。此伤害视为米达斯造成的召唤物伤害。"
                ],//零花本体特性
                [
                    "当「灾影」处于「祸引」状态时，米达斯可以额外施放",
                    speSkillCon("1"),
                    "次「暗噬·归巢」。",
                    "",
                    "「暗噬·归巢」的技能伤害和「苦痛涡核引爆」伤害提高",
                    speSkillCon("20%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "「灾影」造成的所有伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "敏锐察觉",
            "limit": "【默契值1级】",
            "tips": [
                "“奶油芭蕾的味道……似乎和之前有所不同。”",
                "“今天普通牛奶刚好用完了，就换了燕麦奶。你尝出来了？”",
                "“嗯。有股……硝烟的味道。”"
            ],
            "recipe": [
                "简约至上",
                "奶油芭蕾",
                "燕麦奶",
                "标准",
                "紫藤"
            ]
        },
        {
            "name": "难言的魔力",
            "limit": "【默契值5级】",
            "tips": [
                "监督是故意将满杯熊熊燕麦牛奶放到米达斯面前的。",
                "米达斯清楚地知道这一点。",
                "——不知为何，他身边的人似乎都爱看他为难的样子。"
            ],
            "recipe": [
                "竹节茶杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "焦糖布丁",
                "银杏叶"
            ]
        },
        {
            "name": "箱中之物",
            "limit": "【默契值1级】",
            "tips": [
                "尽管米达斯本人对姜茶不甚感冒，但那箱中之物似乎对它颇为青睐。",
                "每当监督端出一杯热气腾腾的姜茶，它总是格外平静。"
            ],
            "recipe": [
                "简约至上",
                "姜茶",
                "正常糖",
                "热",
                "水果签"
            ]
        },
        {
            "name": "慨叹",
            "limit": "【默契值1级】",
            "tips": [
                "“换作一年前，我绝对想不到如今我还能拥有端坐饮茶的余裕。”"
            ],
            "recipe": [
                "竹节茶杯",
                "枸杞菊花茶",
                "青提",
                "茶冻",
                "柠檬片"
            ]
        },
        {
            "name": "助力？",
            "limit": "【默契值10级】",
            "tips": [
                "干苹果的醇香萦绕鼻尖。",
                "米达斯对这味道再熟悉不过。",
                "在无数个辗转反侧的夜，唯有它能助自己一臂之力。"
            ],
            "recipe": [
                "自证方圆",
                "干苹果",
                "多冰",
                "偏烈",
                "奇异果片",
                "樱花"
            ]
        },
        {
            "name": "伴手礼",
            "limit": "【默契值18级】",
            "tips": [
                "“监督，也许……你能将酸梅汤的方子给我吗？”",
                "“当然可以。是带给齐齐的吗？”",
                "“嗯。”"
            ],
            "recipe": [
                "熊熊杯",
                "冰镇酸梅汤",
                "五分糖",
                "汪汪饼干",
                "蝴蝶结"
            ]
        },
        {
            "name": "晨星",
            "limit": "【默契值10级】",
            "tips": [
                "无论何时何地，米达斯的身边总是备着一个装满清水的水壶。",
                "“时刻准备投入战斗是军人的天职。”",
                "米达斯没有注意到，在说出这句话时，他难得地昂起了头，眼神如晨星般闪烁。"
            ],
            "recipe": [
                "自证方圆",
                "白开水",
                "热",
                "柠檬汁",
                "桂花"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "白开水",
                "常温",
                "盐"
            ],
            "ex": [594, 665, 725, 791],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 米达斯 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 米达斯 }