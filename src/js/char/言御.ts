import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.刺骨寒意], "attr": "shuang", "star": "6",
    "nameEn": "BOREAS", "tag": ["支援", "治疗", "控场"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "梁达伟", "openDate": "2024年03月14日",
    "resourse": ["定向共鸣·夜幕下的本相", "常态共鸣·森罗万象"], "laohenLink": LaohenNameEnum.潮湿前路,
    "introText": "御雀通信负责人，言御，感谢贵司的慷慨投资……相信今后，我们会有很多见面的机会。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "6/62/5emx1do10ihkwxvh1u07784wvv2yldd.png",
            "f/f0/ldqtzl1stpo9k5ydmwe39zdxb5lv7nh.png",
            "4/44/ijmelkmae81qjsqownhi92ln0fi9nrx.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["无栖"],
            "imgs": [
                "c/c2/abrgmutewrl65v80t3o1u9df58g063t.png"
            ],
            "listImg": [
                "5/52/4ei1yb1nc2l6e3adex8ucy4piax40gj.png"
            ]
        }
    ]
}

const skill1: DefaultNormalSkillObj = {
    "name": "冰点算法",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
        "tab": ["回复"],//技能标签
        "content": [
            "回收全体友方同调者当前的",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "，分摊给全体友方同调者转化为护盾（将计入友方同调者各自的受治疗加成效果影响）",
            "",
            "为全体友方同调者额外施加",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "，伤害抵挡量相当于言御自身",
            speSkillCon("1000%治愈力"),
            "",
            "若施加",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "后，友方同调者目标生命值低于100%，则将转化",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "治疗生命值（每点",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "回复的生命值将计入友方同调者各自的受治疗加成效果影响）"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "全量加密",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "10秒"], ["次数", "3"]],
        "tab": ["伤害", "友方增益", "自身增益", "负面状态"],
        "content": [
            speSkillCon("被动", SkillColorEnum.injuries),
            "：每隔",
            speSkillCon("10"),
            "秒，为全体友方同调者施加",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "，伤害抵挡量相当于言御自身",
            speSkillCon("163%治愈力"),
            "（开战时自动技能充能增加80%）",
            "",
            speSkillCon("主动"),
            "：为一名选中的友方同调者赋予",
            speSkillCon("50%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，召唤物提升100%暴击率，持续",
            speSkillCon("15"),
            "秒，并为选中的友方同调者施加",
            speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
            "效果，使目标下一次普通攻击附带半径",
            speSkillCon("300"),
            "范围霜元素伤害，基础伤害为",
            speSkillCon("800%"),
            "言御最终攻击力（该伤害效果视作主动技能伤害），且每",
            speSkillCon("6"),
            "秒额外为该友方同调者施加1次",
            speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
            "效果"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "零度通信",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "80秒"]],
        "tab": ["伤害", "自身增益", "友方增益"],
        "content": [
            "为场上友方水、雷、霜元素同调者施加",
            speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
            "效果，使同调者下一次普通攻击附带半径",
            speSkillCon("300"),
            "范围霜元素伤害，基础伤害为",
            speSkillCon("2500%"),
            "言御最终攻击力（该伤害效果视作异核技能伤害）",
            "",
            "为全体友方同调者施加",
            speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
            speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
            "，伤害抵挡量相当于言御自身",
            speSkillCon("900%治愈力"),
            "",
            "言御以自身为中心对半径",
            speSkillCon("500"),
            "范围内的所有敌人造成",
            speSkillCon("1200%最终攻击的霜元素伤害"),
            "，并冻结命中的目标",
            speSkillCon("3"),
            "秒",
            "",
            "潮湿环境下，将直接生成相应范围的霜区域"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：态势感知",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "向当前目标发射冰刃，对路径上的目标造成",
            speSkillCon("150%最终攻击的霜元素伤害"),
            "",
            "每三次普通攻击中第三次会触发",
            speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
            "效果，造成半径",
            speSkillCon("100"),
            "范围霜元素伤害，基础伤害为",
            speSkillCon("150%"),
            "言御最终攻击力（该伤害效果视作普通攻击伤害）"
        ],//普通攻击
        "specialContent": [
            [
                "言御自身造成的霜元素伤害使敌人水、雷元素抗性降低",
                speSkillCon("10%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，霜元素抗性降低",
                speSkillCon("20%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续",
                speSkillCon("15"),
                "秒，重复触发将会刷新效果的持续时间",
                "",
                speSkillCon("言御可为友方同调者施加「冰点协议」：", SkillColorEnum.injuries),
                "",
                "为友方同调者抵御伤害，施加伤害抵挡量时，将不计入目标的受治疗加成（同调者身上存在的",
                speSkillConWithImg(SkillDescStatusImg.言御冰点协议),
                speSkillCon("「冰点协议」", SkillColorEnum.injuries),
                "最大不超过言御最大生命值的2倍）",
                "",
                speSkillCon("言御可为友方同调者施加「极寒测试」：", SkillColorEnum.injuries),
                "",
                "使友方同调者下一次普通攻击时，以普通攻击目标为中心，造成一次基于言御最终攻击力的范围霜元素伤害,该伤害在“潮湿”环境下会直接生成霜元素区域。极寒测试视为友方造成的伤害，除最终攻击力外的所有属性使用友方自身的加成"
            ],//零花本体特性
            [
                "言御每3次普通攻击触发的",
                speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                "范围提升至",
                speSkillCon("300"),
                "；若敌对目标位于霜区域上时，则伤害来源为言御的",
                speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                "会额外使目标霜元素抗性降低",
                speSkillCon("50%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续",
                speSkillCon("15"),
                "秒，重复触发会刷新效果的持续时间"
            ],//一花特性
            [
                "【全量加密】的主动技能效果中额外附加",
                speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                "的间隔降低至",
                speSkillCon("3"),
                "秒；霜元素同调者通过【全量加密】触发的",
                speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                "伤害提升",
                speSkillCon("60%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
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
            "name": "“旧事”重提",
            "limit": "【默契值1级】",
            "tips": [
                "“监督，我可不是我妹妹。”言御将面前盛着热牛奶的杯子推远了些。",
                "“这样啊，‘甜蜜幻境’。”",
                "“……说好了不提了。”"
            ],
            "recipe": [
                "自证方圆",
                "甜牛乳",
                "正常糖",
                "热",
                "全脂牛奶",
                "经典长签"
            ]
        },
        {
            "name": "喜恶分明",
            "limit": "【默契值1级】",
            "tips": [
                "“不爱喝酒？”",
                "“嗯。”言御看了看，“而且还是……甜的。”",
                "“只加了一点点蜂蜜啦。”"
            ],
            "recipe": [
                "简约至上",
                "蜂蜜啤酒",
                "正常冰",
                "偏烈",
                "三叶长签"
            ]
        },
        {
            "name": "名字欺诈",
            "limit": "【默契值5级】",
            "tips": [
                "言御今天显得格外的沉默，一口接一口啜饮着竹节茶杯里的液体。",
                "“等下！你在喝酒！”",
                "“？”言御眯起了眼，“……可是它叫干苹果。”",
                "“也有威士忌啦！”"
            ],
            "recipe": [
                "竹节茶杯",
                "干苹果",
                "少冰",
                "偏淡",
                "奇异果片",
                "柠檬片"
            ]
        },
        {
            "name": "“同道中人”",
            "limit": "【默契值4级】",
            "tips": [
                "“……想喝什么？”",
                "“咖啡吧。加双份浓缩液。”言御揉了揉太阳穴，“等会儿还要去加班。”",
                "“哈、哈，我等会也……唉，算了，我也来一杯吧。”",
                "两人不约而同地叹了口气。"
            ],
            "recipe": [
                "自证方圆",
                "经典特浓咖啡",
                "糖浆",
                "加双份",
                "原味雪顶",
                "白玉兰"
            ]
        },
        {
            "name": "有话直说",
            "limit": "【默契值18级】",
            "tips": [
                "“言先生，你也不希望我把你用熊熊杯的可爱照片传到Chatmore吧？”",
                "“……你想做什么？”",
                "“咳，我们在伊南纳有个援助建立信息基站的项目出了点技术问题，想让你帮忙看看。”",
                "“……监督，这种事，直说就可以了。”",
                "“直说……这不符合某人的风格吧~”",
                "“咳。”"
            ],
            "recipe": [
                "熊熊杯",
                "冰镇酸梅汤",
                "三分糖",
                "蜜桃冻",
                "迷迭香"
            ]
        },
        {
            "name": "反将一军",
            "limit": "【默契值6级】",
            "tips": [
                "“听说白毛猫猫中听不见的比例格外高呢。”",
                "“监督，你刚刚说什么？”",
                "“……没什么。”",
                "看着监督狐疑的表情，言御端起雪梨汁满足地喝了一口。"
            ],
            "recipe": [
                "简约至上",
                "鲜榨雪梨汁",
                "常温",
                "椰果",
                "精致纸伞"
            ]
        },
        {
            "name": "变化……？",
            "limit": "【默契值1级】",
            "tips": [
                "“你知道你妹妹也很爱喝薄荷蜜柚苏打吗？”",
                "“当然。”",
                "“啊？你知道？可是她说——”",
                "“最近刚知道的——从‘甜蜜幻境’出来后。说起来，还要多谢监督。”"
            ],
            "recipe": [
                "竹节茶杯",
                "薄荷蜜柚苏打",
                "少冰",
                "叶子冻",
                "银杏叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "薄荷蜜柚苏打",
                "常温",
                "叶子冻"
            ],
            "ex": [540],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "鲜榨雪梨汁",
                "常温",
                "椰果"
            ],
            "ex": [544],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "玻璃橘子",
                "少冰",
                "芒果果冻"
            ],
            "ex": [558],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 言御 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 言御 }