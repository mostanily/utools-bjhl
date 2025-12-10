import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.自动瞄准系统方块α型, MXLaohenEnum.破碎打击], "attr": "yan", "star": "4",
    "nameEn": "HUORAN", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "小巫", "openDate": "2024年01月12日", "resourse": ["主线S0-3赠送", "常态共鸣"],
    "introText": "这地儿是你的？不错不错我喜欢！忘了介绍，我叫霍冉，以后有事直说，姐罩着你！",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "2/20/ph3u0mv9u8881tb6s8dgh09znbrexs4.png",
            "9/9a/mrysatce9wyh492kp42g7pyakocz3g4.png"
        ],
    }
}

const Skill = [
    {
        "name": "警告！路牌！",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "18秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "最大选敌数1", "格挡条破坏3"],//技能标签
            "content": [
                "对单个目标造成",
                speSkillCon("4500%最终攻击的炎元素伤害"),
                "，该次伤害附带",
                speSkillCon("30%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "额外暴击率提升，并使其",
                speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                "，持续",
                speSkillCon("6"),
                "秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "横扫街头",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "格挡条破坏2"],
            "content": [
                "对当前目标进行三连击，总计造成",
                speSkillCon("3750%最终攻击的炎元素伤害")
            ]
        }
    },
    {
        "name": "无名怒火",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "80秒"]],
            "tab": ["自身增益"],
            "content": [
                "增加自身",
                speSkillCon("120%"),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "攻击力，",
                speSkillCon("40%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "暴击率，",
                speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                "基础减伤，普通攻击变为炎元素伤害，持续",
                speSkillCon("30"),
                "秒"
            ]
        }
    },
    {
        "name": "特性：无畏",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "200"], ["攻击速度", "0.62次每秒"]],
            "atType": ["单体", "格挡条破坏1"],
            "content": [
                "用路牌挥砍面前的目标，对其造成",
                speSkillCon("192%最终攻击的物理伤害"),
                "",
                "近战范围没有敌人时，向远处目标扔出路牌，对敌人造成",
                speSkillCon("96%最终攻击的物理伤害"),
                "（远程攻击不附带格挡条破坏效果）"
            ],//普通攻击
            "specialContent": [
                [
                    "拥有较强的单体输出能力",
                    "",
                    "优先攻击精英及以上的敌方单位，造成的伤害总计提升",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，受到的伤害总计降低",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "主动技能【警告！路牌！】破坏敌方单位格挡能力大幅提高，额外提高",
                    speSkillCon("3段格挡条"),
                    "破坏"
                ],//一花特性
                [
                    "暴击率提升",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "有意见？",
            "limit": "【默契值1级】",
            "tips": [
                "“枸杞……黄瓜……咸梅干？监督你什么意思？”",
                "“没、没什么意思？你不是挺喜欢黄瓜和咸梅干的么？”",
                "“但我也不想喝菊花茶啊！把这杯打包给我小弟吧。”霍冉嘴里叼着圆匙，看着眼前的茶水一动不动。"
            ],
            "recipe": [
                "简约至上/竹节茶杯",
                "枸杞菊花茶",
                "黄瓜片",
                "咸梅干",
                "圆匙"
            ]
        },
        {
            "name": "不愿面对的特产",
            "limit": "【默契值1级】",
            "tips": [
                "“呸呸呸……又苦又涩，确定这是咖啡？？哦我知道了！这是不是就是小砚儿说难喝的那个什么咖啡啤酒！”",
                "“是啤酒咖啡。”",
                "“有什么区别……不是，你还加了苦和两份料？？”",
                "“……装饰花需要么？”"
            ],
            "recipe": [
                "简约至上",
                "恩利都苦啤兑苦咖",
                "少冰",
                "苦味素",
                "加一份",
                "紫藤"
            ]
        },
        {
            "name": "一杯奶茶",
            "limit": "【默契值4级】",
            "tips": [
                "“看起来像是元桃桃会喜欢的东西。”",
                "“确实，半糖少冰？”",
                "“再加份珍珠吧，我拿个签子扎青提吃。”"
            ],
            "recipe": [
                "青提啵啵奶茶",
                "五分糖",
                "少冰",
                "珍珠",
                "经典长签"
            ]
        },
        {
            "name": "拒绝熬夜",
            "limit": "【默契值5级】",
            "tips": [
                "“我还以为是奶茶，结果是奶油咖啡啊，那低因吧，今晚不能熬夜。”",
                "“为什么？”",
                "“明天还要一大早起来抢票！”",
                "“…………”"
            ],
            "recipe": [
                "奶油芭蕾",
                "全脂牛奶",
                "正常",
                "低因"
            ]
        },
        {
            "name": "头脑清醒的大姐头",
            "limit": "【默契值8级】",
            "tips": [
                "保持清醒的头脑，才能成为街头最拉风的人——霍冉如是说。",
                "",
                "",
                "“但这只是一杯薄荷苏——”",
                "“还有那么多冰呢！诶监督再加点茶冻呗。”"
            ],
            "recipe": [
                "竹节茶杯",
                "薄荷蜜柚苏打",
                "多冰",
                "茶冻",
                "枫叶"
            ]
        },
        {
            "name": "追星人的自我修养",
            "limit": "【默契值18级】",
            "tips": [
                "“啊啊啊啊啊是BS的联动奶茶！！！三分糖正常冰加一份椰果谢谢监督！！！”",
                "“哦再给我一根水果签！”",
                "“……我怀疑你今天急着来休息室目的就是这个……”",
                "“那近水楼台当然比外面排队强啊！外卖订单已经要等待一个半小时了！”",
                "“唉……”"
            ],
            "recipe": [
                "简约至上/自证方圆",
                "双莓之恋",
                "三分糖",
                "正常冰",
                "椰果",
                "水果签"
            ]
        },
        {
            "name": "月黑风高",
            "limit": "【默契值16级】",
            "tips": [
                "“黑月亮……这个名字……让我想起了以前的事情……”霍冉的声音难得的低下去，直到最后没了声音。",
                "“嗯？怎么了？”监督有些担心地放下调羹，“是你之前说的那个青面……”",
                "“让我想起来当年月黑风高出门赴约的日子！”",
                "“……加了份蓝莓，还有刚刚不小心手抖，可能有点苦……”"
            ],
            "recipe": [
                "自证方圆",
                "黑月亮",
                "少冰",
                "苦味素",
                "蓝莓",
                "经典长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "枸杞菊花茶",
                "枸杞",
                "咸梅干"
            ],
            "ex": [414, 463, 505],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "黎威尔日升",
                "糖包",
                "柠檬汁",
                "黄瓜片"
            ],
            "ex": [420, 470, 512],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "薄荷蜜柚苏打",
                "常温",
                "咸梅干"
            ],
            "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "惑星的艾琳",
                "苦味素",
                "原味雪顶"
            ],
            "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "双莓之恋",
                "五分糖",
                "常温",
                "蜜桃冻"
            ],
            "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 霍冉 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 霍冉 }