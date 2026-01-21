import AllCharHelper from '../char/allCharHelper.ts';
import { speSkillCon } from './SkillCon.ts'
import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { allLaohenSkill } from './laohenConsts.ts'
/**
 * 角色属性名称
 */
const charAttr = {
    yan: "炎",
    shui: "水",
    lei: "雷",
    shuang: "霜",
    feng: "风",
    shi: "蚀",
    wuli: "物理"
}

const speL7Skill = (skillEnum: number) => {
    const skillName = allLaohenSkill[skillEnum].name
    return [
        "若在场且拥有刻印技能【",
        speSkillCon(skillName, SkillColorEnum.bing, -1, skillEnum),
        "】时，场上同调者刻印攻击提高25%",
        speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries)
    ]
}

/**
 * 角色队长潜能，部分特殊等级的特殊技能描述（L4：职业；L7：属性；L9：激励）
 */
const charPotential = {
    job: {
        铁御: [
            "作为队长时，自身每次回复或消耗格挡值，场上同调者额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，持续30秒"
        ],
        轻卫: [
            "作为队长时，格挡能力的激活状态变化时场上同调者额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，持续60秒"
        ],
        尖锋: [
            "作为队长时，自身对首领或精英目标造成伤害时，场上同调者额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，持续30秒"
        ],
        游徒: [
            "作为队长时，自身连击发生后，场上同调者额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries)
        ],
        筑术师: [
            "作为队长时，自身每次使用主动技能，场上同调者额外伤害提高20%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，最多叠加3次，持续30秒"
        ],
        护佑者: [
            "作为队长时，自身每次治疗使受治疗目标造成的额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，持续30秒"
        ],
        战术家: [
            "作为队长时，自身施放负面状态型或友方增益型技能后，场上同调者额外伤害提高60%",
            speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
            "，持续30秒"
        ]
    },
    attr: {
        yan: [
            "作为队长且在场时：炎元素同调者忽视目标基础减伤10%",
            speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
            "，场上有元素反应触发时，对全场敌人施加40%",
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
            speSkillCon("[元素反应触发增伤]", SkillColorEnum.normal, ToastSkillEnum.元素反应触发增伤),
            "，持续30秒"
        ],
        shui: [
            "作为队长且在场时：水元素同调者忽视目标基础减伤10%",
            speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
            "，场上有元素反应触发时，对全场敌人施加40%",
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
            speSkillCon("[元素反应触发增伤]", SkillColorEnum.normal, ToastSkillEnum.元素反应触发增伤),
            "，持续30秒"
        ],
        lei: [
            "作为队长且在场时：雷元素同调者忽视目标基础减伤10%",
            speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
            "，场上有元素反应触发时，对全场敌人施加40%",
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
            speSkillCon("[元素反应触发增伤]", SkillColorEnum.normal, ToastSkillEnum.元素反应触发增伤),
            "，持续30秒"
        ],
        shuang: [
            "作为队长且在场时：霜元素同调者忽视目标基础减伤10%",
            speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
            "，场上有元素反应触发时，对全场敌人施加40%",
            speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
            speSkillCon("[元素反应触发增伤]", SkillColorEnum.normal, ToastSkillEnum.元素反应触发增伤),
            "，持续30秒"
        ],
        feng: [
            "作为队长且在场时：场上同调者刻印攻击提高25%",
            speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries)
        ],
        shi: ["作为队长且在场时：场上每有一个蚀元素同调者蚀爆伤害提高25%，最多提高50%"],
        wuli: [
            "作为队长时，自身及召唤物攻击目标有35%概率使目标物理抗性降低100%",
            speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
            "，且目标身上的物理抗性降低效果最多为100%，持续15秒"
        ]
    },
    jl: [
        "作为队长时，场上同调者额外伤害提高50%",
        speSkillCon("(增伤乘区·额外伤害)", SkillColorEnum.injuries),
        "，且在计算",
        speSkillCon("[激励]", SkillColorEnum.normal, ToastSkillEnum.激励),
        "需求的人数时自身可视为2人"
    ],
    speL7: {
        skillCon: {
            言雀:speL7Skill(MXLaohenEnum.高压雷击),
            言御:speL7Skill(MXLaohenEnum.刺骨寒意),
        }//特殊角色对应的L7潜能等级，存在额外的潜能效果
    }
}

/**
 * 所有角色简介
 */
const allChar = {
    "莫红袖": AllCharHelper.莫红袖.desc,
    "禺期": AllCharHelper.禺期.desc,
    "田偌": AllCharHelper.田偌.desc,
    "焰响": AllCharHelper.焰响.desc,
    "林": AllCharHelper.林.desc,
    "温留": AllCharHelper.温留.desc,
    "云无月": AllCharHelper.云无月.desc,
    "乐无异": AllCharHelper.乐无异.desc,
    "修": AllCharHelper.修.desc,
    "唐路遥": AllCharHelper.唐路遥.desc,
    "豹富": AllCharHelper.豹富.desc,
    "尤尼": AllCharHelper.尤尼.desc,
    "昊苍": AllCharHelper.昊苍.desc,
    "织雪": AllCharHelper.织雪.desc,
    "百里屠苏": AllCharHelper.百里屠苏.desc,
    "米达斯": AllCharHelper.米达斯.desc,
    "十手卫": AllCharHelper.十手卫.desc,
    "明月尘": AllCharHelper.明月尘.desc,
    "景": AllCharHelper.景.desc,
    "耶芙娜": AllCharHelper.耶芙娜.desc,
    "无咎": AllCharHelper.无咎.desc,
    "比戈尼娅": AllCharHelper.比戈尼娅.desc,
    "白鸟梓": AllCharHelper.白鸟梓.desc,
    "霍冉": AllCharHelper.霍冉.desc,
    "马尔斯": AllCharHelper.马尔斯.desc,
    "Sweeper-EX": AllCharHelper.SweeperEX.desc,
    "姜宁": AllCharHelper.姜宁.desc,
    "玄戈": AllCharHelper.玄戈.desc,
    "茜茜": AllCharHelper.茜茜.desc,
    "鸢": AllCharHelper.鸢.desc,
    "司旸": AllCharHelper.司旸.desc,
    "崔远之": AllCharHelper.崔远之.desc,
    "红玉": AllCharHelper.红玉.desc,
    "凤无梦": AllCharHelper.凤无梦.desc,
    "吉娜": AllCharHelper.吉娜.desc,
    "司危": AllCharHelper.司危.desc,
    "雪长夏": AllCharHelper.雪长夏.desc,
    "狄砚": AllCharHelper.狄砚.desc,
    "艾摩诃": AllCharHelper.艾摩诃.desc,
    "卯绒绒": AllCharHelper.卯绒绒.desc,
    "旒珠": AllCharHelper.旒珠.desc,
    "龙和": AllCharHelper.龙和.desc,
    "余音": AllCharHelper.余音.desc,
    "瞳": AllCharHelper.瞳.desc,
    "缇诗": AllCharHelper.缇诗.desc,
    "风晴雪": AllCharHelper.风晴雪.desc,
    "罗咤": AllCharHelper.罗咤.desc,
    "卡洛琳": AllCharHelper.卡洛琳.desc,
    "莉缇亚": AllCharHelper.莉缇亚.desc,
    "尚非乐": AllCharHelper.尚非乐.desc,
    "刘兄": AllCharHelper.刘兄.desc,
    "龙晴": AllCharHelper.龙晴.desc,
    "谛卡": AllCharHelper.谛卡.desc,
    "珑": AllCharHelper.珑.desc,
    "言御": AllCharHelper.言御.desc,
    "紫都": AllCharHelper.紫都.desc,
    "芙蕖": AllCharHelper.芙蕖.desc,
    "苏筱": AllCharHelper.苏筱.desc,
    "阳铃": AllCharHelper.阳铃.desc,
    "长谣": AllCharHelper.长谣.desc,
    "元桃桃": AllCharHelper.元桃桃.desc,
    "红珠小姐": AllCharHelper.红珠小姐.desc,
    "提提亚": AllCharHelper.提提亚.desc,
    "拉波": AllCharHelper.拉波.desc,
    "伊琅相思": AllCharHelper.伊琅相思.desc,
    "北洛": AllCharHelper.北洛.desc,
    "岑缨": AllCharHelper.岑缨.desc,
    "逸虚": AllCharHelper.逸虚.desc,
    "言雀": AllCharHelper.言雀.desc,
    "晴雪": AllCharHelper.晴雪.desc,
    "瓦卡莎": AllCharHelper.瓦卡莎.desc,
    "襄铃": AllCharHelper.襄铃.desc,
    "阿棘": AllCharHelper.阿棘.desc,
    "赫九逸": AllCharHelper.赫九逸.desc,
    "岚岚": AllCharHelper.岚岚.desc,
    "老板": AllCharHelper.老板.desc
}

/**
 * 所有角色战斗技能
 */
const allCharSkill = {
    "莫红袖": AllCharHelper.莫红袖.skill,
    "禺期": AllCharHelper.禺期.skill,
    "田偌": AllCharHelper.田偌.skill,
    "焰响": AllCharHelper.焰响.skill,
    "林": AllCharHelper.林.skill,
    "温留": AllCharHelper.温留.skill,
    "云无月": AllCharHelper.云无月.skill,
    "乐无异": AllCharHelper.乐无异.skill,
    "修": AllCharHelper.修.skill,
    "唐路遥": AllCharHelper.唐路遥.skill,
    "豹富": AllCharHelper.豹富.skill,
    "尤尼": AllCharHelper.尤尼.skill,
    "昊苍": AllCharHelper.昊苍.skill,
    "织雪": AllCharHelper.织雪.skill,
    "百里屠苏": AllCharHelper.百里屠苏.skill,
    "米达斯": AllCharHelper.米达斯.skill,
    "十手卫": AllCharHelper.十手卫.skill,
    "明月尘": AllCharHelper.明月尘.skill,
    "景": AllCharHelper.景.skill,
    "耶芙娜": AllCharHelper.耶芙娜.skill,
    "无咎": AllCharHelper.无咎.skill,
    "比戈尼娅": AllCharHelper.比戈尼娅.skill,
    "白鸟梓": AllCharHelper.白鸟梓.skill,
    "霍冉": AllCharHelper.霍冉.skill,
    "马尔斯": AllCharHelper.马尔斯.skill,
    "Sweeper-EX": AllCharHelper.SweeperEX.skill,
    "姜宁": AllCharHelper.姜宁.skill,
    "玄戈": AllCharHelper.玄戈.skill,
    "茜茜": AllCharHelper.茜茜.skill,
    "鸢": AllCharHelper.鸢.skill,
    "司旸": AllCharHelper.司旸.skill,
    "崔远之": AllCharHelper.崔远之.skill,
    "红玉": AllCharHelper.红玉.skill,
    "凤无梦": AllCharHelper.凤无梦.skill,
    "吉娜": AllCharHelper.吉娜.skill,
    "司危": AllCharHelper.司危.skill,
    "雪长夏": AllCharHelper.雪长夏.skill,
    "狄砚": AllCharHelper.狄砚.skill,
    "艾摩诃": AllCharHelper.艾摩诃.skill,
    "余音": AllCharHelper.余音.skill,
    "卯绒绒": AllCharHelper.卯绒绒.skill,
    "旒珠": AllCharHelper.旒珠.skill,
    "龙和": AllCharHelper.龙和.skill,
    "瞳": AllCharHelper.瞳.skill,
    "缇诗": AllCharHelper.缇诗.skill,
    "风晴雪": AllCharHelper.风晴雪.skill,
    "罗咤": AllCharHelper.罗咤.skill,
    "卡洛琳": AllCharHelper.卡洛琳.skill,
    "莉缇亚": AllCharHelper.莉缇亚.skill,
    "尚非乐": AllCharHelper.尚非乐.skill,
    "刘兄": AllCharHelper.刘兄.skill,
    "龙晴": AllCharHelper.龙晴.skill,
    "谛卡": AllCharHelper.谛卡.skill,
    "珑": AllCharHelper.珑.skill,
    "言御": AllCharHelper.言御.skill,
    "紫都": AllCharHelper.紫都.skill,
    "芙蕖": AllCharHelper.芙蕖.skill,
    "苏筱": AllCharHelper.苏筱.skill,
    "阳铃": AllCharHelper.阳铃.skill,
    "元桃桃": AllCharHelper.元桃桃.skill,
    "长谣": AllCharHelper.长谣.skill,
    "红珠小姐": AllCharHelper.红珠小姐.skill,
    "提提亚": AllCharHelper.提提亚.skill,
    "拉波": AllCharHelper.拉波.skill,
    "伊琅相思": AllCharHelper.伊琅相思.skill,
    "北洛": AllCharHelper.北洛.skill,
    "岑缨": AllCharHelper.岑缨.skill,
    "逸虚": AllCharHelper.逸虚.skill,
    "言雀": AllCharHelper.言雀.skill,
    "晴雪": AllCharHelper.晴雪.skill,
    "瓦卡莎": AllCharHelper.瓦卡莎.skill,
    "襄铃": AllCharHelper.襄铃.skill,
    "阿棘": AllCharHelper.阿棘.skill,
    "赫九逸": AllCharHelper.赫九逸.skill,
    "岚岚": AllCharHelper.岚岚.skill,
    "老板": AllCharHelper.老板.skill
}

/**
 * 所有角色茶憩成就等信息
 */
const allCharTea = {
    "莫红袖": AllCharHelper.莫红袖.tea,
    "禺期": AllCharHelper.禺期.tea,
    "田偌": AllCharHelper.田偌.tea,
    "焰响": AllCharHelper.焰响.tea,
    "林": AllCharHelper.林.tea,
    "温留": AllCharHelper.温留.tea,
    "云无月": AllCharHelper.云无月.tea,
    "乐无异": AllCharHelper.乐无异.tea,
    "修": AllCharHelper.修.tea,
    "唐路遥": AllCharHelper.唐路遥.tea,
    "豹富": AllCharHelper.豹富.tea,
    "尤尼": AllCharHelper.尤尼.tea,
    "昊苍": AllCharHelper.昊苍.tea,
    "织雪": AllCharHelper.织雪.tea,
    "百里屠苏": AllCharHelper.百里屠苏.tea,
    "米达斯": AllCharHelper.米达斯.tea,
    "十手卫": AllCharHelper.十手卫.tea,
    "明月尘": AllCharHelper.明月尘.tea,
    "景": AllCharHelper.景.tea,
    "耶芙娜": AllCharHelper.耶芙娜.tea,
    "无咎": AllCharHelper.无咎.tea,
    "比戈尼娅": AllCharHelper.比戈尼娅.tea,
    "白鸟梓": AllCharHelper.白鸟梓.tea,
    "霍冉": AllCharHelper.霍冉.tea,
    "马尔斯": AllCharHelper.马尔斯.tea,
    "Sweeper-EX": AllCharHelper.SweeperEX.tea,
    "姜宁": AllCharHelper.姜宁.tea,
    "玄戈": AllCharHelper.玄戈.tea,
    "茜茜": AllCharHelper.茜茜.tea,
    "鸢": AllCharHelper.鸢.tea,
    "司旸": AllCharHelper.司旸.tea,
    "崔远之": AllCharHelper.崔远之.tea,
    "红玉": AllCharHelper.红玉.tea,
    "凤无梦": AllCharHelper.凤无梦.tea,
    "吉娜": AllCharHelper.吉娜.tea,
    "司危": AllCharHelper.司危.tea,
    "雪长夏": AllCharHelper.雪长夏.tea,
    "狄砚": AllCharHelper.狄砚.tea,
    "艾摩诃": AllCharHelper.艾摩诃.tea,
    "余音": AllCharHelper.余音.tea,
    "卯绒绒": AllCharHelper.卯绒绒.tea,
    "旒珠": AllCharHelper.旒珠.tea,
    "龙和": AllCharHelper.龙和.tea,
    "瞳": AllCharHelper.瞳.tea,
    "缇诗": AllCharHelper.缇诗.tea,
    "风晴雪": AllCharHelper.风晴雪.tea,
    "罗咤": AllCharHelper.罗咤.tea,
    "卡洛琳": AllCharHelper.卡洛琳.tea,
    "莉缇亚": AllCharHelper.莉缇亚.tea,
    "尚非乐": AllCharHelper.尚非乐.tea,
    "刘兄": AllCharHelper.刘兄.tea,
    "龙晴": AllCharHelper.龙晴.tea,
    "谛卡": AllCharHelper.谛卡.tea,
    "珑": AllCharHelper.珑.tea,
    "言御": AllCharHelper.言御.tea,
    "紫都": AllCharHelper.紫都.tea,
    "芙蕖": AllCharHelper.芙蕖.tea,
    "苏筱": AllCharHelper.苏筱.tea,
    "阳铃": AllCharHelper.阳铃.tea,
    "元桃桃": AllCharHelper.元桃桃.tea,
    "长谣": AllCharHelper.长谣.tea,
    "红珠小姐": AllCharHelper.红珠小姐.tea,
    "提提亚": AllCharHelper.提提亚.tea,
    "拉波": AllCharHelper.拉波.tea,
    "伊琅相思": AllCharHelper.伊琅相思.tea,
    "北洛": AllCharHelper.北洛.tea,
    "岑缨": AllCharHelper.岑缨.tea,
    "逸虚": AllCharHelper.逸虚.tea,
    "言雀": AllCharHelper.言雀.tea,
    "晴雪": AllCharHelper.晴雪.tea,
    "瓦卡莎": AllCharHelper.瓦卡莎.tea,
    "襄铃": AllCharHelper.襄铃.tea,
    "阿棘": AllCharHelper.阿棘.tea,
    "赫九逸": AllCharHelper.赫九逸.tea,
    "岚岚": AllCharHelper.岚岚.tea,
    "老板": AllCharHelper.老板.tea
}

export { charAttr, charPotential, allChar, allCharSkill, allCharTea }