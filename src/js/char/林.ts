import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "轻卫", "skill": [MXLaohenEnum.核心充能方块α型, MXLaohenEnum.炎域强袭], "attr": "yan", "star": "6",
    "nameEn": "LYNN", "tag": ["防护", "输出", "元素区域"], "originWorld": "黑曜", "orginChar": "原创",
    "cv": "孟阳", "openDate": "2024年12月12日", "resourse": ["定向潜航·渊火伏明"],
    "introText": "你就是在担保文件上签字的监督？……林，有过很多身份，现在……只是个受监管的人。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "7/78/o1pwvnxvkmedkai5aiiaysplrgp659o.png",
            "7/79/pwg5px14fa7llqer1oyf4chphbud2dl.png",
            "c/c5/3l48ghn17m3fkgulom0po6rl9c5f5im.png"
        ],
    }
}

const Skill = [
    {
        "name": "吞厄",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益"],//技能标签
            "sizeLevel": [
                ["240%"],
                ["276%"],
                ["312%"],
                ["348%"],
                ["384%"],
                ["420%"],
                ["456%"],
                ["492%"],
                ["528%"],
                ["552%"],
                ["576%"],
                ["600%"],
                ["624%"],
                ["648%"],
                ["672%"]
            ],
            "content": [
                "对自身周围",
                speSkillCon("300"),
                "半径造成",
                speSkillCon("300％最终攻击的炎元素伤害"),
                "后进入持续",
                speSkillCon("25"),
                "秒的攻击姿态，且",
                speSkillCon("25"),
                "秒内无法再次进入，该姿态下自身暴击率提高",
                speSkillCon("30%"),
                "，最大生命值提高",
                speSkillCon("80%"),
                "，且每次普通攻击触发",
                speSkillConWithImg(SkillDescStatusImg.林熔毁),
                "“熔毁”。",
                "",
                speSkillConWithImg(SkillDescStatusImg.林熔毁),
                "“熔毁”：每次施放普通攻击消耗自身最大生命值",
                speSkillCon("4%"),
                "可额外对当前主目标周围",
                speSkillCon("200"),
                "半径造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，自身生命值低于",
                speSkillCon("30%"),
                "后将不消耗生命值触发。（“熔毁”最多可触发",
                speSkillCon("20"),
                "次）",
                "",
                "处于攻击姿态时可施展技能退出该姿态；当自身受到敌方伤害导致生命值低于",
                speSkillCon("20%"),
                "（同调者未重伤）会提前退出该姿态，生命值恢复至进入姿态时的生命值。"
            ]//满级技能内容描述
        }
    },
    {
        "name": "湮烬",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],
            "tab": ["格挡条破坏3"],
            "sizeLevel": [
                ["500%", "24%", "1380%", "500%"],
                ["575%", "28%", "1587%", "575%"],
                ["650%", "31%", "1794%", "650%"],
                ["725%", "35%", "2001%", "725%"],
                ["800%", "38%", "2208%", "800%"],
                ["875%", "42%", "2415%", "875%"],
                ["950%", "46%", "2622%", "950%"],
                ["1025%", "49%", "2829%", "1025%"],
                ["1100%", "53%", "3036%", "1100%"],
                ["1150%", "55%", "3174%", "1150%"],
                ["1200%", "58%", "3312%", "1200%"],
                ["1250%", "60%", "3450%", "1250%"],
                ["1300%", "62%", "3588%", "1300%"],
                ["1350%", "65%", "3726%", "1350%"],
                ["1400%", "67%", "3864%", "1400%"]
            ],
            "content": [
                speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                "：对单体目标造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，并使目标降低",
                speSkillCon("", 0, -1, 1),
                speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "炎元素抗性，持续",
                speSkillCon("60"),
                "秒，切换攻击姿态后或离场后上述效果消失",
                "",
                speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                "：对选中扇形区域",
                speSkillCon("400"),
                "半径造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的炎元素伤害"),
                "",
                "",
                "自动技能：对自身前方扇形造成",
                speSkillCon("", 0, -1, 3),
                speSkillCon("最终攻击的炎元素伤害"),
                "，根据当前姿态所需的触发条件及效果：",
                "",
                speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                "：该状态下每",
                speSkillCon("1.2"),
                "秒获得1层“冥火”，且受到直接伤害获得1层“冥火”。（每",
                speSkillCon("0.5"),
                "秒最多获得1层）消耗",
                speSkillCon("15"),
                "层“冥火”施展，造成伤害后嘲讽",
                speSkillCon("250"),
                "半径的单位",
                speSkillCon("3"),
                "秒，使场上所有友方提高",
                speSkillCon("20%"),
                speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                "，持续",
                speSkillCon("20"),
                "秒，切换攻击姿态或离场后上述效果消失",
                "",
                speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                "：持续时间内无法施放，攻击姿态结束时触发自动技能，自身",
                speSkillConWithImg(SkillDescStatusImg.林熔毁),
                "“熔毁”每次触发提高",
                speSkillCon("10%"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "自动技能伤害，该效果可叠加"
            ]
        }
    },
    {
        "name": "裂魂",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["伤害", "炎区域"],
            "sizeLevel": [
                ["2100%", "600%"],
                ["2450%", "700%"],
                ["2800%", "800%"],
                ["3150%", "900%"],
                ["3325%", "950%"],
                ["3500%", "1000%"]
            ],
            "content": [
                "对选中位置目标位置半径",
                speSkillCon("250"),
                "圆形范围内",
                speSkillCon("3"),
                "个主要目标造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，随后对",
                speSkillCon("450"),
                "半径范围造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的炎元素伤害"),
                "，并留下半径",
                speSkillCon("250"),
                "范围的炎元素区域并在该范围随机散落小范围炎元素区域"
            ]
        }
    },
    {
        "name": "特性：自我吞食者",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "250"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体"],
            "content": [
                "防御姿态下：普通攻击对单体目标造成",
                speSkillCon("90％最终攻击的炎元素伤害"),
                "",
                "攻击姿态下：普通攻击对半径",
                speSkillCon("250"),
                "扇形范围目标造成",
                speSkillCon("190％最终攻击的炎元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "初始为",
                    speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                    "，防御姿态下基础减伤提高",
                    speSkillCon("20%"),
                    "，普通攻击使目标受到伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                    "，持续",
                    speSkillCon("5"),
                    "秒（切换攻击姿态或离场后上述效果消失），可施放技能【吞厄】进入攻击姿态"
                ],//零花本体特性
                [
                    "切换至",
                    speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                    "后，主动技能【湮烬】造成的抗性降低效果不再消失"
                ],//一花特性
                [
                    "林开启",
                    speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                    "后，场上除自身外当前百分比生命值最低的一个友方同调者施放普通攻击时也会触发“熔毁”（不消耗生命值且触发次数不共享），持续至林的攻击姿态结束",
                    "",
                    "自身生命值越低，“熔毁”伤害额外提高，",
                    speSkillCon("40%"),
                    "生命值时达到最大值",
                    speSkillCon("80%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "厌恶的必要性",
            "limit": "【默契值4级】",
            "tips": [
                "“不喜欢喝甜牛乳的话，可以不用逼自己喝的……”",
                "“不……能感受到厌恶也好，至少证明我还活着。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "甜牛乳",
                "正常糖",
                "热",
                "全脂牛奶",
                "紫藤"
            ]
        },
        {
            "name": "生存需要",
            "limit": "【默契值1级】",
            "tips": [
                "“能有一杯干净的盐水就很令人感激了。”",
                "“但是你的表情……”",
                "“出于生存需要的感激，并不代表我喜欢。”",
                "“黑曜的事都是这样吗———— ‘出于生存需要’？”",
                "“……是的。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "白开水",
                "多冰",
                "盐",
                "三叶长签"
            ]
        },
        {
            "name": "清醒时分",
            "limit": "【默契值5级】",
            "tips": [
                "“现在时间不早了，你还要喝特浓咖啡吗？”",
                "“反正也睡不着，不如更清醒。”",
                "“……我还是给你换成低因的吧。”"
            ],
            "recipe": [
                "航海时代",
                "经典特浓咖啡",
                "奶精球",
                "低因",
                "原味雪顶",
                "水果签"
            ]
        },
        {
            "name": "印记",
            "limit": "【默契值18级】",
            "tips": [
                "尽管监督每次都会将菜单拿给林，但他几乎只会点一杯缀有银杏叶的菊花茶。",
                "这是一叶城留在他身上的印记之一。"
            ],
            "recipe": [
                "航海时代",
                "枸杞菊花茶",
                "青提",
                "茶冻",
                "银杏叶"
            ]
        },
        {
            "name": "心病难医",
            "limit": "【默契值13级】",
            "tips": [
                "众人皆知，林并非爱酒之人。",
                "可总有那么几个午夜梦回的时刻，他会踉跄地撞进Chat To Chu，点一杯最烈的千苹果，惶然吞下。",
                "————那是他的药。"
            ],
            "recipe": [
                "扎啤杯",
                "干苹果",
                "正常冰",
                "偏烈",
                "原味雪顶",
                "精致纸伞"
            ]
        },
        {
            "name": "偏好",
            "limit": "【默契值6级】",
            "tips": [
                "“知道你喜欢喝茶……但是桃桃乌龙茶也可以？不会太甜吗？”",
                "“咳。”林的脸上也被几声轻咳带出一抹不易察觉的红，显出几分活人的样子，“多加些冰就好。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "桃桃乌龙茶",
                "五分糖",
                "多冰",
                "茶冻",
                "桂花"
            ]
        },
        {
            "name": "另一个世界",
            "limit": "【默契值16级】",
            "tips": [
                "“或许在另一个世界，磷灰小队的队员都能获得幸福。”",
                "林举起手中的花茶，马克杯的棱纹折射着光线，在他的脸上投下深浅不一的影子。",
                "————那你的幸福呢？",
                "监督没有问，只是悄悄地叹了口气。"
            ],
            "recipe": [
                "棱纹马克杯",
                "德里亚德风味花茶",
                "常温",
                "叶子冻",
                "五叶长签"
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
            "ex": [415, 465, 507, 554],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "桃桃乌龙茶",
                "五分糖",
                "正常冰",
                "茶冻"
            ],
            "ex": [461, 516, 563, 614],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "德里亚德风味花茶",
                "常温",
                "茶冻"
            ],
            "ex": [534, 598, 652, 712],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "枸杞菊花茶",
                "枸杞",
                "茶冻"
            ],
            "ex": [594, 665, 725, 791],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 林 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 林 }