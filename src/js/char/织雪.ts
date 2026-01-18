import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "尖锋", "skill": [MXLaohenEnum.暴风骤雨方块α型, MXLaohenEnum.共振弱化], "attr": "yan", "star": "6",
    "nameEn": "ORIYUKI", "tag": ["输出", "爆发", "元素区域"], "originWorld": "未知", "orginChar": "原创",
    "cv": "", "openDate": "2025年07月31日",
    "resourse": ["定向共鸣·裁梦刀"], "laohenLink": LaohenNameEnum.局外人,
    "introText": "没想到有机会看到小监督为了我露出这么惊讶的表情，看来我做得很值嘛~唔，感觉这种特殊的再会都需要一个正式的自我介绍——你好，织雪，我的名字。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "S6立绘", "3D"],
        "imgs": [
            "e/e5/f2ehj3btxt3kmkm2kr8q30tcj69irov.png",
            "a/a5/sm6kcry0hpdbq6dd2cbi0wqt3xm806g.png",
            "9/97/k9fdn3jdbhqve8lqcouc8aow9t1e0kl.png",
            "9/95/1shu9zj7nn8sjd4ok1izz7uz8k5zise.png"
        ],
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["方外因缘"],
            "imgs": [
                "0/0a/alizzlckd697t0p6hqk9vyt2uadtb27.png"
            ],
            "listImg": [
                "7/7e/acxoyrvo27mdvatso4bvmkswwchbz3t.png"
            ]
        }
    ]
}

const skill1: DefaultNormalSkillObj = {
    "name": "飞刃裁断",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "格挡条破坏3"],//技能标签
        "sizeLevel": [
            ["1600%", "200%"],
            ["1840%", "230%"],
            ["2080%", "260%"],
            ["2320%", "290%"],
            ["2560%", "320%"],
            ["2800%", "350%"],
            ["3040%", "380%"],
            ["3280%", "410%"],
            ["3520%", "440%"],
            ["3680%", "460%"],
            ["3840%", "480%"],
            ["4000%", "500%"],
            ["4160%", "520%"],
            ["4320%", "540%"],
            ["4480%", "560%"]
        ],
        "content": [
            "向前方丢出剪刀，剪刀达到指定处会进行攻击，对",
            speSkillCon("300"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "，并对路径上的敌人造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的炎元素伤害"),
            "，同时获得",
            speSkillCon("1"),
            "个",
            speSkillCon("[翦羽]", SkillColorEnum.normal, ToastSkillEnum.翦羽),
            "",
            "施放技能后，可以提高",
            speSkillCon("1"),
            "级【纸上劫火】",
            "",
            "当【纸上劫火】达到",
            speSkillCon("2"),
            "级后，每段伤害可以无条件额外对敌人触发1次",
            speSkillCon("[爆燃反应]", SkillColorEnum.normal, ToastSkillEnum.爆燃反应),
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "千羽陷阱",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "自动技能",
        "skillTab": [["施放冷却", "15秒"]],
        "tab": ["炎区域", "伤害", "对空", "格挡条破坏3"],
        "sizeLevel": [
            ["150%"],
            ["173%"],
            ["195%"],
            ["218%"],
            ["240%"],
            ["263%"],
            ["285%"],
            ["308%"],
            ["330%"],
            ["345%"],
            ["360%"],
            ["375%"],
            ["390%"],
            ["405%"],
            ["420%"]
        ],
        "content": [
            "对当前敌人释放",
            speSkillCon("8"),
            "只分身纸鹤，分身纸鹤碰撞到敌人后会发生爆炸，对",
            speSkillCon("150"),
            "范围内的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "，并在当前敌人脚下产生",
            speSkillCon("200"),
            "范围炎元素区域",
            "",
            "当【纸上劫火】达到",
            speSkillCon("3"),
            "级后，每次施放技能后，为自身回复1次主动技能【飞刃裁断】次数",
            "",
            "开战时自动技能充能增加80%"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "纸雪祭",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "45秒"]],
        "tab": ["伤害", "自身增益", "格挡条破坏3"],
        "sizeLevel": [
            ["1800%", "720%"],
            ["2100%", "840%"],
            ["2400%", "960%"],
            ["2700%", "1080%"],
            ["2850%", "1140%"],
            ["3000%", "1200%"]
        ],
        "content": [
            "对",
            speSkillCon("500"),
            "范围的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "，然后对扇形区域的敌人造成",
            speSkillCon("", 0, -1, 0),
            speSkillCon("最终攻击的炎元素伤害"),
            "",
            "在施放技能后，进入持续",
            speSkillCon("30"),
            "秒的「纸折」状态。当织雪在此状态时，",
            speSkillCon("攻击速度：0.56次每秒"),
            "，织雪的普通攻击变为：",
            "",
            "对前方扇形范围的敌人进行3段伤害累计造成",
            speSkillCon("", 0, -1, 1),
            speSkillCon("最终攻击的炎元素伤害"),
            "，每段伤害无条件额外对敌人触发1次",
            speSkillCon("[爆燃反应]", SkillColorEnum.normal, ToastSkillEnum.爆燃反应)
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：染羽",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "275"], ["攻击速度", "0.50次每秒"]],
        "atType": ["群体"],
        "content": [
            "对自身前方敌人进行2次攻击，累计造成",
            speSkillCon("220%最终攻击的炎元素伤害"),
            "",
            "近战范围没有敌人时，对远处敌人释放1只纸鹤，对敌人造成",
            speSkillCon("100%最终攻击的炎元素伤害"),
            "（远程攻击不附带格挡条破坏效果）"
        ],//普通攻击
        "specialContent": [
            [
                "满足一定条件后，可以获得",
                speSkillCon("[翦羽]", SkillColorEnum.normal, ToastSkillEnum.翦羽),
                "，施放异核技能需要消耗",
                speSkillCon("[翦羽]", SkillColorEnum.normal, ToastSkillEnum.翦羽),
                "，",
                speSkillCon("[翦羽]", SkillColorEnum.normal, ToastSkillEnum.翦羽),
                "的数量上限是",
                speSkillCon("3"),
                "",
                "施放【飞刃裁断】可以获得1级【纸上劫火】。当【纸上劫火】达到",
                speSkillCon("1"),
                "/",
                speSkillCon("2"),
                "/",
                speSkillCon("3"),
                "/",
                speSkillCon("4"),
                "/",
                speSkillCon("5"),
                "级时，全场",
                speSkillCon("[爆燃反应]", SkillColorEnum.normal, ToastSkillEnum.爆燃反应),
                "的伤害提高",
                speSkillCon("80%"),
                "/",
                speSkillCon("160%"),
                "/",
                speSkillCon("220%"),
                "/",
                speSkillCon("260%"),
                "/",
                speSkillCon("300%"),
                "（当织雪离场或重伤时，此效果消失）",
                "",
                "登场时获得",
                speSkillCon("[同调]", SkillColorEnum.normal, ToastSkillEnum.同调),
                "效果"
            ],//零花本体特性
            [
                "登场时，获得",
                speSkillCon("2"),
                "个",
                speSkillCon("[翦羽]", SkillColorEnum.normal, ToastSkillEnum.翦羽),
                "。施放异核【纸雪祭】后，刷新【飞刃裁断】指令冷却。"
            ],//一花特性
            [
                "【纸上劫火】每提高1级，场上的炎元素同调者的暴击率提高",
                speSkillCon("6%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "、暴击伤害提高",
                speSkillCon("16%"),
                speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                "（当织雪重伤或离场时，此效果消失）"
            ],//三花特性
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
            "name": "难辨",
            "limit": "【默契值8级】",
            "tips": [
                "拿起面前那杯三分糖的酒酿凤梨，织雪一饮而尽。",
                "“你不是说你不喜欢喝这个嘛……？”",
                "“是啊小监督~”",
                "监督狐疑地看了看桌上的空杯，又看了看织雪嘴角纹丝不动的笑容。"
            ],
            "recipe": [
                "柯林杯",
                "酒酿凤梨",
                "三分糖",
                "正常冰",
                "圆匙"
            ]
        },
        {
            "name": "约定",
            "limit": "【默契值1级】",
            "tips": [
                "“冰镇酸梅汤里加珍珠一谁教你这么喝的？也太……奇怪了。”",
                "“不能告诉小监督哦。”",
                "“嗯？为什么？”",
                "“因为我跟那个人说好了。虽然只是一件无关紧要的小事，但约定就是约定，约定是不能打破的。”"
            ],
            "recipe": [
                "双层叶纹",
                "冰镇酸梅汤",
                "五分糖",
                "珍珠",
                "经典长签"
            ]
        },
        {
            "name": "归来者？",
            "limit": "【默契值13级】",
            "tips": [
                "杯中琥珀色的澄澈液体刚没过织雪的嘴唇，她的手便停了下来：“无糖热姜茶？”",
                "“……味觉正常。”",
                "“哎哟，试探我吗~”"
            ],
            "recipe": [
                "环口杯",
                "姜茶",
                "无糖",
                "热",
                "桂花"
            ]
        },
        {
            "name": "知我者",
            "limit": "【默契值1级】",
            "tips": [
                "“这杯薄荷蜜柚苏打还真是不错，不知道小苏姐姐喜不喜欢呢~”",
                "“……………………………………你说是这么说，其实已经招惹完她了吧？”",
                "“哈哈，知我者，小监督也~”"
            ],
            "recipe": [
                "家用玻璃杯",
                "薄荷蜜柚苏打",
                "少冰",
                "茶冻",
                "柠檬片"
            ]
        },
        {
            "name": "乐趣",
            "limit": "【默契值1级】",
            "tips": [
                "“啊呀？小监督你果然猜到我喜欢的饮品是什么了？”",
                "“你可以直接告诉我你想喝极夜马戏团了，有必要留给我20个环环相扣的迷题吗？”",
                "“没办法，这就是和聪明人交流的乐趣嘛。”"
            ],
            "recipe": [
                "柯林杯",
                "极夜马戏团",
                "柠檬汁",
                "偏淡",
                "蓝莓",
                "心形插签"
            ]
        },
        {
            "name": "记忆力？",
            "limit": "【默契值1级】",
            "tips": [
                "“你说有很多事你都不记得了，可我看你点这杯杨枝甘露倒是很丝滑。”",
                "“没办法，有些东西……就算想忘也忘不掉。”"
            ],
            "recipe": [
                "双层叶纹",
                "杨枝甘露",
                "原味雪顶",
                "椰果",
                "空心圆匙"
            ]
        },
        {
            "name": "奇特滋味",
            "limit": "【默契值13级】",
            "tips": [
                "“听说这款饮品的背后，还有一个关于一见钟情的纯爱故事啊？”",
                "“没错。”",
                "“一见钟情的味道……居然这么苦涩吗？”",
                "“啊！我放错了————你那杯我多加了一勺苦味素！”"
            ],
            "recipe": [
                "环口杯",
                "惑星的艾琳",
                "苦味素",
                "西瓜",
                "五叶长签"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "杨枝甘露",
                "原味雪顶",
                "芒果果冻"
            ],
            "ex": [569],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 织雪 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 织雪 }