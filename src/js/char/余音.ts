import { SkillColorEnum, SkillDescStatusImg } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon, speSkillConWithImg } from '../consts/SkillCon.ts';
import type { DefaultCharDescObj, DefaultNormalSkillObj, DefaultTeseSkillObj, DefaultTeaObj } from '../consts/simpleInterfaceConst.ts';

const Desc: DefaultCharDescObj = {
    "job": "筑术师", "skill": [MXLaohenEnum.核心充能三角β型, MXLaohenEnum.水陷抗涣], "attr": "shui", "star": "6",
    "nameEn": "COG", "tag": ["输出", "群攻", "屏障"], "originWorld": "艾达", "orginChar": "原创",
    "cv": "", "openDate": "2025年01月23日", "resourse": ["定向潜航·无心人"],
    "introText": "余音，白荆科技γ小队队长、数据分析师、情报专家……不必要的头衔太多了，我更愿意称呼自己为一枚诞生自艾达的万能齿轮。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "c/c6/bt7f9w5i3vyczgk9xbgj15yttcvn2qj.png",
            "4/4d/tl3udsp8pkqrt6b3otcmitf8zlu2h3q.png",
            "b/bc/rchcxb0tyu29jw6tcbgyhee0jb18k00.png"
        ]
    }
}

const skill1: DefaultNormalSkillObj = {
    "name": "纯净声源",
    "aliasNum": "1",//技能简称，1技能
    "maxLevel": 15,//技能最大等级
    "detail": {
        "type": "主动技能",//技能类型，主动、被动、自定等
        "skillTab": [["指令冷却", "12秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
        "tab": ["伤害", "对空"],//技能标签
        "content": [
            "朝指定区域投掷投枪，投枪达到指定处炸开，对",
            speSkillCon("250"),
            "周围单位造成",
            speSkillCon("2800％最终攻击的水元素伤害"),
            "，并对路径上的敌人造成",
            speSkillCon("300％最终攻击的水元素伤害"),
            "，并在目标点留下",
            speSkillCon("1"),
            "个",
            speSkillConWithImg(SkillDescStatusImg.余音切分音),
            speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
            "",
            "每次释放【纯净声源】后，提高自身自动技能回复速度",
            speSkillCon("40%"),
            speSkillCon("(属性乘区·自动技能回复速度)", SkillColorEnum.injuries),
            "，此效果最多可以叠加",
            speSkillCon("3"),
            "次"
        ]//满级技能内容描述
    }
}
const skill2: DefaultNormalSkillObj = {
    "name": "定音乐轨",
    "aliasNum": "2",
    "maxLevel": 15,
    "detail": {
        "type": "主动技能",
        "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
        "tab": ["伤害", "屏障", "穿透屏障", "对空"],
        "content": [
            "自动技能：",
            "",
            "冷却时间",
            speSkillCon("10"),
            "秒，将武器向当前目标投掷出去，对当前目标造成",
            speSkillCon("1400％最终攻击的水元素伤害"),
            "后爆炸，爆炸会对",
            speSkillCon("200"),
            "周围单位造成",
            speSkillCon("840％最终攻击的水元素伤害"),
            "，并在目标点附近留下",
            speSkillCon("1"),
            "个",
            speSkillConWithImg(SkillDescStatusImg.余音切分音),
            speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
            "",
            "",
            "主动技能：",
            "",
            "可以消耗场上存在的",
            speSkillCon("4"),
            "个",
            speSkillConWithImg(SkillDescStatusImg.余音切分音),
            speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
            "在指定位置形成持续",
            speSkillCon("10"),
            "秒的【定音乐轨】区域",
            "",
            "【定音乐轨】区域形成时，对范围内的敌人造成一次",
            speSkillCon("1400％最终攻击的水元素伤害"),
            "，并在【定音乐轨】区域的角落，落下投枪，投枪在【定音乐轨】区域边缘形成",
            speSkillCon("4"),
            "个",
            speSkillCon("较大强度"),
            "的墙型屏障（屏障破碎不影响【定音乐轨】区域存在时间）",
            "",
            "【定音乐轨】区域存在时，场上同调者触发",
            speSkillCon("[汽化反应]", SkillColorEnum.normal, ToastSkillEnum.汽化反应),
            "、",
            speSkillCon("[传导反应]", SkillColorEnum.normal, ToastSkillEnum.传导反应),
            "、",
            speSkillCon("[冻结反应]", SkillColorEnum.normal, ToastSkillEnum.冻结反应),
            "时，余音会对【定音乐轨】区域内部的敌人造成一次",
            speSkillCon("2240％最终攻击的水元素伤害"),
            "，并使目标基础减伤降低",
            speSkillCon("50%"),
            speSkillCon("(目标减益乘区·目标基础减伤降低)", SkillColorEnum.injuries),
            "（该效果属于",
            speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
            "），持续",
            speSkillCon("10"),
            "秒。此效果每隔",
            speSkillCon("5"),
            "秒能够触发一次",
            "",
            "场上可以同时存在多个【定音乐轨】区域。当余音重伤或离场时，所有的【定音乐轨】区域消失"
        ]
    }
}
const skillSP: DefaultNormalSkillObj = {
    "name": "双振合成器",
    "aliasNum": "异核",
    "maxLevel": 6,
    "detail": {
        "type": "异核技能",
        "skillTab": [["充能时间", "45秒"]],
        "tab": ["伤害", "负面状态", "对空", "屏障破坏"],
        "content": [
            "释放时，向指定",
            speSkillCon("600"),
            "区域内召唤",
            speSkillCon("2"),
            "次大量投枪坠落并摧毁范围内的所有敌方屏障，可以对区域内空中单位造成持续",
            speSkillCon("8"),
            "秒的击落，并对区域内敌人总计造成",
            speSkillCon("2000%最终攻击的水元素伤害"),
            "，最后对中心",
            speSkillCon("300"),
            "区域投掷出手中的投枪，对区域内的敌人造成",
            speSkillCon("2500%最终攻击的水元素伤害"),
            "",
            "技能释放完毕后，余音接下来的",
            speSkillCon("5"),
            "次",
            speSkillConWithImg(SkillDescStatusImg.余音普通攻击),
            "普通攻击会在目标处产生1个",
            speSkillConWithImg(SkillDescStatusImg.余音切分音),
            speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音)
        ]
    }
}
const skillTese: DefaultTeseSkillObj = {
    "name": "特性：复歌载波",
    "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
    "detail": {
        "type": "战斗特性",
        "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
        "atType": ["群体", "对空"],
        "content": [
            "向当前目标投掷标枪，命中后对",
            speSkillCon("200"),
            "半径的扇形区域敌人造成",
            speSkillCon("180%最终攻击的水元素伤害")
        ],//普通攻击
        "specialContent": [
            [
                "释放技能可以在场上形成",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "，",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "生成时会产生",
                speSkillCon("100"),
                "范围的水元素区域，场上最多可以同时存在",
                speSkillCon("8"),
                "个",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "。每产生",
                speSkillCon("4"),
                "个",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "，回复1次【纯净声源】技能次数。",
                "",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "数量达到一定程度时，可以消耗",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "，主动释放【定音乐轨】。（区域切换、同调者切换至后备队或重伤时，场上所有的",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "消失）"
            ],//零花本体特性
            [
                "当场上存在【定音乐轨】区域时，自身的暴击率提高",
                speSkillCon("30%"),
                speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                "。入场时，直接在自身周围产生",
                speSkillCon("3"),
                "个",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "，且释放【定音乐轨】消耗的",
                speSkillConWithImg(SkillDescStatusImg.余音切分音),
                speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                "数量降低至",
                speSkillCon("3"),
                "个"
            ],//一花特性
            [
                "自身造成的所有伤害暴击时伤害提高",
                speSkillCon("30%"),
                speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                "，且当场上存在【定音乐轨】区域时，自身造成的伤害忽略敌方单位",
                speSkillCon("20%"),
                speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                "基础减伤"
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
            "name": "文书工作",
            "limit": "【默契值13级】",
            "tips": [
                "“难得看你主动点咖啡啊，还加了双倍浓缩……”",
                "“……要加班。”",
                "“?”",
                "“γ小队也有文书工作。”余音拨弄着杯中的冰块",
                "“还是说，监督希望腾蛇或者比戈来完成？”"
            ],
            "recipe": [
                "淑女风尚",
                "恩利都苦啤兑苦咖",
                "多冰",
                "盐",
                "加双份",
                "空心圆匙"
            ]
        },
        {
            "name": "偏食",
            "limit": "【默契值5级】",
            "tips": [
                "“欸欸，余音你不用拿糖包了。你那杯鹿鹿冻柠茶已经加过双倍糖了。”",
                "“苦。”",
                "“……不敢想你在艾达严格的膳食标准下是怎么生活的。”"
            ],
            "recipe": [
                "经典格纹",
                "鹿鹿冻柠茶",
                "双倍糖",
                "少冰",
                "银杏叶"
            ]
        },
        {
            "name": "交友",
            "limit": "【默契值6级】",
            "tips": [
                "“你居然点了姜汁可可？对你来说不会不够甜吗？”",
                "“这是给熹尔带的。”",
                "“？你终于和小队之外的人交上朋友了——监督我好欣慰啊——”",
                "“……我的朋友很多。”",
                "“嗯嗯嗯对对对行行行。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "姜汁可可",
                "热",
                "糖浆",
                "薄荷叶"
            ]
        },
        {
            "name": "难得愤怒",
            "limit": "【默契值16级】",
            "tips": [
                "“监督，我的手环显示，我的血压在164.27秒内上升了3.64个百分点。”",
                "“怎么了？”",
                "“这居然是一杯无·糖的阿华田奶茶。”"
            ],
            "recipe": [
                "鎏·金",
                "阿华田奶茶",
                "无糖",
                "咖啡冻",
                "精致纸伞"
            ]
        },
        {
            "name": "执行力",
            "limit": "【默契值1级】",
            "tips": [
                "“……余音，这杯是？”",
                "“冰镇苏打水。”",
                "“不……我的意思是，我没点单啊。”",
                "“监督看起来很累，所以我先行为你准备好了。”"
            ],
            "recipe": [
                "青叶陶瓷杯",
                "冰镇苏打水",
                "多冰",
                "芒果果冻",
                "心形插签"
            ]
        },
        {
            "name": "信息差",
            "limit": "【默契值10级】",
            "tips": [
                "“双莓之恋……说起来这还是和Binary Star的联名饮料呢。很难想象在艾达，司危和芙蕖居然会一点也不出名。”",
                "“事实上，并没有几个艾达公民知晓她们的名字。包括她们的‘最后一跃’……所有的信息都被严格控制起来了。”",
                "……",
                "余音低下头，避开了监督复杂的目光，",
                "“信息差本身就是一种和平的暴力，而我作为机动协理执行员……醒悟得太晚。”"
            ],
            "recipe": [
                "经典格纹",
                "双莓之恋",
                "双倍糖",
                "常温",
                "焦糖布丁",
                "桂花"
            ]
        },
        {
            "name": "逻辑判断",
            "limit": "【默契值13级】",
            "tips": [
                "“你又给我提前点好了饮料啊，余音。我不喜欢喝怎么办？”",
                "“所以监督不喜欢这次的杨枝甘露吗？”",
                "“我喜欢……算你猜对了！”",
                "“我只是做出了符合逻辑的判断。毕竟杨枝甘露是完美的。”"
            ],
            "recipe": [
                "淑女风尚",
                "杨枝甘露",
                "樱桃",
                "椰果",
                "圆匙"
            ]
        }
    ],
    "hignRapport": [
        {
            "needLevel": 1,
            "recipe": [
                "杨枝甘露",
                "樱桃",
                "珍珠"
            ],
            "ex": [540],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 余音 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 余音 }