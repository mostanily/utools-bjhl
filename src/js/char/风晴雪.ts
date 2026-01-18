import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultSkillLinkObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "筑术师", "skill": [MXLaohenEnum.强攻对地, MXLaohenEnum.霜天], "attr": "shuang", "star": "6",
    "nameEn": "FENG JR.", "tag": ["召唤", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
    "cv": "朱雀橙", "openDate": "2024年03月28日", "resourse": ["定向共鸣·飞雪初晴", "常态共鸣·森罗万象"],
    "introText": "前雇佣兵，“腾蛇”。或者你也可以叫我风晴雪，还记得吗？我们见过的~",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "8/8a/t13wt4m3sgzyv6gsjb0361kjpwvxqd6.png",
            "1/13/gs8l9mukd3ixn3lk34f3z60bcqq5i61.png",
            "f/fe/ee5m53novxql3abezzp9xnljua46hm5.png"
        ],
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "飞霜",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "抉择技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "-"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "负面状态", "召唤", "对空"],//技能标签
        "sizeLevel": [
            ["100%", "150%"],
            ["115%", "173%"],
            ["130%", "195%"],
            ["145%", "217%"],
            ["160%", "240%"],
            ["175%", "263%"],
            ["190%", "285%"],
            ["205%", "308%"],
            ["220%", "330%"],
            ["230%", "345%"],
            ["240%", "360%"],
            ["250%", "375%"],
            ["260%", "390%"],
            ["270%", "405%"],
            ["280%", "420%"]
        ],
        "content": [
            "选择一种技能形态释放，召唤不同战术装置，潮湿环境下，将直接生成相应范围的霜区域（指令冷却均为",
            speSkillCon("20"),
            "秒）：",
            "",
            speSkillCon("【飞霜·巡视】技能形态", SkillColorEnum.injuries),
            "",
            "射出警戒信号标记目标区域，对目标半径",
            speSkillCon("500"),
            "范围内的所有敌方单位造成",
            speSkillCon("300%最终攻击的霜元素伤害"),
            "，并召唤",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」",
            speSkillCon("攻击速度：0.25次每秒"),
            "，攻击区域内的随机敌方单位，并对目标及周围半径",
            speSkillCon("200"),
            "范围内的所有敌方单位造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的霜元素伤害"),
            "；自身攻击速度提升可同步提升",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」的攻击速度",
            "",
            speSkillCon("【飞霜·协同】技能形态", SkillColorEnum.injuries),
            "",
            "朝指定方向射出一枚充能弹药，对路径上的所有敌方单位造成",
            speSkillCon("300%最终攻击的霜元素伤害"),
            "，以",
            speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "击退路径上的所有敌方单位，并召唤",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」跟随角色射击。",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」攻击敌方单位将造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的霜元素伤害"),
            "，同时忽略目标",
            speSkillCon("20%"),
            speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
            "基础减伤"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "排云",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
        "tab": ["伤害", "负面状态", "对空"],
        "sizeLevel": [
            ["1000%", "200%"],
            ["1150%", "230%"],
            ["1300%", "260%"],
            ["1450%", "290%"],
            ["1600%", "320%"],
            ["1750%", "350%"],
            ["1900%", "380%"],
            ["2050%", "410%"],
            ["2200%", "440%"],
            ["2300%", "460%"],
            ["2400%", "480%"],
            ["2500%", "500%"],
            ["2600%", "520%"],
            ["2700%", "540%"],
            ["2800%", "560%"]
        ],
        "content": [
            "被动：消耗全部",
            speSkillCon("9"),
            "层",
            speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣),
            "生成一枚",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "，且每",
            speSkillCon("9"),
            "秒最多生成1枚，",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "上限为2枚",
            "",
            "主动：进入特殊的射击姿态，消耗一枚",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "，对路径上的所有敌方单位造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的霜元素伤害"),
            "，同时以",
            speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "击退路径上的所有敌方单位",
            "",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」会在自身释放「排云」时一同释放「排云」",
            "",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」：「排云」对范围内的随机敌方单位，对目标及周围半径",
            speSkillCon("300"),
            "范围内的所有敌方单位造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的霜元素伤害"),
            "",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」：「排云」对正前方路径上的所有敌方单位造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的霜元素伤害"),
            "，同时以",
            speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "击退路径上的所有敌方单位",
            "",
            "场上每有一个",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」，「排云」暴击率提升",
            speSkillCon("15%"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "",
            "场上每有一个",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」，「排云」造成伤害忽略目标",
            speSkillCon("10%"),
            speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
            "基础减伤"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "霁色长空",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["伤害", "负面状态", "对空", "穿透屏障"],
        "sizeLevel": [
            ["3600%", "42%"],
            ["4200%", "49%"],
            ["4800%", "56%"],
            ["5400%", "63%"],
            ["5700%", "67%"],
            ["6000%", "70%"],
        ],
        "content": [
            "朝目标方向射出四发穿透整个战场的强力弹药，对路径上的所有敌方单位共造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的霜元素伤害"),
            "，并以",
            speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "击退路径上的所有敌方单位",
            "",
            "技能释放结束后会进入「霁色领域」状态，后续",
            speSkillCon("3"),
            "次「排云」伤害提升",
            speSkillCon("", 0, -1, 1),
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，次数耗尽时将退出「霁色领域」状态",
            "",
            "潮湿环境下，将直接生成相应范围的霜区域"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：腾蛇乘雾",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "1200"], ["攻击速度", "0.25次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "每次射击间隔较长，向目标发射充能子弹，造成",
            speSkillCon("400%最终攻击的霜元素伤害"),
            "并为自身叠加",
            speSkillCon("1"),
            "层",
            speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣)
        ],//普通攻击
        "specialContent": [
            [
                speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
                "「巡视装置」",
                speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
                "「协同装置」视为召唤物并会协同作战，攻击将叠加",
                speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣),
                "，场上最多同时存在两架战术装置",
                "",
                "初始为",
                speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
                "「协同装置」跟随角色射击，攻击敌方单位",
            ],//零花本体特性
            [
                "场上每有一个",
                speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
                "「巡视装置」，「排云」造成暴击时伤害提升",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "；场上每有一个",
                speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
                "「协同装置」，「排云」造成伤害忽略目标基础减伤提升至",
                speSkillCon("25%"),
                speSkillCon("属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "",
                speSkillConWithImg(SkillDescStatusImg.风晴雪供能装置),
                "「供能装置」计数时可同时视为「协同装置」和「巡视装置」",
            ],//一花特性
            [
                "风晴雪施放「排云」使自身霜元素伤害提高",
                speSkillCon("10%"),
                speSkillCon("(属性乘区·属性增伤)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区属性增伤),
                "，该效果最多叠加5次，持续30秒"
            ],//二花特性
            [
                "「排云」造成的伤害提升",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "，",
                speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
                "上限提升至3枚"
            ]//三花特性
        ]
    }
}
const skillTeseStrong: DefaultTeseSkillObj = {
    "name": "特性强化",
    "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "content": [
            "异核技能的「霁色领域」状态提高排云伤害次数由3次增加至5次"
        ]
    }
}
const skillLink: DefaultSkillLinkObj = {
    "name": "技能同调",
    "aliasNum": "技能同调",
    "repSkill": 0,//被替换的技能，值为该角色技能组数据对应技能下标
    "unlock": LaohenNameEnum.全息邂逅,//该技能解锁条件，拥有对应的烙痕ID
    "detail": {
        "name": "溯风回雪",
        "aliasNum": "1",
        "maxLevel": 15,
        "type": "抉择技能",
        "skillTab": [["指令冷却", "-"], ["次数", "8"]],
        "tab": ["伤害", "自身增益", "召唤", "对空"],
        "sizeLevel": [
            ["1120%"],
            ["1290%"],
            ["1460%"],
            ["1620%"],
            ["1790%"],
            ["1960%"],
            ["2130%"],
            ["2300%"],
            ["2460%"],
            ["2580%"],
            ["2690%"],
            ["2800%"],
            ["2910%"],
            ["3020%"],
            ["3140%"]
        ],
        "content": [
            speSkillCon("抉择技：可选择进入", SkillColorEnum.injuries),
            speSkillCon("【回雪】", SkillColorEnum.bing),
            speSkillCon("霜元素形态或", SkillColorEnum.injuries),
            speSkillCon("【溯风】", SkillColorEnum.feng),
            speSkillCon("风元素形态进行攻击（属于", SkillColorEnum.injuries),
            speSkillCon("[同调者临时元素变更]", SkillColorEnum.normal, ToastSkillEnum.同调者临时元素变更),
            speSkillCon("）", SkillColorEnum.injuries),
            "",
            "将风晴雪部署到指定位置并展开半径为",
            speSkillCon("2000"),
            "的扇形领域。",
            "",
            "技能启动时，将立即充满",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "上限数目，并额外获得2枚",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "。",
            "",
            "在领域持续期间，风晴雪会自动选择范围内的首领目标及生命值最高的目标，施展",
            speSkillCon("【排云·回雪】", SkillColorEnum.bing),
            "（对直线路径上的所有敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的霜元素伤害"),
            "）",
            speSkillCon("【排云·溯风】", SkillColorEnum.feng),
            "（对直线路径上的所有敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的风元素伤害"),
            "）。",
            "",
            "在此期间无法主动使用【排云】和异核技能。",
            "",
            "最后一次",
            speSkillCon("【排云·回雪】", SkillColorEnum.bing),
            speSkillCon("【排云·溯风】", SkillColorEnum.feng),
            "将覆盖整个扇形领域，对区域内所有敌人发起攻击。",
            "",
            "领域持续10秒，时间结束后退出领域，此时",
            speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣),
            "与",
            speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
            "的数量将恢复至使用前的状态，同时该技能进入10秒冷却时间，期间无法再次使用。",
            "",
            "",
            speSkillCon("【排云·回雪】", SkillColorEnum.bing),
            speSkillCon("【排云·溯风】", SkillColorEnum.feng),
            "享受一切与【排云】相关的属性和伤害加成。",
            "",
            "在此状态下，风晴雪的战术装置将转变为",
            speSkillConWithImg(SkillDescStatusImg.风晴雪供能装置),
            "「供能装置」，该装置在计数时可同时视为",
            speSkillConWithImg(SkillDescStatusImg.风晴雪协同装置),
            "「协同装置」和",
            speSkillConWithImg(SkillDescStatusImg.风晴雪巡视装置),
            "「巡视装置」。",
        ],
        "specialContent": [
            [
                "初始异核充能50％，【排云·回雪】/【排云·溯风】对敌人造成伤害后，敌人受到的伤害提高40%",
                speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                "，持续40秒"
            ],//特质Ⅱ级解锁
            [
                "「溯风回雪」状态下，施放【排云·回雪】/【排云·溯风】回复10秒异核充能，最后一次【排云·回雪】/【排云·溯风】回复20秒异核充能井视为获得240%",
                speSkillCon("(属性乘区·攻击力加成)", SkillColorEnum.injuries),
                "攻击力，且必定暴击。"
            ],//特质Ⅴ级解锁
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese,
    skillTeseStrong,
    skillLink
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "平平无奇",
            "limit": "【默契值8级】",
            "tips": [
                "“监督，这杯白开水只有一点点咸味欸。能把那边的苦味素递给我吗？”",
                "“……你猜它为什么叫白开水……”"
            ],
            "recipe": [
                "简约至上",
                "白开水",
                "常温",
                "盐",
                "枫叶"
            ]
        },
        {
            "name": "话音刚落",
            "limit": "【默契值6级】",
            "tips": [
                "“这就是哥哥爱喝的沉金记忆吗？原来是因为不好喝，哥哥才不让我喝的啊。”",
                "“……我想，应该不是因为这个。不觉得酒精浓度有点高吗？”",
                "“嗯唔……嗯……？”",
                "“坏了，已经醉了！”"
            ],
            "recipe": [
                "熊熊杯",
                "沉金记忆",
                "正常糖",
                "柠檬汁",
                "精致纸伞"
            ]
        },
        {
            "name": "料理的滋味",
            "limit": "【默契值4级】",
            "tips": [
                "“加了双倍浓缩之后，味道变得跟你做的饭有点像啊……”",
                "“相似的好吃吗？”",
                "“………………啊对对对。”"
            ],
            "recipe": [
                "简约至上",
                "经典特浓咖啡",
                "糖包",
                "加双份",
                "草莓冰淇淋",
                "水果签"
            ]
        },
        {
            "name": "两不耽误",
            "limit": "【默契值1级】",
            "tips": [
                "“德里亚德森林这种名字，真的很适合出现在‘格兰索历险记’里呢。”",
                "“别一边闲聊一边往花茶里加咸梅干啊！”"
            ],
            "recipe": [
                "竹节茶杯",
                "德里亚德风味花茶",
                "热",
                "咸梅干",
                "白玉兰"
            ]
        },
        {
            "name": "稳定发挥",
            "limit": "【默契值5级】",
            "tips": [
                "“你不是等下要去训练场，现在喝黑月亮真的没关系吗？别像上次似的，忽然就醉倒了。”",
                "“没事没事~在战场上，干扰项只多不少，但我的准心从不会轻易动摇。”"
            ],
            "recipe": [
                "熊熊杯",
                "黑月亮",
                "正常冰",
                "苦味素",
                "蝴蝶结"
            ]
        },
        {
            "name": "肌肉记忆",
            "limit": "【默契值16级】",
            "tips": [
                "还没来得及细品苦啤对苦咖的滋味，忽听见窗外传来一声爆响。",
                "风晴雪下意识放下手中的竹节茶杯，一个箭步窜到窗帘边，隐蔽而熟练地拉开枪栓。",
                "“风小姐，是烟火哦。”",
                "“烟火？”",
                "风晴雪的神情多少有些迷茫。"
            ],
            "recipe": [
                "竹节茶杯",
                "恩利都苦啤兑苦咖",
                "少冰",
                "盐",
                "加双份",
                "银杏叶"
            ]
        },
        {
            "name": "出乎意料",
            "limit": "【默契值18级】",
            "tips": [
                "“咦……”",
                "“监督你怎么这个表情？是我点的熊熊燕麦牛奶有问题吗？”",
                "“不……就是因为太正常了……出乎意料的正常……”",
                "“那我加点苦味素？”",
                "“别别别，燕麦奶和汪汪饼干就挺好的！”"
            ],
            "recipe": [
                "自证方圆",
                "熊熊燕麦牛奶",
                "燕麦奶",
                "汪汪饼干",
                "经典长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "夜色危情",
                "偏烈",
                "少冰",
                "咸梅干"
            ],
            "ex": [511],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "玻璃橘子",
                "少冰",
                "椰果"
            ],
            "ex": [567],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "熊熊燕麦牛奶",
                "燕麦奶",
                "焦糖布丁"
            ],
            "ex": [594],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 风晴雪 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 风晴雪 }