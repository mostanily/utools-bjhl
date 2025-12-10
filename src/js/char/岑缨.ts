import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形α型, MXLaohenEnum.左膀右臂菱形], "attr": "wuli", "star": "6",
    "nameEn": "CENYING", "tag": ["输出", "召唤", "拦截"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
    "cv": "龟娘", "openDate": "2024年01月18日", "resourse": ["定向共鸣·游光澄明", "常态共鸣·森罗万象"],
    "introText": "你好，我叫岑缨，是博物学会科考队的成员。听说白荆科技在研究Ｘ能源和异化核心时发生了很多趣事，可以讲给我听听吗？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "b/b0/707n20qiaikyu9f4x4ogjdjm8eqc8v4.png",
            "7/76/5wi9srx4mwr7zqckm4z0qpw8401jeb4.png",
            "b/ba/nvpltr1zywba2tddngokdq587l76e1a.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["浸花影"],
            "imgs": [
                "7/7e/bo3no3b27fuky4r1uzu6m7oifsygpnf.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "列星巡游",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "8"]],//技能使用情况，如冷却，可使用次数
            "tab": ["召唤", "拦截"],//技能标签
            "content": [
                "召唤5架自主巡逻的无人机「感光者」协同作战",
                "",
                "副无人机「感光者」将会在召唤点附近巡逻并攻击进入警戒区的单个敌人，持续",
                speSkillCon("30"),
                "秒，每架副无人机「感光者」攻击造成",
                speSkillCon("83%最终攻击的物理伤害"),
                "且在持续时间内最多攻击",
                speSkillCon("24"),
                "次",
                "",
                "优先攻击空中单位以及拦截敌方投射物"
            ]//满级技能内容描述
        }
    },
    {
        "name": "影中世界",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "10秒"]],
            "tab": ["伤害", "负面状态", "最大选敌数5"],
            "content": [
                "对目标半径",
                speSkillCon("250"),
                "范围内最多",
                speSkillCon("5"),
                "名敌人造成",
                speSkillCon("700%最终攻击的物理伤害"),
                "，并使其中非机械单位陷入",
                speSkillCon("2"),
                "秒",
                speSkillCon("[眩光]", SkillColorEnum.normal, ToastSkillEnum.眩光),
                "状态"
            ]
        }
    },
    {
        "name": "千秋行舰",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "120秒"]],
            "tab": ["召唤", "拦截"],
            "content": [
                "呼唤舰船，沿指定方向横穿战场，舰船存在",
                speSkillCon("31.8"),
                "秒，舰船行进前会清除路径上的所有投射物，随后每隔",
                speSkillCon("0.8"),
                "秒，连续对两个随机位置进行轰炸，每次对落点附近半径",
                speSkillCon("150"),
                "范围内的所有敌人造成",
                speSkillCon("300%最终攻击的物理伤害"),
                "，并使其中非机械单位陷入",
                speSkillCon("2"),
                "秒",
                speSkillCon("[眩光]", SkillColorEnum.normal, ToastSkillEnum.眩光),
                "状态",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：感光信标",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "指挥身边的主无人机「感光者」对当前目标进行攻击造成",
                speSkillCon("200%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "「感光者」视为召唤物",
                    "",
                    "每隔",
                    speSkillCon("30"),
                    "秒在目标位置召唤一架副无人机「感光者」协助战斗（效果受主动技能【列星巡游】等级影响）"
                ],//零花本体特性
                [
                    "异核技能【千秋行舰】的轰炸频率提高",
                    speSkillCon("50%"),
                    "，所有副无人机「感光者」造成的伤害额外提高",
                    speSkillCon("10%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "特性召唤副无人机「感光者」的间隔变为",
                    speSkillCon("10"),
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
                "通过特性召唤副无人机「感光者」时，使自身及召唤物所有伤害提高15％",
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "，若该伤害为异核伤害则效果翻倍，持续12秒"
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "尝试的勇气",
            "limit": "【默契值1级】",
            "tips": [
                "“你不是受不了姜汁的味道嘛，怎么还喝这么一大口？”",
                "监督哭笑不得地看着“眼泪汪汪”的岑缨。",
                "“……我想着什么都要试一下……”"
            ],
            "recipe": [
                "柯林杯",
                "姜汁可可",
                "多冰",
                "椰浆",
                "椰果",
                "经典长签"
            ]
        },
        {
            "name": "好奇心",
            "limit": "【默契值1级】",
            "tips": [
                "“配方不公开吗？感觉背后一定有什么特别的故事……”",
                "监督沉默不语，只是往岑缨的环口杯里又添了一勺抹茶冰淇淋。"
            ],
            "recipe": [
                "环口杯",
                "极夜马戏团",
                "柠檬汁",
                "偏淡",
                "抹茶冰淇淋",
                "长匙"
            ]
        },
        {
            "name": "一点了悟",
            "limit": "【默契值1级】",
            "tips": [
                "“小叔叔总是念叨的‘惑星的艾琳’，原来是这个味道。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "惑星的艾琳",
                "盐",
                "西瓜",
                "五叶长签"
            ]
        },
        {
            "name": "字条",
            "limit": "【默契值1级】",
            "tips": [
                "岑缨这次外出考察一结束就直奔白荆科技，可迎接她的，只有监督的字条和一杯五分糖的热牛奶。",
                "“先去好好睡一觉。有什么想要分享的，睡醒再和我说。”"
            ],
            "recipe": [
                "柯林杯",
                "甜牛乳",
                "五分糖",
                "热",
                "脱脂牛奶",
                "精致纸伞"
            ]
        },
        {
            "name": "照片分享",
            "limit": "【默契值8级】",
            "tips": [
                "“监督你看，这是我在考察船上拍到的夕阳，和这杯海水半蓝是不是很像？”"
            ],
            "recipe": [
                "环口杯",
                "海水半蓝",
                "正常冰",
                "盐",
                "椰果",
                "蝴蝶结"
            ]
        },
        {
            "name": "意外的启发",
            "limit": "【默契值16级】",
            "tips": [
                "“好久没看到小缨子了，她最近忙什么呢？又出去考察了？”",
                "“没。这不是上次在监督那喝了一杯双莓之恋吗？她大受启发，最近天天在帮博物馆设计联名方案呢。”"
            ],
            "recipe": [
                "双层叶纹",
                "双莓之恋",
                "正常糖",
                "多冰",
                "焦糖布丁",
                "樱花"
            ]
        },
        {
            "name": "可爱之物难以抵抗",
            "limit": "【默契值1级】",
            "tips": [
                "“你不是最喜欢云中桂影了，怎么今天喝得这么……小心翼翼的？”",
                "“汪汪饼干太可爱了，我怕自己喝得太快，它会变形……”"
            ],
            "recipe": [
                "家用玻璃杯",
                "云中桂影",
                "黄瓜片",
                "汪汪饼干",
                "五叶长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "惑星的艾琳",
                "苦味素",
                "咖啡雪顶"
            ],
            "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "奶油芭蕾",
                "加双份",
                "正常",
                "全脂牛奶"
            ],
            "ex": [477, 534, 582],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 岑缨 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 岑缨 }