import { DefaultRes } from './SkillCon.ts';
/**
 * 角色立绘对象接口
 */
interface TacgieObj {
    name: string;//立绘名称，如：初始外装
    listNames: string[];//该立绘下的系列名称，如：立绘、S4立绘
    imgs: string[];//该立绘下的图片资源路径
    listImg?: string[];//仅森罗映像类型可以设置
}

/**
 * 角色详情对象接口
 */
export interface DefaultCharDescObj {
    job: string;//职业名称，如：尖峰
    skill: number[];//角色队长技能
    attr: string;//角色属性，如：yan
    star: string;//角色星级，如：6
    nameEn: string;//角色英文名称
    tag: string[];//角色标签，如：破盾、爆发
    originWorld: string;//角色原生世界，如：森罗
    orginChar: string;//角色原生来源，如：古剑奇谭一
    cv: string;//角色配音
    openDate: string;//角色实装日期
    resourse: string[];//角色获取途径，如：定向共鸣
    laohenLink?: number;//角色核心关联烙痕卡，如：烙痕卡ID
    introText: string;//角色简介文本
    tacgie: TacgieObj;//角色初始外装立绘
    extraTacgie?: TacgieObj[];//角色额外立绘、3D等资源，如：森罗映像
}

/**
 * 角色技能对象接口
 */
interface SkillDetailObj {
    type: string;//技能类型，主动、被动、自动、抉择等
    skillTab: string[][];//技能使用标签，如冷却，可使用次数
    tab: string[];//技能标签，如：伤害、负面状态等
    sizeLevel?: string[][];//技能详情中随技能等级而改变的对应数值内容
    content: (string | DefaultRes)[];//技能实际内容描述
}

/**
 * 通用技能对象接口（主要为技能1、技能2、异核技能）
 */
export interface DefaultNormalSkillObj {
    name: string;//技能名称
    aliasNum: string;//技能简称，1技能、2技能、异核等
    maxLevel: number;//技能最大等级
    detail: SkillDetailObj;//技能详情对象
}

/**
 * 特性技能详情对象接口
 */
interface TeseSkillDetailObj {
    type?: string;//仅特性类别设置，技能特性类型，目前写死：战斗特性
    tab?: string[][];//仅特性类别设置，技能攻击标签，如：射程，攻击速度
    atType?: string[];//仅特性类别设置，技能攻击类别，如：单体、群体、格挡条破坏1
    content: (string | DefaultRes)[];//技能特性实际内容描述
    specialContent?: (string | DefaultRes)[][];//仅特性类别设置，角色开花进度对应的技能特性内容，
}

/**
 * 技能特性对象接口（主要为特性技能与特性强化效果）
 */
export interface DefaultTeseSkillObj {
    name: string;//技能名称，或者写死：特性强化
    aliasNum: string;//技能简称别名，目前写死：特性或特性强化
    detail: TeseSkillDetailObj;//技能详情对象
}

/**
 * 技能同调对应的技能详情对象接口
 */
interface LinkSkillDetailObj extends SkillDetailObj {
    name: string;//技能名称
    aliasNum: string;//技能简称，1技能、2技能、异核等
    maxLevel: number;//技能最大等级
    specialContent: (string | DefaultRes)[][];//烙痕开花对应的技能特性内容
}

/**
 * 技能同调对象接口
 */
export interface DefaultSkillLinkObj {
    name: string;//技能名称，目前写死：同调技能
    aliasNum: string;//技能简称别名，目前写死：同调技能
    repSkill: number;//同调技能时，被替换的技能，值为该角色通用技能组数据对应技能下标
    unlock: number;//该技能同调需要的解锁条件，拥有对应的烙痕ID
    detail: LinkSkillDetailObj;
}

/**
 * 茶憩成就对象接口
 */
interface TeaAchievementObj {
    name: string;//茶憩成就名称
    limit: string;//茶憩成就解锁条件
    tips: string[];//茶憩成就对话提示
    recipe: string[];//茶憩成就解锁食谱
}

/**
 * 茶憩高默契值对象接口
 */
interface TeaHighRapportObj {
    needLevel: number;//高默契值需求等级
    recipe: string[];//高默契值解锁食谱
    ex: number[];//基础高默契值奖励
}

/**
 * 茶憩对象接口
 */
export interface DefaultTeaObj {
    achievement: TeaAchievementObj[];//茶憩成就列表
    hignRapport: TeaHighRapportObj[];//茶憩高默契值列表
}

/**
 * 烙痕来源对象接口
 */
interface sourseLaohenObj {
    烙痕漫巡技能: number[];
    烙痕唤醒技能: number[];
    队长刻印技能: string[];
}

/**
 * 默认烙痕技能对象接口
 */
export interface DefaultLaohenSkillObj {
    name: string;//技能名称
    skillType: number;//技能类型,常规技能,核心技能
    isJL: boolean;//是否为激励技能
    rarity: number;//技能稀有度,共3种（r，sr，ssr）
    id: number;//技能ID
    takeEffect: number[];//技能生效职业名称，如：尖峰
    useSkill: number[];//技能激活消耗的技能点
    linkChar?: string;//烙痕唤醒技能关联角色名称
    sourseLaohen: sourseLaohenObj;//技能来源至烙痕信息
    detail: (string | DefaultRes)[];//技能实际内容描述
    changeDetail?: (string | DefaultRes)[];//核心唤醒技能·改，目前仅有此技能有改动：风力加剧
    speSkillToast?: (string | DefaultRes)[];//特殊技能提示，如：激励技能提示
}

/**
 * 烙痕额外数据接口对象
 */
interface LaohenExtraDataObj {
    illust: number;//烙痕画师
    resourse: number;//烙痕来源
    skillLink?: string;//技能同调关联的角色名称
}

/**
 * 烙痕详情对象接口
 */
export interface DefaultLaohenDetailObj {
    name: string;//烙痕名称
    rarity: number;//烙痕稀有度
    type: number;//烙痕属性类型
    id: number;//烙痕ID
    tacgie: string;//烙痕立绘资源路径
    openDate: string;//烙痕实装日期
    extraData: LaohenExtraDataObj;//烙痕额外数据对象
    mxSkill: number[];//烙痕漫巡技能列表
    hxSkill: number[];//烙痕唤醒技能列表
}