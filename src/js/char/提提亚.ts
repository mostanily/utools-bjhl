import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形β型, MXLaohenEnum.元素跃威], "attr": "shui", "star": "6",
    "nameEn": "TITIA", "tag": ["支援", "元素区域"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "郭贝", "openDate": "2024年07月18日", "resourse": ["定向共鸣·本真枷锁"],
    "introText": "嗨~执行官大人，好久不见……咳咳，狱警编号M469，提提亚，奉刑狱长之命为您效劳！",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "c/cd/0iv5f7stlbffmvxk3pw2txej2wp2oki.png",
            "7/73/b5xdfk3vm5t5z4uezos0gyvgdxkrxna.png",
            "4/40/0czm0vc17zmcr90wmwirolvocks8hev.png"
        ],
    }
}

const Skill = [
    {
        "name": "狱门·刑罚",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "抉择技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "-"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
            "tab": ["水区域", "负面状态", "伤害", "对空"],//技能标签
            "content": [
                "可选择",
                speSkillCon("「狱门·雷刑」", SkillColorEnum.injuries),
                "或者",
                speSkillCon("「狱门·寒刑」", SkillColorEnum.injuries),
                "进行施放（指令冷却均为",
                speSkillCon("20"),
                "秒）",
                "",
                speSkillCon("「狱门·雷刑」", SkillColorEnum.injuries),
                "：朝指定位置发射出一枚秘钥·雷，密钥运动过程中对沿途的敌人造成",
                speSkillCon("200%最终攻击的雷元素伤害"),
                "并标记敌人。秘钥运动到指定位置后，会将被标记的敌人以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "拉拽至秘钥自身所在位置,并生成半径",
                speSkillCon("200"),
                "范围的水元素区域。秘钥在原地持续",
                speSkillCon("40"),
                "秒，存在期间每隔",
                speSkillCon("5"),
                "秒对自身周围300半径内造成",
                speSkillCon("600%最终攻击的雷元素伤害"),
                "，并施加",
                speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                "效果，效果持续",
                speSkillCon("20"),
                "秒",
                "",
                speSkillCon("「狱门·寒刑」", SkillColorEnum.injuries),
                "：朝指定位置发射出一枚秘钥·霜，钥匙运动过程中对沿途的敌人造成",
                speSkillCon("200%最终攻击的霜元素伤害"),
                "并标记敌人。秘钥运动到指定位置后，会将被标记的敌人以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "拉拽至秘钥自身所在位置，在潮湿环境下会生成生成半径",
                speSkillCon("200"),
                "范围的霜元素区域。秘钥在原地持续",
                speSkillCon("40"),
                "秒，存在期间每隔",
                speSkillCon("5"),
                "秒对自身周围300半径内造成",
                speSkillCon("600%最终攻击的霜元素伤害"),
                "，并施加",
                speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                "效果，效果持续",
                speSkillCon("20"),
                "秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "真言拷问",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "主动技能",
            "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],
            "tab": ["伤害", "负面状态", "对空"],
            "content": [
                "自动技能：冷却时间",
                speSkillCon("18"),
                "秒，对带有",
                speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                "效果的敌方目标造成",
                speSkillCon("1500%最终攻击的水、霜或雷元素伤害"),
                "",
                "",
                "主动技能：手动选中一名敌人以锁链攻击，命中后使目标水、雷、霜元素抗性降低",
                speSkillCon("30%"),
                speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                "，持续",
                speSkillCon("40"),
                "秒，并造成",
                speSkillCon("2500%最终攻击的水、霜或雷元素伤害"),
                "。被命中的敌人会获得",
                speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                "效果，效果持续",
                speSkillCon("20"),
                "秒"
            ]
        }
    },
    {
        "name": "地狱囚笼",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "90秒"]],
            "tab": ["水区域", "负面状态", "伤害", "对空"],
            "content": [
                "在指定位置生成一个巨型铁笼，铁笼持续",
                speSkillCon("6"),
                "秒，铁笼生成时将所有带有",
                speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                "效果的目标以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "拉拽入笼内，并施加眩晕，该效果持续",
                speSkillCon("6"),
                "秒。铁笼存在期间，会触发2次半径300的",
                speSkillCon("1000%最终攻击的雷元素伤害"),
                "和2次半径300的",
                speSkillCon("1000%最终攻击的霜元素伤害"),
                "，铁笼存在时间结束时，会炸毁自身，并对场上所有敌人造成",
                speSkillCon("2500%最终攻击的水元素伤害"),
                "，同时生成半径",
                speSkillCon("350"),
                "的水元素区域",
                "",
                "战术家特性：开战时异核充能增加50%"
            ]
        }
    },
    {
        "name": "特性：守狱人",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
            "atType": ["单体", "对空"],
            "content": [
                "根据当前目标的元素弱点选择不同的钥匙投掷向目标进行攻击，其中：",
                "",
                "当目标具有水元素弱点或不具有雷、霜弱点时，投掷水元素钥匙，成功命中目标会造成",
                speSkillCon("250%最终攻击的水元素伤害"),
                "",
                "当目标具有雷元素弱点时，投掷雷元素钥匙，钥匙成功命中目标会造成",
                speSkillCon("250%最终攻击的雷元素伤害"),
                "",
                "当目标具有霜元素弱点时，投掷霜元素钥匙，钥匙成功命中目标会造成",
                speSkillCon("250%最终攻击的霜元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "提提亚的主动技能会为命中目标施加",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "，该效果持续",
                    speSkillCon("20"),
                    "秒，提提亚的普通攻击伤害会以",
                    speSkillCon("35%"),
                    "的比例传递给拥有",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "链接的单位，该效果至多同时影响",
                    speSkillCon("10"),
                    "个单位。",
                    "",
                    "当场上仅有一个带有",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "的单位时，普通攻击伤害提高",
                    speSkillCon("250%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//零花本体特性
                [
                    "秘钥持续时间提高",
                    speSkillCon("20"),
                    "秒，造成伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "自身施放任意技能后，攻击速度提高",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒。罪业漩涡伤害传递比例提高至",
                    speSkillCon("60%")
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "口味变化",
            "limit": "【默契值4级】",
            "tips": [
                "“哈嘶哈嘶哈嘶，介也太辣了……”",
                "监督疑惑地看了看面前的姜汁可可。",
                "“你不是说你生活的那个小镇口味还挺重的？”",
                "“口能是我在乐园岛生活了太久，已经扑习惯吃这些了……”",
                "“……那我给你多加点冰。”",
                "“害要焦糖布丁。”",
                "“好好好。”"
            ],
            "recipe": [
                "柯林杯",
                "姜汁可可",
                "多冰",
                "糖浆",
                "焦糖布丁",
                "精致纸伞"
            ]
        },
        {
            "name": "珍贵之物",
            "limit": "【默契值13级】",
            "tips": [
                "在乐园岛上，淡水的地位颇为重要。",
                "即便提提亚并不喜欢它，她仍会喝得一滴不剩。"
            ],
            "recipe": [
                "环口杯",
                "白开水",
                "常温",
                "柠檬汁",
                "迷迭香"
            ]
        },
        {
            "name": "憧憬",
            "limit": "【默契值1级】",
            "tips": [
                "“真的是枸杞菊花茶啊。”提提亚好奇地看着杯中浮沉的黄瓜片。",
                "“你怎么一副没见过的样子？”",
                "“就是没见过啊……”",
                "“没见过，你为什么会点它？”",
                "“……他们说刑狱长大人很喜欢喝来着……”"
            ],
            "recipe": [
                "家用玻璃杯",
                "枸杞菊花茶",
                "黄瓜片",
                "茶冻",
                "心形插签"
            ]
        },
        {
            "name": "酒量培养",
            "limit": "【默契值1级】",
            "tips": [
                "“甜甜的~再来一杯！”",
                "“酒酿凤梨虽然甜甜的，但是度数蛮高的。你小心些，别喝醉了。”",
                "“放心啦，执行官大人，我的酒量还不错呢~”提提亚将空杯子往监督面前又推了推，“从我记事起，我爷爷就会用叉子沾酒给我尝尝呢。”",
                "“……怎么蒂尔莫的老人家也这样啊！！”"
            ],
            "recipe": [
                "双层叶纹",
                "酒酿凤梨",
                "双倍糖",
                "少冰",
                "紫藤"
            ]
        },
        {
            "name": "新朋友",
            "limit": "【默契值10级】",
            "tips": [
                "对于提提亚的来访，不少白荆科技的员工都感到了一丝不自在。",
                "“那可是乐园岛的狱警诶？”",
                "“不会又是来抓监督的吧？”",
                "“你为什么要说又啊！”",
                "但也有人对此毫不在意。",
                "“三点了！该喝下午茶了！为了庆祝元桃桃大人期中测验及格，每个人都可以来前台拿一杯青提啵啵奶茶哦~”元桃桃挑了挑下巴，“包括你。”",
                "“我吗？”提提亚眨巴眨巴眼，“好、好啊。”",
                "“……这就是小学生的社交力吗？”"
            ],
            "recipe": [
                "家用玻璃杯",
                "青提啵啵奶茶",
                "正常糖",
                "热",
                "椰果",
                "柠檬片"
            ]
        },
        {
            "name": "感同身受",
            "limit": "【默契值16级】",
            "tips": [
                "“提提亚……提提亚……M469！”",
                "“到！”",
                "“你写什么写得这么努力？玻璃橘子里的冰块都化光了。”",
                "“是工作日志。狱警出访别地，不仅要记录每一项行程安排，每天还要上交一篇思想报告，”提提亚用额头抵着桌面，“呜……我讨厌文书工作。”",
                "“……同感。”"
            ],
            "recipe": [
                "柯林杯",
                "玻璃橘子",
                "正常冰",
                "芒果果冻",
                "空心圆匙"
            ]
        },
        {
            "name": "所谓秩序",
            "limit": "【默契值18级】",
            "tips": [
                "“我听说，Binary Star的两位来自一个很特别的异世界。”",
                "“是的，‘艾达’。那里秩序极度严格，就像是一座被无限放大的囚笼。”",
                "“可秩序本身有什么错呢？就像我的钥匙，既能锁住罪人，也能放跑囚犯。”提提亚举起了面前的双莓之恋，“错的，向来都是人。”"
            ],
            "recipe": [
                "双层叶纹",
                "双莓之恋",
                "七分糖",
                "常温",
                "珍珠",
                "空心圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "桃桃乌龙茶",
                "正常糖",
                "正常冰",
                "蜜桃冻"
            ],
            "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 提提亚 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 提提亚 }