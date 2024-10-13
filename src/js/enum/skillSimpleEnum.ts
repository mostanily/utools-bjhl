//技能特殊描述样式
enum SkillColorEnum {
    normal,//正常
    injuries,//其他伤害乘区（增伤，减伤，减抗等等）
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
    鲸谜
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

export {
    SkillColorEnum,
    LaohenRarity,
    LaohenSkillType,
    LaohenAttrType,
    LaohenResourse,
    LaohenIllust,
    JobTypeName
}