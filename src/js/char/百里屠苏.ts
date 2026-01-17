import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.饱和式救援, MXLaohenEnum.先破后立], "attr": "yan", "star": "6",
    "nameEn": "BAILITUSU", "tag": ["破盾", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
    "cv": "陈家恒", "openDate": "2024年02月01日", "resourse": ["定向共鸣·岁暮重明", "常态共鸣·森罗万象"],
    "introText": "百里屠苏。报到。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "0/02/eyv9ooez17e8f1xdtfu57vy3gza177k.png",
            "a/a8/3i7rf6sc67zep1lxq6jswaxzq2nurn3.png",
            "4/47/fobaw1ui7syjz1a66zrdwl63pz5zhtf.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["笑春生"],
            "imgs": [
                "f/fb/srv7av4r6yp71pjuty1tzit47kk5u0p.png"
            ],
            "listImg": [
                "7/71/l5c9bsym70to4e3mylhk3bpq2yeoiij.png"
            ]
        }
    ]
}

const Skill = [
    {
        "name": "祛邪",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "自身增益", "对空", "穿透屏障", "格挡条破坏2"],//技能标签
            "sizeLevel": [
                ["300%", "400%", "1000%"],
                ["346%", "460%", "1150%"],
                ["390%", "520%", "1300%"],
                ["436%", "580%", "1450%"],
                ["480%", "640%", "1600%"],
                ["526%", "700%", "1750%"],
                ["570%", "760%", "1900%"],
                ["616%", "820%", "2050%"],
                ["660%", "880%", "2200%"],
                ["690%", "920%", "2300%"],
                ["720%", "960%", "2400%"],
                ["750%", "1000%", "2500%"],
                ["780%", "1040%", "2600%"],
                ["810%", "1080%", "2700%"],
                ["840%", "1120%", "2800%"],
            ],
            "content": [
                speSkillCon("【祛邪】技能形态", SkillColorEnum.injuries),
                "",
                "非重明状态下可使用",
                "",
                "施放技能时",
                speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                "自身",
                speSkillCon("50%"),
                "当前生命值，获得",
                speSkillCon("50%"),
                "最大生命值的护盾和10层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "；对范围内的所有敌方地面单位共造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 1),
                speSkillCon("体质的炎元素伤害"),
                "，同时附带破坏",
                speSkillCon("2段格挡条"),
                "效果；且「梦中身」会同时造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 1),
                speSkillCon("体质的炎元素伤害"),
                "，并附带破坏",
                speSkillCon("2段格挡条"),
                "效果",
                "",
                speSkillCon("【祛邪·重明】技能形态", SkillColorEnum.injuries),
                "",
                "重明状态下可使用，该技能可攻击空中目标",
                "",
                "对范围内的所有敌方单位共造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 2),
                speSkillCon("体质的炎元素伤害"),
                "，同时附带破坏",
                speSkillCon("5段格挡条"),
                "效果，对当前生命值低于",
                speSkillCon("50%"),
                "的敌方单位伤害提",
                speSkillCon("30%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "",
                speSkillCon("【祛邪】", SkillColorEnum.injuries),
                "的可使用技能次数与",
                speSkillCon("【祛邪·重明】", SkillColorEnum.injuries),
                "独立计算"
            ]//满级技能内容描述
        }
    },
    {
        "name": "灼见·毁殇",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
            "tab": ["伤害", "自身增益", "穿透屏障", "格挡条破坏2"],
            "sizeLevel": [
                ["250%", "300%", "700%"],
                ["288%", "345%", "805%"],
                ["325%", "390%", "910%"],
                ["363%", "435%", "1015%"],
                ["400%", "480%", "1120%"],
                ["438%", "525%", "1225%"],
                ["475%", "570%", "1330%"],
                ["513%", "615%", "1435%"],
                ["550%", "660%", "1540%"],
                ["575%", "690%", "1610%"],
                ["600%", "720%", "1680%"],
                ["625%", "750%", "1750%"],
                ["650%", "780%", "1820%"],
                ["675%", "810%", "1890%"],
                ["700%", "840%", "1960%"],
            ],
            "content": [
                speSkillCon("【毁殇】自动技能形态", SkillColorEnum.injuries),
                speSkillCon("施放冷却：", SkillColorEnum.injuries),
                speSkillCon("18"),
                "秒",
                "",
                "非重明状态下可使用",
                "",
                "施放技能时",
                speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                "自身",
                speSkillCon("25%"),
                "当前生命值，获得",
                speSkillCon("20%"),
                "最大生命值的护盾和",
                speSkillCon("8"),
                "层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "；对自身前方半径",
                speSkillCon("300"),
                "扇形范围内所有敌方地面单位造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 1),
                speSkillCon("体质的炎元素伤害"),
                "，同时附带破坏",
                speSkillCon("2段格挡条"),
                "效果；且「梦中身」会同时造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 1),
                speSkillCon("体质的炎元素伤害"),
                "，并附带破坏",
                speSkillCon("2段格挡条"),
                "效果",
                "",
                speSkillCon("【毁殇·重明】自动技能形态", SkillColorEnum.injuries),
                speSkillCon("施放冷却：", SkillColorEnum.injuries),
                speSkillCon("18"),
                "秒",
                "",
                "重明状态下可使用",
                "",
                "施放技能时不再",
                speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                "自身生命值，对自身前方半径",
                speSkillCon("300"),
                "扇形范围内所有敌方地面单位造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 2),
                speSkillCon("体质的炎元素伤害"),
                "，同时附带破坏",
                speSkillCon("4段格挡条"),
                "效果",
                "",
                "",
                speSkillCon("【灼见】主动技能形态", SkillColorEnum.injuries),
                "",
                "非重明状态下可使用",
                "",
                "指挥「梦中身」冲刺到目标位置，并对冲刺路径上所有敌方地面单位造成",
                speSkillCon("40%最终攻击的炎元素伤害"),
                "+",
                speSkillCon("50%体质的炎元素伤害")
            ]
        }
    },
    {
        "name": "业火重明",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "80秒"]],
            "tab": ["伤害", "自身增益", "对空", "穿透屏障", "格挡条破坏3"],
            "sizeLevel": [
                ["1500%"],
                ["1750%"],
                ["2000%"],
                ["2250%"],
                ["2375%"],
                ["2500%"],
            ],
            "content": [
                "仅非重明状态下可使用",
                "",
                "技能开启后会收回「梦中身」，对周围",
                speSkillCon("800"),
                "半径范围内所有敌方单位共造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "+",
                speSkillCon("", 0, -1, 0),
                speSkillCon("体质的炎元素伤害"),
                "，并在技能释放时获得额外",
                speSkillCon("50%"),
                "当前",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "层数，通过该方式获得的石中火不受特性层数上限影响；随后进入持续",
                speSkillCon("30"),
                "秒的「重明」状态，状态持续期间，自身当前每有1层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "，提高",
                speSkillCon("1%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "【毁殇·重明】伤害，「重明」状态结束时，失去自身所有",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "层数"
            ]
        }
    },
    {
        "name": "特性：焚焰血戮",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "225"], ["攻击速度", "0.55次每秒"]],
            "atType": ["单体", "格挡条破坏1"],
            "content": [
                speSkillCon("【非重明状态】技能形态", SkillColorEnum.injuries),
                "",
                "攻击当前目标造成",
                speSkillCon("46%最终攻击的炎元素伤害"),
                "+",
                speSkillCon("46%体质的炎元素伤害"),
                "，且「梦中身」会协同攻击造成",
                speSkillCon("46%最终攻击的炎元素伤害"),
                "+",
                speSkillCon("46%体质的炎元素伤害"),
                "",
                speSkillCon("【重明状态】技能形态", SkillColorEnum.injuries),
                "",
                "攻击当前目标造成",
                speSkillCon("138%最终攻击的炎元素伤害"),
                "+",
                speSkillCon("138%体质的炎元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "战斗开始时会召唤「梦中身」，「梦中身」视为召唤物，且会跟随本体施放部分技能",
                    "",
                    "本体施放部分技能会获得",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "层数（每层提升",
                    speSkillCon("1%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "基础攻击力；当生命值为100%时每层提升",
                    speSkillCon("0.15%"),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "基础减伤，随生命值比例降低基础减伤提升，当生命值为30%或以下时每层提升",
                    speSkillCon("0.5%"),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "基础减伤）",
                    "",
                    "本体普通攻击造成暴击时回复",
                    speSkillCon("1"),
                    "秒【毁殇】【毁殇·重明】施放冷却，该效果每2秒最多触发一次",
                    "",
                    "",
                    "整场战斗过程中，当本体累积减少的生命值达到最大生命值的一定比率时，会依次解封自身能力",
                    "",
                    speSkillConWithImg(SkillDescStatusImg.百里屠苏解封一),
                    "Ⅰ：比率达到",
                    speSkillCon("50%"),
                    "时解封，获得",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率提升",
                    "",
                    speSkillConWithImg(SkillDescStatusImg.百里屠苏解封二),
                    "Ⅱ：比率达到",
                    speSkillCon("100%"),
                    "时解封，获得",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "暴击伤害提升；且【业火重明】当前冷却时间减少",
                    speSkillCon("50"),
                    "秒，仅非重明状态可以触发，每场战斗最多触发一次",
                    "",
                    speSkillConWithImg(SkillDescStatusImg.百里屠苏解封三),
                    "Ⅲ：比率达到",
                    speSkillCon("150%"),
                    "时解封，【毁殇】【毁殇·重明】造成伤害时，自身每有1层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "，忽略目标",
                    speSkillCon("1%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤"
                ],//零花本体特性
                [
                    "重明状态结束后，获得",
                    speSkillCon("15"),
                    "层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火)
                ],//一花特性
                [
                    "施放异核技能【业火重明】后，清空指令冷却时间。",
                    speSkillConWithImg(SkillDescStatusImg.百里屠苏解封三),
                    "Ⅲ解封后，",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "的忽略基础减伤效果可对自身所有伤害生效"
                ],//二花特性
                [
                    "场上每有一名炎元素同调者（包含自己），百里屠苏造成的伤害提高",
                    speSkillCon("6%"),
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
                "登场异核充能40秒，每层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "可获得0.5％",
                speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                "暴击率和1.5％",
                speSkillCon("（属性乘区·暴击伤害）"),
                "暴击伤害且初始获得15层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "，解封",
                speSkillConWithImg(SkillDescStatusImg.百里屠苏解封三),
                "所需累积消耗的生命值降低一半"
            ]
        }
    },
    {
        "name": "技能同调",
        "aliasNum": "技能同调",
        "repSkill": 0,//被替换的技能，值为该角色技能组数据对应技能下标
        "unlock": LaohenNameEnum.洗出汪外,//该技能解锁条件，拥有对应的烙痕ID
        "detail": {
            "name": "戮魂",
            "aliasNum": "1",
            "maxLevel": 15,
            "type": "主动技能",
            "skillTab": [["指令冷却", "15秒"], ["次数", "6"]],
            "tab": ["炎区域", "自身增益", "伤害", "对空", "屏障破坏", "格挡条破坏2"],
            "sizeLevel": [
                ["1600%", "600%", "1800%"],
                ["1840%", "690%", "2070%"],
                ["2080%", "780%", "2340%"],
                ["2320%", "870%", "2610%"],
                ["2560%", "960%", "2880%"],
                ["2800%", "1050%", "3150%"],
                ["3040%", "1140%", "3420%"],
                ["3280%", "1230%", "3690%"],
                ["3520%", "1320%", "3960%"],
                ["3680%", "1380%", "4140%"],
                ["3840%", "1440%", "4320%"],
                ["4000%", "1500%", "4500%"],
                ["4160%", "1560%", "4680%"],
                ["4320%", "1620%", "4860%"],
                ["4480%", "1680%", "5040%"]
            ],
            "content": [
                speSkillCon("【戮魂】技能形态", SkillColorEnum.injuries),
                "",
                "非重明状态下可使用",
                "",
                "首次施放后，改变全场天气，炎属性伤害有概率生成炎元素区域，持续",
                speSkillCon("120"),
                "秒。施放技能时",
                speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                "自身",
                speSkillCon("50%"),
                "当前生命值，获得相当于",
                speSkillCon("50%"),
                "最大生命值的护盾和",
                speSkillCon("10"),
                "层",
                speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                "；自身和「梦中身」对指定半径",
                speSkillCon("250"),
                "范围的区域施放大量飞剑，对范围内所有目标造成总计",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的炎元素伤害"),
                "，并破坏目标",
                speSkillCon("2段格挡条"),
                "",
                "",
                speSkillCon("【戮魂·重明】技能形态", SkillColorEnum.injuries),
                "",
                "重明状态下可使用，该技能可攻击空中目标",
                "",
                "朝指定半径",
                speSkillCon("400"),
                "范围的区域施放飞剑，对范围内的所有目标造成总计",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最终攻击的炎元素伤害"),
                "，最终巨剑坠落，摧毁范围内所有敌方屏障并造成",
                speSkillCon("", 0, -1, 2),
                speSkillCon("最终攻击的炎元素伤害"),
                "，同时破坏目标",
                speSkillCon("3段格挡条"),
                "",
                speSkillCon("【戮魂】", SkillColorEnum.injuries),
                "的可使用技能次数与",
                speSkillCon("【戮魂·重明】", SkillColorEnum.injuries),
                "独立计算"
            ],
            "specialContent": [
                [
                    "百里屠苏的自动技能和异核技能受到体质加成的部分会额外受到所有攻击加成，【戮魂】和【戮魂·重明】对敌人造成伤害后，敌人受到的伤害提高40%",
                    speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                    "，持续40秒"
                ],//特质Ⅱ级解锁
                [
                    "自身的暴击伤害超过200%后，【戮魂】和【戮魂·重明】的伤害在暴击时提高，提高增幅取决于暴击伤害超过200%的数值。每超过1%，提升该增幅2%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，该增幅最多不超过240%",
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "。",
                    "",
                    "当自身在场时，场上炎元素同调者主动技能回复速度提高40%"
                ],//特质Ⅴ级解锁
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "难忘的搭配",
            "limit": "【默契值4级】",
            "tips": [
                "“这杯加了特浓咖啡怎么样？我加了草莓冰淇淋，也不知道你喜不喜欢……”",
                "“味道……十分独特，终生难忘。”"
            ],
            "recipe": [
                "柯林杯",
                "经典特浓咖啡",
                "糖包",
                "加双份",
                "草莓冰淇淋",
                "五叶长签"
            ]
        },
        {
            "name": "不合群的青年",
            "limit": "【默契值5级】",
            "tips": [
                "每当午休来临，那些与百里屠苏年纪相仿的同事总是三三两两地聚在一起谈笑，而他却拿着一杯热水，独自坐在办公桌前，也不知在想什么。",
                "别误会，大家并没有孤立他，不如说……他一个人孤立了所有人？"
            ],
            "recipe": [
                "家用玻璃杯",
                "白开水",
                "热",
                "柠檬汁",
                "柠檬片"
            ]
        },
        {
            "name": "我猜我猜我猜猜猜",
            "limit": "【默契值6级】",
            "tips": [
                "“…………”",
                "“是芒果果冻太甜了吗？”",
                "“…………”",
                "“还是橘子涩口？”",
                "“…………”",
                "“我知道了，是——”",
                "“冰。”"
            ],
            "recipe": [
                "环口杯",
                "玻璃橘子",
                "多冰",
                "芒果果冻",
                "长匙"
            ]
        },
        {
            "name": "回忆",
            "limit": "【默契值13级】",
            "tips": [
                "刚离开那·间实验室的时候，也曾有人给过他这么一杯热牛奶。",
                "“暖暖身子。我们马上带你走。”"
            ],
            "recipe": [
                "双层叶纹",
                "甜牛乳",
                "正常糖",
                "热",
                "全脂牛奶",
                "樱花"
            ]
        },
        {
            "name": "意外收获？",
            "limit": "【默契值10级】",
            "tips": [
                "看着监督绞尽脑汁改换配方的模样，百里屠苏抿了抿嘴，还是将眼前这杯加了椰果的双莓之恋端了起来——",
                "……还不错。"
            ],
            "recipe": [
                "柯林杯",
                "双莓之恋",
                "三分糖",
                "少冰",
                "椰果",
                "精致纸伞"
            ]
        },
        {
            "name": "特别支援",
            "limit": "【默契值16级】",
            "tips": [
                "“一杯水就……”",
                "“停！”监督将一杯加了茶冻的雪梨汁推到他面前，“有人告诉我，你喜欢这个？”",
                "“……十手卫。”百里屠苏的语气难得有了些起伏，听着鲜活多了。"
            ],
            "recipe": [
                "双层叶纹",
                "鲜榨雪梨汁",
                "热",
                "茶冻",
                "空心圆匙"
            ]
        },
        {
            "name": "春风送暖",
            "limit": "【默契值18级】",
            "tips": [
                "百里屠苏不明白为什么白荆科技会邀请他参加内部聚餐，也不明白自己为什么真的来了。",
                "“别管这么多了，开心就好。”监督不知被灌了几杯沉金记忆，脸红彤彤的，咧着嘴就往百里屠苏怀里塞了一个……红包？“要开心啊，屠苏。”",
                "“………………嗯。”"
            ],
            "recipe": [
                "环口杯",
                "沉金记忆",
                "五分糖",
                "盐",
                "薄荷叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "干苹果",
                "偏淡",
                "少冰",
                "奇异果片"
            ],
            "ex": [492, 551, 601, 656],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 18,
            "recipe": [
                "沉金记忆",
                "五分糖",
                "苦味素"
            ],
            "ex": [495, 554, 604, 659],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 百里屠苏 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 百里屠苏 }