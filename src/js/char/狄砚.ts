import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.针对打击三角, MXLaohenEnum.同步强化], "attr": "wuli", "star": "4",
    "nameEn": "DIYAN", "tag": ["群攻", "支援", "拦截"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "苏婉", "openDate": "2024年01月12日", "resourse": ["主线S0-1赠送", "常态共鸣"]
}

const Skill = [
    {
        "name": "弹雨韶华",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "拦截"],//技能标签
            "content": [
                "对半径",
                speSkillCon("350"),
                "范围内的敌方单位造成",
                speSkillCon("1875%最终攻击的物理伤害"),
                "并拦截敌方投射物"
            ]//满级技能内容描述
        }
    },
    {
        "name": "夜焰升平",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
            "tab": ["自身增益", "友方增益"],
            "content": [
                "使友方全体同调者提升",
                speSkillCon("21%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "，自身暴击率额外提升",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "以及暴击伤害提升",
                speSkillCon("80%"),
                speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("20"),
                "秒"
            ]
        }
    },
    {
        "name": "穿杨之宴",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "自身增益", "拦截", "穿透屏障"],
            "content": [
                "对指定区域内的敌方单位造成",
                speSkillCon("2400%最终攻击的物理伤害"),
                "并拦截敌方投射物，此后将普通攻击切换为三连发模式，",
                speSkillCon("攻击速度：0.77次每秒"),
                "，伤害降低20%，持续",
                speSkillCon("24"),
                "秒"
            ]
        }
    },
    {
        "name": "特性：华照阑珊",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.56次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射子弹造成",
                speSkillCon("179%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "对空中目标造成伤害提升",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "主动技能【弹雨韶华】触发连击时，造成的伤害提高",
                    speSkillCon("50%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "对空中目标造成伤害提升变为",
                    speSkillCon("50%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "难解的结",
            "limit": "【默契值13级】",
            "tips": [
                "似乎只要是来自恩利都的事物，便很难在遥城人之中受到欢迎。",
                "“您的好意我心领了。”",
                "狄砚轻轻用五叶长签搅动着柯林杯里的冰块，却一口也没有喝。"
            ],
            "recipe": [
                "柯林杯",
                "恩利都苦啤兑苦咖",
                "多冰",
                "盐",
                "加双份",
                "五叶长签"
            ]
        },
        {
            "name": "“惊人”酒量",
            "limit": "【默契值1级】",
            "tips": [
                "只是将装有甜米酿的玻璃杯摆在面前，没过多久，狄砚含笑的眼便有些迷离了起来。",
                "“这样也会醉吗？”",
                "“抱、抱歉。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "酒酿凤梨",
                "正常糖",
                "正常冰",
                "紫藤"
            ]
        },
        {
            "name": "我怀念的",
            "limit": "【默契值13级】",
            "tips": [
                "也许是因为狄砚那些年太过瘦小，又是难得的女儿，家人对她总是格外仔细。",
                "就是炎炎夏日，他们也要往她怀里揣一壶祛湿的热茶。",
                "以至于如今猛地闻见姜片的辛辣，狄砚心头涌起的，竟是一点怀念。"
            ],
            "recipe": [
                "柯林杯",
                "姜茶",
                "无糖",
                "热",
                "心形插签"
            ]
        },
        {
            "name": "奇怪的搭配",
            "limit": "【默契值6级】",
            "tips": [
                "狄砚虽然不明白监督为何会在奶油芭蕾中投入双份浓缩与燕麦奶，调制成如此激烈的味道……",
                "但她不会质疑监督，任何时候都不会。"
            ],
            "recipe": [
                "环口杯",
                "奶油芭蕾",
                "燕麦奶",
                "偏烈",
                "加双份",
                "桂花"
            ]
        },
        {
            "name": "意外滋味",
            "limit": "【默契值16级】",
            "tips": [
                "“这个味道的苏打水在我常去的射击场也有贩售……薄荷、蜂蜜、咖啡……”",
                "“没有咖啡哦。”",
                "“嗯？”",
                "“小砚你尝到的，该不会是硝烟的味道吧？”"
            ],
            "recipe": [
                "家用玻璃杯",
                "薄荷蜜柚苏打",
                "正常冰",
                "芒果果冻",
                "菊花"
            ]
        },
        {
            "name": "我们俩",
            "limit": "【默契值10级】",
            "tips": [
                "“真没想到小砚会喜欢‘惑星的艾琳’。”",
                "“比起味道，我更喜欢它背后的故事——监督相信一见钟情吗？”",
                "“……嗯。”",
                "两个人对视了一眼，又同时移开目光。",
                "——怎么连额外添加的苦味素都变得有些甜？"
            ],
            "recipe": [
                "双层叶纹",
                "惑星的艾琳",
                "苦味素",
                "西瓜",
                "空心圆匙"
            ]
        },
        {
            "name": "皆大欢喜",
            "limit": "【默契值18级】",
            "tips": [
                "监督研究了很久才找到狄砚也能接受的含酒精的饮品配方——海水半蓝，加柠檬汁与椰果，还要放许多冰块。",
                "狄砚尝了一口……确实没有令她难受的酒精味道，她尝到的，只有心意。"
            ],
            "recipe": [
                "双层叶纹",
                "海水半蓝",
                "多冰",
                "柠檬汁",
                "椰果",
                "三叶长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "姜茶",
                "五分糖",
                "常温"
            ],
            "ex": [315, 352, 384],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "黑月亮",
                "盐",
                "多冰",
                "樱桃"
            ],
            "ex": [373, 418, 455],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "经典特浓咖啡",
                "奶精球",
                "标准",
                "咖啡雪顶"
            ],
            "ex": [410, 459, 501],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "惑星的艾琳",
                "盐",
                "咖啡雪顶"
            ],
            "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "海水半蓝",
                "柠檬汁",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [461, 517, 564],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 狄砚 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 狄砚 }