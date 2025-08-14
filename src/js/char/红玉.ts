import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.利刃三角β型, MXLaohenEnum.狂风卷袭], "attr": "feng", "star": "6",
    "nameEn": "SCARLETT", "tag": ["输出", "击退", "拦截"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
    "cv": "蔡娜", "openDate": "2024年02月01日", 
    "resourse": ["定向共鸣·玉照长夜·陈酒新酌", "常态共鸣·森罗万象"], "laohenLink":LaohenNameEnum.失途之日
}

const Skill = [
    {
        "name": "狩天",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "拦截", "穿透屏障"],//技能标签
            "content": [
                "短暂蓄力后，对指定区域内的敌人进行穿透射击，造成",
                speSkillCon("3000%最终攻击的风元素伤害"),
                "，同时击落空中单位及敌方投射物，并吹散范围内的毒雾",
                "",
                speSkillCon("「缉捕模式」下额外效果", SkillColorEnum.injuries),
                "",
                "弹道变宽，射击弹道后跟随一串震荡波，额外造成",
                speSkillCon("750%最终攻击的风元素伤害"),
                "",
                "【连击】：造成的伤害提升",
                speSkillCon("20%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
            ]//满级技能内容描述
        }
    },
    {
        "name": "猎逐",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],
            "tab": ["伤害", "自身增益", "持续施法"],
            "content": [
                "被动：每隔",
                speSkillCon("20"),
                "秒，提升自身",
                speSkillCon("50%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "基础攻击速度，持续",
                speSkillCon("15"),
                "秒",
                "",
                "主动：锁定单个敌人，以其为中心绕圈骑行，持续射击该目标，期间降低该目标",
                speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，总计发射50枚子弹，每次命中忽视其",
                speSkillCon("0.5%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "基础减伤，随命中次数提升，最高忽视",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "基础减伤，预计总计造成",
                speSkillCon("10000%最终攻击的风元素伤害"),
                "，对骑行路线上的敌人总计造成",
                speSkillCon("1250%最终攻击的风元素伤害"),
                "，期间自身受到伤害减免",
                speSkillCon("90%"),
                "，并免疫控制效果（若锁定的目标在子弹发射完毕前被击败，将结束绕圈骑行，并激活本技能的被动效果；若未被击败，该目标在后续",
                speSkillCon("45"),
                "秒内，红玉对其造成的普攻伤害，忽视其",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "基础减伤，「缉捕模式」下忽视",
                speSkillCon("25%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "基础减伤）",
                "",
                speSkillCon("「缉捕模式」下额外效果", SkillColorEnum.injuries),
                "",
                "最高忽视目标",
                speSkillCon("25%"),
                speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                "基础减伤，绕圈骑行对撞击到的敌人以",
                speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "造成击退效果"
            ]
        }
    },
    {
        "name": "赤红惩戒",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "自身增益", "穿透屏障"],
            "content": [
                "摩托启动「缉捕模式」",
                "",
                "第一次施放该技能所需等待时间减半",
                "",
                "骑摩托冲向目标区域，在目标区域外围绕圈狂飙，同时朝目标区域内持续射击，总计造成",
                speSkillCon("4500%最终攻击的风元素伤害"),
                "，然后拉起车头冲回原地，刹车后回头再蓄力射击区域内的敌人，造成",
                speSkillCon("500%最终攻击的风元素伤害"),
                "并以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "击退目标",
                "",
                "「缉捕模式」期间普通攻击伤害提高",
                speSkillCon("90%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "且普通攻击会额外弹射一个目标（只会弹射当前目标以外的敌方单位，即单目标情况下无法触发弹射），伤害同普通攻击伤害，「缉捕模式」持续",
                speSkillCon("30"),
                "秒"
            ]
        }
    },
    {
        "name": "特性：执法者",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向射击范围内的目标发射三发高速子弹，每发子弹造成",
                speSkillCon("90%最终攻击的风元素伤害"),
                "，优先攻击射程范围内的不同目标"
            ],//普通攻击
            "specialContent": [
                [
                    "执法者印记：对目标造成伤害时附加印记，会使其受到自身伤害提升",
                    speSkillCon("18%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("5"),
                    "秒"
                ],//零花本体特性
                [
                    "异核技能期间普通攻击伤害提高的效果提升至",
                    speSkillCon("150%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    speSkillCon("[执法者印记]", SkillColorEnum.normal, ToastSkillEnum.执法者印记),
                    "持续时间提升至",
                    speSkillCon("30"),
                    "秒，且伤害提升至",
                    speSkillCon("36%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "施放连击后友方同调者提高20％",
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                "，持续20秒，且【猎逐】被动触发时普通攻击获得与「缉捕模式」等同的强化效果（不与「缉捕模式」叠加）"
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "失误",
            "limit": "【默契值4级】",
            "tips": [
                "“熊熊燕麦牛奶？”红玉有些揶揄地看着监督。",
                "“我我我拿错了——”"
            ],
            "recipe": [
                "郁金香酒杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "焦糖布丁",
                "精致纸伞"
            ]
        },
        {
            "name": "曾几何时",
            "limit": "【默契值13级】",
            "tips": [
                "红玉还记得，小时候，不管父亲回来得多晚，他都会泡一杯热姜茶，和母亲说会话。",
                "两人靠在一块，聊聊今天都发生了什么，红玉是不是又长高了……",
                "曾几何时，红玉以为这样的日子会一直持续下去……"
            ],
            "recipe": [
                "蝶形香槟杯",
                "姜茶",
                "无糖",
                "热",
                "经典长签"
            ]
        },
        {
            "name": "苦酒入喉",
            "limit": "【默契值1级】",
            "tips": [
                "“红队喝苦啤兑苦酒还要加苦味素和双份浓缩啊？我光是听着，都觉得苦了……”",
                "“经历的多了，这酒自然就不苦了。”"
            ],
            "recipe": [
                "马天尼杯",
                "恩利都苦啤兑苦咖",
                "多冰",
                "苦味素",
                "加双份",
                "五叶长签"
            ]
        },
        {
            "name": "感同身受",
            "limit": "【默契值1级】",
            "tips": [
                "“再撑一撑。”红玉揉了揉太阳穴，饮下又一杯特浓咖啡，“红玉，你是最明白受害人家属的心情的……再撑一撑……”"
            ],
            "recipe": [
                "笛型香槟杯",
                "经典特浓咖啡",
                "糖包",
                "加双份",
                "圆匙"
            ]
        },
        {
            "name": "大声质问",
            "limit": "【默契值10级】",
            "tips": [
                "“夜色危情？”红玉望着杯中的茶冻忽然笑了起来，“那些妹妹也很喜欢请我喝这个。”",
                "“……你有几个好妹妹啊！”"
            ],
            "recipe": [
                "郁金香酒杯",
                "夜色危情",
                "多冰",
                "偏烈",
                "茶冻",
                "柠檬片"
            ]
        },
        {
            "name": "信任关系",
            "limit": "【默契值13级】",
            "tips": [
                "“配方不公开？”",
                "红玉皱着眉，缓缓放下手中的蝶形香槟杯。",
                "“监督，不管你遇到了什么麻烦的人或者事，‘红队’……还有‘红玉’，都会站在你身后，知道吗？”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "极夜马戏团",
                "柠檬汁",
                "偏烈",
                "奇异果片",
                "迷迭香"
            ]
        },
        {
            "name": "兜风去",
            "limit": "【默契值16级】",
            "tips": [
                "“今天就不了。”红玉将郁金香酒杯推远了一些。",
                "“你居然会拒绝薄暮飞行？这不是你最喜欢喝吗？我还加了叶子冻……”",
                "“唉，没办法，谁叫我今天打算带某人去兜个风~”红玉从吧台那端探过身来，“监督，我给你的头盔还在吧？”",
                "“在！！！！！！”"
            ],
            "recipe": [
                "马天尼杯",
                "薄暮飞行",
                "盐",
                "正常",
                "青提",
                "枫叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "银色青松",
                "盐",
                "正常"
            ],
            "ex": [519, 582, 634],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "极夜马戏团",
                "盐",
                "正常",
                "樱桃"
            ],
            "ex": [561, 628, 684],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 红玉 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 红玉 }