import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "轻卫", "skill": [MXLaohenEnum.自动瞄准系统方块β型, MXLaohenEnum.润物无声], "attr": "shui", "star": "1",
    "nameEn": "RICHEST", "tag": ["防护", "支援"], "originWorld": "海错", "orginChar": "原创",
    "cv": "夏磊", "openDate": "2024年01月12日", "resourse": ["成就奖励"],
    "introText": "嗨，你就是监督吧，我是豹富，筱筱小姐让我来找你报到……等一下，我好像压到什么东西了……哪里来的一张兑奖券？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "a/ae/flrvirn408cl9b294ci068n08fudtc6.png",
            "4/4e/cc7vegiolpb60f969mxaz06h1t1mqrl.png"
        ]
    }
}

const Skill = [
    {
        "name": "炫耀",
        "aliasNum": "1",//技能简称，1技能
        "maxLevel": 15,//技能最大等级
        "detail": {
            "type": "主动技能",//技能类型，主动、被动、自定等
            "skillTab": [["指令冷却", "20秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
            "tab": ["自身增益", "回复", "负面状态"],//技能标签
            "sizeLevel": [
                ["500%"],
                ["575%"],
                ["650%"],
                ["725%"],
                ["800%"],
                ["875%"],
                ["950%"],
                ["1025%"],
                ["1100%"],
                ["1150%"],
                ["1200%"],
                ["1250%"],
                ["1275%"],
                ["1300%"],
                ["1325%"],
            ],
            "content": [
                speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                "周围敌人攻击自身，获得格挡能力，基础减伤增加",
                speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                "，每秒回复",
                speSkillCon("7%最大生命值"),
                "，持续",
                speSkillCon("20"),
                "秒期间不时向外扔出炸弹，对半径",
                speSkillCon("300"),
                "范围内的敌人造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的物理伤害"),
                "",
                "持续时间结束或受到致命伤害时，跳出水盆使周围的敌人",
                speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                "，持续4秒"
            ]//满级技能内容描述
        }
    },
    {
        "name": "上岸",
        "aliasNum": "2",
        "maxLevel": 15,
        "detail": {
            "type": "自动技能",
            "skillTab": [["施放冷却", "10"]],
            "tab": ["伤害", "格挡条破坏3"],
            "sizeLevel": [
                ["1100%"],
                ["1150%"],
                ["1300%"],
                ["1450%"],
                ["1600%"],
                ["1750%"],
                ["1900%"],
                ["2050%"],
                ["2200%"],
                ["2300%"],
                ["2400%"],
                ["2500%"],
                ["2550%"],
                ["2600%"],
                ["2650%"],
            ],
            "content": [
                "冲向目标用尾巴反复拍打，总计造成",
                speSkillCon("", 0, -1, 0),
                speSkillCon("最终攻击的水元素伤害")
            ]
        }
    },
    {
        "name": "天选之豹",
        "aliasNum": "异核",
        "maxLevel": 6,
        "detail": {
            "type": "异核技能",
            "skillTab": [["充能时间", "100秒"]],
            "tab": ["自身增益", "友方增益", "回复"],
            "sizeLevel": [
                ["20%", "30%", "20%"],
                ["30%", "30%", "20%"],
                ["30%", "40%", "25%"],
                ["30%", "45%", "30%"],
                ["35%", "45%", "30%"],
                ["40%", "45%", "30%"],
            ],
            "content": [
                "所有同调者有",
                speSkillCon("", 0, -1, 0),
                "的概率随机获得以下祈愿效果（至少获得1种），持续",
                speSkillCon("20"),
                "秒：",
                "",
                "回复",
                speSkillCon("", 0, -1, 1),
                speSkillCon("最大生命值"),
                "",
                "提升",
                speSkillCon("", 0, -1, 2),
                speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                "",
                "提升",
                speSkillCon("", 0, -1, 2),
                speSkillCon("[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                "",
                "提升",
                speSkillCon("", 0, -1, 2),
                speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精),
                speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries)
            ]
        }
    },
    {
        "name": "特性：豹豹我啊——",
        "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
        "detail": {
            "type": "战斗特性",
            "tab": [["射程", "400"], ["攻击速度", "0.59次每秒"]],
            "atType": ["群体"],
            "content": [
                "向前方泼洒水柱，造成矩形范围",
                speSkillCon("204%最终攻击的水元素伤害")
            ],//普通攻击
            "specialContent": [
                [
                    "幸运超级加倍，受到攻击时有",
                    speSkillCon("5%"),
                    "概率不受伤害；普通攻击有",
                    speSkillCon("5%"),
                    "概率造成3倍伤害"
                ],//零花本体特性
                [
                    "触发不受伤害时，下次攻击必定为3倍伤害"
                ],//一花特性
                [
                    "特性中不受伤害的概率和造成3倍伤害的概率提升至",
                    speSkillCon("10%")
                ]//三花特性
            ]
        }
    }
]

const Tea = {
    "achievement": [
        {
            "name": "敏感豹豹",
            "limit": "【默契值4级】",
            "tips": [
                "“喂，豹富大人可不是宠物啊！”",
                "“嗯嗯嗯好好好知道了……”",
                "“我看到你丢鸡肉冻干进去了！”"
            ],
            "recipe": [
                "格纹盘",
                "豹豹特供",
                "冻干鸡肉",
                "薄荷叶"
            ]
        },
        {
            "name": "皱皮豹豹",
            "limit": "【默契值6级】",
            "tips": [
                "“豹富的脸怎么皱成这个样子？”",
                "“他说我选的小鱼干太苦，非要自己挑。喏，你看他选的——更苦。”",
                "“手气真好啊，选中了最大的那一条。”"
            ],
            "recipe": [
                "青叶盘",
                "豹豹特供",
                "小鱼干",
                "菊花"
            ]
        },
        {
            "name": "野性豹豹",
            "limit": "【默契值16级】",
            "tips": [
                "“和牛要几分熟的？”",
                "“一分就行~”",
                "“一分！？”"
            ],
            "recipe": [
                "经典",
                "豹豹特供",
                "和牛",
                "樱花"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "豹富特供",
                "冻干"
            ],
            "ex": [240, 268, 292, 319],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "豹富特供",
                "三文鱼"
            ],
            "ex": [288, 322, 351, 383],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 16,
            "recipe": [
                "豹富特供",
                "和牛"
            ],
            "ex": [360, 403, 439, 479],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 豹富 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 豹富 }