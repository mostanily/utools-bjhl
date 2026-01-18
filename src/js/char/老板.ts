import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "战术家", "skill": [MXLaohenEnum.昂扬斗志菱形α型, MXLaohenEnum.意志永存], "attr": "wuli", "star": "1",
    "nameEn": "BOSS", "tag": ["充能", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "", "openDate": "2024年01月12日", "resourse": ["成就奖励"],
    "introText": "喵嗷！",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "3D"],
        "imgs": [
            "d/d9/b1be90b3b4u0hnas7bzw2tpa619jwtb.png",
            "5/53/g8zmshszdo3ny3dj21qvfpqxhgp99pr.png",
        ],
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "喵主子",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 12,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "20秒"], ["次数", "2"]],//技能使用情况，如冷却，可使用次数
        "tab": ["自身增益", "友方增益"],//技能标签
        "content": [
            "提升全体友方同调者",
            speSkillCon("38%[同调者攻击]"),
            speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
            "，持续",
            speSkillCon("15"),
            "秒，并回复",
            speSkillCon("25"),
            "秒异核充能"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "特制小鱼干",
    "aliasNum": "2",
    "maxLevel": 12,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "15"]],
        "tab": ["伤害"],
        "content": [
            "向目标连续投掷小鱼干攻击，总计造成",
            speSkillCon("3750%最终攻击的物理伤害")
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "暴鱼倾盆",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "50秒"]],
        "tab": ["伤害", "穿透屏障"],
        "content": [
            "开启暴走模式，随机乱射小鱼干，总计发射100条小鱼干，预计总共可造成",
            speSkillCon("5400%最终攻击的物理伤害"),
            "",
            "技能结束后将直接进入重伤状态",
            "",
            "战术家特性：开战时异核充能增加50%"
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：动态视力",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "800"], ["攻击速度", "0.67次每秒"]],
        "atType": ["单体", "对空"],
        "content": [
            "向当前目标发射小鱼干造成",
            speSkillCon("150%最终攻击的物理伤害")
        ],//普通攻击
        "specialContent": [
            [
                "可以攻击空中目标"
            ],//零花本体特性
            [
                "重新上场的冷却时间缩短",
                speSkillCon("50%")
            ],//一花特性
            [
                "异核技能伤害提高",
                speSkillCon("50%"),
                speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
            ]//三花特性
        ]
    }
}

const Skill = [
    skill1,
    skill2,
    skillSP,
    skillTese
]

const Tea: DefaultTeaObj = {
    "achievement": [
        {
            "name": "哈——",
            "limit": "【默契值4级】",
            "tips": [
                "“哈——”",
                "“谁往盘子里加的和牛啊？拿走，快拿走！”"
            ],
            "recipe": [
                "经典",
                "老板特供",
                "和牛",
                "菊花"
            ]
        },
        {
            "name": "喵~",
            "limit": "【默契值6级】",
            "tips": [
                "“老板居然会吃三文鱼？好尊贵的小猫咪——”"
            ],
            "recipe": [
                "青叶盘",
                "老板特供",
                "三文鱼",
                "薄荷叶"
            ]
        },
        {
            "name": "咕噜咕噜咕噜……",
            "limit": "【默契值16级】",
            "tips": [
                "“果然还是小鱼干最合适老板啦。等下再来一根怎么样？”",
                "“咕噜咕噜咕噜……”",
                "“嘿，跟个小摩托一样——啊！老板蹭我了！”"
            ],
            "recipe": [
                "鎏·金",
                "老板特供",
                "小鱼干",
                "樱花"
            ]
        },
        {
            "name": "猫咪本性",
            "limit": "【默契值16级】",
            "tips": [
                "“老板最喜欢冻干鸡肉了，对不对~”",
                "老板蹭了蹭监督的掌心，乖巧地喵了一声，可它的爪子却缓缓搭到了餐盘上。",
                "一点、一点、一点将它往吧台边缘推了过去……",
                "“不行！不可以哦——小猫咪不可以——”",
                "“哐当噼里啪啦！”"
            ],
            "recipe": [
                "青叶盘",
                "老板特供",
                "冻干鸡肉",
                "薄荷叶"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "老板特供",
                "冻干"
            ],
            "ex": [240],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 6,
            "recipe": [
                "老板特供",
                "三文鱼"
            ],
            "ex": [288],//参考默契值，无加，满家具，满加成
        },
        {
            "needLevel": 10,
            "recipe": [
                "老板特供",
                "冻干鸡肉"
            ],
            "ex": [360],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 老板 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 老板 }