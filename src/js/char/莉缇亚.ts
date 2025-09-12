import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.人形特攻β型, MXLaohenEnum.源源不断], "attr": "lei", "star": "5",
    "nameEn": "LYDIA", "tag": ["群攻", "输出"], "originWorld": "黎威尔", "orginChar": "原创",
    "cv": "忙音", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "闪金回响",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益"],//技能标签
            "content": [
                "被动：特性产生的金币对触碰到的敌人造成",
                speSkillCon("275%专精的雷元素伤害"),
                "",
                "向目标区域挥洒10枚金币，每枚金币都会对途中触碰到的敌人造成",
                speSkillCon("275%专精的雷元素伤害"),
                "，随后召回场上所有",
                speSkillConWithImg(SkillDescStatusImg.莉缇亚金币),
                "金币，再次对途中触碰到的敌人造成",
                speSkillCon("275%专精的雷元素伤害"),
                "",
                "累计召回",
                speSkillCon("30"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.莉缇亚金币),
                "金币后获得强化：挥洒的金币数量增加",
                speSkillCon("5"),
                "枚"
            ]//满级技能内容描述
        }
    },
    {
        "name": "商神印记",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "20秒"]],
            "tab": ["伤害", "穿透屏障", "持续施法"],
            "content": [
                speSkillCon("该效果仅对精英及首领级别敌人生效", SkillColorEnum.injuries),
                "",
                "吟唱",
                speSkillCon("4"),
                "秒后，对单个目标造成",
                speSkillCon("3125%最终攻击的雷元素伤害"),
                "+",
                speSkillCon("3125%专精的雷元素伤害"),
                "，并在目标附近掉落3枚金币",
                "",
                "主动技能【闪金回响】累计召回",
                speSkillCon("75"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.莉缇亚金币),
                "金币后获得强化：吟唱时间缩短",
                speSkillCon("3"),
                "秒，掉落金币增加到",
                speSkillCon("5"),
                "枚，且命中目标后回复1次主动技能【闪金回响】次数"
            ]
        }
    },
    {
        "name": "雷霆圣域",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "80秒"]],
            "tab": ["伤害", "穿透屏障"],
            "content": [
                "对指定区域半径",
                speSkillCon("500"),
                "范围内的敌人总计造成",
                speSkillCon("2700%最终攻击的雷元素伤害"),
                "+",
                speSkillCon("2700%专精的雷元素伤害"),
                "，并在区域内随机掉落10枚金币",
                "",
                "主动技能【闪金回响】累计召回",
                speSkillCon("130"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.莉缇亚金币),
                "金币后获得强化：掉落金币数量翻倍"
            ]
        }
    },
    {
        "name": "特性：等价法则",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射魔法金币造成",
                speSkillCon("100%最终攻击的雷元素伤害"),
                "+",
                speSkillCon("100%专精的雷元素伤害"),
                "",
                "普通攻击命中敌人后，会在敌人附近掉落",
                speSkillCon("1"),
                "枚附着雷电之力的魔法金币，对触碰到的敌人造成雷元素伤害，金币持续存在",
                speSkillCon("10"),
                "秒"
            ],//普通攻击
            "specialContent": [
                [
                    "无"
                ],//零花本体特性
                [
                    "普通攻击掉落的金币增加至",
                    speSkillCon("2"),
                    "枚，造成的雷元素伤害提升",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，持续时间增加至",
                    speSkillCon("15"),
                    "秒"
                ],//一花特性
                [
                    "每次召回金币时，永久提升",
                    speSkillCon("0.2%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "基础专精值，最多召回150枚金币"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "淡粉",
            "limit": "【默契值1级】",
            "tips": [
                "不知出于什么原因，莉缇亚总是能收到很多粉嫩的礼物。",
                "也包括今天这杯泛着淡粉色的饮料。"
            ],
            "recipe": [
                "桃桃乌龙茶",
                "三分糖",
                "少冰"
            ]
        },
        {
            "name": "日出之地",
            "limit": "【默契值1级】",
            "tips": [
                "莉缇亚不会特意去回忆黎威尔的过往，就像她不会特意去迎接曾经的日出。",
                "“今天加一份青提怎么样？”",
                "“那请监督再帮我添一些其他的风味吧。顺便今天，我想要那个格纹的杯子。”",
                "“好啊，给，你的长签。”"
            ],
            "recipe": [
                "经典格纹",
                "黎威尔日升",
                "糖包",
                "柠檬汁",
                "青提",
                "三叶长签"
            ]
        },
        {
            "name": "清凉冰爽",
            "limit": "【默契值4级】",
            "tips": [
                "偶尔也需要一杯简单的苏打水清凉一下。",
                "可以考虑加点果冻，再配上一朵小花。"
            ],
            "recipe": [
                "冰镇苏打水",
                "少冰",
                "茶冻",
                "樱花"
            ]
        },
        {
            "name": "意外的喜好",
            "limit": "【默契值6级】",
            "tips": [
                "“怎么想到给我点这个？”",
                "“只是觉得莉缇亚说不定意外不讨厌。”",
                "莉缇亚笑了笑，拿起一根插签，“那就五分糖，多谢监督。”"
            ],
            "recipe": [
                "甜牛乳",
                "五分糖",
                "常温",
                "脱脂牛奶",
                "心形插签"
            ]
        },
        {
            "name": "淑女口味",
            "limit": "【默契值10级】",
            "tips": [
                "“莉缇亚小姐喜欢这个啊……？”",
                "“怎么了怎么了看不起恩利都特产是吧，真的很上头，比柠檬咖啡猛多了！”",
                "“诶怎么还拉踩呢——”",
                "莉缇亚端着精致的咖啡杯，将所有自以为的悄悄话都听在耳中。",
                "——接着她又加了几粒盐，拿起了迷迭香。",
                "“？？？”"
            ],
            "recipe": [
                "淑女风尚",
                "恩利都苦啤兑苦咖",
                "少冰",
                "盐",
                "标准",
                "迷迭香"
            ]
        },
        {
            "name": "调酒师的故事",
            "limit": "【默契值18级】",
            "tips": [
                "他们都说这杯酒就像莉缇亚本人一样，温柔又疏离。",
                "“‘隔着人潮，只望了我一眼’……看起来它的背后有一段浪漫的故事，监督知道么？”",
                "“这可能就只有调酒师本人才知道了吧……柠檬汁要加点么？”",
                "“谢谢。”",
                "她挑起一枚樱桃，将目光投向窗外——太阳快落山了。"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "惑星的艾琳",
                "柠檬汁",
                "樱桃",
                "枫叶"
            ]
        },
        {
            "name": "冬天的味道",
            "limit": "【默契值16级】",
            "tips": [
                "淡淡的冬天里，一朵樱花飘落在不属于它的季节。",
                "——“监督，要不要算一算今年的冬天，海临会不会下雪？”"
            ],
            "recipe": [
                "鎏·金",
                "银色青松",
                "盐",
                "偏淡",
                "樱花"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "德里亚德风味花茶",
                "常温",
                "叶子冻"
            ],
            "ex": [393, 441, 480],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "冰镇苏打水",
                "少冰",
                "咸梅干"
            ],
            "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "极夜马戏团",
                "盐",
                "偏烈",
                "樱桃"
            ],
            "ex": [504, 564, 615],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "银色青松",
                "盐",
                "偏淡"
            ],
            "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "惑星的艾琳",
                "盐",
                "樱桃"
            ],
            "ex": [558, 625, 685],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 莉缇亚 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 莉缇亚 }