import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "游徒", "skill": [MXLaohenEnum.庇佑, MXLaohenEnum.怒霆共鸣], "attr": "lei", "star": "6",
    "nameEn": "SOLSTICE", "tag": ["输出", "元素区域", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "", "openDate": "2025年06月19日", "resourse": ["定向共鸣·第三种诘问"], "laohenLink": LaohenNameEnum.失罪夜,
    "introText": "又见面了，执行官，虽然我也还没完全适应这副模样，但或许我们应该重新认识一下，御雀通信，司旸，合作愉快。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "5/56/7u8n2z3r9ahybb4bsxw9lvrf14tsqny.png",
            "4/48/8xhsl3ad49bqkp6i4vjie4jwhya3sy5.png",
            "e/ee/nccl4xgc0c111cwlphhaor77oo730t0.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "混沌隐喻",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "15秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "对空"],//技能标签
        "sizeLevel": [
            ["1200%"],
            ["1380%"],
            ["1560%"],
            ["1740%"],
            ["1920%"],
            ["2100%"],
            ["2280%"],
            ["2460%"],
            ["2640%"],
            ["2760%"],
            ["2880%"],
            ["3000%"],
            ["3120%"],
            ["3240%"],
            ["3360%"]
        ],
        "content": [
            "对自身正前方",
            speSkillCon("1100"),
            "范围矩形区域造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的雷元素伤害"),
            "，若该伤害触发了元素反应，则对全部命中目标的伤害均提高",
            speSkillCon("20%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "",
            "【连击】：自身获得",
            speSkillCon("10%"),
            "最大生命值的护盾，同时回复",
            speSkillCon("10"),
            "秒的异核充能"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "本源投影",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
        "tab": ["雷区域", "伤害", "对空"],
        "sizeLevel": [
            ["600%", "280%"],
            ["690%", "322%"],
            ["780%", "364%"],
            ["870%", "406%"],
            ["960%", "448%"],
            ["1050%", "490%"],
            ["1140%", "532%"],
            ["1230%", "574%"],
            ["1320%", "616%"],
            ["1380%", "644%"],
            ["1440%", "672%"],
            ["1500%", "700%"],
            ["1560%", "728%"],
            ["1620%", "756%"],
            ["1680%", "784%"]
        ],
        "content": [
            "该技能固定每",
            speSkillCon("25"),
            "秒可施放1次",
            "",
            "以自身为中心半径",
            speSkillCon("550"),
            "范围造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的雷元素伤害"),
            "，随后留下",
            speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
            "，持续",
            speSkillCon("15"),
            "秒",
            "",
            speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
            "中目标受到水、炎、霜元素伤害时，也可触发",
            speSkillCon("[传导反应]", SkillColorEnum.normal, ToastSkillEnum.传导反应),
            "、",
            speSkillCon("[爆燃反应]", SkillColorEnum.normal, ToastSkillEnum.爆燃反应),
            "、",
            speSkillCon("[电解反应]", SkillColorEnum.normal, ToastSkillEnum.电解反应),
            "，且触发时司旸会对目标额外附加1次「昏昧」，造成单体",
            speSkillCon("", 0, -1, 1),
            speSkillCon("280%最终攻击的雷元素伤害"),
            "（该伤害每个目标最多触发",
            speSkillCon("20"),
            "次，再次施放后重置该次数）",
            "",
            speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
            "内所有雷元素同调者伤害提高",
            speSkillCon("15%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "虚实交界",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害", "自身增益", "负面状态", "对空"],
        "sizeLevel": [
            ["1800%", "24%"],
            ["2100%", "28%"],
            ["2400%", "32%"],
            ["2700%", "36%"],
            ["2850%", "38%"],
            ["3000%", "40%"]
        ],
        "content": [
            "对目标区域宽",
            speSkillCon("1200"),
            "矩形范围造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的雷元素伤害"),
            "，施放技能后",
            speSkillCon("25"),
            "秒内自身造成的「昏昧」伤害提高",
            speSkillCon("", 0, -1, 1),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "，且「昏昧」效果会使目标雷元素抗性降低",
            speSkillCon("", 0, -1, 1),
            speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
            "，持续",
            speSkillCon("25"),
            "秒"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：自我重构",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "500"], ["攻击速度", "0.60次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "对自身正前方半径",
            speSkillCon("500"),
            "范围扇形区域造成",
            speSkillCon("180%最终攻击的雷元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "技能【本源投影】产生的",
                speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
                "可视为雷元素区域",
                "",
                "自身触发元素反应时，获得相当于自身",
                speSkillCon("3%"),
                "最大生命值的护盾。当自身存在护盾时，额外攻击力提高",
                speSkillCon("45%"),
                speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成),
            ],//零花本体特性
            [
                speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
                "的持续时间额外提高",
                speSkillCon("10"),
                "秒，",
                speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
                "持续时间内自身每秒回复",
                speSkillCon("1"),
                "秒异核充能，「昏昧」单个目标的触发次数额外提高",
                speSkillCon("10"),
                "次"
            ],//一花特性
            [
                "司旸施放【本源投影】产生",
                speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
                "时提升自身",
                speSkillCon("15%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "和暴击伤害",
                speSkillCon("30%"),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("30"),
                "秒。",
                speSkillCon("[雷之界域]", SkillColorEnum.normal, ToastSkillEnum.雷之界域),
                "内的所有同调者提高",
                speSkillCon("20%"),
                speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
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
            "name": "即便是他",
            "limit": "【默契值4级】",
            "tips": [
                "“咖啡。经典特浓。双份浓缩。”",
                "“出什么事了吗？”",
                "“御雀通信的版本维护时间和截稿日重合了。”",
                "“………………………………辛苦了。"
            ],
            "recipe": [
                "棱纹马克杯",
                "经典特浓咖啡",
                "奶精球",
                "加双份",
                "香蕉冰淇淋",
                "樱花"
            ]
        },
        {
            "name": "不存在的回忆",
            "limit": "【默契值18级】",
            "tips": [
                "“司旸，你盯着面前这杯极夜马戏团已经十分钟了……怎么了？”",
                "“有点怀念罢了。”",
                "“怀念？你曾见过这个马戏团吗？”",
                "“没有。只是……不存在的回忆又增加了。”"
            ],
            "recipe": [
                "航海时代",
                "极夜马戏团",
                "柠檬汁",
                "偏淡",
                "蓝莓",
                "三叶长签"
            ]
        },
        {
            "name": "体验派?",
            "limit": "【默契值13级】",
            "tips": [
                "“麻烦执行官给我一杯雪梨汁。要最甜的，再加两颗咸梅干。”",
                "“……你喜欢喝这种味道？”",
                "“谈不上喜不喜欢。我以前从未尝试过。”",
                "“那你点它是……？”",
                "“我笔下的新角色喜欢。”",
                "“没想到你还是体验派……”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "鲜榨雪梨汁",
                "咸梅干",
                "正常冰",
                "紫藤"
            ]
        },
        {
            "name": "共性",
            "limit": "【默契值1级】",
            "tips": [
                "“无法撒下银辉的月亮……旨在守护的高塔……呵……”",
                "“是这杯黑月亮不好喝吗？”",
                "“不，只是忽然有些感触。”",
                "“……？与克图尔特沾边的人讲话都神神秘秘的……”"
            ],
            "recipe": [
                "扎啤杯",
                "黑月亮",
                "正常冰",
                "盐",
                "青梅",
                "长匙"
            ]
        },
        {
            "name": "目中无「我」",
            "limit": "【默契值10级】",
            "tips": [
                "司旸端着一杯热盐水，站在闲聊的白荆员工之间。直到午休结束，也没人发现异常。",
                "“你就这么轻而易举地混进去了？”",
                "“这也算我的一种天赋吧。”司肠推了推自己那副平光镜，叫人看不清神色。"
            ],
            "recipe": [
                "棱纹马克杯",
                "白开水",
                "热",
                "盐",
                "圆匙"
            ]
        },
        {
            "name": "习惯",
            "limit": "【默契值6级】",
            "tips": [
                "“你也点薄荷蜜柚苏打？被传染了？”",
                "“一起加班的次数太多了，一起点三联杯、家庭装的次数太多了……不小心就喝习惯了。”"
            ],
            "recipe": [
                "航海时代",
                "薄荷蜜柚苏打",
                "少冰",
                "茶冻",
                "水果签"
            ]
        },
        {
            "name": "谜团先生",
            "limit": "【默契值13级】",
            "tips": [
                "“熊熊燕麦牛奶？你帮言雀外带的吗？”",
                "“不。我自己喝。请帮我再加一份焦糖布丁。”",
                "“…………你身上的谜团实在太多了…………”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "焦糖布丁",
                "心形插签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "茉茉奶绿",
                "五分糖",
                "少冰",
                "茶冻"
            ],
            "ex": [483],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "柚柚切颗NOW",
                "五分糖",
                "奇异果片"
            ],
            "ex": [558],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 司旸 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 司旸 }