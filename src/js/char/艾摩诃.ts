import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "游徒", "skill": [MXLaohenEnum.特殊减伤对空, MXLaohenEnum.隐匿其中], "attr": "lei", "star": "4",
    "nameEn": "EMAHA", "tag": ["输出", "生存"], "originWorld": "夜摩", "orginChar": "原创",
    "cv": "鹏小胖", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "艾摩诃，夜摩国女王陛下亲卫。在找到回去的方法之前，听候您的调遣……请问你们这里吃饭的地方在哪？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "1/1f/kehp2lvycdanr8siqxk72m390kkn6ih.png",
            "a/a9/nl7mnejxmd4486jvf0fd8x8sd0umd68.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "爆裂",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害"],//技能标签
        "content": [
            "朝指定方向发射5支爆裂箭矢，对命中的目标造成",
            speSkillCon("540%最终攻击的雷元素伤害"),
            "，并在短暂延迟后再次对目标半径",
            speSkillCon("150"),
            "范围内的所有敌人造成",
            speSkillCon("900%最终攻击的雷元素伤害")
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "伏击",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
        "tab": ["自身增益", "回复", "拦截"],
        "content": [
            "遁入暗影中，进入",
            speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
            "状态，不会被优先攻击",
            "",
            "普通攻击将额外造成",
            speSkillCon("313%最终攻击的雷元素伤害"),
            "，且每秒回复",
            speSkillCon("3%最大生命值"),
            "，持续",
            speSkillCon("20"),
            "秒",
            "",
            "在此期间普通攻击将优先拦截敌方投射物"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "围猎",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "60秒"]],
        "tab": ["伤害", "拦截"],
        "content": [
            "对半径",
            speSkillCon("350"),
            "范围内的敌人造成",
            speSkillCon("3900%最终攻击的雷元素伤害"),
            "，并拦截敌方投射物"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：猎人本能",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.80次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "依次朝目标发射1支箭、2支箭（伤害减半）、呈扇形散开的3支箭，每次总计造成",
            speSkillCon("192%最终攻击的物理伤害")
        ],//普通攻击
        "specialContent": [
            [
                "拥有出色的清理敌方投射物及空中单位的能力"
            ],//零花本体特性
            [
                "普通攻击命中目标后对其叠加",
                speSkillCon("[猎人印记]", SkillColorEnum.normal, ToastSkillEnum.猎人印记),
                "，叠满",
                speSkillCon("5"),
                "层触发一次雷击效果，对范围",
                speSkillCon("150"),
                "的敌人造成",
                speSkillCon("200%最终攻击的雷元素伤害")
            ],//一花特性
            [
                "普通攻击造成的伤害提升",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
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
            "name": "能喝，信我",
            "limit": "【默契值1级】",
            "tips": [
                "“养生？”艾摩诃看着眼前的杯子，难得没有第一时间拿起杯子，“可是你还加了很多奇怪的东西。”",
                "“能喝，信我！”",
                "所有都盯着艾摩诃——等着他喝下这杯混合了提子果冻和薄荷的养生茶。"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "枸杞菊花茶",
                "青提",
                "叶子冻",
                "薄荷叶"
            ]
        },
        {
            "name": "至暗时刻",
            "limit": "【默契值1级】",
            "tips": [
                "“监督，你这里就没什么正常的饮料么？”",
                "“所以姜汁和可可到底为什么要放在一起……尚非乐都被难喝哭了……”瓦卡莎勉强从沙发里抬起头，含含糊糊地说。",
                "“监督刚刚是不是还放了糖浆和珍珠？呃，看起来更黑暗了。”长谣躲远了点，“喝完了不会和元桃桃一样去医务部吧？”",
                "“……”"
            ],
            "recipe": [
                "姜汁可可",
                "热",
                "糖浆",
                "珍珠"
            ]
        },
        {
            "name": "雪顶咖啡",
            "limit": "【默契值1级】",
            "tips": [
                "熬夜的最佳伴侣，觉得劲儿不够就再加一份咖啡因，觉得太苦就可以加份糖。",
                "记得带上勺子搅拌一下哦。"
            ],
            "recipe": [
                "经典格纹",
                "经典特浓咖啡",
                "糖包",
                "加一份",
                "原味雪顶",
                "空心圆匙"
            ]
        },
        {
            "name": "很怪，再喝一口",
            "limit": "【默契值1级】",
            "tips": [
                "恩利都特产，加盐会有特殊的风味。",
                "“这朵花能吃么？”艾摩诃嚼着冰块，看着杯口的装饰花问到。"
            ],
            "recipe": [
                "经典格纹",
                "恩利都苦啤兑苦咖",
                "多冰",
                "盐",
                "标准",
                "桂花"
            ]
        },
        {
            "name": "金色凤梨传说",
            "limit": "【默契值5级】",
            "tips": [
                "“这个颜色很像夜摩的一种酒。”",
                "“嗯？夜摩的酒叫什么？”",
                "“不知道。女王大人请阿兰那喝过。”",
                "“……那，好喝么？”",
                "“嗯嗯。”",
                "“这杯呢？”",
                "“一般。”",
                "“……………………”"
            ],
            "recipe": [
                "淑女风尚/青叶陶瓷杯",
                "酒酿凤梨",
                "三分糖",
                "少冰",
                "圆匙"
            ]
        },
        {
            "name": "受欢迎",
            "limit": "【默契值13级】",
            "tips": [
                "一杯冰镇的气泡水，再加点咸甜和清凉。",
                "“很凉，在夜摩应该会很受欢迎。”",
                "“……多谢夸奖？”",
                "“哦，就是这把伞太小了，没什么用。”",
                "“…………”"
            ],
            "recipe": [
                "鎏·金",
                "冰镇苏打水",
                "多冰",
                "咸梅干",
                "精致纸伞"
            ]
        },
        {
            "name": "芭蕾不是芭菲",
            "limit": "【默契值18级】",
            "tips": [
                "“芭菲是什么？”",
                "“嗯……芭菲是一种甜点，但是这两个字是芭蕾。”",
                "“哦，那芭蕾是什么？”",
                "“一种舞蹈的名字。”",
                "“那为什么这个水叫舞蹈的名字？”",
                "“呃，要再加点什么么？燕麦奶？再加一份咖啡？这个长签给你搅匀一下。”",
                "“都要，谢谢。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "奶油芭蕾",
                "燕麦奶",
                "偏烈",
                "加双份",
                "圆柄长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "恩利都苦啤兑苦咖",
                "加一份",
                "盐",
                "正常冰"
            ],
            "ex": [367],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "德里亚德风味花茶",
                "常温",
                "叶子冻"
            ],
            "ex": [393],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "黎威尔日升",
                "椰浆",
                "柠檬汁",
                "青提"
            ],
            "ex": [448],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "白开水",
                "柠檬汁",
                "常温"
            ],
            "ex": [495],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 艾摩诃 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 艾摩诃 }