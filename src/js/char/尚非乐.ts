import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "筑术师", "skill": [MXLaohenEnum.强攻对空, MXLaohenEnum.信号干扰三角], "attr": "feng", "star": "5",
    "nameEn": "HIRUNDO", "tag": ["群攻", "拦截"], "originWorld": "黎威尔", "orginChar": "古剑奇谭网络版",
    "cv": "王燕华", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "咚咚咚——请问是白荆科技的监督大人吗？我是隔壁博物附小的尚非乐，听了昊苍哥哥推荐，专门来你家蹭饭哒！",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "2/2b/jsmzm0i8e31tyz215ebjb0yjassrbw0.png",
            "f/f8/mgceo6s7io25cc7yyeqhb3llddornr2.png",
            "a/a8/8mnnyjwcu99pngbbeelghp1qcg451yj.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "知风",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "20秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
        "tab": ["自身增益", "友方增益", "拦截"],//技能标签
        "content": [
            "提升全体友方同调者",
            speSkillCon("50%[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "，自身攻击速度额外提升",
            speSkillCon("25%"),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("20"),
            "秒（效果结束后，将永久提升自身",
            speSkillCon("10%"),
            speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
            "攻击速度，最多可叠加",
            speSkillCon("3"),
            "次），并拦截所有敌方投射物"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "风骤起",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "15秒"]],
        "tab": ["伤害"],
        "content": [
            "连续朝3个方向丢出风筝，对沿途命中的目标造成",
            speSkillCon("625%最终攻击的风元素伤害"),
            "+",
            speSkillCon("625%专精的风元素伤害"),
            "",
            "普通攻击命中目标时缩短",
            speSkillCon("1"),
            "秒施放间隔（每",
            speSkillCon("3"),
            "秒最多触发一次）"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "正义的伙伴",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害"],
        "content": [
            "对指定区域范围",
            speSkillCon("350"),
            "内的敌方单位攻击10次，每次造成",
            speSkillCon("210%最终攻击的风元素伤害"),
            "+",
            speSkillCon("210%专精的风元素伤害"),
            "",
            "自身攻击速度每提升",
            speSkillCon("30%"),
            "，额外攻击1次，最多额外攻击",
            speSkillCon("3"),
            "次"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：快快长大",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "1200"], ["攻击速度", "0.42次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "对路径上的目标造成",
            speSkillCon("60%最终攻击的风元素伤害"),
            "，到最远处飞回并造成",
            speSkillCon("2"),
            "次伤害，伤害随风筝攻击到目标数衰减（最多降低至",
            speSkillCon("25%"),
            "），每次命中目标后，可以缩短自动技能【风骤起】的施放冷却（每",
            speSkillCon("3"),
            "秒触发一次）"
        ],//普通攻击
        "specialContent": [
            [
                "每次造成伤害时获得1层",
                speSkillConWithImg(SkillDescStatusImg.尚非乐强化),
                "强化：基础攻击速度提升",
                speSkillCon("1%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "，持续",
                speSkillCon("5"),
                "秒，可叠加",
                speSkillCon("20"),
                "次"
            ],//零花本体特性
            [
                "特性产生的攻击速度叠加至上限时，普通攻击额外造成",
                speSkillCon("30%专精值的风元素伤害")
            ],//一花特性
            [
                "普通攻击命中减少自动技能【风骤起】施放间隔的效果受自身攻速影响，最多降低到每",
                speSkillCon("1"),
                "秒触发一次（预计当自身攻击速度额外提升",
                speSkillCon("80%"),
                "时，达到最低触发间隔）"
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
            "name": "猫奴……们",
            "limit": "【默契值1级】",
            "tips": [
                "“监督监督，我不可以喝姜汁可可的！”",
                "“怎么了？”",
                "“我家楼下的猫咪不喜欢生姜的味道，一闻到就会逃得远远的……”",
                "“原来如此……那你还是可以带这枝紫藤走。老板亲测，逗猫一绝。”"
            ],
            "recipe": [
                "简约至上",
                "姜汁可可",
                "热",
                "糖浆",
                "珍珠",
                "紫藤"
            ]
        },
        {
            "name": "好学生",
            "limit": "【默契值1级】",
            "tips": [
                "“这杯咖啡你真的不尝尝？我已经换成了低因配方，还加了好多香蕉冰淇淋和奶精球，不会让你睡不着的。”",
                "“不行不行，我明天早八呢！”"
            ],
            "recipe": [
                "自证方圆",
                "经典特浓咖啡",
                "奶精球",
                "低因",
                "香蕉冰淇淋",
                "空心圆匙"
            ]
        },
        {
            "name": "世事难料",
            "limit": "【默契值1级】",
            "tips": [
                "“我记得你不喝生姜类饮料啊？怎么点了姜茶？”",
                "“嗯……没关系了……楼下的猫咪和我绝交了呜呜……”",
                "“……多给你一根水果签，就当是安慰了。”",
                "“谢谢监督……”"
            ],
            "recipe": [
                "自证方圆",
                "姜茶",
                "正常糖",
                "常温",
                "水果签"
            ]
        },
        {
            "name": "了不起的汪",
            "limit": "【默契值5级】",
            "tips": [
                "“我接元桃桃放学的时候，看到校门口的宣传栏里贴了一封公开信，好像是表彰某个人见义勇为哦——”",
                "“啊！监督你看到了……嘿嘿……”",
                "“你做得很棒！今天的阿华田奶茶，我不仅给你放双倍糖，还要再加一份汪汪饼干！”",
                "“太好啦！”"
            ],
            "recipe": [
                "竹节茶杯",
                "阿华田奶茶",
                "双倍糖",
                "汪汪饼干",
                "枫叶"
            ]
        },
        {
            "name": "一眼看破",
            "limit": "【默契值6级】",
            "tips": [
                "“监督，我上个礼拜考了双百哦~我今天可以选五分糖、加了椰果和菊花的桃桃乌龙茶吗？”",
                "“这个配方怎么这么熟悉……看来你最近和元桃桃她们玩得很好？”",
                "“监督你怎么什么都知道？”",
                "“你以为每天是谁给她准备那么一大桶茶的……”",
                "“塔师傅？”",
                "“……倒也没错。”"
            ],
            "recipe": [
                "自证方圆",
                "桃桃乌龙茶",
                "五分糖",
                "热",
                "椰果",
                "菊花"
            ]
        },
        {
            "name": "认生是什么？",
            "limit": "【默契值10级】",
            "tips": [
                "尚非乐每次放学放得早了，就会跑去R.E.D.门口等昊苍。",
                "要是赶上昊苍加班的时候，他那望眼欲穿的模样别提有多可怜了——就连最铁面无私的局长看了，也忍不住帮他带一杯冰镇苏打水。",
                "“伯伯，可以帮我加点柠檬片和咸梅干吗？”",
                "“……可以。”"
            ],
            "recipe": [
                "竹节茶杯",
                "冰镇苏打水",
                "少冰",
                "咸梅干",
                "柠檬片"
            ]
        },
        {
            "name": "乐“基”生悲",
            "limit": "【默契值16级】",
            "tips": [
                "“监督你怎么知道我最喜欢白桃芝士奶盖！熊熊杯也好可爱！”",
                "“知道啦知道啦，这么兴奋……小心尾巴露出来。”",
                "“放心！我最近都有好好练习，一定不会露出来的！”",
                "“这么厉害？那再奖励你一个蝴蝶结——啊，还是露出来了。”",
                "“呜汪……”"
            ],
            "recipe": [
                "熊熊杯",
                "白桃芝士奶盖",
                "正常糖",
                "少冰",
                "蓝莓",
                "蝴蝶结"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "经典特浓咖啡",
                "糖浆",
                "低因",
                "原味雪顶"
            ],
            "ex": [390],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "茉茉奶绿",
                "三分糖",
                "正常冰",
                "茶冻"
            ],
            "ex": [431],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "桃桃乌龙茶",
                "五分糖",
                "正常冰",
                "茶冻"
            ],
            "ex": [461],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "冰镇苏打水",
                "多冰",
                "咸梅干"
            ],
            "ex": [534],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 尚非乐 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 尚非乐 }