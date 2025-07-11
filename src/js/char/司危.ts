import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.机械特攻α型, MXLaohenEnum.连击精通], "attr": "lei", "star": "5",
    "nameEn": "PRIS", "tag": ["输出"], "originWorld": "艾达", "orginChar": "古剑奇谭三",
    "cv": "醋醋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "摇滚连音",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "拦截"],//技能标签
            "content": [
                "指挥电子狗冲向目标区域，持续朝区域内发射红外激光射线，共造成",
                speSkillCon("1125%最终攻击的雷元素伤害"),
                "并拦截其中投射物，结束时在该目标位置形成射线网，射线网持续",
                speSkillCon("20"),
                "秒，射线网每2秒对其中的目标造成",
                speSkillCon("95%最终攻击的雷元素伤害"),
                "，并对其施加",
                speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                "标记",
                "",
                "自身每",
                speSkillCon("10%"),
                "攻击速度提升可降低",
                speSkillCon("0.1"),
                "秒射线网伤害触发的间隔"
            ]//满级技能内容描述
        }
    },
    {
        "name": "即兴鼓点",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
            "tab": ["伤害", "自身增益"],
            "content": [
                "开启后电子狗获得强化，攻击速度提升",
                speSkillCon("30%"),
                speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                "，攻击会同时射出两道激光射线，对当前目标共造成",
                speSkillCon("1045%最终攻击的雷元素伤害"),
                "；该强化效果持续",
                speSkillCon("20"),
                "秒"
            ]
        }
    },
    {
        "name": "朋克主义",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"]],
            "tab": ["伤害", "持续施法"],
            "content": [
                "指挥电子狗变成射灯球，自身进入唱跳状态，每",
                speSkillCon("0.5"),
                "秒对随机",
                speSkillCon("200"),
                "半径范围内所有敌方单位预计总共造成",
                speSkillCon("6000%最终攻击的雷元素伤害"),
                "，命中带有",
                speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                "标记的单位时额外造成",
                speSkillCon("50%无视减伤的物理伤害"),
                "（不会清除",
                speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                "标记）",
                "",
                "自身每",
                speSkillCon("10%"),
                "攻击速度提升可降低",
                speSkillCon("0.013"),
                "秒伤害触发的间隔"
            ]
        }
    },
    {
        "name": "特性：反·音阶计划",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.59次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "指挥电子狗向目标发射激光射线，造成",
                speSkillCon("170%最终攻击的雷元素伤害"),
                "",
                "普通攻击会同时攻击除目标外场上带有【音律】标记的单位（最多",
                speSkillCon("3"),
                "个），造成",
                speSkillCon("40%无视减伤的物理伤害"),
                "，并清除该目标【音律】标记"
            ],//普通攻击
            "specialContent": [
                [
                    "电子狗视为召唤物",
                    "",
                    "自身",
                    speSkillCon("1200"),
                    "范围内的友方受到攻击时，攻击者会被标记为",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "单位",
                    "",
                    "芙蕖在场时，攻击速度提升",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "普通攻击可以同时散射攻击除目标外场上最多",
                    speSkillCon("5"),
                    "个带有",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记的单位"
                ],//一花特性
                [
                    "散射攻击带有",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记的目标时，有",
                    speSkillCon("30%"),
                    "的概率不消耗目标",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "淡柠檬水",
            "limit": "【默契值1级】",
            "tips": [
                "“我为什么要喝它。”",
                "“嗯……你上次不是说想试试淡柠檬水的味道？”",
                "“我已经喝过了。”",
                "“？”"
            ],
            "recipe": [
                "家用玻璃杯",
                "白开水",
                "常温",
                "柠檬汁",
                "菊花"
            ]
        },
        {
            "name": "自己的联名",
            "limit": "【默契值1级】",
            "tips": [
                "“怎么？自己的联名不喜欢？”",
                "“太甜了。”",
                "“你茶冻倒是吃完了……”"
            ],
            "recipe": [
                "双莓之恋",
                "七分糖",
                "少冰",
                "茶冻",
                "紫藤"
            ]
        },
        {
            "name": "覆盖味觉",
            "limit": "【默契值4级】",
            "tips": [
                "在司危的数据记载中，西柚多汁、微酸，偶尔伴随着麻舌感。",
                "“……甜的啊。”司危看着面前的果汁，把她的数据错误归咎为糖分和漂浮的雪顶。"
            ],
            "recipe": [
                "环口杯/家用玻璃杯",
                "柚柚切颗NOW",
                "正常糖",
                "原味雪顶",
                "长匙"
            ]
        },
        {
            "name": "谨慎言辞",
            "limit": "【默契值13级】",
            "tips": [
                "“……拿走，不喝。”",
                "“但是……”",
                "“呵，怎么，你是想说可以助眠还是想说可以长高？”",
                "监督咽了咽口水，觉得自己只要一开口，就会凶多吉少。"
            ],
            "recipe": [
                "柯林杯",
                "甜牛乳",
                "无糖",
                "常温",
                "脱脂牛奶"
            ]
        },
        {
            "name": "夏活特供",
            "limit": "【默契值8级】",
            "tips": [
                "爱豆户外演出的公认消暑利器。",
                "“我不——拿过来吧。”"
            ],
            "recipe": [
                "环口杯/家用玻璃杯",
                "枫糖薄荷",
                "多冰",
                "奶精球",
                "珍珠",
                "心形插签"
            ]
        },
        {
            "name": "重复点单",
            "limit": "【默契值16级】",
            "tips": [
                "司危从不主动给出好不好喝这个答案。",
                "——她只是偶尔会点同一杯饮料，坐在位子上发呆。",
                "“低耗模式而已，你以为是什么？”",
                "“好吧，这杯桃桃乌龙茶怎么样？”",
                "“还行。”",
                "“那再加份水果冻？”",
                "“随便。”"
            ],
            "recipe": [
                "环口杯/家用玻璃杯/双层叶纹",
                "桃桃乌龙茶",
                "无糖",
                "少冰",
                "芒果果冻",
                "桂花"
            ]
        },
        {
            "name": "坚硬",
            "limit": "【默契值18级】",
            "tips": [
                "司危常说自己拥有最坚硬的骨骼——这是当然。",
                "然而玻璃依旧能够让她受伤。",
                "叶纹杯壁的水珠缓缓流下，她闻到了橘子的味道。",
                "还有蜜桃。"
            ],
            "recipe": [
                "双层叶纹",
                "玻璃橘子",
                "少冰",
                "蜜桃冻",
                "紫藤"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "鲜榨雪梨汁",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [356, 399, 434],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "柚柚切颗NOW",
                "三分糖",
                "奇异果片"
            ],
            "ex": [393, 542, 480],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "枫糖薄荷",
                "椰浆",
                "正常冰",
                "咸梅干"
            ],
            "ex": [484, 542, 590],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "玻璃橘子",
                "正常冰",
                "叶子冻"
            ],
            "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 司危 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 司危 }