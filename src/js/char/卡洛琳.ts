import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.暴风骤雨三角α型, MXLaohenEnum.蚀入骨髓], "attr": "shi", "star": "5",
    "nameEn": "CAROLINE", "tag": ["治疗", "爆发"], "originWorld": "特默里恩", "orginChar": "原创",
    "cv": "苏婉", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
}

const Skill = [
    {
        "name": "量身调制",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "抉择技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "-"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益", "回复"],//技能标签
            "content": [
                "选择一种药剂进行炼制，强化普通攻击（指令冷却均为",
                speSkillCon("20"),
                "秒）：",
                "",
                speSkillCon("【爆裂试剂】技能形态", SkillColorEnum.injuries),
                "",
                speSkillCon("攻击速度：0.35次每秒"),
                "，对目标造成",
                speSkillCon("639%最终攻击的蚀元素伤害"),
                "并对其半径",
                speSkillCon("250"),
                "范围内的敌人造成",
                speSkillCon("50%"),
                "伤害，同时为终端附加",
                speSkillCon("4点蚀爆值"),
                "，持续",
                speSkillCon("20"),
                "秒",
                "",
                "每次炼制永久提升",
                speSkillConWithImg(SkillDescStatusImg.卡洛琳爆裂试剂),
                "【爆裂试剂】强度：爆裂试剂伤害提升",
                speSkillCon("10%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "，最多提升",
                speSkillCon("5"),
                "次",
                "",
                speSkillCon("【吉速汤药】技能形态", SkillColorEnum.injuries),
                "",
                speSkillCon("攻击速度：0.67次每秒"),
                "，对目标造成",
                speSkillCon("509%最终攻击力的蚀元素伤害"),
                "，同时为终端附加",
                speSkillCon("3点蚀爆值"),
                "，持续",
                speSkillCon("20"),
                "秒；对命中的目标施加“吉速印记”，持续",
                speSkillCon("3"),
                "秒，友方对其造成伤害时回复该友方",
                speSkillCon("3%最大生命值"),
                "（对同一目标的回复效果每",
                speSkillCon("3"),
                "秒最多触发1次）",
                "",
                "每次炼制永久提升",
                speSkillConWithImg(SkillDescStatusImg.卡洛琳吉速汤药),
                "【吉速汤药】强度：提升1%最大生命值回复，最多提升",
                speSkillCon("5"),
                "次"
            ]//满级技能内容描述
        }
    },
    {
        "name": "融骨灵",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "10秒"]],
            "tab": ["自身增益"],
            "content": [
                "下—次普通攻击额外提升",
                speSkillCon("15点蚀爆值"),
                "，蚀元素伤害提升",
                speSkillCon("448%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
            ]
        }
    },
    {
        "name": "好事成双水",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "75秒"]],
            "tab": ["自身增益"],
            "content": [
                "普通攻击可以一次丢出双份药剂，持续",
                speSkillCon("36"),
                "秒"
            ]
        }
    },
    {
        "name": "特性：万能加时汤剂",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "1200"], ["攻击速度", "0.44次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "向当前目标投掷蓝色药剂造成",
                speSkillCon("230%最终攻击的蚀元素伤害"),
                "，为终端附加",
                speSkillCon("2点蚀爆值"),
                "，命中时有",
                speSkillCon("10%"),
                "概率灵光一闪，附加蚀爆值为",
                speSkillCon("2"),
                "倍"
            ],//普通攻击
            "specialContent": [
                [
                    "每触发",
                    speSkillCon("2"),
                    "次蚀爆伤害时，为抉择技【量身调制】回复一次技能次数"
                ],//零花本体特性
                [
                    "登场时分别获得1层主动技能【爆裂试剂】、主动技能【吉速汤剂】的成长效果（该提升视为自身技能施放获得的永久属性提升）"
                ],//一花特性
                [
                    "灵光一闪的概率提升至",
                    speSkillCon("20%"),
                    "，蚀爆值倍率提高为",
                    speSkillCon("2.5"),
                    "倍"
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "卡洛琳的标准",
            "limit": "【默契值1级】",
            "tips": [
                "“一杯热盐水？也太过无趣了吧，监督！”"
            ],
            "recipe": [
                "柯林杯",
                "白开水",
                "热",
                "盐",
                "紫藤"
            ]
        },
        {
            "name": "攻击性极强",
            "limit": "【默契值1级】",
            "tips": [
                "“无糖芝士奶盖？黄瓜片？快把这环口杯拿走！生活得有多平淡才能接受这种搭配？”"
            ],
            "recipe": [
                "环口杯",
                "白桃芝士奶盖",
                "无糖",
                "正常冰",
                "黄瓜片",
                "迷迭香"
            ]
        },
        {
            "name": "二次创作",
            "limit": "【默契值1级】",
            "tips": [
                "“乌瑞亚那边是这个口味？那我可要调低对它的评价咯。”",
                "“这不是挺好喝的？”",
                "“普通的‘好喝’。”卡洛琳撇了撇嘴，“能把珍珠递给我吗？不二次创作一下，我会无聊死的。”"
            ],
            "recipe": [
                "家用玻璃杯",
                "德里亚德风味花茶",
                "热",
                "珍珠",
                "长匙"
            ]
        },
        {
            "name": "激进分子的自白",
            "limit": "【默契值5级】",
            "tips": [
                "“您可以再激进一些，光是加了柠檬汁、青提、薄荷叶的薄暮飞行可取悦不了我——太淡了。”"
            ],
            "recipe": [
                "环口杯",
                "薄暮飞行",
                "柠檬汁",
                "偏淡",
                "青提",
                "薄荷叶"
            ]
        },
        {
            "name": "危险发言",
            "limit": "【默契值6级】",
            "tips": [
                "卡洛琳笑眯眯地用长匙敲了敲玻璃杯口：“如果配方只是五分糖的青提啵啵奶茶加一些芒果果冻的话，我用坩埚也可以做吧？”",
                "“别！！！！”"
            ],
            "recipe": [
                "家用玻璃杯",
                "青提啵啵奶茶",
                "五分糖",
                "少冰",
                "芒果果冻",
                "长匙"
            ]
        },
        {
            "name": "等价交换",
            "limit": "【默契值13级】",
            "tips": [
                "“帮白荆研发新药当然可以，不过让我想想，像这样的‘额外工作’……我该让你付出些什么，才算等价交换~”",
                "监督有些紧张地抿着嘴。",
                "“一杯枸杞菊花茶怎么样？记得多加一份枸杞、一份叶子冻，还要在杯子上插一朵桂花~”",
                "“就这样？”",
                "“没错~监督，这可是友情价。要知道，我给欧阳先生的‘报价’可不止这样哦。”"
            ],
            "recipe": [
                "双层叶纹",
                "枸杞菊花茶",
                "枸杞",
                "叶子冻",
                "桂花"
            ]
        },
        {
            "name": "神奇之手",
            "limit": "【默契值16级】",
            "tips": [
                "“一杯正常糖、常温的酒酿凤梨竟有如此丰富的香气？监督，什么时候能让我研究研究你这双神奇之手呢？”"
            ],
            "recipe": [
                "家用玻璃杯",
                "酒酿凤梨",
                "正常糖",
                "常温",
                "柠檬片"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "极夜马戏团",
                "盐",
                "偏淡",
                "蓝莓"
            ],
            "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 卡洛琳 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 卡洛琳 }