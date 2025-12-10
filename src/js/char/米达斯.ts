import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.昂扬斗志方块α型, MXLaohenEnum.物理异能], "attr": "wuli", "star": "6",
    "nameEn": "MIDAS", "tag": ["输出", "召唤"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "刘雨轩", "openDate": "2024年10月31日", "resourse": ["定向共鸣·荒土悲歌"],
    "introText": "好久不见，监督小姐，如果没有你的帮助，我恐怕连站在这的机会也不会有……米达斯·奈格尔图，向您表达最诚挚的谢意。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "7/7d/6fxc73ynwbe6ovkeszhyg9bnxxopglh.png",
            "4/4e/r5gb1gynn1qsnbvi4kw5r6xsauekthf.png",
            "1/13/gwx3x4oewcauy3z9001vyzjtu0evf20.png"
        ]
    }
}

const Skill = [
    {
        "name": "暗噬",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "18秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "格挡条破坏3"],//技能标签
            "sizeLevel": [
                ["720%", "1040%", "480%"],
                ["828%", "1196%", "552%"],
                ["936%", "1352%", "624%"],
                ["1044%", "1508%", "696%"],
                ["1152%", "1664%", "768%"],
                ["1260%", "1820%", "840%"],
                ["1368%", "1976%", "912%"],
                ["1476%", "2132%", "984%"],
                ["1584%", "2288%", "1056%"],
                ["1656%", "2392%", "1104%"],
                ["1728%", "2496%", "1152%"],
                ["1800%", "2600%", "1200%"],
                ["1872%", "2704%", "1248%"],
                ["1944%", "2808%", "1296%"],
                ["2016%", "2912%", "1344%"]
            ],
            "content": [
                speSkillCon("【暗噬】技能形态      指令冷却：", SkillColorEnum.injuries),
                speSkillCon("18"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "指挥「灾影」对",
                speSkillCon("300"),
                "范围内敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，并触发",
                speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                "",
                "",
                speSkillCon("【暗噬·归巢】技能形态    指令冷却：", SkillColorEnum.injuries),
                speSkillCon("10"),
                speSkillCon("秒", SkillColorEnum.injuries),
                "",
                "当「灾影」处于",
                speSkillConWithImg(SkillDescStatusImg.米达斯祸引),
                "「祸引」状态时，可以施放1次。",
                "",
                "「灾影」对目标区域",
                speSkillCon("300"),
                "范围内敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "，并附加「苦痛涡核引爆」伤害。如果区域内有目标可以被拖拽，「灾影」会以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "将目标位置敌人拖拽到米达斯身边。",
                "",
                "「苦痛涡核引爆」：「灾影」对目标造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的物理伤害")
            ]//满级技能内容描述
        }
    },
    {
        "name": "沙啸",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "负面状态", "格挡条破坏3"],
            "sizeLevel": [
                ["200%", "600%", "24%"],
                ["230%", "690%", "28%"],
                ["260%", "780%", "31%"],
                ["290%", "870%", "35%"],
                ["320%", "960%", "38%"],
                ["350%", "1050%", "42%"],
                ["380%", "1140%", "46%"],
                ["410%", "1230%", "49%"],
                ["440%", "1320%", "53%"],
                ["460%", "1380%", "55%"],
                ["480%", "1440%", "58%"],
                ["500%", "1500%", "60%"],
                ["520%", "1560%", "62%"],
                ["540%", "1620%", "65%"],
                ["560%", "1680%", "67%"]
            ],
            "content": [
                "对自身周围",
                speSkillCon("500"),
                "范围内敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，且「灾影」会同时造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "，并触发",
                speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                "效果",
                "",
                "技能释放结束后，受到伤害的敌人根据身上物理抗性降低效果的",
                speSkillCon("", 0, -1, 2),
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
            "sizeLevel": [
                ["2400%", "15%"],
                ["2800%", "18%"],
                ["3200%", "20%"],
                ["3600%", "23%"],
                ["3800%", "24%"],
                ["4000%", "25%"],
            ],
            "content": [
                "指挥「灾影」对扇形区域内敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，并清空指令冷却时间。",
                "",
                "",
                "使「灾影」进入持续18秒的",
                speSkillConWithImg(SkillDescStatusImg.米达斯祸引),
                "「祸引」状态：可以施放1次「暗噬·归巢」，且「灾影」造成的所有伤害暴击时伤害提高",
                speSkillCon("", 0, -1, 1),
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
    },
    {
        "name": "技能同调",
        "aliasNum": "技能同调",
        "repSkill": 1,//被替换的技能，值为该角色技能组数据对应技能下标
        "unlock": LaohenNameEnum.明日暄风,//该技能解锁条件，拥有对应的烙痕ID
        "detail": {
            "name": "冥寂",
            "aliasNum": "2",
            "maxLevel": 15,
            "type": "自动技能",
            "skillTab": [["指令冷却", "15秒"]],
            "tab": ["自身增益", "伤害", "负面状态", "格挡条破坏3"],
            "sizeLevel": [
                ["800%", "320%"],
                ["920%", "368%"],
                ["1040%", "416%"],
                ["1160%", "464%"],
                ["1280%", "512%"],
                ["1400%", "560%"],
                ["1520%", "608%"],
                ["1640%", "656%"],
                ["1760%", "704%"],
                ["1840%", "736%"],
                ["1920%", "768%"],
                ["2000%", "800%"],
                ["2080%", "832%"],
                ["2160%", "864%"],
                ["2240%", "896%"]
            ],
            "content": [
                "「灾影」对自身周围",
                speSkillCon("600"),
                "范围内敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，并触发",
                speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                "效果。同时【冥寂】命中时「灾影」对目标造成持续伤害，",
                speSkillCon("12"),
                "秒内每秒造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "",
                "被动：若除了自身以外场上没有其他<尖锋、轻卫、铁御>，则自身触发「战神」效果：【冥寂】技能会",
                speSkillCon("以3级"),
                speSkillCon("[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "拉拽命中目标，且自身免疫恐惧或魅惑效果，受到伤害降低",
                speSkillCon("30%")
            ],
            "specialContent": [
                [
                    "自身自动技能回复速度提高30%",
                    speSkillCon("(属性乘区·自动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区自动技能回复速度),
                    "，额外攻击力提高30%",
                    speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成),
                    "",
                    "「战神」状态下，【冥寂】技能范围扩大50%"
                ],//特质Ⅱ级解锁
                [
                    "【冥寂】的持续伤害效果每次对首领目标造成伤害，下次对其造成的伤害会提高30%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，最多提高至240%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "。",
                    "",
                    "「战神」状态下，【冥寂】释放后会额外对命中目标造成一次相当于4秒【冥寂】持续伤害的总伤害，可受到上述增伤效果加成。"
                ],//特质Ⅴ级解锁
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