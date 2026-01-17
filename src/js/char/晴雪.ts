import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形α型, MXLaohenEnum.风刃侵蚀], "attr": "feng", "star": "6",
    "nameEn": "ELPIS", "tag": ["召唤", "输出", "支援"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭一",
    "cv": "朱雀橙", "openDate": "2024年08月29日", "resourse": ["定向共鸣·晴空龙吟"],
    "introText": "你的朋友，晴雪。这么多年过去，我们都还是老样子，真好。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "a/ae/83kr5olnds1hhs050ovkm6nh4d9ed98.png",
            "2/25/fb7wbvopbyazablqf9fkbcf7izdm32l.png",
            "f/fb/2vwrvb8i8akesda3wp5xdabxg47ak78.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["不息"],
            "imgs": [
                "a/aa/kn7dhmppnjycayyx9g4bzr8tzidorlz.png"
            ],
            "listImg": [
                "5/53/48zeckiw4k7wfu53py5cifbp9s8nqog.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "幻惑把戏",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "对空"],//技能标签
            "content": [
                "骑着魔法扫帚飞向目标区域，对目标区域半径",
                speSkillCon("500"),
                "范围造成",
                speSkillCon("300%最终攻击的风元素伤害"),
                "同时吹散毒雾区域，并留下「幻惑之影」，持续",
                speSkillCon("40"),
                "秒",
                "",
                "「幻惑之影」内每",
                speSkillCon("1"),
                "秒造成",
                speSkillCon("150%最终攻击的风元素伤害"),
                "，目标每受到一次该伤害将提升",
                speSkillCon("5%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "后续受到的幻惑之影伤害，最多提高",
                speSkillCon("100%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "（敌人离开「幻惑之影」范围5秒后该增伤效果消失）。",
                "",
                "「幻惑之影」区域内的敌方目标基础减伤降低",
                speSkillCon("50%"),
                speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                "（该效果属于",
                speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                "），且处于区域内的友方同调者每",
                speSkillCon("5"),
                "秒回复自身",
                speSkillCon("1%"),
                "最大生命值。",
                "",
                "（晴雪离场或重伤时「幻惑之影」效果消失）"
            ]//满级技能内容描述
        }
    },
    {
        "name": "乌乌之友",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],
            "tab": ["伤害", "召唤", "对空"],
            "content": [
                "自动技能：每隔",
                speSkillCon("5"),
                "秒，会召唤一只乌乌伴随左右，最多拥有",
                speSkillCon("6"),
                "只。当自身乌乌数量超过6只时，会自动消耗2只，每只对当前目标",
                speSkillCon("250"),
                "半径范围造成",
                speSkillCon("1000%最终攻击的风元素伤害"),
                "",
                "",
                "主动技能：消耗3只乌乌，每只对选中区域",
                speSkillCon("250"),
                "半径范围造成",
                speSkillCon("1750%最终攻击的风元素伤害")
            ]
        }
    },
    {
        "name": "外场全秀",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "友方增益", "拦截", "对空"],
            "content": [
                "对自身周围",
                speSkillCon("500"),
                "半径范围区域造成",
                speSkillCon("3500%最终攻击的风元素伤害"),
                "，并拦截范围内投射物，对已处于幻惑之影内的敌方额外造成",
                speSkillCon("900%最终攻击的风元素伤害"),
                "，并回复我方同调者",
                speSkillCon("12"),
                "秒异核充能，风元素同调者效果翻倍",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：旅行表演家",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.36次每秒"]],
            "atType": ["单体"],
            "content": [
                "对当前目标造成",
                speSkillCon("280%最终攻击的风元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "可召唤并驱使「乌乌」攻击目标，「乌乌」视为召唤物，且普通攻击每",
                    speSkillCon("4"),
                    "次获得1只「乌乌」。"
                ],//零花本体特性
                [
                    "自身处于「幻惑之影」内时，主动技能指令冷却回复加快",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·主动技能回复速度）", SkillColorEnum.injuries),
                    "。队友处于「幻惑之影」内额外攻击提高",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·额外攻击力加成）", SkillColorEnum.injuries),
                    "（晴雪离场或重伤时该效果消失）"
                ],//一花特性
                [
                    "每次普通攻击会使「乌乌」协同攻击目标造成1次",
                    speSkillCon("700%最终攻击的风元素伤害"),
                    "（该伤害属于召唤物伤害），自动技能回复「乌乌」的速度缩短至",
                    speSkillCon("3"),
                    "秒"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "海量",
            "limit": "【默契值13级】",
            "tips": [
                "“这不就是一杯加了点盐的白开水，你怎么喝得这么痛苦？”",
                "“不是难喝，就是有点烦……”",
                "“烦？”",
                "“作为一只龙，我每次都要喝好久好久才能在体内储备足够多的水。但是喝水的时候，我又干不了别的事，这真的很无聊！”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "白开水",
                "常温",
                "盐",
                "心形插签"
            ]
        },
        {
            "name": "有福同享？",
            "limit": "【默契值13级】",
            "tips": [
                "“酒的味道可真难喝啊——让乌乌、蛙蛙试试~”",
                "“喂。”",
                "“安心啦，我给它尝的是上面的青提。”"
            ],
            "recipe": [
                "经典搪瓷杯",
                "薄暮飞行",
                "苦味素",
                "偏烈",
                "青提",
                "三叶长签"
            ]
        },
        {
            "name": "龙的好奇心",
            "limit": "【默契值4级】",
            "tips": [
                "“呃啊，好苦！监督，这就是你平常喝的东西？”",
                "“跟你说了，你可能接受不了——你甚至加了双倍浓缩。”",
                "“我什么都想试一下嘛。”"
            ],
            "recipe": [
                "航海时代",
                "恩利都苦啤兑苦咖",
                "少冰",
                "盐",
                "加双份",
                "精致纸伞"
            ]
        },
        {
            "name": "藏不住",
            "limit": "【默契值1级】",
            "tips": [
                "“生活在德里亚德的那些小家伙真的很敏锐！”",
                "“每次还没看到我，他们就已经把耳朵竖起来了；我要是靠近一些，他们更是不知道跑到哪里去了。”",
                "“——明明我特意变回了人形的！”"
            ],
            "recipe": [
                "航海时代",
                "德里亚德风味花茶",
                "常温",
                "叶子冻",
                "水果签"
            ]
        },
        {
            "name": "飞行的终点",
            "limit": "【默契值1级】",
            "tips": [
                "“海水半蓝？好奇特的……啊啊啊，监督，我想起我是怎么来到森罗的了！”",
                "“我从乌瑞亚山巅启程，朝着东方一直飞一直飞，一路穿越埃特尔荒原，抵达极东之海，然后——我就到这里来了！”"
            ],
            "recipe": [
                "扎啤杯",
                "海水半蓝",
                "少冰",
                "柠檬汁",
                "长匙"
            ]
        },
        {
            "name": "完美之物",
            "limit": "【默契值10级】",
            "tips": [
                "“监督监督，你手里那个金灿灿的是什么！”",
                "“原来这个宝贝的名字叫做橘子啊。”",
                "“这圆润的外形、闪亮的色泽、清新的香气——决定了，我要在我的宝库里堆一座橘子山！”"
            ],
            "recipe": [
                "扎啤杯",
                "玻璃橘子",
                "少冰",
                "芒果果冻",
                "空心圆匙"
            ]
        },
        {
            "name": "狗……？",
            "limit": "【默契值18级】",
            "tips": [
                "“这个配牛奶吃的饼干好可爱啊，是按照小辛西亚做的吗？”",
                "“狗？那是什么？森罗的特有种吗？”",
                "“会汪汪叫的种族……？总感觉有些熟悉呢……在大裂变之前，我似乎遇见过……”"
            ],
            "recipe": [
                "棱纹马克杯",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "汪汪饼干",
                "银杏叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "冰镇苏打水",
                "少冰",
                "咸梅干"
            ],
            "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "玻璃橘子",
                "少冰",
                "椰果"
            ],
            "ex": [567, 635, 692],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "熊熊燕麦牛奶",
                "燕麦奶",
                "焦糖布丁"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 晴雪 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 晴雪 }