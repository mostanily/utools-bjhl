import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.风之庇佑], "attr": "feng", "star": "6",
    "nameEn": "ZODIVIN AZURE", "tag": ["治疗", "支援"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
    "cv": "洪海天", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
}

const Skill = [
    {
        "name": "湛蓝寄语",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "25秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["回复", "持续施法"],//技能标签
            "sizeLevel": [
                ["40%"],
                ["46%"],
                ["52%"],
                ["58%"],
                ["64%"],
                ["70%"],
                ["76%"],
                ["82%"],
                ["88%"],
                ["92%"],
                ["96%"],
                ["100%"],
                ["104%"],
                ["108%"],
                ["112%"]
            ],
            "content": [
                "持续对生命值百分比最低的",
                speSkillCon("3"),
                "名友方同调者进行治疗，每秒治疗目标",
                speSkillCon("", 0, -1, 0),
                speSkillCon("100%治愈力"),
                "的生命值，持续15秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "踏风小调",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "15秒"]],
            "tab": ["伤害", "友方增益", "回复"],
            "sizeLevel": [
                ["150%", "550%"],
                ["173%", "633%"],
                ["195%", "715%"],
                ["217%", "798%"],
                ["240%", "880%"],
                ["263%", "963%"],
                ["285%", "1045%"],
                ["308%", "1128%"],
                ["330%", "1210%"],
                ["345%", "1265%"],
                ["360%", "1320%"],
                ["375%", "1375%"],
                ["390%", "1430%"],
                ["405%", "1485%"],
                ["420%", "1540%"]
            ],
            "content": [
                "朝当前生命最低的友方同调者释放鹿蜀幻影，治疗沿途所有友方同调者",
                speSkillCon("", 0, -1, 0),
                speSkillCon("治愈力"),
                "的生命值并增加",
                speSkillCon("4.8%~8%"),
                speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                speSkillCon("[同调者基础减伤]", SkillColorEnum.normal, ToastSkillEnum.同调者基础减伤),
                "，持续",
                speSkillCon("8"),
                "秒，同时对沿途所有敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的风元素伤害")
            ]
        }
    },
    {
        "name": "初醒的辛西娅",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "90秒"]],
            "tab": ["伤害", "友方增益", "自身增益", "回复"],
            "sizeLevel": [
                ["1200%", "210%"],
                ["1400%", "245%"],
                ["1600%", "280%"],
                ["1800%", "315%"],
                ["1900%", "333%"],
                ["2000%", "350%"]
            ],
            "content": [
                "对全场敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的风元素伤害"),
                speSkillCon("20"),
                "秒的复苏状态，每秒治疗目标",
                speSkillCon("", 0, -1, 1),
                speSkillCon("治愈力"),
                "的生命值，提升全体同调者",
                speSkillCon("18%~30%"),
                speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·元素抗性提高）", SkillColorEnum.injuries),
                "全元素抗性"
            ]
        }
    },
    {
        "name": "特性：一族之长",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.43次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标发射飞弹造成",
                speSkillCon("230%最终攻击的风元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "擅长大范围群体治疗",
                    "",
                    "治疗铁御、轻卫、尖锋时，治疗量提升",
                    speSkillCon("20%"),
                    speSkillCon("（治疗乘区·独立治疗）", SkillColorEnum.injuries),
                    "，并增加目标",
                    speSkillCon("3%~5%"),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "基础减伤，持续",
                    speSkillCon("5"),
                    "秒"
                ],//零花本体特性
                [
                    "自动技能【踏风小调】可以额外施放一只鹿蜀幻影，产生的伤害及治疗量为原始幻影的50%"
                ],//一花特性
                [
                    "编入队伍时，提升全队",
                    speSkillCon("6%~10%"),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·元素抗性提高）", SkillColorEnum.injuries),
                    "全元素抗性"
                ]//三花特性
            ]
        }
    },
    {
        "name": "特性强化",
        "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "content": [
                "踏风小调】的鹿蜀幻影使命中的友方同调者提高",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                speSkillCon("[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                "和",
                speSkillCon("20%"),
                speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精),
                "，持续10秒，该效果最多叠加2层"
            ]
        }
    },
    {
        "name": "技能同调",
        "aliasNum": "技能同调",
        "repSkill": 0,//被替换的技能，值为该角色技能组数据对应技能下标
        "unlock": LaohenNameEnum.光风之下,//该技能解锁条件，拥有对应的烙痕ID
        "detail": {
            "name": "唤灵为影",
            "aliasNum": "1",
            "maxLevel": 15,
            "type": "主动技能",
            "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],
            "tab": ["自身增益", "伤害", "友方增益"],
            "sizeLevel": [
                ["14%", "1200%"],
                ["17%", "1380%"],
                ["19%", "1560%"],
                ["21%", "1740%"],
                ["23%", "1920%"],
                ["25%", "2100%"],
                ["27%", "2280%"],
                ["30%", "2460%"],
                ["32%", "2640%"],
                ["33%", "2760%"],
                ["35%", "2880%"],
                ["36%", "3000%"],
                ["37%", "3120%"],
                ["39%", "3240%"],
                ["40%", "3360%"]
            ],
            "content": [
                speSkillCon("选择该技能同调后，职业切换为战术家；专精增伤转化率提升为100%，专精治愈转化率降低为80%", SkillColorEnum.injuries),
                "",
                "对自身及施放时除自身外最终攻击力最低的",
                speSkillCon("1"),
                "名友方同调者施加「漫歌」效果，持续",
                speSkillCon("25"),
                "秒（当紫都重伤或离场后，此效果消失）：",
                "",
                "「漫歌」：获得",
                speSkillCon("", 0, -1, 0),
                speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "，并按照",
                speSkillCon("100%"),
                "比例同步场上攻击力最高同调者的攻击力。",
                "",
                "拥有「漫歌」效果的同调者在第1/7/15秒会对紫都的当前攻击目标施放一只鹿蜀幻影，对路径上敌人造成",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的风元素伤害"),
                "（视为紫都造成的伤害）"
            ],
            "specialContent": [
                [
                    "【唤灵为影】施加「漫歌」效果对自身和除自身外最终攻击力最低的2名友方同调者施加，拥有「漫歌」效果的同调者每次施放鹿蜀幻影时回复5秒异核充能。"
                ],//特质Ⅱ级解锁
                [
                    "「漫歌」对场上所有同调者施加，场上每出现一只鹿蜀幻影，鹿蜀幻影的伤害提升10%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，持续30秒，最多叠加24层。"
                ],//特质Ⅴ级解锁
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "人生百味",
            "limit": "【默契值4级】",
            "tips": [
                "又冰又苦又咸，紫都看着这杯神奇的饮料眨了眨眼。",
                "“这就是路遥感受到的人生的味道么？”",
                "“……至少我不会放盐！”"
            ],
            "recipe": [
                "环口杯",
                "恩利都苦啤兑苦咖",
                "正常冰",
                "盐",
                "标准"
            ]
        },
        {
            "name": "冬日暖阳",
            "limit": "【默契值8级】",
            "tips": [
                "冬日、落雪、透过叶间洒下的阳光……这就是紫都在初尝这杯饮品的想到的。",
                "“下次调味可以试试不这么浓烈，不过小监督蘸盐的手法意外的熟练啊……”她笑着说。"
            ],
            "recipe": [
                "银色青松",
                "盐",
                "偏烈"
            ]
        },
        {
            "name": "感恩的心",
            "limit": "【默契值5级】",
            "tips": [
                "“这个辛西亚的标志还是当初路遥亲手画的呢。小朋友们都特别喜欢，围着路遥打转了好久还要带着他绕海临跑一圈，当然，他最后拼命地拒绝了。”",
                "“啊就用那个直筒杯就可以，再加点冰和糖，多谢小监督~”"
            ],
            "recipe": [
                "柯林杯",
                "鹿鹿冻柠茶",
                "三分糖",
                "多冰"
            ]
        },
        {
            "name": "浪漫之都的记忆",
            "limit": "【默契值10级】",
            "tips": [
                "浪漫之都蒂尔莫最为著名的饮品之一，通过调制可以打造特殊的“苦感”，让人欲罢不能。",
                "“可以再帮我加些装饰么？”"
            ],
            "recipe": [
                "沉金记忆",
                "无糖",
                "苦味素",
                "紫藤"
            ]
        },
        {
            "name": "相约团建",
            "limit": "【默契值6级】",
            "tips": [
                "再普通不过的玻璃杯也会被杯中的酒染上一层模糊的颜色。",
                "“马戏表演呀……那要不要找机会鹿路运输和白荆科技一起出门团建下？听说有个马戏团的巡回表演下一站就是海临。”",
                "“好啊，给，你的樱桃。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "极夜马戏团",
                "偏烈",
                "樱桃"
            ]
        },
        {
            "name": "暮色飞行",
            "limit": "【默契值18级】",
            "tips": [
                "“……确定要放冰淇淋？”",
                "“再配上一片叶子吧。”",
                "“……已经加了很多调味了，不然……”",
                "“看名字，不多加点怎么体验飞行的感觉。”",
                "“我觉得重点不在这里……”"
            ],
            "recipe": [
                "双层叶纹",
                "薄暮飞行",
                "柠檬汁",
                "偏淡",
                "草莓冰淇淋",
                "枫叶"
            ]
        },
        {
            "name": "来自乌瑞亚的她",
            "limit": "【默契值16级】",
            "tips": [
                "紫都偶尔会提起在乌瑞亚时的见闻，每逢这时，她总是安静端着一杯花茶坐在窗边。",
                "看着玻璃杯叶纹折射出的七彩阳光，紫都抬起手——又加了一小块叶子冻。",
                "“诶等茶是r——”"
            ],
            "recipe": [
                "双层叶纹",
                "德里亚德风味花茶",
                "热",
                "叶子冻",
                "桂花"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "疏帘淡月",
                "五分糖",
                "热"
            ],
            "ex": [474, 531, 579],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "德里亚德风味花茶",
                "热",
                "茶冻"
            ],
            "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 紫都 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 紫都 }