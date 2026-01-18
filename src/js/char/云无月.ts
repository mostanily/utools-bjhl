import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "轻卫", "skill": [MXLaohenEnum.大敌当前, MXLaohenEnum.蚀之激励], "attr": "shi", "star": "6",
    "nameEn": "LORELLE", "tag": ["防护", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
    "cv": "冯骏骅", "openDate": "2024年01月12日", "resourse": ["常态共鸣·森罗万象", "常态共鸣"],
    "introText": "云无月，依照约定，我会在这里停留一段时间，需要协助时，可以直接联系我。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "b/bd/tmmtyf4tc088841e6aiqbf6qnit6eut.png",
            "0/07/8ny18yddtccho8pksu856mw9enk8vwe.png",
            "e/eb/i52o3ygjkilh5mfbiwflsk2nz7ke5ft.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["独家幕后"],
            "imgs": [
                "b/b6/7a82chtzbacbepqfldyyj0kr7mi6pa8.png"
            ],
            "listImg": [
                "1/12/9f9l42lv2hpayt72h4veoqwgbvfnk2i.png"
            ]
        }
    ]
}

const skill1: DefaultNormalSkillObj = {
    "name": "前奏曲",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
        "tab": ["自身增益"],//技能标签
        "sizeLevel": [
            ["160%", "100%", "240%", "140%"],
            ["184%", "115%", "276%", "161%"],
            ["208%", "130%", "312%", "182%"],
            ["232%", "145%", "348%", "203%"],
            ["256%", "160%", "384%", "224%"],
            ["280%", "175%", "420%", "245%"],
            ["304%", "196%", "456%", "266%"],
            ["328%", "205%", "492%", "287%"],
            ["352%", "220%", "528%", "308%"],
            ["368%", "230%", "552%", "322%"],
            ["384%", "240%", "576%", "336%"],
            ["400%", "250%", "600%", "350%"],
            ["416%", "260%", "624%", "364%"],
            ["432%", "270%", "648%", "378%"],
            ["448%", "280%", "672%", "392%"]
        ],
        "content": [
            speSkillCon("【前奏曲】技能形态", SkillColorEnum.injuries),
            "",
            "攻击姿态可用，切换至防御姿态：",
            "",
            "较易成为敌人的攻击目标，增加自身",
            speSkillCon("12%~20%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
            speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
            "基础减伤，",
            speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
            "对敌方单位造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("体质的蚀元素伤害"),
            "+",
            speSkillCon("", 0, -1, 1),
            speSkillCon("专精的蚀元素伤害"),
            "；其他友方同调者受到伤害时，若自身当前格挡值不为0，会代替承受",
            speSkillCon("30%"),
            "的所有伤害；并为终端附加",
            speSkillCon("2点蚀爆值"),
            "，蚀爆值获取每秒最多触发一次",
            "",//空表示该处需要设置为<br>标签
            speSkillCon("【变奏曲】技能形态", SkillColorEnum.injuries),
            "",
            "防御姿态可用，切换至攻击姿态：",
            "",
            speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
            "对敌方单位造成",
            speSkillCon("", 0, -1, 2),
            speSkillCon("最终攻击的蚀元素伤害"),
            "+",
            speSkillCon("", 0, -1, 3),
            speSkillCon("专精的蚀元素伤害"),
            "，敌方单位为精英目标时该伤害额外提高",
            speSkillCon("30%"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "；非重伤状态下自身及",
            speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
            "的友方同调者普通攻击伤害提升",
            speSkillCon("20%"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "蚀音连奏",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "20秒"]],
        "tab": ["伤害", "穿透屏障", "持续施法", "格挡条破坏1"],
        "sizeLevel": [
            ["840%", "500%", "300%"],
            ["966%", "575%", "345%"],
            ["1092%", "650%", "390%"],
            ["1218%", "725%", "435%"],
            ["1344%", "800%", "480%"],
            ["1470%", "875%", "525%"],
            ["1596%", "950%", "570%"],
            ["1722%", "1025%", "615%"],
            ["1848%", "1100%", "660%"],
            ["1932%", "1150%", "690%"],
            ["2016%", "1200%", "720%"],
            ["2100%", "1250%", "750%"],
            ["2184%", "1300%", "780%"],
            ["2268%", "1350%", "810%"],
            ["2352%", "1400%", "840%"]
        ],
        "content": [
            "持续对周围",
            speSkillCon("300"),
            "范围内的敌方造成共",
            speSkillCon("", 0, -1, 0),
            speSkillCon("专精的蚀元素伤害"),
            "，每次伤害附带破坏",
            speSkillCon("1段格挡条"),
            "，最后弹奏会根据当前演奏的曲目产生额外效果",
            "",
            speSkillCon("当前演奏【变奏曲】「攻击姿态」：", SkillColorEnum.injuries),
            "",
            "为终端附加",
            speSkillCon("15点蚀爆值"),
            "，最后弹奏将对正前方敌人造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，并同时附带破坏",
            speSkillCon("5段格挡条"),
            "效果",
            "",
            speSkillCon("当前演奏【前奏曲】「防御姿态」：", SkillColorEnum.injuries),
            "",
            "场上每有一名友方单元为终端附加",
            speSkillCon("4点蚀爆值"),
            "，最多附加",
            speSkillCon("50点蚀爆值"),
            "；最后弹奏将对",
            speSkillCon("500"),
            "范围内敌方造成",
            speSkillCon("", 0, -1, 2),
            speSkillCon("体质的蚀元素伤害")
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "长夜咏叹",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["伤害", "自身增益", "穿透屏障", "持续施法"],
        "sizeLevel": [
            ["1800%", "30%"],
            ["2100%", "35%"],
            ["2400%", "40%"],
            ["2700%", "45%"],
            ["2850%", "48%"],
            ["3000%", "50%"]
        ],
        "content": [
            "开始持续演奏，演奏期间对随机",
            speSkillCon("8"),
            "名生命值较高的敌方单位共造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("专精的蚀元素伤害"),
            "，并进入【捕梦】状态，提升当前演奏曲目所产生的效果",
            "",
            speSkillCon("当前演奏【前奏曲】「防御姿态」：", SkillColorEnum.injuries),
            "",
            "获得当前最大生命值的护盾，代替友方承受",
            speSkillCon("65%"),
            "所受到的所有伤害；期间为终端附加双倍蚀爆值，蚀爆值获取每秒最多触发一次",
            "",
            speSkillCon("当前演奏【变奏曲】「攻击姿态」：", SkillColorEnum.injuries),
            "",
            speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
            "造成的伤害额外提高",
            speSkillCon("18%"),
            "",
            speSkillCon("【捕梦】状态效果：", SkillColorEnum.injuries),
            "",
            "期间自身免疫大多数控制效果，同时友方造成的所有伤害会被记录在梦境中，并在演奏结束时全场敌方单位将分摊",
            speSkillCon("", 0, -1, 1),
            "梦境所记录的伤害，该伤害为",
            speSkillCon("[真实伤害]", SkillColorEnum.normal, ToastSkillEnum.真实伤害)
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：月翳将生",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "500"], ["攻击速度", "0.30次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "弹奏旋律向当前目标发射琴音造成",
            speSkillCon("300%最终攻击的蚀元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "可以通过演奏不同曲目来切换自身姿态（初始演奏【变奏曲】「攻击姿态」），并为场上友方同调者添加",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "效果，友方同调者造成普通攻击伤害时会触发",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "，根据当前演奏的曲目造成伤害，",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "每",
                speSkillCon("2"),
                "秒最多触发一次",
                "",
                "蚀元素同调者触发",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "时会额外为终端附加",
                speSkillCon("1点蚀爆值"),
                "",
                "自身攻击速度固定无法改变，且每次普通攻击为终端附加",
                speSkillCon("1点蚀爆值"),
                "，自身每额外获得的",
                speSkillCon("10%"),
                "攻击速度提升都会降低",
                speSkillCon("0.2"),
                "秒",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "的触发间隔",
                "",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "造成的伤害视为自身普通攻击伤害"
            ],//零花本体特性
            [
                "云无月在场时，场上",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "效果造成的伤害提升",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "，当云无月重伤或进入后备队时，当前场上的",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "效果不会消失，但",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "造成的伤害减少",
                speSkillCon("50%")
            ],//一花特性
            [
                "受到",
                speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                "伤害的敌方目标，蚀元素抗性降低",
                speSkillCon("20%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低)
            ]//三花特性
        ]
    }
}
const skillTeseStrong: DefaultTeseSkillObj = {
    "name": "特性强化",
    "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "content": [
            "复调造成伤害时，降低目标1%",
            speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
            "基础减伤，最多叠加35层（该效果属于",
            speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
            "）；异核技能初始冷却时间缩短一半，且异核技能期间复调伤害提高20％",
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese,
    skillTeseStrong
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "双向奔赴",
            "limit": "【默契值1级】",
            "tips": [
                "在后援会的组织下，每一个参与这场音乐会的工作人员都拿到了一份精心准备的伴手礼和一杯在海临颇受欢迎的青提啵啵奶茶。",
                "“我记得云小姐你不爱喝这个，要不让他们换……”",
                "“无妨，拿给我吧。”"
            ],
            "recipe": [
                "淑女风尚",
                "青提啵啵奶茶",
                "双倍糖",
                "多冰",
                "咸梅干",
                "银杏叶"
            ]
        },
        {
            "name": "略有疑惑",
            "limit": "【默契值1级】",
            "tips": [
                "“……我听说海临人喝姜茶是为了暖胃，为什么要往里面放冰块？”"
            ],
            "recipe": [
                "经典格纹",
                "姜茶",
                "正常糖",
                "正常冰",
                "心形插签"
            ]
        },
        {
            "name": "绝对音感",
            "limit": "【默契值4级】",
            "tips": [
                "“这瓶橘子汽水被人动了手脚。”",
                "“嗯？可是它看起来很正常啊……”",
                "“如果它没问题，开瓶的声音就不应该是降B。”",
                "“……绝对音感还能这么用吗？”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "玻璃橘子",
                "多冰",
                "芒果果冻",
                "白玉兰"
            ]
        },
        {
            "name": "专注",
            "limit": "【默契值1级】",
            "tips": [
                "琴室外传来一阵醉人的凤梨甜香，就连休伯特也忍不住四处张望，但云无月的琴声毫无动摇。",
                "她的世界，至少在这一刻，只有眼前的d小调协奏曲k466。"
            ],
            "recipe": [
                "淑女风尚",
                "酒酿凤梨",
                "双倍糖",
                "少冰",
                "三叶长签"
            ]
        },
        {
            "name": "无心之举？",
            "limit": "【默契值10级】",
            "tips": [
                "云无月似乎很喜欢咖啡口味的任何东西，但对水果兴致缺缺。",
                "就像现在，她正状似无意地把杯中的樱桃放在一边。",
                "而监督也心照不宣地移开了眼。"
            ],
            "recipe": [
                "经典格纹",
                "黑月亮",
                "少冰",
                "柠檬汁",
                "樱桃",
                "桂花"
            ]
        },
        {
            "name": "简单即可",
            "limit": "【默契值13级】",
            "tips": [
                "一杯简单的苏打水，若稍嫌不够，再向其中添些丰富口感的果冻即可。"
            ],
            "recipe": [
                "鎏·金",
                "冰镇苏打水",
                "少冰",
                "茶冻",
                "精致纸伞"
            ]
        },
        {
            "name": "恩利都往事",
            "limit": "【默契值18级】",
            "tips": [
                "“恩利都盛产乳制品，小时候我不爱喝牛奶，休伯特总是把它混在咖啡里，再往里面放上两个奶精球……”"
            ],
            "recipe": [
                "鎏·金",
                "好椰拿铁",
                "奶精球",
                "加双份",
                "心形插签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "酒酿凤梨",
                "五分糖",
                "少冰"
            ],
            "ex": [363],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "玻璃橘子",
                "少冰",
                "蜜桃冻"
            ],
            "ex": [405],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "冰镇酸梅汤",
                "五分糖",
                "蜜桃冻"
            ],
            "ex": [433],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "黑月亮",
                "盐",
                "少冰",
                "青梅"
            ],
            "ex": [498],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 云无月 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 云无月 }