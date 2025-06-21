import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.强攻对地方块, MXLaohenEnum.愈伤澜起], "attr": "shui", "star": "6",
    "nameEn": "UNI", "tag": ["输出", "元素区域"], "originWorld": "斯奈菲尔", "orginChar": "原创",
    "cv": "豆奶", "openDate": "2024年05月30日", "resourse": ["定向共鸣·再见孤蓝之海", "常态共鸣·异世交汇"]
}

const Skill = [
    {
        "name": "群浪的叹息",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "格挡条破坏3"],//技能标签
            "sizeLevel": [
                ["350%", "1400%"],
                ["403%", "1610%"],
                ["455%", "1820%"],
                ["508%", "2030%"],
                ["560%", "2240%"],
                ["613%", "2450%"],
                ["665%", "2660%"],
                ["718%", "2870%"],
                ["770%", "3080%"],
                ["805%", "3220%"],
                ["840%", "3360%"],
                ["875%", "3500%"],
                ["910%", "3640%"],
                ["945%", "3780%"],
                ["980%", "3920%"]
            ],
            "content": [
                "向自身前方",
                speSkillCon("1000"),
                "范围卷起海浪，海浪对每个敌方造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的水元素伤害"),
                "，并附带破坏",
                speSkillCon("3段格挡条"),
                "效果；海浪对目标造成暴击时，使自身获得",
                speSkillCon("2"),
                "层",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                "效果。",
                "",
                "而后冲向目标位置，对半径",
                speSkillCon("250"),
                "范围内最多",
                speSkillCon("3"),
                "个敌人（优先精英及首领目标）造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的水元素伤害"),
                "，并使目标基础减伤降低",
                speSkillCon("50%"),
                speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                "（该效果属于",
                speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                "），对同一目标仅可施加一层该效果，尤尼离场或重伤时该效果消失。",
                "",
                "技能结束时额外获得",
                speSkillCon("5"),
                "层",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑)
            ]//满级技能内容描述
        }
    },
    {
        "name": "海流的邀约",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "25秒"], ["次数", "3"]],
            "tab": ["水区域", "自身增益", "伤害", "格挡条破坏3"],
            "sizeLevel": [
                ["600%", "1000%"],
                ["690%", "1150%"],
                ["780%", "1300%"],
                ["870%", "1450%"],
                ["960%", "1600%"],
                ["1050%", "1750%"],
                ["1140%", "1900%"],
                ["1230%", "2050%"],
                ["1320%", "2200%"],
                ["1380%", "2300%"],
                ["1440%", "2400%"],
                ["1500%", "2500%"],
                ["1560%", "2600%"],
                ["1620%", "2700%"],
                ["1680%", "2800%"]
            ],
            "content": [
                "被动：每隔",
                speSkillCon("15"),
                "秒获得",
                speSkillCon("5"),
                "层",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                "效果",
                "",
                "主动：汇聚水流，以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "牵引自身周围半径",
                speSkillCon("500"),
                "的目标，造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的水元素伤害"),
                "，并附带破坏",
                speSkillCon("3段格挡条"),
                "效果",
                "",
                "而后以水流冲击目标，形成",
                speSkillCon("300"),
                "半径范围的水元素区域，并造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的水元素伤害"),
                "，对目标造成暴击时，使自身获得2层",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                "效果。",
                "",
                "技能结束时额外获得5层",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                "效果。"
            ]
        }
    },
    {
        "name": "潮汐的盛宴",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["水区域", "伤害", "格挡条破坏3"],
            "sizeLevel": [
                ["2400%"],
                ["2800%"],
                ["3200%"],
                ["3600%"],
                ["3800%"],
                ["4000%"],
            ],
            "content": [
                "对自身周围半径",
                speSkillCon("750"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的水元素伤害"),
                "，消耗自身",
                speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                "，每层使该伤害提升",
                speSkillCon("0.6%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "。",
                "",
                "在每个友方同调者位置生成半径",
                speSkillCon("150"),
                "的水元素区域。",
                "",
                "为自身回复1次主动技能【海流的邀约】次数，并清空指令冷却时间。"
            ]
        }
    },
    {
        "name": "特性：晨光如常照耀",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
            "atType": ["群体", "格挡条破坏1"],
            "content": [
                "对身前半径",
                speSkillCon("300"),
                "范围的目标造成",
                speSkillCon("150%最终攻击的水元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "尤尼处于水元素区域时暴击率增加",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，且每",
                    speSkillCon("2"),
                    "秒回复",
                    speSkillCon("3%最大生命值"),
                    "。",
                    "",
                    "通过主动技能可获得",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "层数，异核技能【潮汐的盛宴】消耗",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "层数提升伤害。",
                    "",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "层数上限",
                    speSkillCon("50"),
                    "。"
                ],//零花本体特性
                [
                    "主动技能【群浪的叹息】的伤害提升",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，且技能结束时额外获得",
                    speSkillCon("5"),
                    "层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑)
                ],//一花特性
                [
                    "尤尼在水元素区域时，自身暴击伤害提高",
                    speSkillCon("35%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "，并使除自身外的其他友方同调者提升",
                    speSkillCon("20%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "非典型",
            "limit": "【默契值1级】",
            "tips": [
                "“啊，我忘记加咸梅干了，稍等一下……好了。”",
                "“……”",
                "“怎么不喝？”",
                "“太冰了，再等等吧。”",
                "“酸梅汤里没加冰啊……只是冰镇的也不行？你还真是非典型斯奈菲尔人。不过也对，你那个时候，斯奈菲尔还没有那么寒冷。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "冰镇酸梅汤",
                "五分糖",
                "咸梅干",
                "三叶长签"
            ]
        },
        {
            "name": "出海的心？",
            "limit": "【默契值4级】",
            "tips": [
                "“船上的水手饮用烈酒是为了驱赶寒冷与潮湿，陆地上的人又是为了什么呢？体验在海上那种晕乎乎的感觉吗？”",
                "“呃……也许？”",
                "“看来每个人都有一颗出海的心啊。”",
                "尤尼端起面前的沉金记忆，满意地品了一口。"
            ],
            "recipe": [
                "棱纹马克杯",
                "沉金记忆",
                "无糖",
                "柠檬汁",
                "银杏叶"
            ]
        },
        {
            "name": "水手习惯",
            "limit": "【默契值6级】",
            "tips": [
                "“白桃芝士奶盖，五分糖……常温……OK！尤尼你要中杯还是大杯？”",
                "“这个。”",
                "“扎啤杯！？！？！？”",
                "“在船上，我都是用这个喝水的，怎么了吗？”"
            ],
            "recipe": [
                "扎啤杯",
                "白桃芝士奶盖",
                "五分糖",
                "常温",
                "精致纸伞"
            ]
        },
        {
            "name": "速溶风味",
            "limit": "【默契值16级】",
            "tips": [
                "“尤尼，你确定要加很多糖浆？”",
                "“嗯，还要低因的。”",
                "“这……明明是我现磨手冲的，但是喝起来完全就是市面上贩售的速溶饮料啊……”",
                "“没关系，我就喜欢这种速溶风味。”"
            ],
            "recipe": [
                "扎啤杯",
                "经典特浓咖啡",
                "糖浆",
                "低因",
                "圆柄长签"
            ]
        },
        {
            "name": "难掩震惊",
            "limit": "【默契值1级】",
            "tips": [
                "“不知道在其他异世界航行会是什么感觉……”",
                "“其实，有些异世界至今都没有发现‘海’的存在。”",
                "“这样啊……”",
                "尤尼的语气平稳，可她的行动出卖了她动摇的内心——她就连自己加了双次盐都没发现。"
            ],
            "recipe": [
                "经典搪瓷杯",
                "黎威尔日升",
                "椰浆",
                "盐",
                "西瓜",
                "空心圆匙"
            ]
        },
        {
            "name": "淡水的珍贵",
            "limit": "【默契值13级】",
            "tips": [
                "“寻常的白开水就够了吗？”",
                "“嗯。海上的一杯淡水已经足够珍贵。”",
                "“……不管怎么样我还是给你加根水果签吧！”"
            ],
            "recipe": [
                "航海时代",
                "白开水",
                "常温",
                "盐",
                "水果签"
            ]
        },
        {
            "name": "波光粼粼",
            "limit": "【默契值18级】",
            "tips": [
                "“这真的很像海水的颜色……”",
                "“具体来说，更像是在晨光映照下半透的海面。”",
                "“你描述得可真具体。”",
                "尤尼看向监督，水色的眼眸中波光粼粼。",
                "“……当然了。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "海水半蓝",
                "少冰",
                "苦味素",
                "茶冻",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "甜牛乳",
                "无糖",
                "常温",
                "全脂牛奶"
            ],
            "ex": [462, 517, 564, 615],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "蜂蜜啤酒",
                "偏淡",
                "常温"
            ],
            "ex": [470, 526, 574, 626],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "白开水",
                "柠檬汁",
                "常温"
            ],
            "ex": [495, 554, 604, 659],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 尤尼 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 尤尼 }