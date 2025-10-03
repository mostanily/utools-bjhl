import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.原生特攻α型, MXLaohenEnum.熊熊燃烧], "attr": "yan", "star": "5",
    "nameEn": "ROAR", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
    "cv": "叶知秋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "狱火之墙",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "24秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
            "tab": ["负面状态", "屏障"],//技能标签
            "content": [
                "在指定位置制造持续",
                speSkillCon("20"),
                "秒的狱火之墙，狱火之墙可以作为",
                speSkillCon("中等强度"),
                "的屏障抵御敌方投射物，击退靠近的敌人并造成",
                speSkillCon("100%最终攻击的炎元素伤害"),
                "",
                "施放后装填",
                speSkillCon("6"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.罗咤弹药),
                speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
            ]//满级技能内容描述
        }
    },
    {
        "name": "模式切换",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],
            "tab": ["自身增益"],
            "content": [
                "被动：每隔",
                speSkillCon("15"),
                "秒装填",
                speSkillCon("6"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.罗咤弹药),
                speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                "",
                "主动：切换普通攻击的攻击模式",
                "",
                speSkillCon("【模式切换·炮击模式】普通攻击形态", SkillColorEnum.injuries),
                "",
                "“炮击模式”状态下普通攻击效果",
                "",
                "射程极远，普通攻击额外获得",
                speSkillCon("10%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "暴击率和",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·暴击伤害）"),
                "暴击伤害，造成",
                speSkillCon("840%最终攻击的炎元素伤害"),
                "并同时对目标半径",
                speSkillCon("250"),
                "范围内敌人造成本次攻击",
                speSkillCon("50%"),
                "的伤害",
                "",
                speSkillCon("【模式切换·喷火模式】普通攻击形态", SkillColorEnum.injuries),
                "",
                "“喷火模式”状态下普通攻击效果",
                "",
                speSkillCon("攻击速度：0.20次每秒"),
                "，对中距离扇形区域内敌人持续喷火，造成",
                speSkillCon("585%最终攻击的炎元素伤害"),
                "并附加“炽焰”效果，每秒对目标造成",
                speSkillCon("50%最终攻击的炎元素伤害"),
                "，可叠加",
                speSkillCon("3"),
                "层，持续",
                speSkillCon("5"),
                "秒"
            ]
        }
    },
    {
        "name": "狂欢派对",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "75秒"]],
            "tab": ["炎区域", "伤害"],
            "content": [
                "朝指定位置半径",
                speSkillCon("300"),
                "范围内随机发射炮弹，对半径",
                speSkillCon("80"),
                "范围内的所有目标预计总共造成",
                speSkillCon("4500%最终攻击的炎元素伤害"),
                "",
                "炮弹落地时将生成炎元素区域",
                "",
                "施放后装填",
                speSkillCon("8"),
                "枚",
                speSkillConWithImg(SkillDescStatusImg.罗咤弹药),
                speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
            ]
        }
    },
    {
        "name": "特性：枪械发烧友",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1200"], ["攻击速度", "0.33次每秒"]],
            "atType": ["群体", "对空"],
            "content": [
                "射程极远，向当前目标发射炮弹，造成",
                speSkillCon("336%最终攻击的炎元素伤害"),
                "并同时对目标半径",
                speSkillCon("250"),
                "范围内敌人造成本次攻击",
                speSkillCon("50%"),
                "的伤害（实际伤害随【模式切换】技能等级提升）"
            ],//普通攻击
            "specialContent": [
                [
                    "可向武器中装填",
                    speSkillConWithImg(SkillDescStatusImg.罗咤弹药),
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                    "，当存在",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                    "时，基础攻击速度提升",
                    speSkillCon("75%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，每次普通攻击会消耗一枚",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                    "，最多填装20枚",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                ],//零花本体特性
                [
                    "普通攻击有",
                    speSkillCon("20%"),
                    "的几率不消耗",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                ],//一花特性
                [
                    "存在",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                    "时基础攻击速度提升效果提高到",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "拒绝配合",
            "limit": "【默契值1级】",
            "tips": [
                "“好啊，玄戈他们在天鹿让我天天喝这个就算了，你也不放过我？！”",
                "“呃，为了让你觉得开心一点，给你配了无糖，还加了冰——”",
                "“是这个问题么！？”"
            ],
            "recipe": [
                "甜牛乳",
                "无糖",
                "多冰",
                "全脂牛奶"
            ]
        },
        {
            "name": "下单失误",
            "limit": "【默契值4级】",
            "tips": [
                "“……”",
                "“……”",
                "“我为什么要喝这玩意，还用搪瓷杯，你最好解、释、清、楚。”",
                "监督看着面前的女孩，实在说不出——不小心把你的和禺期的搞反了这句话。"
            ],
            "recipe": [
                "经典搪瓷杯",
                "姜茶",
                "无糖",
                "常温"
            ]
        },
        {
            "name": "转移话题的艺术",
            "limit": "【默契值5级】",
            "tips": [
                "“怎么？我点咖啡很奇怪么？爆炸实验可是要经常熬夜的！”",
                "“……………………”",
                "“说起来，监督，你们这儿有没有空余的房——”",
                "“给！你的糖浆，圆匙在手边自己拿一下。”"
            ],
            "recipe": [
                "经典搪瓷杯/扎啤杯",
                "经典特浓咖啡",
                "糖浆",
                "低因",
                "空心圆匙"
            ]
        },
        {
            "name": "到底谁在喝无糖？",
            "limit": "【默契值1级】",
            "tips": [
                "“到底是谁在喝无糖，都喝奶茶还这么养生？这菊花又是什么？”",
                "“……它只是一杯奶绿，无糖是无辜的。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "茉茉奶绿",
                "无糖",
                "正常冰",
                "菊花"
            ]
        },
        {
            "name": "能吃还能玩",
            "limit": "【默契值8级】",
            "tips": [
                "“真意外，你竟然会喜欢看起来这么平平无奇的东西。”",
                "“怎么？你又不懂了吧，这样才有意思。”",
                "罗咤从冰山冰海中拿起一块——接着准确砸在正在睡觉的豹富的聚宝盆里。",
                "“唔，这个梅干不错，哪儿买的？”",
                "“………………”"
            ],
            "recipe": [
                "航海时代",
                "冰镇苏打水",
                "多冰",
                "咸梅干"
            ]
        },
        {
            "name": "混合在一起",
            "limit": "【默契值10级】",
            "tips": [
                "“监督。”",
                "“啊，啊？”",
                "“你到底是怎么准确地把我喜欢的和不喜欢的混在一起的？”",
                "“哦我知道了，打击报复？因为昨天我多用了两瓶萃取液？你也太小气了吧！”",
                "“……我说这是意外你信么？”",
                "监督捏紧了手里忘了哪名研究员递给过来的小纸条：",
                "她喜欢青提奶茶最烦双倍糖和芒果，其他你看着办千万别让她回来找我们求求了监督！"
            ],
            "recipe": [
                "经典搪瓷杯/航海时代",
                "青提啵啵奶茶",
                "双倍糖",
                "正常冰",
                "芒果果冻",
                "菊花"
            ]
        },
        {
            "name": "片刻的安静",
            "limit": "【默契值18级】",
            "tips": [
                "罗咤难得安静地喝着她喜欢的奶茶。",
                "这么看的也只是个普通小女孩，和桃子的颜色还挺配的。",
                "“监督我们来猜拳啊！输了的人把这朵花吃了！”",
                "——并没有，监督面无表情地背过身，假装自己聋了。"
            ],
            "recipe": [
                "经典搪瓷杯/航海时代",
                "桃桃乌龙茶",
                "正常糖",
                "少冰",
                "蜜桃冻",
                "白玉兰"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "薄荷蜜柚苏打",
                "正常冰",
                "叶子冻"
            ],
            "ex": [371, 415, 453],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "冰镇苏打水",
                "多冰",
                "咸梅干"
            ],
            "ex": [435, 487, 531],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 罗咤 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 罗咤 }