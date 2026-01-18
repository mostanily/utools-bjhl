import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "尖锋", "skill": [MXLaohenEnum.强攻对精英, MXLaohenEnum.致命弱点], "attr": "feng", "star": "5",
    "nameEn": "SHIRATORI AZUSA", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "翁媛", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "血露薇白鸟梓——参上！",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "c/c0/duhz6w0ks9sry3c1jf1labuo8oouokk.png",
            "5/52/gceeodt3634aqlnagw77t1kwj3mu50w.png",
            "0/0b/rg23jn85oi0ug8my76vck44wrh86m7o.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "旧装",
            "listNames": ["立绘", "S4立绘", "3D"],
            "imgs": [
                "d/d0/b8381n1stlhjwlecojsy9o343e4e6d8.png",
                "2/2d/9j423frzryx0hnovg6x8ny20uf7z778.png",
                "8/87/c7ou9nc99uiuvquwbyizup254opdtws.png"
            ]
        }
    ]
}

const skill1: DefaultNormalSkillObj = {
    "name": "燕返",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "最大选敌数3", "对空", "格挡条破坏3"],//技能标签
        "sizeLevel": [
            ["2000%"],
            ["2300%"],
            ["2600%"],
            ["2900%"],
            ["3200%"],
            ["3500%"],
            ["3800%"],
            ["4100%"],
            ["4400%"],
            ["4600%"],
            ["4800%"],
            ["5000%"],
            ["5100%"],
            ["5200%"],
            ["5300%"]
        ],
        "content": [
            "优先选取范围内生命值最高的敌人（生命值相同时将优先选取有格挡条的目标），造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的风元素伤害"),
            "，每额外选取一个单位，伤害降低",
            speSkillCon("20%"),
            "，最多选取3个目标"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "极意",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
        "tab": ["自身增益"],
        "sizeLevel": [
            ["20%", "20%"],
            ["22%", "22%"],
            ["23%", "24%"],
            ["25%", "26%"],
            ["26%", "30%"],
            ["28%", "32%"],
            ["29%", "34%"],
            ["31%", "36%"],
            ["32%", "40%"],
            ["33%", "42%"],
            ["34%", "44%"],
            ["35%", "50%"],
            ["36%", "51%"],
            ["36%", "52%"],
            ["37%", "53%"]
        ],
        "content": [
            "触发期间，普通攻击伤害提升",
            speSkillCon("100%"),
            "且变为风元素伤害，暴击率提升",
            speSkillCon("", 0, -1, 0),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，暴击伤害提升",
            speSkillCon("", 0, -1, 1),
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒",
            "",
            "施放主动技能【燕返】时将立即触发自动技能【极意】效果"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "居合斩",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害", "对空", "格挡条破坏3"],
        "sizeLevel": [
            ["3000%"],
            ["3375%"],
            ["3750%"],
            ["4125%"],
            ["4312%"],
            ["4500%"]
        ],
        "content": [
            "对指定区域内的敌方目标总计造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的风元素伤害")
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：风切羽",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "200"], ["攻击速度", "0.67次每秒"]],
        "atType": ["单体", "格挡条破坏1"],
        "content": [
            "攻击面前的目标造成",
            speSkillCon("180%最终攻击的物理伤害"),
            "",
            "近战范围没有敌人时，向前方施放一道剑气波，对沿途的敌人造成",
            speSkillCon("50%最终攻击的物理伤害"),
            "(远程攻击不附带格挡条破坏效果)"
        ],//普通攻击
        "specialContent": [
            [
                "普通攻击、施放主动技能会凝聚1层风之力，10层后产生持续",
                speSkillCon("3"),
                "秒的“风之盾”，抵挡下次受到的伤害；“风之盾”消失时，对半径",
                speSkillCon("250"),
                "范围内的敌人造成",
                speSkillCon("380%最终攻击的风元素伤害"),
                "",
                "施放5次主动技能【燕返】后将永久获得自动技能【极意】效果"
            ],//零花本体特性
            [
                "施放",
                speSkillCon("4"),
                "次主动技能【燕返】后将永久获得自动技能【极意】效果"
            ],//一花特性
            [
                "“风之盾”受击不消失，抵挡期间受到的所有伤害；消失时额外破坏伤害范围内敌人",
                speSkillCon("2段格挡条")
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
            "name": "糖分超标",
            "limit": "【默契值1级】",
            "tips": [
                "“又是白桃芝士，又是双倍糖和西瓜，到底谁在喝这么甜的东西？”",
                "“呃……我。”",
                "白鸟梓叼在嘴里的枫叶梗啪嗒一声掉在了桌上。"
            ],
            "recipe": [
                "简约至上",
                "白桃芝士奶盖",
                "双倍糖",
                "多冰",
                "西瓜",
                "枫叶"
            ]
        },
        {
            "name": "惩罚道具",
            "limit": "【默契值1级】",
            "tips": [
                "“这热姜茶……拿去给那些不守规矩、擅闯血露薇的家伙喝正好。”"
            ],
            "recipe": [
                "自证方圆",
                "姜茶",
                "正常糖",
                "热",
                "紫藤"
            ]
        },
        {
            "name": "好、好孩子？",
            "limit": "【默契值1级】",
            "tips": [
                "“就算加了那么多冰块、糖浆、焦糖布丁，姜汁可可还是那么难喝。”",
                "“那你还喝完了……”",
                "“你为在下准备了那么久，自然要喝。”"
            ],
            "recipe": [
                "竹节茶杯",
                "姜汁可可",
                "多冰",
                "糖浆",
                "焦糖布丁",
                "银杏叶"
            ]
        },
        {
            "name": "难管但听劝",
            "limit": "【默契值4级】",
            "tips": [
                "“加一份浓缩就够了，喝太多咖啡会长不高的。”",
                "白鸟梓听完冷哼一声，手却乖乖伸向了奶精球和雪顶。"
            ],
            "recipe": [
                "简约至上",
                "经典特浓咖啡",
                "奶精球",
                "加一份",
                "原味雪顶",
                "精致纸伞"
            ]
        },
        {
            "name": "如此相似",
            "limit": "【默契值6级】",
            "tips": [
                "看着面前只加了些茶冻、紫藤的冰镇苏打水，监督忍不住扶额。",
                "“不愧是在修手底下长大的孩子……喜好也是如此简单。”"
            ],
            "recipe": [
                "自证方圆",
                "冰镇苏打水",
                "少冰",
                "茶冻",
                "紫藤"
            ]
        },
        {
            "name": "旧日不再",
            "limit": "【默契值13级】",
            "tips": [
                "“这味道怎么如此熟悉……”白鸟梓脸色晦暗不明，“监督，能将配方告诉在下吗？”",
                "“啊？让我看看。海水半蓝，多些冰块，加盐和蜜桃冻。”",
                "“呵，和父亲当年用筷子沾着让我尝的，必不会是如此新潮之物……但……多谢了，监督。”"
            ],
            "recipe": [
                "熊熊杯",
                "海水半蓝",
                "多冰",
                "盐",
                "蜜桃冻",
                "蝴蝶结"
            ]
        },
        {
            "name": "“宗师风范”",
            "limit": "【默契值18级】",
            "tips": [
                "白鸟梓倚着长刀，一边凝望着远处的虚空，一边拨开杯边的紫藤，缓缓啜饮了一口。",
                "“嗯，真有点‘千帆过尽，江河无憾’的宗师风范了——如果我不知道你拿着的只是一杯加了柠檬汁的热水的话。”"
            ],
            "recipe": [
                "简约至上",
                "白开水",
                "热",
                "柠檬汁",
                "紫藤"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "黑月亮",
                "盐",
                "多冰",
                "青提"
            ],
            "ex": [346],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "经典特浓咖啡",
                "糖浆",
                "标准",
                "香蕉冰淇淋"
            ],
            "ex": [448],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 白鸟梓 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 白鸟梓 }