import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "轻卫", "skill": [MXLaohenEnum.大敌当前, MXLaohenEnum.影刻方阵], "attr": "wuli", "star": "6",
    "nameEn": "WEN LIU", "tag": ["群攻", "输出", "生存"], "originWorld": "海错", "orginChar": "古剑奇谭二",
    "cv": "", "openDate": "2025年03月27日", "resourse": ["定向共鸣·瑞金游方"],
    "introText": "海错，温留。你就是那什么执行官？嗯？原来你也听过老子的名号，倒还算有见识。你说，我和清和，哪个名头更响？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "5/58/0qft5p4ilkimtiuqym7yr35k6bprgrv.png",
            "c/c1/jvawyyti8ha1zyt384fyyfdgbeuo8sc.png",
            "d/d8/ta77n4w1geap6yrwmyzg1s1893l4vsc.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["寒芳诣门"],
            "imgs": [
                "3/3f/7ggo22gsomjm9kayn125kniq1kls01w.png"
            ],
            "listImg": [
                "0/04/tje42cnww5mwk9my0jkpqtz1ati290e.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "天地不照",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "5秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益"],//技能标签
            "sizeLevel": [
                ["500%", "5%"],
                ["575%", "6%"],
                ["650%", "6%"],
                ["725%", "7%"],
                ["800%", "8%"],
                ["875%", "9%"],
                ["950%", "10%"],
                ["1025%", "10%"],
                ["1100%", "11%"],
                ["1150%", "12%"],
                ["1200%", "12%"],
                ["1250%", "12%"],
                ["1300%", "13%"],
                ["1350%", "14%"],
                ["1400%", "14%"]
            ],
            "content": [
                "主动使用后，进入攻击姿态，消耗全部",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                "，且最少消耗",
                speSkillCon("50"),
                "点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                "。对自身周围半径",
                speSkillCon("300"),
                "范围造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，每点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                "额外造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "，每点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                "使自身【沧海尽扫】的自动技能伤害提高",
                speSkillCon("1%"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "，此外自动技能回复速度提高",
                speSkillCon("100%"),
                "，攻击速度提高",
                speSkillCon("50%"),
                "。该状态下不可使用【沧海尽扫】主动技能，该状态持续",
                speSkillCon("30"),
                "秒，视为进入",
                speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                "",
                "再次使用，可以切换到防御姿态"
            ]//满级技能内容描述
        }
    },
    {
        "name": "沧海尽扫",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],
            "tab": ["伤害", "回复"],
            "sizeLevel": [
                ["1000%", "800%", "480%"],
                ["1150%", "920%", "552%"],
                ["1300%", "1040%", "624%"],
                ["1450%", "1160%", "696%"],
                ["1600%", "1280%", "768%"],
                ["1750%", "1400%", "840%"],
                ["1900%", "1520%", "912%"],
                ["2050%", "1640%", "984%"],
                ["2200%", "1760%", "1056%"],
                ["2300%", "1840%", "1104%"],
                ["2400%", "1920%", "1152%"],
                ["2500%", "2000%", "1200%"],
                ["2600%", "2080%", "1248%"],
                ["2700%", "2160%", "1296%"],
                ["2800%", "2240%", "1344%"]
            ],
            "content": [
                "主动技能：仅",
                speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                "使用，对指定位置半径",
                speSkillCon("300"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "，并增加",
                speSkillCon("35"),
                "点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                "",
                "",
                "自动技能：冷却时间",
                speSkillCon("12"),
                "秒，对自身前方单体目标造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "，随后对半径",
                speSkillCon("300"),
                "扇形造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的物理伤害"),
                "，并附带破坏",
                speSkillCon("2段格挡条"),
                "效果，根据当前姿态触发的额外效果：",
                "",
                "自动技能：对自身前方扇形造成",
                speSkillCon("1250％最终攻击的炎元素伤害"),
                "，根据当前姿态所需的触发条件及效果：",
                "",
                speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                "：会瞬移至自身周围",
                speSkillCon("600"),
                "范围血量最低的目标附近（优先精英）触发自动技能，攻击后回至原地。该次自动技能造成伤害时可回复自身最大生命值的",
                speSkillCon("12%"),
                "。自身击杀目标时【沧海尽扫】的自动技能冷却时间减少",
                speSkillCon("50%"),
                "",
                speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                "：获得",
                speSkillCon("15"),
                "点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
            ]
        }
    },
    {
        "name": "在野",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "自身增益", "回复", "格挡条破坏3"],
            "sizeLevel": [
                ["24%", "2400%"],
                ["28%", "2800%"],
                ["32%", "3200%"],
                ["36%", "3600%"],
                ["38%", "3800%"],
                ["40%", "4000%"]
            ],
            "content": [
                "使自身基于目标生命值百分比提高伤害，目标生命值越低提高越多，最多提高",
                speSkillCon("", 0, -1, 0),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("30"),
                "秒。随后对自身周围半径",
                speSkillCon("500"),
                "范围的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的物理伤害"),
                "",
                "技能施放后，恢复自身",
                speSkillCon("30%"),
                "的最大生命值，并获得",
                speSkillCon("50"),
                "点",
                speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
            ]
        }
    },
    {
        "name": "特性：方外有兽",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "250"], ["攻击速度", "0.50次每秒"]],
            "atType": ["群体"],
            "content": [
                "防御姿态下：普通攻击对半径",
                speSkillCon("250"),
                "扇形范围目标造成",
                speSkillCon("120％最终攻击的物理伤害"),
                "",
                "攻击姿态下：普通攻击对半径",
                speSkillCon("250"),
                "扇形范围目标造成",
                speSkillCon("200％最终攻击的物理伤害"),
            ],//普通攻击
            "specialContent": [
                [
                    "普通攻击使目标基础减伤降低",
                    speSkillCon("30%"),
                    "（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "），防御姿态下效果基于当前",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "额外提高，每点额外降低",
                    speSkillCon("0.2%"),
                    "，最多降低",
                    speSkillCon("55%"),
                    "，持续",
                    speSkillCon("6"),
                    "秒",
                    "",
                    "初始为防御姿态，防御姿态下基础减伤提高",
                    speSkillCon("15%"),
                    "，普通攻击回复自身",
                    speSkillCon("3%"),
                    "最大生命值。施放异核技能或在防御姿态下施放技能，可以获得",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "，",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "上限100点。",
                    "",
                    "施放【天地不照】消耗",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "切换到攻击姿态"
                ],//零花本体特性
                [
                    "初始异核充能降低",
                    speSkillCon("45"),
                    "秒，施放自动技能后自身暴击率提高",
                    speSkillCon("30%"),
                    speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                    "且暴击伤害提高",
                    speSkillCon("50%"),
                    speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                    "，队友刻印攻击力提高",
                    speSkillCon("25%"),
                    speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒（温留离场或重伤时该效果消失）"
                ],//一花特性
                [
                    "攻击姿态或防御姿态下普通攻击降低目标基础减伤效果始终保持最大值，【沧海尽扫】自动技能的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，且受到自动技能伤害的目标后续受到所有伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                    "（温留离场或重伤时该效果消失）"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "海错来客",
            "limit": "【默契值4级】",
            "tips": [
                "“小家伙，我特意来寻你，你就拿这杯空杯糊弄我？！”",
                "“温留，这是一杯盐水……”",
                "“于我这海错来客而言，这与空杯何异？！”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "白开水",
                "常温",
                "盐",
                "三叶长签"
            ]
        },
        {
            "name": "天道难测",
            "limit": "【默契值1级】",
            "tips": [
                "“所以温留你是怎么来的森罗？”",
                "“想来大抵是因为当时灵力倾泄，引发了空间异动，不过……”",
                "“不过什么？”",
                "“往来境与天道轮回息息相关，为海错最玄妙之处……我不好说。”"
            ],
            "recipe": [
                "航海时代",
                "甜牛乳",
                "无糖",
                "热",
                "全脂牛奶",
                "水果签"
            ]
        },
        {
            "name": "久远之事",
            "limit": "【默契值13级】",
            "tips": [
                "“现如今的海错各族，真是一代不如一代。”",
                "“要知道在当年，就是青龙没落后的旁支一脉，也诞生过能力抗我十招的小辈呢。”",
                "温留高举着手中的海水半蓝，神色忿忿。"
            ],
            "recipe": [
                "扎啤杯",
                "海水半蓝",
                "正常冰",
                "苦味素",
                "茶冻",
                "长匙"
            ]
        },
        {
            "name": "万古春",
            "limit": "【默契值6级】",
            "tips": [
                "“这就是他们心心念念的疏帘淡月？还不如清和自己酿的万古春。”",
                "“万古春……这名字真好听，是清和前辈取的吗？”",
                "“是啊。那老道，说什么‘明月不常照，万古春复来’，于是就这么叫了。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "疏帘淡月",
                "五分糖",
                "少冰",
                "桂花"
            ]
        },
        {
            "name": "静电",
            "limit": "【默契值13级】",
            "tips": [
                "“温留，今天怎么只点了杯花茶？”",
                "“………………消火。”",
                "“好……吧……？不知道是不是我的错觉，您今天的头发好像格外蓬松啊？有点想————啊呀！静电！”",
                "“静电？你认识这邪火术法？”",
                "“邪火？术法？”",
                "对啊，在海错我可从来没遇到过这种事，也不知是海临的谁对我下了术法！要是被我逮到，我定要他好看————"
            ],
            "recipe": [
                "扎啤杯",
                "德里亚德风味花茶",
                "热",
                "叶子冻",
                "樱花"
            ]
        },
        {
            "name": "自助",
            "limit": "【默契值16级】",
            "tips": [
                "小家伙，我一进你这门便知，你这里很是有些好手————去，把他们都叫来，同我试试身手如何？",
                "“你拿出这杯沉金记忆做什么？”",
                "“还请高抬贵手，白荆不是自助比武场啊啊啊……”"
            ],
            "recipe": [
                "航海时代",
                "沉金记忆",
                "正常糖",
                "柠檬汁",
                "银杏叶"
            ]
        },
        {
            "name": "翻译",
            "limit": "【默契值8级】",
            "tips": [
                "“温留，听说自你来后，Deep Ocean的营业额又翻了几倍？”",
                "“哼，那臭老道写的酒水名册，几人看得懂！老子索性给他重写了！”",
                "“人形自走翻译器啊……”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "薄暮飞行",
                "柠檬汁",
                "偏烈",
                "黄瓜片",
                "心形插签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "酒酿凤梨",
                "无糖",
                "正常冰"
            ],
            "ex": [540, 604, 659, 719],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 温留 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 温留 }