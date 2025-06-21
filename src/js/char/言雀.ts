import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.高压雷击], "attr": "lei", "star": "6",
    "nameEn": "SKYLAR", "tag": ["控场", "输出"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "筱筝", "openDate": "2024年02月29日", "resourse": ["定向共鸣·云端来信", "常态共鸣·森罗万象"]
}

const Skill = [
    {
        "name": "呜呜风暴",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "拦截", "对空"],//技能标签
            "content": [
                "在目标位置生成持续",
                speSkillCon("8"),
                "秒的呜呜风暴，拦截范围内的所有投射物，风暴每秒会以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "将",
                speSkillCon("500"),
                "范围内的所有敌方单位向中心牵引，并造成",
                speSkillCon("500%最终攻击的雷元素伤害")
            ]//满级技能内容描述
        }
    },
    {
        "name": "嘭嘭礼炮",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "对空"],
            "content": [
                "朝目标周围投掷",
                speSkillCon("4"),
                "颗礼炮，并生成一处",
                speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                "，礼炮命中地面时会对",
                speSkillCon("200"),
                "范围内的所有敌方单位造成",
                speSkillCon("800%最终攻击的雷元素伤害"),
                "",
                speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                "每隔",
                speSkillCon("5"),
                "秒会随机攻击场上的一名敌方单位，对目标造成",
                speSkillCon("125%最终攻击的雷元素伤害"),
                "，同时溅射目标周围",
                speSkillCon("250"),
                "范围的敌人造成",
                speSkillCon("25%最终攻击的雷元素伤害"),
                "",
                "最多同时存在",
                speSkillCon("3"),
                "处",
                speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                "",
                "开战时自动技能充能增加80%"
            ]
        }
    },
    {
        "name": "集合，小鸟骑士团！",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["伤害", "负面状态", "拦截", "对空", "屏障破坏"],
            "content": [
                "施放时拦截范围内的投射物，并摧毁范围内的所有敌方屏障，",
                speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                "目标位置",
                speSkillCon("500"),
                "范围内的所有敌方非首领单位，持续",
                speSkillCon("6"),
                "秒，对范围内所有敌方单位共造成",
                speSkillCon("3500%最终攻击的雷元素伤害"),
                "",
                "技能结束时，将会激活场上存在的所有",
                speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                "，激活效果持续",
                speSkillCon("20"),
                "秒，持续时间内",
                speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                "伤害触发间隔降低",
                speSkillCon("50%"),
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：云端的孩子",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.37次每秒"]],
            "atType": ["群体"],
            "content": [
                "短暂延迟后对",
                speSkillCon("150"),
                "范围内的所有敌方单位造成",
                speSkillCon("270%最终攻击的雷元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "施放技能后，会进入持续",
                    speSkillCon("10"),
                    "秒的【睡前故事时间】，持续期间普通攻击会对目标周围",
                    speSkillCon("200"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("350%最终攻击的雷元素伤害"),
                    "",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "为召唤物，受到",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "伤害影响的目标",
                    speSkillCon("15"),
                    "秒内雷元素抗性降低",
                    speSkillCon("30%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，水元素抗性降低",
                    speSkillCon("10%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，重复触发将会刷新效果的持续时间"
                ],//零花本体特性
                [
                    "受到",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "伤害影响的敌方单位后续",
                    speSkillCon("15"),
                    "秒内雷元素抗性降低提高至",
                    speSkillCon("45%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，水元素抗性降低提高至",
                    speSkillCon("15%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，重复触发将会刷新效果的持续时间"
                ],//一花特性
                [
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "对主目标造成的伤害额外附加言雀",
                    speSkillCon("120%"),
                    "自身专精值的伤害"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "初次见面",
            "limit": "【默契值1级】",
            "tips": [
                "监督还记得言雀第一次来休息室的样子。",
                "她怯生生地打量着四周，即便监督端上了她最不喜欢的热姜茶，也不愿多吐露一个字。",
                "“……真怀念当时啊。”",
                "“嗯？什么意思？”"
            ],
            "recipe": [
                "扎啤杯",
                "姜茶",
                "无糖",
                "热",
                "枫叶"
            ]
        },
        {
            "name": "认生",
            "limit": "【默契值1级】",
            "tips": [
                "“好喝吗？”",
                "“……………………嗯。”",
                "“这样啊……”",
                "“……………………嗯。”",
                "言御分明说言雀不爱喝枸杞菊花茶来着……",
                "唉……明明在“甜蜜幻境”里已经很熟悉了，回到现实又……"
            ],
            "recipe": [
                "航海时代",
                "枸杞菊花茶",
                "黄瓜片",
                "茶冻",
                "水果签"
            ]
        },
        {
            "name": "破冰时刻",
            "limit": "【默契值13级】",
            "tips": [
                "“…………这……是监督要喝的吧？”",
                "“啊！抱歉，我拿错了——啊！”监督一时慌了神，反倒将搪瓷杯碰倒，咖啡与雪顶淌了一桌。",
                "“——噗。”言雀讲话忽然自然了许多，“原来监督也会出错嘛。”",
                "“你以为我是什么设定好的机器人吗……”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "经典特浓咖啡",
                "奶精球",
                "加双份",
                "咖啡雪顶",
                "三叶长签"
            ]
        },
        {
            "name": "怀念",
            "limit": "【默契值4级】",
            "tips": [
                "“好可爱的汪汪饼干——监督我可不可以再要一个，我保证我会把牛奶都喝光的！”",
                "“你本来就爱喝熊熊燕麦牛奶！”",
                "“你就答应我嘛~”",
                "“知道了知道了，我有点怀念你还跟我认生的时候了。”",
                "“呜呜，我伤心了——再加一个~”"
            ],
            "recipe": [
                "棱纹马克杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "汪汪饼干",
                "银杏叶"
            ]
        },
        {
            "name": "戛然而止",
            "limit": "【默契值5级】",
            "tips": [
                "“监督你怎么知道我爱喝青提啵啵奶茶！当初还是爱丽丝推——”",
                "言雀的话戛然而止。",
                "监督在心里默默叹了口气：“……我再给你加一些芒果果冻？”",
                "“……嗯。”"
            ],
            "recipe": [
                "航海时代",
                "青提啵啵奶茶",
                "五分糖",
                "少冰",
                "芒果果冻",
                "精致纸伞"
            ]
        },
        {
            "name": "相似之处",
            "limit": "【默契值18级】",
            "tips": [
                "“啊，你也喜欢喝这个？你哥哥他也……”",
                "“我可不是学他！”",
                "“我什么都还没说。”",
                "言雀一时语塞，只能低下头，用力地搅动着扎啤杯里的冰块"
            ],
            "recipe": [
                "扎啤杯",
                "薄荷蜜柚苏打",
                "多冰",
                "叶子冻",
                "圆柄长签"
            ]
        },
        {
            "name": "异世界畅想",
            "limit": "【默契值16级】",
            "tips": [
                "“你是说……这杯花茶的配方来自乌瑞亚？”",
                "言雀放下马克杯，若有所思地歪了歪头。",
                "“真想知道异世界的大米饭是什么样子……会不会像《星之艾斯戴尔》里的白雕那样大只！”",
                "“……救命，我脑袋里有画面了。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "德里亚德风味花茶",
                "常温",
                "蜜桃冻",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "杨枝甘露",
                "青提",
                "芒果果冻"
            ],
            "ex": [412, 462, 503],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "青提啵啵奶茶",
                "七分糖",
                "多冰",
                "蜜桃冻"
            ],
            "ex": [477, 534, 582],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "双莓之恋",
                "双倍糖",
                "多冰",
                "蜜桃冻"
            ],
            "ex": [478, 535, 584],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "白桃芝士奶盖",
                "七分糖",
                "多冰",
                "青提"
            ],
            "ex": [537, 602, 656],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 言雀 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 言雀 }