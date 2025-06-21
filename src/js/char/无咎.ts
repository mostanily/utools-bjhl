import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.乘人之危对精英, MXLaohenEnum.如火如荼], "attr": "yan", "star": "5",
    "nameEn": "REID", "tag": ["输出", "群攻"], "originWorld": "海错", "orginChar": "古剑奇谭网络版",
    "cv": "胡良伟", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "唳火",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["炎区域", "伤害", "穿透屏障", "格挡条破坏3"],//技能标签
            "content": [
                "对指定目标点半径",
                speSkillCon("300"),
                "范围内的敌人造成",
                speSkillCon("1875%最终攻击的炎元素伤害"),
                "，以",
                speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退目标，并生成炎元素区域",
                "",
                "被命中的目标将会附着",
                speSkillCon("[火羽燃烧]", SkillColorEnum.normal, ToastSkillEnum.火羽燃烧),
                "，每秒受到",
                speSkillCon("25%最终攻击的炎元素伤害"),
                "，持续",
                speSkillCon("5"),
                "秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "燎野",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "对空", "格挡条破坏1"],
            "content": [
                "对自身周围半径",
                speSkillCon("250"),
                "范围内的敌人造成",
                speSkillCon("1500%最终攻击的炎元素伤害"),
                "，并制造5个螺旋运动的火龙卷，对沿途触碰到的敌人造成",
                speSkillCon("375%最终攻击的炎元素伤害")
            ]
        }
    },
    {
        "name": "炽焰狂潮",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "120秒"]],
            "tab": ["伤害", "破空", "格挡条破坏3"],
            "content": [
                "对半径",
                speSkillCon("500"),
                "范围内的敌人总计造成",
                speSkillCon("6300%最终攻击的炎元素伤害")
            ]
        }
    },
    {
        "name": "特性：奋羽",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "200"], ["攻击速度", "0.55次每秒"]],
            "atType": ["单体", "格挡条破坏1"],
            "content": [
                "攻击面前的目标造成",
                speSkillCon("220%最终攻击的炎元素伤害"),
                "",
                "近战范围没有敌人时，向远处敌人踢出打火机对其范围",
                speSkillCon("100"),
                "内的敌人造成",
                speSkillCon("90%最终攻击的炎元素伤害"),
                "（远程攻击不附带格挡条破坏效果）"
            ],//普通攻击
            "specialContent": [
                [
                    "施放任意技能后自身获得火羽盾，基础减伤增加",
                    speSkillCon("6%~10%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "，攻击速度提升",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("5"),
                    "秒",
                    "",
                    "涅槃：当自身陷入危机时，立即解除自身的",
                    speSkillCon("[控制效果]", SkillColorEnum.normal, ToastSkillEnum.控制效果),
                    "，回复自身全部生命值，同时对自身范围",
                    speSkillCon("350"),
                    "内的敌人造成",
                    speSkillCon("2000%最终攻击的炎元素伤害"),
                    "，并留下炎元素区域，在随后的",
                    speSkillCon("5"),
                    "秒内免疫所有伤害（仅限一次）"
                ],//零花本体特性
                [
                    "自动技能【燎原】、异核技能【炽焰狂潮】命中目标可使其附着",
                    speSkillCon("[火羽燃烧]", SkillColorEnum.normal, ToastSkillEnum.火羽燃烧),
                    "",
                    "触发“涅槃”后，立即回复一次主动技能【唳火】技能次数及自动技能【燎野】的冷却时间"
                ],//一花特性
                [
                    "攻击处于",
                    speSkillCon("[灼烧]", SkillColorEnum.normal, ToastSkillEnum.灼烧),
                    "状态下的敌人，额外提高",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率，",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "暴击伤害"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "如果你能感同身受",
            "limit": "【默契值4级】",
            "tips": [
                "“喝了这杯，你就知道平时唐经理有多苦多能熬了。”"
            ],
            "recipe": [
                "简约至上",
                "恩利都苦啤兑苦咖",
                "苦味素",
                "加双份"
            ]
        },
        {
            "name": "再见，鹿路运输",
            "limit": "【默契值5级】",
            "tips": [
                "透过可爱的杯子，无咎双眼无神地看着再熟悉不过的图案沉在温吞吞的饮料里，脑中只剩下一个想法——",
                "太酸了，今晚他就要离家出走。"
            ],
            "recipe": [
                "熊熊杯",
                "鹿鹿冻柠茶",
                "无糖",
                "常温"
            ]
        },
        {
            "name": "自制芒果冰……？",
            "limit": "【默契值1级】",
            "tips": [
                "无咎喜欢芒果，这一天他不死心地把芒果果冻整颗扔进了冰水里……"
            ],
            "recipe": [
                "冰镇苏打水",
                "多冰",
                "芒果果冻"
            ]
        },
        {
            "name": "薄荷心情",
            "limit": "【默契值8级】",
            "tips": [
                "冰冰凉凉直透心底，再搭配一根水果签方便吃加入的水果。",
                "当然了，薄荷叶最好还是别吃。"
            ],
            "recipe": [
                "简约至上",
                "青草薄荷",
                "多冰",
                "青梅",
                "水果签"
            ]
        },
        {
            "name": "去海边吧——",
            "limit": "【默契值13级】",
            "tips": [
                "“监督我们去海边吧！”",
                "“……太突然了。”",
                "“叫上我姐、路还有北洛！哦监督你会游泳么，你要是不会就和路一起——”",
                "“要加果冻么？”",
                "“要要要！还要这个花！”"
            ],
            "recipe": [
                "自证方圆",
                "海水半蓝",
                "芒果果冻",
                "樱花"
            ]
        },
        {
            "name": "多喝水果",
            "limit": "【默契值18级】",
            "tips": [
                "“喜欢苹果么？”",
                "“啊！”",
                "“奇异果？”",
                "“没吃过！”",
                "“好的。”",
                "“？”"
            ],
            "recipe": [
                "干苹果",
                "多冰",
                "偏烈",
                "奇异果片"
            ]
        },
        {
            "name": "那晚的月亮",
            "limit": "【默契值16级】",
            "tips": [
                "无咎平时并不喜欢咖啡味。",
                "“想什么呢，半夜不睡觉。”",
                "“没有啊。”无咎拿起樱桃朝着天上的满月比了比，接着一口塞到了嘴里。",
                "“就是做了个稀里糊涂的梦，醒来后发现什么都没记住。”"
            ],
            "recipe": [
                "自证方圆",
                "黑月亮",
                "正常冰",
                "樱桃"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "冰镇苏打水",
                "多冰",
                "芒果果冻"
            ],
            "ex": [425, 476, 519],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "杨枝甘露",
                "樱桃",
                "芒果果冻"
            ],
            "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "黑月亮",
                "盐",
                "多冰",
                "樱桃"
            ],
            "ex": [476, 533, 581],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 无咎 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 无咎 }