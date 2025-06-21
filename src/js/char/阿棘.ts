import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.核心充能菱形β型, MXLaohenEnum.蚀力渗透], "attr": "shi", "star": "5",
    "nameEn": "ACEO", "tag": ["控场", "生存"], "originWorld": "乌瑞亚", "orginChar": "原创",
    "cv": "时音", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "陷在糖里",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态"],//技能标签
            "content": [
                "朝指定扇形区域投掷棒棒糖，命中目标或到达最远处后炸开，对半径",
                speSkillCon("250"),
                "范围内的所有敌人造成",
                speSkillCon("950%最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("15点蚀爆值"),
                "；随后在地面产生粘液，使粘液上的地面单位敌人降低",
                speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，粘液持续存在",
                speSkillCon("20"),
                "秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "捉迷藏",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
            "tab": ["自身增益", "负面状态"],
            "content": [
                "被动：每隔",
                speSkillCon("10"),
                "秒强化自身普通攻击",
                "",
                "“常态”下可自动触发",
                "",
                "下一次普通攻击同时攻击3个目标，令目标降低",
                speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，持续",
                speSkillCon("3"),
                "秒",
                "",
                "“隐匿姿态”下可自动触发",
                "",
                "下一次普通攻击范围扩大，额外对终端附加",
                speSkillCon("1点蚀爆值"),
                "，但伤害会随圈数向外逐层衰减，令目标降低",
                speSkillCon("80%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，持续",
                speSkillCon("3"),
                "秒",
                "",
                speSkillCon("【捉迷藏·隐匿姿态】技能形态", SkillColorEnum.injuries),
                "",
                "“常态”下可使用",
                "",
                "主动：钻进草垛中，进入",
                speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                "状态，不会被优先攻击。普通攻击方式变为向四周撒棒棒糖，",
                speSkillCon("攻击速度：0.65次每秒"),
                "，造成伤害降低",
                speSkillCon("50%"),
                "",
                speSkillCon("【捉迷藏·解除隐匿】技能形态", SkillColorEnum.injuries),
                "",
                "“隐匿姿态”下可使用",
                "",
                "主动：再次使用该技能或者使用其他技能后可以解除",
                speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                "状态"
            ]
        }
    },
    {
        "name": "一二三不许动",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "75秒"]],
            "tab": ["伤害", "负面状态", "穿透屏障"],
            "content": [
                "向四周撒出大量棒棒糖，造成10次半径",
                speSkillCon("600"),
                "范围的攻击，总计造成",
                speSkillCon("2700%最终攻击的蚀元素伤害"),
                "，并为终端附加",
                speSkillCon("25点蚀爆值"),
                "，随后在自身脚下生成糖果粘液，粘液上的地面单位敌人移动速度降低",
                speSkillCon("90%"),
                "，粘液持续存在",
                speSkillCon("18"),
                "秒",
                "",
                "棒棒糖会在场上永久存在，敌人触碰到棒棒糖时将被",
                speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                "，持续",
                speSkillCon("10"),
                "秒",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：“猛兽”出没",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.53次每秒"]],
            "atType": ["群体", "对空"],
            "content": [
                "随机使用红色或者绿色棒棒糖攻击敌人，并为终端附加",
                speSkillCon("2点蚀爆值"),
                "",
                "红色棒棒糖令目标半径",
                speSkillCon("150"),
                "内的所有敌人降低",
                speSkillCon("70%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，短暂延迟后造成小范围",
                speSkillCon("95%最终攻击的蚀元素伤害"),
                "",
                "绿色棒棒糖对当前目标造成",
                speSkillCon("190%最终攻击的蚀元素伤害"),
                "，令目标降低",
                speSkillCon("80%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
            ],//普通攻击
            "specialContent": [
                [
                    "无"
                ],//零花本体特性
                [
                    "主动技能【陷在糖里】、异核技能【一二三不许动】产生的糖果粘液可以使站在上面的敌人攻击速度降低",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "处于糖果粘液上的敌人受到的蚀元素伤害额外提高",
                    speSkillCon("15%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                    "，异核技能产生的棒棒糖会在场上永久存在"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "小朋友的担心",
            "limit": "【默契值1级】",
            "tips": [
                "“我喝了牛奶的话呜呜呜……”阿棘的眼泪啪嗒啪嗒地滴在圆匙上，“小牛、小牛该怎么办啊？”",
                "“已经帮你换成燕麦奶了！”"
            ],
            "recipe": [
                "简约至上",
                "甜牛乳",
                "正常糖",
                "燕麦奶",
                "圆匙"
            ]
        },
        {
            "name": "闻起来像药，喝起来像药",
            "limit": "【默契值1级】",
            "tips": [
                "阿棘捏着鼻子，一仰脖，一下子灌进去一整杯无糖热姜茶。",
                "“傻阿棘，你怎么这么喝啊！”",
                "“药……不都是这、这么喝的？”阿棘眨巴眨巴眼。",
                "“这不是——算了。”"
            ],
            "recipe": [
                "竹节茶杯",
                "姜茶",
                "无糖",
                "热",
                "柠檬片"
            ]
        },
        {
            "name": "阴差阳错",
            "limit": "【默契值4级】",
            "tips": [
                "“换成全脂牛奶，偏淡，加了浓缩咖啡和水果签的奶油芭蕾？这不像是阿棘你的口味啊……这真是你自己点的？”",
                "“焰、焰响姐姐帮我点的……她说走什么走什么的……我……我我我我听不太明白……就就就这样了……”阿棘越说越小声。",
                "“呃啊，她那是方言。你听不懂怎么不问——算了，我不用猜也知道，你不敢对不对？”",
                "阿棘猛猛点头。"
            ],
            "recipe": [
                "自证方圆",
                "奶油芭蕾",
                "全脂牛奶",
                "偏淡",
                "标准",
                "水果签"
            ]
        },
        {
            "name": "可靠的大人",
            "limit": "【默契值1级】",
            "tips": [
                "“咦？橘子汽水没、没有想象的酸呢……”",
                "“知道你不喜欢，特意加了芒果果冻。不错吧？喏，拿着三叶长签，可以挑着吃。”",
                "阿棘望着监督，眼睛里闪着崇拜的光。"
            ],
            "recipe": [
                "简约至上",
                "玻璃橘子",
                "多冰",
                "芒果果冻",
                "三叶长签"
            ]
        },
        {
            "name": "痛并快乐着",
            "limit": "【默契值10级】",
            "tips": [
                "阿棘捂着脸，想要趁牙齿反应过来之前，用水果签把巧克力风暴里的草莓冰淇淋、焦糖布丁全部扒出来吃掉。",
                "“哎呦痛——呜呜呜好吃——痛痛痛——”"
            ],
            "recipe": [
                "自证方圆",
                "巧克力风暴",
                "草莓冰淇淋",
                "焦糖布丁",
                "水果签"
            ]
        },
        {
            "name": "出糗时刻",
            "limit": "【默契值6级】",
            "tips": [
                "每当阿棘在训练课里成功控制住自己的法术不暴走，监督就会在课后为他点一杯茉茉奶绿。",
                "直到某次出外勤时，阿棘一边施展法术，一边流利、大声地喊出“茉茉奶绿三分糖正常冰加珍珠——！”。",
                "——那是监督今年笑得最大声的一次了。"
            ],
            "recipe": [
                "简约至上",
                "茉茉奶绿",
                "三分糖",
                "正常冰",
                "珍珠",
                "圆匙"
            ]
        },
        {
            "name": "囤积的快乐",
            "limit": "【默契值18级】",
            "tips": [
                "西柚、白柚、杨桃、柠檬的复杂果香混杂在一起，阿棘抱着熊熊杯，仿佛回到了乌瑞亚的地下，回到了他囤满浆果的房间。"
            ],
            "recipe": [
                "熊熊杯",
                "柚柚切颗NOW",
                "正常糖",
                "杨桃",
                "柠檬片"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "青提啵啵奶茶",
                "五分糖",
                "少冰",
                "珍珠"
            ],
            "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 8,
            "recipe": [
                "鹿鹿冻柠茶",
                "五分糖",
                "少冰"
            ],
            "ex": [453, 508, 526],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "杨枝甘露",
                "抹茶冰淇淋",
                "珍珠"
            ],
            "ex": [461, 517, 563],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 阿棘 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 阿棘 }