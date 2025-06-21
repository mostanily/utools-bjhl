//通用描述特殊颜色配置
const colorConfig = [
    "#358DE7",
    "#ED7000",
    "#DAB886",
    "#96C3D6"
];
//茶憩加成计算公式基础比例
const rapportFormula = [
    1.12,//满家具(12%)
    1.2208,//满穹顶(9%)1.12*1.09
    1.3328,//满加成（目前包含“真心联礼加成”道具加成）(10%)1.12*1.19
];

//稀有度中文名称映射
const rarityName = ["白", "金", "红"];//对应r,sr,ssr
const rarityEnName = ["R", "SR", "SSR"];

//职业名称映射
const jobNames = [
    "所有同调者",
    "铁御",
    "轻卫",
    "尖锋",
    "游徒",
    "筑术师",
    "护佑者",
    "战术家"
];

/**
 * 烙痕画师名称
 */
const IllustNames = [
    "Akai",
    "Aurogon Shanghai",
    "BITE",
    "iii303",
    "Juanmao",
    "kan",
    "laxy",
    "min",
    "MOL",
    "Noir",
    "YGeriAn",
    "zz银咋",
    "东河",
    "乔瑟夫乔尊尊",
    "乙配",
    "印巴巴",
    "和子君",
    "墨秃",
    "夜少与狗饼干",
    "太子池安",
    "当雨作金泽",
    "-木昆昆-",
    "波波",
    "灼忘",
    "熏肉",
    "熟了的鱼",
    "猫鱼",
    "竹墨繁漪",
    "跟头",
    "阿尼鸭Any-a",
    "鲛猫",
    "鲸谜",
    "llmia咻"
]

/**
 * 烙痕来源名称
 */
const LaohenResourseName = [
    "寻迹潜航",
    "定向潜航",
    "活动",
    "叶脉联结计划",
    "主线"
]

/**
 * 烙痕技能类型名称
 */
const LaohenSkillTypeName = [
    "常规技能",
    "核心技能"
]

export {
    colorConfig,
    rapportFormula,
    rarityName,
    rarityEnName,
    jobNames,
    IllustNames,
    LaohenResourseName,
    LaohenSkillTypeName
}