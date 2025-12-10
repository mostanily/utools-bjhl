import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.狩猎时刻对地, MXLaohenEnum.左膀右臂三角], "attr": "wuli", "star": "6",
    "nameEn": "TONG", "tag": ["召唤", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭二",
    "cv": "刘北辰", "openDate": "2024年01月12日", "resourse": ["常态共鸣·森罗万象", "常态共鸣"],
    "introText": "我是瞳。你的事曲观玄已经跟我说了，选题可以直接放我桌上。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "e/e4/mt6xb5wukcwwdcy7ai9ii0sgkpio2se.png",
            "d/d2/tolkh60fwm52veg81cmpjqxeuaid0ex.png",
            "a/a8/dlcuvio2v2pz97kekr26piqnt7y5hif.png"
        ]
    }
}

const Skill = [
    {
        "name": "精确制导",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "拦截"],//技能标签
            "content": [
                "施放大量导弹轰炸半径",
                speSkillCon("400"),
                "的指定区域，拦截范围内的所有投射物，对随机半径",
                speSkillCon("120"),
                "范围内的敌人造成总计",
                speSkillCon("3751%最终攻击的物理伤害"),
                "，同时浮游炮蓄能射击，每个造成",
                speSkillCon("1250%最终攻击的物理伤害"),
                "",
                "范围内每有5名敌方单位，将额外消耗1次技能使用次数施放同等数量的导弹，最多额外消耗2次"
            ]//满级技能内容描述
        }
    },
    {
        "name": "戈尔贡防线",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "40秒"], ["增益持续", "20秒"]],
            "tab": ["自身增益", "负面状态"],
            "content": [
                "启动防线模式，每秒回复",
                speSkillCon("3%最大生命值"),
                "，持续",
                speSkillCon("20"),
                "秒",
                "",
                "防线模式下同时使用左右弹仓攻击，普通攻击造成伤害时使目标陷入",
                speSkillCon("[石化]", SkillColorEnum.normal, ToastSkillEnum.石化),
                "状态，无法行动且受到的物理伤害提升",
                speSkillCon("24%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续",
                speSkillCon("1"),
                "秒",
                "",
                "回复2次主动技能【精确制导】的使用次数"
            ]
        }
    },
    {
        "name": "集束战争",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"]],
            "tab": ["伤害", "自身增益", "召唤", "拦截"],
            "content": [
                "使用全部武装攻击指定区域，对半径",
                speSkillCon("500"),
                "范围内随机位置发射导弹和激光攻击敌人，总计造成",
                speSkillCon("5500%最终攻击的物理伤害"),
                "，过程中敌人每次受到导弹和激光攻击都会使其受到该技能后续伤害额外提升",
                speSkillCon("2%"),
                speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                "，最多提升",
                speSkillCon("84%"),
                speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                "",
                "同时激活自动技能【戈尔贡防线】，并在本次【戈尔贡防线】期间：生成4个浮游炮环绕在身边，对靠近的目标半径",
                speSkillCon("250"),
                "范围内的敌方造成",
                speSkillCon("450%最终攻击的物理伤害"),
                "，在自身受到伤害时展开防御力场抵挡",
                speSkillCon("30%~50%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                "伤害"
            ]
        }
    },
    {
        "name": "特性：毁伤升级",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1200"], ["攻击速度", "0.33次每秒"]],
            "atType": ["群体", "对空"],
            "content": [
                "交替使用左右弹仓发射的3连发对地小范围",
                speSkillCon("60%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "浮游炮为召唤物",
                    "",
                    "使用2个浮游炮协同作战，每隔",
                    speSkillCon("5"),
                    "秒，浮游炮会在战场上自主寻找目标进行环状扫射，每个造成",
                    speSkillCon("60%最终攻击的物理伤害")
                ],//零花本体特性
                [
                    "每隔15秒，会进行一次战备升级，下一次主动技能【精确制导】会对选中区域内所有敌人额外造成",
                    speSkillCon("150%最终攻击的物理伤害")
                ],//一花特性
                [
                    "编入队伍时，队伍内所有筑术师伤害提升",
                    speSkillCon("15%"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "技能【戈尔贡防线】冷却缩短至",
                speSkillCon("15"),
                "秒，且【戈尔贡防线】下普通攻击同时也使目标受到伤害提高",
                speSkillCon("25%"),
                speSkillCon("（目标减益乘区·目标受伤害增加）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("4"),
                "秒；此外异核冷却缩短至",
                speSkillCon("80"),
                "秒"
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "没想到",
            "limit": "【默契值1级】",
            "tips": [
                "“瞳老师，这杯桃桃乌龙茶，您不喜欢，我就撤……”",
                "“留着。元桃桃等会要来我这补作业。”"
            ],
            "recipe": [
                "郁金香酒杯",
                "桃桃乌龙茶",
                "三分糖",
                "正常冰",
                "椰果",
                "长匙"
            ]
        },
        {
            "name": "无法理解",
            "limit": "【默契值13级】",
            "tips": [
                "看着白荆前台数十杯为了BS联名周边而买的双莓之恋，瞳决定在员工培训中新增一门关于理性决定的课程。"
            ],
            "recipe": [
                "蝶形香槟杯",
                "双莓之恋",
                "正常糖",
                "多冰",
                "珍珠",
                "蝴蝶结"
            ]
        },
        {
            "name": "死道友不死贫道",
            "limit": "【默契值1级】",
            "tips": [
                "“无糖热牛奶并不能让我休息得更好，你准时上交的研究报告可以。”",
                "“啊……啊……那个……苏筱上个月的论文还没交！”",
                "“监督——”"
            ],
            "recipe": [
                "马天尼杯",
                "甜牛乳",
                "无糖",
                "热",
                "脱脂牛奶",
                "薄荷叶"
            ]
        },
        {
            "name": "体感？",
            "limit": "【默契值5级】",
            "tips": [
                "虽然只在白开水中加了几滴柠檬汁，然而瞳还是察觉到了。",
                "“ph值不对。”"
            ],
            "recipe": [
                "马天尼杯",
                "白开水",
                "常温",
                "柠檬汁",
                "枫叶"
            ]
        },
        {
            "name": "自有方法",
            "limit": "【默契值8级】",
            "tips": [
                "不公布配方？",
                "瞳敲了敲手臂内侧。",
                "“已开始检测——”"
            ],
            "recipe": [
                "郁金香酒杯",
                "极夜马戏团",
                "盐",
                "正常",
                "奇异果片",
                "五叶长签"
            ]
        },
        {
            "name": "师生",
            "limit": "【默契值16级】",
            "tips": [
                "曾几何时，每当一项研究结束，曲观玄都会找瞳喝一杯。",
                "曲观玄走了，这事也就随之终止。",
                "直到某一天，监督端着一杯海水半蓝出现在他的实验室。",
                "“你确实是曲观玄的学生。”",
                "“？”"
            ],
            "recipe": [
                "笛型香槟杯",
                "海水半蓝",
                "少冰",
                "苦味素",
                "蜜桃冻",
                "柠檬片"
            ]
        },
        {
            "name": "意外答案",
            "limit": "【默契值18级】",
            "tips": [
                "“明明白荆科技95%的人都受不了姜汁可可，为什么它还顽固地扒在菜单上啊？到底谁在喝啊？”",
                "“……瞳老师。”",
                "“啊？”"
            ],
            "recipe": [
                "马天尼杯",
                "姜汁可可",
                "热",
                "奶精球",
                "咖啡冻",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "酒酿凤梨",
                "三分糖",
                "少冰"
            ],
            "ex": [311, 349, 380],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "薄荷蜜柚苏打",
                "少冰",
                "叶子冻"
            ],
            "ex": [346, 388, 423],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "白开水",
                "盐",
                "少冰"
            ],
            "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "极夜马戏团",
                "盐",
                "正常",
                "蓝莓"
            ],
            "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "经典特浓咖啡",
                "奶精球",
                "标准",
                "咖啡雪顶"
            ],
            "ex": [492, 551, 601],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 瞳 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 瞳 }