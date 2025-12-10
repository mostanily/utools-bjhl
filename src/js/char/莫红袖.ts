import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "铁御", "skill": [MXLaohenEnum.生机盎然方块α型, MXLaohenEnum.祝福区域], "attr": "yan", "star": "6",
    "nameEn": "MOHONGXIU", "tag": ["防护", "控场", "元素区域"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
    "cv": "张安琪", "openDate": "2024年01月12日", "resourse": ["常态共鸣", "常态共鸣·森罗万象"],
    "introText": "九旻基地，“星海”独立营——莫红袖报到。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "e/e9/fsolzczes9u9zs0wi52b6xqp9vyca2h.png",
            "a/af/cfl4dnbxd150jxhwlr5wr5ovg7miynn.png",
            "e/e1/ses3ytsxhnmyydablqts5fo06pkkxwh.png"
        ]
    }
}

const Skill = [
    {
        "name": "当关",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["自身增益", "负面状态"],//技能标签
            "sizeLevel": [
                ["748%"],
                ["860%"],
                ["972%"],
                ["1085%"],
                ["1197%"],
                ["1309%"],
                ["1421%"],
                ["1533%"],
                ["1646%"],
                ["1720%"],
                ["1795%"],
                ["1870%"],
                ["1945%"],
                ["2020%"],
                ["2094%"]
            ],
            "content": [
                "对自身周围半径",
                speSkillCon("300"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，并将命中的单位以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "向自身拖拽。",
                "",//空表示该处需要设置为<br>标签
                "施放后立即回复全部格挡值，格挡强度提升",
                speSkillCon("50%"),
                "，格挡值回复速度提升",
                speSkillCon("100%"),
                "，普通攻击对半径",
                speSkillCon("200"),
                "范围内敌人造成",
                speSkillCon("250%最终攻击的炎元素伤害"),
                "，攻击速度降低",
                speSkillCon("18%"),
                "，对目标额外造成",
                speSkillCon("150%"),
                "格挡强度的炎元素伤害，持续",
                speSkillCon("20"),
                "秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "调虎离山",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "2"]],
            "tab": ["屏障", "负面状态"],
            "sizeLevel": [
                ["31%"],
                ["36%"],
                ["40%"],
                ["45%"],
                ["50%"],
                ["54%"],
                ["59%"],
                ["64%"],
                ["68%"],
                ["71%"],
                ["74%"],
                ["78%"],
                ["81%"],
                ["84%"],
                ["87%"]
            ],
            "content": [
                "被动：每隔",
                speSkillCon("15"),
                "秒获得盾牌格挡效果，",
                speSkillCon("10"),
                "秒内受到的伤害额外减少",
                speSkillCon("50%"),
                speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                "，效果持续期间普通攻击会对附近敌人造成",
                speSkillCon("100%"),
                "格挡强度的炎元素伤害；",
                "",
                "主动：朝指定方向推出巨大盾牌，以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退沿途敌人并持续对附近敌人造成伤害，每次造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，盾牌将在目标位置形成",
                speSkillCon("较大强度"),
                "的屏障，阻挡敌人行进并抵御敌对投射物，并每隔",
                speSkillCon("2"),
                "秒",
                speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                "一次周围敌人，持续",
                speSkillCon("15"),
                "秒"
            ]
        }
    },
    {
        "name": "百兽辟易",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"], ["次数", "无限"]],
            "tab": ["炎区域", "负面状态", "伤害", "屏障"],
            "sizeLevel": [
                ["2700%", "15%"],
                ["3150%", "17%"],
                ["3600%", "19%"],
                ["4050%", "21%"],
                ["4275%", "23%"],
                ["4500%", "25%"],
            ],
            "content": [
                "对半径",
                speSkillCon("600"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，使命中的敌人攻击力降低",
                speSkillCon("", 0, -1, 1),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("20"),
                "秒，并形成一个壁垒，同时将除首领外的所有敌人以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "牵引进壁垒内，壁垒内部产生炎元素区域。",
                "",
                "壁垒可以阻止外界敌人进入以及形成",
                speSkillCon("中等强度"),
                "的屏障抵御敌对投射物，持续",
                speSkillCon("20"),
                "秒"
            ]
        }
    },
    {
        "name": "特性：明罚敕法",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "200"], ["攻击速度", "0.56次每秒"]],
            "atType": ["单体"],
            "content": [
                "使用手中的盾牌攻击面前的目标，对其造成",
                speSkillCon("215%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "较易成为敌人的攻击目标，能更大范围的吸引敌人攻击自己",
                    "",
                    "受到炎元素伤害时，回复自身",
                    speSkillCon("3%最大生命值"),
                    "",
                    "自身位于炎元素区域时，格挡值提升",
                    speSkillCon("25%")
                ],//零花本体特性
                [
                    "主动技能【当关】命中的目标将会附着“燎原”状态，每秒受到",
                    speSkillCon("100%最终攻击的炎元素伤害"),
                    "，同时降低敌人",
                    speSkillCon("20%"),
                    { "desc": "", "color": SkillColorEnum.injuries },
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "炎元素抗性，持续",
                    speSkillCon("8"),
                    "秒"
                ],//一花特性
                [
                    "编入队伍时，队伍内所有炎元素角色伤害提升",
                    speSkillCon("15%"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "施放【调虎离山】后，使场上同调者获得相当于莫红袖最大生命值",
                speSkillCon("40%"),
                "的护盾"
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "意外刺激",
            "limit": "【默契值1级】",
            "tips": [
                "“莫少校怎么了？又被辣到了？”",
                "“我记得她选了甜的啊——喂，谁加的姜汁！”"
            ],
            "recipe": [
                "简约至上",
                "姜汁可可",
                "热",
                "糖浆",
                "焦糖布丁",
                "三叶长签"
            ]
        },
        {
            "name": "钢铁意志",
            "limit": "【默契值1级】",
            "tips": [
                "身为军人，莫红袖从不浪费食物。",
                "即便是面对眼前这杯加热过的无糖的青提啵啵奶茶……"
            ],
            "recipe": [
                "竹节茶杯",
                "青提啵啵奶茶",
                "无糖",
                "热",
                "咸梅干",
                "白玉兰"
            ]
        },
        {
            "name": "训练场外",
            "limit": "【默契值4级】",
            "tips": [
                "面前这杯海水半蓝总让莫红袖想起九旻基地训练场外的海岸线，就连杯中沾了盐的茶冻都有些像是被海浪拥抱的礁石。"
            ],
            "recipe": [
                "自证方圆",
                "海水半蓝",
                "少冰",
                "柠檬汁",
                "紫藤"
            ]
        },
        {
            "name": "猫一猫二",
            "limit": "【默契值13级】",
            "tips": [
                "猫一猫二扒拉着莫红袖的袖口，可怜兮兮地舔着鼻尖。",
                "“不行，草莓和汪汪饼干可以分给你们，但是云中桂影你们不能喝，撒娇也没用。”"
            ],
            "recipe": [
                "熊熊杯",
                "云中桂影",
                "草莓",
                "汪汪饼干",
                "精致纸伞"
            ]
        },
        {
            "name": "曾几何时",
            "limit": "【默契值1级】",
            "tips": [
                "迎着上级略带笑意的表情，莫红袖仰头饮下了成年后的第一杯酒。",
                "与她预期的辛辣不同，威士忌的口感醇厚回甘。",
                "“早就帮你加了双倍糖和柠檬汁了。”"
            ],
            "recipe": [
                "自证方圆",
                "沉金记忆",
                "双倍糖",
                "柠檬汁",
                "桂花"
            ]
        },
        {
            "name": "偶尔的迟钝",
            "limit": "【默契值18级】",
            "tips": [
                "照顾到莫红袖的口味，监督每次都将给她的薄暮飞行调配得淡一些，还会额外加上苦味素中和辣味。",
                "可是直到现在，莫红袖好像还没发现这一点。",
                "“原来莫队也有没那么敏锐的时候啊……”",
                "“嗯？”"
            ],
            "recipe": [
                "简约至上",
                "薄暮飞行",
                "苦味素",
                "偏淡",
                "黄瓜片",
                "水果签"
            ]
        },
        {
            "name": "休假",
            "limit": "【默契值16级】",
            "tips": [
                "“监督，我能跟你讨一张疏帘淡月的配方吗？”莫红袖举了举面前的熊熊杯。",
                "“当然可以。不过你了解这个是要……？”",
                "“最近要回家一趟，我想让武馆里的师兄弟们都尝尝。”",
                "“休假吗？”",
                "“不……有人来踢馆。”",
                "“？”"
            ],
            "recipe": [
                "竹节茶杯",
                "疏帘淡月",
                "五分糖",
                "正常冰",
                "空心圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "沉金记忆",
                "无糖",
                "苦味素"
            ],
            "ex": [433, 485, 528, 577],//参考默契值，无加，满家具，满穹顶，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "海水半蓝",
                "柠檬汁",
                "正常冰",
                "椰果"
            ],
            "ex": [439, 492, 537, 586],
        },
        {
            "needLevel": 6,
            "recipe": [
                "鲜榨雪梨汁",
                "常温",
                "椰果"
            ],
            "ex": [453, 508, 553, 604],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "经典特浓咖啡",
                "奶精球",
                "加双份",
                "香蕉冰淇淋"
            ],
            "ex": [496, 555, 605, 661],//参考默契值，无加，满家具，满加成
        },
    ]
}

const 莫红袖 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 莫红袖 }