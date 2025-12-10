import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.生生不息方块, MXLaohenEnum.绝处逢生], "attr": "wuli", "star": "1",
    "nameEn": "SWEEPER-EX", "tag": ["输出"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "吴磊", "openDate": "2024年01月12日", "resourse": ["成就奖励"],
    "introText": "初始化已完成。<br>Hi~Sweeper-EX竭诚为您服务，有什么能帮您哒？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "b/b2/2lryb74c2q8khqfylxelartv695mkme.png",
            "0/02/fbmfhaqg5lfswpx321ea0zt5c18qzhx.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "1000%甜心",
            "listNames": ["立绘", "3D"],
            "imgs": [
                "a/af/a4nocnpy9kjy6r37hew099xz151223w.png",
                "6/6a/ixw5h1rvqk5mwjl5zj4qgjl6btaw934.png"
            ]
        },
        {
            "name": "Sunny!Honey!",
            "listNames": ["立绘", "3D"],
            "imgs": [
                "a/a9/0fwyd65wft3yroj7ja8fxr9rm47pkbs.png",
                "c/cd/bvdyarz120c7hym5m4bvywryi1thk97.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "吸尘模式",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "格挡条破坏3"],//技能标签
            "content": [
                "攻击半径",
                speSkillCon("325"),
                "范围内的敌人，总计造成",
                speSkillCon("2500%最终攻击的物理伤害"),
                "，并以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "造成牵引效果"
            ]//满级技能内容描述
        }
    },
    {
        "name": "急速模式",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "30秒"], ["增益持续", "20秒"]],
            "tab": ["自身增益"],
            "content": [
                "攻击速度提升",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "，普通攻击伤害提升",
                speSkillCon("125%"),
                speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("20"),
                "秒",
                "",
                "技能效果结束后进入瘫痪状态，攻击速度、普通攻击伤害降低",
                speSkillCon("30%"),
                speSkillCon("（属性乘区·攻击速度；增伤乘区·技能增伤）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("10"),
                "秒"
            ]
        }
    },
    {
        "name": "大扫除模式",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"]],
            "tab": ["伤害", "格挡条破坏3"],
            "content": [
                "对半径",
                speSkillCon("500"),
                "范围内的敌方单位总计造成",
                speSkillCon("6000%最终攻击的水元素伤害")
            ]
        }
    },
    {
        "name": "特性：小心地滑",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "200"], ["攻击速度", "0.67次每秒"]],
            "atType": ["单体"],
            "content": [
                "对面前的目标持续挥砍鸡毛掸子造成",
                speSkillCon("108%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "异核技能可以造成水元素伤害"
                ],//零花本体特性
                [
                    "暴击率提高",
                    speSkillCon("10%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "暴击率再提高",
                    speSkillCon("15%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "自动防卫模式",
            "limit": "【默契值1级】",
            "tips": [
                "【正在扫描“郁金香酒杯”……请稍后……】",
                "【成分识别中……】",
                "【钙……镁和有机酸……已确认为“枫糖浆”……咖啡因……少量冰块……】",
                "【警报！警报！已开启自动防卫模式——】"
            ],
            "recipe": [
                "郁金香酒杯",
                "枫糖薄荷",
                "少冰",
                "奶精球",
                "咖啡冻",
                "精致纸伞"
            ]
        },
        {
            "name": "污垢清除",
            "limit": "【默契值13级】",
            "tips": [
                "“Sweeper对着那杯姜汁可可干什么呢？”",
                "“分离、去除里面的‘污垢’。”",
                "“污垢……等下，他是说椰果吗？那是小料！啊，怎么把装饰用的枫叶也吸走了！”"
            ],
            "recipe": [
                "马天尼杯",
                "姜汁可可",
                "热",
                "椰浆",
                "椰果",
                "枫叶"
            ]
        },
        {
            "name": "有我甜吗？",
            "limit": "【默契值1级】",
            "tips": [
                "无视处理器中自动跳出的11658项有关“酒精危害”的检索内容，Sweeper更想问监督……",
                "“双倍糖……有我甜吗？”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "酒酿凤梨",
                "双倍糖",
                "多冰",
                "蝴蝶结"
            ]
        },
        {
            "name": "迷思",
            "limit": "【默契值13级】",
            "tips": [
                "机械甜心会梦见电子月亮吗，会将马天尼杯口的盐粒认作星辰吗？"
            ],
            "recipe": [
                "马天尼杯",
                "黑月亮",
                "少冰",
                "盐",
                "偏烈",
                "五叶长签"
            ]
        },
        {
            "name": "独家饮料",
            "limit": "【默契值16级】",
            "tips": [
                "“监督，你也要来一杯吗？”",
                "“什么？‘抗磨降噪、长效续航’……这是饮料吗？”",
                "“加了奇异果片很好喝哒~”"
            ],
            "recipe": [
                "笛型香槟杯",
                "高级润滑油",
                "正常",
                "奇异果片",
                "白玉兰"
            ]
        },
        {
            "name": "小心机",
            "limit": "【默契值1级】",
            "tips": [
                "每当需要加班，监督就会提前煮一大壶又苦又浓的咖啡，随时取用。",
                "可不知什么时候起，Sweeper总是先监督一步，把它全部装进自己茶壶似的肚子里。",
                "“我太喜欢奶精球的味道了嘛——监督，你要是困了，就早点睡吧。”",
                "“Sweeper可以唱安眠曲给你听哟~”"
            ],
            "recipe": [
                "郁金香酒杯",
                "经典特浓咖啡",
                "奶精球",
                "柠檬片"
            ]
        },
        {
            "name": "一视同“人”",
            "limit": "【默契值13级】",
            "tips": [
                "每天清晨，白荆科技的食堂都会为员工准备牛奶和面包当作早餐。",
                "——包括Sweeper。",
                "他们甚至贴心地记下了他的喜好，虽然没人知道他为什么会更偏好加了薄荷叶的脱脂牛奶。"
            ],
            "recipe": [
                "马天尼杯",
                "甜牛乳",
                "正常糖",
                "多冰",
                "脱脂牛奶",
                "薄荷叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "奶油芭蕾",
                "标准",
                "正常",
                "燕麦奶"
            ],
            "ex": [461, 517, 564],//参考默契值，无加，满家具，满加成
        }
    ]
}

const SweeperEX = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { SweeperEX }