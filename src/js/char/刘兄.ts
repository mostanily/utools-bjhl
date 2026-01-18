import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "筑术师", "skill": [MXLaohenEnum.特殊减伤对地, MXLaohenEnum.雷霆万钧], "attr": "lei", "star": "4",
    "nameEn": "MARGARET·LIU", "tag": ["治疗", "屏障"], "originWorld": "特默里恩", "orginChar": "古剑奇谭三",
    "cv": "洪海天", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "我，深渊的凝视者，秘之集会的先驱，驱散黑暗的雷电天使，世界意志的传颂人——刘兄，前来拯救这个世界！啊？不需要拯救吗？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "0/02/5aelrhvbjkvmpufkl2ptk8tpx3v9oam.png",
            "2/2f/scm1ckij9ql4gc9qflz9bu2sdvx1b11.png",
        ],
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "闪光之跃",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "穿透屏障"],//技能标签
        "content": [
            "朝指定方向发射闪电，命中第一个目标后跳转至半径",
            speSkillCon("400"),
            "范围内的另一个目标，造成",
            speSkillCon("5000%最终攻击的雷元素伤害"),
            "，最多命中",
            speSkillCon("5"),
            "个目标（优先命中不同的目标）",
            "",
            "每次造成的伤害递减",
            speSkillCon("20%"),
            "（对同一目标额外递减",
            speSkillCon("20%"),
            "），最多降低至原来的",
            speSkillCon("40%"),
            "（对同一目标最多降低至原来的",
            speSkillCon("20%"),
            "）",
            "",
            "自动技能【颂歌之证】达到阶段III和阶段V时增加1个命中目标上限"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "颂歌之证",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "25秒"]],
        "tab": ["自身增益"],
        "content": [
            "书写颂歌，随颂歌阶段获得永久的能力提升并回复1次主动技能【闪光之跃】的使用次数",
            "",
            "阶段I：攻击力提升",
            speSkillCon("23%"),
            speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
            "",
            "阶段II：基础攻击速度提升",
            speSkillCon("23%"),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "",
            "阶段III：专精提升",
            speSkillCon("23%"),
            speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
            "",
            "阶段IV：基础攻击速度额外提升",
            speSkillCon("23%"),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "",
            "阶段V：特性触发率提高",
            speSkillCon("50%")
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "真理之霆",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "90秒"]],
        "tab": ["伤害", "拦截", "穿透屏障"],
        "content": [
            "使用闪电连续攻击目标点半径",
            speSkillCon("350"),
            "范围内的所有敌方单位，总计造成",
            speSkillCon("4800%最终攻击的雷元素伤害")
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：无巧不成书",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "1200"], ["攻击速度", "0.59次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "向当前目标发射雷电造成",
            speSkillCon("170%最终攻击的雷元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "普通攻击和技能命中目标时有",
                speSkillCon("20%"),
                "的几率额外造成",
                speSkillCon("200%专精的雷元素伤害")
            ],//零花本体特性
            [
                "进入战场时，获得一层【颂歌之证】效果（该提升视为自身技能施放获得的永久属性提升）"
            ],//一花特性
            [
                "普通攻击和技能命中目标时有",
                speSkillCon("30%"),
                "的几率额外造成",
                speSkillCon("200%专精的雷元素伤害")
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
            "name": "大俗大雅",
            "limit": "【默契值1级】",
            "tips": [
                "“沉闷啊，无聊啊，平凡啊——”",
                "“这是荒诞派文学的诞生之物！”",
                "“再来一杯，敬庸俗！”",
                "“监督，你给她喝什么了……这是醉了？”苏筱凑过来，低声问道。",
                "“……白水兑柠檬汁也会么……”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "白开水",
                "少冰",
                "柠檬汁"
            ]
        },
        {
            "name": "有效助眠",
            "limit": "【默契值1级】",
            "tips": [
                "“监督，恕我直言，就算你插了朵花，也掩盖不了它更招小孩子喜欢。”",
                "“你的编辑给我发了20条信息，说骗、呃，让你早点睡觉，免得明天颁奖典礼又睡过去。”",
                "“那牛奶也不用加糖啊，还是热的。”",
                "“嗯，配合你的喜好，换成了燕麦的。”",
                "“……”"
            ],
            "recipe": [
                "经典搪瓷杯/棱纹马克杯",
                "甜牛乳",
                "正常糖",
                "热",
                "燕麦奶",
                "菊花"
            ]
        },
        {
            "name": "灵感激发",
            "limit": "【默契值1级】",
            "tips": [
                "异界风味的花茶，激起了刘兄新的创作灵感。",
                "",
                "",
                "“这个伞不错，但是下次别加梅干……啊！我想到了！”刘兄嘴里嘀嘀咕咕，看来明天的连载更新终于有着落了。"
            ],
            "recipe": [
                "扎啤杯",
                "德里亚德风味花茶",
                "常温",
                "咸梅干",
                "精致纸伞"
            ]
        },
        {
            "name": "清热败火值得拥有",
            "limit": "【默契值5级】",
            "tips": [
                "“唉……给我来个最败火的……”",
                "",
                "",
                "——偶尔，畅销书作家也需要养生。"
            ],
            "recipe": [
                "棱纹马克杯",
                "枸杞菊花茶",
                "枸杞",
                "叶子冻",
                "银杏叶"
            ]
        },
        {
            "name": "半蓝",
            "limit": "【默契值8级】",
            "tips": [
                "“由柠檬汁、菠萝汁、苏打水混合柑橘甜酒调制而成……”",
                "“不喜欢？”",
                "“没有，你加了点苦味，点睛之笔。”",
                "“谢谢。”",
                "“不过水果就有点失败了，再接再厉监督。”",
                "“……谢谢。”"
            ],
            "recipe": [
                "海水半蓝",
                "少冰",
                "苦味素",
                "芒果果冻"
            ]
        },
        {
            "name": "最浓的咖啡最长的夜",
            "limit": "【默契值16级】",
            "tips": [
                "最浓的咖啡，陪伴刘兄熬过最长的夜。",
                "——结果本人不小心多放了份糖。",
                "监督沉默了三秒，默默递过一个冰淇淋球，配上一根三叶长签。"
            ],
            "recipe": [
                "经典搪瓷杯/棱纹马克杯",
                "经典特浓咖啡",
                "糖浆",
                "加双份",
                "香蕉冰淇淋",
                "三叶长签"
            ]
        },
        {
            "name": "急寻配方提供者",
            "limit": "【默契值13级】",
            "tips": [
                "刘兄一直想找到配方的提供者，但是无果。",
                "他一定是个很有故事的人，说不定可以成为我的下一个灵感。刘兄看着蓝莓在酒杯中静静躺着，又抿了一口。"
            ],
            "recipe": [
                "航海时代",
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "蓝莓",
                "银杏叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "恩利都苦啤兑苦咖",
                "加双份",
                "苦味素",
                "少冰"
            ],
            "ex": [390],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "极夜马戏团",
                "苦味素",
                "偏烈",
                "樱桃"
            ],
            "ex": [462],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "经典特浓咖啡",
                "糖浆",
                "加双份",
                "香蕉冰淇淋"
            ],
            "ex": [496],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 刘兄 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 刘兄 }