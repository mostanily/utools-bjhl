import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.生生不息菱形, MXLaohenEnum.针对削弱], "attr": "wuli", "star": "4",
    "nameEn": "GAUYA", "tag": ["指挥", "拉拽"], "originWorld": "黑曜", "orginChar": "原创",
    "cv": "泽勋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "我是赫九逸，来自黑曜，接下来的日子暂时叨扰了。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "b/b9/0i3ct5otyl55olhiar04noddqe58tfl.png",
            "4/4c/1ze3somyrp76dgfs6kz7uacgghycvhr.png"
        ],
    }
}

const Skill = [
    {
        "name": "勾魄",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["负面状态", "集火"],//技能标签
            "content": [
                "对指定位置半径",
                speSkillCon("250"),
                "范围内的所有敌人造成",
                speSkillCon("1000%最终攻击的物理伤害"),
                "，并以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "地将他们拉向",
                speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                "，同时标记区域中心的一名敌人，当其处于其他同调者攻击范围内时，友方同调者将优先攻击该敌人",
                "",
                "焰响在场的情况下，技能范围半径扩大至",
                speSkillCon("350")
            ]//满级技能内容描述
        }
    },
    {
        "name": "摄魂",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
            "tab": ["负面状态"],
            "content": [
                "被动：",
                speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                "每隔",
                speSkillCon("10"),
                "秒连续产生3次声波，每次对周围半径",
                speSkillCon("300"),
                "范围内的敌人造成",
                speSkillCon("333%最终攻击的物理伤害"),
                "，并使其移动速度降低",
                speSkillCon("30%"),
                "，持续",
                speSkillCon("5"),
                "秒",
                "",
                "主动：将",
                speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                "调整至指定位置",
                "",
                "焰响在场的情况下，声波的作用范围扩大至",
                speSkillCon("400")
            ]
        }
    },
    {
        "name": "意夺神骇",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"]],
            "tab": ["伤害", "负面状态"],
            "content": [
                "对全场范围所有敌方单位造成",
                speSkillCon("3300%最终攻击的物理伤害"),
                "并使其",
                speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                "，持续",
                speSkillCon("7"),
                "秒；在",
                speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                "作用范围内的敌人将额外受到",
                speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                "效果",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：鬼神听",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射幽魂造成",
                speSkillCon("250%最终攻击的物理伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "开场时在身边召唤一枚",
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "",
                    "焰响在场时，双方的技能范围都将得到大幅提升"
                ],//零花本体特性
                [
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "附近半径500范围的友方或自己阵亡时，立即解除自身与目标同调者的",
                    speSkillCon("[控制效果]", SkillColorEnum.normal, ToastSkillEnum.控制效果),
                    "，让目标同调者以灵魂状态继续作战",
                    speSkillCon("10"),
                    "秒，期间提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "攻击力，",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "攻击速度，",
                    speSkillCon("50%"),
                    "移动速度，",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率，",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "暴击伤害（该效果一场战斗中只会生效一次）"
                ],//一花特性
                [
                    "主动技能【勾魄】标记的敌人遭受伤害提高",
                    speSkillCon("10%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，持续",
                    speSkillCon("15"),
                    "秒"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "文学经典·一",
            "limit": "【默契值1级】",
            "tips": [
                "“我一口喝下又浓又苦的咖啡，",
                "虽然只是那么小小的一杯，",
                "那些咖啡渣却固执地堵在我的喉咙和胸口，",
                "使我呼吸不顺，足足咳了半个小时。”"
            ],
            "recipe": [
                "简约至上",
                "经典特浓咖啡",
                "椰浆",
                "标准",
                "香蕉冰淇淋",
                "五叶长签"
            ]
        },
        {
            "name": "文学经典·二",
            "limit": "【默契值4级】",
            "tips": [
                "“这个世界不会因为一杯热可可变得更好，",
                "或是更坏。”"
            ],
            "recipe": [
                "自证方圆",
                "姜汁可可",
                "正常冰",
                "奶精球",
                "椰果",
                "桂花"
            ]
        },
        {
            "name": "文学经典·三",
            "limit": "【默契值13级】",
            "tips": [
                "“清水是一个聪明人唯一的饮料。”"
            ],
            "recipe": [
                "竹节茶杯",
                "白开水",
                "常温",
                "盐",
                "柠檬片"
            ]
        },
        {
            "name": "通俗小说·一",
            "limit": "【默契值1级】",
            "tips": [
                "“当命运递给你一个酸柠檬时，",
                "让我们设法做一杯甜的。”"
            ],
            "recipe": [
                "自证方圆",
                "云中桂影",
                "青梅",
                "焦糖布丁",
                "经典长签"
            ]
        },
        {
            "name": "诗词典籍·一",
            "limit": "【默契值8级】",
            "tips": [
                "“何须浅碧深红色，",
                "自是花中第一流。”"
            ],
            "recipe": [
                "简约至上",
                "疏帘淡月",
                "无糖",
                "少冰",
                "三叶长签"
            ]
        },
        {
            "name": "通俗小说·二",
            "limit": "【默契值13级】",
            "tips": [
                "“烈酒很像海水或者荣誉：越喝就越想喝。”"
            ],
            "recipe": [
                "竹节茶杯",
                "银色青松",
                "苦味素",
                "偏烈",
                "柠檬片"
            ]
        },
        {
            "name": "诗词典籍·二",
            "limit": "【默契值16级】",
            "tips": [
                "“秋太淡，添红枣。”"
            ],
            "recipe": [
                "熊熊杯",
                "桂圆红枣茶",
                "正常糖",
                "热",
                "枸杞",
                "迷迭香"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "云中桂影",
                "咖啡雪顶",
                "焦糖布丁"
            ],
            "ex": [405, 453, 494],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "海水半蓝",
                "苦味素",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [434, 486, 529],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "银色青松",
                "苦味素",
                "偏淡"
            ],
            "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 赫九逸 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 赫九逸 }