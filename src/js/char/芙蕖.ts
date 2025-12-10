import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "护佑者", "skill": [MXLaohenEnum.及时援助菱形β型, MXLaohenEnum.沉浸舞台], "attr": "shui", "star": "5",
    "nameEn": "FREDA", "tag": ["治疗", "支援"], "originWorld": "艾达", "orginChar": "古剑奇谭一",
    "cv": "陈奕雯", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "为每一位观众而努力——你好，我是来自偶像组合Binary Star的芙、芙蕖……啊，怎么在这么重要的地方失误了……",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "7/75/mjc6wqosvaqa3x1xdsj9hxmxd8k6t8s.png",
            "2/28/75qnes1owxsz8htdi9w442cm3vbtpva.png",
            "3/31/456rpyw822bqsr8zx2wbsk6ej6zhixa.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["白沙珊瑚"],
            "imgs": [
                "6/69/n4t1xm0id86x5phz90ia3by9o7mjglh.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "掀翻舞台",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["自身增益", "友方增益"],//技能标签
            "content": [
                "切换",
                speSkillConWithImg(SkillDescStatusImg.芙蕖舞台攻),
                "舞台效果，使所有同调者提升",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                "和",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精),
                "，同时使指令冷却的回复速度和自动技能的充能速度加快",
                speSkillCon("50%"),
                speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                "；",
                speSkillCon("(属性乘区·自动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区自动技能回复速度),
                "，持续",
                speSkillCon("20"),
                "秒",
                "",
                "同一时间只能激活一种舞台效果"
            ]//满级技能内容描述
        }
    },
    {
        "name": "片刻沉溺",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],
            "tab": ["自身增益", "友方增益", "回复"],
            "content": [
                "被动：每隔",
                speSkillCon("5"),
                "秒治疗所有友方同调者",
                speSkillCon("125%治愈力"),
                "的生命值",
                "",
                "主动：切换",
                speSkillConWithImg(SkillDescStatusImg.芙蕖舞台疗),
                "舞台效果，被动治疗同调者生命值的间隔降低一半，并为目标额外增加",
                speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                speSkillCon("[同调者基础减伤]", SkillColorEnum.normal, ToastSkillEnum.同调者基础减伤),
                "，持续",
                speSkillCon("20"),
                "秒",
                "",
                "同一时间只能激活一种舞台效果"
            ]
        }
    },
    {
        "name": "安可时间",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["回复"],
            "content": [
                "无消耗再次激活上一个舞台效果，且该舞台效果获得「安可」状态：舞台效果的治疗量提高",
                speSkillCon("60%"),
                "；属性加成、资源回复的效果提高",
                speSkillCon("100%")
            ]
        }
    },
    {
        "name": "特性：反向应援",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "-"], ["攻击速度", "-"]],
            "atType": ["不攻击"],
            "content": [
                "不会攻击敌人",
            ],//普通攻击
            "specialContent": [
                [
                    "在场时，使场上所有同调者提升",
                    speSkillCon("15%"),
                    speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "",
                    "司危在场时，场上友方同调者的基础攻击力额外提升",
                    speSkillCon("5%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "切换舞台效果后，获得",
                    speSkillCon("5"),
                    "秒「安可」状态（当前舞台效果的治疗量提高；属性加成、资源回复的效果提高）"
                ],//一花特性
                [
                    "【掀翻舞台】和【片刻沉溺】的舞台效果激活持续期间，对其他友方同调者造成治疗时，额外为目标回复",
                    speSkillCon("4%"),
                    "异核充能进度"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "健康管理",
            "limit": "【默契值1级】",
            "tips": [
                "怎么，偶像更需要注意身体。"
            ],
            "recipe": [
                "姜茶",
                "常温"
            ]
        },
        {
            "name": "“控制摄入”",
            "limit": "【默契值1级】",
            "tips": [
                "“唔……如笙姐姐让我控制咖啡因的摄入。”",
                "“那好吧我们——”",
                "“不过偶尔一次没关系，可以加一份奶精球、一份雪顶么？”",
                "“……好。”"
            ],
            "recipe": [
                "鎏·金/青叶陶瓷杯",
                "经典特浓咖啡",
                "奶精球",
                "低因",
                "原味雪顶",
                "白玉兰"
            ]
        },
        {
            "name": "鲜榨果汁",
            "limit": "【默契值1级】",
            "tips": [
                "一杯鲜榨果汁，偷偷加上几颗珍珠。",
                "芙蕖经常这么浑水摸鱼，装作自己非常健康生活。"
            ],
            "recipe": [
                "经典格纹",
                "鲜榨雪梨汁",
                "常温",
                "珍珠",
                "水果签"
            ]
        },
        {
            "name": "绝配",
            "limit": "【默契值10级】",
            "tips": [
                "“云中桂影……真好听。唉，我就起不出来，每次写歌最后都会在歌名上犹豫不决。”",
                "芙蕖用圆匙舀了口冰淇淋，接着像是想起什么又拿起小饼干。",
                "“监督，我听说它们是绝妙组合，像不像我和司危？”"
            ],
            "recipe": [
                "经典格纹/鎏·金",
                "云中桂影",
                "香蕉冰淇淋",
                "汪汪饼干",
                "空心圆匙"
            ]
        },
        {
            "name": "片刻沉溺",
            "limit": "【默契值5级】",
            "tips": [
                "一杯拿铁，送给在舞台上努力发光的人。"
            ],
            "recipe": [
                "鎏·金",
                "好椰拿铁",
                "奶精球",
                "低因",
                "心形插签"
            ]
        },
        {
            "name": "副业兴隆",
            "limit": "【默契值16级】",
            "tips": [
                "“这是有熊推出的配方？”",
                "芙蕖看着饼干慢慢泡软在牛奶里，慢慢喝了一口。",
                "“怎么样？”",
                "“唔！感觉有一天资金周转不灵，靠这个都可以迎来事业第二春。”芙蕖将装饰品放在一旁，又喝了一口。"
            ],
            "recipe": [
                "鎏·金",
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "汪汪饼干",
                "迷迭香"
            ]
        },
        {
            "name": "你知我知",
            "limit": "【默契值18级】",
            "tips": [
                "“……你确定要加这么多东西么？”监督犹豫地将长签插入杯中，将满满一杯加料巧克力热饮递了过去。",
                "“……没、没关系。监督你千万千万，别告诉如笙姐姐。”",
                "没关系，体重秤会告诉她的……监督沉默。"
            ],
            "recipe": [
                "淑女风尚",
                "巧克力风暴",
                "草莓冰淇淋",
                "焦糖布丁",
                "三叶长签"
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
            "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "熊熊燕麦牛奶",
                "全脂牛奶",
                "汪汪饼干"
            ],
            "ex": [510, 571, 622],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "巧克力风暴",
                "草莓冰淇淋",
                "汪汪饼干"
            ],
            "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 芙蕖 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 芙蕖 }