import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "游徒", "skill": [MXLaohenEnum.利刃三角β型, MXLaohenEnum.蚀刻连携], "attr": "shi", "star": "6",
    "nameEn": "SISSI", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "", "openDate": "2025年04月17日", "resourse": ["定向共鸣·柙中独白"],
    "introText": "我是……茜茜……嘿嘿，我们真的再见了呀。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "a/a5/mqa6y6ixjcehxh6ytlifdp1jjez4eun.png",
            "6/6d/39yau7pu1ywymwpg159jcovn0219sgh.png",
            "7/7f/9msu045em7lreb33rc69wjbf5ghqbry.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "絮语弥响",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "12秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "对空"],//技能标签
        "sizeLevel": [
            ["1000%", "1500%"],
            ["1150%", "1725%"],
            ["1300%", "1950%"],
            ["1450%", "2175%"],
            ["1600%", "2400%"],
            ["1750%", "2625%"],
            ["1900%", "2850%"],
            ["2050%", "3075%"],
            ["2200%", "3300%"],
            ["2300%", "3450%"],
            ["2400%", "3600%"],
            ["2500%", "3750%"],
            ["2600%", "3900%"],
            ["2700%", "4050%"],
            ["2800%", "4200%"]
        ],
        "content": [
            "茜茜指挥奈奥格对选中范围施放技能，不同形态下奈奥格技能效果不同：",
            "",
            speSkillCon("【幽语者】形态4次指令冷却：", SkillColorEnum.injuries),
            speSkillCon("12"),
            speSkillCon("秒", SkillColorEnum.injuries),
            "",
            "对目标区域圆形半径",
            speSkillCon("350"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，生成",
            speSkillCon("40"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "，并为终端附加",
            speSkillCon("15点蚀爆值"),
            "。若次数耗尽，则该形态普通攻击会生成",
            speSkillCon("10"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "",
            "【连击】：回复",
            speSkillCon("5"),
            "秒自动技能冷却",
            "",
            "",
            speSkillCon("【吞蚀者】形态6次指令冷却：", SkillColorEnum.injuries),
            speSkillCon("15"),
            speSkillCon("秒", SkillColorEnum.injuries),
            "",
            "奈奥格对自身正前方长",
            speSkillCon("1000"),
            "矩形范围内的敌人造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，消耗",
            speSkillCon("20"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "，并为终端附加",
            speSkillCon("20点蚀爆值"),
            "。若次数耗尽，则该形态普通攻击会消耗",
            speSkillCon("10"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "",
            "【连击】：造成的伤害提升",
            speSkillCon("20%"),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "倾耳呓呓",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "15秒"]],
        "tab": ["伤害", "对空"],
        "sizeLevel": [
            ["1600%", "1800%"],
            ["1840%", "2070%"],
            ["2080%", "2340%"],
            ["2320%", "2610%"],
            ["2560%", "2880%"],
            ["2800%", "3150%"],
            ["3040%", "3420%"],
            ["3280%", "3690%"],
            ["3520%", "3960%"],
            ["3680%", "4140%"],
            ["3840%", "4320%"],
            ["4000%", "4500%"],
            ["4160%", "4680%"],
            ["4320%", "4860%"],
            ["4480%", "5040%"]
        ],
        "content": [
            "茜茜指挥奈奥格施放技能，处于不同形态下时奈奥格技能效果不同：",
            "",
            speSkillCon("【幽语者】形态自动技能冷却：", SkillColorEnum.injuries),
            speSkillCon("15"),
            speSkillCon("秒", SkillColorEnum.injuries),
            "",
            "奈奥格对自身周围半径",
            speSkillCon("450"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，生成",
            speSkillCon("20"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "，并为终端附加",
            speSkillCon("20点蚀爆值"),
            "",
            "",
            speSkillCon("【吞蚀者】形态自动技能冷却：", SkillColorEnum.injuries),
            speSkillCon("15"),
            speSkillCon("秒", SkillColorEnum.injuries),
            "",
            "奈奥格对自身周围半径",
            speSkillCon("450"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的蚀元素伤害"),
            "，消耗",
            speSkillCon("20"),
            "点",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "，并为终端附加",
            speSkillCon("25点蚀爆值")
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "童言有妄",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["释放条件", "100腐淖"]],
        "tab": ["自身增益", "拦截", "对空"],
        "sizeLevel": [
            ["24%", "150%"],
            ["28%", "175%"],
            ["32%", "200%"],
            ["36%", "225%"],
            ["38%", "238%"],
            ["40%", "250%"],
        ],
        "content": [
            "茜茜",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "达到",
            speSkillCon("100"),
            "点时，使奈奥格进入",
            speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
            "，并拦截茜茜周围",
            speSkillCon("1000"),
            "半径范围内投射物。此时施放主动和自动技能会消耗",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "，",
            speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
            "消耗完时退出",
            speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
            "。该形态下奈奥格伤害提高",
            speSkillCon("", 0, -1, 0),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "，且茜茜使全场敌对目标蚀元素抗性降低",
            speSkillCon("", 0, -1, 0),
            speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
            "（离场或死亡效果消失）。",
            "",
            "若【絮语弥响】次数耗尽，",
            speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
            "下奈奥格普通攻击伤害提高",
            speSkillCon("", 0, -1, 1),
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：于迷雾中降临",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.32次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "茜茜持续引导奈奥格攻击目标，奈奥格处于不同形态下攻击效果不同，并为终端附加",
            speSkillCon("3点蚀爆值"),
            "",
            speSkillCon("【幽语者】形态", SkillColorEnum.injuries),
            "：对当前单体目标造成",
            speSkillCon("317％最终攻击的蚀元素伤害"),
            "",
            speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
            "：对奈奥格身前半径",
            speSkillCon("450"),
            "扇形范围目标造成",
            speSkillCon("317％最终攻击的蚀元素伤害"),
        ],//普通攻击
        "specialContent": [
            [
                "茜茜指挥奈奥格进行战斗，奈奥格视为召唤物。敌对目标的大部分技能会优先攻击奈奥格，两者共享生命值且最大生命值提高",
                speSkillCon("30%"),
                "，同时受到的范围伤害降低",
                speSkillCon("50%"),
                "。奈奥格各个属性与茜茜相同。",
                "",
                speSkillCon("【幽语者】形态", SkillColorEnum.injuries),
                "，茜茜暴击率提高",
                speSkillCon("20%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "",
                speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                "，茜茜暴击率提高",
                speSkillCon("30%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "，暴击伤害提高",
                speSkillCon("30%"),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries)
            ],//零花本体特性
            [
                "奈奥格进入",
                speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                "时，所有",
                speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                "消耗降低",
                speSkillCon("50%"),
                "，且奈奥格",
                speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                "下茜茜额外攻击力提高",
                speSkillCon("45%"),
                speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成),
                "，主动技能回复速度提高",
                speSkillCon("60%"),
                speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度)
            ],//一花特性
            [
                "奈奥格造成的伤害提高",
                speSkillCon("25%"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "，同时异核技能",
                speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                "时对全场敌对目标蚀元素抗性降低效果翻倍"
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
            "name": "雷同",
            "limit": "【默契值13级】",
            "tips": [
                "“怎么样？好喝吗？”",
                "“……………………味道和药差不多呢。”",
                "茜茜默默将桂圆红枣茶推远了一些。",
            ],
            "recipe": [
                "自证方圆",
                "桂圆红枣茶",
                "七分糖",
                "热",
                "枸杞",
                "紫藤"
            ]
        },
        {
            "name": "奇怪用途",
            "limit": "【默契值6级】",
            "tips": [
                "“没想到你居然喜欢喝这个。”",
                "监督将姜汁可可往吧台上一放，还没等拿给茜茜，奈奥格便率先接了过去。",
                "“和普通的可可一样啊。”",
                "“……等一下！”监督突然伸手，又将杯子拿了回来。",
                "“完全没有姜汁的味道了。奈奥格你……”"
            ],
            "recipe": [
                "简约至上",
                "姜汁可可",
                "正常冰",
                "奶精球",
                "焦糖布丁",
                "三叶长签"
            ]
        },
        {
            "name": "大人的魔法",
            "limit": "【默契值1级】",
            "tips": [
                "也许是习惯了沉默不语的生活，即便是现在，茜茜也不太爱说话。有时和旁人说着说着，还会突然陷入沉默。",
                "————可和监督在一起，却从来没发生过这样的事。",
                "“监督，你怎么知道茜茜什么时候会沉默呢？”",
                "“是大人的魔法。”监督笑了笑，又一次适时地用一杯桃桃乌龙换走了茜茜手中的空杯子。"
            ],
            "recipe": [
                "竹节茶杯",
                "桃桃乌龙茶",
                "五分糖",
                "少冰",
                "椰果",
                "银杏叶"
            ]
        },
        {
            "name": "小心",
            "limit": "【默契值1级】",
            "tips": [
                "“唉，小朋友不可以喝咖啡。”",
                "“是给景姐姐的。她看公文的时候经常喝……”",
                "茜茜抓着奈奥格的手臂，几不可查地蜷缩起身体。",
                "“还是说……茜茜又做了不好的事？”"
            ],
            "recipe": [
                "熊熊杯",
                "好椰拿铁",
                "椰浆",
                "低因",
                "圆柄长签"
            ]
        },
        {
            "name": "勇敢的心",
            "limit": "【默契值1级】",
            "tips": [
                "比起同龄人喜爱的甜食，茜茜喜欢尽可能地尝试那些新鲜事物。",
                "————即便它们“新鲜”得有些离奇了。",
                "“苏打水里放咸梅干？你确定？”",
                "“茜茜确定。”"
            ],
            "recipe": [
                "熊熊杯",
                "薄荷蜜柚苏打",
                "多冰",
                "咸梅干",
                "柠檬片"
            ]
        },
        {
            "name": "注意事项",
            "limit": "【默契值16级】",
            "tips": [
                "“牛奶……热的”",
                "“老板喜欢热的。”",
                "“啊，监督你怎么知道……”",
                "“你喜欢和小动物玩也不是一天两天了。啊，对了，在楼里遇到其他小动物的时候，记得先试一下他们会不会说话。”"
            ],
            "recipe": [
                "自证方圆",
                "甜牛乳",
                "无糖",
                "热",
                "全脂牛奶",
                "空心圆匙"
            ]
        },
        {
            "name": "抛接游戏",
            "limit": "【默契值18级】",
            "tips": [
                "“你在和奈奥格玩抛接游戏……？”",
                "“不、不可以吗？”茜茜啊的一下将汪汪饼干放回了吧台上。",
                "“我可以加入吗？”"
            ],
            "recipe": [
                "简约至上",
                "阿华田奶茶",
                "三分糖",
                "汪汪饼干",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "海水半蓝",
                "少冰",
                "柠檬汁",
                "芒果果冻"
            ],
            "ex": [420],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "杨枝甘露",
                "青提",
                "芒果果冻"
            ],
            "ex": [490],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "柚柚切颗NOW",
                "正常糖",
                "草莓"
            ],
            "ex": [540],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 茜茜 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 茜茜 }