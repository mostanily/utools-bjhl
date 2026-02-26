import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultSkillLinkObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "尖锋", "skill": [MXLaohenEnum.自动瞄准系统方块β型, MXLaohenEnum.冻结精通], "attr": "shuang", "star": "6",
    "nameEn": "IVANA", "tag": ["输出", "群攻"], "originWorld": "斯奈菲尔", "orginChar": "原创",
    "cv": "杨梦露", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"],
    "introText": "监督……是吗？很抱歉来到这里这么久，都没能正式问候您。<br>鉴于我早已被剥夺王女之衔，您唤我耶芙娜便可——别紧张，对于从宝石中脱身这件事，我和您一样惊讶。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "8/8e/mfjvogfdtz3raguv87amqjjdcoo5vbc.png",
            "8/89/3fmjzs47jqklty2rs2ljtj9lpm91ipa.png",
            "c/c4/s8locn525l2z2tfodejchckd6xsjv32.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "王廷盛典",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["霜区域", "负面状态", "伤害", "格挡条破坏3"],//技能标签
        "content": [
            "对前方“X”区域造成总计",
            speSkillCon("1000%最终攻击的霜元素伤害"),
            "+",
            speSkillCon("1000%专精的霜元素伤害"),
            "，位于“X”交叉处的敌人将受到两次伤害并额外附加",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "效果在“潮湿”环境下，“X”区域可直接产生霜区域"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "王廷雪域",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "15秒"]],
        "tab": ["伤害", "自身增益", "对空", "格挡条破坏1"],
        "content": [
            "制造缓慢前进的霜龙卷，每秒对沿途敌人造成",
            speSkillCon("470%最终攻击的霜元素伤害"),
            "+",
            speSkillCon("470%专精的霜元素伤害"),
            "",
            "若命中",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "状态的目标，则立即触发",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "的伤害效果，并使该次",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "效果的伤害提升",
            speSkillCon("100%"),
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，有效半径增加",
            speSkillCon("50%"),
            "",
            "霜龙卷每次造成伤害时，使自身获得",
            speSkillConWithImg(SkillDescStatusImg.耶芙娜雪域),
            "「雪域」状态：专精值提升",
            speSkillCon("10%"),
            speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("5"),
            "秒，最多可叠加",
            speSkillCon("5"),
            "次"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "她的落幕",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "90秒"]],
        "tab": ["霜区域", "自身增益", "伤害", "对空", "格挡条破坏3"],
        "content": [
            "对自身周围半径",
            speSkillCon("750"),
            "范围内的所有敌人造成",
            speSkillCon("2500%最终攻击的霜元素伤害"),
            "+",
            speSkillCon("2500%专精的霜元素伤害"),
            "，并使处于",
            speSkillCon("[渐霜]", SkillColorEnum.normal, ToastSkillEnum.渐霜),
            "状态的敌人强制进入",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "状态",
            "",
            "施展后自身专精值提升",
            speSkillCon("50%"),
            speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("20"),
            "秒",
            "",
            "在“潮湿”环境下，可直接在目标位置产生霜区域"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：海尔维格之名",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "600"], ["攻击速度", "0.42次每秒"]],
        "atType": ["群体", "格挡条破坏1"],
        "content": [
            "产生霜刃，对直线范围内的敌人造成",
            speSkillCon("200%最终攻击的霜元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "自身普通攻击和技能对目标造成伤害后对其附加",
                speSkillCon("[渐霜]", SkillColorEnum.normal, ToastSkillEnum.渐霜),
                "状态，",
                speSkillCon("2"),
                "秒内若目标被击败则会被冻结进入",
                speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                "状态（首领级别敌人阵亡后不会触发",
                speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                "效果），短暂延迟后对周围敌人造成",
                speSkillCon("200%专精的霜元素伤害"),
                "并使耶芙娜基础减伤增加",
                speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("5"),
                "秒（",
                speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                "伤害的有效半径随目标体型增加）"
            ],//零花本体特性
            [
                speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                "的伤害提升",
                speSkillCon("50%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "，同时附带破坏",
                speSkillCon("1段格挡条"),
                "效果"
            ],//一花特性
            [
                "攻击",
                speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                "或",
                speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
                "目标时，忽略其",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "的减伤"
            ]//三花特性
        ]
    }
}
const skillTeseStrong: DefaultTeseSkillObj = {
    "name": "特性强化",
    "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "content": [
            "【王廷雪域】的「雪域」状态持续时间延长至10秒，霜龙卷每次命中叠加2层「雪域」且额外触发1次永霜的伤害效果"
        ]
    }
}
const skillLink: DefaultSkillLinkObj = {
    "name": "技能同调",
    "aliasNum": "技能同调",
    "repSkill": 1,//被替换的技能，值为该角色技能组数据对应技能下标
    "unlock": LaohenNameEnum.不眠夜,//该技能解锁条件，拥有对应的烙痕ID
    "detail": {
        "name": "永冬誓约",
        "aliasNum": "2",
        "maxLevel": 15,
        "type": "主动技能",
        "skillTab": [["施放冷却", "15秒"]],
        "tab": ["自身增益", "伤害", "对空", "格挡条破坏1"],
        "sizeLevel": [
            ["720%"],
            ["828%"],
            ["936%"],
            ["1044%"],
            ["1152%"],
            ["1260%"],
            ["1368%"],
            ["1476%"],
            ["1584%"],
            ["1656%"],
            ["1728%"],
            ["1800%"],
            ["1872%"],
            ["1944%"],
            ["2016%"]
        ],
        "content": [
            "制造3道缓慢前进的霜龙卷，每秒对沿途敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的霜元素伤害"),
            "。若命中处于霜或水元素区域目标，则立即触发",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "的伤害效果，并使该次",
            speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
            "效果的伤害提升",
            speSkillCon("100%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "，有效半径增加",
            speSkillCon("50%"),
            "",
            "霜龙卷每次造成伤害时，使自身获得",
            speSkillConWithImg(SkillDescStatusImg.耶芙娜雪域),
            "「雪域」状态：专精值提升",
            speSkillCon("10%"),
            speSkillCon("(属性乘区·专精加成)", SkillColorEnum.injuries),
            "，暴击伤害提升",
            speSkillCon("15%"),
            speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("20"),
            "秒，最多可叠加",
            speSkillCon("5"),
            "次"
        ],
        "specialContent": [
            [
                "初始异核充能50%，普通和潮湿环境下永霜伤害范围会生成小范围霜区域。",
                "",
                "自动技能回复速度提高40%",
                speSkillCon("(属性乘区·自动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区自动技能回复速度),
                "；且霜龙卷效果使目标霜元素抗性降低30%",
                speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续20秒"
            ],//特质Ⅱ级解锁
            [
                "若敌方目标处于霜元素区域，则受到的霜龙卷及永霜伤害提高240%"
            ],//特质Ⅴ级解锁
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese,
    skillTeseStrong,
    skillLink
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "甜蜜绝缘",
            "limit": "【默契值1级】",
            "tips": [
                "“抱歉，我想这种像云朵一样梦幻甜蜜的饮品并不适合我。”"
            ],
            "recipe": [
                "郁金香酒杯",
                "白桃芝士奶盖",
                "双倍糖",
                "常温",
                "奇异果片",
                "枫叶"
            ]
        },
        {
            "name": "噩梦味道",
            "limit": "【默契值1级】",
            "tips": [
                "浓厚甜蜜的巧克力裹着脆甜的西瓜，噩梦一般的味道，耶芙娜喝了一口就放下了。"
            ],
            "recipe": [
                "巧克力风暴",
                "西瓜",
                "焦糖布丁"
            ]
        },
        {
            "name": "风的味道",
            "limit": "【默契值1级】",
            "tips": [
                "“唔……喝起来有些像斯奈菲尔的寒风。”",
                "“我明白了，像喝西北风。”"
            ],
            "recipe": [
                "马天尼杯",
                "青草薄荷",
                "少冰",
                "偏淡",
                "薄荷叶"
            ]
        },
        {
            "name": "像水一样",
            "limit": "【默契值6级】",
            "tips": [
                "这样寡淡的味道并不符合斯奈菲尔人的品味。"
            ],
            "recipe": [
                "夜色危情",
                "少冰",
                "偏淡",
                "珍珠"
            ]
        },
        {
            "name": "抵抗诱惑",
            "limit": "【默契值8级】",
            "tips": [
                "糖是斯奈菲尔的奢侈品，耶芙娜不允许自己沉溺于此。"
            ],
            "recipe": [
                "笛型香槟杯",
                "蜂蜜啤酒",
                "少冰",
                "偏烈",
                "柠檬片"
            ]
        },
        {
            "name": "松针泡酒",
            "limit": "【默契值18级】",
            "tips": [
                "“原来松针也能泡酒吗？”",
                "“是遥城那边传过来的配方吧？”",
                "“斯奈菲尔最不缺的就是松针了，却没有人想到用它来泡酒。”"
            ],
            "recipe": [
                "马天尼杯",
                "银色青松",
                "苦味素",
                "偏烈",
                "五叶长签"
            ]
        },
        {
            "name": "生命的味道",
            "limit": "【默契值10级】",
            "tips": [
                "苦涩而又清冽的味道在喉中绽放，许久之后，令人沉醉的回甘涌上味蕾。"
            ],
            "recipe": [
                "蝶形香槟杯",
                "薄暮飞行",
                "苦味素",
                "偏烈",
                "青提",
                "经典长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "冰镇苏打水",
                "多冰",
                "椰果"
            ],
            "ex": [495],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "奇异果片"
            ],
            "ex": [508],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "夜色危情",
                "偏烈",
                "多冰",
                "珍珠"
            ],
            "ex": [511],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "薄暮飞行",
                "苦味素",
                "偏烈",
                "黄瓜片"
            ],
            "ex": [520],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 耶芙娜 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 耶芙娜 }