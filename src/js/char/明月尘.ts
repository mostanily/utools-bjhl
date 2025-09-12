import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.异核过载, MXLaohenEnum.蚀核强攻], "attr": "shi", "star": "6",
    "nameEn": "SOLBYRD VON LUMINBERG", "tag": ["输出", "爆发"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
    "cv": "谢添天", "openDate": "2024年09月19日", "resourse": ["定向共鸣·飞鸟也栖"], "laohenLink":LaohenNameEnum.棺中鸟
}

const Skill = [
    {
        "name": "速效麻醉",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "格挡条破坏3"],//技能标签
            "sizeLevel": [
                ["1600%"],
                ["1840%"],
                ["2080%"],
                ["2320%"],
                ["2560%"],
                ["2800%"],
                ["3040%"],
                ["3280%"],
                ["3520%"],
                ["3680%"],
                ["3840%"],
                ["4000%"],
                ["4160%"],
                ["4320%"],
                ["4480%"]
            ],
            "content": [
                "向十字区域快速冲锋并生成针刺，对选中区域的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的蚀元素伤害"),
                "，并以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "将区域内的敌人拉向中心点，并为终端附加",
                speSkillCon("20点蚀爆值"),
                "，自身获得",
                speSkillCon("20"),
                "点",
                speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                "的能量。"
            ]//满级技能内容描述
        }
    },
    {
        "name": "善恶研判",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
            "tab": ["伤害", "自身增益", "负面状态", "格挡条破坏3"],
            "sizeLevel": [
                ["600%","800%"],
                ["690%","920%"],
                ["780%","1040%"],
                ["870%","1160%"],
                ["960%","1280%"],
                ["1050%","1400%"],
                ["1140%","1520%"],
                ["1230%","1640%"],
                ["1320%","1760%"],
                ["1380%","1840%"],
                ["1440%","1920%"],
                ["1500%","2000%"],
                ["1560%","2080%"],
                ["1620%","2160%"],
                ["1680%","2240%"]
            ],
            "content": [
                "被动：每隔",
                speSkillCon("15"),
                "秒，明月尘进入",
                speSkillConWithImg(SkillDescStatusImg.明月尘刃血),
                "「刃血」状态，对自身周围",
                speSkillCon("400"),
                "范围的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的蚀元素伤害"),
                "，该状态下攻击速度提高",
                speSkillCon("40%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "且每",
                speSkillCon("2"),
                "秒回复",
                speSkillCon("4"),
                "点",
                speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                "能量（攻击速度提高会降低回复间隔，最低间隔",
                speSkillCon("1"),
                "秒），持续",
                speSkillCon("15"),
                "秒。 明月尘在",
                speSkillConWithImg(SkillDescStatusImg.明月尘刃血),
                "「刃血」状态下，可以使用一次主动技能【善恶研判】",
                "",
                "",
                "主动：在自身周围划定",
                speSkillCon("600"),
                "范围的研判区域，对范围内的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("15点蚀爆值"),
                "，并附带破坏",
                speSkillCon("3段格挡条"),
                "效果。 研判区域持续",
                speSkillCon("15"),
                "秒，区域内的敌人受到的伤害提高",
                speSkillCon("40%"),
                speSkillCon("（[目标减益乘区·目标受伤害增加]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                "；明月尘在区域内造成伤害时，可以恢复自身",
                speSkillCon("2%"),
                "的生命值（累计不超过",
                speSkillCon("30%"),
                "的最大生命值）",
                "",
                "区域内的敌方单位死亡时，明月尘获得",
                speSkillCon("2"),
                "点",
                speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                "的能量，精英及以上单位死亡时获得",
                speSkillCon("5"),
                "点",
                speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                "的能量。",
                "",
                "研判区域同时只能存在一个。（明月尘重伤或离场时消失）"
            ]
        }
    },
    {
        "name": "死亡宣告",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["释放条件", "100血之祭坛"]],
            "tab": ["伤害", "格挡条破坏3"],
            "sizeLevel": [
                ["24%","3000%"],
                ["28%","3500%"],
                ["32%","4000%"],
                ["36%","4500%"],
                ["38%","4750%"],
                ["40%","5000%"]
            ],
            "content": [
                "对自身周围",
                speSkillCon("750"),
                "范围内的敌人造成其当前生命值",
                speSkillCon("", 0, -1, 0),
                "的",
                speSkillCon("[真实伤害]", SkillColorEnum.normal, ToastSkillEnum.真实伤害),
                "，首领单位受到的该伤害减少",
                speSkillCon("70%"),
                "。",
                "",
                "并额外对自身周围",
                speSkillCon("750"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的蚀元素伤害"),
                "，为终端附加",
                speSkillCon("25点蚀爆值"),
                "。"
            ]
        }
    },
    {
        "name": "特性：猎血者",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "400"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体", "格挡条破坏1"],
            "content": [
                "向当前目标投掷帽子，对其造成",
                speSkillCon("2200%最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("3点蚀爆值")
            ],//普通攻击
            "specialContent": [
                [
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量上限为",
                    speSkillCon("100"),
                    "点，明月尘每次释放异核技能需要消耗",
                    speSkillCon("100"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "能量，不再需要消耗异核充能，当明月尘受到来自同调者的异核充能回复效果时，获得",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "攻击速度，持续40秒",
                    "",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "能量不会自动回复，明月尘可通过技能效果获得",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "能量。"
                ],//零花本体特性
                [
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量上限提高至",
                    speSkillCon("200"),
                    "点，",
                    speSkillConWithImg(SkillDescStatusImg.明月尘刃血),
                    "「刃血」状态下，持续回复的",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "能量每次额外提高",
                    speSkillCon("4"),
                    "点；异核技能【死亡宣告】造成的伤害忽略目标",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤"
                ],//一花特性
                [
                    "登场时获得",
                    speSkillCon("80"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量。研判区域内的敌人受到伤害提高效果提高至",
                    speSkillCon("100%"),
                    speSkillCon("（[目标减益乘区·目标受伤害增加]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "尊敬",
            "limit": "【默契值1级】",
            "tips": [
                "“虽然在成为阿玛辛后，我的味觉退化了不少，但……加了苦味素的苦啤兑苦咖？”",
                "“这是阁下平日的饮品？”",
                "“……你实在令人尊敬。”"
            ],
            "recipe": [
                "笛型香槟杯",
                "恩利都苦啤兑苦咖",
                "少冰",
                "苦味素",
                "标准",
                "柠檬片"
            ]
        },
        {
            "name": "随身物品",
            "limit": "【默契值13级】",
            "tips": [
                "明月尘扫了一眼自己面前的无糖热牛奶，无声地将自己的箱子打开，从里面拿出一整瓶未开封的红酒。",
                "“……你一直随身带着这个吗？”",
                "“是的。”"
            ],
            "recipe": [
                "马天尼杯",
                "甜牛乳",
                "无糖",
                "热",
                "三叶长签"
            ]
        },
        {
            "name": "黑月亮",
            "limit": "【默契值4级】",
            "tips": [
                "“如果世上的某处真有黑月亮，那夜晚就更加无趣了。”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "黑月亮",
                "多冰",
                "柠檬汁",
                "樱桃",
                "水果签"
            ]
        },
        {
            "name": "虚惊一场",
            "limit": "【默契值5级】",
            "tips": [
                "“无须担心，这杯极夜马戏团里的盐不会对我造成任何影响。”"
            ],
            "recipe": [
                "郁金香酒杯",
                "极夜马戏团",
                "盐",
                "偏烈",
                "奇异果片",
                "精致纸伞"
            ]
        },
        {
            "name": "切莫当真",
            "limit": "【默契值6级】",
            "tips": [
                "“这杯五分糖的热姜茶还不错，阁下要试试吗？”",
                "“……我能相信阿玛辛的味觉吗？”",
                "“当然。”",
                "明月尘真诚地笑了。"
            ],
            "recipe": [
                "蝶形香槟杯",
                "姜茶",
                "五分糖",
                "热",
                "银杏叶"
            ]
        },
        {
            "name": "永生之苦",
            "limit": "【默契值13级】",
            "tips": [
                "“如此灿烂的日出业已陨落，而我却被引至永生的道路……命运啊，实在是可悲可恶不可测。”"
            ],
            "recipe": [
                "马天尼杯",
                "黎威尔日升",
                "椰浆",
                "柠檬汁",
                "黄瓜片",
                "五叶长签"
            ]
        },
        {
            "name": "行走的灾厄",
            "limit": "【默契值1级】",
            "tips": [
                "“在漫长的岁月中，我曾不止一次培植鲜花草木。”",
                "“只可惜阿玛辛所过之处唯有死亡随行——有时早晨种下，傍晚便已腐朽。”",
                "“嗯？阁下说和阿玛辛没关系……？”"
            ],
            "recipe": [
                "笛型香槟杯",
                "德里亚德风味花茶",
                "常温",
                "叶子冻",
                "圆匙"
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
            "ex": [434, 486, 530, 579],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "黑月亮",
                "盐",
                "少冰",
                "樱桃"
            ],
            "ex": [461, 517, 564, 615],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "极夜马戏团",
                "盐",
                "正常",
                "樱桃"
            ],
            "ex": [476, 533, 581, 639],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "白开水",
                "盐",
                "少冰"
            ],
            "ex": [534, 598, 652, 712],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 明月尘 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 明月尘 }