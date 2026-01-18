import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形α型, MXLaohenEnum.隐匿回响], "attr": "yan", "star": "6",
    "nameEn": "Thea", "tag": ["群攻", "生存"], "originWorld": "夜摩", "orginChar": "古剑奇谭网络版",
    "cv": "龟娘", "openDate": "2024年05月09日", "resourse": ["定向共鸣·走向彼岸"], "laohenLink": LaohenNameEnum.光阴间隙,
    "introText": "夜摩国女王，伊琅相思。现在正在适应另一些全新的身份——譬如，成为你们的一员，加入这个世界。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "d/dd/bgm55nxobsfu9wto8f9nmyjqg7rvck2.png",
            "b/b4/rvyizwrn2o1chqut3qjkpbf666bzcex.png",
            "c/ce/n67vyz47xh03t5zm21fkqvtlyuxeyxy.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "日影",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "抉择技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "-"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "对空"],//技能标签
        "content": [
            "贝努之影初始以",
            speSkillCon("600"),
            "半径围绕自身转动，每8秒转动一周，对路径上碰撞的敌方单位造成",
            speSkillCon("625%最终攻击的炎元素伤害"),
            "",
            speSkillCon("「日影·飞散」", SkillColorEnum.injuries),
            "和",
            speSkillCon("「日影·飞聚」", SkillColorEnum.injuries),
            "可调整贝努之影的旋转半径（指令冷却均为",
            speSkillCon("10"),
            "秒）：",
            "",
            speSkillCon("「日影·飞散」技能形态", SkillColorEnum.injuries),
            "",
            "使贝努之影的旋转半径增加",
            speSkillCon("200"),
            "，旋转半径最大不超过",
            speSkillCon("800"),
            "",
            speSkillCon("「日影·飞聚」技能形态", SkillColorEnum.injuries),
            "",
            "使贝努之影的旋转半径减少",
            speSkillCon("200"),
            "，旋转半径最小不少于",
            speSkillCon("400")
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "不灭明灵",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],
        "tab": ["伤害", "友方增益", "拦截", "对空", "穿透屏障"],
        "content": [
            "被动：每隔",
            speSkillCon("10"),
            "秒会记录自身当前生命值，并使自身",
            speSkillCon("[回溯]", SkillColorEnum.normal, ToastSkillEnum.回溯),
            "到上一次记录的生命值",
            "",
            "主动：拦截范围内的所有投射物，并在",
            speSkillCon("15"),
            "秒内持续对半径",
            speSkillCon("500"),
            "范围内的所有敌方单位造成",
            speSkillCon("3000%最终攻击的炎元素伤害"),
            "",
            "使除自身外其他友方同调者进入持续",
            speSkillCon("10"),
            "秒的",
            speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
            "状态，同时记录友方同调者当前的生命值。",
            speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
            "状态期间友方同调者受到直接伤害后，若存活且生命值百分比低于",
            speSkillCon("50%"),
            "，则将退出",
            speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
            "状态，并",
            speSkillCon("[回溯]", SkillColorEnum.normal, ToastSkillEnum.回溯),
            "到记录的生命值状态",
            "",
            "场上存在处于",
            speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
            "状态的友方同调者时，伊琅相思自身基础减伤提升",
            speSkillCon("35%"),
            speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries)
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "天威·刑狱",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["炎区域", "自身增益", "伤害", "对空", "穿透屏障"],
        "content": [
            "进入「天威」状态并记录当前场上及后续上场的友方同调者生命值，状态持续",
            speSkillCon("30"),
            "秒。",
            "",
            "「天威」期间，普通攻击会对当前目标造成一次「魂锁」",
            "",
            "「魂锁」：对目标周围半径",
            speSkillCon("250"),
            "造成",
            speSkillCon("500%最终攻击的炎元素伤害"),
            "和",
            speSkillCon("8"),
            "秒眩晕，如果目标当前生命值百分比大于",
            speSkillCon("50%"),
            "，则该次伤害提升",
            speSkillCon("100%"),
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，场上最多存在",
            speSkillCon("6"),
            "处「魂锁」，「天威」期间的前",
            speSkillCon("2"),
            "次「魂锁」会产生炎元素地形",
            "",
            "「天威」状态期间可再次释放「天威·显耀」",
            "",
            "「天威·显耀」：对选中区域半径",
            speSkillCon("500"),
            "范围内的所有敌方单位造成",
            speSkillCon("3000%最终攻击的炎元素伤害"),
            "，并消耗场上所有「魂锁」，每消耗一处「魂锁」都会使该伤害提升",
            speSkillCon("20%"),
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，释放结束后不会退出「天威」状态",
            "",
            "「天威」期间，「不灭明灵」的被动效果将会同时对场上其他友方同调者生效",
            "",
            "战术家特性：开战时异核充能增加50%"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：轮回印记",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.13次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "持续攻击目标，对目标造成",
            speSkillCon("770%最终攻击的炎元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "战斗开始时，会记录自身当前的生命值",
                "",
                "自身周围存在",
                speSkillCon("5"),
                "只贝努之影，贝努之影视为召唤物，且会以",
                speSkillCon("600"),
                "半径围绕自身转动，贝努之影会对路径上碰撞的敌方单位造成伤害（实际伤害随「日影」技能等级提升），眩晕目标",
                speSkillCon("1"),
                "秒；并使敌方炎元素抗性降低",
                speSkillCon("30%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续",
                speSkillCon("10"),
                "秒"
            ],//零花本体特性
            [
                "「贝努之影」的暴击率提高",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "，且每次命中目标回复",
                speSkillCon("1"),
                "点异核充能，每",
                speSkillCon("1.5"),
                "秒最多触发一次"
            ],//一花特性
            [
                "「天威」期间自身造成的伤害提升",
                speSkillCon("25%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
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
            "name": "浪费",
            "limit": "【默契值1级】",
            "tips": [
                "“珍贵的水源不该被浪费在这种名为奶茶的甜腻之物上。”"
            ],
            "recipe": [
                "郁金香酒杯",
                "阿华田奶茶",
                "双倍糖",
                "椰果",
                "长匙"
            ]
        },
        {
            "name": "随口之言",
            "limit": "【默契值1级】",
            "tips": [
                "“森罗的天气实在太过温和。”",
                "伊琅相思注视着马天尼杯口的盐粒，状似无心地开口道。",
                "“若没有烈酒相伴，实在无趣。”"
            ],
            "recipe": [
                "马天尼杯",
                "银色青松",
                "盐",
                "偏烈",
                "银杏叶"
            ]
        },
        {
            "name": "旭日复升",
            "limit": "【默契值5级】",
            "tips": [
                "“我们热爱的一切从未消亡，世界不过是为他们捏造了新的容器。”",
                "“就像这杯黎威尔日升——它出现在这张菜单上的那一刻，黎威尔的太阳便在我们那位长耳朵的朋友心中再次升起。”"
            ],
            "recipe": [
                "笛型香槟杯",
                "黎威尔日升",
                "椰浆",
                "柠檬汁",
                "薄荷叶"
            ]
        },
        {
            "name": "新奇事物",
            "limit": "【默契值16级】",
            "tips": [
                "“‘马戏团’？又一项夜摩没有的事物呢。”",
                "伊琅相思摇晃着手中的郁金香酒杯，吞下那么多烈酒也没有让她眼中的亮光迷蒙哪怕一丝一毫。",
                "“若想让我的子民在森罗将这些新奇事物全都体验一遍，不知道准备一头海兽重量的金币够不够？”"
            ],
            "recipe": [
                "郁金香酒杯",
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "柠檬片"
            ]
        },
        {
            "name": "不自知",
            "limit": "【默契值8级】",
            "tips": [
                "“即便是一杯寻常烈酒，森罗人也会毫无顾忌地投入这么多珍奇吗？”",
                "“呃，只是一些普通苹果……？”",
                "“森罗人呐，有时还真是豪奢而不自知。”"
            ],
            "recipe": [
                "笛型香槟杯",
                "干苹果",
                "多冰",
                "偏烈",
                "空心圆匙"
            ]
        },
        {
            "name": "盛装出席",
            "limit": "【默契值18级】",
            "tips": [
                "“是我的错觉吗，你今天穿得好像比平常还要……呃……”",
                "“优弥亚既以沉金记忆相邀，我自然也要盛装出席，以示礼貌。”",
                "“我已经搞不懂夜摩的‘盛装’是什么概念了……”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "沉金记忆",
                "无糖",
                "盐",
                "水果签"
            ]
        },
        {
            "name": "纵享此刻",
            "limit": "【默契值1级】",
            "tips": [
                "当伊琅相思端着两杯夜色危情，微笑着站在办公室门口，监督可真是吓了一跳。",
                "“那些同调者在你门口走来走去，就是不忍打扰你。”",
                "“我们夜摩人可不管这个——优弥亚，介意让我加入你的夜晚吗？”"
            ],
            "recipe": [
                "马天尼杯",
                "夜色危情",
                "正常冰",
                "偏烈",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "夜色危情",
                "偏烈",
                "正常冰",
                "茶冻"
            ],
            "ex": [593],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 伊琅相思 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 伊琅相思 }