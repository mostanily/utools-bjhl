//技能特殊描述样式
enum SkillColorEnum {
    normal,//正常
    injuries,//其他伤害乘区（增伤，减伤，减抗等等）
    orange,//雷元素
    bing,//霜元素
    feng,//风元素
}

//烙痕稀有度
enum LaohenRarity {
    r,
    sr,
    ssr
}

/**
 * 技能类型
 */
enum LaohenSkillType {
    常规技能,
    核心技能
}

/**
 * 烙痕属性类型
 */
enum LaohenAttrType {
    体质,
    防御,
    攻击,
    专精,
    终端
}

/**
 * 烙痕来源
 */
enum LaohenResourse {
    寻迹潜航,
    定向潜航,
    活动,
    叶脉联结计划,
    主线
}

/**
 * 烙痕画师
 */
enum LaohenIllust {
    Akai,
    AurogonShanghai,
    BITE,
    iii303,
    Juanmao,
    kan,
    laxy,
    min,
    MOL,
    Noir,
    YGeriAn,
    zz银咋,
    东河,
    乔瑟夫乔尊尊,
    乙配,
    印巴巴,
    和子君,
    墨秃,
    夜少与狗饼干,
    太子池安,
    当雨作金泽,
    木昆昆,
    波波,
    灼忘,
    熏肉,
    熟了的鱼,
    猫鱼,
    竹墨繁漪,
    跟头,
    阿尼鸭Anya,
    鲛猫,
    鲸谜,
    llmia咻,
    小藻,
    kana酱,
    沢马Haru,
}

//职业名称
enum JobTypeName {
    所有同调者,
    铁御,
    轻卫,
    尖锋,
    游徒,
    筑术师,
    护佑者,
    战术家
}

//技能描述中特殊技能状态图片
enum SkillDescStatusImg {
    逸虚物理,
    逸虚风,
    林熔毁,
    昊苍坎尼斯,
    百里屠苏解封一,
    百里屠苏解封二,
    百里屠苏解封三,
    米达斯祸引,
    明月尘刃血,
    景守誓,
    耶芙娜雪域,
    玄戈璨星,
    玄戈璨星增益,
    崔远之鬼枪强化,
    凤无梦技能强化,
    卡洛琳爆裂试剂,
    卡洛琳吉速汤药,
    莉缇亚金币,
    尚非乐强化,
    谛卡饱食,
    珑蚀,
    珑非蚀,
    言御冰点协议,
    芙蕖舞台攻,
    芙蕖舞台疗,
    阳铃持续治疗,
    元桃桃治疗模式,
    拉波重塑空间,
    风晴雪协同装置,
    风晴雪巡视装置,
    风晴雪供能装置,
    缇诗靶向效应,
    卯绒绒蓄水充盈,
    余音切分音,
    余音普通攻击,
    罗咤弹药,
}

export {
    SkillColorEnum,
    LaohenRarity,
    LaohenSkillType,
    LaohenAttrType,
    LaohenResourse,
    LaohenIllust,
    JobTypeName,
    SkillDescStatusImg
}