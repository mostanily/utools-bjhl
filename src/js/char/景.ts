import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.元素专攻方块β型, MXLaohenEnum.雷域和源], "attr": "lei", "star": "6",
    "nameEn": "JING·GLIT·JUSTICE", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "张若瑜", "openDate": "2024年08月08日", "resourse": ["定向共鸣·荣耀俯首"]
}

const Skill = [
    {
        "name": "罚罪",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "1秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益", "格挡条破坏3"],//技能标签
            "content": [
                "进入持续",
                speSkillCon("35"),
                "秒的「守誓」状态并对自身周围",
                speSkillCon("500"),
                "半径造成",
                speSkillCon("2000%最终攻击的雷元素伤害"),
                "，回复异核充能",
                speSkillCon("15"),
                "秒并回复所有【断恶】技能次数，该状态下自身暴击率提高",
                speSkillCon("25%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "",
                "已在「守誓」状态下时无法施展【罚罪】，且「守誓」状态结束后",
                speSkillCon("10"),
                "秒内无法再次施放"
            ]//满级技能内容描述
        }
    },
    {
        "name": "断恶",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "2"]],
            "tab": ["伤害", "自身增益", "格挡条破坏3"],
            "content": [
                "自动技能：冷却时间",
                speSkillCon("12"),
                "秒，对目标周围半径",
                speSkillCon("250"),
                "范围造成",
                speSkillCon("1600%最终攻击的雷元素伤害"),
                "",
                "",
                "主动技能：仅在「守誓」状态下可施放，对半径",
                speSkillCon("300"),
                "范围造成",
                speSkillCon("4000%最终攻击的雷元素伤害"),
                "，且下",
                speSkillCon("6"),
                "次普通攻击的攻击速度提升",
                speSkillCon("200%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "，并回复异核充能",
                speSkillCon("10"),
                "秒"
            ]
        }
    },
    {
        "name": "辉光殿堂",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "自身增益", "对空", "格挡条破坏3"],
            "content": [
                "对自身半径",
                speSkillCon("800"),
                "范围内所有敌方造成",
                speSkillCon("3500%最终攻击的雷元素伤害"),
                "，同时获得",
                speSkillCon("12"),
                "层",
                speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                "",
                speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                "：「守誓」状态下自身普通攻击时，消耗1层",
                speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                "对目标及周围半径",
                speSkillCon("250"),
                "范围地面敌方单位造成相当于自动技能伤害的",
                speSkillCon("25%"),
                "（该伤害视为异核技能伤害）。",
                "",
                "若【罚罪】次数耗尽，则非「守誓」状态下的普通攻击也会触发",
                speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身)
            ]
        }
    },
    {
        "name": "特性：裁决权柄",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
            "atType": ["单体"],
            "content": [
                "对选中目标造成",
                speSkillCon("200%最终攻击的雷元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "自身在场时使场上敌方雷元素抗性降低",
                    speSkillCon("15%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，且自身所有伤害忽略目标基础减伤，数值为目标身上雷元素抗性降低效果的",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "异核技能获得的",
                    speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                    "层数提高",
                    speSkillCon("6"),
                    "层，且【断恶】技能冷却时间降低至",
                    speSkillCon("10"),
                    "秒，次数增加",
                    speSkillCon("1"),
                    "次"
                ],//一花特性
                [
                    "「守誓」状态下暴击时伤害提高",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，且「守誓」状态下特性中忽略目标基础减伤的数值提升至雷元素抗性降低效果的",
                    speSkillCon("80%")
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "无需更改",
            "limit": "【默契值4级】",
            "tips": [
                "早在景接任前，橘子汁便是乐园岛食堂餐点的标配。",
                "尽管她本人并不喜爱那酸甜的味道，但她并不会根据自己的喜好随意更改岛上设置。",
                "——哪怕只是一杯饮料。"
            ],
            "recipe": [
                "郁金香酒杯",
                "玻璃橘子",
                "少冰",
                "叶子冻",
                "薄荷叶"
            ]
        },
        {
            "name": "流行配方",
            "limit": "【默契值5级】",
            "tips": [
                "“一般。”",
                "刑狱长放下手中的三分糖的白桃芝士奶盖，淡然地评价道。",
                "“欸？我看你点单那么详细，还以为是你很喜欢的口味……”",
                "“只是听说这个配方在岛外颇受欢迎，所以有些好奇罢了。”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "白桃芝士奶盖",
                "三分糖",
                "正常冰",
                "青提",
                "迷迭香"
            ]
        },
        {
            "name": "“双面”",
            "limit": "【默契值13级】",
            "tips": [
                "为处理公务，刑狱长习惯了随时处于紧绷状态。",
                "但景可以在监督这里，点一杯更烈的啤酒。"
            ],
            "recipe": [
                "马天尼杯",
                "蜂蜜啤酒",
                "多冰",
                "偏烈",
                "枫叶"
            ]
        },
        {
            "name": "公务缠身",
            "limit": "【默契值1级】",
            "tips": [
                "在监督的印象中，景几乎不会劝自己早些下班或是减少工作量。",
                "——她比任何人都了解那些积压的公务有多重要。",
                "但她仍会时不时地发一张夜色危情或是空香槟杯的照片。",
                "“下班后一起喝一杯吧。我会等你。”"
            ],
            "recipe": [
                "笛型香槟杯",
                "夜色危情",
                "少冰",
                "正常",
                "咸梅干",
                "白玉兰"
            ]
        },
        {
            "name": "一片心意",
            "limit": "【默契值13级】",
            "tips": [
                "“刑狱长大人，关于近期……”",
                "狱警C439抱着文件走进刑狱长办公室的瞬间，突然晃了一下神。",
                "“……好甜的花香。是这杯茶的缘故吗？我还不知道您居然喜欢喝这种茶。”",
                "“一位朋友的心意。”",
                "原来刑狱长大人是有朋友的啊……",
                "C439艰难拽回自己失礼的想法。"
            ],
            "recipe": [
                "马天尼杯",
                "德里亚德风味花茶",
                "热",
                "芒果果冻",
                "银杏叶"
            ]
        },
        {
            "name": "起床气",
            "limit": "【默契值1级】",
            "tips": [
                "景知道自己的起床气问题颇为严重。",
                "不过没关系，只要在床头准备一大杯冰镇苏打水，逼迫自己迅速清醒过来就好了。",
                "她以为永远不会有人注意到她的这点“小习惯”。",
                "所以……当监督将递给她特制的安眠剂时，景惊讶极了。",
                "“看你大早上喝那么多冰水不太舒服的样子……还是试试这个吧。”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "冰镇苏打水",
                "多冰",
                "椰果",
                "水果签"
            ]
        },
        {
            "name": "认同",
            "limit": "【默契值18级】",
            "tips": [
                "景还记得，自己刚上任时，狱警们或阴鸷或看笑话的眼神。",
                "但如今，他们有意无意地模仿、跟随着她的一举一动。",
                "就连她爱喝的菊花茶也成为了乐园岛上最畅销的物资之一。"
            ],
            "recipe": [
                "郁金香酒杯",
                "枸杞菊花茶",
                "黄瓜片",
                "茶冻",
                "柠檬片"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "黎威尔日升",
                "椰浆",
                "盐",
                "青梅"
            ],
            "ex": [527, 591, 644],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 景 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 景 }