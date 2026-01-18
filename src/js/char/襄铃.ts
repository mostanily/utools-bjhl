import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形α型, MXLaohenEnum.针对削弱], "attr": "yan", "star": "5",
    "nameEn": "XIANGLING", "tag": ["输出", "拉拽"], "originWorld": "艾达", "orginChar": "古剑奇谭一",
    "cv": "阎萌萌", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "我、我叫襄铃，他们说可以来这里找监督，他会让襄铃留在技术组……什么、你就是？原来监督是个人类么……",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "1/12/g7isxa6y6ze2hzobo79iprl47l5cd17.png",
            "9/9d/cmn9qv5mhqdwdu71r4f3tciah6n5ue9.png",
            "6/62/5p2omg5dhoxy76mwq10w4ecb540c9db.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "拳焰式",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "负面状态", "对空"],//技能标签
        "content": [
            speSkillCon("【拳焰式·普通】技能形态", SkillColorEnum.injuries),
            "",
            "普通状态下可使用",
            "",
            speSkillCon("以2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "抓取",
            speSkillCon("1200"),
            "范围内的目标至自身面前攻击，造成",
            speSkillCon("2000%最终攻击的物理伤害"),
            "",
            speSkillCon("【拳焰式·狐拟态】技能形态", SkillColorEnum.injuries),
            "",
            "「狐拟态」状态下可使用",
            "",
            speSkillCon("以3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "抓取",
            speSkillCon("1600"),
            "范围内的目标至自身面前攻击，造成",
            speSkillCon("3750%最终攻击的炎元素伤害")
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "屏扇式",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "30秒"], ["次数", "∞"]],
        "tab": ["炎区域", "负面状态", "伤害"],
        "content": [
            "被动：每隔",
            speSkillCon("20"),
            "秒可使用一次，使用后产生的指令冷却时间极短",
            "",
            speSkillCon("【屏扇式·普通】技能形态", SkillColorEnum.injuries),
            "",
            "普通状态下可使用",
            "",
            "对扇形范围内5条路径上的首个敌人造成",
            speSkillCon("1850%最终攻击的物理伤害"),
            "并以",
            speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "造成击退效果，对击退路径上的其他敌人造成",
            speSkillCon("1150%最终攻击的物理伤害"),
            "",
            speSkillCon("【屏扇式·狐拟态】技能形态"),
            "",
            "「狐拟态」状态下可使用",
            "",
            "对扇形范围内5条路径上的首个敌人造成",
            speSkillCon("2313%最终攻击的炎元素伤害"),
            "并以",
            speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "造成击退效果，对击退路径上的其他敌人造成",
            speSkillCon("1438%最终攻击的炎元素伤害"),
            "且沿途留下炎元素区域"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "狐拟态",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["自身增益"],
        "content": [
            "变身成「狐拟态」，所有伤害转为炎元素伤害，攻击提升",
            speSkillCon("120%"),
            speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
            "，回复1次主动技能【拳焰式】使用次数，并使所有技能获得强化，持续",
            speSkillCon("45"),
            "秒",
            "",
            "战术家特性：开战时异核充能增加50%"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：狐引",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "200"], ["攻击速度", "0.62次每秒"]],
        "atType": ["单体"],
        "content": [
            "攻击面前的目标造成",
            speSkillCon("192%最终攻击的物理伤害"),
            "",
            "近战范围没有敌人时，对远处一名敌人造成",
            speSkillCon("96%最终攻击的物理伤害"),
            "，并以",
            speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "抓取到面前（每3秒最多触发一次）。"
        ],//普通攻击
        "specialContent": [
            [
                "可以战术移动至全场任意可达位置",
                "",
                "会自动将抓取的目标击飞入周围的可跌落点"
            ],//零花本体特性
            [
                "施放异核技能【狐拟态】时，立即清空指令冷却时间并激活主动技能【屏扇式】"
            ],//一花特性
            [
                "异核技能【狐拟态】时施展主动技能【屏扇式】留下的炎元素区域扩大"
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
            "name": "偏差",
            "limit": "【默契值1级】",
            "tips": [
                "“监督监督，这是最基础的‘姜茶’吗？”",
                "“嗯？正常糖正常冰，没加任何东西……没错啊。怎么了吗？”",
                "“主脑出具的报告里说襄铃对生姜的喜好值超过84%……可是襄铃一点都不喜欢这个味道……”",
                "“比起主脑出现偏差，我更惊讶于它居然连这种数值都要估算。”"
            ],
            "recipe": [
                "柯林杯",
                "姜茶",
                "正常糖",
                "正常冰",
                "经典长签"
            ]
        },
        {
            "name": "咖啡初体验",
            "limit": "【默契值1级】",
            "tips": [
                "“唔啊，咖啡怎么是这个味道……”",
                "“你没喝过？”",
                "“嗯。主脑规定，未成年人是不准碰咖啡因的。”",
                "“那你第一次尝试就点双倍浓缩？”",
                "“襄铃想试一试嘛……”",
                "“……至少跟我说一声，我好给你加些草莓冰淇淋什么的。喏，记得用长匙搅一下。”"
            ],
            "recipe": [
                "环口杯",
                "经典特浓咖啡",
                "椰浆",
                "加双份",
                "草莓冰淇淋",
                "长匙"
            ]
        },
        {
            "name": "熟悉味道",
            "limit": "【默契值5级】",
            "tips": [
                "“甜甜的热牛奶最棒了！睡前喝一杯，就连梦里的设计都更厉害一些呢！”",
                "“小心，别把玻璃杯碰洒了——怎么忽然这么激动啊？”",
                "“襄铃难得在海临遇到熟悉的味道嘛，嘿嘿。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "甜牛乳",
                "正常糖",
                "热",
                "全脂牛奶",
                "柠檬片"
            ]
        },
        {
            "name": "认可的味道",
            "limit": "【默契值13级】",
            "tips": [
                "“喂，狐狸丫头，接着。”",
                "“啊？禺期前辈……你好？你为什么要给襄铃苏打水啊？”",
                "禺期并没有回答，只是冷哼一声，扬长而去。",
                "“哟，老头子还给你加了茶冻啊？”乐无异不知从哪儿冒了出来，“你还不知道呢？老头子最近天天在武器技术部夸你呢，说你改造的电机特别——”",
                "“乐！无！异！”"
            ],
            "recipe": [
                "柯林杯",
                "冰镇苏打水",
                "少冰",
                "茶冻",
                "五叶长签"
            ]
        },
        {
            "name": "高共情力的孩子",
            "limit": "【默契值8级】",
            "tips": [
                "来了休息室那么多次，襄铃终于找到了克服生姜的方法。",
                "“只要加很多很多的冰块，再加很多很多奶精球和珍珠就可以了！”",
                "“……其实你只要跟我说一声，我把姜汁可可里的姜汁去掉就行了。”",
                "“不行！直接去掉的话，姜汁也很可怜啊……”"
            ],
            "recipe": [
                "环口杯",
                "姜汁可可",
                "多冰",
                "奶精球",
                "珍珠",
                "长匙"
            ]
        },
        {
            "name": "意外的“锐评”",
            "limit": "【默契值10级】",
            "tips": [
                "“襄铃每次点双莓之恋都只点三分糖，毕竟耳机里BS的新曲就够甜了。”",
                "襄铃专注于用长签打捞粘在杯壁上的焦糖布丁，丝毫不顾监督听完她这句话后憋笑有多辛苦。"
            ],
            "recipe": [
                "双层叶纹",
                "双莓之恋",
                "三分糖",
                "常温",
                "焦糖布丁",
                "三叶长签"
            ]
        },
        {
            "name": "忠实信徒",
            "limit": "【默契值1级】",
            "tips": [
                "“酒酿凤梨，七分糖少冰加柠檬片是吧？襄铃，这个配方你都喝了一个月了，不腻吗？”",
                "“不腻啊，襄铃最喜欢这个味道了！”",
                "“最喜欢？那它和肉包，你选哪个？”",
                "“肉包！”"
            ],
            "recipe": [
                "家用玻璃杯",
                "酒酿凤梨",
                "七分糖",
                "少冰",
                "柠檬片"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "酒酿凤梨",
                "五分糖",
                "正常冰"
            ],
            "ex": [413],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "双莓之恋",
                "五分糖",
                "正常冰",
                "焦糖布丁"
            ],
            "ex": [476],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 襄铃 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 襄铃 }