import { toastWithSkill, laohenToastWithSkill } from './toastWithSkillConst.ts';
import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenToastSkillEnum } from '../enum/toastSkillEnum.ts';
import {
    SkillColorEnum,
    LaohenRarity,
    LaohenSkillType,
    LaohenAttrType,
    LaohenResourse,
    LaohenIllust,
    JobTypeName
} from '../enum/skillSimpleEnum.ts';

/**
 * 返回特殊技能内容对象
 * @param con 特殊技能内容
 * @param color 颜色类型
 * @param toastTitle toast弹窗标题内容
 * @returns 
 */
const speSkillCon = (con: string, color: number = SkillColorEnum.normal, toastTitle: number = -1) => {
    const res = { "desc": con, "color": color, "withToast": false, "title": "", "con": "" };
    if (toastTitle != -1) {
        res.withToast = true
        if (typeof toastWithSkill[toastTitle][0] === "string") {
            res.title = toastWithSkill[toastTitle][0]
        }
        if (typeof toastWithSkill[toastTitle][1] === "string") {
            res.con = toastWithSkill[toastTitle][1]
        }
    }
    return res
}

/**
 * 返回烙痕技能特殊提示内容对象
 * @param toastTitle 枚举值LaohenToastSkillEnum.(x)
 * @returns 
 */
const speLaohenSkillCon = (toastTitle: number) => {
    const res = { "title": "", "con": new Array };
    if (toastTitle != -1) {
        const extraCon = laohenToastWithSkill[toastTitle]
        if (typeof extraCon[0] === "string") {
            res.title = extraCon[0]
        }
        res.con = extraCon
    }
    return res
}

const allLaohenSkill = [
    {
        "name": "回收利用", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false, //是否是激励技能
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.回收利用,
        "takeEffect": [
            JobTypeName.所有同调者
        ],
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.度晴波
            ],
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印体质不低于750时，同调者释放指令冷却不低于15秒的主动技能后，回复",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("70％（等级3时）"),
            "自动技能的冷却时间"
        ]
    },
    {
        "name": "你相信光吗", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r白，sr金，ssr红）
        "id": MXLaohenEnum.你相信光吗,
        "takeEffect": [
            JobTypeName.铁御,
            JobTypeName.轻卫,
            JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.玄学
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当同调者受到致命伤害时，生命值降为1点并获得持续",
            speSkillCon("4.0（等级1时）"),
            "/",
            speSkillCon("8.0（等级2时）"),
            "/",
            speSkillCon("12.0（等级3时）"),
            "秒的无敌效果，无敌持续期间提升50％",
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，单区域最多触发一次"
        ]
    },
    {
        "name": "势如破竹·对精英", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.势如破竹对精英,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.最好吃的朋友,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.化为千鹤,
                LaohenNameEnum.假日余暇,
                LaohenNameEnum.繁星记忆,
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "技能命中单个精英目标时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "乘人之危·对地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.乘人之危对地,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.因果历然,
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.如在镜中,
                LaohenNameEnum.成长,
                LaohenNameEnum.醒太平,
                LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "修"
            ] //角色名称
        },
        "detail": [
            "攻击带有",
            speSkillCon("【减益效果】"),
            "的地面目标时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.减益效果)
        ]
    },
    {
        "name": "单打独斗·对首领", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.单打独斗对首领,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.默,
                LaohenNameEnum.度晴波,
                LaohenNameEnum.未晞
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "技能命中单个首领目标时，提升",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("30%（等级2时）"),
            "/",
            speSkillCon("40%（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外物理伤害"
        ]
    },
    {
        "name": "生机盎然·方块·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生机盎然方块β型,
        "takeEffect": [
            JobTypeName.铁御,
            JobTypeName.轻卫,
            JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.世事难料,
                LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "禺期"
            ] //角色名称
        },
        "detail": [
            "同调者额外受治疗效果提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("23％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（属性乘区·额外受治疗加成）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[生机盎然·方块·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "自动瞄准系统·方块·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自动瞄准系统方块β型,
        "takeEffect": [
            JobTypeName.铁御,
            JobTypeName.轻卫,
            JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.遇见宝石海,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.繁花蜃影,
                LaohenNameEnum.化为千鹤,
                LaohenNameEnum.流光竞夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "耶芙娜",
                "豹富"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[自动瞄准系统·方块·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "蚀力掌控", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀力掌控,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.烟尘往事
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "蚀元素自动技能额外提高",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "暴击率"
        ]
    },
    {
        "name": "职业联动·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.职业联动三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.失途之日,
                LaohenNameEnum.默,
                LaohenNameEnum.秘密音律
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上每有一名不同职业的同调者时，提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "乘人之危·对空", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.乘人之危对空,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.奢梦,
                LaohenNameEnum.增肌训练
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击带有",
            speSkillCon("【减益效果】"),
            "的空中目标时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.减益效果)
        ]
    },
    {
        "name": "暴风骤雨·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.暴风骤雨三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.失途之日,
                LaohenNameEnum.成长,
                LaohenNameEnum.早日康复
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击速度提高",
            speSkillCon("7％（等级1时）"),
            "/",
            speSkillCon("13％（等级2时）"),
            "/",
            speSkillCon("18％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[暴风骤雨·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "核心充能·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.因果历然,
                LaohenNameEnum.默,
                LaohenNameEnum.度晴波,
                LaohenNameEnum.TARGETERROR,
                LaohenNameEnum.截稿日,
                LaohenNameEnum.白夜,
                LaohenNameEnum.混乱烟尘
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "鸢",
                "余音"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[核心充能·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "狩猎时刻·对地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.狩猎时刻对地,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.空,
                LaohenNameEnum.家,
                LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "瞳"
            ] //角色名称
        },
        "detail": [
            "攻击生命值低于30％的地面敌人时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "庇佑", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.庇佑,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.月光下的告解,
                LaohenNameEnum.同行,
                LaohenNameEnum.神迹,
                LaohenNameEnum.街市清晨,
                LaohenNameEnum.书卷晨曦,
                LaohenNameEnum.归档
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "凤无梦"
            ] //角色名称
        },
        "detail": [
            "进场时，获得10％最大生命值的护盾；同调者当前存在护盾时攻击提升",
            speSkillCon("75（等级1时）"),
            "/",
            speSkillCon("130（等级2时）"),
            "/",
            speSkillCon("180（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击额外增加值）", SkillColorEnum.injuries),
            "点"
        ]
    },
    {
        "name": "元素瞄准", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素瞄准,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.一枕酣甜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对敌方单位造成元素伤害时，根据与敌方单位的距离（上限700距离）提升造成的额外伤害，最多提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "职业联动·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.职业联动菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.雨中愿
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上每有一名不同职业的同调者时，提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "机械特攻·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.机械特攻β型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.失途之日,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.白夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "目标为机械单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[机械特攻·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "异核过载", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.异核过载,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.双重引力,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.千灯无间,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.泡影,
                LaohenNameEnum.奢梦,
                LaohenNameEnum.意外邂逅,
                LaohenNameEnum.生死在握
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "明月尘"
            ] //角色名称
        },
        "detail": [
            "场上的同调者异核技能伤害每秒增加1％，最高提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("23％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "，并在释放异核技能后重置"
        ]
    },
    {
        "name": "及时援助·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.及时援助菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.成长,
                LaohenNameEnum.最好吃的朋友,
                LaohenNameEnum.甜蜜心绪
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "芙蕖",
                "元桃桃"
            ] //角色名称
        },
        "detail": [
            "治疗效果增加",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[及时援助·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "伤害赐福·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.伤害赐福菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.精准控分,
                LaohenNameEnum.记录一夏
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "龙晴",
                "言雀",
                "瓦卡莎"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("18％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[伤害赐福·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "核心充能·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幻想彼境,
                LaohenNameEnum.千灯无间,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.雨中愿,
                LaohenNameEnum.旧巷
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "阿棘"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[核心充能·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "护盾赐福", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.护盾赐福,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.逐光者,
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.成长,
                LaohenNameEnum.最好吃的朋友,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者拥有护盾的期间，造成的元素伤害额外提高",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "摆脱困境", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.摆脱困境,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.玄学,
                LaohenNameEnum.繁花蜃影
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者当前生命低于90％时，获得自身",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("70％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            "最大生命值的护盾，单区域最多触发一次",
        ]
    },
    {
        "name": "饱和式救援", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.饱和式救援,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.火热手感,
                LaohenNameEnum.泡影,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.世事难料,
                LaohenNameEnum.旧城夜幕,
                LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "百里屠苏"
            ] //角色名称
        },
        "detail": [
            "同调者受到治疗后，其5秒内受到的治疗效果额外增加",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（属性乘区·额外受治疗加成）", SkillColorEnum.injuries),
            "，每10秒最多触发一次"
        ]
    },
    {
        "name": "狩猎时刻·对空", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.狩猎时刻对空,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.秘密音律,
                LaohenNameEnum.白夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击生命值低于30％的空中敌人时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "特殊减伤·对空", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.特殊减伤对空,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.庆典巡游,
                LaohenNameEnum.逐光者,
                LaohenNameEnum.海临人的好奇心,
                LaohenNameEnum.TARGETERROR,
                LaohenNameEnum.书卷晨曦,
                LaohenNameEnum.早日康复,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "艾摩诃"
            ] //角色名称
        },
        "detail": [
            "同调者受到来自空中单位伤害时，该伤害减少",
            speSkillCon("30％~50％（等级1时）"),
            "/",
            speSkillCon("45％~75％（等级2时）"),
            "/",
            speSkillCon("54％~90％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，每8秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "炎能灌注", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.炎能灌注,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.残照,
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.CATvsDOG
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "普通攻击命中处于",
            speSkillCon("【炎元素区域】"),
            "上的敌方单位时，额外伤害提升",
            speSkillCon("16％（等级1时）"),
            "/",
            speSkillCon("32％（等级2时）"),
            "/",
            speSkillCon("48％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.炎元素区域)
        ]
    },
    {
        "name": "虽远必诛", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.虽远必诛,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.残照,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.火热手感,
                LaohenNameEnum.流光竞夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对敌方单位造成伤害时，同调者与战术终端的距离越远（上限900距离），将造成更高的额外伤害，最多提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "化险为夷", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.化险为夷,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.残照,
                LaohenNameEnum.同行,
                LaohenNameEnum.野风,
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.醒太平,
                LaohenNameEnum.玄学,
                LaohenNameEnum.繁花蜃影,
                LaohenNameEnum.樱华如梦
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "昊苍"
            ] //角色名称
        },
        "detail": [
            "同调者受到自身最大生命值50％以上的单次伤害时，该伤害减少",
            speSkillCon("36％~60％（等级1时）"),
            "/",
            speSkillCon("48％~80％（等级2时）"),
            "/",
            speSkillCon("54％~90％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，每10秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "生生不息·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生生不息方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.残照,
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.交换惊喜,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "Sweeper-EX"
            ] //角色名称
        },
        "detail": [
            "造成物理伤害时，回复自身",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            "的最大生命值，该效果每6秒最多触发一次"
        ]
    },
    {
        "name": "自动瞄准系统·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自动瞄准系统方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.残照,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.旖旎夜色,
                LaohenNameEnum.千本之门,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "霍冉"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[自动瞄准系统·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "生机盎然·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生机盎然方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.残照,
                LaohenNameEnum.度晴波,
                LaohenNameEnum.醒太平,
                LaohenNameEnum.繁星记忆,
                LaohenNameEnum.樱华如梦,
                LaohenNameEnum.大隐于市
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "莫红袖"
            ] //角色名称
        },
        "detail": [
            "同调者额外受治疗效果提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("23％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（属性乘区·额外受治疗加成）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[生机盎然·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "坚实护盾", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚实护盾,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.残照,
                LaohenNameEnum.天陷,
                LaohenNameEnum.精准控分,
                LaohenNameEnum.假日余暇,
                LaohenNameEnum.雨中愿,
                LaohenNameEnum.于人海中,
                LaohenNameEnum.旧巷,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "言御",
                "紫都",
                "苏筱"
            ] //角色名称
        },
        "detail": [
            "登场时，获得自身",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("70％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            "最大生命值的护盾",
        ]
    },
    {
        "name": "危险游戏", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.危险游戏,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.假日余暇,
                LaohenNameEnum.于人海中
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每击败一名敌人，增加全体友方同调者",
            speSkillCon("200（等级1时）"),
            "/",
            speSkillCon("350（等级2时）"),
            "/",
            speSkillCon("500（等级3时）"),
            "点护盾"
        ]
    },
    {
        "name": "核心充能·方块·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能方块β型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.万家灯火,
                LaohenNameEnum.生死在握,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "比戈尼娅"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[核心充能·方块·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "昂扬斗志·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.流光竞夜,
                LaohenNameEnum.团圆,
                LaohenNameEnum.雨中愿,
                LaohenNameEnum.于人海中,
                LaohenNameEnum.甜蜜心绪,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "铁杵磨成针·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.铁杵磨成针菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.幕影重重,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.一枕酣甜,
                LaohenNameEnum.不期而遇,
                LaohenNameEnum.落日残迹
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "普通攻击未造成暴击时，自身主动技能暴击率提高",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("10％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，最高提升至100％，并在释放技能后重置"
        ]
    },
    {
        "name": "快步流星", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.快步流星,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.速速降温,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使用主动技能后，增加自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("53％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "攻击速度，持续10秒",
        ]
    },
    {
        "name": "深藏身与名", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.深藏身与名,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.飞驰海岸线
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施放异核技能后，所有友方同调者获得",
            speSkillCon("5000（等级1时）"),
            "/",
            speSkillCon("10000（等级2时）"),
            "/",
            speSkillCon("15000（等级3时）"),
            "点护盾，该护盾以每秒0.5％的速度衰减",
        ]
    },
    {
        "name": "大敌当前", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.大敌当前,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.Feat,
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.泡影,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.科技光辉,
                LaohenNameEnum.万家灯火
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "云无月"
            ] //角色名称
        },
        "detail": [
            "同调者受到来自精英/首领的伤害减少",
            speSkillCon("9％~15％（等级1时）"),
            "/",
            speSkillCon("14％~23％（等级2时）"),
            "/",
            speSkillCon("18％~30％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "昂扬斗志·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.空,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.交换惊喜,
                LaohenNameEnum.街市清晨,
                LaohenNameEnum.千本之门
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "唐路遥",
                "米达斯"
            ] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "一线生机", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.一线生机,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.野风,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.玄学,
                LaohenNameEnum.繁花蜃影,
                LaohenNameEnum.打成一片,
                LaohenNameEnum.街市清晨,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "乐无异",
                "田偌",
                "焰响"
            ] //角色名称
        },
        "detail": [
            "专精提升",
            speSkillCon("100（等级1时）"),
            "/",
            speSkillCon("175（等级2时）"),
            "/",
            speSkillCon("250（等级3时）"),
            speSkillCon("（属性乘区·刻印专精额外增加值）", SkillColorEnum.injuries),
            "点，当同调者生命值低于50％时，效果提升100％",
        ]
    },
    {
        "name": "生生不息·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生生不息菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天陷,
                LaohenNameEnum.噩梦,
                LaohenNameEnum.拂晓,
                LaohenNameEnum.飞驰海岸线,
                LaohenNameEnum.代号百草,
                LaohenNameEnum.假日余暇,
                LaohenNameEnum.旧城夜幕
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "赫九逸"
            ] //角色名称
        },
        "detail": [
            "造成物理伤害时，回复自身",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            "的最大生命值，该效果每6秒最多触发一次",
        ]
    },
    {
        "name": "格挡专攻", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.格挡专攻,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.同行,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.打成一片
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当击破敌方单位格挡时，额外提升自身",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "刻印攻击，效果持续20秒，多次触发可以重置效果的持续时间"
        ]
    },
    {
        "name": "大力出奇迹", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.大力出奇迹,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.同行,
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.未晞,
                LaohenNameEnum.打成一片,
                LaohenNameEnum.大隐于市
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "暴击率增加",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，基础减伤降低20％",
            speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
            "，攻击产生暴击时，回复自身1％最大生命值"
        ]
    },
    {
        "name": "人形特攻·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.人形特攻α型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.同行,
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.未晞,
                LaohenNameEnum.海临人的好奇心,
                LaohenNameEnum.代号百草,
                LaohenNameEnum.街市清晨,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "吉娜"
            ] //角色名称
        },
        "detail": [
            "目标为人形单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[人形特攻·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "异种特攻·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.异种特攻α型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.同行,
                LaohenNameEnum.野风,
                LaohenNameEnum.双重引力,
                LaohenNameEnum.玄学,
                LaohenNameEnum.CATvsDOG,
                LaohenNameEnum.打成一片
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "目标为异种单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[异种特攻·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "原生特攻·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.原生特攻α型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.同行,
                LaohenNameEnum.双重引力,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.生死在握
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "罗咤"
            ] //角色名称
        },
        "detail": [
            "目标为原生单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[原生特攻·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "危险预警", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.危险预警,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.旧友无多
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者离开",
            speSkillCon("【隐匿】"),
            "状态时，会使场上除自身以外其他相同元素的同调者攻击速度、额外攻击力提升",
            speSkillCon("8％（等级1时）"),
            "/",
            speSkillCon("16％（等级2时）"),
            "/",
            speSkillCon("24％（等级3时）"),
            speSkillCon("（【属性乘区·额外攻击速度】(？)；【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "，持续30秒，对目标重复施加该效果时将会刷新效果的持续时间",
            "",
            "攻击速度提升在游戏里实际乘区为【属性乘区·额外攻击速度】，游戏里未描述，B站Wiki有反馈"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.隐匿),
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成),
        ]
    },
    {
        "name": "治愈守备", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.治愈守备,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.科技光辉,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者通过技能或者特性对自身施加生命回复效果时，减伤提升",
            speSkillCon("10％~16％（等级1时）"),
            "/",
            speSkillCon("14％~24％（等级2时）"),
            "/",
            speSkillCon("19％~32％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，效果持续20秒，重复触发时将刷新效果的持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "特殊减伤·对首领", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.特殊减伤对首领,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.Feat,
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.魇境边界,
                LaohenNameEnum.秘密音律,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者受到来自首领单位伤害时，该伤害减少",
            speSkillCon("30％~50％（等级1时）"),
            "/",
            speSkillCon("45％~75％（等级2时）"),
            "/",
            speSkillCon("54％~90％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，每8秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "失焦", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.失焦,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.偷偷摩摩,
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.因果历然,
                LaohenNameEnum.神迹,
                LaohenNameEnum.天狼,
                LaohenNameEnum.科技光辉
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者受到来自距离600以外单位的伤害时，该次伤害减少",
            speSkillCon("15％~25％（等级1时）"),
            "/",
            speSkillCon("30％~50％（等级2时）"),
            "/",
            speSkillCon("45％~75％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，并在10秒内获得额外10％",
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精的提升，每30秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "元素领袖·蚀", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素领袖蚀,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.千灯无间
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当编队队长是蚀元素同调者时，全队提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("17.5％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "针锋相对·对首领", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.针锋相对对首领,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.Feat,
                LaohenNameEnum.棺中鸟,
                LaohenNameEnum.神迹,
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.泡影,
                LaohenNameEnum.CATvsDOG,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "技能命中单个首领目标时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外元素伤害",
        ]
    },
    {
        "name": "暴风骤雨·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.暴风骤雨方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.野风,
                LaohenNameEnum.棺中鸟
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击速度提高",
            speSkillCon("7％（等级1时）"),
            "/",
            speSkillCon("13％（等级2时）"),
            "/",
            speSkillCon("18％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[暴风骤雨·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "以头抢地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.以头抢地,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.拂晓
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对空中单位造成伤害时，有",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("75％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            "概率，将其击落至地面5秒",
        ]
    },
    {
        "name": "势如破竹·对地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.势如破竹对地,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.天狼,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.火热手感,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.记录一夏,
                LaohenNameEnum.假日余暇,
                LaohenNameEnum.交换惊喜,
                LaohenNameEnum.打成一片,
                LaohenNameEnum.落日残迹,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "技能命中少于5个目标时，对其中的地面目标造成",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "坚定意志·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚定意志菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.双重引力,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.拂晓,
                LaohenNameEnum.速速降温,
                LaohenNameEnum.于人海中,
                LaohenNameEnum.旧城夜幕
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者受到的伤害减少",
            speSkillCon("6％~10％（等级1时）"),
            "/",
            speSkillCon("9％~15％（等级2时）"),
            "/",
            speSkillCon("12％~20％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[坚定意志·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖),
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "核心充能·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.噩梦,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.甜蜜心绪,
                LaohenNameEnum.生死在握,
                LaohenNameEnum.旧巷
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "阳铃",
                "珑"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[核心充能·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "元素半衰期", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素半衰期,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.光阴间隙,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.精准控分,
                LaohenNameEnum.速速降温,
                LaohenNameEnum.不期而遇,
                LaohenNameEnum.落日残迹,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "登场时，提升",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外元素伤害；经过15秒时，该效果衰减至1/2，经过30秒时，该效果衰减至1/4",
        ]
    },
    {
        "name": "距离把控", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.距离把控,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.噩梦,
                LaohenNameEnum.血露薇绝密
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者对自身普通攻击范围内的敌方造成伤害时，伤害额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，受到来自自身普通攻击范围外的伤害减少20％",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "正义守护", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.正义守护,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.双重引力,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.交换惊喜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当场上存在2名及以上<轻卫、铁御>时，友方同调者受到的伤害减少",
            speSkillCon("9％~15％（等级1时）"),
            "/",
            speSkillCon("14％~23％（等级2时）"),
            "/",
            speSkillCon("18％~30％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "乘人之危·对精英", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.乘人之危对精英,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.最好吃的朋友,
                LaohenNameEnum.玄学,
                LaohenNameEnum.意外邂逅,
                LaohenNameEnum.繁星记忆,
                LaohenNameEnum.旖旎夜色,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "无咎"
            ] //角色名称
        },
        "detail": [
            "攻击带有",
            speSkillCon("【减益效果】"),
            "的精英目标时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.减益效果)
        ]
    },
    {
        "name": "针对打击·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.针对打击三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.角色扮演,
                LaohenNameEnum.海临人的好奇心,
                LaohenNameEnum.归档
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "狄砚"
            ] //角色名称
        },
        "detail": [
            "造成伤害会额外施加“破碎”效果，使目标的物理抗性降低1％",
            speSkillCon("（【目标减益乘区·目标抗性降低】）", SkillColorEnum.injuries),
            "，最多叠加",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("21（等级2时）"),
            "/",
            speSkillCon("30（等级3时）"),
            "层，首领单位生效减半，同名效果可叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标抗性降低)
        ]
    },
    {
        "name": "抓准时机", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.抓准时机,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.逐光者,
                LaohenNameEnum.因果历然,
                LaohenNameEnum.代号百草
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击格挡条耗尽的敌方单位时，造成的伤害额外提高",
            speSkillCon("16％（等级1时）"),
            "/",
            speSkillCon("32％（等级2时）"),
            "/",
            speSkillCon("48％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "人形特攻·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.人形特攻β型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.逐光者,
                LaohenNameEnum.向新世界去,
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.繁花蜃影,
                LaohenNameEnum.秘密音律,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "莉缇亚"
            ] //角色名称
        },
        "detail": [
            "目标为人形单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[人形特攻·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "暴风骤雨·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.暴风骤雨三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.逐光者,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.圆锥曲线
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "卡洛琳"
            ] //角色名称
        },
        "detail": [
            "攻击速度提高",
            speSkillCon("7％（等级1时）"),
            "/",
            speSkillCon("13％（等级2时）"),
            "/",
            speSkillCon("18％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[暴风骤雨·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "及时援助·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.及时援助菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.逐光者,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.一枕酣甜,
                LaohenNameEnum.落日残迹
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "治疗效果增加",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[及时援助·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "坚定意志·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚定意志菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.逐光者,
                LaohenNameEnum.噩梦,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.精准控分,
                LaohenNameEnum.团圆,
                LaohenNameEnum.雨中愿
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者受到的伤害减少",
            speSkillCon("6％~10％（等级1时）"),
            "/",
            speSkillCon("9％~115％（等级2时）"),
            "/",
            speSkillCon("12％~20％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[坚定意志·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖),
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "渐入佳境", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.渐入佳境,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.海临人的好奇心
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每击败一名敌方精英单位，回复场上所有友方同调者",
            speSkillCon("8（等级1时）"),
            "/",
            speSkillCon("12（等级2时）"),
            "/",
            speSkillCon("16（等级3时）"),
            "秒异核充能",
        ]
    },
    {
        "name": "无处可藏", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.无处可藏,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.最好吃的朋友,
                LaohenNameEnum.增肌训练,
                LaohenNameEnum.团圆
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击带有屏障或者处于屏障保护下方的敌方时，提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("25％（等级2时）"),
            "/",
            speSkillCon("35％（等级3时）"),
            speSkillCon("增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害并忽略目标5",
            speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
            "基础减伤"
        ]
    },
    {
        "name": "特殊减伤·对地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.特殊减伤对地,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.朗朗乾坤,
                LaohenNameEnum.如在镜中,
                LaohenNameEnum.圆锥曲线,
                LaohenNameEnum.科技光辉
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "刘兄"
            ] //角色名称
        },
        "detail": [
            "同调者受到来自地面单位伤害时，该伤害减少",
            speSkillCon("30％~50％（等级1时）"),
            "/",
            speSkillCon("45％~75％（等级2时）"),
            "/",
            speSkillCon("54％~90％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，每8秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "复数共振", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.复数共振,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.Feat,
                LaohenNameEnum.因果历然
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "普通攻击造成群体伤害时，伤害额外提高",
            speSkillCon("24％（等级1时）"),
            "/",
            speSkillCon("48％（等级2时）"),
            "/",
            speSkillCon("72％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "手执利兵·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.手执利兵三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.因果历然,
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "物理伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，持续10秒，每20秒最多触发一次",
        ]
    },
    {
        "name": "针对打击·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.针对打击菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.因果历然,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.意外邂逅,
                LaohenNameEnum.旧城夜幕,
                LaohenNameEnum.旧巷
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成伤害会额外施加“破碎”效果，使目标的物理抗性降低1％",
            speSkillCon("（【目标减益乘区·目标抗性降低】）", SkillColorEnum.injuries),
            "，最多叠加",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("21（等级2时）"),
            "/",
            speSkillCon("30（等级3时）"),
            "层，首领单位生效减半，同名效果可叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标抗性降低)
        ]
    },
    {
        "name": "金刚不坏", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.金刚不坏,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.噩梦,
                LaohenNameEnum.醒太平,
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者累计受到5次伤害后，格挡强度提升",
            speSkillCon("80％（等级1时）"),
            "/",
            speSkillCon("160％（等级2时）"),
            "/",
            speSkillCon("240％（等级3时）"),
            speSkillCon("（属性乘区·格挡强度百分比增加）", SkillColorEnum.injuries),
            "，且格挡值回复速度提升100％，持续10秒。每20秒最多触发一次",
        ]
    },
    {
        "name": "昂扬斗志·方块·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志方块β型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.噩梦,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.万家灯火,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·方块·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "落井下石", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.落井下石,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.噩梦,
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.记录一夏,
                LaohenNameEnum.不期而遇
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "长谣"
            ] //角色名称
        },
        "detail": [
            "对处于",
            speSkillCon("【眩晕】"),
            "状态的单位造成伤害时，该伤害额外提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "暴击率",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.眩晕)
        ]
    },
    {
        "name": "电磁风暴", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.电磁风暴,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.双重引力,
                LaohenNameEnum.旧巷
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者重伤时，",
            speSkillCon("【眩晕】"),
            "全场所有机械单位10秒，飞行单位则会被击落。所有受到影响的非首领单位受到相当于其生命最大值",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            "的伤害",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.眩晕)
        ]
    },
    {
        "name": "机械特攻·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.机械特攻α型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.双重引力,
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.早日康复,
                LaohenNameEnum.归档
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "司危"
            ] //角色名称
        },
        "detail": [
            "目标为机械单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[机械特攻·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "轻车熟路", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.轻车熟路,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.千本之门
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使用主动技能后，增加自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("53％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，持续40秒",
        ]
    },
    {
        "name": "势如破竹·对空", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.势如破竹对空,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.失途之日,
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.成长,
                LaohenNameEnum.飞驰海岸线,
                LaohenNameEnum.速速降温,
                LaohenNameEnum.不期而遇,
                LaohenNameEnum.团圆
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "北洛"
            ] //角色名称
        },
        "detail": [
            "技能命中少于5个目标时，对其中的空中目标造成",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "星河奔腾·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.星河奔腾菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.无罪之徒,
                LaohenNameEnum.潮湿前路
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "元素伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害和10％攻击速度，持续15秒，每30秒最多触发一次",
        ]
    },
    {
        "name": "元素专攻·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            10,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.无罪之徒
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "提提亚"
            ] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[元素专攻·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "元素专攻·方块·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻方块β型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.须臾浮生,
                LaohenNameEnum.Feat,
                LaohenNameEnum.向新世界去
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "景"
            ] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时） "),
            "/",
            speSkillCon("15％（等级2时） "),
            "/",
            speSkillCon("20％（等级3时） "),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[元素专攻·方块·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "职业联动·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.职业联动方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.奢梦,
                LaohenNameEnum.世事难料
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上每有一名不同职业的同调者时，提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "原生特攻·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.原生特攻β型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.一枕酣甜,
                LaohenNameEnum.记录一夏,
                LaohenNameEnum.流光竞夜,
                LaohenNameEnum.樱华如梦
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "目标为原生单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[原生特攻·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "强攻·对精英", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.强攻对精英,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.底线大作战,
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.化为千鹤,
                LaohenNameEnum.万家灯火,
                LaohenNameEnum.旖旎夜色,
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "白鸟梓"
            ] //角色名称
        },
        "detail": [
            "攻击生命值处于50％以上的精英单位时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "Bonus Time", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.BonusTime,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.失途之日,
                LaohenNameEnum.白夜,
                LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每普通攻击5次，下一次普通攻击伤害附加",
            speSkillCon("300％（等级1时）"),
            "/",
            speSkillCon("600％（等级2时）"),
            "/",
            speSkillCon("900％（等级3时）"),
            "刻印攻击",
        ]
    },
    {
        "name": "铁杵磨成针·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.铁杵磨成针三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.失途之日,
                LaohenNameEnum.空,
                LaohenNameEnum.天狼,
                LaohenNameEnum.家,
                LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "雪长夏",
                "玄戈"
            ] //角色名称
        },
        "detail": [
            "普通攻击未造成暴击时，自身主动技能暴击率提高",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("10％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，最高提升至100％，并在释放技能后重置",
        ]
    },
    {
        "name": "自动瞄准系统·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自动瞄准系统三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.失途之日,
                LaohenNameEnum.截稿日,
                LaohenNameEnum.秘密音律
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[自动瞄准系统·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "护盾灌注", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.护盾灌注,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.记录一夏,
                LaohenNameEnum.团圆
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者拥有护盾的期间，造成的物理伤害额外提高",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "蓄势待发", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蓄势待发,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.神迹,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.空,
                LaohenNameEnum.千灯无间,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.意外邂逅,
                LaohenNameEnum.截稿日,
                LaohenNameEnum.未晞,
                LaohenNameEnum.甜蜜心绪,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当同调者处于后备队时，每2秒会增加自身",
            speSkillCon("1％（等级1时）"),
            "/",
            speSkillCon("2％（等级2时）"),
            "/",
            speSkillCon("3％（等级3时）"),
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "额外攻击力（上限60％），同调者换至后备队或区域切换时该效果重置",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "利刃·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.利刃三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.魇境边界,
                LaohenNameEnum.谎言之下,
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.家,
                LaohenNameEnum.书卷晨曦
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "崔远之",
                "缇诗"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("18％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[利刃·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "格挡反击", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.格挡反击,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.繁星记忆
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当同调者受到直接伤害时，会对自身300范围内的敌方单位造成自身",
            speSkillCon("100％（等级1时）"),
            "/",
            speSkillCon("300％（等级2时）"),
            "/",
            speSkillCon("500％（等级3时）"),
            "格挡强度的",
            speSkillCon("【真实伤害】"),
            "，该伤害属于反弹伤害，且每秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "对空特攻·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.对空特攻β型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.一枕酣甜,
                LaohenNameEnum.混乱烟尘
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "目标为空中单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[对空特攻·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "对空特攻·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.对空特攻α型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.血露薇绝密,
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.恶土之花
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "岚岚"
            ] //角色名称
        },
        "detail": [
            "目标为空中单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[对空特攻·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "混合打击", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.混合打击,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.圆锥曲线,
                LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对目标造成物理伤害时，会使目标后续30秒内受到来自自身的非物理伤害额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级1时）"),
            "/",
            speSkillCon("50％（等级1时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，对目标重复施加该效果时将会刷新效果的持续时间",
        ]
    },
    {
        "name": "利刃·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.利刃三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.默,
                LaohenNameEnum.度晴波,
                LaohenNameEnum.增肌训练,
                LaohenNameEnum.白夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "红玉"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("18％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[利刃·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "昂扬斗志·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.成长
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "强攻·对空", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.强攻对空,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.旧友无多,
                LaohenNameEnum.默,
                LaohenNameEnum.如在镜中,
                LaohenNameEnum.截稿日,
                LaohenNameEnum.增肌训练,
                LaohenNameEnum.混乱烟尘
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "尚非乐"
            ] //角色名称
        },
        "detail": [
            "攻击生命值处于50％以上的空中单位时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "生命收割", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生命收割,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.飞驰海岸线,
                LaohenNameEnum.意外邂逅
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上前20个死亡的敌方单位，每个都会永久增加自身",
            speSkillCon("5（等级1时）"),
            "/",
            speSkillCon("10（等级2时）"),
            "/",
            speSkillCon("15（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击额外增加值）", SkillColorEnum.injuries),
            "点攻击",
        ]
    },
    {
        "name": "落后就要挨打", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.落后就要挨打,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.晓梦迷花,
                LaohenNameEnum.精准控分
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "根据目标实时移动速度，提升对其造成的额外伤害，最多提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "（目标完全静止时提升达到最大）",
        ]
    },
    {
        "name": "自动瞄准系统·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自动瞄准系统三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.科技光辉,
                LaohenNameEnum.混乱烟尘,
                LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("28％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[自动瞄准系统·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "伤害赐福·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.伤害赐福菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.夕阳挽歌,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.代号百草,
                LaohenNameEnum.千本之门
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "岑缨",
                "襄铃"
            ] //角色名称
        },
        "detail": [
            "提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("18％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[伤害赐福·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "回光返照", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.回光返照,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.空,
                LaohenNameEnum.恶土之花,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.街市清晨
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者物理伤害额外提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，当生命值低于50％时，该效果翻倍",
        ]
    },
    {
        "name": "弱点石化", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.弱点石化,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.空,
                LaohenNameEnum.增肌训练
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每当同调者使目标处于",
            speSkillCon("【石化】"),
            "状态，后续20秒内目标受到来自自身的伤害额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，对目标重复施加该效果时将会刷新效果的持续时间",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.石化)
        ]
    },
    {
        "name": "强攻·对地", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.强攻对地,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.魇境边界,
                LaohenNameEnum.空,
                LaohenNameEnum.天狼,
                LaohenNameEnum.烟尘往事,
                LaohenNameEnum.海临人的好奇心,
                LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "风晴雪"
            ] //角色名称
        },
        "detail": [
            "攻击生命值处于50％以上的地面单位时，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "复仇者之怒", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.复仇者之怒,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.藏锋,
                LaohenNameEnum.家
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上每有一名同调者重伤时，获得额外",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("10％（等级2时）"),
            "/",
            speSkillCon("15％（等级3时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精的提升，最多叠加3层",
        ]
    },
    {
        "name": "元素逆转·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素逆转方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.野风,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.奢梦,
                LaohenNameEnum.CATvsDOG
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者元素伤害额外提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，当生命值低于50％时，该效果翻倍",
        ]
    },
    {
        "name": "异种特攻·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.异种特攻β型,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.浊雨,
                LaohenNameEnum.瞳中困影,
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.大隐于市,
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "目标为异种单位时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[异种特攻·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "主场优势", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.主场优势,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.于火光中蛋生,
                LaohenNameEnum.问卜天地,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.一线之隔
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当同调者处于与自身元素属性相同的元素地形上时，该同调者获得额外",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("28％（等级1时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精的提升",
        ]
    },
    {
        "name": "星河奔腾·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.星河奔腾方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.潮湿前路,
                LaohenNameEnum.火热手感
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "元素伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害和10％攻击速度，持续15秒，每30秒最多触发一次",
        ]
    },
    {
        "name": "擒贼先擒王", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.擒贼先擒王,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗涌轮廓,
                LaohenNameEnum.神迹,
                LaohenNameEnum.魇境边界,
                LaohenNameEnum.天狼,
                LaohenNameEnum.书卷晨曦,
                LaohenNameEnum.归档,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对精英或首领造成范围伤害时，提升",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "片叶不沾身", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.片叶不沾身,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.魇境边界,
                LaohenNameEnum.天狼,
                LaohenNameEnum.截稿日,
                LaohenNameEnum.家,
                LaohenNameEnum.混乱烟尘
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "若同调者超过12秒没有受到伤害，提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，受到伤害将刷新计时并移除额外伤害提升",
        ]
    },
    {
        "name": "乘胜追击", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.乘胜追击,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            80,
            60,
            60
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.天狼,
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.家,
                LaohenNameEnum.大隐于市,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "普通攻击造成伤害后，提高自身10％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "攻击速度，持续",
            speSkillCon("20.0（等级1时）"),
            "/",
            speSkillCon("30.0（等级2时）"),
            "/",
            speSkillCon("40.0（等级3时）"),
            "秒，每40秒最多触发一次",
        ]
    },
    {
        "name": "失控元素", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.失控元素,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.寂静昨日,
                LaohenNameEnum.不期而遇
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自动技能对目标造成元素伤害时，附带",
            speSkillCon("80％（等级1时）"),
            "/",
            speSkillCon("160％（等级2时）"),
            "/",
            speSkillCon("240％（等级3时）"),
            "自身专精的额外伤害，每次技能对同一目标最多生效一次",
        ]
    },
    {
        "name": "能力催化", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.能力催化,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.馆中遗影,
                LaohenNameEnum.意外邂逅,
                LaohenNameEnum.旖旎夜色
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "伤害造成暴击时，提高自身",
            speSkillCon("0.5％（等级1时）"),
            "/",
            speSkillCon("1％（等级2时）"),
            "/",
            speSkillCon("2％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "暴击率，该效果每2秒最多触发一次，同调者换至后备队时该效果将被移除",
        ]
    },
    {
        "name": "治愈加速", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.治愈加速,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.藏锋,
                LaohenNameEnum.海临人的好奇心
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每次治疗自身或其他友方同调者，都会永久使自身的额外攻击速度提升2％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，最多提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            "/",
        ]
    },
    {
        "name": "容光焕发", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.容光焕发,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.拂晓,
                LaohenNameEnum.假日余暇
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "生命值为100％时，自身专精增加",
            speSkillCon("120（等级1时）"),
            "/",
            speSkillCon("240（等级2时）"),
            "/",
            speSkillCon("360（等级3时）"),
            speSkillCon("（属性乘区·刻印专精额外增加值）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "充能回复", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.充能回复,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.暗巷漆影,
                LaohenNameEnum.千灯无间,
                LaohenNameEnum.旧城夜幕
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者使用回复型主动技能后，该技能冷却时间减少",
            speSkillCon("3.0（等级1时）"),
            "/",
            speSkillCon("6.0（等级2时）"),
            "/",
            speSkillCon("9.0（等级3时）"),
            "秒，且同时回复自身10秒异核充能",
        ]
    },
    {
        "name": "屏障效应", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.屏障效应,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.Feat,
                LaohenNameEnum.参商形影,
                LaohenNameEnum.TARGETERROR
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身制造屏障后，30秒内自身造成的伤害额外提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "水利万物", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水利万物,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [LaohenNameEnum.参商形影
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "水元素同调者产生的治疗和屏障效果可以移除受治疗目标身上所有的",
            speSkillCon("【减益效果】"),
            "，效果触发间隔",
            speSkillCon("25.0（等级1时）"),
            "/",
            speSkillCon("8.0（等级2时）"),
            "/",
            speSkillCon("1.0（等级3时）"),
            "秒",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.减益效果)
        ]
    },
    {
        "name": "元素逆转·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素逆转菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [LaohenNameEnum.千纪启明
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者元素伤害额外提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，当生命值低于50％时，该效果翻倍",
        ]
    },
    {
        "name": "元素专攻·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.野风,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.千纪启明,
                LaohenNameEnum.火热手感,
                LaohenNameEnum.CATvsDOG,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[元素专攻·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "能量缓释", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.能量缓释,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.千灯无间,
                LaohenNameEnum.如在镜中,
                LaohenNameEnum.最强召唤师,
                LaohenNameEnum.秘密音律
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印终端不低于750时，同调者释放自动技能后，造成的伤害额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续15秒，重复触发时将刷新效果的持续时间",
        ]
    },
    {
        "name": "元素逆转·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素逆转三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [LaohenNameEnum.如在镜中
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者元素伤害额外提升",
            speSkillCon("12％（等级1时）"),
            "/",
            speSkillCon("24％（等级2时）"),
            "/",
            speSkillCon("36％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，当生命值低于50％时，该效果翻倍",
        ]
    },
    {
        "name": "元素专攻·三角·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻三角β型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            10,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.神迹,
                LaohenNameEnum.如在镜中,
                LaohenNameEnum.TARGETERROR
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【潮湿环境】"),
            "时，提升幅度翻倍。和[元素专攻·三角·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "星河奔腾·三角", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.星河奔腾三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.Feat,
                LaohenNameEnum.如在镜中
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "元素伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害和10％攻击速度，持续15秒，每30秒最多触发一次",
        ]
    },
    {
        "name": "奉献", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.奉献,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.默,
                LaohenNameEnum.未晞,
                LaohenNameEnum.雪轻日暖,
                LaohenNameEnum.最好吃的朋友
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "减少自身50％",
            speSkillCon("（属性乘区·暴击率加成）", SkillColorEnum.injuries),
            "暴击率，但自身造成的伤害会使目标受到的伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "，该效果不叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "为友谊干杯", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.为友谊干杯,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.成长,
                LaohenNameEnum.圆锥曲线,
                LaohenNameEnum.白夜
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上每有一名友方同调者，增加自身",
            speSkillCon("30（等级1时）"),
            "/",
            speSkillCon("60（等级2时）"),
            "/",
            speSkillCon("90（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击额外增加值）", SkillColorEnum.injuries),
            "点攻击",
        ]
    },
    {
        "name": "手执利兵·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.手执利兵方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.化为千鹤,
                LaohenNameEnum.繁星记忆,
                LaohenNameEnum.未晞,
                LaohenNameEnum.交换惊喜,
                LaohenNameEnum.世事难料,
                LaohenNameEnum.千本之门
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "物理伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，持续10秒，每20秒最多触发一次"
        ]
    },
    {
        "name": "核心充能·方块·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能方块α型,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭,
                LaohenNameEnum.曙色的地平线,
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.醒太平,
                LaohenNameEnum.CATvsDOG,
                LaohenNameEnum.打成一片,
                LaohenNameEnum.世事难料,
                LaohenNameEnum.樱华如梦,
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "马尔斯",
                "林"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[核心充能·方块·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "手执利兵·菱形", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.手执利兵菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.一线之隔,
                LaohenNameEnum.拂晓,
                LaohenNameEnum.飞驰海岸线,
                LaohenNameEnum.流光竞夜,
                LaohenNameEnum.于人海中,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "物理伤害造成暴击后，提升自身",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("45％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
            "普通攻击伤害，持续10秒，每20秒最多触发一次",
        ]
    },
    {
        "name": "黄金精神", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.黄金精神,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.度晴波,
                LaohenNameEnum.火热手感,
                LaohenNameEnum.流星坠处,
                LaohenNameEnum.交换惊喜,
                LaohenNameEnum.世事难料,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者在场时，所有同调者额外受治疗效果增加",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·额外受治疗加成）", SkillColorEnum.injuries),
            "，效果可叠加",
        ]
    },
    {
        "name": "元素转化", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素转化,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.醒太平,
                LaohenNameEnum.化为千鹤
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "通过技能效果使自身普通攻击伤害元素类型发生变化时，效果持续期间普通攻击忽略目标",
            speSkillCon("10（等级1时）"),
            "/",
            speSkillCon("20（等级2时）"),
            "/",
            speSkillCon("30（等级3时）"),
            speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
            "基础减伤",
        ]
    },
    {
        "name": "醉生梦死", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.醉生梦死,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.精准控分,
                LaohenNameEnum.早日康复
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者对目标施加",
            speSkillCon("【控制效果】"),
            "时，会使该控制效果的持续时间增加",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）")
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.控制效果)
        ]
    },
    {
        "name": "侵蚀", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.侵蚀,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.一枕酣甜,
                LaohenNameEnum.生死在握
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击速度提升10％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，触发",
            speSkillCon("【蚀爆伤害】"),
            "后，20秒内自身攻击目标使目标受到的伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "，每40秒最多触发一次",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.蚀爆伤害),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "破釜沉舟", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.破釜沉舟,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.野风,
                LaohenNameEnum.浊雨,
                LaohenNameEnum.调和清凉,
                LaohenNameEnum.繁花蜃影,
                LaohenNameEnum.化为千鹤,
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者生命值每减少1％，增加同调者1％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "攻击速度，最多增加50％。当同调者生命值不足50％时，造成的伤害额外提高",
            speSkillCon("20.0％（等级1时）"),
            "/",
            speSkillCon("35.0％（等级2时）"),
            "/",
            speSkillCon("50.0％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "潮汐助威", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.潮汐助威,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.泡影,
                LaohenNameEnum.TARGETERROR
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使用的主动技能或异核技能可制造水区域时 ，使除自身以外的水元素同调者暴击率提高5％",
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "，暴击伤害提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "，持续30秒，该效果不可叠加",
        ]
    },
    {
        "name": "自动防御系统", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自动防御系统,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.泡影,
                LaohenNameEnum.你好维瑟尔,
                LaohenNameEnum.万家灯火
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当同调者生命值低于50％时，获得持续",
            speSkillCon("6.0（等级1时）"),
            "/",
            speSkillCon("12.0（等级2时）"),
            "/",
            speSkillCon("20.0（等级3时）"),
            "秒的无敌效果，无敌效果结束后10秒内获得额外20％",
            speSkillCon("（属性乘区·刻印防御百分比增加）", SkillColorEnum.injuries),
            "刻印防御的提升，每120秒最多触发一次"
        ]
    },
    {
        "name": "沉重打击", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.沉重打击,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.秩序囚笼,
                LaohenNameEnum.速速降温,
                LaohenNameEnum.落日残迹
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每15秒获得10层“重击”，对目标造成伤害时，会消耗1层“重击”，使该次伤害附带自身",
            speSkillCon("100％（等级1时）"),
            "/",
            speSkillCon("200％（等级2时）"),
            "/",
            speSkillCon("300％（等级3时）"),
            "专精的伤害。“重击”上限为10层",
        ]
    },
    {
        "name": "昂扬斗志·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.拂晓,
                LaohenNameEnum.飞驰海岸线,
                LaohenNameEnum.代号百草,
                LaohenNameEnum.旖旎夜色
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "老板"
            ] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "元素专攻·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.奢梦,
                LaohenNameEnum.速速降温
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "伊琅相思",
                "晴雪"
            ] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[元素专攻·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "暴风骤雨·菱形·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.暴风骤雨菱形α型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [LaohenNameEnum.奢梦
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击速度提高",
            speSkillCon("7％（等级1时）"),
            "/",
            speSkillCon("13％（等级2时）"),
            "/",
            speSkillCon("18％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[暴风骤雨·菱形·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "核心充能·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心充能三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.圆锥曲线,
                LaohenNameEnum.书卷晨曦,
                LaohenNameEnum.早日康复,
                LaohenNameEnum.归档
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "卯绒绒"
            ] //角色名称
        },
        "detail": [
            "初始异核充能回复",
            speSkillCon("12（等级1时）"),
            "/",
            speSkillCon("18（等级2时）"),
            "/",
            speSkillCon("24（等级3时）"),
            "秒，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[核心充能·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "昂扬斗志·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.昂扬斗志三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.圆锥曲线,
                LaohenNameEnum.大隐于市
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成物理伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[昂扬斗志·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "狩猎时刻·对精英", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.狩猎时刻对精英,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.截稿日,
                LaohenNameEnum.增肌训练
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当目标为生命值低于30％的精英敌人时，提升",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "技多不压身", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.技多不压身,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            120,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.代号百草,
                LaohenNameEnum.记录一夏,
                LaohenNameEnum.团圆
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每次使用主动技能后，提升自身",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "攻速和50％",
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "召唤物额外伤害，持续10秒，重复触发时将会刷新效果的持续时间"
        ]
    },
    {
        "name": "生命颂歌", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生命颂歌,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.繁星记忆,
                LaohenNameEnum.樱华如梦
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者重伤或换至后备队时，回复友方生命值比例最低的同调者100％最大生命值，并获得额外",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精的提升，同名效果可叠加，并持续整场战斗",
        ]
    },
    {
        "name": "元素残留", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素残留,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.流光竞夜,
                LaohenNameEnum.雨中愿
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自动技能造成范围元素伤害时，使受影响的敌方单位后续20秒内受到该元素伤害额外提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("35％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "；由不同类型元素伤害造成的效果可以同时存在",
        ]
    },
    {
        "name": "福被众生", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.sr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.福被众生,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.不期而遇,
                LaohenNameEnum.甜蜜心绪
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "治疗友方同调者后，同时治疗其他友方同调者相当于自身",
            speSkillCon("60％（等级1时）"),
            "/",
            speSkillCon("120％（等级2时）"),
            "/",
            speSkillCon("180％（等级3时）"),
            "专精的生命值，每5秒最多触发一次",
        ]
    },
    {
        "name": "穹雷破晓", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.穹雷破晓,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.遇见宝石海
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使用异核技能后，同调者自身的额外攻击提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "，若为雷元素同调者则该效果翻倍，持续45秒，重复触发刷新效果持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "蚀影锐击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀影锐击,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.月光下的告解
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "蚀元素同调者施放异核技能后，自身普通攻击伤害额外提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续25秒",
        ]
    },
    {
        "name": "反应增幅", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.反应增幅,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.幻想彼境
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印体质不低于1000时，同调者触发",
            speSkillCon("【传导反应】【爆燃反应】【冻结反应】【汽化反应】【电解反应】【消融反应】"),
            "时，提升自身10％",
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "额外攻击力和5％",
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "暴击伤害，持续12秒，每2秒最多触发一次，每种相关反应的触发冷却单独计算，效果可叠加",
            speSkillCon("2（等级1时）"),
            "/",
            speSkillCon("4（等级2时）"),
            "/",
            speSkillCon("6（等级3时）"),
            "层，重复触发该效果时将会刷新效果的持续时间。",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.爆燃反应),
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
            speLaohenSkillCon(LaohenToastSkillEnum.汽化反应),
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应),
            speLaohenSkillCon(LaohenToastSkillEnum.消融反应),
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "协助强化", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.协助强化,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.庆典巡游
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "获得5.0％",
            speSkillCon("（属性乘区·刻印体质百分比增加）", SkillColorEnum.injuries),
            "刻印体质的提升；每当自身受到治疗后，下一次自动技能造成的伤害额外提高",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("70％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，每30秒最多触发一次",
        ]
    },
    {
        "name": "弱点标记", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.弱点标记,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.残照
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对目标施加元素抗性降低或元素弱点时，效果持续期间使目标受到该元素的额外伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "强效缓解", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.强效缓解,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.幕影重重
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印体质不低于750时，受到直接伤害时回复自身",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("100％（等级2时）"),
            "/",
            speSkillCon("150％（等级3时）"),
            "当前体质的生命值（该生命回复效果不受任何其他效果影响），该效果每秒最多触发一次",
        ]
    },
    {
        "name": "炽热生命", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.炽热生命,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.天陷
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者周围永久存在半径300的炽热光环，每2秒对周围的敌方单位造成",
            speSkillCon("70％（等级1时）"),
            "/",
            speSkillCon("140％（等级2时）"),
            "/",
            speSkillCon("210％（等级3时）"),
            "最终体质+",
            speSkillCon("70％（等级1时）"),
            "/",
            speSkillCon("140％（等级2时）"),
            "/",
            speSkillCon("210％（等级3时）"),
            "终端的物理伤害；无法对飞行单位造成伤害"
        ]
    },
    {
        "name": "生命祝福", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生命祝福,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.同行
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印体质不低于1000时，同调者对自身施加生命回复效果时，提升自身10％",
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "额外攻击力和5％",
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "暴击伤害，持续12秒，重复施加该效果时将会刷新效果的持续时间。效果可叠加",
            speSkillCon("2（等级1时）"),
            "/",
            speSkillCon("4（等级2时）"),
            "/",
            speSkillCon("6（等级3时）"),
            "层。",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "自愈能量", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自愈能量,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.偷偷摩摩
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对自身施加生命回复效果时，所有友方同调者获得2层",
            speSkillCon("【激励】"),
            "。每20秒最多触发一次，通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "蚀力庇护", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀力庇护,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.棺中鸟
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "蚀元素同调者使用异核技能后，场上所有同调者提高",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "刻印攻击力，持续20秒，重复触发刷新持续时间",
            "",
            "若持续时间内同调者受到致命伤害，则消耗该同调者的刻印攻击提升效果，将生命值降为1点并获得4秒无敌效果，该无敌效果每个同调者整场战斗最多触发1次"
        ]
    },
    {
        "name": "创痕激发", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.创痕激发,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.光阴间隙
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击处于元素区域的目标时，使目标后续30秒内受到的伤害提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "；攻击处于炎元素区域的目标时，该易伤效果翻倍，重复触发时将刷新效果的持续时间。",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "雷霆寒霜", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.雷霆寒霜,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            150,
            150,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.角色扮演
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者受到来自精英/首领单位的伤害后，获得",
            speSkillCon("6％（等级1时）"),
            "/",
            speSkillCon("12％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精提升，持续30秒，如果同调者为霜元素/雷元素，则该效果翻倍，每50秒最多触发一次",
        ]
    },
    {
        "name": "成功掩护", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.成功掩护,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.逐光者
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者每成为一个敌方单位的攻击目标时，都会增加所有友方同调者",
            speSkillCon("5.0％（等级1时）"),
            "/",
            speSkillCon("9.0％（等级2时）"),
            "/",
            speSkillCon("12.0％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "的额外伤害，同名效果最多叠加5层",
        ]
    },
    {
        "name": "麻痹大意", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.麻痹大意,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.朗朗乾坤
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【传导反应】"),
            "时，受影响的目标受到的伤害提高",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("70％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "（该效果属于",
            speSkillCon("【元素反应触发增伤】"),
            "），持续10秒"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.元素反应触发增伤),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "受击反制", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.受击反制,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.因果历然
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "受到直接伤害会令场上所有敌方单位后续受到的伤害提高",
            speSkillCon("0％~20％（等级1时）"),
            "/",
            speSkillCon("0％~40％（等级2时）"),
            "/",
            speSkillCon("0％~60％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "，持续5秒，首领单位生效减半，相同效果无法叠加，对目标重复施加该效果时将会刷新效果的持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "屏障·水", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.屏障水,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.噩梦
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "龙晴"
            ] //角色名称
        },
        "detail": [
            "所有同调者受到的伤害减少10％",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，该效果不叠加。",
            "",
            "此外，当水元素同调者在施放完屏障类技能后，所有友方同调者获得4层",
            speSkillCon("【激励】"),
            "，通过该方式获得的",
            speSkillCon("【激励】"),
            "层数不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "压力反制", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.压力反制,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.双重引力
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印防御不低于500时，场上每有一个敌方单位，自身获得5％",
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "刻印攻击的提升，最多提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）")
        ]
    },
    {
        "name": "万象侵袭", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.万象侵袭,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.无罪之徒
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每次造成伤害时，可使目标降低",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标抗性降低】）", SkillColorEnum.injuries),
            "与伤害元素类型相同的抗性，持续15秒",
            "",
            "由该效果产生的相同属性的抗性降低效果不可叠加，不同属性的可共存"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标抗性降低)
        ]
    },
    {
        "name": "水域之力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水域之力,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.向新世界去
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者施展生成水元素区域的技能或自身处于水元素区域上施展主动技能时，额外伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，效果持续30秒，重复触发时刷新效果的持续时间",
        ]
    },
    {
        "name": "异核雷鸣", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.异核雷鸣,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.底线大作战
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使用异核技能后，雷元素额外伤害提升20％",
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，并使刻印攻击提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续60秒，相同效果无法叠加，重复触发时将刷新效果的持续时间",
        ]
    },
    {
        "name": "风力加剧", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.风力加剧,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.失途之日
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "岚岚"
            ] //角色名称
        },
        "detail": [
            "场上风元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时"),
            "/",
            speSkillCon("7（等级2时"),
            "/",
            speSkillCon("10（等级3时"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当场上风元素的同调者人数少于2名时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "召唤协调", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.召唤协调,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.谎言之下
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "暴击伤害提升20％",
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "；场上每有一个属于同调者的召唤物时，该同调者额外伤害提高10％",
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，最多额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）")
        ]
    },
    {
        "name": "致命弱点", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.致命弱点,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.血露薇绝密
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "白鸟梓"
            ] //角色名称
        },
        "detail": [
            "造成风元素伤害时，赋予目标风元素弱点，使目标的风元素抗性降低",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标抗性降低】）", SkillColorEnum.injuries),
            "，弱点持续20秒，该效果不叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标抗性降低)
        ]
    },
    {
        "name": "雷霆万钧", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.雷霆万钧,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.旧友无多
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "刘兄"
            ] //角色名称
        },
        "detail": [
            "场上雷元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当场上雷元素的同调者人数少于2名时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "力量喷涌", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.力量喷涌,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.夕阳挽歌
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【爆燃反应】"),
            "后，获得4层",
            speSkillCon("【激励】"),
            "。每35秒最多触发一次，通过该方式获得的",
            speSkillCon("【激励】"),
            "层数不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.爆燃反应),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "绝处逢生", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.绝处逢生,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.空
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "焰响",
                "Sweeper-EX"
            ] //角色名称
        },
        "detail": [
            "当同调者生命值低于50％时，立即使所有同调者的生命值回复至最大值并获得额外",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "刻印攻击的提升，持续30秒，每60秒最多触发一次",
        ]
    },
    {
        "name": "奇核风动", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.奇核风动,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.晓梦迷花
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "风元素同调者施放异核技能后，场上所有同调者刻印攻击提高",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续25秒，重复触发刷新持续时间",
        ]
    },
    {
        "name": "共振催化", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.共振催化,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.瞳中困影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每次触发元素反应时，自身及与自身职业相同的同调者主动技能回复速度提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("40％（等级3时）"),
            speSkillCon("（【属性乘区·主动技能回复速度】）", SkillColorEnum.injuries),
            "，持续20秒",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区主动技能回复速度)
        ]
    },
    {
        "name": "曲流制敌", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.曲流制敌,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.潮湿前路
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者施展主动技能攻击处于水元素或霜元素区域的目标后，自身额外伤害提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，同时使受攻击的目标攻击力降低10％",
            speSkillCon("（目标减益乘区·目标攻击力降低）", SkillColorEnum.injuries),
            "，持续60秒，重复触发时刷新效果的持续时间"
        ]
    },
    {
        "name": "冰冻三尺", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.冰冻三尺,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.天狼
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印专精提升5％",
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "，对目标造成霜元素主动技能伤害后，目标受到的霜元素额外伤害提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续30秒，同名效果无法叠加，对目标重复施加该效果时将会刷新效果的持续时间",
        ]
    },
    {
        "name": "水汽弥漫", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水汽弥漫,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [
                LaohenNameEnum.寂静昨日
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【传导反应】"),
            "/",
            speSkillCon("【冻结反应】"),
            "后，提升场上所有同调者",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("9％（等级2时）"),
            "/",
            speSkillCon("12％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，持续10秒，最多可叠加5层，重复触发时将会刷新效果的持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
        ]
    },
    {
        "name": "影盾", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.影盾,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.馆中遗影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者拥有护盾的情况下，受到投射物伤害时获得8％",
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精提升，持续20秒，重复触发时将刷新效果的持续时间。并减免受到的投射物伤害，数值相当于自身专精的",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("100％（等级2时）"),
            "/",
            speSkillCon("150％（等级3时）"),
            "，每0.5秒最多触发一次",
        ]
    },
    {
        "name": "战术强化", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.战术强化,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.于火光中蛋生
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "北洛"
            ] //角色名称
        },
        "detail": [
            "使用的主动技能或异核技能是增益/召唤/回复型时，使全体友方同调者获得2层激励。通过该方式获得的",
            speSkillCon("【激励】"),
            "层数不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            "层",
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "蚀力渗透", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀力渗透,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.藏锋
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "阿棘"
            ] //角色名称
        },
        "detail": [
            "场上蚀元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当场上蚀元素的同调者人数少于2名时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "人多势众", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.人多势众,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.暗巷漆影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "队伍中能够战斗的同调者数量不低于7人时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当队伍中能够战斗的同调者数量低于7人时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "物理专精", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.物理专精,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.恶土之花
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "修"
            ] //角色名称
        },
        "detail": [
            "场上物理属性同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当队伍中能够战斗的同调者数量低于7人时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "润物无声", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.润物无声,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.参商形影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "长谣",
                "豹富"
            ] //角色名称
        },
        "detail": [
            "场上水元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当队伍中能够战斗的同调者数量低于7人时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "唤物增威", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.唤物增威,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.千纪启明
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者的召唤物对目标造成伤害后，队伍内所有同调者的召唤物伤害和普通攻击伤害额外提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续15秒，重复触发刷新持续时间",
        ]
    },
    {
        "name": "蚀力穿透", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀力穿透,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.如在镜中
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每点终端使同调者对40％生命值以下目标伤害额外提高，终端越高提升效果越高，最多提高",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("70％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，若为蚀元素同调者则效果数值额外提高一半",
        ]
    },
    {
        "name": "元素效应", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素效应,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.问卜天地
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身产生元素地形时，使自身及场上与自身元素或职业相同的友方同调者额外伤害提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续60秒，重复触发时刷新效果的持续时间",
        ]
    },
    {
        "name": "元素注能", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素注能,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.烟尘往事
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印终端不低于1000时，根据场上同调者数量最多的元素属性（不包括数量相同的情况），提升全体同调者",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "该元素的额外元素伤害",
        ]
    },
    {
        "name": "主场扩大", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.主场扩大,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.雪轻日暖
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "卯绒绒"
            ] //角色名称
        },
        "detail": [
            "创造的水元素地形范围扩大",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）")
        ]
    },
    {
        "name": "冰霜共鸣", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.冰霜共鸣,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.最强召唤师
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "比戈尼娅"
            ] //角色名称
        },
        "detail": [
            "场上霜元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当队伍中能够战斗的同调者数量低于7人时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "护盾共鸣", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.护盾共鸣,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.成长
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身当前拥有护盾时，普通攻击伤害附带",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            "当前护盾值的额外伤害",
        ]
    },
    {
        "name": "坚硬外皮", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚硬外皮,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            180,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.一线之隔
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印防御不低于750时，同调者受到敌方直接伤害时会",
            speSkillCon("【眩晕】"),
            "攻击者3秒，每",
            speSkillCon("10.0（等级1时）"),
            "/",
            speSkillCon("7.0（等级2时）"),
            "/",
            speSkillCon("5.0（等级3时）"),
            "秒最多触发一次",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.眩晕)
        ]
    },
    {
        "name": "疗愈力劲", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.疗愈力劲,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.火热手感
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "体质不低于1000时，同调者受到治疗时，额外攻击提高4%，最多叠加",
            speSkillCon("2（等级1时）"),
            "/",
            speSkillCon("4（等级2时）"),
            "/",
            speSkillCon("6（等级3时）"),
            "层，持续12秒，重复触发刷新效果持续时间",
        ]
    },
    {
        "name": "烹饪时刻", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.烹饪时刻,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.最好吃的朋友
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者使用回复型主动/异核技能时，场上所有同调者获得2层",
            speSkillCon("【激励】"),
            "，通过该效果最多获得",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            speSkillCon("【激励】")
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "坚毅不倒", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚毅不倒,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.醒太平
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者自身格挡值耗尽时，受到的伤害减少",
            speSkillCon("8％（等级1时）"),
            "/",
            speSkillCon("16％（等级2时）"),
            "/",
            speSkillCon("24％（等级3时）"),
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "千锤百炼", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.千锤百炼,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.精准控分
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印体质不低于1000时，获得",
            speSkillCon("8％（等级1时）"),
            "/",
            speSkillCon("16％（等级2时）"),
            "/",
            speSkillCon("24％（等级3时）"),
            speSkillCon("（属性乘区·额外攻击力增加值）", SkillColorEnum.injuries),
            "当前体质的额外攻击力加成，每次受到直接伤害时，该效果提升1％，最多叠加100层，该效果将持续整场战斗"
        ]
    },
    {
        "name": "隐匿其中", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.隐匿其中,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.海临人的好奇心
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "艾摩诃"
            ] //角色名称
        },
        "detail": [
            "同调者在离开",
            speSkillCon("【隐匿】"),
            "状态后，其攻击速度提升30％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "、额外攻击力提升30％",
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "，持续15秒。同时，所有同调者获得2层",
            speSkillCon("【激励】"),
            "，通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.隐匿),
            speLaohenSkillCon(LaohenToastSkillEnum.激励),
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "束缚蚀力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.束缚蚀力,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.一枕酣甜
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "凤无梦"
            ] //角色名称
        },
        "detail": [
            "对",
            speSkillCon("【定身】"),
            "的敌方单位造成的蚀元素伤害额外提高",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("90％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.定身)
        ]
    },
    {
        "name": "生人勿近·方块", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生人勿近方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.玄学
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "成功击退目标时，额外造成",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            "目标当前生命值的",
            speSkillCon("【真实伤害】"),
            "，首领单位受到的该伤害减少90％，并使目标在60秒内攻击力降低20％",
            speSkillCon("（目标减益乘区·目标攻击力降低）", SkillColorEnum.injuries),
            "，对相同目标每2秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "伤痕赐福", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.伤痕赐福,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.调和清凉
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身生命值低于70%时，受到的伤害降低",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，若该伤害为投射物伤害，则降低效果提高30%",
        ]
    },
    {
        "name": "水泽破阵", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水泽破阵,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.泡影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者在水元素区域上施放主动技能时，场上所有同调者获得2层",
            speSkillCon("【激励】"),
            "，通过该效果最多获得",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            speSkillCon("【激励】")
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "核心重压", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心重压,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.流星坠处
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者使用主动技能后，在3秒内对自身300范围内的敌人造成共计",
            speSkillCon("360％~600％（等级1时）"),
            "/",
            speSkillCon("720％~1200％（等级2时）"),
            "/",
            speSkillCon("1080％~1800％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）刻印防御的物理伤害。该效果无法对飞行单位造成伤害。"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "蚀之激励", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀之激励,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.繁花蜃影
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "云无月"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【蚀爆伤害】"),
            "后，所有友方同调者获得2层",
            speSkillCon("【激励】"),
            "。通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.蚀爆伤害),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "针对削弱", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.针对削弱,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.秩序囚笼
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "襄铃",
                "赫九逸"
            ] //角色名称
        },
        "detail": [
            "成功将敌人拉拽至身边时，降低目标30％",
            speSkillCon("（目标减益乘区·目标攻击力降低）", SkillColorEnum.injuries),
            "攻击力，并获得1层",
            speSkillCon("【激励】"),
            "，该效果单次技能最多触发3次；通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "生人勿近·菱形", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生人勿近菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.拂晓
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "成功击退目标时，额外造成",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            "目标当前生命值的",
            speSkillCon("【真实伤害】"),
            "，首领单位受到的该伤害减少90％，并使目标在60秒内基础减伤降低50％",
            speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
            "，对相同目标每2秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "冻结延长", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.冻结延长,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.你好维瑟尔
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "阳铃"
            ] //角色名称
        },
        "detail": [
            "对敌人施加",
            speSkillCon("【冻结状态】"),
            "时，延长20％冻结状态的时间，且使全体友方同调者获得1层",
            speSkillCon("【激励】"),
            "。每10秒最多触发一次。通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结状态),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "蚀灵激励", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀灵激励,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.奢梦
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "蚀元素同调者释放主动技能后，场上所有同调者获得2层",
            speSkillCon("【激励】"),
            "，通过该效果获得",
            speSkillCon("【激励】"),
            "不能超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "技决重威", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.技决重威,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.飞驰海岸线
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施放主动技能或异核技能后，场上所有物理元素同调者刻印攻击提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续30秒，重复触发刷新效果持续时间"
        ]
    },
    {
        "name": "陷阵勇士", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.陷阵勇士,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.圆锥曲线
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "对敌方目标造成的伤害额外提升",
            speSkillCon("12.5％（等级1时）"),
            "/",
            speSkillCon("25.0％（等级2时）"),
            "/",
            speSkillCon("37.5％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "；若与目标的距离不超过300，则造成的物理伤害和雷元素伤害再额外提升",
            speSkillCon("12.5％（等级1时）"),
            "/",
            speSkillCon("25.0％（等级2时）"),
            "/",
            speSkillCon("37.5％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "主动激励", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.主动激励,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.意外邂逅
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施放主动技能后，场上所有同调者获得2层",
            speSkillCon("【激励】"),
            "，通过该效果获得的",
            speSkillCon("【激励】"),
            "不能超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "自强不息", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.自强不息,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.截稿日
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "通过自身技能施放获得永久的属性提升时，立即使自身获得",
            speSkillCon("5000（等级1时）"),
            "/",
            speSkillCon("10000（等级2时）"),
            "/",
            speSkillCon("15000（等级3时）"),
            "点护盾，其他友方同调者获得一半效果，该效果每18秒最多触发一次",
        ]
    },
    {
        "name": "狙击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.狙击,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.增肌训练
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "崔远之"
            ] //角色名称
        },
        "detail": [
            "普通攻击命中超过700距离的目标时，伤害额外提升",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，普通攻击造成暴击时伤害提升30％",
        ]
    },
    {
        "name": "烈焰暴击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.烈焰暴击,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.化为千鹤], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "昊苍"
            ] //角色名称
        },
        "detail": [
            "暴击率提升5％",
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "；炎元素攻击产生暴击时，提升",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害"
        ]
    },
    {
        "name": "屏障·炎", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.屏障炎,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.代号百草
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "所有同调者造成的范围伤害提升10％",
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，该效果不叠加。",
            "",
            "此外，当炎元素同调者在施放完屏障类技能后，所有友方同调者获得4层",
            speSkillCon("【激励】"),
            "，通过该方式获得的",
            speSkillCon("【激励】"),
            "层数不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "雷寒同调", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.雷寒同调,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.记录一夏
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【冻结反应】"),
            "/",
            speSkillCon("【传导反应】"),
            "/",
            speSkillCon("【电解反应】"),
            "后，场上所有同调者获得1层",
            speSkillCon("【激励】"),
            "，该效果每3秒最多触发一次，通过该效果最多获得",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            speSkillCon("【激励】")
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "寒霜雷涌", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.寒霜雷涌,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.速速降温
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【冻结反应】"),
            "/",
            speSkillCon("【传导反应】"),
            "/",
            speSkillCon("【电解反应】"),
            "时，场上同调者额外伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("36％（等级2时）"),
            "/",
            speSkillCon("50％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续30秒，重复触发刷新效果持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应)
        ]
    },
    {
        "name": "统筹备战", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.统筹备战,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.假日余暇
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每8秒获得1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            "",
            "每次队伍中有同调者重伤时，移除4层所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "炽焰增威", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.炽焰增威,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.CATvsDOG
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "炎元素同调者使用异核技能时，场上所有同调者获得4层",
            speSkillCon("【激励】"),
            "，通过该效果最多获得",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            speSkillCon("【激励】"),
            "，并且此后30秒内自身的自动技能回复速率提升12%",
            speSkillCon("（属性乘区·自动技能回复速度）", SkillColorEnum.injuries),
            "。",
            "",
            "以上效果每个同调者30秒内最多触发1次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "反客为主", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.反客为主,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.繁星记忆
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "成功摧毁敌方屏障时，敌方屏障将转化为我方屏障，产生在摧毁它的同调者所在位置，持续15秒；同时，所有友方同调者获得4层",
            speSkillCon("【激励】"),
            "，通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "屏障赋能·物理", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.屏障赋能物理,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.流光竞夜
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "在施放完屏障类技能后，提升场上所有友方同调者",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外物理伤害，效果持续60秒，同名效果无法叠加，重复触发时将会刷新效果的持续时间",
        ]
    },
    {
        "name": "退敌之势", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.退敌之势,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.不期而遇
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "成功击退目标时，所有同调者获得1层",
            speSkillCon("【激励】"),
            "，该效果每18秒最多触发一次，通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "生人勿近·三角", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.生人勿近三角,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.家
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "成功击退目标时，额外造成",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            "目标当前生命值的",
            speSkillCon("【真实伤害】"),
            "，首领单位受到的该伤害减少90％，并使目标在60秒内移动速度减少20％，对相同目标每2秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "破阵乾坤", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.破阵乾坤,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.交换惊喜
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者攻击首领单位或击破敌方单位的格档条后，使场上所有敌方单位受到伤害提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "，持续10秒，重复触发刷新效果持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "百折不挠·菱形", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.百折不挠菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.团圆
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身周围半径400范围内，每增加一名敌人，自身获得一层“坚石”，每层使自身受到的伤害减少",
            speSkillCon("3％~5％（等级1时）"),
            "/",
            speSkillCon("5％~8％（等级2时）"),
            "/",
            speSkillCon("6％~10％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，坚石效果最多叠加6层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "左膀右臂·菱形", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.左膀右臂菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.雨中愿
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "岑缨"
            ] //角色名称
        },
        "detail": [
            "提升自身召唤物",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "连击精通", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.连击精通,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            160,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.秘密音律
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "司危"
            ] //角色名称
        },
        "detail": [
            "连击技能伤害提升20％",
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "，且在连击技能释放后，所有同调者获得4层",
            speSkillCon("【激励】"),
            "。通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "祝福区域", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.祝福区域,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.白夜
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "莫红袖"
            ] //角色名称
        },
        "detail": [
            "处于",
            speSkillCon("【雾化区域】"),
            "中的友方同调者，每秒回复2％最大生命值，额外伤害提升",
            speSkillCon("10.0％（等级1时）"),
            "/",
            speSkillCon("30.0％（等级2时）"),
            "/",
            speSkillCon("50.0％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.雾化区域)
        ]
    },
    {
        "name": "量化抵御", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.量化抵御,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            200,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.打成一片
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "释放技能使自身格挡值完全恢复时，同时获得",
            speSkillCon("12％~20％（等级1时）"),
            "/",
            speSkillCon("21％~35％（等级2时）"),
            "/",
            speSkillCon("30％~50％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "的减伤提升，效果持续30秒，重复触发时将刷新效果的持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "百折不挠·方块", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.百折不挠方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.世事难料
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身周围半径400范围内，每增加一名敌人，自身获得一层“坚石”，每层使自身受到的伤害减少",
            speSkillCon("3％~5％（等级1时）"),
            "/",
            speSkillCon("5％~8％（等级2时）"),
            "/",
            speSkillCon("6％~10％（等级3时）"),
            "（",
            speSkillCon("【防御依赖】"),
            "）",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，坚石效果最多叠加6层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.防御依赖)
        ]
    },
    {
        "name": "连击赐福", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.连击赐福,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            100,
            100,
            100
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.街市清晨
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "连击技能额外提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
            "的暴击率",
        ]
    },
    {
        "name": "战斗反射", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.战斗反射,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.樱华如梦
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "唐路遥"
            ] //角色名称
        },
        "detail": [
            "同调者受到直接伤害时，会获得自身",
            speSkillCon("1000％（等级1时）"),
            "/",
            speSkillCon("2000％（等级2时）"),
            "/",
            speSkillCon("3000％（等级3时）"),
            "最高刻印属性的护盾，每30秒最多触发一次，场上除自身外每多一名方块职业类型的同调者，该效果减少50％"
        ]
    },
    {
        "name": "信号干扰·菱形", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.信号干扰菱形,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            160,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.于人海中
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "释放主动技能/异核技能后，降低全场飞行单位10％",
            speSkillCon("（目标减益乘区·目标攻击力降低）", SkillColorEnum.injuries),
            "攻击力，该效果最多可叠加5层；主动技能/异核技能施放过程中，每成功拦截一个敌方投射物，所有友方同调者获得1层",
            speSkillCon("【激励】"),
            "。通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "出淤泥而全染", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.出淤泥而全染,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.书卷晨曦
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者重伤时，对自身300范围内的非首领单位造成30倍体质的",
            speSkillCon("【真实伤害】"),
            "；并增加其他友方同调者",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层激励，通过该方式获得的",
            speSkillCon("【激励】"),
            "层数不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "坚毅不屈", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.坚毅不屈,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.科技光辉
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "田偌"
            ] //角色名称
        },
        "detail": [
            "每次对友方同调者产生治疗效果后，回复相当于治疗量",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("100％（等级2时）"),
            "/",
            speSkillCon("150％（等级3时）"),
            "的格挡值",
        ]
    },
    {
        "name": "因祸得福", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.因祸得福,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.早日康复
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "元桃桃"
            ] //角色名称
        },
        "detail": [
            "同调者每次受到攻击时，异核充能回复",
            speSkillCon("10（等级1时）"),
            "/",
            speSkillCon("15（等级2时）"),
            "/",
            speSkillCon("20（等级3时）"),
            "秒，每15秒最多触发一次",
        ]
    },
    {
        "name": "荆棘之志", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.荆棘之志,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.旧城夜幕
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "禺期"
            ] //角色名称
        },
        "detail": [
            "基础减伤提升12％",
            speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
            "，反弹伤害翻倍，反弹伤害属于雷元素时额外增加",
            speSkillCon("100％（等级1时）"),
            "/",
            speSkillCon("200％（等级2时）"),
            "/",
            speSkillCon("300％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "蛮力打击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蛮力打击,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.万家灯火
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "刻印防御不低于750时，同调者主动技能造成伤害后，对首个目标附带自身",
            speSkillCon("1500％（等级1时）"),
            "/",
            speSkillCon("3000％（等级2时）"),
            "/",
            speSkillCon("4500％（等级3时）"),
            "刻印防御的伤害，该效果单次技能最多触发一次",
        ]
    },
    {
        "name": "集中火力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.集中火力,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            150,
            100,
            100
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.混乱烟尘
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "持续对一个目标攻击超过6秒后，提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("25％（等级2时）"),
            "/",
            speSkillCon("35％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害；若同时拥有【单点突破】，则伤害增加效果翻倍；切换攻击目标后计时会重新刷新",
        ]
    },
    {
        "name": "状态绝佳", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.状态绝佳,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.旖旎夜色
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者登场后，获得额外40％",
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精和40％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "攻击速度的提升，并以每秒",
            speSkillCon("1.0％（等级1时）"),
            "/",
            speSkillCon("0.5％（等级2时）"),
            "/",
            speSkillCon("0.2％（等级3时）"),
            "的速度衰减，该提升最多减少至10％",
        ]
    },
    {
        "name": "无畏者", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.无畏者,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.千本之门
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "马尔斯"
            ] //角色名称
        },
        "detail": [
            "	同调者自身400范围内每增加一名敌人，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，最多提升100％",
        ]
    },
    {
        "name": "单点突破", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.单点突破,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            150,
            100,
            100
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.城市嚣音
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "持续对一个目标攻击超过6秒后，提升",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("25％（等级2时）"),
            "/",
            speSkillCon("35％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害；若同时拥有【集中火力】，则伤害增加效果翻倍；切换攻击目标后计时会重新刷新",
        ]
    },
    {
        "name": "熊熊燃烧", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.熊熊燃烧,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.通道
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "罗咤"
            ] //角色名称
        },
        "detail": [
            "造成炎元素范围伤害时，对命中的目标每秒造成自身",
            speSkillCon("100％（等级1时）"),
            "/",
            speSkillCon("200％（等级2时）"),
            "/",
            speSkillCon("300％（等级3时）"),
            "刻印专精的伤害，持续10秒，每20秒最多触发一次",
        ]
    },
    {
        "name": "等待时机", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.等待时机,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.甜蜜心绪
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "瓦卡莎"
            ] //角色名称
        },
        "detail": [
            "若12秒内未造成伤害，则造成的元素伤害额外提升",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("85％（等级2时）"),
            "/",
            speSkillCon("120％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续10秒",
        ]
    },
    {
        "name": "冻结精通", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.冻结精通,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.大隐于市
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "耶芙娜"
            ] //角色名称
        },
        "detail": [
            "同调者每触发一次",
            speSkillCon("【冻结反应】"),
            "，获得自身",
            speSkillCon("0.7％（等级1时）"),
            "/",
            speSkillCon("1.4％（等级2时）"),
            "/",
            speSkillCon("2.0％（等级3时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加）", SkillColorEnum.injuries),
            "刻印专精的提升，最多可叠加40层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应)
        ]
    },
    {
        "name": "元素炼炉", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素炼炉,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.落日残迹
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当造成元素伤害时，20秒内造成的该类型元素伤害额外提升",
            speSkillCon("40％（等级1时）"),
            "/",
            speSkillCon("80％（等级2时）"),
            "/",
            speSkillCon("120％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，每40秒最多触发一次",
        ]
    },
    {
        "name": "蚀入骨髓", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀入骨髓,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.生死在握
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "卡洛琳"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【蚀爆伤害】"),
            "后，额外残留20点蚀爆值，并在20秒内目标受到的蚀属性伤害额外提高",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("90％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，同名效果无法叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.蚀爆伤害)
        ]
    },
    {
        "name": "福利发放", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.福利发放,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.旧巷
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使目标同调者脱离危机避免重伤时，使其获得额外",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（属性乘区·刻印专精百分比增加；属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "刻印专精和刻印攻击的提升，持续20秒。另外，使全体同调者异核充能回复15秒"
        ]
    },
    {
        "name": "信号干扰·三角", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.信号干扰三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            160,
            120,
            120
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.归档
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "尚非乐"
            ] //角色名称
        },
        "detail": [
            "释放主动技能/异核技能后，降低全场飞行单位10％",
            speSkillCon("（目标减益乘区·目标攻击力降低）", SkillColorEnum.injuries),
            "攻击力，该效果最多可叠加5层；主动技能/异核技能施放过程中，每成功拦截一个敌方投射物，所有友方同调者获得1层",
            speSkillCon("【激励】"),
            "。通过该方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "绝地反击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.绝地反击,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [
                LaohenNameEnum.向阳
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者当前生命值每减少2％，造成的伤害额外提高",
            speSkillCon("2％（等级1时）"),
            "/",
            speSkillCon("3％（等级2时）"),
            "/",
            speSkillCon("5％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "卸劲化能", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.卸劲化能,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "乐无异"
            ] //角色名称
        },
        "detail": [
            "释放雷元素异核技能后，雷元素伤害额外提升",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，受到来自精英/首领单位的伤害减少20％",
            speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
            "，持续60秒，重复触发时将刷新效果的持续时间"
        ]
    },
    {
        "name": "愈伤澜起", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.愈伤澜起,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "尤尼"
            ] //角色名称
        },
        "detail": [
            "战斗中受到治疗时，若自身为水元素同调者则获得",
            speSkillCon("2.5％（等级1时）"),
            "/",
            speSkillCon("5％（等级2时）"),
            "/",
            speSkillCon("7.5％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害提升，该效果最多叠加10层，效果持续整场战斗",
        ]
    },
    {
        "name": "强攻·对地·方块", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.强攻对地方块,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.怯者的墓志铭
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "尤尼",
                "十手卫"
            ] //角色名称
        },
        "detail": [
            "攻击生命值处于50%以上的地面单位时，提升",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("35%（等级2时）"),
            "/",
            speSkillCon("50%（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "先破后立", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.先破后立,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "百里屠苏"
            ] //角色名称
        },
        "detail": [
            "战斗中每累积失去自身10％最大生命值时，使自身获得",
            speSkillCon("2.5％（等级1时）"),
            "/",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("7.5％（等级1时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害提升，该效果最多叠加10层，效果持续整场战斗",
        ]
    },
    {
        "name": "蚀核强攻", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.蚀核强攻,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "明月尘"
            ] //角色名称
        },
        "detail": [
            "蚀元素同调者造成异核技能伤害后，自身攻击速度提高40％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，额外攻击提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "，持续30秒，重复触发刷新持续时间",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "雷域和源", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.雷域和源,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "景"
            ] //角色名称
        },
        "detail": [
            "施展主动技能使场上所有雷元素同调者刻印攻击提高",
            speSkillCon("3％（等级1时）"),
            "/",
            speSkillCon("6％（等级2时）"),
            "/",
            speSkillCon("9％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续30秒，最多叠加5层，重复触发刷新效果持续时间",
        ]
    },
    {
        "name": "如火如荼", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.如火如荼,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "无咎"
            ] //角色名称
        },
        "detail": [
            "场上炎元素的同调者人数达到2名或以上时，每6秒提升所有同调者1层",
            speSkillCon("【激励】"),
            "，最多提升",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层；当场上炎元素的同调者人数少于2名时，移除所有同调者通过该方式获得的",
            speSkillCon("【激励】"),
            "层数"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "破碎打击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.破碎打击,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋
        ], //职业名称
        "useSkill": [
            150,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "霍冉"
            ] //角色名称
        },
        "detail": [
            "当击破敌方单位格挡时，对击破目标造成",
            speSkillCon("200％（等级1时）"),
            "/",
            speSkillCon("400％（等级2时）"),
            "/",
            speSkillCon("600％（等级3时）"),
            "刻印攻击的",
            speSkillCon("【真实伤害】"),
            "，并对目标周围400范围内其他敌方单位造成50％的伤害，该效果对每个目标40秒最多触发一次"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "核心蚀解", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.核心蚀解,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "鸢"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【蚀爆伤害】"),
            "后使场上蚀元素同调者造成伤害额外提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续30秒",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.蚀爆伤害)
        ]
    },
    {
        "name": "狂风卷袭", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.狂风卷袭,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "红玉"
            ] //角色名称
        },
        "detail": [
            "使用异核技能后，使队伍中所有友方同调者提升",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外风元素伤害，持续60秒，同名效果无法叠加，重复触发时将刷新效果的持续时间",
        ]
    },
    {
        "name": "灵感激活", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.灵感激活,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            100,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "吉娜"
            ] //角色名称
        },
        "detail": [
            "同调者释放蚀属性异核技能后，主动技能和自动技能的回复速率提升",
            speSkillCon("50％（等级1时）"),
            "/",
            speSkillCon("100％（等级2时）"),
            "/",
            speSkillCon("150％（等级3时）"),
            speSkillCon("（【属性乘区·主动技能回复速度】；属性乘区·自动技能回复速度）", SkillColorEnum.injuries),
            "，持续30秒",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区主动技能回复速度)
        ]
    },
    {
        "name": "超频引雷", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.超频引雷,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "雪长夏"
            ] //角色名称
        },
        "detail": [
            "使用主动技能/异核技能后，同调者攻击速度提升20％",
            speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
            "，雷元素额外伤害提升",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，持续20秒，重复触发时将刷新效果的持续时间",
        ]
    },
    {
        "name": "同步强化", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.同步强化,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "狄砚"
            ] //角色名称
        },
        "detail": [
            "对除自身外友方同调者施加",
            speSkillCon("【增益效果】"),
            "时，可额外提升该同调者20％",
            speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
            "暴击伤害，持续15秒；同时，提升所有同调者2层",
            speSkillCon("【激励】"),
            "，通过此方式获得的",
            speSkillCon("【激励】"),
            "不超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层，每28秒最多触发一次",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.增益效果),
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "左膀右臂·三角", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.左膀右臂三角,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "瞳"
            ] //角色名称
        },
        "detail": [
            "提升自身召唤物",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "霜天", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.霜天,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            300,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "风晴雪"
            ] //角色名称
        },
        "detail": [
            "主动技能伤害提升10％",
            speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
            "；每次释放主动技能后，全体同调者霜元素额外伤害提升",
            speSkillCon("5％（等级1时）"),
            "/",
            speSkillCon("10％（等级2时）"),
            "/",
            speSkillCon("15％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，最多叠加5层，持续30秒，重复触发时将刷新效果的持续时间",
        ]
    },
    {
        "name": "源源不断", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.源源不断,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "莉缇亚"
            ] //角色名称
        },
        "detail": [
            "持续施法类自动技能成功施放后，返还50％该技能冷却，且获得",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害提升，持续25秒",
        ]
    },
    {
        "name": "刺骨寒意", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.刺骨寒意,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "言御"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【冻结反应】"),
            "/",
            speSkillCon("【消融反应】"),
            "/",
            speSkillCon("【电解反应】"),
            "时，受反应影响的目标后续受到的伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "（该效果属于",
            speSkillCon("【元素反应触发增伤】"),
            "）"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
            speLaohenSkillCon(LaohenToastSkillEnum.消融反应),
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "风之庇佑", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.风之庇佑,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "紫都"
            ] //角色名称
        },
        "detail": [
            "使用风元素对友方进行治疗或附加",
            speSkillCon("【增益效果】"),
            "时，使目标提升",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外元素伤害，持续20秒，重复施加该效果时将会刷新效果的持续时间，相同效果无法叠加",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.增益效果)
        ]
    },
    {
        "name": "沉浸舞台", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.沉浸舞台,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "芙蕖"
            ] //角色名称
        },
        "detail": [
            "同调者20秒内未造成伤害时，友方同调者元素伤害额外提高",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，该效果最多持续15秒，同名效果无法叠加",
        ]
    },
    {
        "name": "锻炼治疗", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.锻炼治疗,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            180,
            180,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "苏筱"
            ] //角色名称
        },
        "detail": [
            "对友方同调者造成治疗时，提升自身10％",
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，最多提升",
            speSkillCon("30％（等级1时）"),
            "/",
            speSkillCon("60％（等级2时）"),
            "/",
            speSkillCon("100％（等级3时）")
        ]
    },
    {
        "name": "元素跃威", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素跃威,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "提提亚"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【冻结反应】"),
            "/",
            speSkillCon("【传导反应】"),
            "/",
            speSkillCon("【电解反应】"),
            "时，自身刻印攻击提高",
            speSkillCon("3％（等级1时）"),
            "/",
            speSkillCon("6％（等级2时）"),
            "/",
            speSkillCon("9％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续15秒，最多叠加5次",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.冻结反应),
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应),
            speLaohenSkillCon(LaohenToastSkillEnum.元素反应触发增伤)
        ]
    },
    {
        "name": "隐匿回响", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.隐匿回响,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            150,
            150,
            150
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "伊琅相思"
            ] //角色名称
        },
        "detail": [
            "场上每有一个友方同调者进入",
            speSkillCon("【隐匿】"),
            "状态，自身自动技能回复速率提升12％",
            speSkillCon("（属性乘区·自动技能回复速度）", SkillColorEnum.injuries),
            "，额外伤害提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("18％（等级2时）"),
            "/",
            speSkillCon("25％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，最多叠加3层，持续60秒，重复触发时将刷新效果的持续时间",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.隐匿)
        ]
    },
    {
        "name": "高压雷击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.高压雷击,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "言雀"
            ] //角色名称
        },
        "detail": [
            "触发",
            speSkillCon("【电解反应】"),
            "/",
            speSkillCon("【爆燃反应】"),
            "/",
            speSkillCon("【传导反应】"),
            "时，受反应影响的目标后续受到的伤害提高",
            speSkillCon("20％（等级1时）"),
            "/",
            speSkillCon("40％（等级2时）"),
            "/",
            speSkillCon("60％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "（该效果属于",
            speSkillCon("【元素反应触发增伤】"),
            "）"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.电解反应),
            speLaohenSkillCon(LaohenToastSkillEnum.爆燃反应),
            speLaohenSkillCon(LaohenToastSkillEnum.传导反应),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加),
            speLaohenSkillCon(LaohenToastSkillEnum.元素反应触发增伤)
        ]
    },
    {
        "name": "风刃侵蚀", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.风刃侵蚀,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "晴雪"
            ] //角色名称
        },
        "detail": [
            "风元素同调者或其召唤物对目标造成普通攻击伤害后，使目标受到伤害提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("（【目标减益乘区·目标受伤害增加】）", SkillColorEnum.injuries),
            "，持续6秒，重复触发刷新持续时间",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "意志永存", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.意志永存,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            160,
            160,
            160
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "老板"
            ] //角色名称
        },
        "detail": [
            "若因自身的主动技能/异核技能导致重伤时，则本场战斗结束前，所有友方同调者获得",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("（增伤乘区·激励）", SkillColorEnum.injuries),
            "层",
            speSkillCon("【激励】")
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "元素领袖·雷", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素领袖雷,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.魇境边界
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当编队队长是雷元素同调者时，全队提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("17.5％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "元素专攻·三角·α型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素专攻三角α型,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.魇境边界
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "造成元素伤害时，提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("15％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害，位于",
            speSkillCon("【干燥环境】"),
            "时，提升幅度翻倍。和[元素专攻·三角·β型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.干燥环境)
        ]
    },
    {
        "name": "力量平衡", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.力量平衡,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [
                LaohenNameEnum.魇境边界
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施展异核技能结束后若自身刻印攻击加成小于等于70％时（包含",
            speSkillCon("属性乘区·刻印攻击百分比增加"),
            "和",
            speSkillCon("属性乘区·刻印攻击额外增加值"),
            "部分），可获得",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（【属性乘区·额外攻击力加成】）", SkillColorEnum.injuries),
            "的额外攻击加成，持续90秒，重复触发刷新持续时间",
            "",
            "效果持续时间内当自身刻印攻击加成大于70％时，该效果立即消失"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "轰能激发", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.轰能激发,
        "takeEffect": [JobTypeName.所有同调者
        ], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [
                LaohenNameEnum.曙色的地平线
            ], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者施展异核技能后，自身伤害额外提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "，若该伤害为雷元素或者物理伤害则效果翻倍， 持续30秒，重复触发刷新持续时间",
        ]
    },
    {
        "name": "雷核释力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.雷核释力,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师
        ], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "缇诗"
            ] //角色名称
        },
        "detail": [
            "雷元素同调者施展异核技能后，自身刻印攻击提高",
            speSkillCon("15％（等级1时）"),
            "/",
            speSkillCon("30％（等级2时）"),
            "/",
            speSkillCon("45％（等级3时）"),
            speSkillCon("（属性乘区·刻印攻击百分比增加）", SkillColorEnum.injuries),
            "，持续60秒，重复触发刷新持续时间",
        ]
    },
    {
        "name": "物理异能", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.物理异能,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [
                "米达斯"
            ] //角色名称
        },
        "detail": [
            "物理同调者施展异核技能后，当前场上敌方目标受到伤害提高20％",
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries),
            "，持续60秒，同时自身刻印攻击提高",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("20％（等级2时）"),
            "/",
            speSkillCon("30％（等级3时）"),
            speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
            "，持续45秒，重复触发刷新效果持续时间",
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "唤物充能", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.唤物充能,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.怯者的墓志铭], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者施展主动技能或异核技能时，使自身召唤物造成的伤害额外提高",
            speSkillCon("25％（等级1时）"),
            "/",
            speSkillCon("50％（等级2时）"),
            "/",
            speSkillCon("75％（等级3时）"),
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "且忽略目标10％",
            speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
            "基础减伤，持续45秒，重复触发刷新效果持续时间",
            "",
            "持续时间内造成召唤物伤害时自身获得10.0秒异核充能，该回复充能效果每个同调者每45秒最多触发1次"
        ]
    },
    {
        "name": "物调联破", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.物调联破,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.未晞], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施放异核技能时，场上所有同调者获得2层",
            speSkillCon("[激励]"),
            "，若为物理同调者施放且是该同调者的首次施放，则该次额外获得2层",
            speSkillCon("[激励]"),
            "通过该效果获得的",
            speSkillCon("[激励]"),
            "不能超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("(增伤乘区·激励)", SkillColorEnum.injuries),
            "层"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "碎易蚀影", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.碎易蚀影,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": ["珑"] //角色名称
        },
        "detail": [
            "蚀元素同调者施放异核技能后，使场上同调者刻印攻击提高15％",
            speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
            "，且场上敌方目标受到伤害提高",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("35%（等级2时）"),
            "/",
            speSkillCon("50%（等级3时）"),
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries),
            "，持续60秒，重复触发刷新持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "暴风骤雨·菱形·β型", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.暴风骤雨菱形β型,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [LaohenNameEnum.千灯无间], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "攻击速度提高",
            speSkillCon("7%（等级1时）"),
            "/",
            speSkillCon("13%（等级2时）"),
            "/",
            speSkillCon("18%（等级3时）"),
            speSkillCon("(属性乘区·额外攻击速度)", SkillColorEnum.injuries),
            "，位于",
            speSkillCon("[潮湿环境]"),
            "时，提升幅度翻倍。和[暴风骤雨·菱形·α型]不叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.潮湿环境)
        ]
    },
    {
        "name": "伤疗双效", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.伤疗双效,
        "takeEffect": [JobTypeName.战术家, JobTypeName.护佑者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.千灯无间], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者造成主动技能/异核伤害后使场上同调者额外攻击力提高15％",
            speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries),
            "，持续30秒，若该名同调者在持续时间内造成了治疗则该效果额外提高",
            speSkillCon("10%（等级1时）"),
            "/",
            speSkillCon("20%（等级2时）"),
            "/",
            speSkillCon("30%（等级3时）"),
            speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries),
            "额外攻击力，并刷新持续时间，该效果不可叠加"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "终转攻轮", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.终转攻轮,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.浊雨], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "每次获得激励效果时，会将刻印终端超出1000部分的",
            speSkillCon("6%（等级1时）"),
            "/",
            speSkillCon("12%（等级2时）"),
            "/",
            speSkillCon("18%（等级3时）"),
            speSkillCon("(属性乘区·刻印攻击额外增加值)", SkillColorEnum.injuries),
            "提升场上同调者的刻印攻击（每次最多提升90点刻印攻击），该效果每6秒最多触发1次，可叠加5次"
        ]
    },
    {
        "name": "炎域强袭", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.炎域强袭,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": ["林"] //角色名称
        },
        "detail": [
            "炎元素区域扩大20%，同调者处于炎元素区域上时，每2秒回复1%最大生命值且额外攻击力提高",
            speSkillCon("10%（等级1时）"),
            "/",
            speSkillCon("20%（等级2时）"),
            "/",
            speSkillCon("30%（等级3时）"),
            speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries),
            "，炎元素同调者额外攻击力提高效果翻倍"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "攻守兼备", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.攻守兼备,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.野风], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "自身的刻印防御每100点提高",
            speSkillCon("2.0%（等级1时）"),
            "/",
            speSkillCon("3.0%（等级2时）"),
            "/",
            speSkillCon("4.0%（等级3时）"),
            speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
            "刻印攻击，当同调者生命值低于50%时，可获得最大生命值20%的护盾（护盾效果每个同调者每60秒最多触发1次）"
        ]
    },
    {
        "name": "炙地之力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.炙地之力,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.度晴波], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者处于炎元素区域上时最大生命值提高20％，且处于炎元素区域上施展主动技能获得1层",
            speSkillCon("[激励]"),
            "，<轻卫、铁御>施展时额外获得3层。通过该效果获得的",
            speSkillCon("[激励]"),
            "不能超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("(增伤乘区·激励)", SkillColorEnum.injuries),
            "层"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "连破留痕", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.连破留痕,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": ["玄戈"] //角色名称
        },
        "detail": [
            "主动技能伤害提升10％",
            speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
            "；连击技能命中的目标后续受到的伤害提高",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("40%（等级2时）"),
            "/",
            speSkillCon("60%（等级3时）"),
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries),
            "，持续30秒"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加)
        ]
    },
    {
        "name": "元素领袖·物理", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素领袖物理,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.默
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当编队队长是物理同调者时，全队提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("17.5％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "利刃连击", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.利刃连击,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.默], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "使同调者的",
            speSkillCon("[同调]"),
            "效果中",
            speSkillCon("属性乘区·刻印攻击百分比增加"),
            "和",
            speSkillCon("属性乘区·刻印攻击额外增加值"),
            "的可同步上限增加15％",
            "",
            "施放连击技能后，自身造成的伤害额外提高",
            speSkillCon("30%（等级1时）"),
            "/",
            speSkillCon("60%（等级2时）"),
            "/",
            speSkillCon("90%（等级3时）"),
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，场上同调者刻印攻击提高25％",
            speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
            "，持续30秒"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.同调),
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成),
        ]
    },
    {
        "name": "异能再生", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.异能再生,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.暗涌轮廓], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "施放异核技能后，使自身及友方同调者提高",
            speSkillCon("10%（等级1时）"),
            "/",
            speSkillCon("15%（等级2时）"),
            "/",
            speSkillCon("20%（等级3时）"),
            speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
            "同调者暴击率，主动技能回复速度提高40％",
            speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries),
            "，持续20秒"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区主动技能回复速度)
        ]
    },
    {
        "name": "水陷抗涣", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水陷抗涣,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师], //职业名称
        "useSkill": [
            180,
            240,
            300
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": ["余音"] //角色名称
        },
        "detail": [
            "对处于水元素区域的目标造成水元素伤害时，会为目标施加“迟滞”效果，“迟滞”效果使目标移动速度降低70％且水元素抗性降低",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("40%（等级2时）"),
            "/",
            speSkillCon("60%（等级3时）"),
            speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries),
            "，持续5秒，迟滞效果结束后会使目标",
            speSkillCon("[定身]"),
            "3秒。重复触发不刷新持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.定身),
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标抗性降低)
        ]
    },
    {
        "name": "远击增幅", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.远击增幅,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            180,
            180,
            180
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.Feat], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "同调者造成伤害时，根据与目标的距离提高自身额外造成的伤害，距离600时最多额外提高",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("40%（等级2时）"),
            "/",
            speSkillCon("60%（等级3时）"),
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries)
        ]
    },
    {
        "name": "屏碎涟漪", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.屏碎涟漪,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.神迹], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当有水元素同调者在场时，任意同调者施加的",
            speSkillCon("[屏障破碎]"),
            "或屏障持续时间结束时，在屏障位置造成一次300半径范围的10最终攻击的水元素伤害并对命中目标额外造成当前生命值",
            speSkillCon("20%（等级1时）"),
            "/",
            speSkillCon("35%（等级2时）"),
            "/",
            speSkillCon("50%（等级3时）"),
            "的",
            speSkillCon("[真实伤害]"),
            "（视为施加屏障的同调者造成的伤害；",
            speSkillCon("[真实伤害]"),
            "每个目标最多受到1次且首领单位受到的",
            speSkillCon("[真实伤害]"),
            "伤害减少80％）"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.屏障破碎),
            speLaohenSkillCon(LaohenToastSkillEnum.真实伤害)
        ]
    },
    {
        "name": "精神振奋", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.精神振奋,
        "takeEffect": [JobTypeName.游徒, JobTypeName.筑术师], //职业名称
        "useSkill": [
            140,
            140,
            140
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.神迹], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "场上的同调者生命值高于70％时，额外攻击力提高",
            speSkillCon("10%（等级1时）"),
            "/",
            speSkillCon("20%（等级2时）"),
            "/",
            speSkillCon("30%（等级3时）"),
            speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries)
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "水蕴赐福", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": true,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.水蕴赐福,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            200,
            200,
            200
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.TARGETERROR], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当有敌方目标处在水元素区域时，同调者施展主动技能后场上所有同调者获得2层",
            speSkillCon("[激励]"),
            "，通过该效果获得的",
            speSkillCon("[激励]"),
            "不能超过",
            speSkillCon("4（等级1时）"),
            "/",
            speSkillCon("7（等级2时）"),
            "/",
            speSkillCon("10（等级3时）"),
            speSkillCon("(增伤乘区·激励)", SkillColorEnum.injuries),
            "层"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.激励)
        ]
    },
    {
        "name": "元素领袖·水", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.r, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.元素领袖水,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            120,
            90,
            90
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [
                LaohenNameEnum.TARGETERROR
            ], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当编队队长是水元素同调者时，全队提升",
            speSkillCon("10％（等级1时）"),
            "/",
            speSkillCon("17.5％（等级2时）"),
            "/",
            speSkillCon("20％（等级3时）"),
            speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
            "额外伤害",
        ]
    },
    {
        "name": "驭风之力", //技能名称
        "skillType": LaohenSkillType.核心技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.驭风之力,
        "takeEffect": [JobTypeName.轻卫, JobTypeName.铁御, JobTypeName.尖锋], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [], //枚举LaohenNameEnum.(x)
            "队长刻印技能": ["十手卫"] //角色名称
        },
        "detail": [
            "风元素同调者施放主动技能后，自身额外攻击力提高10％",
            speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries),
            "，且场上敌方受到伤害提高",
            speSkillCon("8%（等级1时）"),
            "/",
            speSkillCon("14%（等级2时）"),
            "/",
            speSkillCon("20%（等级3时）"),
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries),
            "，持续30秒，效果可叠加3次，重复触发刷新持续时间"
        ],
        "speSkillToast": [
            speLaohenSkillCon(LaohenToastSkillEnum.目标减益乘区目标受伤害增加),
            speLaohenSkillCon(LaohenToastSkillEnum.属性乘区额外攻击力加成)
        ]
    },
    {
        "name": "风影追击", //技能名称
        "skillType": LaohenSkillType.常规技能,
        "isJL": false,
        "rarity": LaohenRarity.ssr, //稀有度，共3种（r，sr，ssr）
        "id": MXLaohenEnum.风影追击,
        "takeEffect": [JobTypeName.所有同调者], //职业名称
        "useSkill": [
            240,
            240,
            240
        ],
        "sourseLaohen": {
            "烙痕漫巡技能": [], //枚举LaohenNameEnum.(x)
            "烙痕唤醒技能": [LaohenNameEnum.须臾浮生], //枚举LaohenNameEnum.(x)
            "队长刻印技能": [] //角色名称
        },
        "detail": [
            "当有风元素同调者在场时，任意同调者对敌方造成异核伤害后，场上所有风元素同调者均会朝同一目标方向（该目标会优先选择异核伤害命中的目标中血量较多及精英首领单位）造成1次长800的矩形区域伤害为自身最终攻击",
            speSkillCon("1200％（等级1时）"),
            "/",
            speSkillCon("2400％（等级2时）"),
            "/",
            speSkillCon("3600％（等级3时）"),
            "的风元素伤害，每有一个风元素同调者造成该伤害，该伤害依次衰减一半。",
            "",
            "任意同调者造成异核伤害触发上述效果后进入20秒的冷却时间，每个同调者的冷却时间单独计算",
        ]
    }
]

const allLaohen = [
    {
        "name": "遇见宝石海",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.遇见宝石海,
        "extraData": {
            "illust": LaohenIllust.木昆昆, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.回收利用,
            MXLaohenEnum.你相信光吗,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.单打独斗对首领,
            MXLaohenEnum.生机盎然方块β型,
            MXLaohenEnum.自动瞄准系统方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.穹雷破晓
        ], //唤醒技能
    },
    {
        "name": "月光下的告解",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.月光下的告解,
        "extraData": {
            "illust": LaohenIllust.乔瑟夫乔尊尊, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.蚀力掌控,
            MXLaohenEnum.职业联动三角,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.暴风骤雨三角β型,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.狩猎时刻对地,
            MXLaohenEnum.庇佑
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀影锐击
        ], //唤醒技能
    },
    {
        "name": "幻想彼境",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.幻想彼境,
        "extraData": {
            "illust": LaohenIllust.印巴巴, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.元素瞄准,
            MXLaohenEnum.职业联动菱形,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.及时援助菱形β型,
            MXLaohenEnum.伤害赐福菱形β型,
            MXLaohenEnum.核心充能菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.反应增幅
        ], //唤醒技能
    },
    {
        "name": "庆典巡游",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.庆典巡游,
        "extraData": {
            "illust": LaohenIllust.和子君, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.摆脱困境,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.生机盎然方块β型,
            MXLaohenEnum.狩猎时刻对空,
            MXLaohenEnum.特殊减伤对空
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.协助强化
        ], //唤醒技能
    },
    {
        "name": "残照",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.残照,
        "extraData": {
            "illust": LaohenIllust.灼忘, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.炎能灌注,
            MXLaohenEnum.虽远必诛,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.生机盎然方块α型,
            MXLaohenEnum.坚实护盾
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.弱点标记
        ], //唤醒技能
    },
    {
        "name": "幕影重重",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.幕影重重,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.危险游戏,
            MXLaohenEnum.回收利用,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.昂扬斗志菱形β型,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.铁杵磨成针菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.强效缓解
        ], //唤醒技能
    },
    {
        "name": "天陷",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.天陷,
        "extraData": {
            "illust": LaohenIllust.波波, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.快步流星,
            MXLaohenEnum.深藏身与名,
            MXLaohenEnum.大敌当前,
            MXLaohenEnum.昂扬斗志方块α型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.坚实护盾,
            MXLaohenEnum.生生不息菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.炽热生命
        ], //唤醒技能
    },
    {
        "name": "同行",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.同行,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.格挡专攻,
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.原生特攻α型,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.庇佑
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.生命祝福
        ], //唤醒技能
    },
    {
        "name": "偷偷「摩摩」",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.偷偷摩摩,
        "extraData": {
            "illust": LaohenIllust.Juanmao, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.危险预警,
            MXLaohenEnum.治愈守备,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.失焦
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.自愈能量
        ], //唤醒技能
    },
    {
        "name": "棺中鸟",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.棺中鸟,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.治愈守备,
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.元素领袖蚀,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.暴风骤雨方块α型,
            MXLaohenEnum.大敌当前
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀力庇护
        ], //唤醒技能
    },
    {
        "name": "光阴间隙",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.光阴间隙,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.危险预警,
            MXLaohenEnum.以头抢地,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.坚定意志菱形α型,
            MXLaohenEnum.核心充能菱形α型,
            MXLaohenEnum.元素半衰期
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.创痕激发
        ], //唤醒技能
    },
    {
        "name": "角色扮演",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.角色扮演,
        "extraData": {
            "illust": LaohenIllust.木昆昆, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.距离把控,
            MXLaohenEnum.正义守护,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.针对打击三角
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.雷霆寒霜
        ], //唤醒技能
    },
    {
        "name": "逐光者",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.逐光者,
        "extraData": {
            "illust": LaohenIllust.和子君, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.抓准时机,
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.暴风骤雨三角α型,
            MXLaohenEnum.特殊减伤对空,
            MXLaohenEnum.及时援助菱形α型,
            MXLaohenEnum.坚定意志菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.成功掩护
        ], //唤醒技能
    },
    {
        "name": "朗朗乾坤",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.朗朗乾坤,
        "extraData": {
            "illust": LaohenIllust.跟头, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.渐入佳境,
            MXLaohenEnum.你相信光吗,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.大敌当前,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.特殊减伤对地
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.麻痹大意
        ], //唤醒技能
    },
    {
        "name": "因果历然",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.因果历然,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.抓准时机,
            MXLaohenEnum.复数共振,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.手执利兵三角,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.失焦,
            MXLaohenEnum.针对打击菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.受击反制
        ], //唤醒技能
    },
    {
        "name": "噩梦",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.噩梦,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.距离把控,
            MXLaohenEnum.金刚不坏,
            MXLaohenEnum.昂扬斗志方块β型,
            MXLaohenEnum.坚定意志菱形β型,
            MXLaohenEnum.落井下石,
            MXLaohenEnum.生生不息菱形,
            MXLaohenEnum.核心充能菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.屏障水
        ], //唤醒技能
    },
    {
        "name": "双重引力",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.双重引力,
        "extraData": {
            "illust": LaohenIllust.阿尼鸭Anya, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.正义守护,
            MXLaohenEnum.电磁风暴,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.机械特攻α型,
            MXLaohenEnum.原生特攻α型,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.坚定意志菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.压力反制
        ], //唤醒技能
    },
    {
        "name": "无罪之徒",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.无罪之徒,
        "extraData": {
            "illust": LaohenIllust.MOL, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.职业联动菱形,
            MXLaohenEnum.轻车熟路,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.星河奔腾菱形,
            MXLaohenEnum.落井下石,
            MXLaohenEnum.元素专攻菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.万象侵袭
        ], //唤醒技能
    },
    {
        "name": "向新世界去",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.向新世界去,
        "extraData": {
            "illust": LaohenIllust.乙配, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.格挡专攻,
            MXLaohenEnum.虽远必诛,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.自动瞄准系统方块β型,
            MXLaohenEnum.元素专攻方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.水域之力
        ], //唤醒技能
    },
    {
        "name": "底线大作战",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.底线大作战,
        "extraData": {
            "illust": LaohenIllust.木昆昆, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.格挡专攻,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.职业联动方块,
            MXLaohenEnum.原生特攻β型,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.自动瞄准系统方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.异核雷鸣
        ], //唤醒技能
    },
    {
        "name": "失途之日",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.失途之日,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.BonusTime,
            MXLaohenEnum.职业联动三角,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.暴风骤雨三角β型,
            MXLaohenEnum.铁杵磨成针三角,
            MXLaohenEnum.自动瞄准系统三角β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.风力加剧
        ], //唤醒技能
    },
    {
        "name": "谎言之下",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.谎言之下,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.护盾灌注,
            MXLaohenEnum.格挡专攻,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.利刃三角α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.召唤协调
        ], //唤醒技能
    },
    {
        "name": "血露薇·绝密",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.血露薇绝密,
        "extraData": {
            "illust": LaohenIllust.min, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.距离把控,
            MXLaohenEnum.格挡反击,
            MXLaohenEnum.对空特攻β型,
            MXLaohenEnum.对空特攻α型,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.自动瞄准系统方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.致命弱点
        ], //唤醒技能
    },
    {
        "name": "旧友无多",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.旧友无多,
        "extraData": {
            "illust": LaohenIllust.印巴巴, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.危险预警,
            MXLaohenEnum.混合打击,
            MXLaohenEnum.利刃三角β型,
            MXLaohenEnum.狩猎时刻对空,
            MXLaohenEnum.昂扬斗志三角β型,
            MXLaohenEnum.强攻对空,
            MXLaohenEnum.伤害赐福菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.雷霆万钧
        ], //唤醒技能
    },
    {
        "name": "夕阳挽歌",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.夕阳挽歌,
        "extraData": {
            "illust": LaohenIllust.竹墨繁漪, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.生命收割,
            MXLaohenEnum.落后就要挨打,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.对空特攻α型,
            MXLaohenEnum.利刃三角α型,
            MXLaohenEnum.自动瞄准系统三角α型,
            MXLaohenEnum.伤害赐福菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.力量喷涌
        ], //唤醒技能
    },
    {
        "name": "「空」",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.空,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.回光返照,
            MXLaohenEnum.弱点石化,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.昂扬斗志方块α型,
            MXLaohenEnum.狩猎时刻对地,
            MXLaohenEnum.强攻对地,
            MXLaohenEnum.铁杵磨成针三角
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.绝处逢生
        ], //唤醒技能
    },
    {
        "name": "晓梦迷花",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.晓梦迷花,
        "extraData": {
            "illust": LaohenIllust.YGeriAn, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.落后就要挨打,
            MXLaohenEnum.快步流星,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.原生特攻α型,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.坚定意志菱形α型,
            MXLaohenEnum.元素半衰期
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.奇核风动
        ], //唤醒技能
    },
    {
        "name": "瞳中困影",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.瞳中困影,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.复仇者之怒,
            MXLaohenEnum.元素逆转方块,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.落井下石
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.共振催化
        ], //唤醒技能
    },
    {
        "name": "潮湿前路",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.潮湿前路,
        "extraData": {
            "illust": LaohenIllust.当雨作金泽, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.主场优势,
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.星河奔腾方块,
            MXLaohenEnum.星河奔腾菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.曲流制敌
        ], //唤醒技能
    },
    {
        "name": "天狼",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.天狼,
        "extraData": {
            "illust": LaohenIllust.MOL, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.片叶不沾身,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.强攻对地,
            MXLaohenEnum.失焦,
            MXLaohenEnum.铁杵磨成针三角,
            MXLaohenEnum.乘胜追击
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.冰冻三尺
        ], //唤醒技能
    },
    {
        "name": "寂静昨日",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.寂静昨日,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.失控元素,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.对空特攻β型,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.坚定意志菱形β型,
            MXLaohenEnum.伤害赐福菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.水汽弥漫
        ], //唤醒技能
    },
    {
        "name": "馆中遗影",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.馆中遗影,
        "extraData": {
            "illust": LaohenIllust.Juanmao, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.能力催化,
            MXLaohenEnum.快步流星,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.昂扬斗志方块β型,
            MXLaohenEnum.落井下石,
            MXLaohenEnum.伤害赐福菱形β型,
            MXLaohenEnum.针对打击菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.影盾
        ], //唤醒技能
    },
    {
        "name": "于火光中「蛋」生",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.于火光中蛋生,
        "extraData": {
            "illust": LaohenIllust.Noir, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.主场优势,
            MXLaohenEnum.护盾灌注,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.元素半衰期,
            MXLaohenEnum.核心充能菱形α型,
            MXLaohenEnum.铁杵磨成针菱形,
            MXLaohenEnum.及时援助菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.战术强化
        ], //唤醒技能
    },
    {
        "name": "藏锋",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.藏锋,
        "extraData": {
            "illust": LaohenIllust.iii303, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.复仇者之怒,
            MXLaohenEnum.治愈加速,
            MXLaohenEnum.对空特攻α型,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.暴风骤雨三角α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀力渗透
        ], //唤醒技能
    },
    {
        "name": "暗巷漆影",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.暗巷漆影,
        "extraData": {
            "illust": LaohenIllust.Akai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.容光焕发,
            MXLaohenEnum.充能回复,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.利刃三角α型,
            MXLaohenEnum.手执利兵三角,
            MXLaohenEnum.暴风骤雨三角α型,
            MXLaohenEnum.乘胜追击
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.人多势众
        ], //唤醒技能
    },
    {
        "name": "恶土之花",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.恶土之花,
        "extraData": {
            "illust": LaohenIllust.和子君, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.回光返照,
            MXLaohenEnum.以头抢地,
            MXLaohenEnum.原生特攻α型,
            MXLaohenEnum.对空特攻α型,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.及时援助菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.物理专精
        ], //唤醒技能
    },
    {
        "name": "参商形影",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.参商形影,
        "extraData": {
            "illust": LaohenIllust.印巴巴, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.屏障效应,
            MXLaohenEnum.水利万物,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.生机盎然方块β型,
            MXLaohenEnum.伤害赐福菱形β型,
            MXLaohenEnum.及时援助菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.润物无声
        ], //唤醒技能
    },
    {
        "name": "千纪启明",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.千纪启明,
        "extraData": {
            "illust": LaohenIllust.鲛猫, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.治愈守备,
            MXLaohenEnum.元素逆转菱形,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.元素专攻方块α型,
            MXLaohenEnum.伤害赐福菱形α型,
            MXLaohenEnum.核心充能菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.唤物增威
        ], //唤醒技能
    },
    {
        "name": "如在镜中",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.如在镜中,
        "extraData": {
            "illust": LaohenIllust.和子君, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.能量缓释,
            MXLaohenEnum.元素逆转三角,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.强攻对空,
            MXLaohenEnum.元素专攻三角β型,
            MXLaohenEnum.特殊减伤对地,
            MXLaohenEnum.星河奔腾三角
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀力穿透
        ], //唤醒技能
    },
    {
        "name": "问卜天地",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.问卜天地,
        "extraData": {
            "illust": LaohenIllust.鲛猫, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.主场优势,
            MXLaohenEnum.轻车熟路,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.强攻对精英
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.元素效应
        ], //唤醒技能
    },
    {
        "name": "烟尘往事",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.烟尘往事,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.蚀力掌控,
            MXLaohenEnum.深藏身与名,
            MXLaohenEnum.原生特攻β型,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.强攻对地,
            MXLaohenEnum.核心充能菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.元素注能
        ], //唤醒技能
    },
    {
        "name": "雪轻日暖",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.雪轻日暖,
        "extraData": {
            "illust": LaohenIllust.Juanmao, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.主场优势,
            MXLaohenEnum.奉献,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.核心充能菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.主场扩大
        ], //唤醒技能
    },
    {
        "name": "最强召唤师",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.最强召唤师,
        "extraData": {
            "illust": LaohenIllust.Juanmao, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.能量缓释,
            MXLaohenEnum.回收利用,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.对空特攻β型,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.及时援助菱形β型,
            MXLaohenEnum.核心充能菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.冰霜共鸣
        ], //唤醒技能
    },
    {
        "name": "成长",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.成长,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.为友谊干杯,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.昂扬斗志三角β型,
            MXLaohenEnum.暴风骤雨三角β型,
            MXLaohenEnum.及时援助菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.护盾共鸣
        ], //唤醒技能
    },
    {
        "name": "一线之隔",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.一线之隔,
        "extraData": {
            "illust": LaohenIllust.木昆昆, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.主场优势,
            MXLaohenEnum.生命收割,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.机械特攻α型,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.手执利兵菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.坚硬外皮
        ], //唤醒技能
    },
    {
        "name": "火热手感",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.火热手感,
        "extraData": {
            "illust": LaohenIllust.iii303, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.黄金精神,
            MXLaohenEnum.虽远必诛,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.星河奔腾方块,
            MXLaohenEnum.元素专攻方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.疗愈力劲
        ], //唤醒技能
    },
    {
        "name": "最好吃的朋友",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.最好吃的朋友,
        "extraData": {
            "illust": LaohenIllust.墨秃, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.护盾赐福,
            MXLaohenEnum.奉献,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.及时援助菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.烹饪时刻
        ], //唤醒技能
    },
    {
        "name": "醒太平",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.醒太平,
        "extraData": {
            "illust": LaohenIllust.鲸谜, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.元素转化,
            MXLaohenEnum.金刚不坏,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.生机盎然方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.坚毅不倒
        ], //唤醒技能
    },
    {
        "name": "精准控分",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.精准控分,
        "extraData": {
            "illust": LaohenIllust.猫鱼, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.醉生梦死,
            MXLaohenEnum.落后就要挨打,
            MXLaohenEnum.元素半衰期,
            MXLaohenEnum.伤害赐福菱形β型,
            MXLaohenEnum.坚定意志菱形β型,
            MXLaohenEnum.坚实护盾
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.千锤百炼
        ], //唤醒技能
    },
    {
        "name": "海临人的好奇心",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.海临人的好奇心,
        "extraData": {
            "illust": LaohenIllust.太子池安, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.治愈加速,
            MXLaohenEnum.渐入佳境,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.特殊减伤对空,
            MXLaohenEnum.针对打击三角,
            MXLaohenEnum.强攻对地
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.隐匿其中
        ], //唤醒技能
    },
    {
        "name": "一枕酣甜",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.一枕酣甜,
        "extraData": {
            "illust": LaohenIllust.Akai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.侵蚀,
            MXLaohenEnum.元素瞄准,
            MXLaohenEnum.原生特攻β型,
            MXLaohenEnum.对空特攻β型,
            MXLaohenEnum.铁杵磨成针菱形,
            MXLaohenEnum.及时援助菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.束缚蚀力
        ], //唤醒技能
    },
    {
        "name": "「玄」学",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.玄学,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.摆脱困境,
            MXLaohenEnum.你相信光吗,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.化险为夷
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.生人勿近方块
        ], //唤醒技能
    },
    {
        "name": "调和清凉",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.调和清凉,
        "extraData": {
            "illust": LaohenIllust.夜少与狗饼干, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.回光返照,
            MXLaohenEnum.破釜沉舟,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.昂扬斗志方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.伤痕赐福
        ], //唤醒技能
    },
    {
        "name": "泡影",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.泡影,
        "extraData": {
            "illust": LaohenIllust.太子池安, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.潮汐助威,
            MXLaohenEnum.自动防御系统,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.大敌当前,
            MXLaohenEnum.饱和式救援
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.水泽破阵
        ], //唤醒技能
    },
    {
        "name": "流星坠处",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.流星坠处,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.黄金精神,
            MXLaohenEnum.职业联动方块,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.昂扬斗志方块β型,
            MXLaohenEnum.自动瞄准系统方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.核心重压
        ], //唤醒技能
    },
    {
        "name": "繁花蜃影",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.繁花蜃影,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.摆脱困境,
            MXLaohenEnum.破釜沉舟,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.自动瞄准系统方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀之激励
        ], //唤醒技能
    },
    {
        "name": "秩序囚笼",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.秩序囚笼,
        "extraData": {
            "illust": LaohenIllust.阿尼鸭Anya, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.炎能灌注,
            MXLaohenEnum.沉重打击,
            MXLaohenEnum.坚定意志菱形α型,
            MXLaohenEnum.核心充能菱形α型,
            MXLaohenEnum.落井下石,
            MXLaohenEnum.伤害赐福菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.针对削弱
        ], //唤醒技能
    },
    {
        "name": "拂晓",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.拂晓,
        "extraData": {
            "illust": LaohenIllust.灼忘, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.容光焕发,
            MXLaohenEnum.以头抢地,
            MXLaohenEnum.手执利兵菱形,
            MXLaohenEnum.昂扬斗志菱形α型,
            MXLaohenEnum.生生不息菱形,
            MXLaohenEnum.坚定意志菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.生人勿近菱形
        ], //唤醒技能
    },
    {
        "name": "你好，维瑟尔",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.你好维瑟尔,
        "extraData": {
            "illust": LaohenIllust.Akai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.正义守护,
            MXLaohenEnum.自动防御系统,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.昂扬斗志方块β型,
            MXLaohenEnum.生机盎然方块β型,
            MXLaohenEnum.大敌当前
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.冻结延长
        ], //唤醒技能
    },
    {
        "name": "奢梦",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.奢梦,
        "extraData": {
            "illust": LaohenIllust.竹墨繁漪, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.职业联动方块,
            MXLaohenEnum.元素逆转方块,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.元素专攻菱形α型,
            MXLaohenEnum.暴风骤雨菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀灵激励
        ], //唤醒技能
    },
    {
        "name": "飞驰海岸线",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.飞驰海岸线,
        "extraData": {
            "illust": LaohenIllust.东河, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.深藏身与名,
            MXLaohenEnum.生命收割,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.生生不息菱形,
            MXLaohenEnum.手执利兵菱形,
            MXLaohenEnum.昂扬斗志菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.技决重威
        ], //唤醒技能
    },
    {
        "name": "圆锥曲线",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.圆锥曲线,
        "extraData": {
            "illust": LaohenIllust.熟了的鱼, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.混合打击,
            MXLaohenEnum.为友谊干杯,
            MXLaohenEnum.核心充能三角α型,
            MXLaohenEnum.昂扬斗志三角α型,
            MXLaohenEnum.暴风骤雨三角α型,
            MXLaohenEnum.特殊减伤对地
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.陷阵勇士
        ], //唤醒技能
    },
    {
        "name": "意外邂逅",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.意外邂逅,
        "extraData": {
            "illust": LaohenIllust.Noir, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.能力催化,
            MXLaohenEnum.生命收割,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.针对打击菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.主动激励
        ], //唤醒技能
    },
    {
        "name": "截稿日",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.截稿日,
        "extraData": {
            "illust": LaohenIllust.Noir, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.片叶不沾身,
            MXLaohenEnum.狩猎时刻对精英,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.自动瞄准系统三角β型,
            MXLaohenEnum.强攻对空
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.自强不息
        ], //唤醒技能
    },
    {
        "name": "增肌训练",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.增肌训练,
        "extraData": {
            "illust": LaohenIllust.熟了的鱼, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.弱点石化,
            MXLaohenEnum.狩猎时刻对精英,
            MXLaohenEnum.乘人之危对空,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.利刃三角β型,
            MXLaohenEnum.强攻对空
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.狙击
        ], //唤醒技能
    },
    {
        "name": "化为千鹤",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.化为千鹤,
        "extraData": {
            "illust": LaohenIllust.kan, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.元素转化,
            MXLaohenEnum.破釜沉舟,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.自动瞄准系统方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.烈焰暴击
        ], //唤醒技能
    },
    {
        "name": "代号「百草」",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.代号百草,
        "extraData": {
            "illust": LaohenIllust.夜少与狗饼干, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.抓准时机,
            MXLaohenEnum.技多不压身,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.生生不息菱形,
            MXLaohenEnum.昂扬斗志菱形α型,
            MXLaohenEnum.伤害赐福菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.屏障炎
        ], //唤醒技能
    },
    {
        "name": "记录一夏",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.记录一夏,
        "extraData": {
            "illust": LaohenIllust.墨秃, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.技多不压身,
            MXLaohenEnum.护盾灌注,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.落井下石,
            MXLaohenEnum.伤害赐福菱形β型,
            MXLaohenEnum.原生特攻β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.雷寒同调
        ], //唤醒技能
    },
    {
        "name": "速速降温",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.速速降温,
        "extraData": {
            "illust": LaohenIllust.laxy, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.快步流星,
            MXLaohenEnum.沉重打击,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.坚定意志菱形α型,
            MXLaohenEnum.元素专攻菱形α型,
            MXLaohenEnum.元素半衰期
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.寒霜雷涌
        ], //唤醒技能
    },
    {
        "name": "假日余暇",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.假日余暇,
        "extraData": {
            "illust": LaohenIllust.熏肉, //画师,
            "resourse": LaohenResourse.主线
        },
        "mxSkill": [
            MXLaohenEnum.危险游戏,
            MXLaohenEnum.容光焕发,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.坚实护盾,
            MXLaohenEnum.生生不息菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.统筹备战
        ], //唤醒技能
    },
    {
        "name": "「CAT vs. DOG」",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.CATvsDOG,
        "extraData": {
            "illust": LaohenIllust.鲛猫, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.炎能灌注,
            MXLaohenEnum.元素逆转方块,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.元素专攻方块α型,
            MXLaohenEnum.核心充能方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.炽焰增威
        ], //唤醒技能
    },
    {
        "name": "繁星记忆",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.繁星记忆,
        "extraData": {
            "illust": LaohenIllust.猫鱼, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.生命颂歌,
            MXLaohenEnum.格挡反击,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.生机盎然方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.反客为主
        ], //唤醒技能
    },
    {
        "name": "流光竞夜",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.流光竞夜,
        "extraData": {
            "illust": LaohenIllust.zz银咋, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.虽远必诛,
            MXLaohenEnum.元素残留,
            MXLaohenEnum.原生特攻β型,
            MXLaohenEnum.自动瞄准系统方块β型,
            MXLaohenEnum.昂扬斗志菱形β型,
            MXLaohenEnum.手执利兵菱形
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.屏障赋能物理
        ], //唤醒技能
    },
    {
        "name": "不期而遇",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.不期而遇,
        "extraData": {
            "illust": LaohenIllust.zz银咋, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.失控元素,
            MXLaohenEnum.福被众生,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.元素半衰期,
            MXLaohenEnum.铁杵磨成针菱形,
            MXLaohenEnum.落井下石
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.退敌之势
        ], //唤醒技能
    },
    {
        "name": "「家」",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.家,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.复仇者之怒,
            MXLaohenEnum.片叶不沾身,
            MXLaohenEnum.狩猎时刻对地,
            MXLaohenEnum.铁杵磨成针三角,
            MXLaohenEnum.利刃三角α型,
            MXLaohenEnum.乘胜追击
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.生人勿近三角
        ], //唤醒技能
    },
    {
        "name": "交换惊喜",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.交换惊喜,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.正义守护,
            MXLaohenEnum.黄金精神,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.昂扬斗志方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.破阵乾坤
        ], //唤醒技能
    },
    {
        "name": "团圆",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.团圆,
        "extraData": {
            "illust": LaohenIllust.BITE, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.护盾灌注,
            MXLaohenEnum.技多不压身,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.坚定意志菱形β型,
            MXLaohenEnum.昂扬斗志菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.百折不挠菱形
        ], //唤醒技能
    },
    {
        "name": "雨中愿",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.雨中愿,
        "extraData": {
            "illust": LaohenIllust.夜少与狗饼干, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.元素残留,
            MXLaohenEnum.职业联动菱形,
            MXLaohenEnum.昂扬斗志菱形β型,
            MXLaohenEnum.坚定意志菱形β型,
            MXLaohenEnum.核心充能菱形β型,
            MXLaohenEnum.坚实护盾
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.左膀右臂菱形
        ], //唤醒技能
    },
    {
        "name": "秘密音律",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.秘密音律,
        "extraData": {
            "illust": LaohenIllust.太子池安, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.能量缓释,
            MXLaohenEnum.职业联动三角,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.自动瞄准系统三角β型,
            MXLaohenEnum.狩猎时刻对空
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.连击精通
        ], //唤醒技能
    },
    {
        "name": "白夜",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.白夜,
        "extraData": {
            "illust": LaohenIllust.印巴巴, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.BonusTime,
            MXLaohenEnum.为友谊干杯,
            MXLaohenEnum.机械特攻β型,
            MXLaohenEnum.狩猎时刻对空,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.利刃三角β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.祝福区域
        ], //唤醒技能
    },
    {
        "name": "打成一片",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.打成一片,
        "extraData": {
            "illust": LaohenIllust.跟头, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.格挡专攻,
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.核心充能方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.量化抵御
        ], //唤醒技能
    },
    {
        "name": "世事难料",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.世事难料,
        "extraData": {
            "illust": LaohenIllust.熟了的鱼, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.黄金精神,
            MXLaohenEnum.职业联动方块,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.生机盎然方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.百折不挠方块
        ], //唤醒技能
    },
    {
        "name": "街市清晨",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.街市清晨,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.回光返照,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.昂扬斗志方块α型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.庇佑
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.连击赐福
        ], //唤醒技能
    },
    {
        "name": "樱华如梦",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.樱华如梦,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.生命颂歌,
            MXLaohenEnum.原生特攻β型,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.生机盎然方块α型,
            MXLaohenEnum.化险为夷
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.战斗反射
        ], //唤醒技能
    },
    {
        "name": "于人海中",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.于人海中,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.危险游戏,
            MXLaohenEnum.坚定意志菱形α型,
            MXLaohenEnum.昂扬斗志菱形β型,
            MXLaohenEnum.手执利兵菱形,
            MXLaohenEnum.坚实护盾
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.信号干扰菱形
        ], //唤醒技能
    },
    {
        "name": "书卷晨曦",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.书卷晨曦,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.特殊减伤对空,
            MXLaohenEnum.利刃三角α型,
            MXLaohenEnum.核心充能三角α型,
            MXLaohenEnum.庇佑
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.出淤泥而全染
        ], //唤醒技能
    },
    {
        "name": "科技光辉",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.科技光辉,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.治愈守备,
            MXLaohenEnum.大敌当前,
            MXLaohenEnum.自动瞄准系统三角α型,
            MXLaohenEnum.特殊减伤对地,
            MXLaohenEnum.失焦
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.坚毅不屈
        ], //唤醒技能
    },
    {
        "name": "早日康复",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.早日康复,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.醉生梦死,
            MXLaohenEnum.机械特攻α型,
            MXLaohenEnum.暴风骤雨三角β型,
            MXLaohenEnum.特殊减伤对空,
            MXLaohenEnum.核心充能三角α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.因祸得福
        ], //唤醒技能
    },
    {
        "name": "旧城夜幕",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.旧城夜幕,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.充能回复,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.生生不息菱形,
            MXLaohenEnum.针对打击菱形,
            MXLaohenEnum.坚定意志菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.荆棘之志
        ], //唤醒技能
    },
    {
        "name": "万家灯火",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.万家灯火,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.自动防御系统,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.昂扬斗志方块β型,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.大敌当前
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蛮力打击
        ], //唤醒技能
    },
    {
        "name": "混乱烟尘",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.混乱烟尘,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.片叶不沾身,
            MXLaohenEnum.对空特攻β型,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.强攻对空,
            MXLaohenEnum.自动瞄准系统三角α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.集中火力
        ], //唤醒技能
    },
    {
        "name": "旖旎夜色",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.旖旎夜色,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.能力催化,
            MXLaohenEnum.乘人之危对精英,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.昂扬斗志菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.状态绝佳
        ], //唤醒技能
    },
    {
        "name": "城市嚣音",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.城市嚣音,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.混合打击,
            MXLaohenEnum.强攻对地,
            MXLaohenEnum.自动瞄准系统三角α型,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.狩猎时刻对地
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.单点突破
        ], //唤醒技能
    },
    {
        "name": "千本之门",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.千本之门,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.轻车熟路,
            MXLaohenEnum.昂扬斗志方块α型,
            MXLaohenEnum.手执利兵方块,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.伤害赐福菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.无畏者
        ], //唤醒技能
    },
    {
        "name": "通道",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.通道,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.BonusTime,
            MXLaohenEnum.饱和式救援,
            MXLaohenEnum.铁杵磨成针三角,
            MXLaohenEnum.手执利兵三角,
            MXLaohenEnum.生机盎然方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.熊熊燃烧
        ], //唤醒技能
    },
    {
        "name": "落日残迹",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.落日残迹,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.沉重打击,
            MXLaohenEnum.势如破竹对地,
            MXLaohenEnum.铁杵磨成针菱形,
            MXLaohenEnum.元素半衰期,
            MXLaohenEnum.及时援助菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.元素炼炉
        ], //唤醒技能
    },
    {
        "name": "甜蜜心绪",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.甜蜜心绪,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.福被众生,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.核心充能菱形α型,
            MXLaohenEnum.昂扬斗志菱形β型,
            MXLaohenEnum.及时援助菱形β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.等待时机
        ], //唤醒技能
    },
    {
        "name": "大隐于市",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.大隐于市,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.生机盎然方块α型,
            MXLaohenEnum.昂扬斗志三角α型,
            MXLaohenEnum.乘胜追击
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.冻结精通
        ], //唤醒技能
    },
    {
        "name": "生死在握",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.生死在握,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.侵蚀,
            MXLaohenEnum.原生特攻α型,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.核心充能方块β型,
            MXLaohenEnum.核心充能菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.蚀入骨髓
        ], //唤醒技能
    },
    {
        "name": "旧巷",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.旧巷,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.电磁风暴,
            MXLaohenEnum.针对打击菱形,
            MXLaohenEnum.坚实护盾,
            MXLaohenEnum.核心充能菱形β型,
            MXLaohenEnum.核心充能菱形α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.福利发放
        ], //唤醒技能
    },
    {
        "name": "归档",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.归档,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.机械特攻α型,
            MXLaohenEnum.庇佑,
            MXLaohenEnum.核心充能三角α型,
            MXLaohenEnum.针对打击三角
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.信号干扰三角
        ], //唤醒技能
    },
    {
        "name": "向阳",
        "rarity": LaohenRarity.r, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.向阳,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.寻迹潜航
        },
        "mxSkill": [
            MXLaohenEnum.金刚不坏,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.势如破竹对精英,
            MXLaohenEnum.强攻对精英,
            MXLaohenEnum.核心充能方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.绝地反击
        ], //唤醒技能
    },
    {
        "name": "魇境边界",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.魇境边界,
        "extraData": {
            "illust": LaohenIllust.iii303, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.片叶不沾身,
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.元素领袖雷,
            MXLaohenEnum.元素专攻三角α型,
            MXLaohenEnum.利刃三角α型,
            MXLaohenEnum.强攻对地
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.力量平衡
        ], //唤醒技能
    },
    {
        "name": "曙色的地平线",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.曙色的地平线,
        "extraData": {
            "illust": LaohenIllust.东河, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.虽远必诛,
            MXLaohenEnum.渐入佳境,
            MXLaohenEnum.强攻对空,
            MXLaohenEnum.失焦,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.单打独斗对首领,
            MXLaohenEnum.生生不息方块
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.轰能激发
        ], //唤醒技能
    },
    {
        "name": "怯者的墓志铭",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.怯者的墓志铭,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.距离把控,
            MXLaohenEnum.职业联动方块,
            MXLaohenEnum.无处可藏,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.生生不息方块,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.强攻对地方块
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.唤物充能
        ], //唤醒技能
    },
    {
        "name": "未晞",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.未晞,
        "extraData": {
            "illust": LaohenIllust.乙配, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.奉献,
            MXLaohenEnum.单打独斗对首领,
            MXLaohenEnum.人形特攻α型,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.手执利兵方块
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.物调联破
        ], //唤醒技能
    },
    {
        "name": "千灯无间",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.终端,
        "id": LaohenNameEnum.千灯无间,
        "extraData": {
            "illust": LaohenIllust.乔瑟夫乔尊尊, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.能量缓释,
            MXLaohenEnum.充能回复,
            MXLaohenEnum.核心充能菱形β型,
            MXLaohenEnum.暴风骤雨菱形β型,
            MXLaohenEnum.元素领袖蚀,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.异核过载
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.伤疗双效
        ], //唤醒技能
    },
    {
        "name": "浊雨",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.浊雨,
        "extraData": {
            "illust": LaohenIllust.YGeriAn, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.以头抢地,
            MXLaohenEnum.破釜沉舟,
            MXLaohenEnum.及时援助菱形β型,
            MXLaohenEnum.自动瞄准系统方块α型,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.异种特攻β型,
            MXLaohenEnum.元素专攻方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.终转攻轮
        ], //唤醒技能
    },
    {
        "name": "野风",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.野风,
        "extraData": {
            "illust": LaohenIllust.MOL, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.元素逆转方块,
            MXLaohenEnum.破釜沉舟,
            MXLaohenEnum.一线生机,
            MXLaohenEnum.异种特攻α型,
            MXLaohenEnum.暴风骤雨方块α型,
            MXLaohenEnum.元素专攻方块α型,
            MXLaohenEnum.化险为夷
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.攻守兼备
        ], //唤醒技能
    },
    {
        "name": "度晴波",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.度晴波,
        "extraData": {
            "illust": LaohenIllust.YGeriAn, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.回收利用,
            MXLaohenEnum.黄金精神,
            MXLaohenEnum.生机盎然方块α型,
            MXLaohenEnum.利刃三角β型,
            MXLaohenEnum.单打独斗对首领,
            MXLaohenEnum.核心充能三角β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.炙地之力
        ], //唤醒技能
    },
    {
        "name": "「默」",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.专精,
        "id": LaohenNameEnum.默,
        "extraData": {
            "illust": LaohenIllust.MOL, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.职业联动三角,
            MXLaohenEnum.奉献,
            MXLaohenEnum.元素领袖物理,
            MXLaohenEnum.利刃三角β型,
            MXLaohenEnum.单打独斗对首领,
            MXLaohenEnum.强攻对空,
            MXLaohenEnum.核心充能三角β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.利刃连击
        ], //唤醒技能
    },
    {
        "name": "暗涌轮廓",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.暗涌轮廓,
        "extraData": {
            "illust": LaohenIllust.AurogonShanghai, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.渐入佳境,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.失焦,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.昂扬斗志三角β型,
            MXLaohenEnum.手执利兵三角
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.异能再生
        ], //唤醒技能
    },
    {
        "name": "Feat",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.Feat,
        "extraData": {
            "illust": LaohenIllust.Noir, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.复数共振,
            MXLaohenEnum.屏障效应,
            MXLaohenEnum.元素专攻方块β型,
            MXLaohenEnum.星河奔腾三角,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.特殊减伤对首领,
            MXLaohenEnum.大敌当前
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.远击增幅
        ], //唤醒技能
    },
    {
        "name": "神·迹",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.攻击,
        "id": LaohenNameEnum.神迹,
        "extraData": {
            "illust": LaohenIllust.竹墨繁漪, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.擒贼先擒王,
            MXLaohenEnum.精神振奋,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.蓄势待发,
            MXLaohenEnum.元素专攻三角β型,
            MXLaohenEnum.庇佑,
            MXLaohenEnum.失焦
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.屏碎涟漪
        ], //唤醒技能
    },
    {
        "name": "TARGET ERROR",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.防御,
        "id": LaohenNameEnum.TARGETERROR,
        "extraData": {
            "illust": LaohenIllust.laxy, //画师,
            "resourse": LaohenResourse.叶脉联结计划
        },
        "mxSkill": [
            MXLaohenEnum.潮汐助威,
            MXLaohenEnum.屏障效应,
            MXLaohenEnum.元素领袖水,
            MXLaohenEnum.核心充能三角β型,
            MXLaohenEnum.元素专攻三角β型,
            MXLaohenEnum.特殊减伤对空
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.水蕴赐福
        ], //唤醒技能
    },
    {
        "name": "须臾浮生",
        "rarity": LaohenRarity.ssr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.须臾浮生,
        "extraData": {
            "illust": LaohenIllust.当雨作金泽, //画师,
            "resourse": LaohenResourse.定向潜航
        },
        "mxSkill": [
            MXLaohenEnum.大力出奇迹,
            MXLaohenEnum.距离把控,
            MXLaohenEnum.异核过载,
            MXLaohenEnum.针锋相对对首领,
            MXLaohenEnum.人形特攻β型,
            MXLaohenEnum.势如破竹对空,
            MXLaohenEnum.元素专攻方块β型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.风影追击
        ], //唤醒技能
    }
]

export { allLaohenSkill, allLaohen }