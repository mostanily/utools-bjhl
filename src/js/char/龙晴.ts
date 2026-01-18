import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "护佑者", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.屏障水], "attr": "shui", "star": "6",
    "nameEn": "LONGQING", "tag": ["治疗", "屏障"], "originWorld": "海错", "orginChar": "原创",
    "cv": "翁媛", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"],
    "introText": "您好，我是龙晴，金鳞族的族长，非常感谢您能暂时收留我，如果有任何需要我帮忙的地方直接告诉我就好了。<br>什么？想听听我在海错的见闻？该从哪里说起好呢……",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "1/1f/klhybrly99vzdedjne2o5vjkjqhs543.png",
            "8/8d/4t4e8mlkbbpt7e6qz0w8e4ys0jdpzb6.png",
            "b/b8/c1oyiec05355qtdz5z5uo0i285owfu6.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "子非鱼",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
        "tab": ["自身增益", "友方增益", "回复", "屏障"],//技能标签
        "content": [
            "使全体友方同调者获得",
            speSkillCon("4"),
            "层水流屏障，屏障持续",
            speSkillCon("600"),
            "秒，在屏障持续期间使其受到投射物的伤害降低",
            speSkillCon("48%~80%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，受到其他类型的伤害降低",
            speSkillCon("12%~20%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "；同调者受到伤害后失去1层水流屏障",
            "",
            "每失去1层水流屏障时，回复其",
            speSkillCon("313%治愈力"),
            "的生命值，并召唤金鳞反击，对沿途敌人造成",
            speSkillCon("100%最终攻击的水元素伤害"),
            "，金鳞反击伤害视为自动技能伤害",
            "",
            "每2秒最多失去1层水流屏障"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "游无穷",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "10秒"]],
        "tab": ["回复"],
        "content": [
            "将琉璃珠扔出，琉璃珠会在友方之间回弹，最多回弹",
            speSkillCon("6"),
            "次，每次回弹将会治疗友方同调者",
            speSkillCon("188%治愈力"),
            "的生命值",
            "",
            "对处于友方屏障下的同调者，该次治疗额外提高",
            speSkillCon("20%"),
            speSkillCon("（治疗乘区·额外治疗）", SkillColorEnum.injuries)
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "知北往",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "90秒"]],
        "tab": ["友方增益", "屏障"],
        "content": [
            "驱动琉璃珠飞向指定位置展开半径",
            speSkillCon("500"),
            "范围",
            speSkillCon("较大强度"),
            "的球形屏障，使范围内友方基础减伤增加",
            speSkillCon("24%~40%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，同时完全抵御来自外界的敌方投射物攻击，并每秒对区域内敌人造成",
            speSkillCon("458%最终攻击的水元素伤害"),
            "、以",
            speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
            "击退效果，持续",
            speSkillCon("12"),
            "秒（总计造成",
            speSkillCon("5500%最终攻击的水元素伤害"),
            "）"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：长相护",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "召唤金鳞，对路径上的敌人",
            speSkillCon("100%最终攻击的水元素伤害"),
            "，游回时造成2次伤害"
        ],//普通攻击
        "specialContent": [
            [
                "无"
            ],//零花本体特性
            [
                "主动技能【子非鱼】为友方同调者提供的水流屏障提升至",
                speSkillCon("5"),
                "层，且屏障的保护层数可以被叠加"
            ],//一花特性
            [
                "主动技能【子非鱼】效果持续期间，同调者受到攻击召唤金鳞反击时，额外附加龙晴",
                speSkillCon("250%"),
                "自身专精值的伤害"
            ]//三花特性
        ]
    }
}
const skillTeseStrong: DefaultTeseSkillObj = {
    "name": "特性强化",
    "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "content": [
            "处于【子非鱼】的水流屏障下的队友每层水流屏障使主动技能回复速度提高",
            speSkillCon("10%"),
            speSkillCon("（[属性乘区·主动技能回复速度]", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
            "，最多提高100%"
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese,
    skillTeseStrong
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "咚！",
            "limit": "【默契值1级】",
            "tips": [
                "龙晴不喜欢椰子，因为小时候第一次钻出水面的时候，被刚好落下的椰子砸到了头。"
            ],
            "recipe": [
                "自证方圆",
                "好椰拿铁",
                "奶精球",
                "低因",
                "空心圆匙"
            ]
        },
        {
            "name": "养生？可以但没必要",
            "limit": "【默契值1级】",
            "tips": [
                "“龙晴是不是从一出生就生活在水里啊？”",
                "“恩，海错都是水嘛！”",
                "“一直泡在水里不会得关节炎吗？”",
                "“……你是在问一条鱼会不会得关节炎？”"
            ],
            "recipe": [
                "自证方圆",
                "枸杞菊花茶",
                "杨桃",
                "叶子冻",
                "紫藤"
            ]
        },
        {
            "name": "层次感",
            "limit": "【默契值5级】",
            "tips": [
                "酸酸的草莓中和了双倍糖的甜度，勉强能够入口。"
            ],
            "recipe": [
                "双莓之恋",
                "双倍糖",
                "热",
                "蜜桃冻"
            ]
        },
        {
            "name": "牛≠豹富",
            "limit": "【默契值6级】",
            "tips": [
                "“牛奶？那是什么？”",
                "“牛分泌的乳汁，哺育幼崽的。”",
                "“牛是什么？”",
                "“一种食草的大型哺乳动物。”",
                "“哺乳动物又是什么？”",
                "“就是……对了，豹富就是哺乳动物。”",
                "“……”",
                "“怎么还嫌弃起来了？”"
            ],
            "recipe": [
                "甜牛乳",
                "正常糖",
                "常温",
                "燕麦奶"
            ]
        },
        {
            "name": "别样体验",
            "limit": "【默契值13级】",
            "tips": [
                "龙晴喜欢这种火辣辣的感觉，和冰冷的海水是完全不同的体验。"
            ],
            "recipe": [
                "熊熊杯",
                "姜茶",
                "无糖",
                "常温",
                "精致纸伞"
            ]
        },
        {
            "name": "不能浪费",
            "limit": "【默契值18级】",
            "tips": [
                "超级喜欢的桃桃乌龙被做成了最不喜欢的样子，龙晴硬着头皮喝完了。"
            ],
            "recipe": [
                "桃桃乌龙茶",
                "正常糖",
                "正常冰",
                "椰果"
            ]
        },
        {
            "name": "湛蓝的故乡",
            "limit": "【默契值16级】",
            "tips": [
                "湛蓝的水波上漂浮着晶莹的浮冰，让龙晴想起了遥远的故乡。"
            ],
            "recipe": [
                "简约至上",
                "海水半蓝",
                "多冰",
                "芒果果冻",
                "枫叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "枸杞菊花茶",
                "枸杞",
                "叶子冻"
            ],
            "ex": [445],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "奶油芭蕾",
                "加双份",
                "正常",
                "全脂牛奶"
            ],
            "ex": [454],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 龙晴 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 龙晴 }