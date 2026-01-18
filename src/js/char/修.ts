import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "轻卫", "skill": [MXLaohenEnum.乘人之危对地, MXLaohenEnum.物理专精], "attr": "wuli", "star": "5",
    "nameEn": "SHU", "tag": ["防护", "控场"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "刘北辰", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "魁主近侍——修，代表血露薇与贵司接洽，愿我们合作愉快。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "5/55/mkgsxwqlhlrq88nnslcnmx45k1bcezn.png",
            "4/46/eoaukdczqp8jevof7q0o81ni3pt53ye.png",
            "c/c3/6a32ztq307waknrc27btqrmynngva07.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "无畏印",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
        "tab": ["自身增益"],//技能标签
        "sizeLevel": [
            ["50%", "20%", "6%~10%"],
            ["54%", "22%", "6.6%~11%"],
            ["57%", "25%", "7.2%~12%"],
            ["63%", "27%", "7.8%~13%"],
            ["66%", "29%", "9%~15%"],
            ["72%", "31%", "9.6%~16%"],
            ["75%", "34%", "10.2%~17%"],
            ["79%", "36%", "10.8%~18%"],
            ["84%", "38%", "12%~20%"],
            ["88%", "40%", "12%~20%"],
            ["93%", "41%", "12%~20%"],
            ["100%", "43%", "12%~20%"],
            ["102%", "44%", "12.2%~20.4%"],
            ["104%", "45%", "12.5%~20.8%"],
            ["106%", "46%", "12.7%~21.2%"]
        ],
        "content": [
            "切换自身为攻击或防御姿态：",
            "",
            speSkillCon("【无畏印·攻击姿态】战斗姿态", SkillColorEnum.injuries),
            "",
            "攻击姿态”下可触发",
            speSkillCon("攻击速度：0.46次每秒"),
            "，攻击力提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
            "，普通攻击造成自身面前小范围伤害",
            "",
            speSkillCon("【无畏印·防御姿态】战斗姿态", SkillColorEnum.injuries),
            "",
            "“防御姿态”下可触发",
            "",
            "最大生命值提升",
            speSkillCon("", 0, -1, 1),
            "，基础减伤增加",
            speSkillCon("", 0, -1, 2),
            speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
            speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
            "，获得格挡能力（受专精影响），较易成为敌人的攻击目标；普通攻击造成自身面前大范围伤害，每次命中时有",
            speSkillCon("20%"),
            "的概率",
            speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
            "目标1秒"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "禅定印",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "主动技能",
        "skillTab": [["施放冷却", "30秒"], ["次数", "5"]],
        "tab": ["伤害", "负面状态", "格挡条破坏1"],
        "sizeLevel": [
            ["750%", "62%"],
            ["863%", "71%"],
            ["975%", "81%"],
            ["1088%", "90%"],
            ["1200%", "99%"],
            ["1313%", "109%"],
            ["1425%", "118%"],
            ["1538%", "127%"],
            ["1650%", "136%"],
            ["1725%", "143%"],
            ["1800%", "149%"],
            ["1875%", "155%"],
            ["1912%", "158%"],
            ["1950%", "161%"],
            ["1988%", "164%"]
        ],
        "content": [
            "给自身施加禅定印，以自身为中心持续发出重力波，对半径:",
            speSkillCon("300"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的物理伤害"),
            "",
            "之后对相同范围内的敌人每秒造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的物理伤害"),
            "及破坏",
            speSkillCon("1格挡值"),
            "效果，持续",
            speSkillCon("15"),
            "秒",
            "",
            "处于防御姿态下，每次造成伤害时额外对敌人造成短暂",
            speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
            "效果"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "觉者降魔",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "100秒"]],
        "tab": ["伤害", "负面状态"],
        "sizeLevel": [
            ["1400%"],
            ["1575%"],
            ["1750%"],
            ["1925%"],
            ["2013%"],
            ["2100%"]
        ],
        "content": [
            "施展降魔印，对指定半径",
            speSkillCon("600"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的物理伤害"),
            "，并将他们以",
            speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "牵引向中心点"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：诸相皆空",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "200"], ["攻击速度", "0.50次每秒"]],
        "atType": ["单体"],
        "content": [
            "对面前小范围挥拳造成",
            speSkillCon("240%最终攻击的物理伤害")
        ],//普通攻击
        "specialContent": [
            [
                "可以在攻击姿态与防御姿态间切换，获得不同能力（初始处于攻击姿态）",
                "",
                "处于攻击姿态",
                speSkillCon("10"),
                "秒后，进入“忿怒相”状态，“忿怒相”下切换姿态会对周围",
                speSkillCon("300"),
                "范围的敌人造成",
                speSkillCon("500%最终攻击的物理伤害"),
                "并移除“忿怒相”",
                "",
                "处于防御姿态",
                speSkillCon("10"),
                "秒后，进入“寂境相”状态，“寂静相”下切换姿态会击晕周围",
                speSkillCon("300"),
                "范围敌人",
                speSkillCon("6"),
                "秒并移除“寂境相”"
            ],//零花本体特性
            [
                "主动技能【禅定印】持续时间延长",
                speSkillCon("5"),
                "秒"
            ],//一花特性
            [
                "不同姿态时获得的能力效果额外提升",
                speSkillCon("20%")
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
            "name": "误会一场",
            "limit": "【默契值1级】",
            "tips": [
                "“修……难道你也喜欢……B……S……”",
                "“小友何出此言？”",
                "“你桌上的那杯双莓之恋……天啊……还是双倍糖……珍珠……”",
                "“这是为小友准备的。”",
                "“啊……谢谢你哦。”"
            ],
            "recipe": [
                "淑女风尚",
                "双莓之恋",
                "双倍糖",
                "少冰",
                "珍珠",
                "迷迭香"
            ]
        },
        {
            "name": "关心",
            "limit": "【默契值1级】",
            "tips": [
                "即便加了糖浆与雪顶，仍旧遮掩不住监督杯中双倍浓缩咖啡的浓浓苦味。",
                "“小友若是困乏，还是早些休息为好。”"
            ],
            "recipe": [
                "经典格纹",
                "经典特浓咖啡",
                "糖浆",
                "加双份",
                "原味雪顶",
                "樱花"
            ]
        },
        {
            "name": "合作愉快？",
            "limit": "【默契值1级】",
            "tips": [
                "直到修离开，他一次都没有拿起面前的青叶陶瓷杯。",
                "“修是不是不太满意这次的合作啊……”",
                "“他只是单纯不太喜欢姜茶吧。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "姜茶",
                "正常糖",
                "少冰",
                "薄荷叶"
            ]
        },
        {
            "name": "一切从简",
            "limit": "【默契值13级】",
            "tips": [
                "“无需费心，给鄙人一杯冰水即可。”"
            ],
            "recipe": [
                "鎏·金",
                "白开水",
                "少冰",
                "柠檬汁",
                "白玉兰"
            ]
        },
        {
            "name": "违和感",
            "limit": "【默契值1级】",
            "tips": [
                "“修，你居然会喝橘子汽水？”",
                "“偶尔，鄙人也想了解一下年轻人的喜好。”",
                "修有些苦恼地看着面前装饰着水果签的杯子。",
                "“就是这杯子，有些奇怪……”",
                "“哈哈哈。”"
            ],
            "recipe": [
                "淑女风尚",
                "玻璃橘子",
                "正常冰",
                "叶子冻",
                "水果签"
            ]
        },
        {
            "name": "来而不往非礼也",
            "limit": "【默契值5级】",
            "tips": [
                "“热雪梨汁？”",
                "“我听你的鼻音有些重，就把你的点单换了……修你不会怪我自作主张吧？”",
                "“小友一片好心，鄙人感念还来不及。只是……”",
                "“只是什么？”",
                "“来而不往非礼也。这一枚饼干，就当是给小友的回赠了。”"
            ],
            "recipe": [
                "经典格纹",
                "鲜榨雪梨汁",
                "热",
                "汪汪饼干",
                "三叶长签"
            ]
        },
        {
            "name": "意料之外",
            "limit": "【默契值18级】",
            "tips": [
                "在监督的坚持之下，修难得点了一款调制酒。",
                "薄荷风味淡酒，少冰，佐以青梅……",
                "“怎么样怎么样？”",
                "“……小友恐怕比鄙人更了解自己的喜好了。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "青草薄荷",
                "少冰",
                "偏淡",
                "青梅",
                "心形插签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "银色青松",
                "苦味素",
                "偏淡"
            ],
            "ex": [495],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "蓝莓"
            ],
            "ex": [561],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 修 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 修 }