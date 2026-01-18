import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "战术家", "skill": [MXLaohenEnum.核心充能菱形β型, MXLaohenEnum.战术施放], "attr": "wuli", "star": "6",
    "nameEn": "EVANES", "tag": ["召唤", "爆发", "支援"], "originWorld": "黑曜", "orginChar": "古剑奇谭网络版",
    "cv": "", "openDate": "2025年09月11日", "resourse": ["定向共鸣·虚构叙实"], "laohenLink": LaohenNameEnum.记虚,
    "introText": "逸虚，私家侦探，最擅长把秘密变成证据。好久不见啊，监督，你应该没忘记我这张足以上头条的帅脸吧？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "0/01/igg5wcgxxfwia1avrxobd0r7hyjan6q.png",
            "3/36/248iig882yqyl4hh7y8u47bvof5j5a0.png",
            "5/5d/chmn6rj8km7zgn7g009lwzhc2z2j9uy.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "双面侦探",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "抉择技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "-"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "自身增益", "友方增益", "拦截"],//技能标签
        "sizeLevel": [
            ["480%", "360%", "1800%"],
            ["552%", "414%", "2070%"],
            ["624%", "468%", "2340%"],
            ["696%", "522%", "2610%"],
            ["768%", "576%", "2880%"],
            ["840%", "630%", "3150%"],
            ["912%", "684%", "3420%"],
            ["984%", "738%", "3690%"],
            ["1056%", "792%", "3960%"],
            ["1104%", "828%", "4140%"],
            ["1152%", "864%", "4320%"],
            ["1200%", "900%", "4500%"],
            ["1248%", "936%", "4680%"],
            ["1296%", "972%", "4860%"],
            ["1344%", "1008%", "5040%"],
        ],
        "content": [
            speSkillCon("【虚言似真】", SkillColorEnum.injuries),
            "：（指令冷却：",
            speSkillCon("20"),
            "秒）",
            "",
            "进入",
            speSkillConWithImg(SkillDescStatusImg.逸虚物理),
            "状态（该状态视为物理同调者，属于",
            speSkillCon("[同调者临时元素变更]", SkillColorEnum.normal, ToastSkillEnum.同调者临时元素变更),
            "），并对友方同调者施加",
            speSkillCon("15"),
            "秒增益，增益期间若逸虚在场，同调者造成召唤物伤害时，七巧板额外附加1次相当于逸虚",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的物理伤害"),
            "，每人最多触发",
            speSkillCon("15"),
            "次，总计最多触发",
            speSkillCon("25"),
            "次，重复触发时刷新次数。",
            "",
            "",
            speSkillCon("【落笔如刀】", SkillColorEnum.injuries),
            "：（指令冷却：",
            speSkillCon("15"),
            "秒）",
            "",
            "进入",
            speSkillConWithImg(SkillDescStatusImg.逸虚风),
            "状态（该状态视为风元素同调者，属于",
            speSkillCon("[同调者临时元素变更]", SkillColorEnum.normal, ToastSkillEnum.同调者临时元素变更),
            "），普通攻击的七巧板变为飞镖，对直线路径造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的风元素伤害"),
            "，每额外贯穿1个敌方，伤害提高",
            speSkillCon("20%"),
            "，最多叠加5次",
            "",
            "同时七巧板对正前方矩形长",
            speSkillCon("1000"),
            "范围造成",
            speSkillCon("", 0, -1, 2),
            speSkillCon("最终攻击的风元素伤害"),
            "，摧毁范围内投射物并驱散毒雾，并使命中目标受到自身的风元素伤害提高",
            speSkillCon("30%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("20"),
            "秒"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "有利线索",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
        "tab": ["自身增益", "友方增益", "负面状态"],
        "sizeLevel": [
            ["40%"],
            ["46%"],
            ["52%"],
            ["58%"],
            ["64%"],
            ["70%"],
            ["76%"],
            ["82%"],
            ["88%"],
            ["92%"],
            ["96%"],
            ["100%"],
            ["104%"],
            ["108%"],
            ["112%"],
        ],
        "content": [
            "控制七巧板变为树木，同时使场上所有友方同调者主动技能回复速度提高",
            speSkillCon("", 0, -1, 0),
            speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒。",
            "",
            "持续时间内树会使逸虚每",
            speSkillCon("3"),
            "秒回复",
            speSkillCon("2"),
            "秒异核充能且对半径",
            speSkillCon("500"),
            "范围内的敌方每",
            speSkillCon("3"),
            "秒",
            speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
            "1次持续",
            speSkillCon("3"),
            "秒，同时驱散范围内毒雾。"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "共感侧写",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["自身增益", "友方增益"],
        "sizeLevel": [
            ["90%", "1"],
            ["105%", "2"],
            ["120%", "2"],
            ["135%", "2"],
            ["143%", "2"],
            ["150%", "3"]
        ],
        "content": [
            "驱使七巧板在指定位置施放半径",
            speSkillCon("550"),
            "的法阵并激活自动技能【有利线索】，法阵持续",
            speSkillCon("20"),
            "秒。此外根据施放时的形态具有不同效果（法阵持续时间内效果不会变化，逸虚重伤或者离场时效果消失）",
            "",
            speSkillConWithImg(SkillDescStatusImg.逸虚物理),
            "状态下：友方同调者对法阵内目标造成召唤物伤害后，法阵会额外对目标造成一次该伤害",
            speSkillCon("", 0, -1, 0),
            "的",
            speSkillCon("[真实伤害]", SkillColorEnum.normal, ToastSkillEnum.真实伤害),
            "",
            speSkillConWithImg(SkillDescStatusImg.逸虚风),
            "状态下：法阵施放时驱散范围内毒雾并使当前场上同调者的风元素伤害主动技能次数回复",
            speSkillCon("", 0, -1, 1),
            "次。此外法阵持续时间内场上同调者造成风元素伤害提高",
            speSkillCon("30%"),
            speSkillCon("(属性乘区·属性增伤)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区属性增伤),
            "",
            "战术家特性：开战时异核充能增加50%"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：见证者",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
        "atType": ["群体"],
        "content": [
            speSkillConWithImg(SkillDescStatusImg.逸虚物理),
            "状态：对敌方目标周围半径",
            speSkillCon("250"),
            "造成",
            speSkillCon("250%最终攻击的物理伤害"),
            "",
            speSkillConWithImg(SkillDescStatusImg.逸虚风),
            "状态：对直线路径上敌方造成伤害（实际伤害倍率由",
            speSkillCon("【落笔如刀】", SkillColorEnum.injuries),
            "决定）"
        ],//普通攻击
        "specialContent": [
            [
                "可驱使七巧板变化形状进行攻击或辅助，七巧板造成的伤害均视为召唤物伤害且可忽略目标基础减伤",
                speSkillCon("25%"),
                speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                "。",
                "",
                "初始为",
                speSkillConWithImg(SkillDescStatusImg.逸虚物理),
                "状态，可通过抉择技【双面侦探】切换",
                speSkillConWithImg(SkillDescStatusImg.逸虚物理),
                "和",
                speSkillConWithImg(SkillDescStatusImg.逸虚风),
                "状态。",
                "",
                speSkillConWithImg(SkillDescStatusImg.逸虚物理),
                "状态下视为物理同调者，",
                speSkillConWithImg(SkillDescStatusImg.逸虚风),
                "状态下视为风元素同调者。（该特性属于",
                speSkillCon("[同调者临时元素变更]", SkillColorEnum.normal, ToastSkillEnum.同调者临时元素变更),
                "）"
            ],//零花本体特性
            [
                speSkillConWithImg(SkillDescStatusImg.逸虚物理),
                "和",
                speSkillConWithImg(SkillDescStatusImg.逸虚风),
                "状态",
                speSkillCon("【虚言似真】", SkillColorEnum.injuries),
                "和",
                speSkillCon("【落笔如刀】", SkillColorEnum.injuries),
                "主动技能伤害命中目标后会使目标受到的伤害提高",
                speSkillCon("60%"),
                speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                "，持续",
                speSkillCon("30"),
                "秒"
            ],//一花特性
            [
                speSkillConWithImg(SkillDescStatusImg.逸虚物理),
                "状态【共感侧写】法阵持续时间内场上同调者提高",
                speSkillCon("50%"),
                speSkillCon("[同调者暴击伤害]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击伤害),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "。",
                "",
                speSkillConWithImg(SkillDescStatusImg.逸虚风),
                "状态【共感侧写】法阵持续时间内同调者第一次风元素伤害的主动技能不会进入指令冷却；法阵的风元素伤害提高效果提高至",
                speSkillCon("60%"),
                speSkillCon("(属性乘区·属性增伤)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区属性增伤)
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
            "name": "雷同",
            "limit": "【默契值1级】",
            "tips": [
                "“我实在想不通你为什么会讨厌薄荷蜜柚苏打？”",
                "“闻起来有点像骨殖。”",
                "“……？”"
            ],
            "recipe": [
                "柯林杯",
                "薄荷蜜柚苏打",
                "少冰",
                "茶冻",
                "精致纸伞"
            ]
        },
        {
            "name": "耐受",
            "limit": "【默契值13级】",
            "tips": [
                "“虽然我在饮食上没什么忌口，但面对海临这种特色甜汤冷粥……还是算了。”",
                "“只是一杯加了樱桃、珍珠的杨枝甘露而已，算是难度低的了。”",
                "“海临人为什么总在奇怪的地方耐受度很高？或许该我出马，找出真相了。”"
            ],
            "recipe": [
                "环口杯",
                "杨枝甘露",
                "樱桃",
                "珍珠",
                "长匙"
            ]
        },
        {
            "name": "想象力",
            "limit": "【默契值1级】",
            "tips": [
                "“监督，你在阅读小说的时候会不会幻想其中的饮食或是某个场景的气味、味道？”",
                "“会啊，怎么了？”",
                "“这杯热花茶……跟我想象中一模一样啊，真是叫人失望。”",
                "“是你的想象力过于发达了吧！”"
            ],
            "recipe": [
                "家用玻璃杯",
                "德里亚德风味花茶",
                "热",
                "咸梅干",
                "圆柄长签"
            ]
        },
        {
            "name": "黑曜特色",
            "limit": "【默契值8级】",
            "tips": [
                "“味道怎么样？”",
                "“椰果Q弹，奶香扑鼻，姜汁的味道也非常浓郁可口————不错！”",
                "“……你们黑曜人确实都不怎么挑食啊。”",
                "“没办法，挑食的人在黑曜活不下去啊。”"
            ],
            "recipe": [
                "双层叶纹",
                "姜汁可可",
                "正常冰",
                "奶精球",
                "椰果",
                "桂花"
            ]
        },
        {
            "name": "资源",
            "limit": "【默契值5级】",
            "tips": [
                "“一杯冰盐水而已，你的表情也太享受了吧？”",
                "“这可不是饮品，而是珍贵的淡水资源啊。”",
                "“……有道理。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "白开水",
                "多冰",
                "盐",
                "柠檬片"
            ]
        },
        {
            "name": "同病相怜",
            "limit": "【默契值18级】",
            "tips": [
                "“就味道而言，这杯特浓咖啡属实合我口味，可是我讨厌喝下它时，想起的那些加班的夜晚……”",
                "“不愧是作家啊。为了你这句话，逸虚，我们干一杯吧。”"
            ],
            "recipe": [
                "环口杯",
                "经典特浓咖啡",
                "糖浆",
                "标准",
                "香蕉冰淇淋",
                "心形插签"
            ]
        },
        {
            "name": "嘴上功夫",
            "limit": "【默契值4级】",
            "tips": [
                "“什么？你说姓崔的也喜欢薄暮飞行？哼，这家伙虽然人品一般，品味向来不错。”",
                "“————不然也不会交到你这样的朋友？”",
                "“正是~”"
            ],
            "recipe": [
                "柯林杯",
                "薄暮飞行",
                "柠檬汁",
                "偏烈",
                "黄瓜片",
                "空心圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "德里亚德风味花茶",
                "热",
                "咸梅干"
            ],
            "ex": [393],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "薄暮飞行",
                "柠檬汁",
                "偏烈",
                "原味雪顶"
            ],
            "ex": [483],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 逸虚 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 逸虚 }