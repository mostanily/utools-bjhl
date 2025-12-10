import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.等待时机], "attr": "shui", "star": "5",
    "nameEn": "SAMBHEKA", "tag": ["击退", "元素区域"], "originWorld": "夜摩", "orginChar": "原创",
    "cv": "灯果", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "瓦卡莎，来自夜摩的祈雨祭司……有什么事等我睡醒了再说吧……",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "2/25/te81dt5lsftarqwggluzxz87dqtxfvj.png",
            "f/f0/66u501xqkyvddt1c7h6vjq8lxccva9o.png",
            "2/20/jnultzjcznq5ouqt2o93ouabukxrjph.png"
        ]
    }
}

const Skill = [
    {
        "name": "风天",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "对空", "持续施法"],//技能标签
            "content": [
                "持续施法，朝指定方向刮风吹散范围内的毒雾，持续对沿途敌人造成",
                speSkillCon("200%最终攻击的风元素伤害"),
                "并以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退目标，持续12秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "因坻之息",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["增益冷却", "15秒"], ["增益持续", "18秒"]],
            "tab": ["水区域", "伤害", "对空", "持续施法"],
            "content": [
                "祈求降雨，对场上随机位置半径",
                speSkillCon("300"),
                "范围内所有敌人每2秒造成",
                speSkillCon("125%最终攻击的水元素伤害"),
                "并逐渐生成水元素区域，持续",
                speSkillCon("18"),
                "秒",
                "",
                "期间有",
                speSkillCon("100%"),
                "概率落雷，对降雨区内随机一名敌人造成",
                speSkillCon("125%最终攻击的雷元素伤害")
            ]
        }
    },
    {
        "name": "婆罗那天地",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "120秒"]],
            "tab": ["水区域", "友方增益", "自身增益", "对空", "持续施法"],
            "content": [
                "持续施法，在持续施法期间将改变全场天气，并持续生成水元素区域，持续30秒。期间我方水元素同调者提升",
                speSkillCon("50%[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "，同时每隔一定时间降下落雷，对随机目标点范围",
                speSkillCon("150"),
                "内的敌人造成",
                speSkillCon("72%最终攻击的雷元素伤害"),
                "，雨势会随时间逐渐加大，落雷的频率和伤害随之提升（伤害最多提升100%）",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：休息一下",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "-"], ["攻击速度", "-"]],
            "atType": ["不攻击"],
            "content": [
                "技能未开启时不攻击"
            ],//普通攻击
            "specialContent": [
                [
                    "持续祈祷，使全场敌人水元素抗性降低",
                    speSkillCon("20%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，雷元素抗性降低",
                    speSkillCon("10%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，风元素抗性降低",
                    speSkillCon("10%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低)
                ],//零花本体特性
                [
                    "主动技能【风天】持续时间延长",
                    speSkillCon("6"),
                    "秒"
                ],//一花特性
                [
                    "驻场时，水元素同调者除异核技能外，其他技能的回复速度加快",
                    speSkillCon("15%")
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "咖啡奶油",
            "limit": "【默契值5级】",
            "tips": [
                "咖啡和奶油在杯中相撞，记得调整牛奶和咖啡因的比例。"
            ],
            "recipe": [
                "奶油芭蕾",
                "脱脂牛奶",
                "正常",
                "低因"
            ]
        },
        {
            "name": "“随便配配”",
            "limit": "【默契值6级】",
            "tips": [
                "“奶绿……是什么？绿色的？”",
                "“奶绿就是绿茶和牛——”",
                "“唉算了好麻烦，你随便配配，加份椰果就好了。”",
                "“…………你最好是。”"
            ],
            "recipe": [
                "茉茉奶绿",
                "五分糖",
                "正常冰",
                "椰果"
            ]
        },
        {
            "name": "枸杞的平方",
            "limit": "【默契值4级】",
            "tips": [
                "在这之前，瓦卡莎从来没觉得自己对杯子上的花纹这么感兴趣过。",
                "“一定要喝么……”",
                "“愿赌服输啊瓦卡莎小朋友。”",
                "“但是你怎么还偷偷加料啊？”"
            ],
            "recipe": [
                "双层叶纹",
                "枸杞菊花茶",
                "枸杞"
            ]
        },
        {
            "name": "普通气泡水",
            "limit": "【默契值13级】",
            "tips": [
                "“……好多冰……怎么还有点咸有点酸……”",
                "“这个蝴蝶结又是什么？”"
            ],
            "recipe": [
                "环口杯",
                "冰镇苏打水",
                "多冰",
                "咸梅干",
                "蝴蝶结"
            ]
        },
        {
            "name": "梅干搭档",
            "limit": "【默契值8级】",
            "tips": [
                "Chat to Chiu里风评两极分化的一款饮品，瓦卡莎意外地很喜欢，每当喝到她都会主动伸出手，往杯中加点梅子。",
                "“你喜欢梅子？”",
                "“不喜欢，但是在这里很好喝。”"
            ],
            "recipe": [
                "薄荷蜜柚苏打",
                "正常冰",
                "咸梅干"
            ]
        },
        {
            "name": "鲜榨果汁",
            "limit": "【默契值13级】",
            "tips": [
                "鲜榨的果汁中加入瓦卡莎最喜欢的配料，再搭配点绿色的小饰品，静静等着她的到来吧。"
            ],
            "recipe": [
                "环口杯",
                "鲜榨雪梨汁",
                "多冰",
                "椰果",
                "迷迭香"
            ]
        },
        {
            "name": "橘子和芒果",
            "limit": "【默契值18级】",
            "tips": [
                "“橘子和芒果像么？他们是好朋友么？”瓦卡莎咬着吸管，转着竹签扎制的小伞难得有精神。",
                "“为什么这么问？是发生了什么事么？”",
                "“老师留的作业。”",
                "“啊？”"
            ],
            "recipe": [
                "柯林杯",
                "玻璃橘子",
                "少冰",
                "芒果果冻",
                "精致纸伞"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "冰镇苏打水",
                "正常冰",
                "椰果"
            ],
            "ex": [425, 476, 519],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "茉茉奶绿",
                "三分糖",
                "正常冰",
                "椰果"
            ],
            "ex": [483, 542, 590],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "鲜榨雪梨汁",
                "正常冰",
                "椰果"
            ],
            "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "青提啵啵奶茶",
                "五分糖",
                "正常冰",
                "椰果"
            ],
            "ex": [560, 627, 683],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "玻璃橘子",
                "正常冰",
                "椰果"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 瓦卡莎 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 瓦卡莎 }