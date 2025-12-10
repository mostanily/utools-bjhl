import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.势如破竹对空, MXLaohenEnum.战术强化], "attr": "wuli", "star": "6",
    "nameEn": "LUKE", "tag": ["输出", "召唤", "屏障"], "originWorld": "黑曜", "orginChar": "古剑奇谭三",
    "cv": "张沛", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"],
    "introText": "北洛，鹿路运输配送员，听说你最近需要人手，唐路遥让我过来帮个忙。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "f/f8/o3qtoz7b8ptdx7k0yowa621yvpbltzt.png",
            "5/52/im697ztyfi322pbim6gy57n7xhmgetx.png",
            "8/82/7et00txk9mnys8ben053fbtc6lkqaiv.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["终点线"],
            "imgs": [
                "a/a8/n2t00i1hecfoz580qsxz4z9kgsp64n5.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "无人签收",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "召唤", "屏障", "穿透屏障"],//技能标签
            "content": [
                "朝目标位置投送隔离件，对半径",
                speSkillCon("250"),
                "范围内的目标造成",
                speSkillCon("1250%最终攻击的物理伤害"),
                "，随后隔离件会展开半径300范围",
                speSkillCon("较大强度"),
                "的球形屏障，抵御敌方投射物，并对附近敌人间歇性发射激光，存在",
                speSkillCon("20"),
                "秒，持续时间内总计造成",
                speSkillCon("630%最终攻击的物理伤害"),
                "，可以对敌方屏障造成较高破坏力"
            ]//满级技能内容描述
        }
    },
    {
        "name": "定时派送",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "负面状态"],
            "content": [
                "普通攻击命中时额外投送一个定时件，触发",
                speSkillCon("3"),
                "次后，下一次额外追加投送一个加急件",
                "",
                "定时件：持续",
                speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                "附近的敌人优先攻击定时件，",
                speSkillCon("10"),
                "秒后自动引爆，被击碎将提前引爆，对半径",
                speSkillCon("200"),
                "范围内的敌人造成",
                speSkillCon("1500%最终攻击的物理伤害"),
                "",
                "加急件：朝目标快速发射7枚子弹，存在",
                speSkillCon("20"),
                "秒，持续时间内内总计造成",
                speSkillCon("1700%最终攻击的物理伤害")
            ]
        }
    },
    {
        "name": "鹿路宅急送",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "80秒"]],
            "tab": ["自身增益", "友方增益", "召唤", "拦截"],
            "content": [
                "对直线范围内的目标造成",
                speSkillCon("3000%最终攻击的物理伤害"),
                "并为全体友方同调者提升",
                speSkillCon("25%[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("30"),
                "秒；拦截敌方投射物，同时沿途投送",
                speSkillCon("8"),
                "箱快递",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：末日信使",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "朝目标投送“普通件”，命中目标造成",
                speSkillCon("250%最终攻击的物理伤害"),
                "，“普通件”会展开成小型炮台向附近敌人发射子弹，持续存在7秒，持续时间内总计造成",
                speSkillCon("270%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "快件为召唤物",
                    "",
                    "技能可以产生各种类型的快件"
                ],//零花本体特性
                [
                    "主动技能【无人签收】可使用次数+1；“普通件”和“加急件”的伤害额外提高",
                    speSkillCon("35%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "除“定时件”以外的所有快件箱存在时间增加",
                    speSkillCon("5"),
                    "秒"
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "加急件对目标造成伤害时，降低目标",
                speSkillCon("40%"),
                speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                "基础减伤，（该效果属于",
                speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                "，自身下场时效果消失）；目标处于（我方或敌方）屏障下时，自身对其造成的伤害提高",
                speSkillCon("30%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "全身心的拒绝",
            "limit": "【默契值1级】",
            "tips": [
                "即便把白桃芝士奶盖做成无糖，北洛仍旧不愿尝哪怕一口。"
            ],
            "recipe": [
                "简约至上",
                "白桃芝士奶盖",
                "无糖",
                "常温",
                "奇异果片",
                "三叶长签"
            ]
        },
        {
            "name": "否定现实",
            "limit": "【默契值1级】",
            "tips": [
                "紫都扬言都是因为监督加了咸梅干的缘故，不然北洛不可能不喜欢德里亚德风味花茶。"
            ],
            "recipe": [
                "自证方圆",
                "德里亚德风味花茶",
                "热",
                "咸梅干",
                "樱花"
            ]
        },
        {
            "name": "一片好心",
            "limit": "【默契值13级】",
            "tips": [
                "北洛来时淋的雨，还没走到休息室就干了。",
                "可监督还是为他准备了姜茶。",
                "“……多谢。”"
            ],
            "recipe": [
                "竹节茶杯",
                "姜茶",
                "正常糖",
                "常温",
                "白玉兰"
            ]
        },
        {
            "name": "苦啤兑苦咖",
            "limit": "【默契值5级】",
            "tips": [
                "“唐路遥就爱喝这个？”",
                "北洛用三叶长签将杯口的盐粒全部刮了下去。",
                "“真会给自己找罪受。”"
            ],
            "recipe": [
                "简约至上",
                "恩利都苦啤兑苦咖",
                "少冰",
                "盐",
                "低因",
                "三叶长签"
            ]
        },
        {
            "name": "严禁醉驾",
            "limit": "【默契值1级】",
            "tips": [
                "“等会我还要去送快递，这杯黑月亮还是监督你自己喝吧。”",
                "北洛离去的脚步又停了下来。",
                "“这枝白玉兰我拿走了。”"
            ],
            "recipe": [
                "自证方圆",
                "黑月亮",
                "多冰",
                "柠檬汁",
                "青梅",
                "白玉兰"
            ]
        },
        {
            "name": "欲言又止",
            "limit": "【默契值6级】",
            "tips": [
                "北洛多看了两眼面前插着精致纸伞的熊熊杯。",
                "看在海水半蓝还算合口的份上，他什么都没说。"
            ],
            "recipe": [
                "熊熊杯",
                "海水半蓝",
                "正常冰",
                "盐",
                "椰果",
                "精致纸伞"
            ]
        },
        {
            "name": "是谁呢？",
            "limit": "【默契值16级】",
            "tips": [
                "“……原来是这个味道。”",
                "“北洛你以前喝过极夜马戏团？”",
                "“见别人喝过。”",
                "“是鹿路运输的人吗？”",
                "“不是。”"
            ],
            "recipe": [
                "自证方圆",
                "极夜马戏团",
                "柠檬汁",
                "正常",
                "樱桃",
                "水果签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "黑月亮",
                "苦味素",
                "多冰",
                "樱桃"
            ],
            "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "薄荷蜜柚苏打",
                "正常冰",
                "叶子冻"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 北洛 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 北洛 }