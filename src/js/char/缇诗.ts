import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.利刃三角α型, MXLaohenEnum.雷核释力], "attr": "lei", "star": "6",
    "nameEn": "TISHI", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "虫虫", "openDate": "2024年10月10日", "resourse": ["定向共鸣·凡我之至"]
}

const Skill = [
    {
        "name": "元能突变",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益", "对空"],//技能标签
            "content": [
                "对目标区域造成",
                speSkillCon("3750%最终攻击的雷元素伤害"),
                "，并对路径上的敌方造成",
                speSkillCon("300%最终攻击的雷元素伤害"),
                "",
                "技能施放结束后提高1级自身",
                speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                "强度"
            ]//满级技能内容描述
        }
    },
    {
        "name": "再生序列",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
            "tab": ["伤害", "自身增益", "负面状态", "对空"],
            "content": [
                speSkillCon("仅「重组酶」状态下可主动施放：", SkillColorEnum.injuries),
                "",
                "制造电能喷发区域，每",
                speSkillCon("3"),
                "秒喷发对区域内目标造成伤害，喷发造成",
                speSkillCon("650%最终攻击的雷元素伤害"),
                "，喷发区域持续",
                speSkillCon("21"),
                "秒（预计对每个目标最高造成总计",
                speSkillCon("4550%最终攻击的雷元素伤害"),
                "），缇诗离场或重伤时该效果消失",
                "",
                "技能施放结束后提高1级自身",
                speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                "强度，并回复1次",
                speSkillCon("【元能突变】", SkillColorEnum.injuries),
                "技能次数",
                "",
                speSkillCon("被动：", SkillColorEnum.injuries),
                "当场上存在电能喷发区域时，普通攻击可降低目标",
                speSkillCon("25%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "雷元素抗性，抗性降低效果持续",
                speSkillCon("3"),
                "秒，可重复刷新。（该被动效果不属于自动技能）"
            ]
        }
    },
    {
        "name": "染色质崩解",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "45秒"]],
            "tab": ["伤害", "自身增益", "对空"],
            "content": [
                "缇诗化身成能量电球，对选中区域进行环绕打击，每次打击对半径",
                speSkillCon("500"),
                "范围内目标造成",
                speSkillCon("500%最终攻击的雷元素伤害"),
                "，共",
                speSkillCon("6"),
                "次，越靠近中心的敌人受到的攻击次数越高，对同一敌人造成多次打击时造成原伤害的",
                speSkillCon("20%"),
                "；最后冲向选中点，对半径",
                speSkillCon("800"),
                "范围内目标造成",
                speSkillCon("3500%最终攻击的雷元素伤害"),
                "",
                "施放该技能提高缇诗",
                speSkillCon("30%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "暴击率和",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                "暴击伤害，持续",
                speSkillCon("50"),
                "秒，重复触发刷新持续时间"
            ]
        }
    },
    {
        "name": "特性：基因标记",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1000"], ["攻击速度", "0.71次每秒"]],
            "atType": ["群体", "对空"],
            "content": [
                "武器飞出并飞回，每次对路径上的目标造成",
                speSkillCon("60%最终攻击的雷元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "每隔20秒获得",
                    speSkillCon("「重组酶」状态", SkillColorEnum.injuries),
                    "，拥有",
                    speSkillCon("「重组酶」状态", SkillColorEnum.injuries),
                    "时可以施放【再生序列】",
                    "",
                    "通过主动技能可提升自身",
                    speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                    "强度，达到强度Ⅲ后不再提升",
                    "",
                    "强度Ⅰ：主动技能回复速度提高",
                    speSkillCon("100%"),
                    speSkillCon("（[属性乘区·主动技能回复速度]）", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                    "",
                    "强度Ⅱ：主动技能暴击时伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "",
                    "强度Ⅲ：自身提高",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精)
                ],//零花本体特性
                [
                    "登场时异核充能",
                    speSkillCon("30"),
                    "秒，且",
                    speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                    "强度Ⅲ级后自身所有伤害忽略目标基础减伤",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                ],//一花特性
                [
                    "异核充能时间减少",
                    speSkillCon("15"),
                    "秒，",
                    speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                    "强度Ⅲ后，主动技能伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "应尝尽尝",
            "limit": "【默契值13级】",
            "tips": [
                "“你明知自己不喜欢放太多糖的饮料，为什么还要点双倍糖的阿华田奶茶？”",
                "“……如果可以，我想什么都尝试一下。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "阿华田奶茶",
                "双倍糖",
                "珍珠",
                "紫藤"
            ]
        },
        {
            "name": "花开若有时",
            "limit": "【默契值1级】",
            "tips": [
                "“你盯着这杯花茶好久了……是太烫了吗？”",
                "“不。我只是在想……我还是更喜欢它们盛放的模样。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "德里亚德风味花茶",
                "热",
                "茶冻",
                "迷迭香"
            ]
        },
        {
            "name": "打包带走",
            "limit": "【默契值1级】",
            "tips": [
                "“监督，我可以打包一份茉茉奶绿带走吗？三分糖、少冰、需要加蜜桃冻。”",
                "“当然可以。你很喜欢这个口味吗？”",
                "“纳加尔喜欢。”",
                "“……啊？”"
            ],
            "recipe": [
                "航海时代",
                "茉茉奶绿",
                "三分糖",
                "少冰",
                "蜜桃冻",
                "精致纸伞"
            ]
        },
        {
            "name": "沙漠孤夜凉",
            "limit": "【默契值4级】",
            "tips": [
                "“没想到你居然会喜欢喝这个。”",
                "“沙漠的夜晚很冷，也很漫长……一杯热腾腾的姜汁可可能够陪伴我很久。”"
            ],
            "recipe": [
                "扎啤杯",
                "姜汁可可",
                "常温",
                "糖浆",
                "咖啡冻",
                "圆匙"
            ]
        },
        {
            "name": "进步",
            "limit": "【默契值10级】",
            "tips": [
                "“我还记得你第一次喝苏打水的时候，被吓得不轻……没想到这么快就喜欢上了。”",
                "“嗯。气泡在舌尖跳动的感觉很有趣。要是再加上几粒咸梅干和冰块——监督，你笑什么？”",
                "“没想到一段时间不见，你居然能流利地说长难句了，有点欣慰。”"
            ],
            "recipe": [
                "棱纹马克杯",
                "冰镇苏打水",
                "正常冰",
                "咸梅干",
                "银杏叶"
            ]
        },
        {
            "name": "愁",
            "limit": "【默契值13级】",
            "tips": [
                "“监督，你为什么突然停下了？”",
                "“我突然意识到一件事……”",
                "“什么？”",
                "“虽然你的身体各项机能与成人无异，但在物理意义上你只存在两年时间……我真的可以给你提供这杯极夜马戏团吗？”",
                "“好问题。也许我们该边喝边谈。”",
                "“？”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "极夜马戏团",
                "盐",
                "正常",
                "蓝莓",
                "心形插签"
            ]
        },
        {
            "name": "海",
            "limit": "【默契值18级】",
            "tips": [
                "令人惊奇的是，缇诗经常做梦。",
                "在她的梦中，总有一抹蓝。",
                "那是某一日，无端出现在无垠荒漠里的海。",
                "海说：“那么我们重新认识一下。你好，缇诗小姐，很高兴认识你。”",
                "“……谢谢，我也很高兴认识你。”"
            ],
            "recipe": [
                "航海时代",
                "海水半蓝",
                "少冰",
                "柠檬汁",
                "芒果果冻",
                "水果签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "柚柚切颗NOW",
                "五分糖",
                "草莓"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "鲜榨雪梨汁",
                "常温",
                "茶冻"
            ],
            "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 缇诗 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 缇诗 }