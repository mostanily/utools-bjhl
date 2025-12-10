import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.核心充能方块β型, MXLaohenEnum.冰霜共鸣], "attr": "shuang", "star": "5",
    "nameEn": "BEGONIA", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
    "cv": "冯骏骅", "openDate": "2024年01月12日", "resourse": ["常态共鸣"],
    "introText": "比戈尼娅。现在，你想从哪里开始认识我？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "1/10/pwj4z8p4m4ico2zp6n755a4vdpx2n8i.png",
            "4/4a/r9wor50yt2nv439q7eg704uvq3iyhxx.png",
            "c/c1/k5f1a15632hcll5hfgope7elstphf67.png"
        ],
    }
}

const Skill = [
    {
        "name": "长哭",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 12,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
            "tab": ["伤害", "负面状态", "穿透屏障", "格挡条破坏1"],//技能标签
            "content": [
                "挥出长鞭重击地面，对范围内的所有敌方地面单位造成",
                speSkillCon("1500%最终攻击的霜元素伤害"),
                "，并减少命中单位",
                speSkillCon("60%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "，持续",
                speSkillCon("5"),
                "秒，每命中一个敌方单位回复",
                speSkillCon("6"),
                "点",
                speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                "",
                "被命中的所有敌方地面单位会以",
                speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                "牵引向技能范围"
            ]//满级技能内容描述
        }
    },
    {
        "name": "子夜啼",
        "aliasNum": "2",
        "maxLevel": 12,
        "detail": {
            "type": "自动技能",
            "skillTab": [["指令冷却", "-"], ["施放条件", "100血食"]],
            "tab": ["伤害", "持续施法", "格挡条破坏1"],
            "content": [
                "消耗所有",
                speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                "，在",
                speSkillCon("8"),
                "秒内持续对自身周围随机",
                speSkillCon("250"),
                "范围内的敌方地面单位造成总计",
                speSkillCon("5000%最终攻击的霜元素伤害"),
                "",
                "如果自身周围只有一名敌方地面单位，则该技能造成的伤害提升",
                speSkillCon("100%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                "",
                "该技能施放的持续时间内，自身受到的所有伤害额外减少",
                speSkillCon("18%~30%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
            ]
        }
    },
    {
        "name": "狂欢夜",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "60秒"]],
            "tab": ["伤害", "负面状态", "持续施法", "格挡条破坏1"],
            "content": [
                "技能持续",
                speSkillCon("21"),
                "秒，期间不会被优先攻击，释放众多伤魂鸟，攻击目标半径",
                speSkillCon("400"),
                "范围内所有敌方单位共造成",
                speSkillCon("4800%最终攻击的霜元素伤害"),
                "；处于技能范围内的所有敌方单位降低",
                speSkillCon("70%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                "",
                "其他霜元素友方同调者对范围内的敌方造成暴击后，会额外对该目标造成",
                speSkillCon("240%最终攻击的霜元素伤害"),
                "",
                "伤魂鸟会吸收该范围内阵亡敌方单位，每次吸收回复自身",
                speSkillCon("8"),
                "点",
                speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食)
            ]
        }
    },
    {
        "name": "特性：星之飨",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "350"], ["攻击速度", "0.62次每秒"]],
            "atType": ["群体", "格挡条破坏1"],
            "content": [
                "先向当前目标挥击长鞭造成",
                speSkillCon("182%最终攻击的霜元素伤害"),
                "，再向前方刺出长鞭造成矩形范围",
                speSkillCon("91%最终攻击的霜元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "伤魂鸟视为召唤物",
                    "",
                    "普通攻击将回复",
                    speSkillCon("3"),
                    "点",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                    "，且场上每存在一个除自身外的其他友方同调者都会额外回复",
                    speSkillCon("1"),
                    "点",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                    "。",
                    "",
                    "普通攻击时伤魂鸟吸取场上除自身外其他友方同调者",
                    speSkillCon("5%"),
                    "当前生命值，并使该友方同调者获得",
                    speSkillCon("5%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                    "基础攻击速度提升，每",
                    speSkillCon("5"),
                    "最多触发一次该效果",
                    "",
                    "每个友方同调者最多通过该方式获得",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                    "基础攻击速度的提升，该效果持续整场战斗"
                ],//零花本体特性
                [
                    "友方同调者通过特性获得的最大基础攻击速度提升至",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                ],//一花特性
                [
                    "友方同调者因被吸取",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                    "获得攻击速度提升时，每1%攻击速度提升会同时使友方同调者造成的霜元素伤害额外提高",
                    speSkillCon("1%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "优雅永存",
            "limit": "【默契值13级】",
            "tips": [
                "“你一定要用郁金香酒杯装牛奶吗？”",
                "“亲爱的，优雅可是我的最后一件衣服，你要我脱掉吗？”",
                "“……穿着吧！穿着吧！”"
            ],
            "recipe": [
                "郁金香酒杯",
                "甜牛乳",
                "正常糖",
                "常温",
                "长匙"
            ]
        },
        {
            "name": "雷区",
            "limit": "【默契值1级】",
            "tips": [
                "“枸杞、杨桃、咸梅干、银杏叶……亲爱的，你也许不知道我喜欢什么，但你可真是了解我不喜欢什么。”"
            ],
            "recipe": [
                "蝶形香槟杯",
                "枸杞菊花茶",
                "杨桃",
                "咸梅干",
                "银杏叶"
            ]
        },
        {
            "name": "坏女人",
            "limit": "【默契值1级】",
            "tips": [
                "比戈尼娅看了眼马天尼杯里的冰雪梨汁，嗤笑一声，优雅地将里头的汪汪饼干挑了出来……",
                "——随后一口，咬掉了饼干的头。"
            ],
            "recipe": [
                "马天尼杯",
                "鲜榨雪梨汁",
                "多冰",
                "汪汪饼干",
                "薄荷叶"
            ]
        },
        {
            "name": "反差",
            "limit": "【默契值13级】",
            "tips": [
                "光看比戈尼娅举着郁金香酒杯，迤迤然走动的样子，谁能想到她杯中装的竟是无糖酸梅汤呢？"
            ],
            "recipe": [
                "郁金香酒杯",
                "冰镇酸梅汤",
                "无糖",
                "蜜桃冻",
                "柠檬片"
            ]
        },
        {
            "name": "秘密配方",
            "limit": "【默契值5级】",
            "tips": [
                "“啊呀，你真的没有把配方告诉任何人？”",
                "“真乖。”",
                "比戈尼娅笑眯眯地将马天尼杯口的薄荷叶摘了下来，轻轻舔了一口茎叶上沾染的烈性汁液。"
            ],
            "recipe": [
                "笛型香槟杯",
                "极夜马戏团",
                "盐",
                "偏烈",
                "樱桃",
                "白玉兰"
            ]
        },
        {
            "name": "归于混沌",
            "limit": "【默契值10级】",
            "tips": [
                "“太阳升起？真是幻想中才有的景色。”",
                "比戈尼娅毫不留情地将青梅投入香槟杯中，瑰丽的颜色很快便融成混沌一片。"
            ],
            "recipe": [
                "蝶形香槟杯",
                "黎威尔日升",
                "奶精球",
                "柠檬汁",
                "青梅",
                "经典长签"
            ]
        },
        {
            "name": "夜色危情",
            "limit": "【默契值16级】",
            "tips": [
                "“你问我为什么喜欢喝这个？”",
                "“当然是因为它的名字。”",
                "比戈尼娅笑着举起马天尼杯，光线在少量冰块与茶冻之间迷离，在她脸上投下暧昧的影子。"
            ],
            "recipe": [
                "马天尼杯",
                "夜色危情",
                "少冰",
                "偏烈",
                "茶冻",
                "枫叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "冰镇酸梅汤",
                "五分糖",
                "珍珠"
            ],
            "ex": [346, 388, 423],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 4,
            "recipe": [
                "玻璃橘子",
                "正常冰",
                "芒果果冻"
            ],
            "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 5,
            "recipe": [
                "极夜马戏团",
                "柠檬汁",
                "偏烈",
                "樱桃"
            ],
            "ex": [473, 530, 578],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "夜色危情",
                "偏烈",
                "正常冰",
                "珍珠"
            ],
            "ex": [488, 547, 596],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 比戈尼娅 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 比戈尼娅 }