import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "筑术师", "skill": [MXLaohenEnum.利刃三角β型, MXLaohenEnum.风化噬能], "attr": "feng", "star": "6",
    "nameEn": "LIUZHU", "tag": ["群攻", "输出"], "originWorld": "黑曜", "orginChar": "古剑奇谭网络版",
    "cv": "", "openDate": "2025年12月04日", "resourse": ["定向共鸣·旒珠"], "laohenLink": LaohenNameEnum.烟霞在侧,
    "introText": "执行官小姐，幸会，你可能曾在某段故事中听说过我，不过这里没有一叶城的城主，只有旒珠。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "3/36/dorersdm8q358npi5no9n29s3wh3k4b.png",
            "d/d1/871r9of5s7pabm4pf6dnhkdebihw5yo.png",
            "c/c9/ajcyip8l7t1g4la3jd93xqh3m6yxtav.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "叩玉声",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "12秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "对空"],//技能标签
        "sizeLevel": [
            ["1200%", "1440%"],
            ["1380%", "1656%"],
            ["1560%", "1872%"],
            ["1740%", "2088%"],
            ["1920%", "2304%"],
            ["2100%", "2520%"],
            ["2280%", "2736%"],
            ["2460%", "2952%"],
            ["2640%", "3168%"],
            ["2760%", "3312%"],
            ["2880%", "3456%"],
            ["3000%", "3600%"],
            ["3120%", "3744%"],
            ["3240%", "3888%"],
            ["3360%", "4032%"]
        ],
        "content": [
            "对选中区域造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的风元素伤害"),
            "，并留下一组“定音弦”，同组的两个定音弦之间会形成【共振区域】，每",
            speSkillCon("3"),
            "秒对共振区域目标造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的风元素伤害"),
            "，持续",
            speSkillCon("15"),
            "秒。",
            "",
            "场上最多存在3组“定音弦”",
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "和鸣·酬清音",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "8秒"]],
        "tab": ["伤害", "对空"],
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
            ["5200%"],
            ["5400%"],
            ["5600%"]
        ],
        "content": [
            "场上存在“定音弦”时激活一次场上全部【共振区域】，区域内造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，每施放",
            speSkillCon("3"),
            "次该技能回复",
            speSkillCon("1"),
            "次【叩玉声】次数",
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "铮鸣意",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害", "自身增益", "对空"],
        "sizeLevel": [
            ["4800%", "2", "60%"],
            ["5600%", "3", "70%"],
            ["6400%", "3", "80%"],
            ["7200%", "4", "90%"],
            ["7600%", "4", "95%"],
            ["8000%", "5", "100%"]
        ],
        "content": [
            "对区域范围内目标造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的风化元素伤害"),
            "，并使后续",
            speSkillCon("25"),
            "秒内普通攻击变为风化元素伤害且可额外攻击附近",
            speSkillCon("", 0, -1, 1),
            "个目标，同时持续时间内自动技能回复速度提高",
            speSkillCon("", 0, -1, 2)
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：轮回印记",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "1200"], ["攻击速度", "0.43次每秒"]],
        "atType": ["单体"],
        "content": [
            "对敌对单体目标造成",
            speSkillCon("210%最终攻击的风元素伤害"),
            "，异核技能持续时间内可攻击多个目标"
        ],//普通攻击
        "specialContent": [
            [
                "旒珠在场时，敌对目标受到场上任意同调者各1次风和蚀元素伤害或各受到1次风和水元素伤害后，会触发",
                speSkillCon("[风化反应]", SkillColorEnum.normal, ToastSkillEnum.风化反应),
                "，并对目标额外造成1次旒珠",
                speSkillCon("2000%最终攻击的风化元素伤害"),
                "，该效果每个目标每0.5秒最多触发1次（",
                speSkillCon("[风化元素伤害]", SkillColorEnum.normal, ToastSkillEnum.风化元素伤害),
                "）"
            ],//零花本体特性
            [
                "登场异核充能",
                speSkillCon("30"),
                "秒，施放【叩玉声】回复",
                speSkillCon("5"),
                "秒异核充能",
                "",
                "每次施放【和鸣·酬清音】自身暴击伤害提高",
                speSkillCon("20%"),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "，最多叠加",
                speSkillCon("3"),
                "次。"
            ],//一花特性
            [
                "【叩玉声】伤害转变为风化元素伤害，“定音弦”持续时间延长",
                speSkillCon("9"),
                "秒。场上每存在一组“定音弦”，自身伤害忽略目标基础减伤",
                speSkillCon("15%"),
                speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区忽略减伤),
                "，最多叠加",
                speSkillCon("3"),
                "次"
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
            "name": "下酒菜",
            "limit": "【默契值1级】",
            "tips": [
                "“柠檬汁……黄瓜片……难得看旒珠小姐加这么多小料呢。”",
                "“这杯薄暮飞行滋味浓烈，自然要多加一些，佐以下酒。”",
                "“原来是下酒菜吗……”"
            ],
            "recipe": [
                "简约至上",
                "薄暮飞行",
                "柠檬汁",
                "偏烈",
                "黄瓜片",
                "水果签"
            ]
        },
        {
            "name": "推荐",
            "limit": "【默契值4级】",
            "tips": [
                "“旒珠小姐……如果你喝不习惯苦啤兑苦咖的味道，其实我可以给你换一杯的。”",
                "“不妨事。这是……珑的推荐，我总要尝尝。”",
                "“那我给你多加些冰块？”",
                "“有劳了。”"
            ],
            "recipe": [
                "竹节茶杯",
                "恩利都苦啤兑苦咖",
                "多冰",
                "苦味素",
                "标准",
                "空心圆匙"
            ]
        },
        {
            "name": "性价比之选",
            "limit": "【默契值1级】",
            "tips": [
                "“我发现，来自黑曜的人大部分都更喜欢热水呢。”",
                "“毕竟煮沸的过程兼具杀菌————于黑曜人而言，算是更安全的选择。况且在黑曜，即便是热水，也并非随手可得的物资。如今有条件，自当珍惜。”"
            ],
            "recipe": [
                "简约至上",
                "白开水",
                "热",
                "盐",
                "五叶长签"
            ]
        },
        {
            "name": "兴之所至",
            "limit": "【默契值5级】",
            "tips": [
                "“再不喝，这杯姜茶可就要放凉————”",
                "“嘘，执行官你听。”",
                "“窗外这嘤咛鸟鸣，正与长乐歌的曲调相合。早知还是该带琵琶来，方不负眼前的风雅。”"
            ],
            "recipe": [
                "竹节茶杯",
                "姜茶",
                "无糖",
                "热",
                "柠檬片"
            ]
        },
        {
            "name": "高招",
            "limit": "【默契值13级】",
            "tips": [
                "“执行官，你又走神了。是有什么烦心事吗？”",
                "“抱歉抱歉，我只是————我只是在想白荆近期的舆论风波。当日一叶城名声在外，有好有坏，不知道旒珠小姐是怎么处理的呢？”",
                "“……旒珠小姐，将这空杯递给我的意思是？”",
                "“请君入爸，自证方圆。”"
            ],
            "recipe": [
                "自证方圆",
                "青草薄荷",
                "少冰",
                "偏烈",
                "草莓",
                "经典长签"
            ]
        },
        {
            "name": "入乡随俗",
            "limit": "【默契值1级】",
            "tips": [
                "“我脸上沾了什么东西？”",
                "“咳咳，没有没有。见惯了旒珠小姐品茗饮酒，难得看你喝苏打水，有些神奇。”",
                "“既然来了森罗，也要跟上森罗的步伐，不是吗？”"
            ],
            "recipe": [
                "熊熊杯",
                "薄荷蜜柚苏打",
                "正常冰",
                "叶子冻",
                "圆柄长签"
            ]
        },
        {
            "name": "心意",
            "limit": "【默契值18级】",
            "tips": [
                "“蝴蝶结……”",
                "“啊这是杯子上自带的装饰，旒珠小姐要是不喜欢，我————”",
                "“留着吧。你的心意，我很喜欢。”"
            ],
            "recipe": [
                "熊熊杯",
                "德里亚德风味花茶",
                "热",
                "珍珠",
                "蝴蝶结"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "薄荷蜜柚苏打",
                "正常冰",
                "茶冻"
            ],
            "ex": [472],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "姜茶",
                "正常糖",
                "热"
            ],
            "ex": [495],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "姜汁可可",
                "热",
                "椰浆",
                "焦糖布丁"
            ],
            "ex": [554],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "德里亚德风味花茶",
                "热",
                "茶冻"
            ],
            "ex": [620],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 旒珠 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 旒珠 }