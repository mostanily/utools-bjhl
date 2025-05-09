import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { toastWithSkill } from './toastWithSkillConst.ts';

/**
 * 返回特殊技能内容对象
 * @param con 特殊技能内容
 * @param color 颜色类型
 * @param toastTitle toast弹窗标题内容
 * @returns 
 */
const speSkillCon = (con: string, color: number = SkillColorEnum.normal, toastTitle: number = -1, repIndex: number = -1) => {
    const res = { "desc": con, "color": color, "repIndex": repIndex, "withToast": false, "title": "", "con": "", "conSpe": new Array };
    if (toastTitle != -1) {
        res.withToast = true
        if (typeof toastWithSkill[toastTitle][0] === "string") {
            res.title = toastWithSkill[toastTitle][0]
        }
        if (typeof toastWithSkill[toastTitle][1] === "string") {
            res.con = toastWithSkill[toastTitle][1]
        } else {
            res.conSpe = toastWithSkill[toastTitle][1]
        }
    }
    return res
}

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

/**
 * 所有角色简介
 */
const allChar = {
    "莫红袖": {
        "job": "铁御", "skill": [MXLaohenEnum.生机盎然方块α型, MXLaohenEnum.祝福区域], "attr": "yan", "star": "6",
        "nameEn": "MOHONGXIU", "tag": ["防护", "控场", "元素区域"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
        "cv": "张安琪", "openDate": "2024年01月12日", "resourse": ["常态共鸣", "常态共鸣·森罗万象"]
    },
    "禺期": {
        "job": "铁御", "skill": [MXLaohenEnum.生机盎然方块β型, MXLaohenEnum.荆棘之志], "attr": "lei", "star": "5",
        "nameEn": "YUQI", "tag": ["防护", "反伤"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭二",
        "cv": "斑马", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "田偌": {
        "job": "铁御", "skill": [MXLaohenEnum.一线生机, MXLaohenEnum.坚毅不屈], "attr": "shui", "star": "4",
        "nameEn": "TIANRUO", "tag": ["治疗", "屏障"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "风袖", "openDate": "2024年01月12日", "resourse": ["精神深潜教学", "常态共鸣"]
    },
    "焰响": {
        "job": "铁御", "skill": [MXLaohenEnum.一线生机, MXLaohenEnum.绝处逢生], "attr": "yan", "star": "4",
        "nameEn": "INFA", "tag": ["防护", "支援"], "originWorld": "黑曜", "orginChar": "原创",
        "cv": "张昱", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "林": {
        "job": "轻卫", "skill": [MXLaohenEnum.核心充能方块α型, MXLaohenEnum.炎域强袭], "attr": "yan", "star": "6",
        "nameEn": "LYNN", "tag": ["防护", "输出", "元素区域"], "originWorld": "黑曜", "orginChar": "原创",
        "cv": "孟阳", "openDate": "2024年12月12日", "resourse": ["定向潜航·渊火伏明"]
    },
    "温留": {
        "job": "轻卫", "skill": [MXLaohenEnum.大敌当前, MXLaohenEnum.影刻方阵], "attr": "wuli", "star": "6",
        "nameEn": "WEN LIU", "tag": ["群攻", "输出", "生存"], "originWorld": "海错", "orginChar": "古剑奇谭二",
        "cv": "", "openDate": "2025年03月27日", "resourse": ["定向共鸣·瑞金游方"]
    },
    "云无月": {
        "job": "轻卫", "skill": [MXLaohenEnum.大敌当前, MXLaohenEnum.蚀之激励], "attr": "shi", "star": "6",
        "nameEn": "LORELLE", "tag": ["防护", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
        "cv": "冯骏骅", "openDate": "2024年01月12日", "resourse": ["常态共鸣·森罗万象", "常态共鸣"]
    },
    "乐无异": {
        "job": "轻卫", "skill": [MXLaohenEnum.一线生机, MXLaohenEnum.卸劲化能], "attr": "lei", "star": "6",
        "nameEn": "KYLIN", "tag": ["防护", "输出", "屏障"], "originWorld": "森罗", "orginChar": "古剑奇谭二",
        "cv": "赵毅", "openDate": "2024年04月18日", "resourse": ["常态共鸣·森罗万象", "定向共鸣·王牌机械师"]
    },
    "修": {
        "job": "轻卫", "skill": [MXLaohenEnum.乘人之危对地, MXLaohenEnum.物理专精], "attr": "wuli", "star": "5",
        "nameEn": "SHU", "tag": ["防护", "控场"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "刘北辰", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "唐路遥": {
        "job": "轻卫", "skill": [MXLaohenEnum.昂扬斗志方块α型, MXLaohenEnum.战斗反射], "attr": "wuli", "star": "4",
        "nameEn": "RODNEY", "tag": ["输出", "防护"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "马正阳", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "豹富": {
        "job": "轻卫", "skill": [MXLaohenEnum.自动瞄准系统方块β型, MXLaohenEnum.润物无声], "attr": "shui", "star": "1",
        "nameEn": "RICHEST", "tag": ["防护", "支援"], "originWorld": "海错", "orginChar": "原创",
        "cv": "夏磊", "openDate": "2024年01月12日", "resourse": ["成就奖励"]
    },
    "尤尼": {
        "job": "尖锋", "skill": [MXLaohenEnum.强攻对地方块, MXLaohenEnum.愈伤澜起], "attr": "shui", "star": "6",
        "nameEn": "UNI", "tag": ["输出", "元素区域"], "originWorld": "斯奈菲尔", "orginChar": "原创",
        "cv": "豆奶", "openDate": "2024年05月30日", "resourse": ["定向共鸣·再见孤蓝之海", "常态共鸣·异世交汇"]
    },
    "昊苍": {
        "job": "尖锋", "skill": [MXLaohenEnum.化险为夷, MXLaohenEnum.烈焰暴击], "attr": "yan", "star": "6",
        "nameEn": "CATULUS", "tag": ["爆发", "元素区域"], "originWorld": "黎威尔", "orginChar": "古剑奇谭网络版",
        "cv": "孙晔", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "百里屠苏": {
        "job": "尖锋", "skill": [MXLaohenEnum.饱和式救援, MXLaohenEnum.先破后立], "attr": "yan", "star": "6",
        "nameEn": "BAILITUSU", "tag": ["破盾", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
        "cv": "陈家恒", "openDate": "2024年02月01日", "resourse": ["定向共鸣·岁暮重明", "常态共鸣·森罗万象"]
    },
    "米达斯": {
        "job": "尖锋", "skill": [MXLaohenEnum.昂扬斗志方块α型, MXLaohenEnum.物理异能], "attr": "wuli", "star": "6",
        "nameEn": "MIDAS", "tag": ["输出", "召唤"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "刘雨轩", "openDate": "2024年10月31日", "resourse": ["定向共鸣·荒土悲歌"]
    },
    "十手卫": {
        "job": "尖锋", "skill": [MXLaohenEnum.强攻对地方块, MXLaohenEnum.驭风之力], "attr": "feng", "star": "6",
        "nameEn": "MAMORU", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "", "openDate": "2025年02月13日", "resourse": ["定向共鸣·至暗至明"]
    },
    "明月尘": {
        "job": "尖锋", "skill": [MXLaohenEnum.异核过载, MXLaohenEnum.蚀核强攻], "attr": "shi", "star": "6",
        "nameEn": "SOLBYRD VON LUMINBERG", "tag": ["输出", "爆发"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
        "cv": "谢添天", "openDate": "2024年09月19日", "resourse": ["定向共鸣·飞鸟也栖"]
    },
    "景": {
        "job": "尖锋", "skill": [MXLaohenEnum.元素专攻方块β型, MXLaohenEnum.雷域和源], "attr": "lei", "star": "6",
        "nameEn": "JING·GLIT·JUSTICE", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "张若瑜", "openDate": "2024年08月08日", "resourse": ["定向共鸣·荣耀俯首"]
    },
    "耶芙娜": {
        "job": "尖锋", "skill": [MXLaohenEnum.自动瞄准系统方块β型, MXLaohenEnum.冻结精通], "attr": "shuang", "star": "6",
        "nameEn": "IVANA", "tag": ["输出", "群攻"], "originWorld": "斯奈菲尔", "orginChar": "原创",
        "cv": "杨梦露", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "无咎": {
        "job": "尖锋", "skill": [MXLaohenEnum.乘人之危对精英, MXLaohenEnum.如火如荼], "attr": "yan", "star": "5",
        "nameEn": "REID", "tag": ["输出", "群攻"], "originWorld": "海错", "orginChar": "古剑奇谭网络版",
        "cv": "胡良伟", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "比戈尼娅": {
        "job": "尖锋", "skill": [MXLaohenEnum.核心充能方块β型, MXLaohenEnum.冰霜共鸣], "attr": "shuang", "star": "5",
        "nameEn": "BEGONIA", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
        "cv": "冯骏骅", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "白鸟梓": {
        "job": "尖锋", "skill": [MXLaohenEnum.强攻对精英, MXLaohenEnum.致命弱点], "attr": "feng", "star": "5",
        "nameEn": "SHIRATORI AZUSA", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "翁媛", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "霍冉": {
        "job": "尖锋", "skill": [MXLaohenEnum.自动瞄准系统方块α型, MXLaohenEnum.破碎打击], "attr": "yan", "star": "4",
        "nameEn": "HUORAN", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "小巫", "openDate": "2024年01月12日", "resourse": ["主线S0-3赠送", "常态共鸣"]
    },
    "马尔斯": {
        "job": "尖锋", "skill": [MXLaohenEnum.核心充能方块α型, MXLaohenEnum.无畏者], "attr": "lei", "star": "4",
        "nameEn": "MARS", "tag": ["破盾", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "不一", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "Sweeper-EX": {
        "job": "尖锋", "skill": [MXLaohenEnum.生生不息方块, MXLaohenEnum.绝处逢生], "attr": "wuli", "star": "1",
        "nameEn": "SWEEPER-EX", "tag": ["输出"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "吴磊", "openDate": "2024年01月12日", "resourse": ["成就奖励"]
    },
    "玄戈": {
        "job": "游徒", "skill": [MXLaohenEnum.铁杵磨成针三角, MXLaohenEnum.连破留痕], "attr": "wuli", "star": "6",
        "nameEn": "LIONEL", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
        "cv": "夏磊", "openDate": "2025年01月02日", "resourse": ["定向潜航·灼金格言"]
    },
    "茜茜": {
        "job": "游徒", "skill": [MXLaohenEnum.利刃三角β型, MXLaohenEnum.蚀刻连携], "attr": "shi", "star": "6",
        "nameEn": "SISSI", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "", "openDate": "2025年04月17日", "resourse": ["定向共鸣·柙中独白"]
    },
    "鸢": {
        "job": "游徒", "skill": [MXLaohenEnum.核心充能三角β型, MXLaohenEnum.核心蚀解], "attr": "shi", "star": "6",
        "nameEn": "LEILANI", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "王晓彤", "openDate": "2024年06月27日", "resourse": ["定向共鸣·沉默的誓言"]
    },
    "崔远之": {
        "job": "游徒", "skill": [MXLaohenEnum.利刃三角α型, MXLaohenEnum.狙击], "attr": "lei", "star": "6",
        "nameEn": "HASSEL", "tag": ["输出", "爆发"], "originWorld": "黑曜", "orginChar": "古剑奇谭网络版",
        "cv": "夏磊", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "红玉": {
        "job": "游徒", "skill": [MXLaohenEnum.利刃三角β型, MXLaohenEnum.狂风卷袭], "attr": "feng", "star": "6",
        "nameEn": "SCARLETT", "tag": ["输出", "击退", "拦截"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
        "cv": "蔡娜", "openDate": "2024年02月01日", "resourse": ["定向共鸣·玉照长夜·陈酒新酌", "常态共鸣·森罗万象"]
    },
    "凤无梦": {
        "job": "游徒", "skill": [MXLaohenEnum.庇佑, MXLaohenEnum.束缚蚀力], "attr": "shi", "star": "5",
        "nameEn": "VIDAR", "tag": ["输出", "召唤"], "originWorld": "特默里恩", "orginChar": "古剑奇谭网络版",
        "cv": "刘十四", "openDate": "2024年01月18日", "resourse": ["定向共鸣·游光澄明", "常态共鸣"]
    },
    "吉娜": {
        "job": "游徒", "skill": [MXLaohenEnum.人形特攻α型, MXLaohenEnum.灵感激活], "attr": "shi", "star": "5",
        "nameEn": "GINA", "tag": ["输出", "爆发"], "originWorld": "特默里恩", "orginChar": "原创",
        "cv": "降温", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "司危": {
        "job": "游徒", "skill": [MXLaohenEnum.机械特攻α型, MXLaohenEnum.连击精通], "attr": "lei", "star": "5",
        "nameEn": "PRIS", "tag": ["输出"], "originWorld": "艾达", "orginChar": "古剑奇谭三",
        "cv": "醋醋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "雪长夏": {
        "job": "游徒", "skill": [MXLaohenEnum.铁杵磨成针三角, MXLaohenEnum.超频引雷], "attr": "lei", "star": "5",
        "nameEn": "SORLEY", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "三石", "openDate": "2024年03月28日", "resourse": ["定向共鸣·飞雪初晴", "定向共鸣·王牌机械师", "常态共鸣"]
    },
    "狄砚": {
        "job": "游徒", "skill": [MXLaohenEnum.针对打击三角, MXLaohenEnum.同步强化], "attr": "wuli", "star": "4",
        "nameEn": "DIYAN", "tag": ["群攻", "支援", "拦截"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "苏婉", "openDate": "2024年01月12日", "resourse": ["主线S0-1赠送", "常态共鸣"]
    },
    "艾摩诃": {
        "job": "游徒", "skill": [MXLaohenEnum.特殊减伤对空, MXLaohenEnum.隐匿其中], "attr": "lei", "star": "4",
        "nameEn": "EMAHA", "tag": ["输出", "生存"], "originWorld": "夜摩", "orginChar": "原创",
        "cv": "鹏小胖", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "卯绒绒": {
        "job": "筑术师", "skill": [MXLaohenEnum.核心充能三角α型, MXLaohenEnum.主场扩大], "attr": "shui", "star": "6",
        "nameEn": "FURAY&FURNEY", "tag": ["群攻", "元素区域"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
        "cv": "二娇、杨鸥", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "龙和": {
        "job": "筑术师", "skill": [MXLaohenEnum.自动瞄准系统三角α型, MXLaohenEnum.炽锋叠势], "attr": "yan", "star": "6",
        "nameEn": "LONG HE", "tag": ["输出", "群攻", "元素区域"], "originWorld": "海错", "orginChar": "原创",
        "cv": "", "openDate": "2025年03月06日", "resourse": ["定向潜航·潮生流火"]
    },
    "余音": {
        "job": "筑术师", "skill": [MXLaohenEnum.核心充能三角β型, MXLaohenEnum.水陷抗涣], "attr": "shui", "star": "6",
        "nameEn": "COG", "tag": ["输出", "群攻", "屏障"], "originWorld": "艾达", "orginChar": "原创",
        "cv": "", "openDate": "2025年01月23日", "resourse": ["定向潜航·无心人"]
    },
    "瞳": {
        "job": "筑术师", "skill": [MXLaohenEnum.狩猎时刻对地, MXLaohenEnum.左膀右臂三角], "attr": "wuli", "star": "6",
        "nameEn": "TONG", "tag": ["召唤", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭二",
        "cv": "刘北辰", "openDate": "2024年01月12日", "resourse": ["常态共鸣·森罗万象", "常态共鸣"]
    },
    "缇诗": {
        "job": "筑术师", "skill": [MXLaohenEnum.利刃三角α型, MXLaohenEnum.雷核释力], "attr": "lei", "star": "6",
        "nameEn": "TISHI", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "虫虫", "openDate": "2024年10月10日", "resourse": ["定向共鸣·凡我之至"]
    },
    "风晴雪": {
        "job": "筑术师", "skill": [MXLaohenEnum.强攻对地, MXLaohenEnum.霜天], "attr": "shuang", "star": "6",
        "nameEn": "FENG JR.", "tag": ["召唤", "输出"], "originWorld": "森罗", "orginChar": "古剑奇谭一",
        "cv": "朱雀橙", "openDate": "2024年03月28日", "resourse": ["定向共鸣·飞雪初晴", "常态共鸣·森罗万象"]
    },
    "罗咤": {
        "job": "筑术师", "skill": [MXLaohenEnum.原生特攻α型, MXLaohenEnum.熊熊燃烧], "attr": "yan", "star": "5",
        "nameEn": "ROAR", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "古剑奇谭网络版",
        "cv": "叶知秋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "卡洛琳": {
        "job": "筑术师", "skill": [MXLaohenEnum.暴风骤雨三角α型, MXLaohenEnum.蚀入骨髓], "attr": "shi", "star": "5",
        "nameEn": "CAROLINE", "tag": ["治疗", "爆发"], "originWorld": "特默里恩", "orginChar": "原创",
        "cv": "苏婉", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "莉缇亚": {
        "job": "筑术师", "skill": [MXLaohenEnum.人形特攻β型, MXLaohenEnum.源源不断], "attr": "lei", "star": "5",
        "nameEn": "LYDIA", "tag": ["群攻", "输出"], "originWorld": "黎威尔", "orginChar": "原创",
        "cv": "忙音", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "尚非乐": {
        "job": "筑术师", "skill": [MXLaohenEnum.强攻对空, MXLaohenEnum.信号干扰三角], "attr": "feng", "star": "5",
        "nameEn": "HIRUNDO", "tag": ["群攻", "拦截"], "originWorld": "黎威尔", "orginChar": "古剑奇谭网络版",
        "cv": "王燕华", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "刘兄": {
        "job": "筑术师", "skill": [MXLaohenEnum.特殊减伤对地, MXLaohenEnum.雷霆万钧], "attr": "lei", "star": "4",
        "nameEn": "MARGARET·LIU", "tag": ["治疗", "屏障"], "originWorld": "特默里恩", "orginChar": "古剑奇谭三",
        "cv": "洪海天", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "龙晴": {
        "job": "护佑者", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.屏障水], "attr": "shui", "star": "6",
        "nameEn": "LONGQING", "tag": ["治疗", "屏障"], "originWorld": "海错", "orginChar": "原创",
        "cv": "翁媛", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "珑": {
        "job": "护佑者", "skill": [MXLaohenEnum.核心充能菱形α型, MXLaohenEnum.碎易蚀影], "attr": "shi", "star": "6",
        "nameEn": "LONG", "tag": ["支援", "治疗"], "originWorld": "黑曜", "orginChar": "原创",
        "cv": "缇安", "openDate": "2024年11月21日", "resourse": ["定向潜航·振玉知微"]
    },
    "言御": {
        "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.刺骨寒意], "attr": "shuang", "star": "6",
        "nameEn": "BOREAS", "tag": ["支援", "治疗", "控场"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "梁达伟", "openDate": "2024年03月14日", "resourse": ["定向共鸣·夜幕下的本相", "常态共鸣·森罗万象"]
    },
    "紫都": {
        "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.风之庇佑], "attr": "feng", "star": "6",
        "nameEn": "ZODIVIN AZURE", "tag": ["治疗", "支援"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
        "cv": "洪海天", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "芙蕖": {
        "job": "护佑者", "skill": [MXLaohenEnum.及时援助菱形β型, MXLaohenEnum.沉浸舞台], "attr": "shui", "star": "5",
        "nameEn": "FREDA", "tag": ["治疗", "支援"], "originWorld": "艾达", "orginChar": "古剑奇谭一",
        "cv": "陈奕雯", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "苏筱": {
        "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.锻炼治疗], "attr": "wuli", "star": "5",
        "nameEn": "SUXIAO", "tag": ["治疗", "屏障"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "Vila", "openDate": "2024年01月12日", "resourse": ["主线初始赠送"]
    },
    "阳铃": {
        "job": "护佑者", "skill": [MXLaohenEnum.核心充能菱形α型, MXLaohenEnum.冻结延长], "attr": "shuang", "star": "5",
        "nameEn": "NOLA", "tag": ["治疗", "控场"], "originWorld": "黎威尔", "orginChar": "古剑奇谭网络版",
        "cv": "叶知秋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "长谣": {
        "job": "护佑者", "skill": [MXLaohenEnum.落井下石, MXLaohenEnum.润物无声], "attr": "shui", "star": "4",
        "nameEn": "CHANGYAO", "tag": ["治疗", "控场"], "originWorld": "海错", "orginChar": "原创",
        "cv": "忙音", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "元桃桃": {
        "job": "护佑者", "skill": [MXLaohenEnum.及时援助菱形β型, MXLaohenEnum.因祸得福], "attr": "shui", "star": "4",
        "nameEn": "BUBBLES", "tag": ["治疗", "输出"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "富贵", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "提提亚": {
        "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形β型, MXLaohenEnum.元素跃威], "attr": "shui", "star": "6",
        "nameEn": "TITIA", "tag": ["支援", "元素区域"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "郭贝", "openDate": "2024年07月18日", "resourse": ["定向共鸣·本真枷锁"]
    },
    "拉波": {
        "job": "战术家", "skill": [MXLaohenEnum.铁杵磨成针菱形, MXLaohenEnum.霜汐共振], "attr": "shuang", "star": "6",
        "nameEn": "LABOLAS", "tag": ["输出", "控场"], "originWorld": "特默里恩", "orginChar": "原创",
        "cv": "", "openDate": "2024年05月08日", "resourse": ["定向共鸣·二分的狂徒"]
    },
    "伊琅相思": {
        "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形α型, MXLaohenEnum.隐匿回响], "attr": "yan", "star": "6",
        "nameEn": "Thea", "tag": ["群攻", "生存"], "originWorld": "夜摩", "orginChar": "古剑奇谭网络版",
        "cv": "龟娘", "openDate": "2024年05月09日", "resourse": ["定向共鸣·走向彼岸"]
    },
    "北洛": {
        "job": "战术家", "skill": [MXLaohenEnum.势如破竹对空, MXLaohenEnum.战术强化], "attr": "wuli", "star": "6",
        "nameEn": "LUKE", "tag": ["输出", "召唤", "屏障"], "originWorld": "黑曜", "orginChar": "古剑奇谭三",
        "cv": "张沛", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
    },
    "岑缨": {
        "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形α型, MXLaohenEnum.左膀右臂菱形], "attr": "wuli", "star": "6",
        "nameEn": "CENYING", "tag": ["输出", "召唤", "拦截"], "originWorld": "森罗", "orginChar": "古剑奇谭三",
        "cv": "龟娘", "openDate": "2024年01月18日", "resourse": ["定向共鸣·游光澄明", "常态共鸣·森罗万象"]
    },
    "言雀": {
        "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.高压雷击], "attr": "lei", "star": "6",
        "nameEn": "SKYLAR", "tag": ["控场", "输出"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "筱筝", "openDate": "2024年02月29日", "resourse": ["定向共鸣·云端来信", "常态共鸣·森罗万象"]
    },
    "晴雪": {
        "job": "战术家", "skill": [MXLaohenEnum.元素专攻菱形α型, MXLaohenEnum.风刃侵蚀], "attr": "feng", "star": "6",
        "nameEn": "ELPIS", "tag": ["召唤", "输出", "支援"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭一",
        "cv": "朱雀橙", "openDate": "2024年08月29日", "resourse": ["定向共鸣·晴空龙吟"]
    },
    "瓦卡莎": {
        "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形β型, MXLaohenEnum.等待时机], "attr": "shui", "star": "5",
        "nameEn": "SAMBHEKA", "tag": ["击退", "元素区域"], "originWorld": "夜摩", "orginChar": "原创",
        "cv": "灯果", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "襄铃": {
        "job": "战术家", "skill": [MXLaohenEnum.伤害赐福菱形α型, MXLaohenEnum.针对削弱], "attr": "yan", "star": "5",
        "nameEn": "XIANGLING", "tag": ["输出", "拉拽"], "originWorld": "艾达", "orginChar": "古剑奇谭一",
        "cv": "阎萌萌", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "阿棘": {
        "job": "战术家", "skill": [MXLaohenEnum.核心充能菱形β型, MXLaohenEnum.蚀力渗透], "attr": "shi", "star": "5",
        "nameEn": "ACEO", "tag": ["控场", "生存"], "originWorld": "乌瑞亚", "orginChar": "原创",
        "cv": "时音", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "赫九逸": {
        "job": "战术家", "skill": [MXLaohenEnum.生生不息菱形, MXLaohenEnum.针对削弱], "attr": "wuli", "star": "4",
        "nameEn": "GAUYA", "tag": ["指挥", "拉拽"], "originWorld": "黑曜", "orginChar": "原创",
        "cv": "泽勋", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "岚岚": {
        "job": "战术家", "skill": [MXLaohenEnum.对空特攻α型, MXLaohenEnum.风力加剧], "attr": "feng", "star": "4",
        "nameEn": "LANLAN", "tag": ["击退", "拦截"], "originWorld": "乌瑞亚", "orginChar": "原创",
        "cv": "张昱", "openDate": "2024年01月12日", "resourse": ["常态共鸣"]
    },
    "老板": {
        "job": "战术家", "skill": [MXLaohenEnum.昂扬斗志菱形α型, MXLaohenEnum.意志永存], "attr": "wuli", "star": "1",
        "nameEn": "BOSS", "tag": ["充能", "爆发"], "originWorld": "森罗", "orginChar": "原创",
        "cv": "？？？", "openDate": "2024年01月12日", "resourse": ["成就奖励"]
    }
}

/**
 * 所有角色战斗技能
 */
const allCharSkill = {
    "莫红袖": [
        {
            "name": "当关",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "负面状态"],//技能标签
                "sizeLevel": [
                    ["748%"],
                    ["860%"],
                    ["972%"],
                    ["1085%"],
                    ["1197%"],
                    ["1309%"],
                    ["1421%"],
                    ["1533%"],
                    ["1646%"],
                    ["1720%"],
                    ["1795%"],
                    ["1870%"],
                    ["1945%"],
                    ["2020%"],
                    ["2094%"]
                ],
                "content": [
                    "对自身周围半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并将命中的单位以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "向自身拖拽。",
                    "",//空表示该处需要设置为<br>标签
                    "施放后立即回复全部格挡值，格挡强度提升",
                    speSkillCon("50%"),
                    "，格挡值回复速度提升",
                    speSkillCon("100%"),
                    "，普通攻击对半径",
                    speSkillCon("200"),
                    "范围内敌人造成",
                    speSkillCon("250%最终攻击的炎元素伤害"),
                    "，攻击速度降低",
                    speSkillCon("18%"),
                    "，对目标额外造成",
                    speSkillCon("150%"),
                    "格挡强度的炎元素伤害，持续",
                    speSkillCon("20"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "调虎离山",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "2"]],
                "tab": ["屏障", "负面状态"],
                "sizeLevel": [
                    ["31%"],
                    ["36%"],
                    ["40%"],
                    ["45%"],
                    ["50%"],
                    ["54%"],
                    ["59%"],
                    ["64%"],
                    ["68%"],
                    ["71%"],
                    ["74%"],
                    ["78%"],
                    ["81%"],
                    ["84%"],
                    ["87%"]
                ],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒获得盾牌格挡效果，",
                    speSkillCon("10"),
                    "秒内受到的伤害额外减少",
                    speSkillCon("50%"),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                    "，效果持续期间普通攻击会对附近敌人造成",
                    speSkillCon("100%"),
                    "格挡强度的炎元素伤害；",
                    "",
                    "主动：朝指定方向推出巨大盾牌，以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退沿途敌人并持续对附近敌人造成伤害，每次造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，盾牌将在目标位置形成",
                    speSkillCon("较大强度"),
                    "的屏障，阻挡敌人行进并抵御敌对投射物，并每隔",
                    speSkillCon("2"),
                    "秒",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "一次周围敌人，持续",
                    speSkillCon("15"),
                    "秒"
                ]
            }
        },
        {
            "name": "百兽辟易",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"], ["次数", "无限"]],
                "tab": ["炎区域", "负面状态", "伤害", "屏障"],
                "sizeLevel": [
                    ["2700%", "15%"],
                    ["3150%", "17%"],
                    ["3600%", "19%"],
                    ["4050%", "21%"],
                    ["4275%", "23%"],
                    ["4500%", "25%"],
                ],
                "content": [
                    "对半径",
                    speSkillCon("600"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，使命中的敌人攻击力降低",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("20"),
                    "秒，并形成一个壁垒，同时将除首领外的所有敌人以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "牵引进壁垒内，壁垒内部产生炎元素区域。",
                    "",
                    "壁垒可以阻止外界敌人进入以及形成",
                    speSkillCon("中等强度"),
                    "的屏障抵御敌对投射物，持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：明罚敕法",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.56次每秒"]],
                "atType": ["单体"],
                "content": [
                    "使用手中的盾牌攻击面前的目标，对其造成",
                    speSkillCon("215%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "较易成为敌人的攻击目标，能更大范围的吸引敌人攻击自己",
                        "",
                        "受到炎元素伤害时，回复自身",
                        speSkillCon("3%最大生命值"),
                        "",
                        "自身位于炎元素区域时，格挡值提升",
                        speSkillCon("25%")
                    ],//零花本体特性
                    [
                        "主动技能【当关】命中的目标将会附着“燎原”状态，每秒受到",
                        speSkillCon("100%最终攻击的炎元素伤害"),
                        "，同时降低敌人",
                        speSkillCon("20%"),
                        { "desc": "", "color": SkillColorEnum.injuries },
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "炎元素抗性，持续",
                        speSkillCon("8"),
                        "秒"
                    ],//一花特性
                    [
                        "编入队伍时，队伍内所有炎元素角色伤害提升",
                        speSkillCon("15%"),
                        speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "施放【调虎离山】后，使场上同调者获得相当于莫红袖最大生命值",
                    speSkillCon("40%"),
                    "的护盾"
                ]
            }
        }
    ],
    "禺期": [
        {
            "name": "雷引",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益", "负面状态"],//技能标签
                "sizeLevel": [
                    ["375%"],
                    ["431%"],
                    ["488%"],
                    ["544%"],
                    ["600%"],
                    ["656%"],
                    ["713%"],
                    ["769%"],
                    ["825%"],
                    ["863%"],
                    ["900%"],
                    ["938%"],
                    ["956%"],
                    ["975%"],
                    ["994%"]
                ],
                "content": [
                    "对自身周围半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "，并将武器的一端锤头固定在目标点形成“引雷区”，每隔一段时间会以",
                    speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "向自身拖拽。",
                    "对范围内敌人造成牵引效果，持续",
                    speSkillCon("20"),
                    "秒。",
                    "",//空表示该处需要设置为<br>标签
                    "禺期在“引雷区”范围内时获得「引雷」状态：攻击提升",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，基础减伤增加",
                    speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "“引雷区”最多同时存在2个"
                ]//满级技能内容描述
            }
        },
        {
            "name": "鸣振",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "20秒"]],
                "tab": ["伤害", "负面状态"],
                "sizeLevel": [
                    ["1000%"],
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
                    ["2650%"]
                ],
                "content": [
                    "对前方扇形区域内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("体质的雷元素伤害"),
                    "，",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "被命中的敌人"
                ]
            }
        },
        {
            "name": "铸劫",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"], ["次数", "无限"]],
                "tab": ["伤害", "自身增益"],
                "sizeLevel": [
                    ["900%", "900%", "12%~20%", "38%", "38%"],
                    ["1013%", "1013%", "13.2%~22%", "42%", "42%"],
                    ["1125%", "1125%", "14.4%~24%", "47%", "47%"],
                    ["1238%", "1238%", "15%~25%", "52%", "52%"],
                    ["1294%", "1294%", "15%~25%", "54%", "54%"],
                    ["1350%", "1350%", "15%~25%", "56%", "56%"]
                ],
                "content": [
                    "对指定范围",
                    speSkillCon("500"),
                    "内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("体质的雷元素伤害"),
                    "，同时自身进入「引雷·铸劫」状态：攻击提升",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，基础减伤增加",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "持续",
                    speSkillCon("30"),
                    "秒。",
                    "",
                    "持续时间内，特性的反弹效果除了对攻击来源造成伤害以外，额外对自身半径",
                    speSkillCon("300"),
                    "范围内的所有敌人造成",
                    speSkillCon("", 0, -1, 3),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 4),
                    speSkillCon("体质的雷元素伤害"),
                    "（每秒最多触发一次）。",
                    "",
                    "同时拥有「引雷·铸劫」和「引雷」状态时，仅生效「引雷·铸劫」效果"
                ]
            }
        },
        {
            "name": "特性：淬砺",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.57次每秒"]],
                "atType": ["单体"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("210%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "受伤害时反弹伤害，数值为攻击者当前生命的",
                        speSkillCon("2%"),
                        "，不超过自身最大生命",
                        speSkillCon("3%"),
                        "",
                        "较易成为敌人的攻击目标"
                    ],//零花本体特性
                    [
                        "主动技能【雷引】产生的“引雷区”持续时间增加",
                        speSkillCon("5"),
                        "秒"
                    ],//一花特性
                    [
                        "最终体质提升",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·体质加成）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "田偌": [
        {
            "name": "掩护",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "回复", "屏障"],//技能标签
                "sizeLevel": [
                    ["20%", "910%"],
                    ["23%", "1047%"],
                    ["26%", "1183%"],
                    ["29%", "1320%"],
                    ["32%", "1456%"],
                    ["35%", "1593%"],
                    ["38%", "1729%"],
                    ["41%", "1866%"],
                    ["44%", "2002%"],
                    ["46%", "2093%"],
                    ["48%", "2184%"],
                    ["50%", "2275%"],
                    ["51%", "2320%"],
                    ["52%", "2366%"],
                    ["53%", "2412%"]
                ],
                "content": [
                    "开启",
                    speSkillCon("中等强度"),
                    "的海浪屏障抵御敌方投射物，期间自身格挡强度提升",
                    speSkillCon("", 0, -1, 0),
                    "，格挡值回复速度提升",
                    speSkillCon("100%"),
                    "，持续",
                    speSkillCon("10"),
                    "秒。",
                    "",//空表示该处需要设置为<br>标签
                    "开启屏障时，回复全部格挡值并治疗自身半径",
                    speSkillCon("300"),
                    "范围内的友方同调者，回复其",
                    speSkillCon("10%最大生命值"),
                    "",
                    "收盾或屏障被击碎时对半径",
                    speSkillCon("300"),
                    "范围内的目标造成一次",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的水元素伤害"),
                ]//满级技能内容描述
            }
        },
        {
            "name": "急救",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "10秒"]],
                "tab": ["回复"],
                "sizeLevel": [
                    ["8%"],
                    ["10%"],
                    ["11%"],
                    ["12%"],
                    ["13%"],
                    ["15%"],
                    ["16%"],
                    ["17%"],
                    ["18%"],
                    ["19%"],
                    ["20%"],
                    ["21%"],
                    ["21.42%"],
                    ["21.84%"],
                    ["22.26%"]
                ],
                "content": [
                    "治疗生命值最低的一名友方同调者，为其回复",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最大生命值")
                ]
            }
        },
        {
            "name": "活性粒子潮",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"], ["次数", "无限"]],
                "tab": ["自身增益", "友方增益", "回复"],
                "sizeLevel": [
                    ["4%", "9%~15%"],
                    ["4.5%", "9.6%~16%"],
                    ["5%", "10.2%~17%"],
                    ["5.5%", "10.8%~18%"],
                    ["5.75%", "11.4%~19%"],
                    ["6%", "12%~20%"]
                ],
                "content": [
                    "使友方同调者每秒回复",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最大生命值"),
                    "，并增加",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    speSkillCon("[同调者基础减伤]", SkillColorEnum.normal, ToastSkillEnum.同调者基础减伤),
                    "，持续",
                    speSkillCon("15"),
                    "秒。"
                ]
            }
        },
        {
            "name": "特性：田螺姑娘",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "300"], ["攻击速度", "0.65次每秒"]],
                "atType": ["群体"],
                "content": [
                    "挥动海螺箱向前方泼出海浪，造成矩形范围",
                    speSkillCon("185%最终攻击的水元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可以治疗友方同调者",
                        "",
                        "较易成为敌方的攻击目标"
                    ],//零花本体特性
                    [
                        "主动技能【掩护】的效果持续期间，持续对周围友方同调者进行治疗，效果随主动技能【掩护】等级提升"
                    ],//一花特性
                    [
                        "治疗量提高",
                        speSkillCon("25%"),
                        speSkillCon("（治疗乘区·额外治疗）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "焰响": [
        {
            "name": "鸣金",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益"],//技能标签
                "sizeLevel": [
                    ["800%"],
                    ["920%"],
                    ["1040%"],
                    ["1160%"],
                    ["1280%"],
                    ["1400%"],
                    ["1520%"],
                    ["1640%"],
                    ["1760%"],
                    ["1840%"],
                    ["1920%"],
                    ["2000%"],
                    ["2040%"],
                    ["2080%"],
                    ["2120%"]
                ],
                "content": [
                    "对面前扇形范围半径",
                    speSkillCon("450"),
                    "内的敌人总计造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "并",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "目标，同时自身基础减伤增加",
                    speSkillCon("3%~5%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    speSkillCon("10"),
                    "秒。",
                    "",//空表示该处需要设置为<br>标签
                    "赫九逸在场时，技能半径扩大至",
                    speSkillCon("600")
                ]//满级技能内容描述
            }
        },
        {
            "name": "抓彩",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "20秒"], ["增益持续", "10秒"]],
                "tab": ["自身增益", "友方增益", "回复"],
                "sizeLevel": [
                    ["50%", "6%~10%", "7.8%~13%"],
                    ["57%", "6%~10%", "7.8%~13%"],
                    ["65%", "6%~10%", "7.8%~13%"],
                    ["73%", "6%~10%", "7.8%~13%"],
                    ["80%", "6%~10%", "7.8%~13%"],
                    ["88%", "7.2%~12%", "9.6%~16%"],
                    ["95%", "7.2%~12%", "9.6%~16%"],
                    ["103%", "7.2%~12%", "9.6%~16%"],
                    ["110%", "9%~15%", "12%~20%"],
                    ["115%", "9%~15%", "12%~20%"],
                    ["120%", "9%~15%", "12%~20%"],
                    ["125%", "9%~15%", "12%~20%"],
                    ["127%", "9%~15%", "12%~20%"],
                    ["130%", "9%~15%", "12%~20%"],
                    ["132%", "9%~15%", "12%~20%"]
                ],
                "content": [
                    "抽取红包获得增益效果，基础减伤增加",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "，有50%概率抽取到“大”红包，基础减伤增加量提高至",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("10"),
                    "秒",
                    "",
                    "效果持续期间内，自身每秒回复",
                    speSkillCon("7%最大生命值"),
                    "，自身附着火环，每秒对自身周围半径",
                    speSkillCon("150"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的炎元素伤害"),
                ]
            }
        },
        {
            "name": "赤焰压祟",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "负面状态"],
                "sizeLevel": [
                    ["1600%", "88%"],
                    ["1800%", "99%"],
                    ["2000%", "110%"],
                    ["2200%", "121%"],
                    ["2300%", "126%"],
                    ["2400%", "132%"]
                ],
                "content": [
                    "对指定目标点半径",
                    speSkillCon("300"),
                    "范围内的敌人总计造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "目标，同时降低敌人",
                    speSkillCon("25%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "炎元素抗性，持续",
                    speSkillCon("10"),
                    "秒。",
                    "",
                    "之后会在目标区域留下一个存在",
                    speSkillCon("15"),
                    "秒的火雨区域，每秒对范围内的敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "并附加相同的炎元素抗性降低效果",
                    "",
                    "赫九逸在场时，技能半径扩大至",
                    speSkillCon("500")
                ]
            }
        },
        {
            "name": "特性：吉人相",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.60次每秒"]],
                "atType": ["单体"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("200%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "赫九逸在场时，双方的技能范围都将得到大幅提升"
                    ],//零花本体特性
                    [
                        "自动技能【抓彩】产生的增益效果将同时附加给所有友方同调者，友方生命回复效果受益三分之一"
                    ],//一花特性
                    [
                        "最终体质提升",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·体质加成）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "林": [
        {
            "name": "吞厄",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益"],//技能标签
                "sizeLevel": [
                    ["240%"],
                    ["276%"],
                    ["312%"],
                    ["348%"],
                    ["384%"],
                    ["420%"],
                    ["456%"],
                    ["492%"],
                    ["528%"],
                    ["552%"],
                    ["576%"],
                    ["600%"],
                    ["624%"],
                    ["648%"],
                    ["672%"]
                ],
                "content": [
                    "对自身周围",
                    speSkillCon("300"),
                    "半径造成",
                    speSkillCon("300％最终攻击的炎元素伤害"),
                    "后进入持续",
                    speSkillCon("25"),
                    "秒的攻击姿态，且",
                    speSkillCon("25"),
                    "秒内无法再次进入，该姿态下自身暴击率提高",
                    speSkillCon("30%"),
                    "，最大生命值提高",
                    speSkillCon("80%"),
                    "，且每次普通攻击触发“熔毁”。",
                    "",
                    "“熔毁”：每次施放普通攻击消耗自身最大生命值",
                    speSkillCon("4%"),
                    "可额外对当前主目标周围",
                    speSkillCon("200"),
                    "半径造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，自身生命值低于",
                    speSkillCon("30%"),
                    "后将不消耗生命值触发。（“熔毁”最多可触发",
                    speSkillCon("20"),
                    "次）",
                    "",
                    "处于攻击姿态时可施展技能退出该姿态；当自身受到敌方伤害导致生命值低于",
                    speSkillCon("20%"),
                    "（同调者未重伤）会提前退出该姿态，生命值恢复至进入姿态时的生命值。"
                ]//满级技能内容描述
            }
        },
        {
            "name": "湮烬",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],
                "tab": ["格挡条破坏3"],
                "sizeLevel": [
                    ["500%", "24%", "1380%", "500%"],
                    ["575%", "28%", "1587%", "575%"],
                    ["650%", "31%", "1794%", "650%"],
                    ["725%", "35%", "2001%", "725%"],
                    ["800%", "38%", "2208%", "800%"],
                    ["875%", "42%", "2415%", "875%"],
                    ["950%", "46%", "2622%", "950%"],
                    ["1025%", "49%", "2829%", "1025%"],
                    ["1100%", "53%", "3036%", "1100%"],
                    ["1150%", "55%", "3174%", "1150%"],
                    ["1200%", "58%", "3312%", "1200%"],
                    ["1250%", "60%", "3450%", "1250%"],
                    ["1300%", "62%", "3588%", "1300%"],
                    ["1350%", "65%", "3726%", "1350%"],
                    ["1400%", "67%", "3864%", "1400%"]
                ],
                "content": [
                    speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                    "：对单体目标造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并使目标降低",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "炎元素抗性，持续",
                    speSkillCon("60"),
                    "秒，切换攻击姿态后或离场后上述效果消失",
                    "",
                    speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                    "：对选中扇形区域",
                    speSkillCon("400"),
                    "半径造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "",
                    "",
                    "自动技能：对自身前方扇形造成",
                    speSkillCon("", 0, -1, 3),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，根据当前姿态所需的触发条件及效果：",
                    "",
                    speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                    "：该状态下每",
                    speSkillCon("1.2"),
                    "秒获得1层“冥火”，且受到直接伤害获得1层“冥火”。（每",
                    speSkillCon("0.5"),
                    "秒最多获得1层）消耗",
                    speSkillCon("15"),
                    "层“冥火”施展，造成伤害后嘲讽",
                    speSkillCon("250"),
                    "半径的单位",
                    speSkillCon("3"),
                    "秒，使场上所有友方提高",
                    speSkillCon("20%"),
                    speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    "，持续",
                    speSkillCon("20"),
                    "秒，切换攻击姿态或离场后上述效果消失",
                    "",
                    speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                    "：持续时间内无法施放，攻击姿态结束时触发自动技能，自身“熔毁”每次触发提高",
                    speSkillCon("10%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "自动技能伤害，该效果可叠加"
                ]
            }
        },
        {
            "name": "裂魂",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["伤害", "炎区域"],
                "sizeLevel": [
                    ["2100%", "600%"],
                    ["2450%", "700%"],
                    ["2800%", "800%"],
                    ["3150%", "900%"],
                    ["3325%", "950%"],
                    ["3500%", "1000%"]
                ],
                "content": [
                    "对选中位置目标位置半径",
                    speSkillCon("250"),
                    "圆形范围内",
                    speSkillCon("3"),
                    "个主要目标造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，随后对",
                    speSkillCon("450"),
                    "半径范围造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并留下半径",
                    speSkillCon("250"),
                    "范围的炎元素区域并在该范围随机散落小范围炎元素区域"
                ]
            }
        },
        {
            "name": "特性：自我吞食者",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "250"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体"],
                "content": [
                    "防御姿态下：普通攻击对单体目标造成",
                    speSkillCon("90％最终攻击的炎元素伤害"),
                    "",
                    "攻击姿态下：普通攻击对半径",
                    speSkillCon("250"),
                    "扇形范围目标造成",
                    speSkillCon("190％最终攻击的炎元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "初始为",
                        speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                        "，防御姿态下基础减伤提高",
                        speSkillCon("20%"),
                        "，普通攻击使目标受到伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                        "，持续",
                        speSkillCon("5"),
                        "秒（切换攻击姿态或离场后上述效果消失），可施放技能【吞厄】进入攻击姿态"
                    ],//零花本体特性
                    [
                        "切换至",
                        speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                        "后，主动技能【湮烬】造成的抗性降低效果不再消失"
                    ],//一花特性
                    [
                        "林开启",
                        speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                        "后，场上除自身外当前百分比生命值最低的一个友方同调者施放普通攻击时也会触发“熔毁”（不消耗生命值且触发次数不共享），持续至林的攻击姿态结束",
                        "",
                        "自身生命值越低，“熔毁”伤害额外提高，",
                        speSkillCon("40%"),
                        "生命值时达到最大值",
                        speSkillCon("80%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "温留": [
        {
            "name": "天地不照",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "5秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益"],//技能标签
                "sizeLevel": [
                    ["500%", "5%"],
                    ["575%", "6%"],
                    ["650%", "6%"],
                    ["725%", "7%"],
                    ["800%", "8%"],
                    ["875%", "9%"],
                    ["950%", "10%"],
                    ["1025%", "10%"],
                    ["1100%", "11%"],
                    ["1150%", "12%"],
                    ["1200%", "12%"],
                    ["1250%", "12%"],
                    ["1300%", "13%"],
                    ["1350%", "14%"],
                    ["1400%", "14%"]
                ],
                "content": [
                    "主动使用后，进入攻击姿态，消耗全部",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "，且最少消耗",
                    speSkillCon("50"),
                    "点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "。对自身周围半径",
                    speSkillCon("300"),
                    "范围造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的物理伤害"),
                    "，每点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "额外造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的物理伤害"),
                    "，每点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "使自身【沧海尽扫】的自动技能伤害提高",
                    speSkillCon("1%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，此外自动技能回复速度提高",
                    speSkillCon("100%"),
                    "，攻击速度提高",
                    speSkillCon("50%"),
                    "。该状态下不可使用【沧海尽扫】主动技能，该状态持续",
                    speSkillCon("30"),
                    "秒，视为进入",
                    speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                    "",
                    "再次使用，可以切换到防御姿态"
                ]//满级技能内容描述
            }
        },
        {
            "name": "沧海尽扫",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],
                "tab": ["伤害", "回复"],
                "sizeLevel": [
                    ["1000%", "800%", "480%"],
                    ["1150%", "920%", "552%"],
                    ["1300%", "1040%", "624%"],
                    ["1450%", "1160%", "696%"],
                    ["1600%", "1280%", "768%"],
                    ["1750%", "1400%", "840%"],
                    ["1900%", "1520%", "912%"],
                    ["2050%", "1640%", "984%"],
                    ["2200%", "1760%", "1056%"],
                    ["2300%", "1840%", "1104%"],
                    ["2400%", "1920%", "1152%"],
                    ["2500%", "2000%", "1200%"],
                    ["2600%", "2080%", "1248%"],
                    ["2700%", "2160%", "1296%"],
                    ["2800%", "2240%", "1344%"]
                ],
                "content": [
                    "主动技能：仅",
                    speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                    "使用，对指定位置半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的物理伤害"),
                    "，并增加",
                    speSkillCon("35"),
                    "点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                    "",
                    "",
                    "自动技能：冷却时间",
                    speSkillCon("12"),
                    "秒，对自身前方单体目标造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的物理伤害"),
                    "，随后对半径",
                    speSkillCon("300"),
                    "扇形造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的物理伤害"),
                    "，并附带破坏",
                    speSkillCon("2段格挡条"),
                    "效果，根据当前姿态触发的额外效果：",
                    "",
                    "自动技能：对自身前方扇形造成",
                    speSkillCon("1250％最终攻击的炎元素伤害"),
                    "，根据当前姿态所需的触发条件及效果：",
                    "",
                    speSkillCon("「攻击姿态」", SkillColorEnum.injuries),
                    "：会瞬移至自身周围",
                    speSkillCon("600"),
                    "范围血量最低的目标附近（优先精英）触发自动技能，攻击后回至原地。该次自动技能造成伤害时可回复自身最大生命值的",
                    speSkillCon("12%"),
                    "。自身击杀目标时【沧海尽扫】的自动技能冷却时间减少",
                    speSkillCon("50%"),
                    "",
                    speSkillCon("「防御姿态」", SkillColorEnum.injuries),
                    "：获得",
                    speSkillCon("15"),
                    "点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                ]
            }
        },
        {
            "name": "在野",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "回复", "格挡条破坏3"],
                "sizeLevel": [
                    ["24%", "2400%"],
                    ["28%", "2800%"],
                    ["32%", "3200%"],
                    ["36%", "3600%"],
                    ["38%", "3800%"],
                    ["40%", "4000%"]
                ],
                "content": [
                    "使自身基于目标生命值百分比提高伤害，目标生命值越低提高越多，最多提高",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("30"),
                    "秒。随后对自身周围半径",
                    speSkillCon("500"),
                    "范围的敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的物理伤害"),
                    "",
                    "技能施放后，恢复自身",
                    speSkillCon("30%"),
                    "的最大生命值，并获得",
                    speSkillCon("50"),
                    "点",
                    speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                ]
            }
        },
        {
            "name": "特性：方外有兽",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "250"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体"],
                "content": [
                    "防御姿态下：普通攻击对半径",
                    speSkillCon("250"),
                    "扇形范围目标造成",
                    speSkillCon("120％最终攻击的物理伤害"),
                    "",
                    "攻击姿态下：普通攻击对半径",
                    speSkillCon("250"),
                    "扇形范围目标造成",
                    speSkillCon("200％最终攻击的物理伤害"),
                ],//普通攻击
                "specialContent": [
                    [
                        "普通攻击使目标基础减伤降低",
                        speSkillCon("30%"),
                        "（该效果属于",
                        speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                        "），防御姿态下效果基于当前",
                        speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                        "额外提高，每点额外降低",
                        speSkillCon("0.2%"),
                        "，最多降低",
                        speSkillCon("55%"),
                        "，持续",
                        speSkillCon("6"),
                        "秒",
                        "",
                        "初始为防御姿态，防御姿态下基础减伤提高",
                        speSkillCon("15%"),
                        "，普通攻击回复自身",
                        speSkillCon("3%"),
                        "最大生命值。施放异核技能或在防御姿态下施放技能，可以获得",
                        speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                        "，",
                        speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                        "上限100点。",
                        "",
                        "施放【天地不照】消耗",
                        speSkillCon("[天相]", SkillColorEnum.normal, ToastSkillEnum.天相),
                        "切换到攻击姿态"
                    ],//零花本体特性
                    [
                        "初始异核充能降低",
                        speSkillCon("45"),
                        "秒，施放自动技能后自身暴击率提高",
                        speSkillCon("30%"),
                        speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                        "且暴击伤害提高",
                        speSkillCon("50%"),
                        speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                        "，队友刻印攻击力提高",
                        speSkillCon("25%"),
                        speSkillCon("(属性乘区·刻印攻击百分比增加)", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("15"),
                        "秒（温留离场或重伤时该效果消失）"
                    ],//一花特性
                    [
                        "攻击姿态或防御姿态下普通攻击降低目标基础减伤效果始终保持最大值，【沧海尽扫】自动技能的伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "，且受到自动技能伤害的目标后续受到所有伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                        "（温留离场或重伤时该效果消失）"
                    ]//三花特性
                ]
            }
        }
    ],
    "云无月": [
        {
            "name": "前奏曲",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益"],//技能标签
                "sizeLevel": [
                    ["160%", "100%", "240%", "140%"],
                    ["184%", "115%", "276%", "161%"],
                    ["208%", "130%", "312%", "182%"],
                    ["232%", "145%", "348%", "203%"],
                    ["256%", "160%", "384%", "224%"],
                    ["280%", "175%", "420%", "245%"],
                    ["304%", "196%", "456%", "266%"],
                    ["328%", "205%", "492%", "287%"],
                    ["352%", "220%", "528%", "308%"],
                    ["368%", "230%", "552%", "322%"],
                    ["384%", "240%", "576%", "336%"],
                    ["400%", "250%", "600%", "350%"],
                    ["416%", "260%", "624%", "364%"],
                    ["432%", "270%", "648%", "378%"],
                    ["448%", "280%", "672%", "392%"]
                ],
                "content": [
                    speSkillCon("【前奏曲】技能形态", SkillColorEnum.injuries),
                    "",
                    "攻击姿态可用，切换至防御姿态：",
                    "",
                    "较易成为敌人的攻击目标，增加自身",
                    speSkillCon("12%~20%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "基础减伤，",
                    speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                    "对敌方单位造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("体质的蚀元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("专精的蚀元素伤害"),
                    "；其他友方同调者受到伤害时，若自身当前格挡值不为0，会代替承受",
                    speSkillCon("30%"),
                    "的所有伤害；并为终端附加",
                    speSkillCon("2点蚀爆值"),
                    "，蚀爆值获取每秒最多触发一次",
                    "",//空表示该处需要设置为<br>标签
                    speSkillCon("【变奏曲】技能形态", SkillColorEnum.injuries),
                    "",
                    "防御姿态可用，切换至攻击姿态：",
                    "",
                    speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                    "对敌方单位造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 3),
                    speSkillCon("专精的蚀元素伤害"),
                    "，敌方单位为精英目标时该伤害额外提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                    "；非重伤状态下自身及",
                    speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                    "的友方同调者普通攻击伤害提升",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
                ]//满级技能内容描述
            }
        },
        {
            "name": "蚀音连奏",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "20秒"]],
                "tab": ["伤害", "穿透屏障", "持续施法", "格挡条破坏1"],
                "sizeLevel": [
                    ["840%", "500%", "300%"],
                    ["966%", "575%", "345%"],
                    ["1092%", "650%", "390%"],
                    ["1218%", "725%", "435%"],
                    ["1344%", "800%", "480%"],
                    ["1470%", "875%", "525%"],
                    ["1596%", "950%", "570%"],
                    ["1722%", "1025%", "615%"],
                    ["1848%", "1100%", "660%"],
                    ["1932%", "1150%", "690%"],
                    ["2016%", "1200%", "720%"],
                    ["2100%", "1250%", "750%"],
                    ["2184%", "1300%", "780%"],
                    ["2268%", "1350%", "810%"],
                    ["2352%", "1400%", "840%"]
                ],
                "content": [
                    "持续对周围",
                    speSkillCon("300"),
                    "范围内的敌方造成共",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("专精的蚀元素伤害"),
                    "，每次伤害附带破坏",
                    speSkillCon("1段格挡条"),
                    "，最后弹奏会根据当前演奏的曲目产生额外效果",
                    "",
                    speSkillCon("当前演奏【变奏曲】「攻击姿态」：", SkillColorEnum.injuries),
                    "",
                    "为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "，最后弹奏将对正前方敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "，并同时附带破坏",
                    speSkillCon("5段格挡条"),
                    "效果",
                    "",
                    speSkillCon("当前演奏【前奏曲】「防御姿态」：", SkillColorEnum.injuries),
                    "",
                    "场上每有一名友方单元为终端附加",
                    speSkillCon("4点蚀爆值"),
                    "，最多附加",
                    speSkillCon("50点蚀爆值"),
                    "；最后弹奏将对",
                    speSkillCon("500"),
                    "范围内敌方造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("体质的蚀元素伤害")
                ]
            }
        },
        {
            "name": "长夜咏叹",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "自身增益", "穿透屏障", "持续施法"],
                "sizeLevel": [
                    ["1800%", "30%"],
                    ["2100%", "35%"],
                    ["2400%", "40%"],
                    ["2700%", "45%"],
                    ["2850%", "48%"],
                    ["3000%", "50%"]
                ],
                "content": [
                    "开始持续演奏，演奏期间对随机",
                    speSkillCon("8"),
                    "名生命值较高的敌方单位共造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("专精的蚀元素伤害"),
                    "，并进入【捕梦】状态，提升当前演奏曲目所产生的效果",
                    "",
                    speSkillCon("当前演奏【前奏曲】「防御姿态」：", SkillColorEnum.injuries),
                    "",
                    "获得当前最大生命值的护盾，代替友方承受",
                    speSkillCon("65%"),
                    "所受到的所有伤害；期间为终端附加双倍蚀爆值，蚀爆值获取每秒最多触发一次",
                    "",
                    speSkillCon("当前演奏【变奏曲】「攻击姿态」：", SkillColorEnum.injuries),
                    "",
                    speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                    "造成的伤害额外提高",
                    speSkillCon("18%"),
                    "",
                    speSkillCon("【捕梦】状态效果：", SkillColorEnum.injuries),
                    "",
                    "期间自身免疫大多数控制效果，同时友方造成的所有伤害会被记录在梦境中，并在演奏结束时全场敌方单位将分摊",
                    speSkillCon("", 0, -1, 1),
                    "梦境所记录的伤害，该伤害为",
                    speSkillCon("[真实伤害]", SkillColorEnum.normal, ToastSkillEnum.真实伤害)
                ]
            }
        },
        {
            "name": "特性：月翳将生",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "500"], ["攻击速度", "0.30次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "弹奏旋律向当前目标发射琴音造成",
                    speSkillCon("300%最终攻击的蚀元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可以通过演奏不同曲目来切换自身姿态（初始演奏【变奏曲】「攻击姿态」），并为场上友方同调者添加",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "效果，友方同调者造成普通攻击伤害时会触发",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "，根据当前演奏的曲目造成伤害，",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "每",
                        speSkillCon("2"),
                        "秒最多触发一次",
                        "",
                        "蚀元素同调者触发",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "时会额外为终端附加",
                        speSkillCon("1点蚀爆值"),
                        "",
                        "自身攻击速度固定无法改变，且每次普通攻击为终端附加",
                        speSkillCon("1点蚀爆值"),
                        "，自身每额外获得的",
                        speSkillCon("10%"),
                        "攻击速度提升都会降低",
                        speSkillCon("0.2"),
                        "秒",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "的触发间隔",
                        "",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "造成的伤害视为自身普通攻击伤害"
                    ],//零花本体特性
                    [
                        "云无月在场时，场上",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "效果造成的伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，当云无月重伤或进入后备队时，当前场上的",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "效果不会消失，但",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "造成的伤害减少",
                        speSkillCon("50%")
                    ],//一花特性
                    [
                        "受到",
                        speSkillCon("[复调]", SkillColorEnum.normal, ToastSkillEnum.复调),
                        "伤害的敌方目标，蚀元素抗性降低",
                        speSkillCon("20%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低)
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "复调造成伤害时，降低目标1%",
                    speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                    "基础减伤，最多叠加35层（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "）；异核技能初始冷却时间缩短一半，且异核技能期间复调伤害提高20％",
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        },
    ],
    "乐无异": [
        {
            "name": "电蛛Ⅰ代",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "对空", "穿透屏障"],//技能标签
                "sizeLevel": [
                    ["750%"],
                    ["863%"],
                    ["975%"],
                    ["1088%"],
                    ["1200%"],
                    ["1313%"],
                    ["1425%"],
                    ["1538%"],
                    ["1650%"],
                    ["1725%"],
                    ["1800%"],
                    ["1875%"],
                    ["1950%"],
                    ["2025%"],
                    ["2100%"]
                ],
                "content": [
                    speSkillCon("技能施放后进入【防御姿态】", SkillColorEnum.injuries),
                    "",
                    "向目标位置投射两枚电网导弹，每枚对半径",
                    speSkillCon("250"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "，随后以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "将其拉到身边，使其优先攻击自己，并回复自身全部格挡值"
                ]//满级技能内容描述
            }
        },
        {
            "name": "霹雳网",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["施放冷却", "20秒"], ["次数", "3"]],
                "tab": ["伤害", "自身增益", "负面状态"],
                "sizeLevel": [
                    ["1000%", "80%"],
                    ["1150%", "92%"],
                    ["1300%", "104%"],
                    ["1450%", "116%"],
                    ["1600%", "128%"],
                    ["1750%", "140%"],
                    ["1900%", "152%"],
                    ["2050%", "164%"],
                    ["2200%", "176%"],
                    ["2300%", "184%"],
                    ["2400%", "192%"],
                    ["2500%", "200%"],
                    ["2600%", "208%"],
                    ["2700%", "216%"],
                    ["2800%", "224%"]
                ],
                "content": [
                    "被动:",
                    speSkillCon("【防御姿态】", SkillColorEnum.injuries),
                    "下每隔",
                    speSkillCon("15"),
                    "秒，随机弹开一个武装机械臂发动一轮攻击，造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "",
                    "主动：",
                    speSkillCon("进入【防御姿态】", SkillColorEnum.injuries),
                    "，拉起电网强化机甲，回复自身全部格挡值，在目标位置留下一张电网，并生成另一张电网跟随自身移动。每张电网每隔",
                    speSkillCon("2"),
                    "秒对范围内的目标造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "并使目标受到持续",
                    speSkillCon("1"),
                    "秒的",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "效果，电网持续存在",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "扳仔出击！",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "自身增益", "拦截", "对空", "格挡条破坏1"],
                "sizeLevel": [
                    ["3000%", "1800%", "150%", "1200%", "180%", "300%", "300%", "180%"],
                    ["3500%", "2100%", "175%", "1400%", "210%", "350%", "350%", "210%"],
                    ["4000%", "2400%", "200%", "1600%", "240%", "400%", "400%", "240%"],
                    ["4500%", "2700%", "225%", "1800%", "270%", "450%", "450%", "270%"],
                    ["4750%", "2850%", "237%", "1900%", "285%", "475%", "475%", "285%"],
                    ["5000%", "3000%", "250%", "2000%", "300%", "500%", "500%", "300%"]
                ],
                "content": [
                    speSkillCon("进入【攻击姿态】", SkillColorEnum.injuries),
                    "，展开所有机械臂火力全开，使用各类枪械对全场随机目标进行扫射，造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "和",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的物理伤害"),
                    "",
                    speSkillCon("【攻击姿态】", SkillColorEnum.injuries),
                    "期间失去格挡能力，每次攻击破坏敌方",
                    speSkillCon("1段格挡条"),
                    "，并持续用各类枪械攻击敌方目标:",
                    "",
                    "「破天轰雷」每10秒攻击一次，期间持续对自身半径",
                    speSkillCon("1500"),
                    "范围内的随机目标放射电流，共造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的雷元素伤害"),
                    ";蓄力后，对正前方宽度",
                    speSkillCon("450"),
                    "范围发射超远电磁炮，对路径上敌人造成",
                    speSkillCon("", 0, -1, 3),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "，并摧毁敌方投射物",
                    "",
                    "「无敌光波」每5秒攻击一次，对目标发射激光，对半径",
                    speSkillCon("100"),
                    "范围的敌人造成",
                    speSkillCon("", 0, -1, 4),
                    speSkillCon("最终攻击的物理伤害"),
                    "",
                    "「连环飞弹」每5秒攻击一次，对地面区域投射导弹，每次两枚，共对半径",
                    speSkillCon("250"),
                    "范围的敌人造成",
                    speSkillCon("", 0, -1, 5),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "",
                    "「扳扳主炮」强化普通攻击，每次对目标造成",
                    speSkillCon("", 0, -1, 6),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "",
                    "「扳扳副炮」每3秒攻击一次，持续向目标发射子弹，共对目标造成",
                    speSkillCon("", 0, -1, 7),
                    speSkillCon("最终攻击的雷元素伤害"),
                    "",
                    speSkillCon("【攻击姿态】", SkillColorEnum.injuries),
                    "下可施放技能【解除出击】:回到",
                    speSkillCon("【防御姿态】", SkillColorEnum.injuries),
                    ":进行机甲维修，产生6次生命回复效果，每次回复自身",
                    speSkillCon("6%最大生命值"),
                    "",
                    "退出",
                    speSkillCon("【攻击姿态】", SkillColorEnum.injuries),
                    "时:根据异核剩余充能时间的",
                    speSkillCon("25%"),
                    "返还异核充能"
                ]
            }
        },
        {
            "name": "特性：仁兽止戈",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "500"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射子弹造成",
                    speSkillCon("250%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "通过主动技能进入",
                        speSkillCon("【防御姿态】", SkillColorEnum.injuries),
                        "(初始为",
                        speSkillCon("【防御姿态】", SkillColorEnum.injuries),
                        "，通过异核技能进入",
                        speSkillCon("【攻击姿态】", SkillColorEnum.injuries),
                        "",
                        speSkillCon("【攻击姿态】", SkillColorEnum.injuries),
                        "下，自身增加刻印终端",
                        speSkillCon("30%"),
                        speSkillCon("（属性乘区·刻印攻击额外增加值）", SkillColorEnum.injuries),
                        "的刻印攻击额外增加值，超过1000部分的刻印终端值，增加的刻印攻击翻倍",
                        "",
                        "登场异核充能增加70%",
                        "",
                        "屏障:登场后，机甲面前会生成三片持续",
                        speSkillCon("15"),
                        "秒的",
                        speSkillCon("较大强度"),
                        "的屏障，屏障持续时间结束或被打破后，等待",
                        speSkillCon("30"),
                        "秒将自动修复，若期间生成屏障，将重新开始自动修复的计时。",
                        "",
                        "使用技能【电蛛I代】、【霹雳网】、【扳扳出击!】时，可立即修复自身所有屏障，并在机甲背后生成三片新屏障（背后的三片屏障被打破后不会自动修复），屏障持续",
                        speSkillCon("15"),
                        "秒"
                    ],//零花本体特性
                    [
                        "主动技能【霹雳网】可使用次数+1，电网每次电击时都会以",
                        speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                        "将敌人向中心牵引"
                    ],//一花特性
                    [
                        "【攻击姿态】下，自身增加刻印终端",
                        speSkillCon("60%"),
                        speSkillCon("（属性乘区·刻印攻击额外增加值）", SkillColorEnum.injuries),
                        "的刻印攻击额外增加值，超过1000部分的刻印终端值，增加的刻印攻击翻倍（覆盖初始特性）"
                    ]//三花特性
                ]
            }
        }
    ],
    "修": [
        {
            "name": "无畏印",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益"],//技能标签
                "sizeLevel": [
                    ["50%", "20%", "6%~10%"],
                    ["54%", "22%", "6.6%~11%"],
                    ["57%", "25%", "7.2%~12%"],
                    ["63%", "27%", "7.8%~13%"],
                    ["66%", "29%", "9%~15%"],
                    ["72%", "31%", "9.6%~16%"],
                    ["75%", "34%", "10.2%~17%"],
                    ["79%", "36%", "10.8%~18%"],
                    ["84%", "38%", "12%~20%"],
                    ["88%", "40%", "12%~20%"],
                    ["93%", "41%", "12%~20%"],
                    ["100%", "43%", "12%~20%"],
                    ["102%", "44%", "12.2%~20.4%"],
                    ["104%", "45%", "12.5%~20.8%"],
                    ["106%", "46%", "12.7%~21.2%"]
                ],
                "content": [
                    "切换自身为攻击或防御姿态：",
                    "",
                    speSkillCon("【无畏印·攻击姿态】战斗姿态", SkillColorEnum.injuries),
                    "",
                    "攻击姿态”下可触发",
                    speSkillCon("攻击速度：0.46次每秒"),
                    "，攻击力提升",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，普通攻击造成自身面前小范围伤害",
                    "",
                    speSkillCon("【无畏印·防御姿态】战斗姿态", SkillColorEnum.injuries),
                    "",
                    "“防御姿态”下可触发",
                    "",
                    "最大生命值提升",
                    speSkillCon("", 0, -1, 1),
                    "，基础减伤增加",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "，获得格挡能力（受专精影响），较易成为敌人的攻击目标；普通攻击造成自身面前大范围伤害，每次命中时有",
                    speSkillCon("20%"),
                    "的概率",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "目标1秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "禅定印",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["施放冷却", "30秒"], ["次数", "5"]],
                "tab": ["伤害", "负面状态", "格挡条破坏1"],
                "sizeLevel": [
                    ["750%", "62%"],
                    ["863%", "71%"],
                    ["975%", "81%"],
                    ["1088%", "90%"],
                    ["1200%", "99%"],
                    ["1313%", "109%"],
                    ["1425%", "118%"],
                    ["1538%", "127%"],
                    ["1650%", "136%"],
                    ["1725%", "143%"],
                    ["1800%", "149%"],
                    ["1875%", "155%"],
                    ["1912%", "158%"],
                    ["1950%", "161%"],
                    ["1988%", "164%"]
                ],
                "content": [
                    "给自身施加禅定印，以自身为中心持续发出重力波，对半径:",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的物理伤害"),
                    "",
                    "之后对相同范围内的敌人每秒造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的物理伤害"),
                    "及破坏",
                    speSkillCon("1格挡值"),
                    "效果，持续",
                    speSkillCon("15"),
                    "秒",
                    "",
                    "处于防御姿态下，每次造成伤害时额外对敌人造成短暂",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "效果"
                ]
            }
        },
        {
            "name": "觉者降魔",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "负面状态"],
                "sizeLevel": [
                    ["1400%"],
                    ["1575%"],
                    ["1750%"],
                    ["1925%"],
                    ["2013%"],
                    ["2100%"]
                ],
                "content": [
                    "施展降魔印，对指定半径",
                    speSkillCon("600"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的物理伤害"),
                    "，并将他们以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "牵引向中心点"
                ]
            }
        },
        {
            "name": "特性：诸相皆空",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体"],
                "content": [
                    "对面前小范围挥拳造成",
                    speSkillCon("240%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可以在攻击姿态与防御姿态间切换，获得不同能力（初始处于攻击姿态）",
                        "",
                        "处于攻击姿态",
                        speSkillCon("10"),
                        "秒后，进入“忿怒相”状态，“忿怒相”下切换姿态会对周围",
                        speSkillCon("300"),
                        "范围的敌人造成",
                        speSkillCon("500%最终攻击的物理伤害"),
                        "并移除“忿怒相”",
                        "",
                        "处于防御姿态",
                        speSkillCon("10"),
                        "秒后，进入“寂境相”状态，“寂静相”下切换姿态会击晕周围",
                        speSkillCon("300"),
                        "范围敌人",
                        speSkillCon("6"),
                        "秒并移除“寂境相”"
                    ],//零花本体特性
                    [
                        "主动技能【禅定印】持续时间延长",
                        speSkillCon("5"),
                        "秒"
                    ],//一花特性
                    [
                        "不同姿态时获得的能力效果额外提升",
                        speSkillCon("20%")
                    ]//三花特性
                ]
            }
        }
    ],
    "唐路遥": [
        {
            "name": "压力上升中…",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "最大选敌数8", "对空"],//技能标签
                "sizeLevel": [
                    ["24%~40%", "15%"],
                    ["24%~40%", "17%"],
                    ["24%~40%", "20%"],
                    ["24%~40%", "22%"],
                    ["24%~40%", "24%"],
                    ["27%~45%", "26%"],
                    ["27%~45%", "29%"],
                    ["27%~45%", "31%"],
                    ["30%~50%", "33%"],
                    ["30%~50%", "35%"],
                    ["30%~50%", "36%"],
                    ["30%~50%", "38%"],
                    ["30%~50%", "39%"],
                    ["30%~50%", "40%"],
                    ["30%~50%", "40%"],
                ],
                "content": [
                    "主动",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "周围8名敌人攻击自己（优先",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "靠近自己的敌方单位），受",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "的目标对自身造成的伤害降低",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒，同时获得自身",
                    speSkillCon("", 0, -1, 1),
                    "最大生命值的护盾"
                ]//满级技能内容描述
            }
        },
        {
            "name": "理智崩断中…",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "-"], ["施放条件", "20愤怒值"]],
                "tab": ["伤害", "格挡条破坏3"],
                "sizeLevel": [
                    ["1050%"],
                    ["1208%"],
                    ["1365%"],
                    ["1523%"],
                    ["1680%"],
                    ["1838%"],
                    ["1995%"],
                    ["2153%"],
                    ["2310%"],
                    ["2415%"],
                    ["2520%"],
                    ["2625%"],
                    ["2678%"],
                    ["2730%"],
                    ["2783%"]
                ],
                "content": [
                    "每次普通攻击或者受击时积累:",
                    speSkillCon("1"),
                    "点",
                    speSkillCon("[愤怒值]", SkillColorEnum.normal, ToastSkillEnum.愤怒值),
                    "，",
                    speSkillCon("[愤怒值]", SkillColorEnum.normal, ToastSkillEnum.愤怒值),
                    "达",
                    speSkillCon("20"),
                    "点后对正前方扇形范围内所有敌方进行反复抽打，造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的物理伤害"),
                    "；若目标受到自身",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "效果影响，则受到的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，该伤害视为普通攻击伤害",
                    "",
                    "激活格挡能力时，对目标额外造成",
                    speSkillCon("100%"),
                    "格挡强度的物理伤害"
                ]
            }
        },
        {
            "name": "爱咋咋地吧！",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益"],
                "sizeLevel": [
                    ["45%", "60%", "4%"],
                    ["50%", "70%", "6%"],
                    ["55%", "80%", "8%"],
                    ["60%", "90%", "10%"],
                    ["60%", "95%", "10%"],
                    ["60%", "100%", "10%"],
                ],
                "content": [
                    "豪饮一瓶，对范围内的敌人总计造成",
                    speSkillCon("1500%最终攻击的物理伤害"),
                    "，之后攻击速度提升",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，格挡强度提升",
                    speSkillCon("", 0, -1, 1),
                    "且格挡值回复速度提升",
                    speSkillCon("100%"),
                    "，自身技能和特性产生的护盾额外提高",
                    speSkillCon("", 0, -1, 2),
                    "，积累",
                    speSkillCon("[愤怒值]", SkillColorEnum.normal, ToastSkillEnum.愤怒值),
                    "效率提升100%，持续",
                    speSkillCon("15"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：一天都不休？",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.59次每秒"]],
                "atType": ["单体"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("204%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "生命值低于",
                        speSkillCon("70%"),
                        "，激活格挡能力，且受到的治疗",
                        speSkillCon("50%"),
                        "转化为等额护盾，若15秒内未受到攻击，消耗技能和特性产生的所有护盾为唐路遥回复等额生命值，并退出格挡状态",
                        "",
                        "激活格挡能力时，自身技能和特性产生的护盾提升",
                        speSkillCon("20%"),
                        "，积累",
                        speSkillCon("[愤怒值]", SkillColorEnum.normal, ToastSkillEnum.愤怒值),
                        "效率提高",
                        speSkillCon("100%")
                    ],//零花本体特性
                    [
                        "激活格挡能力时，额外获得自身",
                        speSkillCon("40%"),
                        "最大生命值的护盾，且15秒内未受到攻击时，技能和特性产生的所有护盾不会消失"
                    ],//一花特性
                    [
                        "生命值低于",
                        speSkillCon("90%"),
                        "时激活格挡能力，且自身技能和特性产生的护盾提升至",
                        speSkillCon("30%")
                    ]//三花特性
                ]
            }
        }
    ],
    "豹富": [
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
    ],
    "尤尼": [
        {
            "name": "群浪的叹息",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "格挡条破坏3"],//技能标签
                "sizeLevel": [
                    ["350%", "1400%"],
                    ["403%", "1610%"],
                    ["455%", "1820%"],
                    ["508%", "2030%"],
                    ["560%", "2240%"],
                    ["613%", "2450%"],
                    ["665%", "2660%"],
                    ["718%", "2870%"],
                    ["770%", "3080%"],
                    ["805%", "3220%"],
                    ["840%", "3360%"],
                    ["875%", "3500%"],
                    ["910%", "3640%"],
                    ["945%", "3780%"],
                    ["980%", "3920%"]
                ],
                "content": [
                    "向自身前方",
                    speSkillCon("1000"),
                    "范围卷起海浪，海浪对每个敌方造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的水元素伤害"),
                    "，并附带破坏",
                    speSkillCon("3段格挡条"),
                    "效果；海浪对目标造成暴击时，使自身获得",
                    speSkillCon("2"),
                    "层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "效果。",
                    "",
                    "而后冲向目标位置，对半径",
                    speSkillCon("250"),
                    "范围内最多",
                    speSkillCon("3"),
                    "个敌人（优先精英及首领目标）造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的水元素伤害"),
                    "，并使目标基础减伤降低",
                    speSkillCon("50%"),
                    speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                    "（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "），对同一目标仅可施加一层该效果，尤尼离场或重伤时该效果消失。",
                    "",
                    "技能结束时额外获得",
                    speSkillCon("5"),
                    "层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑)
                ]//满级技能内容描述
            }
        },
        {
            "name": "海流的邀约",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "25秒"], ["次数", "3"]],
                "tab": ["水区域", "自身增益", "伤害", "格挡条破坏3"],
                "sizeLevel": [
                    ["600%", "1000%"],
                    ["690%", "1150%"],
                    ["780%", "1300%"],
                    ["870%", "1450%"],
                    ["960%", "1600%"],
                    ["1050%", "1750%"],
                    ["1140%", "1900%"],
                    ["1230%", "2050%"],
                    ["1320%", "2200%"],
                    ["1380%", "2300%"],
                    ["1440%", "2400%"],
                    ["1500%", "2500%"],
                    ["1560%", "2600%"],
                    ["1620%", "2700%"],
                    ["1680%", "2800%"]
                ],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒获得",
                    speSkillCon("5"),
                    "层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "效果",
                    "",
                    "主动：汇聚水流，以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "牵引自身周围半径",
                    speSkillCon("500"),
                    "的目标，造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的水元素伤害"),
                    "，并附带破坏",
                    speSkillCon("3段格挡条"),
                    "效果",
                    "",
                    "而后以水流冲击目标，形成",
                    speSkillCon("300"),
                    "半径范围的水元素区域，并造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的水元素伤害"),
                    "，对目标造成暴击时，使自身获得2层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "效果。",
                    "",
                    "技能结束时额外获得5层",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "效果。"
                ]
            }
        },
        {
            "name": "潮汐的盛宴",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["水区域", "伤害", "格挡条破坏3"],
                "sizeLevel": [
                    ["2400%"],
                    ["2800%"],
                    ["3200%"],
                    ["3600%"],
                    ["3800%"],
                    ["4000%"],
                ],
                "content": [
                    "对自身周围半径",
                    speSkillCon("750"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的水元素伤害"),
                    "，消耗自身",
                    speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                    "，每层使该伤害提升",
                    speSkillCon("0.6%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "。",
                    "",
                    "在每个友方同调者位置生成半径",
                    speSkillCon("150"),
                    "的水元素区域。",
                    "",
                    "为自身回复1次主动技能【海流的邀约】次数，并清空指令冷却时间。"
                ]
            }
        },
        {
            "name": "特性：晨光如常照耀",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体", "格挡条破坏1"],
                "content": [
                    "对身前半径",
                    speSkillCon("300"),
                    "范围的目标造成",
                    speSkillCon("150%最终攻击的水元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "尤尼处于水元素区域时暴击率增加",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "，且每",
                        speSkillCon("2"),
                        "秒回复",
                        speSkillCon("3%最大生命值"),
                        "。",
                        "",
                        "通过主动技能可获得",
                        speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                        "层数，异核技能【潮汐的盛宴】消耗",
                        speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                        "层数提升伤害。",
                        "",
                        speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑),
                        "层数上限",
                        speSkillCon("50"),
                        "。"
                    ],//零花本体特性
                    [
                        "主动技能【群浪的叹息】的伤害提升",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，且技能结束时额外获得",
                        speSkillCon("5"),
                        "层",
                        speSkillCon("[孤蓝的庇佑]", SkillColorEnum.normal, ToastSkillEnum.孤蓝的庇佑)
                    ],//一花特性
                    [
                        "尤尼在水元素区域时，自身暴击伤害提高",
                        speSkillCon("35%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                        "，并使除自身外的其他友方同调者提升",
                        speSkillCon("20%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "昊苍": [
        {
            "name": "破晓·血脉印记",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["炎区域", "伤害", "格挡条破坏3"],//技能标签
                "sizeLevel": [
                    ["1080%", "360%", "1380%", "216%"],
                    ["1242%", "414%", "1587%", "248%"],
                    ["1404%", "468%", "1794%", "281%"],
                    ["1566%", "522%", "2001%", "313%"],
                    ["1728%", "576%", "2208%", "346%"],
                    ["1890%", "630%", "2415%", "378%"],
                    ["2050%", "684%", "2622%", "410%"],
                    ["2214%", "738%", "2829%", "443%"],
                    ["2376%", "792%", "3036%", "475%"],
                    ["2484%", "828%", "3174%", "497%"],
                    ["2592%", "864%", "3312%", "518%"],
                    ["2700%", "900%", "3450%", "540%"],
                    ["2808%", "936%", "3588%", "562%"],
                    ["2916%", "972%", "3726%", "583%"],
                    ["3024%", "1008%", "3864%", "605%"]
                ],
                "content": [
                    speSkillCon("【破晓】技能形态", SkillColorEnum.injuries),
                    "",
                    "人形状态下可使用",
                    "",
                    "向前突进，对沿途敌人造成",
                    speSkillCon("100%最终攻击的炎元素伤害"),
                    "，到达目标位置后对半径",
                    speSkillCon("300"),
                    "范围内距离自身最近的一名敌方造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "并对其他敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，随后突进回初始位置",
                    "",
                    speSkillCon("【血脉印记】技能形态", SkillColorEnum.injuries),
                    "",
                    "「坎尼斯」状态下可使用",
                    "",
                    "向目标位置扔出武器，对半径",
                    speSkillCon("300"),
                    "范围内最多三名敌人造成",
                    speSkillCon("216%最终攻击的炎元素伤害"),
                    "，随后向前突进对沿途敌人造成",
                    speSkillCon("200%最终攻击的炎元素伤害"),
                    "，到达目标位置后对半径",
                    speSkillCon("300"),
                    "范围内距离自身最近的三名敌人总计造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并对其他敌人造成",
                    speSkillCon("", 0, -1, 3),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，随后突进回初始位置，对沿途敌人再次造成",
                    speSkillCon("200%最终攻击的炎元素伤害"),
                    "；突进和造成伤害时留下炎元素区域"
                ]//满级技能内容描述
            }
        },
        {
            "name": "猎风·呼啸",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["指令冷却", "15秒"], ["增益持续", "15秒"]],
                "tab": ["伤害", "自身增益"],
                "sizeLevel": [
                    ["15%", "20%"],
                    ["16%", "23%"],
                    ["17%", "26%"],
                    ["18%", "29%"],
                    ["19%", "32%"],
                    ["20%", "35%"],
                    ["21%", "38%"],
                    ["22%", "41%"],
                    ["24%", "44%"],
                    ["25%", "46%"],
                    ["27%", "48%"],
                    ["30%", "50%"],
                    ["31%", "52%"],
                    ["32%", "54%"],
                    ["34%", "56%"]
                ],
                "content": [
                    speSkillCon("【猎风】技能形态", SkillColorEnum.injuries),
                    "",
                    "人形状态下可使用",
                    "",
                    "自身暴击率提升",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒，期间普通攻击变为范围炎元素伤害，每次攻击额外造成",
                    speSkillCon("100%最终攻击的炎元素伤害"),
                    "",
                    speSkillCon("【呼啸】技能形态", SkillColorEnum.injuries),
                    "",
                    "「坎尼斯」状态下可使用",
                    "",
                    "自身暴击率提升",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "、暴击伤害提升",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒，期间普通攻击变为范围炎元素伤害，造成的伤害提升（提升幅度为目标当前生命值百分比，最高提升100%）"
                ]
            }
        },
        {
            "name": "无赦之罪",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "回复", "格挡条破坏3"],
                "sizeLevel": [
                    ["1800%"],
                    ["2100%"],
                    ["2400%"],
                    ["2700%"],
                    ["2850%"],
                    ["3000%"],
                ],
                "content": [
                    "从人形状态切换到「坎尼斯」状态",
                    "",
                    "对自身半径",
                    speSkillCon("600"),
                    "范围内的所有敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "，并根据命中敌方数量回复自身生命值，每命中一名敌方单位，回复自身",
                    speSkillCon("8%最大生命值"),
                    "，随后切换到「坎尼斯」形态，普通攻击变为炎元素伤害，",
                    speSkillCon("攻击速度：0.67次每秒"),
                    "，持续",
                    speSkillCon("30"),
                    "秒，每次发生暴击都会延长自身",
                    speSkillCon("2"),
                    "秒「坎尼斯」形态的持续时间",
                    "",
                    "使用后立即激活自动技能【呼啸】"
                ]
            }
        },
        {
            "name": "特性：原罪者",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.56次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("200%最终攻击的物理伤害"),
                    "",
                    "「坎尼斯」状态下的第三段普通攻击将挥出远程剑气，对沿途的敌人造成炎元素伤害；该状态下普通攻击命中目标有几率（同自身当前暴击率）触发犬爪幻影追击，造成",
                    speSkillCon("100%最终攻击的炎元素伤害"),
                    "，伤害随目标当前生命值百分比提升（最高提升100%）并回复自身",
                    speSkillCon("5%最大生命值")
                ],//普通攻击
                "specialContent": [
                    [
                        "登场异核充能增加50%",
                        "",
                        "不攻击时，每秒回复",
                        speSkillCon("1%最大生命值"),
                        "",
                        "人形：不攻击时，5秒后，进入格挡姿态，受到的伤害减免",
                        speSkillCon("80%"),
                        speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                        "「坎尼斯」形态：基础减伤增加",
                        speSkillCon("12%~20%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "；不攻击时，5秒后，下一次普通攻击将造成范围炎元素伤害，并在路径上留下炎元素区域"
                    ],//零花本体特性
                    [
                        "登场可立即施放异核技能，且异核技能【无赦之罪】冷却时间缩短",
                        speSkillCon("10"),
                        "秒"
                    ],//一花特性
                    [
                        "场上每有一名炎元素同调者（包含自己），昊苍的暴击率提升",
                        speSkillCon("5%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "、攻击力提升",
                        speSkillCon("5%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "【血脉印记】和【破晓·血脉印记】伤害提高",
                    speSkillCon("15%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        }
    ],
    "百里屠苏": [
        {
            "name": "祛邪",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益", "对空", "穿透屏障", "格挡条破坏2"],//技能标签
                "sizeLevel": [
                    ["300%", "400%", "1000%"],
                    ["346%", "460%", "1150%"],
                    ["390%", "520%", "1300%"],
                    ["436%", "580%", "1450%"],
                    ["480%", "640%", "1600%"],
                    ["526%", "700%", "1750%"],
                    ["570%", "760%", "1900%"],
                    ["616%", "820%", "2050%"],
                    ["660%", "880%", "2200%"],
                    ["690%", "920%", "2300%"],
                    ["720%", "960%", "2400%"],
                    ["750%", "1000%", "2500%"],
                    ["780%", "1040%", "2600%"],
                    ["810%", "1080%", "2700%"],
                    ["840%", "1120%", "2800%"],
                ],
                "content": [
                    speSkillCon("【祛邪】技能形态", SkillColorEnum.injuries),
                    "",
                    "非重明状态下可使用",
                    "",
                    "施放技能时",
                    speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                    "自身",
                    speSkillCon("50%"),
                    "当前生命值，获得",
                    speSkillCon("50%"),
                    "最大生命值的护盾和10层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "；对范围内的所有敌方地面单位共造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("体质的炎元素伤害"),
                    "，同时附带破坏",
                    speSkillCon("2段格挡条"),
                    "效果；且「梦中身」会同时造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("体质的炎元素伤害"),
                    "，并附带破坏",
                    speSkillCon("2段格挡条"),
                    "效果",
                    "",
                    speSkillCon("【祛邪·重明】技能形态", SkillColorEnum.injuries),
                    "",
                    "重明状态下可使用，该技能可攻击空中目标",
                    "",
                    "对范围内的所有敌方单位共造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("体质的炎元素伤害"),
                    "，同时附带破坏",
                    speSkillCon("5段格挡条"),
                    "效果，对当前生命值低于",
                    speSkillCon("50%"),
                    "的敌方单位伤害提",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "",
                    speSkillCon("【祛邪】", SkillColorEnum.injuries),
                    "的可使用技能次数与",
                    speSkillCon("【祛邪·重明】", SkillColorEnum.injuries),
                    "独立计算"
                ]//满级技能内容描述
            }
        },
        {
            "name": "灼见·毁殇",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
                "tab": ["伤害", "自身增益", "穿透屏障", "格挡条破坏2"],
                "sizeLevel": [
                    ["250%", "300%", "700%"],
                    ["288%", "345%", "805%"],
                    ["325%", "390%", "910%"],
                    ["363%", "435%", "1015%"],
                    ["400%", "480%", "1120%"],
                    ["438%", "525%", "1225%"],
                    ["475%", "570%", "1330%"],
                    ["513%", "615%", "1435%"],
                    ["550%", "660%", "1540%"],
                    ["575%", "690%", "1610%"],
                    ["600%", "720%", "1680%"],
                    ["625%", "750%", "1750%"],
                    ["650%", "780%", "1820%"],
                    ["675%", "810%", "1890%"],
                    ["700%", "840%", "1960%"],
                ],
                "content": [
                    speSkillCon("【毁殇】自动技能形态", SkillColorEnum.injuries),
                    speSkillCon("施放冷却：", SkillColorEnum.injuries),
                    speSkillCon("18"),
                    "秒",
                    "",
                    "非重明状态下可使用",
                    "",
                    "施放技能时",
                    speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                    "自身",
                    speSkillCon("25%"),
                    "当前生命值，获得",
                    speSkillCon("20%"),
                    "最大生命值的护盾和",
                    speSkillCon("8"),
                    "层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "；对自身前方半径",
                    speSkillCon("300"),
                    "扇形范围内所有敌方地面单位造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("体质的炎元素伤害"),
                    "，同时附带破坏",
                    speSkillCon("2段格挡条"),
                    "效果；且「梦中身」会同时造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("体质的炎元素伤害"),
                    "，并附带破坏",
                    speSkillCon("2段格挡条"),
                    "效果",
                    "",
                    speSkillCon("【毁殇·重明】自动技能形态", SkillColorEnum.injuries),
                    speSkillCon("施放冷却：", SkillColorEnum.injuries),
                    speSkillCon("18"),
                    "秒",
                    "",
                    "重明状态下可使用",
                    "",
                    "施放技能时不再",
                    speSkillCon("[损耗]", SkillColorEnum.normal, ToastSkillEnum.损耗),
                    "自身生命值，对自身前方半径",
                    speSkillCon("300"),
                    "扇形范围内所有敌方地面单位造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("体质的炎元素伤害"),
                    "，同时附带破坏",
                    speSkillCon("4段格挡条"),
                    "效果",
                    "",
                    "",
                    speSkillCon("【灼见】主动技能形态", SkillColorEnum.injuries),
                    "",
                    "非重明状态下可使用",
                    "",
                    "指挥「梦中身」冲刺到目标位置，并对冲刺路径上所有敌方地面单位造成",
                    speSkillCon("40%最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("50%体质的炎元素伤害")
                ]
            }
        },
        {
            "name": "业火重明",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "自身增益", "对空", "穿透屏障", "格挡条破坏3"],
                "sizeLevel": [
                    ["1500%"],
                    ["1750%"],
                    ["2000%"],
                    ["2250%"],
                    ["2375%"],
                    ["2500%"],
                ],
                "content": [
                    "仅非重明状态下可使用",
                    "",
                    "技能开启后会收回「梦中身」，对周围",
                    speSkillCon("800"),
                    "半径范围内所有敌方单位共造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("体质的炎元素伤害"),
                    "，并在技能释放时获得额外",
                    speSkillCon("50%"),
                    "当前",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "层数，通过该方式获得的石中火不受特性层数上限影响；随后进入持续",
                    speSkillCon("30"),
                    "秒的「重明」状态，状态持续期间，自身当前每有1层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "，提高",
                    speSkillCon("1%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "【毁殇·重明】伤害，「重明」状态结束时，失去自身所有",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "层数"
                ]
            }
        },
        {
            "name": "特性：焚焰血戮",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "225"], ["攻击速度", "0.55次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    speSkillCon("【非重明状态】技能形态", SkillColorEnum.injuries),
                    "",
                    "攻击当前目标造成",
                    speSkillCon("46%最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("46%体质的炎元素伤害"),
                    "，且「梦中身」会协同攻击造成",
                    speSkillCon("46%最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("46%体质的炎元素伤害"),
                    "",
                    speSkillCon("【重明状态】技能形态", SkillColorEnum.injuries),
                    "",
                    "攻击当前目标造成",
                    speSkillCon("138%最终攻击的炎元素伤害"),
                    "+",
                    speSkillCon("138%体质的炎元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "战斗开始时会召唤「梦中身」，「梦中身」视为召唤物，且会跟随本体施放部分技能",
                        "",
                        "本体施放部分技能会获得",
                        speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                        "层数（每层提升",
                        speSkillCon("1%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                        "基础攻击力；当生命值为100%时每层提升",
                        speSkillCon("0.15%"),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "基础减伤，随生命值比例降低基础减伤提升，当生命值为30%或以下时每层提升",
                        speSkillCon("0.5%"),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "基础减伤）",
                        "",
                        "本体普通攻击造成暴击时回复",
                        speSkillCon("1"),
                        "秒【毁殇】【毁殇·重明】施放冷却，该效果每2秒最多触发一次",
                        "",
                        "",
                        "整场战斗过程中，当本体累积减少的生命值达到最大生命值的一定比率时，会依次解封自身能力",
                        "",
                        "Ⅰ：比率达到",
                        speSkillCon("50%"),
                        "时解封，获得",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "暴击率提升",
                        "",
                        "Ⅱ：比率达到",
                        speSkillCon("100%"),
                        "时解封，获得",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                        "暴击伤害提升；且【业火重明】当前冷却时间减少",
                        speSkillCon("50"),
                        "秒，仅非重明状态可以触发，每场战斗最多触发一次",
                        "",
                        "Ⅲ：比率达到",
                        speSkillCon("150%"),
                        "时解封，【毁殇】【毁殇·重明】造成伤害时，自身每有1层",
                        speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                        "，忽略目标",
                        speSkillCon("1%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                        "基础减伤"
                    ],//零花本体特性
                    [
                        "重明状态结束后，获得",
                        speSkillCon("15"),
                        "层",
                        speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火)
                    ],//一花特性
                    [
                        "场上每有一名炎元素同调者（包含自己），百里屠苏造成的伤害提高",
                        speSkillCon("6%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "登场异核充能40秒，每层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "可获得0.5％",
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率和1.5％",
                    speSkillCon("（属性乘区·暴击伤害）"),
                    "暴击伤害且初始获得15层",
                    speSkillCon("[石中火]", SkillColorEnum.normal, ToastSkillEnum.石中火),
                    "，解封第Ⅲ重能力所需累积消耗的生命值降低一半"
                ]
            }
        }
    ],
    "米达斯": [
        {
            "name": "暗噬",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "格挡条破坏3"],//技能标签
                "content": [
                    speSkillCon("【暗噬】技能形态      指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("18"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "指挥「灾影」对",
                    speSkillCon("300"),
                    "范围内敌人造成",
                    speSkillCon("1800％最终攻击的物理伤害"),
                    "，并触发",
                    speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                    "",
                    "",
                    speSkillCon("【暗噬·归巢】技能形态    指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("10"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "当「灾影」处于「祸引」状态时，可以施放1次。",
                    "",
                    "「灾影」对目标区域",
                    speSkillCon("300"),
                    "范围内敌人造成",
                    speSkillCon("2600％最终攻击的物理伤害"),
                    "，并附加「苦痛涡核引爆」伤害。如果区域内有目标可以被拖拽，「灾影」会以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "将目标位置敌人拖拽到米达斯身边。",
                    "",
                    "「苦痛涡核引爆」：「灾影」对目标造成",
                    speSkillCon("1200％最终攻击的物理伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "沙啸",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "负面状态", "格挡条破坏3"],
                "content": [
                    "对自身周围",
                    speSkillCon("500"),
                    "范围内敌人造成",
                    speSkillCon("500％最终攻击的物理伤害"),
                    "，且「灾影」会同时造成",
                    speSkillCon("1500％最终攻击的物理伤害"),
                    "，并触发",
                    speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                    "效果",
                    "",
                    "技能释放结束后，受到伤害的敌人根据身上物理抗性降低效果的",
                    speSkillCon("60%"),
                    speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                    "获得受伤害增加效果，持续",
                    speSkillCon("60"),
                    "秒。（该效果在状态持续期间会随物理抗性效果动态变化，米达斯重伤或离场时该效果消失）"
                ]
            }
        },
        {
            "name": "灾渊来客",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["伤害", "自身增益", "格挡条破坏3"],
                "content": [
                    "指挥「灾影」对扇形区域内敌人造成",
                    speSkillCon("4000％最终攻击的物理伤害"),
                    "，并清空指令冷却时间。",
                    "",
                    "",
                    "使「灾影」进入持续18秒的「祸引」状态：可以施放1次「暗噬·归巢」，且「灾影」造成的所有伤害暴击时伤害提高",
                    speSkillCon("25%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "。"
                ]
            }
        },
        {
            "name": "特性：灾厄漩涡",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "对当前目标造成",
                    speSkillCon("80%最终攻击的物理伤害"),
                    "，且「灾影」会协同攻击造成",
                    speSkillCon("120%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "战斗开始时会召唤「灾影」，「灾影」视为召唤物米达斯的【暗噬】技能形态、【沙啸】技能会触发",
                        speSkillCon("[苦痛涡核]", SkillColorEnum.normal, ToastSkillEnum.苦痛涡核),
                        "效果：",
                        "",
                        "对敌人施加「苦痛涡核标记」，如果敌人已拥有「苦痛涡核标记」则消耗标记并造成「苦痛涡核引爆」伤害（受主动技能【暗噬】等级影响）。",
                        "",
                        "「苦痛涡核标记」不会随时间消失，米达斯重伤或离场时，标记消失。",
                        "",
                        "",
                        "当场上有物理同调者或属于同调者的召唤物造成伤害时，「灾影」会对伤害目标（优先精英及首领目标）追加一次",
                        speSkillCon("400%最终攻击的物理伤害"),
                        "，该效果每个同调者每",
                        speSkillCon("5"),
                        "秒最多触发1次。此伤害视为米达斯造成的召唤物伤害。"
                    ],//零花本体特性
                    [
                        "当「灾影」处于「祸引」状态时，米达斯可以额外施放",
                        speSkillCon("1"),
                        "次「暗噬·归巢」。",
                        "",
                        "「暗噬·归巢」的技能伤害和「苦痛涡核引爆」伤害提高",
                        speSkillCon("20%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "「灾影」造成的所有伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "十手卫": [
        {
            "name": "疾掠",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "10秒"], ["次数", "8"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "对空", "格挡条破坏2"],//技能标签
                "content": [
                    "释放「副影」对自身正前方矩形区域造成",
                    speSkillCon("300％最终攻击的风元素伤害"),
                    "，并回复",
                    speSkillCon("15%"),
                    "【破野】自动技能的冷却时间。「副影」会停留在区域末端并吹散半径",
                    speSkillCon("300"),
                    "范围的毒雾。",
                    "",
                    "「副影」持续",
                    speSkillCon("11"),
                    "秒，持续期间每秒会对「副影」半径",
                    speSkillCon("300"),
                    "范围造成",
                    speSkillCon("112％最终攻击的风元素伤害"),
                    "，持续时间结束额外造成",
                    speSkillCon("1792％最终攻击的风元素伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "破野",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
                "tab": ["伤害", "自身增益", "对空", "格挡条破坏3"],
                "content": [
                    "消耗“千风势”状态可施放，对选中区域半径",
                    speSkillCon("300"),
                    "范围造成",
                    speSkillCon("2800％最终攻击的风元素伤害"),
                    "，并使下一次释放的「副影」所有伤害提高",
                    speSkillCon("100％"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "",
                    "",
                    "自动技能：冷却时间",
                    speSkillCon("25"),
                    "秒，对自身正前方长",
                    speSkillCon("600"),
                    "矩形区域造成",
                    speSkillCon("2520％最终攻击的风元素伤害"),
                    "，并使自身进入“千风势”状态"
                ]
            }
        },
        {
            "name": "崔嵬",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "30秒"]],
                "tab": ["伤害", "对空", "格挡条破坏3"],
                "content": [
                    "对选中长",
                    speSkillCon("550"),
                    "的矩形区域造成",
                    speSkillCon("3500％最终攻击的风元素伤害"),
                    "，该伤害额外增加",
                    speSkillCon("50%"),
                    "暴击率，并忽略目标",
                    speSkillCon("40%"),
                    speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                    "基础减伤"
                ]
            }
        },
        {
            "name": "特性：秘传·朔风",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体", "格挡条破坏1"],
                "content": [
                    "对自身正前方长300范围内的矩形区域造成",
                    speSkillCon("200%最终攻击的风元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "风元素同调者施放主动技能/异核技能时会使当前场上存在的「副影」造成的伤害提高",
                        speSkillCon("8%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "，最多叠加3层"
                    ],//零花本体特性
                    [
                        "消耗“千风势”状态施放【破野】时，可额外使",
                        speSkillCon("1"),
                        "次释放的「副影」伤害提高。同时【疾掠】为【破野】回复的自动技能冷却提高至",
                        speSkillCon("40%")
                    ],//一花特性
                    [
                        "处于「副影」伤害区域的目标每隔2秒",
                        speSkillCon("以2级"),
                        speSkillCon("[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                        "向「副影」牵引，且受到的伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(目标减益乘区·目标受伤害增加)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                        "，受到十手卫的伤害额外提高",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "明月尘": [
        {
            "name": "速效麻醉",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "格挡条破坏3"],//技能标签
                "content": [
                    "向十字区域快速冲锋并生成针刺，对选中区域的敌人造成",
                    speSkillCon("4000%最终攻击的蚀元素伤害"),
                    "，并以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "将区域内的敌人拉向中心点，并为终端附加",
                    speSkillCon("20点蚀爆值"),
                    "，自身获得",
                    speSkillCon("20"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量。"
                ]//满级技能内容描述
            }
        },
        {
            "name": "善恶研判",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
                "tab": ["伤害", "自身增益", "负面状态", "格挡条破坏3"],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒，明月尘进入「刃血」状态，对自身周围",
                    speSkillCon("400"),
                    "范围的敌人造成",
                    speSkillCon("1500%最终攻击的蚀元素伤害"),
                    "，该状态下攻击速度提高",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "且每",
                    speSkillCon("2"),
                    "秒回复",
                    speSkillCon("4"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "能量（攻击速度提高会降低回复间隔，最低间隔",
                    speSkillCon("1"),
                    "秒），持续",
                    speSkillCon("15"),
                    "秒。 明月尘在「刃血」状态下，可以使用一次主动技能【善恶研判】",
                    "",
                    "主动：在自身周围划定",
                    speSkillCon("600"),
                    "范围的研判区域，对范围内的敌人造成",
                    speSkillCon("2000%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "，并附带破坏",
                    speSkillCon("3段格挡条"),
                    "效果。 研判区域持续",
                    speSkillCon("15"),
                    "秒，区域内的敌人受到的伤害提高",
                    speSkillCon("40%"),
                    speSkillCon("（[目标减益乘区·目标受伤害增加]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加),
                    "；明月尘在区域内造成伤害时，可以恢复自身",
                    speSkillCon("2%"),
                    "的生命值（累计不超过",
                    speSkillCon("30%"),
                    "的最大生命值）",
                    "",
                    "区域内的敌方单位死亡时，明月尘获得",
                    speSkillCon("2"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量，精英及以上单位死亡时获得",
                    speSkillCon("5"),
                    "点",
                    speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                    "的能量。",
                    "",
                    "研判区域同时只能存在一个。（明月尘重伤或离场时消失）"
                ]
            }
        },
        {
            "name": "死亡宣告",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["释放条件", "100血之祭坛"]],
                "tab": ["伤害", "格挡条破坏3"],
                "content": [
                    "对自身周围",
                    speSkillCon("750"),
                    "范围内的敌人造成其当前生命值",
                    speSkillCon("40%"),
                    "的",
                    speSkillCon("[真实伤害]", SkillColorEnum.normal, ToastSkillEnum.真实伤害),
                    "，首领单位受到的该伤害减少",
                    speSkillCon("70%"),
                    "。",
                    "",
                    "并额外对自身周围",
                    speSkillCon("750"),
                    "范围内的敌人造成",
                    speSkillCon("5000%最终攻击的蚀元素伤害"),
                    "，为终端附加",
                    speSkillCon("25点蚀爆值"),
                    "。"
                ]
            }
        },
        {
            "name": "特性：猎血者",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "400"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "向当前目标投掷帽子，对其造成",
                    speSkillCon("2200%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("3点蚀爆值")
                ],//普通攻击
                "specialContent": [
                    [
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "的能量上限为",
                        speSkillCon("100"),
                        "点，明月尘每次释放异核技能需要消耗",
                        speSkillCon("100"),
                        "点",
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "能量，不再需要消耗异核充能，当明月尘受到来自同调者的异核充能回复效果时，获得",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "攻击速度，持续40秒",
                        "",
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "能量不会自动回复，明月尘可通过技能效果获得",
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "能量。"
                    ],//零花本体特性
                    [
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "的能量上限提高至",
                        speSkillCon("200"),
                        "点，「刃血」状态下，持续回复的",
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "能量每次额外提高",
                        speSkillCon("4"),
                        "点；异核技能【死亡宣告】造成的伤害忽略目标",
                        speSkillCon("40%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                        "基础减伤"
                    ],//一花特性
                    [
                        "登场时获得",
                        speSkillCon("80"),
                        "点",
                        speSkillCon("[血之祭坛]", SkillColorEnum.normal, ToastSkillEnum.血之祭坛),
                        "的能量。研判区域内的敌人受到伤害提高效果提高至",
                        speSkillCon("100%"),
                        speSkillCon("（[目标减益乘区·目标受伤害增加]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加)
                    ]//三花特性
                ]
            }
        }
    ],
    "景": [
        {
            "name": "罚罪",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "1秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益", "格挡条破坏3"],//技能标签
                "content": [
                    "进入持续",
                    speSkillCon("35"),
                    "秒的「守誓」状态并对自身周围",
                    speSkillCon("500"),
                    "半径造成",
                    speSkillCon("2000%最终攻击的雷元素伤害"),
                    "，回复异核充能",
                    speSkillCon("15"),
                    "秒并回复所有【断恶】技能次数，该状态下自身暴击率提高",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "",
                    "已在「守誓」状态下时无法施展【罚罪】，且「守誓」状态结束后",
                    speSkillCon("10"),
                    "秒内无法再次施放"
                ]//满级技能内容描述
            }
        },
        {
            "name": "断恶",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "2"]],
                "tab": ["伤害", "自身增益", "格挡条破坏3"],
                "content": [
                    "自动技能：冷却时间",
                    speSkillCon("12"),
                    "秒，对目标周围半径",
                    speSkillCon("250"),
                    "范围造成",
                    speSkillCon("1600%最终攻击的雷元素伤害"),
                    "",
                    "",
                    "主动技能：仅在「守誓」状态下可施放，对半径",
                    speSkillCon("300"),
                    "范围造成",
                    speSkillCon("4000%最终攻击的雷元素伤害"),
                    "，且下",
                    speSkillCon("6"),
                    "次普通攻击的攻击速度提升",
                    speSkillCon("200%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，并回复异核充能",
                    speSkillCon("10"),
                    "秒"
                ]
            }
        },
        {
            "name": "辉光殿堂",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "对空", "格挡条破坏3"],
                "content": [
                    "对自身半径",
                    speSkillCon("800"),
                    "范围内所有敌方造成",
                    speSkillCon("3500%最终攻击的雷元素伤害"),
                    "，同时获得",
                    speSkillCon("12"),
                    "层",
                    speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                    "",
                    speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                    "：「守誓」状态下自身普通攻击时，消耗1层",
                    speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                    "对目标及周围半径",
                    speSkillCon("250"),
                    "范围地面敌方单位造成相当于自动技能伤害的",
                    speSkillCon("25%"),
                    "（该伤害视为异核技能伤害）。",
                    "",
                    "若【罚罪】次数耗尽，则非「守誓」状态下的普通攻击也会触发",
                    speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身)
                ]
            }
        },
        {
            "name": "特性：裁决权柄",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "300"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体"],
                "content": [
                    "对选中目标造成",
                    speSkillCon("200%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "自身在场时使场上敌方雷元素抗性降低",
                        speSkillCon("15%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，且自身所有伤害忽略目标基础减伤，数值为目标身上雷元素抗性降低效果的",
                        speSkillCon("40%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "异核技能获得的",
                        speSkillCon("[荣耀加身]", SkillColorEnum.normal, ToastSkillEnum.荣耀加身),
                        "层数提高",
                        speSkillCon("6"),
                        "层，且【断恶】技能冷却时间降低至",
                        speSkillCon("10"),
                        "秒，次数增加",
                        speSkillCon("1"),
                        "次"
                    ],//一花特性
                    [
                        "「守誓」状态下暴击时伤害提高",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，且「守誓」状态下特性中忽略目标基础减伤的数值提升至雷元素抗性降低效果的",
                        speSkillCon("80%")
                    ]//三花特性
                ]
            }
        }
    ],
    "耶芙娜": [
        {
            "name": "王廷盛典",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["霜区域", "负面状态", "伤害", "格挡条破坏3"],//技能标签
                "content": [
                    "对前方“X”区域造成总计",
                    speSkillCon("1000%最终攻击的霜元素伤害"),
                    "+",
                    speSkillCon("1000%专精的霜元素伤害"),
                    "，位于“X”交叉处的敌人将受到两次伤害并额外附加",
                    speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                    "效果在“潮湿”环境下，“X”区域可直接产生霜区域"
                ]//满级技能内容描述
            }
        },
        {
            "name": "王廷雪域",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "自身增益", "对空", "格挡条破坏1"],
                "content": [
                    "制造缓慢前进的霜龙卷，每秒对沿途敌人造成",
                    speSkillCon("470%最终攻击的霜元素伤害"),
                    "+",
                    speSkillCon("470%专精的霜元素伤害"),
                    "",
                    "若命中",
                    speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                    "状态的目标，则立即触发",
                    speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                    "的伤害效果，并使该次",
                    speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                    "效果的伤害提升",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，有效半径增加",
                    speSkillCon("50%"),
                    "",
                    "霜龙卷每次造成伤害时，使自身获得「雪域」状态：专精值提升",
                    speSkillCon("10%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("5"),
                    "秒，最多可叠加",
                    speSkillCon("5"),
                    "次"
                ]
            }
        },
        {
            "name": "她的落幕",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["霜区域", "自身增益", "伤害", "对空", "格挡条破坏3"],
                "content": [
                    "对自身周围半径",
                    speSkillCon("750"),
                    "范围内的所有敌人造成",
                    speSkillCon("2500%最终攻击的霜元素伤害"),
                    "+",
                    speSkillCon("2500%专精的霜元素伤害"),
                    "，并使处于",
                    speSkillCon("[渐霜]", SkillColorEnum.normal, ToastSkillEnum.渐霜),
                    "状态的敌人强制进入",
                    speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                    "状态",
                    "",
                    "施展后自身专精值提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "在“潮湿”环境下，可直接在目标位置产生霜区域"
                ]
            }
        },
        {
            "name": "特性：海尔维格之名",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "600"], ["攻击速度", "0.42次每秒"]],
                "atType": ["群体", "格挡条破坏1"],
                "content": [
                    "产生霜刃，对直线范围内的敌人造成",
                    speSkillCon("200%最终攻击的霜元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "自身普通攻击和技能对目标造成伤害后对其附加",
                        speSkillCon("[渐霜]", SkillColorEnum.normal, ToastSkillEnum.渐霜),
                        "状态，",
                        speSkillCon("2"),
                        "秒内若目标被击败则会被冻结进入",
                        speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                        "状态（首领级别敌人阵亡后不会触发",
                        speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                        "效果），短暂延迟后对周围敌人造成",
                        speSkillCon("200%专精的霜元素伤害"),
                        "并使耶芙娜基础减伤增加",
                        speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("5"),
                        "秒（",
                        speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                        "伤害的有效半径随目标体型增加）"
                    ],//零花本体特性
                    [
                        speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                        "的伤害提升",
                        speSkillCon("50%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，同时附带破坏",
                        speSkillCon("1段格挡条"),
                        "效果"
                    ],//一花特性
                    [
                        "攻击",
                        speSkillCon("[永霜]", SkillColorEnum.normal, ToastSkillEnum.永霜),
                        "或",
                        speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
                        "目标时，忽略其",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                        "的减伤"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "【王廷雪域】的「雪域」状态持续时间延长至10秒，霜龙卷每次命中叠加2层「雪域」且额外触发1次永霜的伤害效果"
                ]
            }
        }
    ],
    "无咎": [
        {
            "name": "唳火",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["炎区域", "伤害", "穿透屏障", "格挡条破坏3"],//技能标签
                "content": [
                    "对指定目标点半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("1875%最终攻击的炎元素伤害"),
                    "，以",
                    speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退目标，并生成炎元素区域",
                    "",
                    "被命中的目标将会附着",
                    speSkillCon("[火羽燃烧]", SkillColorEnum.normal, ToastSkillEnum.火羽燃烧),
                    "，每秒受到",
                    speSkillCon("25%最终攻击的炎元素伤害"),
                    "，持续",
                    speSkillCon("5"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "燎野",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "对空", "格挡条破坏1"],
                "content": [
                    "对自身周围半径",
                    speSkillCon("250"),
                    "范围内的敌人造成",
                    speSkillCon("1500%最终攻击的炎元素伤害"),
                    "，并制造5个螺旋运动的火龙卷，对沿途触碰到的敌人造成",
                    speSkillCon("375%最终攻击的炎元素伤害")
                ]
            }
        },
        {
            "name": "炽焰狂潮",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"]],
                "tab": ["伤害", "破空", "格挡条破坏3"],
                "content": [
                    "对半径",
                    speSkillCon("500"),
                    "范围内的敌人总计造成",
                    speSkillCon("6300%最终攻击的炎元素伤害")
                ]
            }
        },
        {
            "name": "特性：奋羽",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.55次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("220%最终攻击的炎元素伤害"),
                    "",
                    "近战范围没有敌人时，向远处敌人踢出打火机对其范围",
                    speSkillCon("100"),
                    "内的敌人造成",
                    speSkillCon("90%最终攻击的炎元素伤害"),
                    "（远程攻击不附带格挡条破坏效果）"
                ],//普通攻击
                "specialContent": [
                    [
                        "施放任意技能后自身获得火羽盾，基础减伤增加",
                        speSkillCon("6%~10%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "，攻击速度提升",
                        speSkillCon("100%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("5"),
                        "秒",
                        "",
                        "涅槃：当自身陷入危机时，立即解除自身的",
                        speSkillCon("[控制效果]", SkillColorEnum.normal, ToastSkillEnum.控制效果),
                        "，回复自身全部生命值，同时对自身范围",
                        speSkillCon("350"),
                        "内的敌人造成",
                        speSkillCon("2000%最终攻击的炎元素伤害"),
                        "，并留下炎元素区域，在随后的",
                        speSkillCon("5"),
                        "秒内免疫所有伤害（仅限一次）"
                    ],//零花本体特性
                    [
                        "自动技能【燎原】、异核技能【炽焰狂潮】命中目标可使其附着",
                        speSkillCon("[火羽燃烧]", SkillColorEnum.normal, ToastSkillEnum.火羽燃烧),
                        "",
                        "触发“涅槃”后，立即回复一次主动技能【唳火】技能次数及自动技能【燎野】的冷却时间"
                    ],//一花特性
                    [
                        "攻击处于",
                        speSkillCon("[灼烧]", SkillColorEnum.normal, ToastSkillEnum.灼烧),
                        "状态下的敌人，额外提高",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "暴击率，",
                        speSkillCon("30%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                        "暴击伤害"
                    ]//三花特性
                ]
            }
        }
    ],
    "比戈尼娅": [
        {
            "name": "长哭",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "穿透屏障", "格挡条破坏1"],//技能标签
                "content": [
                    "挥出长鞭重击地面，对范围内的所有敌方地面单位造成",
                    speSkillCon("1500%最终攻击的霜元素伤害"),
                    "，并减少命中单位",
                    speSkillCon("60%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，持续",
                    speSkillCon("5"),
                    "秒，每命中一个敌方单位回复",
                    speSkillCon("6"),
                    "点",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                    "",
                    "被命中的所有敌方地面单位会以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "牵引向技能范围"
                ]//满级技能内容描述
            }
        },
        {
            "name": "子夜啼",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["指令冷却", "-"], ["施放条件", "100血食"]],
                "tab": ["伤害", "持续施法", "格挡条破坏1"],
                "content": [
                    "消耗所有",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                    "，在",
                    speSkillCon("8"),
                    "秒内持续对自身周围随机",
                    speSkillCon("250"),
                    "范围内的敌方地面单位造成总计",
                    speSkillCon("5000%最终攻击的霜元素伤害"),
                    "",
                    "如果自身周围只有一名敌方地面单位，则该技能造成的伤害提升",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "",
                    "该技能施放的持续时间内，自身受到的所有伤害额外减少",
                    speSkillCon("18%~30%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "狂欢夜",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "负面状态", "持续施法", "格挡条破坏1"],
                "content": [
                    "技能持续",
                    speSkillCon("21"),
                    "秒，期间不会被优先攻击，释放众多伤魂鸟，攻击目标半径",
                    speSkillCon("400"),
                    "范围内所有敌方单位共造成",
                    speSkillCon("4800%最终攻击的霜元素伤害"),
                    "；处于技能范围内的所有敌方单位降低",
                    speSkillCon("70%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "",
                    "其他霜元素友方同调者对范围内的敌方造成暴击后，会额外对该目标造成",
                    speSkillCon("240%最终攻击的霜元素伤害"),
                    "",
                    "伤魂鸟会吸收该范围内阵亡敌方单位，每次吸收回复自身",
                    speSkillCon("8"),
                    "点",
                    speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食)
                ]
            }
        },
        {
            "name": "特性：星之飨",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "350"], ["攻击速度", "0.62次每秒"]],
                "atType": ["群体", "格挡条破坏1"],
                "content": [
                    "先向当前目标挥击长鞭造成",
                    speSkillCon("182%最终攻击的霜元素伤害"),
                    "，再向前方刺出长鞭造成矩形范围",
                    speSkillCon("91%最终攻击的霜元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "伤魂鸟视为召唤物",
                        "",
                        "普通攻击将回复",
                        speSkillCon("3"),
                        "点",
                        speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                        "，且场上每存在一个除自身外的其他友方同调者都会额外回复",
                        speSkillCon("1"),
                        "点",
                        speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                        "。",
                        "",
                        "普通攻击时伤魂鸟吸取场上除自身外其他友方同调者",
                        speSkillCon("5%"),
                        "当前生命值，并使该友方同调者获得",
                        speSkillCon("5%"),
                        speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                        "基础攻击速度提升，每",
                        speSkillCon("5"),
                        "最多触发一次该效果",
                        "",
                        "每个友方同调者最多通过该方式获得",
                        speSkillCon("30%"),
                        speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                        "基础攻击速度的提升，该效果持续整场战斗"
                    ],//零花本体特性
                    [
                        "友方同调者通过特性获得的最大基础攻击速度提升至",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "友方同调者因被吸取",
                        speSkillCon("[血食]", SkillColorEnum.normal, ToastSkillEnum.血食),
                        "获得攻击速度提升时，每1%攻击速度提升会同时使友方同调者造成的霜元素伤害额外提高",
                        speSkillCon("1%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "白鸟梓": [
        {
            "name": "燕返",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "最大选敌数3", "对空", "格挡条破坏3"],//技能标签
                "content": [
                    "优先选取范围内生命值最高的敌人（生命值相同时将优先选取有格挡条的目标），造成",
                    speSkillCon("5000%最终攻击的风元素伤害"),
                    "，每额外选取一个单位，伤害降低",
                    speSkillCon("20%"),
                    "，最多选取3个目标"
                ]//满级技能内容描述
            }
        },
        {
            "name": "极意",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
                "tab": ["自身增益"],
                "content": [
                    "触发期间，普通攻击伤害提升",
                    speSkillCon("100%"),
                    "且变为风元素伤害，暴击率提升",
                    speSkillCon("35%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，暴击伤害提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒",
                    "",
                    "施放主动技能【燕返】时将立即触发自动技能【极意】效果"
                ]
            }
        },
        {
            "name": "居合斩",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "对空", "格挡条破坏3"],
                "content": [
                    "对指定区域内的敌方目标总计造成",
                    speSkillCon("4500%最终攻击的风元素伤害")
                ]
            }
        },
        {
            "name": "特性：风切羽",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.67次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("180%最终攻击的物理伤害"),
                    "",
                    "近战范围没有敌人时，向前方施放一道剑气波，对沿途的敌人造成",
                    speSkillCon("50%最终攻击的物理伤害"),
                    "(远程攻击不附带格挡条破坏效果)"
                ],//普通攻击
                "specialContent": [
                    [
                        "普通攻击、施放主动技能会凝聚1层风之力，10层后产生持续",
                        speSkillCon("3"),
                        "秒的“风之盾”，抵挡下次受到的伤害；“风之盾”消失时，对半径",
                        speSkillCon("250"),
                        "范围内的敌人造成",
                        speSkillCon("380%最终攻击的风元素伤害"),
                        "",
                        "施放5次主动技能【燕返】后将永久获得自动技能【极意】效果"
                    ],//零花本体特性
                    [
                        "施放",
                        speSkillCon("4"),
                        "次主动技能【燕返】后将永久获得自动技能【极意】效果"
                    ],//一花特性
                    [
                        "“风之盾”受击不消失，抵挡期间受到的所有伤害；消失时额外破坏伤害范围内敌人",
                        speSkillCon("2段格挡条")
                    ]//三花特性
                ]
            }
        }
    ],
    "霍冉": [
        {
            "name": "警告！路牌！",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "最大选敌数1", "格挡条破坏3"],//技能标签
                "content": [
                    "对单个目标造成",
                    speSkillCon("4500%最终攻击的炎元素伤害"),
                    "，该次伤害附带",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "额外暴击率提升，并使其",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "，持续",
                    speSkillCon("6"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "横扫街头",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "格挡条破坏2"],
                "content": [
                    "对当前目标进行三连击，总计造成",
                    speSkillCon("3750%最终攻击的炎元素伤害")
                ]
            }
        },
        {
            "name": "无名怒火",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["自身增益"],
                "content": [
                    "增加自身",
                    speSkillCon("120%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "攻击力，",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率，",
                    speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    "基础减伤，普通攻击变为炎元素伤害，持续",
                    speSkillCon("30"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：无畏",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.62次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "用路牌挥砍面前的目标，对其造成",
                    speSkillCon("192%最终攻击的物理伤害"),
                    "",
                    "近战范围没有敌人时，向远处目标扔出路牌，对敌人造成",
                    speSkillCon("96%最终攻击的物理伤害"),
                    "（远程攻击不附带格挡条破坏效果）"
                ],//普通攻击
                "specialContent": [
                    [
                        "拥有较强的单体输出能力",
                        "",
                        "优先攻击精英及以上的敌方单位，造成的伤害总计提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，受到的伤害总计降低",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "主动技能【警告！路牌！】破坏敌方单位格挡能力大幅提高，额外提高",
                        speSkillCon("3段格挡条"),
                        "破坏"
                    ],//一花特性
                    [
                        "暴击率提升",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "马尔斯": [
        {
            "name": "E.M.P干扰",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["负面状态", "对空", "屏障破坏", "格挡条破坏3"],//技能标签
                "content": [
                    "对半径",
                    speSkillCon("400"),
                    "范围内的敌方造成",
                    speSkillCon("750%最终攻击的雷元素伤害"),
                    "，并使其雷元素抗性降低",
                    speSkillCon("25%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，持续",
                    speSkillCon("15"),
                    "秒，同时破坏范围内的敌方防御屏障",
                    "",
                    "范围内机械飞行单位将会被击落，马尔斯会优先攻击被击落的单位",
                    "",
                    "使用后立即激活自动技能【导电模块】"
                ]//满级技能内容描述
            }
        },
        {
            "name": "导电模块",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "20秒"], ["增益持续", "15秒"]],
                "tab": ["自身增益"],
                "content": [
                    "激活时普通攻击变为雷元素伤害，普通攻击伤害提升",
                    speSkillCon("190"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                    "，基础攻击速度提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("15"),
                    "秒"
                ]
            }
        },
        {
            "name": "电磁海啸",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "对空", "穿透屏障", "格挡条破坏3"],
                "content": [
                    "对一条直线上的敌人造成",
                    speSkillCon("4800%最终攻击的雷元素伤害"),
                    "，可命中空中目标"
                ]
            }
        },
        {
            "name": "特性：机械强攻",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.90次每秒"]],
                "atType": ["单体", "格挡条破坏1"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("133%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "技能可以命中空中目标",
                        "",
                        "对机械单位造成伤害提升",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "每次击败敌人将会获得作战数据，基础攻击力增加",
                        speSkillCon("3%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                        "，可叠加",
                        speSkillCon("20"),
                        "次"
                    ],//一花特性
                    [
                        "攻击机械单位时，暴击伤害提高",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "Sweeper-EX": [
        {
            "name": "吸尘模式",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "格挡条破坏3"],//技能标签
                "content": [
                    "攻击半径",
                    speSkillCon("325"),
                    "范围内的敌人，总计造成",
                    speSkillCon("2500%最终攻击的物理伤害"),
                    "，并以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "造成牵引效果"
                ]//满级技能内容描述
            }
        },
        {
            "name": "急速模式",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "30秒"], ["增益持续", "20秒"]],
                "tab": ["自身增益"],
                "content": [
                    "攻击速度提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，普通攻击伤害提升",
                    speSkillCon("125%"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "技能效果结束后进入瘫痪状态，攻击速度、普通攻击伤害降低",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·攻击速度；增伤乘区·技能增伤）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("10"),
                    "秒"
                ]
            }
        },
        {
            "name": "大扫除模式",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "格挡条破坏3"],
                "content": [
                    "对半径",
                    speSkillCon("500"),
                    "范围内的敌方单位总计造成",
                    speSkillCon("6000%最终攻击的水元素伤害")
                ]
            }
        },
        {
            "name": "特性：小心地滑",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.67次每秒"]],
                "atType": ["单体"],
                "content": [
                    "对面前的目标持续挥砍鸡毛掸子造成",
                    speSkillCon("108%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "异核技能可以造成水元素伤害"
                    ],//零花本体特性
                    [
                        "暴击率提高",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "暴击率再提高",
                        speSkillCon("15%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "玄戈": [
        {
            "name": "御厄",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "对空", "穿透屏障"],//技能标签
                "content": [
                    speSkillCon("【御厄】技能形态指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("15"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "在目标区域创造空间裂缝，对",
                    speSkillCon("450"),
                    "范围内的敌人造成",
                    speSkillCon("2352％最终攻击的物理伤害"),
                    "",
                    "【连击】：获得",
                    speSkillCon("2"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "",
                    "",
                    speSkillCon("【荡厄】技能形态指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("10"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "激活后可以使用",
                    speSkillCon("2"),
                    "次",
                    "",
                    "在目标区域创造空间裂缝，对",
                    speSkillCon("450"),
                    "范围内的敌人造成",
                    speSkillCon("4480％最终攻击的物理伤害"),
                    "",
                    "【连击】：回复",
                    speSkillCon("15"),
                    "秒的异核充能"
                ]//满级技能内容描述
            }
        },
        {
            "name": "纵略黑白",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
                "tab": ["自身增益"],
                "content": [
                    "提高自身暴击率",
                    speSkillCon("45%"),
                    speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                    "、暴击伤害",
                    speSkillCon("90%"),
                    speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                    "，且获得",
                    speSkillCon("1"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "",
                    "当玄戈在增益持续期间，下一次【游徒】、【筑术师】、【战术家】职业的友方同调者使用主动技能时，玄戈会触发【璨星】效果，获得",
                    speSkillCon("2"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星)
                ]
            }
        },
        {
            "name": "抑扬话事",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "拦截", "对空", "穿透屏障"],
                "content": [
                    "对",
                    speSkillCon("500"),
                    "范围内的敌人造成",
                    speSkillCon("5000％最终攻击的物理伤害"),
                    "，可以摧毁范围内的投射物，且获得",
                    speSkillCon("3"),
                    "个",
                    speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                    "",
                    "技能释放结束后，受到伤害的敌人在接下来的",
                    speSkillCon("60"),
                    "秒内，受到【御厄】、【荡厄】的伤害提高",
                    speSkillCon("25％"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "特性：破而后立",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "对当前目标造成",
                    speSkillCon("200％最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "自身施放【御厄】、【纵略黑白】和【抑扬话事】可获得",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "",
                        "当获得",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "数量达到",
                        speSkillCon("5"),
                        "个时，会激活【荡厄】。在释放",
                        speSkillCon("2"),
                        "次【荡厄】后，恢复到【御厄】技能形态",
                        "",
                        "当获得",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "数量大于",
                        speSkillCon("5"),
                        "个时，会保留剩余的",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "，保留的",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "的数量上限是",
                        speSkillCon("5"),
                        "个",
                        "",
                        "",
                        "登场时获得",
                        speSkillCon("[同调]", SkillColorEnum.normal, ToastSkillEnum.同调),
                        "效果"
                    ],//零花本体特性
                    [
                        "登场时，异核充能",
                        speSkillCon("45"),
                        "秒，【纵略黑白】充能",
                        speSkillCon("15"),
                        "秒，且释放异核技能【抑扬话事】额外获得",
                        speSkillCon("2"),
                        "个",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星),
                        "。【御厄】、【荡厄】造成的伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "【御厄】、【荡厄】造成伤害时忽略敌人减伤",
                        speSkillCon("40%"),
                        speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                        "。当玄戈在【纵略黑白】增益持续期间，下一次【游徒】、【筑术师】、【战术家】职业的队友使用主动技能时，玄戈触发【璨星】效果时，会额外获得",
                        speSkillCon("2"),
                        "个",
                        speSkillCon("[璨星]", SkillColorEnum.normal, ToastSkillEnum.璨星)
                    ]//三花特性
                ]
            }
        }
    ],
    "茜茜": [
        {
            "name": "絮语弥响",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "12秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "对空"],//技能标签
                "sizeLevel": [
                    ["1000%", "1500%"],
                    ["1150%", "1725%"],
                    ["1300%", "1950%"],
                    ["1450%", "2175%"],
                    ["1600%", "2400%"],
                    ["1750%", "2625%"],
                    ["1900%", "2850%"],
                    ["2050%", "3075%"],
                    ["2200%", "3300%"],
                    ["2300%", "3450%"],
                    ["2400%", "3600%"],
                    ["2500%", "3750%"],
                    ["2600%", "3900%"],
                    ["2700%", "4050%"],
                    ["2800%", "4200%"]
                ],
                "content": [
                    "茜茜指挥奈奥格对选中范围施放技能，不同形态下奈奥格技能效果不同：",
                    "",
                    speSkillCon("【幽语者】形态4次指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("12"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "对目标区域圆形半径",
                    speSkillCon("350"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "，生成",
                    speSkillCon("40"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "。若次数耗尽，则该形态普通攻击会生成",
                    speSkillCon("10"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "",
                    "【连击】：回复",
                    speSkillCon("5"),
                    "秒自动技能冷却",
                    "",
                    "",
                    speSkillCon("【吞蚀者】形态6次指令冷却：", SkillColorEnum.injuries),
                    speSkillCon("15"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "奈奥格对自身正前方长",
                    speSkillCon("1000"),
                    "矩形范围内的敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "，消耗",
                    speSkillCon("20"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "，并为终端附加",
                    speSkillCon("20点蚀爆值"),
                    "。若次数耗尽，则该形态普通攻击会消耗",
                    speSkillCon("10"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "",
                    "【连击】：造成的伤害提升",
                    speSkillCon("20%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                ]//满级技能内容描述
            }
        },
        {
            "name": "倾耳呓呓",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "对空"],
                "sizeLevel": [
                    ["1600%", "1800%"],
                    ["1840%", "2070%"],
                    ["2080%", "2340%"],
                    ["2320%", "2610%"],
                    ["2560%", "2880%"],
                    ["2800%", "3150%"],
                    ["3040%", "3420%"],
                    ["3280%", "3690%"],
                    ["3520%", "3960%"],
                    ["3680%", "4140%"],
                    ["3840%", "4320%"],
                    ["4000%", "4500%"],
                    ["4160%", "4680%"],
                    ["4320%", "4860%"],
                    ["4480%", "5040%"]
                ],
                "content": [
                    "茜茜指挥奈奥格施放技能，处于不同形态下时奈奥格技能效果不同：",
                    "",
                    speSkillCon("【幽语者】形态自动技能冷却：", SkillColorEnum.injuries),
                    speSkillCon("15"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "奈奥格对自身周围半径",
                    speSkillCon("450"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "，生成",
                    speSkillCon("20"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "，并为终端附加",
                    speSkillCon("20点蚀爆值"),
                    "",
                    "",
                    speSkillCon("【吞蚀者】形态自动技能冷却：", SkillColorEnum.injuries),
                    speSkillCon("15"),
                    speSkillCon("秒", SkillColorEnum.injuries),
                    "",
                    "奈奥格对自身周围半径",
                    speSkillCon("450"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的蚀元素伤害"),
                    "，消耗",
                    speSkillCon("20"),
                    "点",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "，并为终端附加",
                    speSkillCon("25点蚀爆值")
                ]
            }
        },
        {
            "name": "童言有妄",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["释放条件", "100腐淖"]],
                "tab": ["自身增益", "拦截", "对空"],
                "sizeLevel": [
                    ["24%", "150%"],
                    ["28%", "175%"],
                    ["32%", "200%"],
                    ["36%", "225%"],
                    ["38%", "238%"],
                    ["40%", "250%"],
                ],
                "content": [
                    "茜茜",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "达到",
                    speSkillCon("100"),
                    "点时，使奈奥格进入",
                    speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                    "，并拦截茜茜周围",
                    speSkillCon("1000"),
                    "半径范围内投射物。此时施放主动和自动技能会消耗",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "，",
                    speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                    "消耗完时退出",
                    speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                    "。该形态下奈奥格伤害提高",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "，且茜茜使全场敌对目标蚀元素抗性降低",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "（离场或死亡效果消失）。",
                    "",
                    "若【絮语弥响】次数耗尽，",
                    speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                    "下奈奥格普通攻击伤害提高",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "特性：于迷雾中降临",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.32次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "茜茜持续引导奈奥格攻击目标，奈奥格处于不同形态下攻击效果不同，并为终端附加",
                    speSkillCon("3点蚀爆值"),
                    "",
                    speSkillCon("【幽语者】形态", SkillColorEnum.injuries),
                    "：对当前单体目标造成",
                    speSkillCon("317％最终攻击的蚀元素伤害"),
                    "",
                    speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                    "：对奈奥格身前半径",
                    speSkillCon("450"),
                    "扇形范围目标造成",
                    speSkillCon("317％最终攻击的蚀元素伤害"),
                ],//普通攻击
                "specialContent": [
                    [
                        "茜茜指挥奈奥格进行战斗，奈奥格视为召唤物。敌对目标的大部分技能会优先攻击奈奥格，两者共享生命值且最大生命值提高",
                        speSkillCon("30%"),
                        "，同时受到的范围伤害降低",
                        speSkillCon("50%"),
                        "。奈奥格各个属性与茜茜相同。",
                        "",
                        speSkillCon("【幽语者】形态", SkillColorEnum.injuries),
                        "，茜茜暴击率提高",
                        speSkillCon("20%"),
                        speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                        "",
                        speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                        "，茜茜暴击率提高",
                        speSkillCon("30%"),
                        speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                        "，暴击伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "奈奥格进入",
                        speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                        "时，所有",
                        speSkillCon("[腐淖]", SkillColorEnum.normal, ToastSkillEnum.腐淖),
                        "消耗降低",
                        speSkillCon("50%"),
                        "，且奈奥格",
                        speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                        "下茜茜额外攻击力提高",
                        speSkillCon("45%"),
                        speSkillCon("(属性乘区·额外攻击力加成)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成),
                        "，主动技能回复速度提高",
                        speSkillCon("60%"),
                        speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度)
                    ],//一花特性
                    [
                        "奈奥格造成的伤害提高",
                        speSkillCon("25%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "，同时异核技能",
                        speSkillCon("【吞蚀者】形态", SkillColorEnum.injuries),
                        "时对全场敌对目标蚀元素抗性降低效果翻倍"
                    ]//三花特性
                ]
            }
        }
    ],
    "鸢": [
        {
            "name": "月巡",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "穿透屏障"],//技能标签
                "content": [
                    "对自身前方扇形区域射出箭矢对半径1200范围内目标造成",
                    speSkillCon("2500%最终攻击的蚀元素伤害"),
                    "，伤害随目标当前生命值百分比提升，最高提升",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "",
                    "连击：无视当前蚀爆值触发一次相当于消耗",
                    speSkillCon("100"),
                    "点蚀爆值时",
                    speSkillCon("50%"),
                    "的蚀爆伤害"
                ]//满级技能内容描述
            }
        },
        {
            "name": "弦影",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],
                "tab": ["伤害", "自身增益"],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒强化自身武器，使自身",
                    speSkillCon("20"),
                    "秒内普通攻击额外为终端附加",
                    speSkillCon("5点蚀爆值"),
                    "，并使普通攻击对命中目标周围",
                    speSkillCon("200"),
                    "半径同样造成伤害。若技能【月巡】的次数耗尽，则持续时间内额外提升自身",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "攻击速度",
                    "",
                    "",
                    "主动：对选中区域半径400范围内的目标造成",
                    speSkillCon("3750%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("10点蚀爆值"),
                    "。同时以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退自身周围300范围目标"
                ]
            }
        },
        {
            "name": "应许之箭",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "穿透屏障"],
                "content": [
                    "对选中区域半径范围",
                    speSkillCon("500"),
                    "内目标造成",
                    speSkillCon("4500%最终攻击的蚀元素伤害"),
                    "，并内终端附加",
                    speSkillCon("20点蚀爆值"),
                    "，同时立即触发【弦影】的被动效果。",
                    "",
                    "异核技能若只命中单个目标，则对其额外造成",
                    speSkillCon("2000%最终攻击的蚀元素伤害")
                ]
            }
        },
        {
            "name": "特性：弥辉",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.35次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "对目标发射箭矢，造成",
                    speSkillCon("286%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("3点蚀爆值")
                ],//普通攻击
                "specialContent": [
                    [
                        "触发蚀爆后，使自身所有伤害无视目标",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                        "基础减伤，最多叠加",
                        speSkillCon("3"),
                        "层"
                    ],//零花本体特性
                    [
                        "【弦影】被动效果激活时，普通攻击伤害提高",
                        speSkillCon("40%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，且自身普通攻击使目标蚀元素抗性降低",
                        speSkillCon("15%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("20"),
                        "秒"
                    ],//一花特性
                    [
                        "目标生命值越低，鸢对目标造成的伤害越高，最多提高",
                        speSkillCon("40%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "崔远之": [
        {
            "name": "据枪追猎",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害"],//技能标签
                "content": [
                    "对目标发动突袭射击，并在造成伤害后回复",
                    speSkillCon("15"),
                    "点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "",
                    "【连击】：额外回复",
                    speSkillCon("10"),
                    "点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "",
                    speSkillCon("【据枪追猎】技能形态", SkillColorEnum.injuries),
                    "",
                    "“鬼手”未现身状态下可使用",
                    "",
                    "对单个目标造成总计",
                    speSkillCon("1875%最终攻击的物理伤害"),
                    "和",
                    speSkillCon("1125%最终攻击的雷元素伤害"),
                    "",
                    speSkillCon("【据枪追猎·黑】技能形态", SkillColorEnum.injuries),
                    "",
                    "“鬼手”持黑枪状态下可使用",
                    "",
                    "本体对单个目标造成总计",
                    speSkillCon("1875%最终攻击的物理伤害"),
                    "，“鬼手”对目标及目标周围半径",
                    speSkillCon("250"),
                    "范围内的敌人造成",
                    speSkillCon("1125%专精的雷元素伤害"),
                    "",
                    speSkillCon("【据枪追猎·白】技能形态", SkillColorEnum.injuries),
                    "",
                    "“鬼手”持白枪状态下可使用",
                    "",
                    "本体对单个目标造成总计",
                    speSkillCon("1875%最终攻击的雷元素伤害"),
                    "，“鬼手”对目标及目标周围半径",
                    speSkillCon("250"),
                    "范围内的敌人造成总计",
                    speSkillCon("1125%专精的物理伤害"),
                    "",
                    speSkillCon("【据枪追猎】", SkillColorEnum.injuries),
                    "的可使用技能次数与",
                    speSkillCon("【据枪追猎·黑/白】", SkillColorEnum.injuries),
                    "独立计算"
                ]//满级技能内容描述
            }
        },
        {
            "name": "鬼枪上膛",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
                "tab": ["自身增益"],
                "content": [
                    "被动：每秒获得1点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "，登场时拥有",
                    speSkillCon("30"),
                    "点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "",
                    speSkillCon("【鬼枪上膛】技能形态", SkillColorEnum.injuries),
                    "",
                    "“鬼手”未现身且100点",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "时可用，令“鬼手”现身，状态期间：",
                    "",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "随时间消耗",
                    "",
                    "攻击速度提升",
                    speSkillCon("150%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "",
                    speSkillCon("10"),
                    "秒后获得强化，攻击力提升",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，专精值提升",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "",
                    speSkillCon("【鬼枪上膛·黑】【鬼枪上膛·白】技能形态", SkillColorEnum.injuries),
                    "",
                    "“鬼手”现身期间可使用，切换“鬼手”持枪状态",
                    "",
                    "“鬼手”持黑枪状态：",
                    "",
                    "本体对目标造成",
                    speSkillCon("180%最终攻击的物理伤害"),
                    "，“鬼手”对目标及目标周围半径",
                    speSkillCon("200"),
                    "范围内的敌人造成",
                    speSkillCon("375%专精值的雷元素伤害"),
                    "",
                    "“鬼手”持白枪状态：",
                    "",
                    "本体对目标造成",
                    speSkillCon("200%最终攻击的雷元素伤害"),
                    "，“鬼手”对目标及目标周围半径",
                    speSkillCon("200"),
                    "范围内的敌人造成",
                    speSkillCon("362%专精值的物理伤害")
                ]
            }
        },
        {
            "name": "生还禁地",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["伤害", "拦截", "穿透屏障"],
                "content": [
                    "仅“鬼手”在场时可用",
                    "",
                    "向指定区域射出巨大能量弹，对沿途单位造成",
                    speSkillCon("200%最终攻击的雷元素伤害"),
                    "并击落投射物",
                    "",
                    "能量弹到达指定位置后，对半径",
                    speSkillCon("400"),
                    "范围内的所有目标造成",
                    speSkillCon("1450%专精的雷元素伤害"),
                    "，位于区域正中心的一名目标将额外受到一次",
                    speSkillCon("6500%最终攻击的物理伤害"),
                    "",
                    "施放后",
                    speSkillCon("15"),
                    "秒内",
                    speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                    "不会随时间消耗"
                ]
            }
        },
        {
            "name": "特性：善恶争鸣",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.55次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "使用黑白双枪战斗，白枪为连射模式，共造成",
                    speSkillCon("180%最终攻击的物理伤害"),
                    "；黑枪为单发模式，造成",
                    speSkillCon("200%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "当“鬼手”现身时，崔远之会将一把枪交给“鬼手”协助作战；“鬼手”造成范围伤害",
                        "",
                        "崔远之造成的伤害受攻击力加成；“鬼手”造成的伤害受专精值加成",
                        "",
                        "攻击忽视目标",
                        speSkillCon("5%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                        "基础减伤，“鬼手”在场时，此效果提升至",
                        speSkillCon("3"),
                        "倍"
                    ],//零花本体特性
                    [
                        "登场时额外获得",
                        speSkillCon("30"),
                        "点",
                        speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                        "；激活“鬼手”时",
                        speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                        "上限提高",
                        speSkillCon("20%")
                    ],//一花特性
                    [
                        "自身击败敌人时，额外获得",
                        speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                        "（击败精英级别敌人可以获得更多",
                        speSkillCon("[恶念]", SkillColorEnum.normal, ToastSkillEnum.恶念),
                        "）"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "鬼手状态下提高",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "造成的雷元素和物理伤害，且异核技能对区域正中心目标造成的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        }
    ],
    "红玉": [
        {
            "name": "狩天",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "6"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "拦截", "穿透屏障"],//技能标签
                "content": [
                    "短暂蓄力后，对指定区域内的敌人进行穿透射击，造成",
                    speSkillCon("3000%最终攻击的风元素伤害"),
                    "，同时击落空中单位及敌方投射物，并吹散范围内的毒雾",
                    "",
                    speSkillCon("「缉捕模式」下额外效果", SkillColorEnum.injuries),
                    "",
                    "弹道变宽，射击弹道后跟随一串震荡波，额外造成",
                    speSkillCon("750%最终攻击的风元素伤害"),
                    "",
                    "【连击】：造成的伤害提升",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]//满级技能内容描述
            }
        },
        {
            "name": "猎逐",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],
                "tab": ["伤害", "自身增益", "持续施法"],
                "content": [
                    "被动：每隔",
                    speSkillCon("20"),
                    "秒，提升自身",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "基础攻击速度，持续",
                    speSkillCon("15"),
                    "秒",
                    "",
                    "主动：锁定单个敌人，以其为中心绕圈骑行，持续射击该目标，期间降低该目标",
                    speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，总计发射50枚子弹，每次命中忽视其",
                    speSkillCon("0.5%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤，随命中次数提升，最高忽视",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤，预计总计造成",
                    speSkillCon("10000%最终攻击的风元素伤害"),
                    "，对骑行路线上的敌人总计造成",
                    speSkillCon("1250%最终攻击的风元素伤害"),
                    "，期间自身受到伤害减免",
                    speSkillCon("90%"),
                    "，并免疫控制效果（若锁定的目标在子弹发射完毕前被击败，将结束绕圈骑行，并激活本技能的被动效果；若未被击败，该目标在后续",
                    speSkillCon("45"),
                    "秒内，红玉对其造成的普攻伤害，忽视其",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤，「缉捕模式」下忽视",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤）",
                    "",
                    speSkillCon("「缉捕模式」下额外效果", SkillColorEnum.injuries),
                    "",
                    "最高忽视目标",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤，绕圈骑行对撞击到的敌人以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "造成击退效果"
                ]
            }
        },
        {
            "name": "赤红惩戒",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "穿透屏障"],
                "content": [
                    "摩托启动「缉捕模式」",
                    "",
                    "第一次施放该技能所需等待时间减半",
                    "",
                    "骑摩托冲向目标区域，在目标区域外围绕圈狂飙，同时朝目标区域内持续射击，总计造成",
                    speSkillCon("4500%最终攻击的风元素伤害"),
                    "，然后拉起车头冲回原地，刹车后回头再蓄力射击区域内的敌人，造成",
                    speSkillCon("500%最终攻击的风元素伤害"),
                    "并以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退目标",
                    "",
                    "「缉捕模式」期间普通攻击伤害提高",
                    speSkillCon("90%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "且普通攻击会额外弹射一个目标（只会弹射当前目标以外的敌方单位，即单目标情况下无法触发弹射），伤害同普通攻击伤害，「缉捕模式」持续",
                    speSkillCon("30"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：执法者",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向射击范围内的目标发射三发高速子弹，每发子弹造成",
                    speSkillCon("90%最终攻击的风元素伤害"),
                    "，优先攻击射程范围内的不同目标"
                ],//普通攻击
                "specialContent": [
                    [
                        "执法者印记：对目标造成伤害时附加印记，会使其受到自身伤害提升",
                        speSkillCon("18%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("5"),
                        "秒"
                    ],//零花本体特性
                    [
                        "异核技能期间普通攻击伤害提高的效果提升至",
                        speSkillCon("150%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        speSkillCon("[执法者印记]", SkillColorEnum.normal, ToastSkillEnum.执法者印记),
                        "持续时间提升至",
                        speSkillCon("30"),
                        "秒，且伤害提升至",
                        speSkillCon("36%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "施放连击后友方同调者提高20％",
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    "，持续20秒，且【猎逐】被动触发时普通攻击获得与「缉捕模式」等同的强化效果（不与「缉捕模式」叠加）"
                ]
            }
        }
    ],
    "凤无梦": [
        {
            "name": "凋亡舞步",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "持续施法"],//技能标签
                "content": [
                    "操控傀儡在目标位置起舞攻击周围敌人，8秒内对半径",
                    speSkillCon("250"),
                    "范围内的敌人每次造成",
                    speSkillCon("125%最终攻击的蚀元素伤害"),
                    "，共造成25次伤害，并为终端附加",
                    speSkillCon("25点蚀爆值"),
                    "，每",
                    speSkillCon("10%"),
                    "攻击速度提升可额外增加一次伤害",
                    "",
                    "【连击】︰重新选择傀儡的起舞位置，并额外对目标位置半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("500%最终攻击的蚀元素伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "维达尔契约",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "3"]],
                "tab": ["伤害", "自身增益", "负面状态"],
                "content": [
                    "【被动】：当友方同调者受到攻击时，傀儡会",
                    speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "友方半径",
                    speSkillCon("300"),
                    "范围内的敌人",
                    speSkillCon("2"),
                    "秒，并造成",
                    speSkillCon("1000%最终攻击的蚀元素伤害"),
                    "，冷却时间",
                    speSkillCon("10"),
                    "秒",
                    "",
                    "【主动】：指挥傀儡对指定位置半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("1000%最终攻击的蚀元素伤害"),
                    "和被动的",
                    speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "效果，同时提高自身",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "攻击力，持续",
                    speSkillCon("20"),
                    "秒；强化效果期间，傀儡每次普通攻击为终端附加",
                    speSkillCon("2点蚀爆值")
                ]
            }
        },
        {
            "name": "羽化世代",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["自身增益"],
                "content": [
                    "回复全部生命和技能使用次数，前3次施放依次激活强化效果：",
                    "",
                    "【I】普通攻击的攻击速度提升",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，额外造成",
                    speSkillCon("180%最终攻击的蚀元素伤害"),
                    "，并额外为终端附加",
                    speSkillCon("1点蚀爆值"),
                    "",
                    "【II】主动技能【凋亡舞步】不再需要持续施法，额外为终端增加",
                    speSkillCon("5点蚀爆值"),
                    "",
                    "【III】主动技能【维达尔契约】持续期间傀儡攻击会",
                    speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "目标",
                    speSkillCon("2"),
                    "秒",
                    "",
                    "初次施放所需充能时间减少",
                    speSkillCon("35"),
                    "秒",
                ]
            }
        },
        {
            "name": "特性：天命作茧",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "操控傀儡攻击目标造成",
                    speSkillCon("220%最终攻击的蚀元素伤害"),
                    "，普通攻击为终端附加",
                    speSkillCon("4点蚀爆值"),
                ],//普通攻击
                "specialContent": [
                    [
                        "傀儡视为召唤物",
                        "",
                        "终端每有1点蚀爆值，凤无梦造成的伤害额外提高",
                        speSkillCon("0.2%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                        "，最多不超过",
                        speSkillCon("30%")
                    ],//零花本体特性
                    [
                        "主动技能【凋亡舞步】触发连击时，不会停止上一个技能位置的傀儡起舞"
                    ],//一花特性
                    [
                        "终端每有1点蚀暴值，凤无梦对其造成的伤害提高",
                        speSkillCon("0.5%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                        "，最多不超过",
                        speSkillCon("30%")
                    ]//三花特性
                ]
            }
        }
    ],
    "吉娜": [
        {
            "name": "毒刃",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "穿透屏障"],//技能标签
                "content": [
                    "朝指定方向投掷剧毒匕首，匕首会命中范围内的所有敌方单位，对每个目标造成",
                    speSkillCon("2000%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("20点蚀爆值"),
                    "",
                    "同时自身在技能释放后",
                    speSkillCon("20"),
                    "秒内普通攻击命中后，匕首必定会穿透路径上的所有敌方单位",
                    "",
                    "【连击】：技能额外效果的持续时间延长",
                    speSkillCon("10"),
                    "秒，且普通攻击匕首造成的伤害提高",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]//满级技能内容描述
            }
        },
        {
            "name": "封喉",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "10秒"]],
                "tab": ["伤害"],
                "content": [
                    "立即闪现至目标身后，对其造成",
                    speSkillCon("2000%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("5点蚀爆值"),
                    "",
                    "伤害目标当前生命值低于",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "时，忽略目标",
                    speSkillCon("10%"),
                    "基础减伤",
                    "",
                    "目标每受到过一次蚀爆伤害，该技能对其造成的伤害额外提高",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                    "，最多提高",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "附骨",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益"],
                "content": [
                    "冲向目标位置，向四周散射大量剧毒匕首，对其中的所有单位造成",
                    speSkillCon("3300%最终攻击的蚀元素伤害"),
                    "，为终端附加",
                    speSkillCon("20点蚀爆值"),
                    "",
                    "并在",
                    speSkillCon("25"),
                    "秒内，【封喉】释放后返还",
                    speSkillCon("50%"),
                    "的冷却时间",
                    "",
                    "伤害造成暴击时，该效果的持续时间延长至",
                    speSkillCon("40"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：剧毒之牙",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.56次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "为2连击，向当前目标连续发射两枚剧毒匕首造成",
                    speSkillCon("180%最终攻击的蚀元素伤害"),
                    "并为终端附加",
                    speSkillCon("3点蚀爆值"),
                    "；命中首个目标造成暴击后，匕首会穿透路径上的所有敌方单位"
                ],//普通攻击
                "specialContent": [
                    [
                        "无"
                    ],//零花本体特性
                    [
                        "参与击杀后返还",
                        speSkillCon("40%"),
                        "自动技能【封喉】的冷却时间"
                    ],//一花特性
                    [
                        "自身暴击率提升",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "，暴击伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "司危": [
        {
            "name": "摇滚连音",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "拦截"],//技能标签
                "content": [
                    "指挥电子狗冲向目标区域，持续朝区域内发射红外激光射线，共造成",
                    speSkillCon("1125%最终攻击的雷元素伤害"),
                    "并拦截其中投射物，结束时在该目标位置形成射线网，射线网持续",
                    speSkillCon("20"),
                    "秒，射线网每2秒对其中的目标造成",
                    speSkillCon("95%最终攻击的雷元素伤害"),
                    "，并对其施加",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记",
                    "",
                    "自身每",
                    speSkillCon("10%"),
                    "攻击速度提升可降低",
                    speSkillCon("0.1"),
                    "秒射线网伤害触发的间隔"
                ]//满级技能内容描述
            }
        },
        {
            "name": "即兴鼓点",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
                "tab": ["伤害", "自身增益"],
                "content": [
                    "开启后电子狗获得强化，攻击速度提升",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries),
                    "，攻击会同时射出两道激光射线，对当前目标共造成",
                    speSkillCon("1045%最终攻击的雷元素伤害"),
                    "；该强化效果持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "朋克主义",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "持续施法"],
                "content": [
                    "指挥电子狗变成射灯球，自身进入唱跳状态，每",
                    speSkillCon("0.5"),
                    "秒对随机",
                    speSkillCon("200"),
                    "半径范围内所有敌方单位预计总共造成",
                    speSkillCon("6000%最终攻击的雷元素伤害"),
                    "，命中带有",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记的单位时额外造成",
                    speSkillCon("50%无视减伤的物理伤害"),
                    "（不会清除",
                    speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                    "标记）",
                    "",
                    "自身每",
                    speSkillCon("10%"),
                    "攻击速度提升可降低",
                    speSkillCon("0.013"),
                    "秒伤害触发的间隔"
                ]
            }
        },
        {
            "name": "特性：反·音阶计划",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.59次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "指挥电子狗向目标发射激光射线，造成",
                    speSkillCon("170%最终攻击的雷元素伤害"),
                    "",
                    "普通攻击会同时攻击除目标外场上带有【音律】标记的单位（最多",
                    speSkillCon("3"),
                    "个），造成",
                    speSkillCon("40%无视减伤的物理伤害"),
                    "，并清除该目标【音律】标记"
                ],//普通攻击
                "specialContent": [
                    [
                        "电子狗视为召唤物",
                        "",
                        "自身",
                        speSkillCon("1200"),
                        "范围内的友方受到攻击时，攻击者会被标记为",
                        speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                        "单位",
                        "",
                        "芙蕖在场时，攻击速度提升",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "普通攻击可以同时散射攻击除目标外场上最多",
                        speSkillCon("5"),
                        "个带有",
                        speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                        "标记的单位"
                    ],//一花特性
                    [
                        "散射攻击带有",
                        speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                        "标记的目标时，有",
                        speSkillCon("30%"),
                        "的概率不消耗目标",
                        speSkillCon("[音律]", SkillColorEnum.normal, ToastSkillEnum.音律),
                        "标记"
                    ]//三花特性
                ]
            }
        }
    ],
    "雪长夏": [
        {
            "name": "策略转换",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益"],//技能标签
                "content": [
                    "切换武器，改变攻击模式：",
                    "",
                    speSkillCon("【策略转换·皇室枪】武器形态", SkillColorEnum.injuries),
                    "",
                    "“皇室枪”形态下可触发",
                    "",
                    "普通攻击依次向目标发射三道、五道子弹，第三段向目标发射一枚榴弹，命中目标后对其半径",
                    speSkillCon("150"),
                    "范围内的敌人造成",
                    speSkillCon("1250%最终攻击的雷元素伤害"),
                    "，并使命中的目标进入",
                    speSkillCon("[DEBUFF]", SkillColorEnum.normal, ToastSkillEnum.DEBUFF),
                    "状态",
                    "",
                    speSkillCon("【策略转换·大师剑】武器形态", SkillColorEnum.injuries),
                    "",
                    "“大师剑”形态下可触发",
                    "",
                    "切换“大师剑”后向前方扇形区域的敌人造成",
                    speSkillCon("500%最终攻击的物理伤害"),
                    "，攻击模式改变：",
                    speSkillCon("攻击速度：0.50次每秒"),
                    "，射程：",
                    speSkillCon("200"),
                    "，普通攻击对当前目标造成",
                    speSkillCon("200%最终攻击的物理伤害"),
                    "，普通攻击伤害提升",
                    speSkillCon("138%"),
                    speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
                ]//满级技能内容描述
            }
        },
        {
            "name": "究极瞄准",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],
                "tab": ["伤害", "穿透屏障"],
                "content": [
                    speSkillCon("【割草模式】技能形态", SkillColorEnum.injuries),
                    "",
                    "“大师剑”形态下可自动触发",
                    "",
                    "被动：100点",
                    speSkillCon("[剩余电量]", SkillColorEnum.normal, ToastSkillEnum.剩余电量),
                    "时自动触发，提升自身",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "攻击速度，持续",
                    speSkillCon("20"),
                    "秒；普通攻击会触发“闪电链”，对当前目标额外造成",
                    speSkillCon("750%最终攻击的雷元素伤害"),
                    "，并在目标半径",
                    speSkillCon("300"),
                    "范围内依次电击离目标最近的敌人，分别造成",
                    speSkillCon("500%最终攻击的雷元素伤害"),
                    "，最多可链击三名目标，并使其进入",
                    speSkillCon("[DEBUFF]", SkillColorEnum.normal, ToastSkillEnum.DEBUFF),
                    "状态（“闪电链”效果每",
                    speSkillCon("3"),
                    "秒触发一次，视为普通攻击伤害）",
                    "",
                    "持续时间结束后，将自动切回“皇室枪”形态",
                    "",
                    speSkillCon("【究极瞄准】技能形态", SkillColorEnum.injuries),
                    "",
                    "“皇室枪”形态下可施放",
                    "",
                    "主动：向前方发射导弹，命中第一个目标时爆炸，对半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("1875%最终攻击的雷元素伤害"),
                    "，使目标进入",
                    speSkillCon("[DEBUFF]", SkillColorEnum.normal, ToastSkillEnum.DEBUFF),
                    "状态，并以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退目标；向当前生命值最高的敌人砸下导弹，对半径",
                    speSkillCon("500"),
                    "范围内的敌人造成",
                    speSkillCon("2000%最终攻击的雷元素伤害"),
                    "，每次命中回复",
                    speSkillCon("4"),
                    "点",
                    speSkillCon("[剩余电量]", SkillColorEnum.normal, ToastSkillEnum.剩余电量)
                ]
            }
        },
        {
            "name": "DLC上线！",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "对空"],
                "content": [
                    "在选中的位置创建一个像素分身，与本体一起进行攻击，以各自为中心，对半径",
                    speSkillCon("500"),
                    "范围内的敌人造成伤害，两个区域总计造成",
                    speSkillCon("6000%最终攻击的雷元素伤害"),
                    "，并使敌人进入",
                    speSkillCon("[DEBUFF]", SkillColorEnum.normal, ToastSkillEnum.DEBUFF),
                    "状态"
                ]
            }
        },
        {
            "name": "特性：超级游戏玩家",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "400"], ["攻击速度", "0.40次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "普通攻击依次向目标发射三道、五道子弹，预计总计造成",
                    speSkillCon("500%最终攻击的雷元素伤害"),
                    "，第三段向目标发射一枚榴弹，命中目标后对其半径",
                    speSkillCon("150"),
                    "范围内的敌人造成",
                    speSkillCon("500%最终攻击的雷元素伤害"),
                    "，并使命中目标进入",
                    speSkillCon("[DEBUFF]", SkillColorEnum.normal, ToastSkillEnum.DEBUFF),
                    "状态（实际伤害随【策略转换】技能等级提升）"
                ],//普通攻击
                "specialContent": [
                    [
                        "普通攻击命中目标可为自身回复",
                        speSkillCon("1"),
                        "点",
                        speSkillCon("[剩余电量]", SkillColorEnum.normal, ToastSkillEnum.剩余电量),
                        "，“皇室枪”形态第三段普通攻击的榴弹可回复",
                        speSkillCon("4"),
                        "点",
                        speSkillCon("[剩余电量]", SkillColorEnum.normal, ToastSkillEnum.剩余电量),
                        "（该资源无法随时间自动回复）",
                        "",
                        "DEBUFF：特定攻击会使目标进入该状态，持续",
                        speSkillCon("5"),
                        "秒，雪长夏的普通攻击伤害对其造成伤害时必定触发暴击"
                    ],//零花本体特性
                    [
                        "“大师剑”形态下伤害提升",
                        speSkillCon("15%"),
                        speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries),
                        "，“皇室枪”形态下，主动技能【究极瞄准】连击状态下，每次命中目标回复的",
                        speSkillCon("[剩余电量]", SkillColorEnum.normal, ToastSkillEnum.剩余电量),
                        "点数额外增加",
                        speSkillCon("1"),
                        "点",
                    ],//一花特性
                    [
                        "提升",
                        speSkillCon("30%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "狄砚": [
        {
            "name": "弹雨韶华",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "拦截"],//技能标签
                "content": [
                    "对半径",
                    speSkillCon("350"),
                    "范围内的敌方单位造成",
                    speSkillCon("1875%最终攻击的物理伤害"),
                    "并拦截敌方投射物"
                ]//满级技能内容描述
            }
        },
        {
            "name": "夜焰升平",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
                "tab": ["自身增益", "友方增益"],
                "content": [
                    "使友方全体同调者提升",
                    speSkillCon("21%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，自身暴击率额外提升",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "以及暴击伤害提升",
                    speSkillCon("80%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "穿杨之宴",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "自身增益", "拦截", "穿透屏障"],
                "content": [
                    "对指定区域内的敌方单位造成",
                    speSkillCon("2400%最终攻击的物理伤害"),
                    "并拦截敌方投射物，此后将普通攻击切换为三连发模式，",
                    speSkillCon("攻击速度：0.77次每秒"),
                    "，伤害降低20%，持续",
                    speSkillCon("24"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：华照阑珊",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.56次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射子弹造成",
                    speSkillCon("179%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "对空中目标造成伤害提升",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "主动技能【弹雨韶华】触发连击时，造成的伤害提高",
                        speSkillCon("50%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "对空中目标造成伤害提升变为",
                        speSkillCon("50%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "艾摩诃": [
        {
            "name": "爆裂",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害"],//技能标签
                "content": [
                    "朝指定方向发射5支爆裂箭矢，对命中的目标造成",
                    speSkillCon("540%最终攻击的雷元素伤害"),
                    "，并在短暂延迟后再次对目标半径",
                    speSkillCon("150"),
                    "范围内的所有敌人造成",
                    speSkillCon("900%最终攻击的雷元素伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "伏击",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "20秒"], ["增益持续", "20秒"]],
                "tab": ["自身增益", "回复", "拦截"],
                "content": [
                    "遁入暗影中，进入",
                    speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                    "状态，不会被优先攻击",
                    "",
                    "普通攻击将额外造成",
                    speSkillCon("313%最终攻击的雷元素伤害"),
                    "，且每秒回复",
                    speSkillCon("3%最大生命值"),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "在此期间普通攻击将优先拦截敌方投射物"
                ]
            }
        },
        {
            "name": "围猎",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "拦截"],
                "content": [
                    "对半径",
                    speSkillCon("350"),
                    "范围内的敌人造成",
                    speSkillCon("3900%最终攻击的雷元素伤害"),
                    "，并拦截敌方投射物"
                ]
            }
        },
        {
            "name": "特性：猎人本能",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.80次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "依次朝目标发射1支箭、2支箭（伤害减半）、呈扇形散开的3支箭，每次总计造成",
                    speSkillCon("192%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "拥有出色的清理敌方投射物及空中单位的能力"
                    ],//零花本体特性
                    [
                        "普通攻击命中目标后对其叠加",
                        speSkillCon("[猎人印记]", SkillColorEnum.normal, ToastSkillEnum.猎人印记),
                        "，叠满",
                        speSkillCon("5"),
                        "层触发一次雷击效果，对范围",
                        speSkillCon("150"),
                        "的敌人造成",
                        speSkillCon("200%最终攻击的雷元素伤害")
                    ],//一花特性
                    [
                        "普通攻击造成的伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "余音": [
        {
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
        },
        {
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
                    speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                    "",
                    "",
                    "主动技能：",
                    "",
                    "可以消耗场上存在的",
                    speSkillCon("4"),
                    "个",
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
        },
        {
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
                    "次普通攻击会在目标处产生1个",
                    speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音)
                ]
            }
        },
        {
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
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "，",
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "生成时会产生",
                        speSkillCon("100"),
                        "范围的水元素区域，场上最多可以同时存在",
                        speSkillCon("8"),
                        "个",
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "。每产生",
                        speSkillCon("4"),
                        "个",
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "，回复1次【纯净声源】技能次数。",
                        "",
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "数量达到一定程度时，可以消耗",
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "，主动释放【定音乐轨】。（区域切换、同调者切换至后备队或重伤时，场上所有的",
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
                        speSkillCon("[切分音]", SkillColorEnum.normal, ToastSkillEnum.切分音),
                        "，且释放【定音乐轨】消耗的",
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
    ],
    "卯绒绒": [
        {
            "name": "大角出场",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "拦截"],//技能标签
                "content": [
                    "朝指定方向宽度",
                    speSkillCon("200"),
                    "范围内的所有目标喷射高压水枪，总计造成",
                    speSkillCon("2500%最终攻击的水元素伤害"),
                    "，并拦截敌方投射物",
                    "",
                    speSkillCon("「蓄水充盈」状态下额外效果", SkillColorEnum.injuries),
                    "",
                    "施放技能期间获得额外",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "的专精加成且不消耗技能使用次数（施放后失去「蓄水充盈」状态）"
                ]//满级技能内容描述
            }
        },
        {
            "name": "抖包袱",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],
                "tab": ["水区域", "自身增益", "伤害"],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒向指定目标发射蓄水弹，对目标及其半径",
                    speSkillCon("200"),
                    "范围内最多",
                    speSkillCon("5"),
                    "名敌人造成",
                    speSkillCon("1125%最终攻击的水元素伤害"),
                    "",
                    speSkillCon("仅「蓄水充盈」状态下可主动施放：", SkillColorEnum.injuries),
                    "",
                    "主动：选择目标点施放，有效半径扩大至",
                    speSkillCon("400"),
                    "，攻击区域内的所有敌人，并在施放期间获得额外",
                    speSkillCon("100%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "的专精加成，之后在目标点生成水元素区域（施放后失去「蓄水充盈」状态）"
                ]
            }
        },
        {
            "name": "群英荟萃",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"]],
                "tab": ["水区域", "伤害", "拦截"],
                "content": [
                    "用高压水枪持续冲击半径",
                    speSkillCon("400"),
                    "范围的区域并留下水元素区域，冲击到目标时预计总计造成",
                    speSkillCon("6000%最终攻击的水元素伤害"),
                    "，并拦截敌方投射物"
                ]
            }
        },
        {
            "name": "特性：看茶送客",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射水弹造成",
                    speSkillCon("200%最终攻击的水元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "战斗开始时进入「蓄水充盈」状态，该状态下技能【大角出场】【抖包袱】获得增强，并在主动施放后失去「蓄水充盈」状态",
                        "",
                        "每隔",
                        speSkillCon("30"),
                        "秒可重新获得「蓄水充盈」状态"
                    ],//零花本体特性
                    [
                        "自身处于水元素区域时，专精提升",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "场上每有一个水元素同调者，获取「蓄水充盈」的间隔降低",
                        speSkillCon("3"),
                        "秒"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "【蓄水充盈】时间降低为20秒，该状态下施放技能不进入指令冷却，且伤害忽略目标基础减伤",
                    speSkillCon("40%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "，同时该状态下【大角出场】伤害提高",
                    speSkillCon("50%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        }
    ],
    "龙和": [
        {
            "name": "沸红",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "25秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["炎区域", "伤害", "拦截", "对空", "穿透屏障"],//技能标签
                "content": [
                    "对指定区域的敌人造成",
                    speSkillCon("3360％最终攻击的炎元素伤害"),
                    "，并拦截区域内的所有投射物，同时产生炎元素地形"
                ]//满级技能内容描述
            }
        },
        {
            "name": "燃犀",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "15秒"], ["增益持续", "15秒"]],
                "tab": ["自身增益"],
                "content": [
                    "回复1次【沸红】使用次数",
                    "",
                    "在增益持续期间，攻击速度提高",
                    speSkillCon("60%"),
                    speSkillCon("(属性乘区·攻击速度)", SkillColorEnum.injuries),
                    "，且普通攻击变成具有穿透性的阙龙剑，对命中的单位造成",
                    speSkillCon("896％最终攻击的炎元素伤害"),
                    "，并使目标降低",
                    speSkillCon("30%"),
                    speSkillCon("(目标减益乘区·目标抗性降低)", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "炎元素抗性，持续",
                    speSkillCon("4"),
                    "秒"
                ]
            }
        },
        {
            "name": "无忌",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "自身增益", "对空"],
                "content": [
                    "在指定位置形成",
                    speSkillCon("600"),
                    "范围的龙纹区域，持续",
                    speSkillCon("15"),
                    "秒。龙纹区域存在时，每秒对区域内的敌人造成",
                    speSkillCon("400％最终攻击的炎元素伤害"),
                    "，当龙和对龙纹区域内的敌人造成暴击时，伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    "。",
                    "",
                    "技能施放后，龙和进入「海祟」状态，持续",
                    speSkillCon("30"),
                    "秒。在此状态的增益持续时间内，龙和能够触发「燃犀」所有的持续增益效果，且暴击率提高",
                    speSkillCon("50%"),
                    "。龙和每",
                    speSkillCon("2"),
                    "次普通攻击，可以对命中的1个单位（优先选取精英及首领目标）造成",
                    speSkillCon("300"),
                    "范围内",
                    speSkillCon("1250％最终攻击的炎元素伤害"),
                    "且向两侧额外生成阙龙剑攻击敌人，该伤害视为普通攻击伤害。该效果触发时，普通攻击每额外命中一个单位可以扩大",
                    speSkillCon("50"),
                    "范围，最多可以扩大至",
                    speSkillCon("500"),
                    "范围。在增益持续时间内，最多可以触发",
                    speSkillCon("10"),
                    "次。"
                ]
            }
        },
        {
            "name": "特性：一笑作千温",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "对目标投掷阙龙刃，造成",
                    speSkillCon("250％最终攻击的炎元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "在不同状态下，可以使用不同的形态的普通攻击",
                        "",
                        "龙和的普通攻击对炎元素地形上的敌人造成的伤害提高",
                        speSkillCon("20%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "，当场上只有一个敌人时，此效果提高至",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                    ],//零花本体特性
                    [
                        "登场时异核充能",
                        speSkillCon("60"),
                        "秒。「海祟」的触发伤害提高",
                        speSkillCon("40%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "。进入「燃犀」状态时，会对场上敌人单位触发",
                        speSkillCon("3"),
                        "次「海祟」的",
                        speSkillCon("300"),
                        "范围伤害效果（优先精英及首领目标）"
                    ],//一花特性
                    [
                        "普通攻击的伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("(增伤乘区·独立增伤)", SkillColorEnum.injuries),
                        "，异核充能时间减少",
                        speSkillCon("20"),
                        "秒，且龙纹区域持续时间增加",
                        speSkillCon("15"),
                        "秒"
                    ]//三花特性
                ]
            }
        }
    ],
    "瞳": [
        {
            "name": "精确制导",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "拦截"],//技能标签
                "content": [
                    "施放大量导弹轰炸半径",
                    speSkillCon("400"),
                    "的指定区域，拦截范围内的所有投射物，对随机半径",
                    speSkillCon("120"),
                    "范围内的敌人造成总计",
                    speSkillCon("3751%最终攻击的物理伤害"),
                    "，同时浮游炮蓄能射击，每个造成",
                    speSkillCon("1250%最终攻击的物理伤害"),
                    "",
                    "范围内每有5名敌方单位，将额外消耗1次技能使用次数施放同等数量的导弹，最多额外消耗2次"
                ]//满级技能内容描述
            }
        },
        {
            "name": "戈尔贡防线",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "40秒"], ["增益持续", "20秒"]],
                "tab": ["自身增益", "负面状态"],
                "content": [
                    "启动防线模式，每秒回复",
                    speSkillCon("3%最大生命值"),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "防线模式下同时使用左右弹仓攻击，普通攻击造成伤害时使目标陷入",
                    speSkillCon("[石化]", SkillColorEnum.normal, ToastSkillEnum.石化),
                    "状态，无法行动且受到的物理伤害提升",
                    speSkillCon("24%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，持续",
                    speSkillCon("1"),
                    "秒",
                    "",
                    "回复2次主动技能【精确制导】的使用次数"
                ]
            }
        },
        {
            "name": "集束战争",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "自身增益", "召唤", "拦截"],
                "content": [
                    "使用全部武装攻击指定区域，对半径",
                    speSkillCon("500"),
                    "范围内随机位置发射导弹和激光攻击敌人，总计造成",
                    speSkillCon("5500%最终攻击的物理伤害"),
                    "，过程中敌人每次受到导弹和激光攻击都会使其受到该技能后续伤害额外提升",
                    speSkillCon("2%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                    "，最多提升",
                    speSkillCon("84%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                    "",
                    "同时激活自动技能【戈尔贡防线】，并在本次【戈尔贡防线】期间：生成4个浮游炮环绕在身边，对靠近的目标半径",
                    speSkillCon("250"),
                    "范围内的敌方造成",
                    speSkillCon("450%最终攻击的物理伤害"),
                    "，在自身受到伤害时展开防御力场抵挡",
                    speSkillCon("30%~50%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    "伤害"
                ]
            }
        },
        {
            "name": "特性：毁伤升级",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.33次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "交替使用左右弹仓发射的3连发对地小范围",
                    speSkillCon("60%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "浮游炮为召唤物",
                        "",
                        "使用2个浮游炮协同作战，每隔",
                        speSkillCon("5"),
                        "秒，浮游炮会在战场上自主寻找目标进行环状扫射，每个造成",
                        speSkillCon("60%最终攻击的物理伤害")
                    ],//零花本体特性
                    [
                        "每隔15秒，会进行一次战备升级，下一次主动技能【精确制导】会对选中区域内所有敌人额外造成",
                        speSkillCon("150%最终攻击的物理伤害")
                    ],//一花特性
                    [
                        "编入队伍时，队伍内所有筑术师伤害提升",
                        speSkillCon("15%"),
                        speSkillCon("（增伤乘区·技能增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "技能【戈尔贡防线】冷却缩短至",
                    speSkillCon("15"),
                    "秒，且【戈尔贡防线】下普通攻击同时也使目标受到伤害提高",
                    speSkillCon("25%"),
                    speSkillCon("（目标减益乘区·目标受伤害增加）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("4"),
                    "秒；此外异核冷却缩短至",
                    speSkillCon("80"),
                    "秒"
                ]
            }
        }
    ],
    "缇诗": [
        {
            "name": "元能突变",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益", "对空"],//技能标签
                "content": [
                    "对目标区域造成",
                    speSkillCon("3750%最终攻击的雷元素伤害"),
                    "，并对路径上的敌方造成",
                    speSkillCon("300%最终攻击的雷元素伤害"),
                    "",
                    "技能施放结束后提高1级自身",
                    speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                    "强度"
                ]//满级技能内容描述
            }
        },
        {
            "name": "再生序列",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
                "tab": ["伤害", "自身增益", "负面状态", "对空"],
                "content": [
                    speSkillCon("仅「重组酶」状态下可主动施放：", SkillColorEnum.injuries),
                    "",
                    "制造电能喷发区域，每",
                    speSkillCon("3"),
                    "秒喷发对区域内目标造成伤害，喷发造成",
                    speSkillCon("650%最终攻击的雷元素伤害"),
                    "，喷发区域持续",
                    speSkillCon("21"),
                    "秒（预计对每个目标最高造成总计",
                    speSkillCon("4550%最终攻击的雷元素伤害"),
                    "），缇诗离场或重伤时该效果消失",
                    "",
                    "技能施放结束后提高1级自身",
                    speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                    "强度，并回复1次",
                    speSkillCon("【元能突变】", SkillColorEnum.injuries),
                    "技能次数",
                    "",
                    speSkillCon("被动：", SkillColorEnum.injuries),
                    "当场上存在电能喷发区域时，普通攻击可降低目标",
                    speSkillCon("25%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "雷元素抗性，抗性降低效果持续",
                    speSkillCon("3"),
                    "秒，可重复刷新。（该被动效果不属于自动技能）"
                ]
            }
        },
        {
            "name": "染色质崩解",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["伤害", "自身增益", "对空"],
                "content": [
                    "缇诗化身成能量电球，对选中区域进行环绕打击，每次打击对半径",
                    speSkillCon("500"),
                    "范围内目标造成",
                    speSkillCon("500%最终攻击的雷元素伤害"),
                    "，共",
                    speSkillCon("6"),
                    "次，越靠近中心的敌人受到的攻击次数越高，对同一敌人造成多次打击时造成原伤害的",
                    speSkillCon("20%"),
                    "；最后冲向选中点，对半径",
                    speSkillCon("800"),
                    "范围内目标造成",
                    speSkillCon("3500%最终攻击的雷元素伤害"),
                    "",
                    "施放该技能提高缇诗",
                    speSkillCon("30%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率和",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                    "暴击伤害，持续",
                    speSkillCon("50"),
                    "秒，重复触发刷新持续时间"
                ]
            }
        },
        {
            "name": "特性：基因标记",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1000"], ["攻击速度", "0.71次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "武器飞出并飞回，每次对路径上的目标造成",
                    speSkillCon("60%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "每隔20秒获得",
                        speSkillCon("「重组酶」状态", SkillColorEnum.injuries),
                        "，拥有",
                        speSkillCon("「重组酶」状态", SkillColorEnum.injuries),
                        "时可以施放【再生序列】",
                        "",
                        "通过主动技能可提升自身",
                        speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                        "强度，达到强度Ⅲ后不再提升",
                        "",
                        "强度Ⅰ：主动技能回复速度提高",
                        speSkillCon("100%"),
                        speSkillCon("（[属性乘区·主动技能回复速度]）", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                        "",
                        "强度Ⅱ：主动技能暴击时伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "",
                        "强度Ⅲ：自身提高",
                        speSkillCon("40%"),
                        speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                        speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精)
                    ],//零花本体特性
                    [
                        "登场时异核充能",
                        speSkillCon("30"),
                        "秒，且",
                        speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                        "强度Ⅲ级后自身所有伤害忽略目标基础减伤",
                        speSkillCon("30%"),
                        speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    ],//一花特性
                    [
                        "异核充能时间减少",
                        speSkillCon("15"),
                        "秒，",
                        speSkillCon("[靶向效应]", SkillColorEnum.normal, ToastSkillEnum.靶向效应),
                        "强度Ⅲ后，主动技能伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "风晴雪": [
        {
            "name": "飞霜",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "抉择技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "-"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "召唤", "对空"],//技能标签
                "content": [
                    "选择一种技能形态释放，召唤不同战术装置，潮湿环境下，将直接生成相应范围的霜区域（指令冷却均为",
                    speSkillCon("20"),
                    "秒）：",
                    "",
                    speSkillCon("【飞霜·巡视】技能形态", SkillColorEnum.injuries),
                    "",
                    "射出警戒信号标记目标区域，对目标半径",
                    speSkillCon("500"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("300%最终攻击的霜元素伤害"),
                    "，并召唤「巡视装置」",
                    speSkillCon("攻击速度：0.25次每秒"),
                    "，攻击区域内的随机敌方单位，并对目标及周围半径",
                    speSkillCon("200"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("250%最终攻击的霜元素伤害"),
                    "；自身攻击速度提升可同步提升「巡视装置」的攻击速度",
                    "",
                    speSkillCon("【飞霜·协同】技能形态", SkillColorEnum.injuries),
                    "",
                    "朝指定方向射出一枚充能弹药，对路径上的所有敌方单位造成",
                    speSkillCon("300%最终攻击的霜元素伤害"),
                    "，以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退路径上的所有敌方单位，并召唤「协同装置」跟随角色射击。「协同装置」攻击敌方单位将造成",
                    speSkillCon("375%最终攻击的霜元素伤害"),
                    "，同时忽略目标",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤"
                ]//满级技能内容描述
            }
        },
        {
            "name": "排云",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "1秒"], ["次数", "∞"]],
                "tab": ["伤害", "负面状态", "对空"],
                "content": [
                    "被动：消耗全部",
                    speSkillCon("9"),
                    "层",
                    speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣),
                    "生成一枚",
                    speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
                    "，且每",
                    speSkillCon("9"),
                    "秒最多生成1枚，",
                    speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
                    "上限为2枚",
                    "",
                    "主动：进入特殊的射击姿态，消耗一枚",
                    speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
                    "，对路径上的所有敌方单位造成",
                    speSkillCon("2500%最终攻击的霜元素伤害"),
                    "，同时以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退路径上的所有敌方单位",
                    "",
                    "「巡视装置」「协同装置」会在自身释放「排云」时一同释放「排云」",
                    "",
                    "「巡视装置」：「排云」对范围内的随机敌方单位，对目标及周围半径",
                    speSkillCon("300"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("500%最终攻击的霜元素伤害"),
                    "",
                    "「协同装置」：「排云」对正前方路径上的所有敌方单位造成",
                    speSkillCon("500%最终攻击的霜元素伤害"),
                    "，同时以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退路径上的所有敌方单位",
                    "",
                    "场上每有一个「巡视装置」，「排云」暴击率提升",
                    speSkillCon("15%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "",
                    "场上每有一个「协同装置」，「排云」造成伤害忽略目标",
                    speSkillCon("10%"),
                    speSkillCon("（属性乘区·忽略减伤）", SkillColorEnum.injuries),
                    "基础减伤"
                ]
            }
        },
        {
            "name": "霁色长空",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "负面状态", "对空", "穿透屏障"],
                "content": [
                    "朝目标方向射出四发穿透整个战场的强力弹药，对路径上的所有敌方单位共造成",
                    speSkillCon("6000%最终攻击的霜元素伤害"),
                    "，并以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退路径上的所有敌方单位",
                    "",
                    "技能释放结束后会进入「霁色领域」状态，后续",
                    speSkillCon("3"),
                    "次「排云」伤害提升",
                    speSkillCon("70%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，次数耗尽时将退出「霁色领域」状态",
                    "",
                    "潮湿环境下，将直接生成相应范围的霜区域"
                ]
            }
        },
        {
            "name": "特性：腾蛇乘雾",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.25次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "每次射击间隔较长，向目标发射充能子弹，造成",
                    speSkillCon("400%最终攻击的霜元素伤害"),
                    "并为自身叠加",
                    speSkillCon("1"),
                    "层",
                    speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣)
                ],//普通攻击
                "specialContent": [
                    [
                        "「巡视装置」「协同装置」视为召唤物并会协同作战，攻击将叠加",
                        speSkillCon("[充能弹匣]", SkillColorEnum.normal, ToastSkillEnum.充能弹匣),
                        "，场上最多同时存在两架战术装置",
                        "",
                        "初始为「协同装置」跟随角色射击，攻击敌方单位"
                    ],//零花本体特性
                    [
                        "场上每有一个「巡视装置」，「排云」造成暴击时伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "；场上每有一个「协同装置」，「排云」造成伤害忽略目标基础减伤提升至",
                        speSkillCon("25%"),
                        speSkillCon("属性乘区·忽略减伤）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "「排云」造成的伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，",
                        speSkillCon("[排云弹]", SkillColorEnum.normal, ToastSkillEnum.排云弹),
                        "上限提升至3枚"
                    ]//三花特性
                ]
            }
        }
    ],
    "罗咤": [
        {
            "name": "狱火之墙",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "24秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["负面状态", "屏障"],//技能标签
                "content": [
                    "在指定位置制造持续",
                    speSkillCon("20"),
                    "秒的狱火之墙，狱火之墙可以作为",
                    speSkillCon("中等强度"),
                    "的屏障抵御敌方投射物，击退靠近的敌人并造成",
                    speSkillCon("100%最终攻击的炎元素伤害"),
                    "",
                    "施放后装填",
                    speSkillCon("6"),
                    "枚",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                ]//满级技能内容描述
            }
        },
        {
            "name": "模式切换",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "∞"]],
                "tab": ["自身增益"],
                "content": [
                    "被动：每隔",
                    speSkillCon("15"),
                    "秒装填",
                    speSkillCon("6"),
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                    "",
                    "主动：切换普通攻击的攻击模式",
                    "",
                    speSkillCon("【模式切换·炮击模式】普通攻击形态", SkillColorEnum.injuries),
                    "",
                    "“炮击模式”状态下普通攻击效果",
                    "",
                    "射程极远，普通攻击额外获得",
                    speSkillCon("10%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "暴击率和",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·暴击伤害）"),
                    "暴击伤害，造成",
                    speSkillCon("840%最终攻击的炎元素伤害"),
                    "并同时对目标半径",
                    speSkillCon("250"),
                    "范围内敌人造成本次攻击",
                    speSkillCon("50%"),
                    "的伤害",
                    "",
                    speSkillCon("【模式切换·喷火模式】普通攻击形态", SkillColorEnum.injuries),
                    "",
                    "“喷火模式”状态下普通攻击效果",
                    "",
                    speSkillCon("攻击速度：0.20次每秒"),
                    "，对中距离扇形区域内敌人持续喷火，造成",
                    speSkillCon("585%最终攻击的炎元素伤害"),
                    "并附加“炽焰”效果，每秒对目标造成",
                    speSkillCon("50%最终攻击的炎元素伤害"),
                    "，可叠加",
                    speSkillCon("3"),
                    "层，持续",
                    speSkillCon("5"),
                    "秒"
                ]
            }
        },
        {
            "name": "狂欢派对",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "75秒"]],
                "tab": ["炎区域", "伤害"],
                "content": [
                    "朝指定位置半径",
                    speSkillCon("300"),
                    "范围内随机发射炮弹，对半径",
                    speSkillCon("80"),
                    "范围内的所有目标预计总共造成",
                    speSkillCon("4500%最终攻击的炎元素伤害"),
                    "",
                    "炮弹落地时将生成炎元素区域",
                    "",
                    "施放后装填",
                    speSkillCon("8"),
                    "枚",
                    speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                ]
            }
        },
        {
            "name": "特性：枪械发烧友",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.33次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "射程极远，向当前目标发射炮弹，造成",
                    speSkillCon("336%最终攻击的炎元素伤害"),
                    "并同时对目标半径",
                    speSkillCon("250"),
                    "范围内敌人造成本次攻击",
                    speSkillCon("50%"),
                    "的伤害（实际伤害随【模式切换】技能等级提升）"
                ],//普通攻击
                "specialContent": [
                    [
                        "可向武器中装填",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                        "，当存在",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                        "时，基础攻击速度提升",
                        speSkillCon("75%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "，每次普通攻击会消耗一枚",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                        "，最多填装20枚",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                    ],//零花本体特性
                    [
                        "普通攻击有",
                        speSkillCon("20%"),
                        "的几率不消耗",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药)
                    ],//一花特性
                    [
                        "存在",
                        speSkillCon("[弹药]", SkillColorEnum.normal, ToastSkillEnum.弹药),
                        "时基础攻击速度提升效果提高到",
                        speSkillCon("100%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "卡洛琳": [
        {
            "name": "量身调制",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "抉择技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "-"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益", "回复"],//技能标签
                "content": [
                    "选择一种药剂进行炼制，强化普通攻击（指令冷却均为",
                    speSkillCon("20"),
                    "秒）：",
                    "",
                    speSkillCon("【爆裂试剂】技能形态", SkillColorEnum.injuries),
                    "",
                    speSkillCon("攻击速度：0.35次每秒"),
                    "，对目标造成",
                    speSkillCon("639%最终攻击的蚀元素伤害"),
                    "并对其半径",
                    speSkillCon("250"),
                    "范围内的敌人造成",
                    speSkillCon("50%"),
                    "伤害，同时为终端附加",
                    speSkillCon("4点蚀爆值"),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "每次炼制永久提升【爆裂试剂】强度：爆裂试剂伤害提升",
                    speSkillCon("10%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，最多提升",
                    speSkillCon("5"),
                    "次",
                    "",
                    speSkillCon("【吉速汤药】技能形态", SkillColorEnum.injuries),
                    "",
                    speSkillCon("攻击速度：0.67次每秒"),
                    "，对目标造成",
                    speSkillCon("509%最终攻击力的蚀元素伤害"),
                    "，同时为终端附加",
                    speSkillCon("3点蚀爆值"),
                    "，持续",
                    speSkillCon("20"),
                    "秒；对命中的目标施加“吉速印记”，持续",
                    speSkillCon("3"),
                    "秒，友方对其造成伤害时回复该友方",
                    speSkillCon("3%最大生命值"),
                    "（对同一目标的回复效果每",
                    speSkillCon("3"),
                    "秒最多触发1次）",
                    "",
                    "每次炼制永久提升【吉速汤药】强度：提升1%最大生命值回复，最多提升",
                    speSkillCon("5"),
                    "次"
                ]//满级技能内容描述
            }
        },
        {
            "name": "融骨灵",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "10秒"]],
                "tab": ["自身增益"],
                "content": [
                    "下—次普通攻击额外提升",
                    speSkillCon("15点蚀爆值"),
                    "，蚀元素伤害提升",
                    speSkillCon("448%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "好事成双水",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "75秒"]],
                "tab": ["自身增益"],
                "content": [
                    "普通攻击可以一次丢出双份药剂，持续",
                    speSkillCon("36"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：万能加时汤剂",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.44次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标投掷蓝色药剂造成",
                    speSkillCon("230%最终攻击的蚀元素伤害"),
                    "，为终端附加",
                    speSkillCon("2点蚀爆值"),
                    "，命中时有",
                    speSkillCon("10%"),
                    "概率灵光一闪，附加蚀爆值为",
                    speSkillCon("2"),
                    "倍"
                ],//普通攻击
                "specialContent": [
                    [
                        "每触发",
                        speSkillCon("2"),
                        "次蚀爆伤害时，为抉择技【量身调制】回复一次技能次数"
                    ],//零花本体特性
                    [
                        "登场时分别获得1层主动技能【爆裂试剂】、主动技能【吉速汤剂】的成长效果（该提升视为自身技能施放获得的永久属性提升）"
                    ],//一花特性
                    [
                        "灵光一闪的概率提升至",
                        speSkillCon("20%"),
                        "，蚀爆值倍率提高为",
                        speSkillCon("2.5"),
                        "倍"
                    ]//三花特性
                ]
            }
        }
    ],
    "莉缇亚": [
        {
            "name": "闪金回响",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "自身增益"],//技能标签
                "content": [
                    "被动：特性产生的金币对触碰到的敌人造成",
                    speSkillCon("275%专精的雷元素伤害"),
                    "",
                    "向目标区域挥洒10枚金币，每枚金币都会对途中触碰到的敌人造成",
                    speSkillCon("275%专精的雷元素伤害"),
                    "，随后召回场上所有金币，再次对途中触碰到的敌人造成",
                    speSkillCon("275%专精的雷元素伤害"),
                    "",
                    "累计召回",
                    speSkillCon("30"),
                    "金币后获得强化：挥洒的金币数量增加",
                    speSkillCon("5"),
                    "枚"
                ]//满级技能内容描述
            }
        },
        {
            "name": "商神印记",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "20秒"]],
                "tab": ["伤害", "穿透屏障", "持续施法"],
                "content": [
                    speSkillCon("该效果仅对精英及首领级别敌人生效", SkillColorEnum.injuries),
                    "",
                    "吟唱",
                    speSkillCon("4"),
                    "秒后，对单个目标造成",
                    speSkillCon("3125%最终攻击的雷元素伤害"),
                    "+",
                    speSkillCon("3125%专精的雷元素伤害"),
                    "，并在目标附近掉落3枚金币",
                    "",
                    "主动技能【闪金回响】累计召回",
                    speSkillCon("75"),
                    "枚金币后获得强化：吟唱时间缩短",
                    speSkillCon("3"),
                    "秒，掉落金币增加到",
                    speSkillCon("5"),
                    "枚，且命中目标后回复1次主动技能【闪金回响】次数"
                ]
            }
        },
        {
            "name": "雷霆圣域",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "穿透屏障"],
                "content": [
                    "对指定区域半径",
                    speSkillCon("500"),
                    "范围内的敌人总计造成",
                    speSkillCon("2700%最终攻击的雷元素伤害"),
                    "+",
                    speSkillCon("2700%专精的雷元素伤害"),
                    "，并在区域内随机掉落10枚金币",
                    "",
                    "主动技能【闪金回响】累计召回",
                    speSkillCon("130"),
                    "枚金币后获得强化：掉落金币数量翻倍"
                ]
            }
        },
        {
            "name": "特性：等价法则",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射魔法金币造成",
                    speSkillCon("100%最终攻击的雷元素伤害"),
                    "+",
                    speSkillCon("100%专精的雷元素伤害"),
                    "",
                    "普通攻击命中敌人后，会在敌人附近掉落",
                    speSkillCon("1"),
                    "枚附着雷电之力的魔法金币，对触碰到的敌人造成雷元素伤害，金币持续存在",
                    speSkillCon("10"),
                    "秒"
                ],//普通攻击
                "specialContent": [
                    [
                        "无"
                    ],//零花本体特性
                    [
                        "普通攻击掉落的金币增加至",
                        speSkillCon("2"),
                        "枚，造成的雷元素伤害提升",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                        "，持续时间增加至",
                        speSkillCon("15"),
                        "秒"
                    ],//一花特性
                    [
                        "每次召回金币时，永久提升",
                        speSkillCon("0.2%"),
                        speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                        "基础专精值，最多召回150枚金币"
                    ]//三花特性
                ]
            }
        }
    ],
    "尚非乐": [
        {
            "name": "知风",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "友方增益", "拦截"],//技能标签
                "content": [
                    "提升全体友方同调者",
                    speSkillCon("50%[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，自身攻击速度额外提升",
                    speSkillCon("25%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("20"),
                    "秒（效果结束后，将永久提升自身",
                    speSkillCon("10%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "攻击速度，最多可叠加",
                    speSkillCon("3"),
                    "次），并拦截所有敌方投射物"
                ]//满级技能内容描述
            }
        },
        {
            "name": "风骤起",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害"],
                "content": [
                    "连续朝3个方向丢出风筝，对沿途命中的目标造成",
                    speSkillCon("625%最终攻击的风元素伤害"),
                    "+",
                    speSkillCon("625%专精的风元素伤害"),
                    "",
                    "普通攻击命中目标时缩短",
                    speSkillCon("1"),
                    "秒施放间隔（每",
                    speSkillCon("3"),
                    "秒最多触发一次）"
                ]
            }
        },
        {
            "name": "正义的伙伴",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害"],
                "content": [
                    "对指定区域范围",
                    speSkillCon("350"),
                    "内的敌方单位攻击10次，每次造成",
                    speSkillCon("210%最终攻击的风元素伤害"),
                    "+",
                    speSkillCon("210%专精的风元素伤害"),
                    "",
                    "自身攻击速度每提升",
                    speSkillCon("30%"),
                    "，额外攻击1次，最多额外攻击",
                    speSkillCon("3"),
                    "次"
                ]
            }
        },
        {
            "name": "特性：快快长大",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.42次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "对路径上的目标造成",
                    speSkillCon("60%最终攻击的风元素伤害"),
                    "，到最远处飞回并造成",
                    speSkillCon("2"),
                    "次伤害，伤害随风筝攻击到目标数衰减（最多降低至",
                    speSkillCon("25%"),
                    "），每次命中目标后，可以缩短自动技能【风骤起】的施放冷却（每",
                    speSkillCon("3"),
                    "秒触发一次）"
                ],//普通攻击
                "specialContent": [
                    [
                        "每次造成伤害时获得1层强化：基础攻击速度提升",
                        speSkillCon("1%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("5"),
                        "秒，可叠加",
                        speSkillCon("20"),
                        "次"
                    ],//零花本体特性
                    [
                        "特性产生的攻击速度叠加至上限时，普通攻击额外造成",
                        speSkillCon("30%专精值的风元素伤害")
                    ],//一花特性
                    [
                        "普通攻击命中减少自动技能【风骤起】施放间隔的效果受自身攻速影响，最多降低到每",
                        speSkillCon("1"),
                        "秒触发一次（预计当自身攻击速度额外提升",
                        speSkillCon("80%"),
                        "时，达到最低触发间隔）"
                    ]//三花特性
                ]
            }
        }
    ],
    "刘兄": [
        {
            "name": "闪光之跃",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "25秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "穿透屏障"],//技能标签
                "content": [
                    "朝指定方向发射闪电，命中第一个目标后跳转至半径",
                    speSkillCon("400"),
                    "范围内的另一个目标，造成",
                    speSkillCon("5000%最终攻击的雷元素伤害"),
                    "，最多命中",
                    speSkillCon("5"),
                    "个目标（优先命中不同的目标）",
                    "",
                    "每次造成的伤害递减",
                    speSkillCon("20%"),
                    "（对同一目标额外递减",
                    speSkillCon("20%"),
                    "），最多降低至原来的",
                    speSkillCon("40%"),
                    "（对同一目标最多降低至原来的",
                    speSkillCon("20%"),
                    "）",
                    "",
                    "自动技能【颂歌之证】达到阶段III和阶段V时增加1个命中目标上限"
                ]//满级技能内容描述
            }
        },
        {
            "name": "颂歌之证",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "25秒"]],
                "tab": ["自身增益"],
                "content": [
                    "书写颂歌，随颂歌阶段获得永久的能力提升并回复1次主动技能【闪光之跃】的使用次数",
                    "",
                    "阶段I：攻击力提升",
                    speSkillCon("23%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "",
                    "阶段II：基础攻击速度提升",
                    speSkillCon("23%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "",
                    "阶段III：专精提升",
                    speSkillCon("23%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    "",
                    "阶段IV：基础攻击速度额外提升",
                    speSkillCon("23%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "",
                    "阶段V：特性触发率提高",
                    speSkillCon("50%")
                ]
            }
        },
        {
            "name": "真理之霆",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["伤害", "拦截", "穿透屏障"],
                "content": [
                    "使用闪电连续攻击目标点半径",
                    speSkillCon("350"),
                    "范围内的所有敌方单位，总计造成",
                    speSkillCon("4800%最终攻击的雷元素伤害")
                ]
            }
        },
        {
            "name": "特性：无巧不成书",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.59次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射雷电造成",
                    speSkillCon("170%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "普通攻击和技能命中目标时有",
                        speSkillCon("20%"),
                        "的几率额外造成",
                        speSkillCon("200%专精的雷元素伤害")
                    ],//零花本体特性
                    [
                        "进入战场时，获得一层【颂歌之证】效果（该提升视为自身技能施放获得的永久属性提升）"
                    ],//一花特性
                    [
                        "普通攻击和技能命中目标时有",
                        speSkillCon("30%"),
                        "的几率额外造成",
                        speSkillCon("200%专精的雷元素伤害")
                    ]//三花特性
                ]
            }
        }
    ],
    "龙晴": [
        {
            "name": "子非鱼",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "友方增益", "回复", "屏障"],//技能标签
                "content": [
                    "使全体友方同调者获得",
                    speSkillCon("4"),
                    "层水流屏障，屏障持续",
                    speSkillCon("600"),
                    "秒，在屏障持续期间使其受到投射物的伤害降低",
                    speSkillCon("48%~80%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                    "，受到其他类型的伤害降低",
                    speSkillCon("12%~20%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                    "；同调者受到伤害后失去1层水流屏障",
                    "",
                    "每失去1层水流屏障时，回复其",
                    speSkillCon("313%治愈力"),
                    "的生命值，并召唤金鳞反击，对沿途敌人造成",
                    speSkillCon("100%最终攻击的水元素伤害"),
                    "，金鳞反击伤害视为自动技能伤害",
                    "",
                    "每2秒最多失去1层水流屏障"
                ]//满级技能内容描述
            }
        },
        {
            "name": "游无穷",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "10秒"]],
                "tab": ["回复"],
                "content": [
                    "将琉璃珠扔出，琉璃珠会在友方之间回弹，最多回弹",
                    speSkillCon("6"),
                    "次，每次回弹将会治疗友方同调者",
                    speSkillCon("188%治愈力"),
                    "的生命值",
                    "",
                    "对处于友方屏障下的同调者，该次治疗额外提高",
                    speSkillCon("20%"),
                    speSkillCon("（治疗乘区·额外治疗）", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "知北往",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["友方增益", "屏障"],
                "content": [
                    "驱动琉璃珠飞向指定位置展开半径",
                    speSkillCon("500"),
                    "范围",
                    speSkillCon("较大强度"),
                    "的球形屏障，使范围内友方基础减伤增加",
                    speSkillCon("24%~40%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（减伤乘区·受伤害减少）", SkillColorEnum.injuries),
                    "，同时完全抵御来自外界的敌方投射物攻击，并每秒对区域内敌人造成",
                    speSkillCon("458%最终攻击的水元素伤害"),
                    "、以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退效果，持续",
                    speSkillCon("12"),
                    "秒（总计造成",
                    speSkillCon("5500%最终攻击的水元素伤害"),
                    "）"
                ]
            }
        },
        {
            "name": "特性：长相护",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "召唤金鳞，对路径上的敌人",
                    speSkillCon("100%最终攻击的水元素伤害"),
                    "，游回时造成2次伤害"
                ],//普通攻击
                "specialContent": [
                    [
                        "无"
                    ],//零花本体特性
                    [
                        "主动技能【子非鱼】为友方同调者提供的水流屏障提升至",
                        speSkillCon("5"),
                        "层，且屏障的保护层数可以被叠加"
                    ],//一花特性
                    [
                        "主动技能【子非鱼】效果持续期间，同调者受到攻击召唤金鳞反击时，额外附加龙晴",
                        speSkillCon("250%"),
                        "自身专精值的伤害"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "处于【子非鱼】的水流屏障下的队友每层水流屏障使主动技能回复速度提高",
                    speSkillCon("10%"),
                    speSkillCon("（[属性乘区·主动技能回复速度]", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                    "，最多提高100%"
                ]
            }
        }
    ],
    "珑": [
        {
            "name": "观天运",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "回复", "负面状态"],//技能标签
                "content": [
                    "向目标区域投掷骰盅，对",
                    speSkillCon("300"),
                    "范围内敌人造成",
                    speSkillCon("1300%最终攻击的蚀元素伤害"),
                    "且使目标陷入",
                    speSkillCon("3"),
                    "秒的眩晕状态，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "",
                    "同时，对全体友方同调者进行急救，当生命值低于",
                    speSkillCon("50%"),
                    "时，使生命回复到",
                    speSkillCon("50%"),
                    "，并为全体友方同调者回复",
                    speSkillCon("750%治愈力"),
                    "的生命值"
                ]//满级技能内容描述
            }
        },
        {
            "name": "掷乾坤",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "3"]],
                "tab": ["自身增益", "友方增益", "回复"],
                "content": [
                    "被动：每隔",
                    speSkillCon("3"),
                    "秒，对自己和除自己以外的当前场上生命值最低的友方同调者回复",
                    speSkillCon("125%治愈力"),
                    "的生命值",
                    "",
                    "",
                    "主动：全体友方同调者获得一个持续",
                    speSkillCon("15"),
                    "秒的增益效果，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "。在增益效果持续期间，主动技能回复速度提高",
                    speSkillCon("60%"),
                    "，且每次普攻回复",
                    speSkillCon("1.5"),
                    "秒异核充能，最多可以回复",
                    speSkillCon("15"),
                    "秒异核充能（珑重伤或离场时，此效果消失）",
                    "",
                    "在珑首次施放异核技能【翻覆手】的增益效果持续时间内，主动技能回复效果翻倍。"
                ]
            }
        },
        {
            "name": "翻覆手",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "友方增益", "自身增益", "回复", "拦截"],
                "content": [
                    "向目标区域投掷骰盅，摧毁范围内投射物，对区域内目标造成",
                    speSkillCon("2000％最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "。同时，对全体友方同调者施加持续",
                    speSkillCon("15"),
                    "秒的治疗，每秒回复",
                    speSkillCon("150%治愈力"),
                    "的生命值。",
                    "",
                    "骰盅掀开时，使全体同调者获得增益效果，提高",
                    speSkillCon("50％"),
                    speSkillCon("[同调者暴击伤害]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击伤害),
                    speSkillCon("(属性乘区·暴击伤害)", SkillColorEnum.injuries),
                    "，并根据当前队长的元素属性同时获得以下不同的效果，持续",
                    speSkillCon("15"),
                    "秒（珑重伤或离场时，此效果消失）",
                    "",
                    "蚀元素队长：提高",
                    speSkillCon("40%"),
                    speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries),
                    "，提高",
                    speSkillCon("60%"),
                    speSkillCon("[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                    speSkillCon("(属性乘区·攻击速度)", SkillColorEnum.injuries),
                    "",
                    "非蚀元素队长：提高",
                    speSkillCon("25%"),
                    speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                    speSkillCon("(属性乘区·攻击力加成)", SkillColorEnum.injuries),
                    "，造成的伤害无视目标",
                    speSkillCon("20%"),
                    speSkillCon("(属性乘区·忽略减伤)", SkillColorEnum.injuries),
                    "基础减伤"
                ]
            }
        },
        {
            "name": "特性：玲珑心",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体"],
                "content": [
                    "对目标造成",
                    speSkillCon("200%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("3点蚀爆值")
                ],//普通攻击
                "specialContent": [
                    [
                        "每2次普攻，会为当前场上生命值最低的友方同调者回复",
                        speSkillCon("50％~60％治愈力"),
                        "的生命值（该效果最多每",
                        speSkillCon("1.5"),
                        "秒触发",
                        speSkillCon("1"),
                        "次）",
                    ],//零花本体特性
                    [
                        "异核技能【翻覆手】的增益效果持续时间额外增加",
                        speSkillCon("10"),
                        "秒，且增益效果额外使队长暴击率提高",
                        speSkillCon("25%"),
                        speSkillCon("(属性乘区·暴击率)", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "自身在场时使场上敌方全元素抗性降低",
                        speSkillCon("15％~20％"),
                        speSkillCon("([目标减益乘区·目标抗性降低])", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "（效果随终端提升，",
                        speSkillCon("1350"),
                        "点时达到最大值）"
                    ]//三花特性
                ]
            }
        }
    ],
    "言御": [
        {
            "name": "冰点算法",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["回复"],//技能标签
                "content": [
                    "回收全体友方同调者当前的",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "，分摊给全体友方同调者转化为护盾（将计入友方同调者各自的受治疗加成效果影响）",
                    "",
                    "为全体友方同调者额外施加",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "，伤害抵挡量相当于言御自身",
                    speSkillCon("1000%治愈力"),
                    "",
                    "若施加",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "后，友方同调者目标生命值低于100%，则将转化",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "治疗生命值（每点",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "回复的生命值将计入友方同调者各自的受治疗加成效果影响）"
                ]//满级技能内容描述
            }
        },
        {
            "name": "全量加密",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "3"]],
                "tab": ["伤害", "友方增益", "自身增益", "负面状态"],
                "content": [
                    speSkillCon("被动", SkillColorEnum.injuries),
                    "：每隔",
                    speSkillCon("10"),
                    "秒，为全体友方同调者施加",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "，伤害抵挡量相当于言御自身",
                    speSkillCon("163%治愈力"),
                    "（开战时自动技能充能增加80%）",
                    "",
                    speSkillCon("主动"),
                    "：为一名选中的友方同调者赋予",
                    speSkillCon("50%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，召唤物提升100%暴击率，持续",
                    speSkillCon("15"),
                    "秒，并为选中的友方同调者施加",
                    speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                    "效果，使目标下一次普通攻击附带半径",
                    speSkillCon("300"),
                    "范围霜元素伤害，基础伤害为",
                    speSkillCon("800%"),
                    "言御最终攻击力（该伤害效果视作主动技能伤害），且每",
                    speSkillCon("6"),
                    "秒额外为该友方同调者施加1次",
                    speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                    "效果"
                ]
            }
        },
        {
            "name": "零度通信",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "自身增益", "友方增益"],
                "content": [
                    "为场上友方水、雷、霜元素同调者施加",
                    speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                    "效果，使同调者下一次普通攻击附带半径",
                    speSkillCon("300"),
                    "范围霜元素伤害，基础伤害为",
                    speSkillCon("2500%"),
                    "言御最终攻击力（该伤害效果视作异核技能伤害）",
                    "",
                    "为全体友方同调者施加",
                    speSkillCon("[冰点协议]", SkillColorEnum.normal, ToastSkillEnum.冰点协议),
                    "，伤害抵挡量相当于言御自身",
                    speSkillCon("900%治愈力"),
                    "",
                    "言御以自身为中心对半径",
                    speSkillCon("500"),
                    "范围内的所有敌人造成",
                    speSkillCon("1200%最终攻击的霜元素伤害"),
                    "，并冻结命中的目标",
                    speSkillCon("3"),
                    "秒",
                    "",
                    "潮湿环境下，将直接生成相应范围的霜区域"
                ]
            }
        },
        {
            "name": "特性：态势感知",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "向当前目标发射冰刃，对路径上的目标造成",
                    speSkillCon("150%最终攻击的霜元素伤害"),
                    "",
                    "每三次普通攻击中第三次会触发",
                    speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                    "效果，造成半径",
                    speSkillCon("100"),
                    "范围霜元素伤害，基础伤害为",
                    speSkillCon("150%"),
                    "言御最终攻击力（该伤害效果视作普通攻击伤害）"
                ],//普通攻击
                "specialContent": [
                    [
                        "言御自身造成的霜元素伤害使敌人水、雷元素抗性降低",
                        speSkillCon("10%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，霜元素抗性降低",
                        speSkillCon("20%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("15"),
                        "秒，重复触发将会刷新效果的持续时间",
                        "",
                        speSkillCon("言御可为友方同调者施加「冰点协议」：", SkillColorEnum.injuries),
                        "",
                        "为友方同调者抵御伤害，施加伤害抵挡量时，将不计入目标的受治疗加成（同调者身上存在的",
                        speSkillCon("「冰点协议」", SkillColorEnum.injuries),
                        "最大不超过言御最大生命值的2倍）",
                        "",
                        speSkillCon("言御可为友方同调者施加「极寒测试」：", SkillColorEnum.injuries),
                        "使友方同调者下一次普通攻击时，以普通攻击目标为中心，造成一次基于言御最终攻击力的范围霜元素伤害,该伤害在“潮湿”环境下会直接生成霜元素区域。极寒测试视为友方造成的伤害，除最终攻击力外的所有属性使用友方自身的加成"
                    ],//零花本体特性
                    [
                        "言御每3次普通攻击触发的",
                        speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                        "范围提升至",
                        speSkillCon("300"),
                        "；若敌对目标位于霜区域上时，则伤害来源为言御的",
                        speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                        "会额外使目标霜元素抗性降低",
                        speSkillCon("50%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("15"),
                        "秒，重复触发会刷新效果的持续时间"
                    ],//一花特性
                    [
                        "【全量加密】的主动技能效果中额外附加",
                        speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                        "的间隔降低至",
                        speSkillCon("3"),
                        "秒；霜元素同调者通过【全量加密】触发的",
                        speSkillCon("[极寒测试]", SkillColorEnum.normal, ToastSkillEnum.极寒测试),
                        "伤害提升",
                        speSkillCon("60%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "紫都": [
        {
            "name": "湛蓝寄语",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "25秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["回复", "持续施法"],//技能标签
                "content": [
                    "持续对生命值百分比最低的",
                    speSkillCon("3"),
                    "名友方同调者进行治疗，每秒治疗目标",
                    speSkillCon("100%治愈力"),
                    "的生命值，持续15秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "踏风小调",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "友方增益", "回复"],
                "content": [
                    "朝当前生命最低的友方同调者释放鹿蜀幻影，治疗沿途所有友方同调者",
                    speSkillCon("375%治愈力"),
                    "的生命值并增加",
                    speSkillCon("4.8%~8%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    speSkillCon("[同调者基础减伤]", SkillColorEnum.normal, ToastSkillEnum.同调者基础减伤),
                    "，持续",
                    speSkillCon("8"),
                    "秒，同时对沿途所有敌人造成",
                    speSkillCon("1375%最终攻击的风元素伤害")
                ]
            }
        },
        {
            "name": "初醒的辛西娅",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["伤害", "友方增益", "自身增益", "回复"],
                "content": [
                    "对全场敌人造成",
                    speSkillCon("2000%最终攻击的风元素伤害"),
                    speSkillCon("20"),
                    "秒的复苏状态，每秒治疗目标",
                    speSkillCon("350%治愈力"),
                    "的生命值，提升全体同调者",
                    speSkillCon("18%~30%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·元素抗性提高）", SkillColorEnum.injuries),
                    "全元素抗性"
                ]
            }
        },
        {
            "name": "特性：一族之长",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.43次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射飞弹造成",
                    speSkillCon("230%最终攻击的风元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "擅长大范围群体治疗",
                        "",
                        "治疗铁御、轻卫、尖锋时，治疗量提升",
                        speSkillCon("20%"),
                        speSkillCon("（治疗乘区·独立治疗）", SkillColorEnum.injuries),
                        "，并增加目标",
                        speSkillCon("3%~5%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                        speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                        "基础减伤，持续",
                        speSkillCon("5"),
                        "秒"
                    ],//零花本体特性
                    [
                        "自动技能【踏风小调】可以额外施放一只鹿蜀幻影，产生的伤害及治疗量为原始幻影的50%"
                    ],//一花特性
                    [
                        "编入队伍时，提升全队",
                        speSkillCon("6%~10%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                        speSkillCon("（属性乘区·元素抗性提高）", SkillColorEnum.injuries),
                        "全元素抗性"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "踏风小调】的鹿蜀幻影使命中的友方同调者提高",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    speSkillCon("[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                    "和",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精),
                    "，持续10秒，该效果最多叠加2层"
                ]
            }
        }
    ],
    "芙蕖": [
        {
            "name": "掀翻舞台",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["自身增益", "友方增益"],//技能标签
                "content": [
                    "切换舞台效果，使所有同调者提升",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    speSkillCon("[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    "和",
                    speSkillCon("20%"),
                    speSkillCon("（属性乘区·专精加成）", SkillColorEnum.injuries),
                    speSkillCon("[同调者专精]", SkillColorEnum.normal, ToastSkillEnum.同调者专精),
                    "，同时使指令冷却的回复速度和自动技能的充能速度加快",
                    speSkillCon("50%"),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "同一时间只能激活一种舞台效果"
                ]//满级技能内容描述
            }
        },
        {
            "name": "片刻沉溺",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],
                "tab": ["自身增益", "友方增益", "回复"],
                "content": [
                    "被动：每隔",
                    speSkillCon("5"),
                    "秒治疗所有友方同调者",
                    speSkillCon("125%治愈力"),
                    "的生命值",
                    "",
                    "主动：切换舞台效果，被动治疗同调者生命值的间隔降低一半，并为目标额外增加",
                    speSkillCon("9%~15%（[防御依赖]）", SkillColorEnum.normal, ToastSkillEnum.防御依赖),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries),
                    speSkillCon("[同调者基础减伤]", SkillColorEnum.normal, ToastSkillEnum.同调者基础减伤),
                    "，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "同一时间只能激活一种舞台效果"
                ]
            }
        },
        {
            "name": "安可时间",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["回复"],
                "content": [
                    "无消耗再次激活上一个舞台效果，且该舞台效果获得「安可」状态：舞台效果的治疗量提高",
                    speSkillCon("60%"),
                    "；属性加成、资源回复的效果提高",
                    speSkillCon("100%")
                ]
            }
        },
        {
            "name": "特性：反向应援",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "-"], ["攻击速度", "-"]],
                "atType": ["不攻击"],
                "content": [
                    "不会攻击敌人",
                ],//普通攻击
                "specialContent": [
                    [
                        "在场时，使场上所有同调者提升",
                        speSkillCon("15%"),
                        speSkillCon("[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                        "",
                        "司危在场时，场上友方同调者的基础攻击力额外提升",
                        speSkillCon("5%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "切换舞台效果后，获得",
                        speSkillCon("5"),
                        "秒「安可」状态（当前舞台效果的治疗量提高；属性加成、资源回复的效果提高）"
                    ],//一花特性
                    [
                        "【掀翻舞台】和【片刻沉溺】的舞台效果激活持续期间，对其他友方同调者造成治疗时，额外为目标回复",
                        speSkillCon("4%"),
                        "异核充能进度"
                    ]//三花特性
                ]
            }
        }
    ],
    "苏筱": [
        {
            "name": "选择障碍",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "抉择技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "-"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害"],//技能标签
                "content": [
                    "可选择以下其一技能施放：",
                    "",
                    "剑形态-经典战备：对直线范围内的敌人造成",
                    speSkillCon("1500%最终攻击的物理伤害"),
                    "（指令冷却：",
                    speSkillCon("12"),
                    "秒）",
                    "",
                    "锤形态-大锤定律：对离中心点最近的单个敌人造成",
                    speSkillCon("5000%最终攻击的物理伤害"),
                    "，同时溅射周围敌人造成",
                    speSkillCon("625%最终攻击的物理伤害"),
                    "（指令冷却：",
                    speSkillCon("20"),
                    "秒）"
                ]//满级技能内容描述
            }
        },
        {
            "name": "外勤统筹",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "2"]],
                "tab": ["回复", "屏障"],
                "content": [
                    "被动：每隔",
                    speSkillCon("5"),
                    "秒，无人机会治疗场上当前生命值百分比最低的友方同调者总计",
                    speSkillCon("250%治愈力"),
                    "的生命值",
                    "",
                    "",
                    "主动：操纵无人机在指定位置生成",
                    speSkillCon("较大强度"),
                    "的屏障，抵御敌方投射物，持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "三倍工资",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"]],
                "tab": ["回复"],
                "content": [
                    "使全体友方同调者提升",
                    speSkillCon("60%[同调者最大生命值]", SkillColorEnum.normal, ToastSkillEnum.同调者最大生命值),
                    "，并回复所有生命值"
                ]
            }
        },
        {
            "name": "特性：全能助理",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.62次每秒"]],
                "atType": ["单体"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("144%最终攻击的物理伤害"),
                    "，第三下普通攻击会向目标挥锤造成圆形范围",
                    speSkillCon("360%最终攻击的物理伤害"),
                    "",
                    "近战范围没有目标时，普通攻击会向远处敌人投掷爆弹，",
                    speSkillCon("攻击速度：0.40次每秒"),
                    "，造成小范围",
                    speSkillCon("72%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "操纵白荆科技无人机（视为召唤物）辅助外勤工作，负责治疗和防护",
                        "",
                        "当友方同调者陷入危机时，立即解除自身与目标同调者的",
                        speSkillCon("[控制效果]", SkillColorEnum.normal, ToastSkillEnum.控制效果),
                        "，无人机将回复该名同调者全部生命和技能使用次数，同时使该同调者和自身的攻击力提升",
                        speSkillCon("10%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                        "，暴击率提升",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "，持续至战斗结束（该效果一场战斗只能触发—次）"
                    ],//零花本体特性
                    [
                        "治愈力提升",
                        speSkillCon("20%"),
                        speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries),
                        "，造成伤害时附带",
                        speSkillCon("20%"),
                        speSkillCon("（增伤乘区·额外伤害增加值）", SkillColorEnum.injuries),
                        "治愈力的额外伤害"
                    ],//一花特性
                    [
                        "区域切换时，将重置特性效果的触发次数"
                    ]//三花特性
                ]
            }
        }
    ],
    "阳铃": [
        {
            "name": "早春祷歌",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["回复"],//技能标签
                "content": [
                    "对全体友方同调者进行「持续治疗」，每秒治疗目标",
                    speSkillCon("68%治愈力"),
                    "的生命值，持续",
                    speSkillCon("15"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "冬的挽留",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "20秒"]],
                "tab": ["伤害", "负面状态"],
                "content": [
                    "在指定位置制造半径",
                    speSkillCon("300"),
                    "范围的暴风雪区域，每0.5秒对区域内的敌人造成",
                    speSkillCon("158%最终攻击的霜元素伤害"),
                    "，持续",
                    speSkillCon("10"),
                    "秒"
                ]
            }
        },
        {
            "name": "鼬的报恩",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["自身增益", "友方增益", "回复", "持续施法"],
                "content": [
                    "持续施法对全场生命值百分比最低的三名友方同调者进行治疗，每秒治疗目标",
                    speSkillCon("240%治愈力"),
                    "的生命值，持续",
                    speSkillCon("6"),
                    "秒",
                    "",
                    "同时提升全场友方同调者",
                    speSkillCon("30%[同调者攻击速度]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击速度),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("10"),
                    "秒"
                ]
            }
        },
        {
            "name": "特性：与维瑟尔约定",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.60次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射雪球或冰锥，造成",
                    speSkillCon("165%最终攻击的霜元素伤害"),
                    "",
                    "目标在自身近战范围内时，下次普通攻击替换为雪鼬扫尾，造成",
                    speSkillCon("300%最终攻击的霜元素伤害"),
                    "并以",
                    speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退范围内的所有敌人 (每20秒最多触发一次)"
                ],//普通攻击
                "specialContent": [
                    [
                        "攻击对敌人附加移动速度降低",
                        speSkillCon("70%"),
                        "效果，持续",
                        speSkillCon("3"),
                        "秒"
                    ],//零花本体特性
                    [
                        "治愈力提升",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries),
                        "，同时延长",
                        speSkillCon("5"),
                        "秒主动技能【早春祷歌】的持续时间"
                    ],//一花特性
                    [
                        "受到特性减速效果影响的单位遭受的伤害提高",
                        speSkillCon("10%"),
                        speSkillCon("（目标减益乘区·目标额外减伤降低）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "元桃桃": [
        {
            "name": "奶茶双响炮",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "10秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["回复"],//技能标签
                "content": [
                    "开启「治疗模式」，普通攻击改为向生命最低的友方同调者连续发射治疗弹，每",
                    speSkillCon("2.4"),
                    "秒总计治疗目标",
                    speSkillCon("263%治愈力"),
                    "的生命值，持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    "效果期间自动技能【青提波波】将暂停冷却回复"
                ]//满级技能内容描述
            }
        },
        {
            "name": "青提波波",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "负面状态"],
                "content": [
                    "对一名敌方目标总计造成",
                    speSkillCon("3000%最终攻击的水元素伤害"),
                    "，并使其攻击速度降低",
                    speSkillCon("50%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("3"),
                    "秒"
                ]
            }
        },
        {
            "name": "桃桃乌龙茶",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["水区域", "回复", "伤害"],
                "content": [
                    "对指定区域内所有敌方目标总计造成",
                    speSkillCon("2400%最终攻击的水元素伤害"),
                    "，同时治疗所有友方同调者",
                    speSkillCon("660%治愈力"),
                    "的生命值，并在范围内生成水元素区域"
                ]
            }
        },
        {
            "name": "特性：奶茶双拼",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.75次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射波波弹造成",
                    speSkillCon("133%最终攻击的水元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可以切换攻击模式与治疗模式"
                    ],//零花本体特性
                    [
                        "主动技能【奶茶双响炮】使用次数+1"
                    ],//一花特性
                    [
                        "治愈力提升",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "长谣": [
        {
            "name": "闭门蟹客",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "18秒"], ["次数", "3"]],//技能使用情况，如冷却，可使用次数
                "tab": ["水区域", "负面状态", "伤害"],//技能标签
                "content": [
                    "向目标位置发射泡泡，在目标位置留下水元素区域。",
                    "",
                    "泡泡会将目标点半径",
                    speSkillCon("150"),
                    "范围内的敌人困在空中，持续",
                    speSkillCon("5"),
                    "秒后泡泡碎裂，对半径",
                    speSkillCon("150"),
                    "范围内的敌人造成",
                    speSkillCon("875%最终攻击的水元素伤害"),
                    "（该效果对精英、首领级别敌人无效）"
                ]//满级技能内容描述
            }
        },
        {
            "name": "蟹手回春",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "5秒"]],
                "tab": ["回复"],
                "content": [
                    "治疗当前生命值百分比最低的两名友方同调者",
                    speSkillCon("250%治愈力"),
                    "的生命值"
                ]
            }
        },
        {
            "name": "绮光万象",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["回复"],
                "content": [
                    "每3秒治疗所有友方同调者",
                    speSkillCon("150%治愈力"),
                    "的生命值，总计会产生10次治疗效果"
                ]
            }
        },
        {
            "name": "特性：治愈气泡",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.48次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射泡泡弹造成",
                    speSkillCon("210%最终攻击的水元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可以治疗友方同调者"
                    ],//零花本体特性
                    [
                        "主动技能【闭门蟹客】效果范围额外扩大",
                        speSkillCon("100")
                    ],//一花特性
                    [
                        "治愈力提升",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·治愈力加成）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "提提亚": [
        {
            "name": "狱门·刑罚",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "抉择技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "-"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["水区域", "负面状态", "伤害", "对空"],//技能标签
                "content": [
                    "可选择",
                    speSkillCon("「狱门·雷刑」", SkillColorEnum.injuries),
                    "或者",
                    speSkillCon("「狱门·寒刑」", SkillColorEnum.injuries),
                    "进行施放（指令冷却均为",
                    speSkillCon("20"),
                    "秒）",
                    "",
                    speSkillCon("「狱门·雷刑」", SkillColorEnum.injuries),
                    "：朝指定位置发射出一枚秘钥·雷，密钥运动过程中对沿途的敌人造成",
                    speSkillCon("200%最终攻击的雷元素伤害"),
                    "并标记敌人。秘钥运动到指定位置后，会将被标记的敌人以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "拉拽至秘钥自身所在位置,并生成半径",
                    speSkillCon("200"),
                    "范围的水元素区域。秘钥在原地持续",
                    speSkillCon("40"),
                    "秒，存在期间每隔",
                    speSkillCon("5"),
                    "秒对自身周围300半径内造成",
                    speSkillCon("600%最终攻击的雷元素伤害"),
                    "，并施加",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "效果，效果持续",
                    speSkillCon("20"),
                    "秒",
                    "",
                    speSkillCon("「狱门·寒刑」", SkillColorEnum.injuries),
                    "：朝指定位置发射出一枚秘钥·霜，钥匙运动过程中对沿途的敌人造成",
                    speSkillCon("200%最终攻击的霜元素伤害"),
                    "并标记敌人。秘钥运动到指定位置后，会将被标记的敌人以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "拉拽至秘钥自身所在位置，在潮湿环境下会生成生成半径",
                    speSkillCon("200"),
                    "范围的霜元素区域。秘钥在原地持续",
                    speSkillCon("40"),
                    "秒，存在期间每隔",
                    speSkillCon("5"),
                    "秒对自身周围300半径内造成",
                    speSkillCon("600%最终攻击的霜元素伤害"),
                    "，并施加",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "效果，效果持续",
                    speSkillCon("20"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "真言拷问",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],
                "tab": ["伤害", "负面状态", "对空"],
                "content": [
                    "自动技能：冷却时间",
                    speSkillCon("18"),
                    "秒，对带有",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "效果的敌方目标造成",
                    speSkillCon("1500%最终攻击的水、霜或雷元素伤害"),
                    "",
                    "",
                    "主动技能：手动选中一名敌人以锁链攻击，命中后使目标水、雷、霜元素抗性降低",
                    speSkillCon("30%"),
                    speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                    "，持续",
                    speSkillCon("40"),
                    "秒，并造成",
                    speSkillCon("2500%最终攻击的水、霜或雷元素伤害"),
                    "。被命中的敌人会获得",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "效果，效果持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "地狱囚笼",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "90秒"]],
                "tab": ["水区域", "负面状态", "伤害", "对空"],
                "content": [
                    "在指定位置生成一个巨型铁笼，铁笼持续",
                    speSkillCon("6"),
                    "秒，铁笼生成时将所有带有",
                    speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                    "效果的目标以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "拉拽入笼内，并施加眩晕，该效果持续",
                    speSkillCon("6"),
                    "秒。铁笼存在期间，会触发2次半径300的",
                    speSkillCon("1000%最终攻击的雷元素伤害"),
                    "和2次半径300的",
                    speSkillCon("1000%最终攻击的霜元素伤害"),
                    "，铁笼存在时间结束时，会炸毁自身，并对场上所有敌人造成",
                    speSkillCon("2500%最终攻击的水元素伤害"),
                    "，同时生成半径",
                    speSkillCon("350"),
                    "的水元素区域",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：守狱人",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "根据当前目标的元素弱点选择不同的钥匙投掷向目标进行攻击，其中：",
                    "",
                    "当目标具有水元素弱点或不具有雷、霜弱点时，投掷水元素钥匙，成功命中目标会造成",
                    speSkillCon("250%最终攻击的水元素伤害"),
                    "",
                    "当目标具有雷元素弱点时，投掷雷元素钥匙，钥匙成功命中目标会造成",
                    speSkillCon("250%最终攻击的雷元素伤害"),
                    "",
                    "当目标具有霜元素弱点时，投掷霜元素钥匙，钥匙成功命中目标会造成",
                    speSkillCon("250%最终攻击的霜元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "提提亚的主动技能会为命中目标施加",
                        speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                        "，该效果持续",
                        speSkillCon("20"),
                        "秒，提提亚的普通攻击伤害会以",
                        speSkillCon("35%"),
                        "的比例传递给拥有",
                        speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                        "链接的单位，该效果至多同时影响",
                        speSkillCon("10"),
                        "个单位。",
                        "",
                        "当场上仅有一个带有",
                        speSkillCon("[罪业漩涡]", SkillColorEnum.normal, ToastSkillEnum.罪业漩涡),
                        "的单位时，普通攻击伤害提高",
                        speSkillCon("250%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//零花本体特性
                    [
                        "秘钥持续时间提高",
                        speSkillCon("20"),
                        "秒，造成伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "自身施放任意技能后，攻击速度提高",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "，持续",
                        speSkillCon("15"),
                        "秒。罪业漩涡伤害传递比例提高至",
                        speSkillCon("60%")
                    ]//三花特性
                ]
            }
        }
    ],
    "拉波": [
        {
            "name": "剥荒",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 15,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "对空"],//技能标签
                "sizeLevel": [
                    ["1440%"],
                    ["1656%"],
                    ["1872%"],
                    ["2088%"],
                    ["2304%"],
                    ["2520%"],
                    ["2736%"],
                    ["2952%"],
                    ["3168%"],
                    ["3312%"],
                    ["3456%"],
                    ["3600%"],
                    ["3744%"],
                    ["3888%"],
                    ["4032%"]
                ],
                "content": [
                    "对矩形范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的霜元素伤害"),
                    "。如果敌人处于",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "范围内，则额外触发一次持续",
                    speSkillCon("3"),
                    "秒的",
                    speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
                ]//满级技能内容描述
            }
        },
        {
            "name": "直磨",
            "aliasNum": "2",
            "maxLevel": 15,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "3"]],
                "tab": ["伤害", "负面状态", "对空"],
                "sizeLevel": [
                    ["20%", "800%", "120%"],
                    ["23%", "920%", "138%"],
                    ["26%", "1040%", "156%"],
                    ["29%", "1160%", "174%"],
                    ["32%", "1280%", "192%"],
                    ["35%", "1400%", "210%"],
                    ["38%", "1520%", "228%"],
                    ["41%", "1640%", "246%"],
                    ["44%", "1760%", "264%"],
                    ["46%", "1840%", "276%"],
                    ["48%", "1920%", "288%"],
                    ["50%", "2000%", "300%"],
                    ["52%", "2080%", "312%"],
                    ["54%", "2160%", "324%"],
                    ["56%", "2240%", "336%"]
                ],
                "content": [
                    "自动技能：",
                    "",
                    "每隔",
                    speSkillCon("20"),
                    "秒进入增益状态，持续",
                    speSkillCon("15"),
                    "秒。在持续时间内，提高自身的主动技能回复速度",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("(属性乘区·主动技能回复速度)", SkillColorEnum.injuries, ToastSkillEnum.属性乘区主动技能回复速度),
                    "，且场上",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "造成伤害时使目标基础减伤降低",
                    speSkillCon("40%"),
                    speSkillCon("(目标减益乘区·目标基础减伤降低)", SkillColorEnum.injuries),
                    "（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "），持续",
                    speSkillCon("20"),
                    "秒，编入队伍的同调者每有一个水或霜元素同调者（包含自己），此效果额外提高",
                    speSkillCon("5%"),
                    "，最多可以达到",
                    speSkillCon("55%"),
                    "。",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "重叠时，伤害可以叠加，融甲效果不可叠加。",
                    "",
                    "开场时自动技能充能增加80%",
                    "",
                    "",
                    "主动技能：",
                    "",
                    "对目标半径",
                    speSkillCon("250"),
                    "范围的敌人造成",
                    speSkillCon("", 0, -1, 1),
                    speSkillCon("最终攻击的霜元素伤害"),
                    "，并形成",
                    speSkillCon("250"),
                    "范围的",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "。当",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "存在时，每秒对区域内的敌人造成",
                    speSkillCon("", 0, -1, 2),
                    speSkillCon("最终攻击的霜元素伤害"),
                ]
            }
        },
        {
            "name": "锤刻之手",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "负面状态", "对空"],
                "sizeLevel": [
                    ["2700%"],
                    ["3150%"],
                    ["3600%"],
                    ["4050%"],
                    ["4275%"],
                    ["4500%"]
                ],
                "content": [
                    "对目标",
                    speSkillCon("500"),
                    "范围内的敌人造成",
                    speSkillCon("", 0, -1, 0),
                    speSkillCon("最终攻击的霜元素伤害"),
                    "，并形成",
                    speSkillCon("500"),
                    "范围",
                    speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                    "",
                    "在潮湿环境下，直接形成霜元素区域",
                    "",
                    "战术家：开场充能50%"
                ]
            }
        },
        {
            "name": "特性：穿凿",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "对目标造成",
                    speSkillCon("200%最终攻击的霜元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "施放【直磨】、【锤刻之手】时，能够在场上形成持续",
                        speSkillCon("15"),
                        "秒的",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "，最多可以同时存在",
                        speSkillCon("3"),
                        "个。每次产生",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "的时候，回复",
                        speSkillCon("3"),
                        "秒异核充能。敌人在进入",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "时，会触发持续",
                        speSkillCon("3"),
                        "秒的",
                        speSkillCon("[冻结状态]", SkillColorEnum.normal, ToastSkillEnum.冻结状态),
                        "（如果敌人是空中单位，进入",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "时会被击落后再触发此效果）。",
                        "",
                        "当拉波离场或重伤时，场上所有的",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "消失。"
                    ],//零花本体特性
                    [
                        "进入自动状态时，如果场上存在",
                        speSkillCon("2"),
                        "名以上的水或霜元素同调者（包含自己），会直接在场上产生一个",
                        speSkillCon("300"),
                        "范围的",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "（优先精英及首领目标）。",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "区域内的敌人受到的伤害提高",
                        speSkillCon("30%"),
                        speSkillCon("（目标减益乘区·目标受伤害增加）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标受伤害增加)
                    ],//一花特性
                    [
                        "每次产生",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "回复的异核充能翻倍。当场上存在",
                        speSkillCon("[重塑空间]", SkillColorEnum.normal, ToastSkillEnum.重塑空间),
                        "时，场上同调者额外攻击提高",
                        speSkillCon("45%"),
                        speSkillCon("（属性乘区·额外攻击力加成）", SkillColorEnum.injuries, ToastSkillEnum.属性乘区额外攻击力加成)
                    ]//三花特性
                ]
            }
        }
    ],
    "伊琅相思": [
        {
            "name": "日影",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "抉择技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "-"], ["次数", "∞"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "对空"],//技能标签
                "content": [
                    "贝努之影初始以",
                    speSkillCon("600"),
                    "半径围绕自身转动，每8秒转动一周，对路径上碰撞的敌方单位造成",
                    speSkillCon("625%最终攻击的炎元素伤害"),
                    "",
                    speSkillCon("「日影·飞散」", SkillColorEnum.injuries),
                    "和",
                    speSkillCon("「日影·飞聚」", SkillColorEnum.injuries),
                    "可调整贝努之影的旋转半径（指令冷却均为",
                    speSkillCon("10"),
                    "秒）：",
                    "",
                    speSkillCon("「日影·飞散」技能形态", SkillColorEnum.injuries),
                    "",
                    "使贝努之影的旋转半径增加",
                    speSkillCon("200"),
                    "，旋转半径最大不超过",
                    speSkillCon("800"),
                    "",
                    speSkillCon("「日影·飞聚」技能形态", SkillColorEnum.injuries),
                    "",
                    "使贝努之影的旋转半径减少",
                    speSkillCon("200"),
                    "，旋转半径最小不少于",
                    speSkillCon("400")
                ]//满级技能内容描述
            }
        },
        {
            "name": "不灭明灵",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],
                "tab": ["伤害", "友方增益", "拦截", "对空", "穿透屏障"],
                "content": [
                    "被动：每隔",
                    speSkillCon("10"),
                    "秒会记录自身当前生命值，并使自身",
                    speSkillCon("[回溯]", SkillColorEnum.normal, ToastSkillEnum.回溯),
                    "到上一次记录的生命值",
                    "",
                    "主动：拦截范围内的所有投射物，并在",
                    speSkillCon("15"),
                    "秒内持续对半径",
                    speSkillCon("500"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("3000%最终攻击的炎元素伤害"),
                    "",
                    "使除自身外其他友方同调者进入持续",
                    speSkillCon("10"),
                    "秒的",
                    speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
                    "状态，同时记录友方同调者当前的生命值。",
                    speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
                    "状态期间友方同调者受到直接伤害后，若存活且生命值百分比低于",
                    speSkillCon("50%"),
                    "，则将退出",
                    speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
                    "状态，并",
                    speSkillCon("[回溯]", SkillColorEnum.normal, ToastSkillEnum.回溯),
                    "到记录的生命值状态",
                    "",
                    "场上存在处于",
                    speSkillCon("[明灵]", SkillColorEnum.normal, ToastSkillEnum.明灵),
                    "状态的友方同调者时，伊琅相思自身基础减伤提升",
                    speSkillCon("35%"),
                    speSkillCon("（属性乘区·基础减伤）", SkillColorEnum.injuries)
                ]
            }
        },
        {
            "name": "天威·刑狱",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["炎区域", "自身增益", "伤害", "对空", "穿透屏障"],
                "content": [
                    "进入「天威」状态并记录当前场上及后续上场的友方同调者生命值，状态持续",
                    speSkillCon("30"),
                    "秒。",
                    "",
                    "「天威」期间，普通攻击会对当前目标造成一次「魂锁」",
                    "",
                    "「魂锁」：对目标周围半径",
                    speSkillCon("250"),
                    "造成",
                    speSkillCon("500%最终攻击的炎元素伤害"),
                    "和",
                    speSkillCon("8"),
                    "秒眩晕，如果目标当前生命值百分比大于",
                    speSkillCon("50%"),
                    "，则该次伤害提升",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，场上最多存在",
                    speSkillCon("6"),
                    "处「魂锁」，「天威」期间的前",
                    speSkillCon("2"),
                    "次「魂锁」会产生炎元素地形",
                    "",
                    "「天威」状态期间可再次释放「天威·显耀」",
                    "",
                    "「天威·显耀」：对选中区域半径",
                    speSkillCon("500"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("3000%最终攻击的炎元素伤害"),
                    "，并消耗场上所有「魂锁」，每消耗一处「魂锁」都会使该伤害提升",
                    speSkillCon("20%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，释放结束后不会退出「天威」状态",
                    "",
                    "「天威」期间，「不灭明灵」的被动效果将会同时对场上其他友方同调者生效",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：轮回印记",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.13次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "持续攻击目标，对目标造成",
                    speSkillCon("770%最终攻击的炎元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "战斗开始时，会记录自身当前的生命值",
                        "",
                        "自身周围存在",
                        speSkillCon("5"),
                        "只贝努之影，贝努之影视为召唤物，且会以",
                        speSkillCon("600"),
                        "半径围绕自身转动，贝努之影会对路径上碰撞的敌方单位造成伤害（实际伤害随「日影」技能等级提升），眩晕目标",
                        speSkillCon("1"),
                        "秒；并使敌方炎元素抗性降低",
                        speSkillCon("30%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("10"),
                        "秒"
                    ],//零花本体特性
                    [
                        "「贝努之影」的暴击率提高",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "，且每次命中目标回复",
                        speSkillCon("1"),
                        "点异核充能，每",
                        speSkillCon("1.5"),
                        "秒最多触发一次"
                    ],//一花特性
                    [
                        "「天威」期间自身造成的伤害提升",
                        speSkillCon("25%"),
                        speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                    ]//三花特性
                ]
            }
        }
    ],
    "北洛": [
        {
            "name": "无人签收",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "召唤", "屏障", "穿透屏障"],//技能标签
                "content": [
                    "朝目标位置投送隔离件，对半径",
                    speSkillCon("250"),
                    "范围内的目标造成",
                    speSkillCon("1250%最终攻击的物理伤害"),
                    "，随后隔离件会展开半径300范围",
                    speSkillCon("较大强度"),
                    "的球形屏障，抵御敌方投射物，并对附近敌人间歇性发射激光，存在",
                    speSkillCon("20"),
                    "秒，持续时间内总计造成",
                    speSkillCon("630%最终攻击的物理伤害"),
                    "，可以对敌方屏障造成较高破坏力"
                ]//满级技能内容描述
            }
        },
        {
            "name": "定时派送",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "负面状态"],
                "content": [
                    "普通攻击命中时额外投送一个定时件，触发",
                    speSkillCon("3"),
                    "次后，下一次额外追加投送一个加急件",
                    "",
                    "定时件：持续",
                    speSkillCon("[嘲讽]", SkillColorEnum.normal, ToastSkillEnum.嘲讽),
                    "附近的敌人优先攻击定时件，",
                    speSkillCon("10"),
                    "秒后自动引爆，被击碎将提前引爆，对半径",
                    speSkillCon("200"),
                    "范围内的敌人造成",
                    speSkillCon("1500%最终攻击的物理伤害"),
                    "",
                    "加急件：朝目标快速发射7枚子弹，存在",
                    speSkillCon("20"),
                    "秒，持续时间内内总计造成",
                    speSkillCon("1700%最终攻击的物理伤害")
                ]
            }
        },
        {
            "name": "鹿路宅急送",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["自身增益", "友方增益", "召唤", "拦截"],
                "content": [
                    "对直线范围内的目标造成",
                    speSkillCon("3000%最终攻击的物理伤害"),
                    "并为全体友方同调者提升",
                    speSkillCon("25%[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("30"),
                    "秒；拦截敌方投射物，同时沿途投送",
                    speSkillCon("8"),
                    "箱快递",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：末日信使",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "朝目标投送“普通件”，命中目标造成",
                    speSkillCon("250%最终攻击的物理伤害"),
                    "，“普通件”会展开成小型炮台向附近敌人发射子弹，持续存在7秒，持续时间内总计造成",
                    speSkillCon("270%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "快件为召唤物",
                        "",
                        "技能可以产生各种类型的快件"
                    ],//零花本体特性
                    [
                        "主动技能【无人签收】可使用次数+1；“普通件”和“加急件”的伤害额外提高",
                        speSkillCon("35%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "除“定时件”以外的所有快件箱存在时间增加",
                        speSkillCon("5"),
                        "秒"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "加急件对目标造成伤害时，降低目标",
                    speSkillCon("40%"),
                    speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                    "基础减伤，（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "，自身下场时效果消失）；目标处于（我方或敌方）屏障下时，自身对其造成的伤害提高",
                    speSkillCon("30%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries)
                ]
            }
        }
    ],
    "岑缨": [
        {
            "name": "列星巡游",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "8"]],//技能使用情况，如冷却，可使用次数
                "tab": ["召唤", "拦截"],//技能标签
                "content": [
                    "召唤5架自主巡逻的无人机「感光者」协同作战",
                    "",
                    "副无人机「感光者」将会在召唤点附近巡逻并攻击进入警戒区的单个敌人，持续",
                    speSkillCon("30"),
                    "秒，每架副无人机「感光者」攻击造成",
                    speSkillCon("83%最终攻击的物理伤害"),
                    "且在持续时间内最多攻击",
                    speSkillCon("24"),
                    "次",
                    "",
                    "优先攻击空中单位以及拦截敌方投射物"
                ]//满级技能内容描述
            }
        },
        {
            "name": "影中世界",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "10秒"]],
                "tab": ["伤害", "负面状态", "最大选敌数5"],
                "content": [
                    "对目标半径",
                    speSkillCon("250"),
                    "范围内最多",
                    speSkillCon("5"),
                    "名敌人造成",
                    speSkillCon("700%最终攻击的物理伤害"),
                    "，并使其中非机械单位陷入",
                    speSkillCon("2"),
                    "秒",
                    speSkillCon("[眩光]", SkillColorEnum.normal, ToastSkillEnum.眩光),
                    "状态"
                ]
            }
        },
        {
            "name": "千秋行舰",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"]],
                "tab": ["召唤", "拦截"],
                "content": [
                    "呼唤舰船，沿指定方向横穿战场，舰船存在",
                    speSkillCon("31.8"),
                    "秒，舰船行进前会清除路径上的所有投射物，随后每隔",
                    speSkillCon("0.8"),
                    "秒，连续对两个随机位置进行轰炸，每次对落点附近半径",
                    speSkillCon("150"),
                    "范围内的所有敌人造成",
                    speSkillCon("300%最终攻击的物理伤害"),
                    "，并使其中非机械单位陷入",
                    speSkillCon("2"),
                    "秒",
                    speSkillCon("[眩光]", SkillColorEnum.normal, ToastSkillEnum.眩光),
                    "状态",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：感光信标",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "1200"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "指挥身边的主无人机「感光者」对当前目标进行攻击造成",
                    speSkillCon("200%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "「感光者」视为召唤物",
                        "",
                        "每隔",
                        speSkillCon("30"),
                        "秒在目标位置召唤一架副无人机「感光者」协助战斗（效果受主动技能【列星巡游】等级影响）"
                    ],//零花本体特性
                    [
                        "异核技能【千秋行舰】的轰炸频率提高",
                        speSkillCon("50%"),
                        "，所有副无人机「感光者」造成的伤害额外提高",
                        speSkillCon("10%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "特性召唤副无人机「感光者」的间隔变为",
                        speSkillCon("10"),
                        "秒"
                    ]//三花特性
                ]
            }
        },
        {
            "name": "特性强化",
            "aliasNum": "特性强化",//特性强化技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "content": [
                    "通过特性召唤副无人机「感光者」时，使自身及召唤物所有伤害提高15％",
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "，若该伤害为异核伤害则效果翻倍，持续12秒"
                ]
            }
        }
    ],
    "言雀": [
        {
            "name": "呜呜风暴",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "15秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "拦截", "对空"],//技能标签
                "content": [
                    "在目标位置生成持续",
                    speSkillCon("8"),
                    "秒的呜呜风暴，拦截范围内的所有投射物，风暴每秒会以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "将",
                    speSkillCon("500"),
                    "范围内的所有敌方单位向中心牵引，并造成",
                    speSkillCon("500%最终攻击的雷元素伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "嘭嘭礼炮",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["施放冷却", "15秒"]],
                "tab": ["伤害", "对空"],
                "content": [
                    "朝目标周围投掷",
                    speSkillCon("4"),
                    "颗礼炮，并生成一处",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "，礼炮命中地面时会对",
                    speSkillCon("200"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("800%最终攻击的雷元素伤害"),
                    "",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "每隔",
                    speSkillCon("5"),
                    "秒会随机攻击场上的一名敌方单位，对目标造成",
                    speSkillCon("125%最终攻击的雷元素伤害"),
                    "，同时溅射目标周围",
                    speSkillCon("250"),
                    "范围的敌人造成",
                    speSkillCon("25%最终攻击的雷元素伤害"),
                    "",
                    "最多同时存在",
                    speSkillCon("3"),
                    "处",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "",
                    "开战时自动技能充能增加80%"
                ]
            }
        },
        {
            "name": "集合，小鸟骑士团！",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "45秒"]],
                "tab": ["伤害", "负面状态", "拦截", "对空", "屏障破坏"],
                "content": [
                    "施放时拦截范围内的投射物，并摧毁范围内的所有敌方屏障，",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "目标位置",
                    speSkillCon("500"),
                    "范围内的所有敌方非首领单位，持续",
                    speSkillCon("6"),
                    "秒，对范围内所有敌方单位共造成",
                    speSkillCon("3500%最终攻击的雷元素伤害"),
                    "",
                    "技能结束时，将会激活场上存在的所有",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "，激活效果持续",
                    speSkillCon("20"),
                    "秒，持续时间内",
                    speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                    "伤害触发间隔降低",
                    speSkillCon("50%"),
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：云端的孩子",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.37次每秒"]],
                "atType": ["群体"],
                "content": [
                    "短暂延迟后对",
                    speSkillCon("150"),
                    "范围内的所有敌方单位造成",
                    speSkillCon("270%最终攻击的雷元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "施放技能后，会进入持续",
                        speSkillCon("10"),
                        "秒的【睡前故事时间】，持续期间普通攻击会对目标周围",
                        speSkillCon("200"),
                        "范围内的所有敌方单位造成",
                        speSkillCon("350%最终攻击的雷元素伤害"),
                        "",
                        speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                        "为召唤物，受到",
                        speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                        "伤害影响的目标",
                        speSkillCon("15"),
                        "秒内雷元素抗性降低",
                        speSkillCon("30%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，水元素抗性降低",
                        speSkillCon("10%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，重复触发将会刷新效果的持续时间"
                    ],//零花本体特性
                    [
                        "受到",
                        speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                        "伤害影响的敌方单位后续",
                        speSkillCon("15"),
                        "秒内雷元素抗性降低提高至",
                        speSkillCon("45%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，水元素抗性降低提高至",
                        speSkillCon("15%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，重复触发将会刷新效果的持续时间"
                    ],//一花特性
                    [
                        speSkillCon("[不规则星芒]", SkillColorEnum.normal, ToastSkillEnum.不规则星芒),
                        "对主目标造成的伤害额外附加言雀",
                        speSkillCon("120%"),
                        "自身专精值的伤害"
                    ]//三花特性
                ]
            }
        }
    ],
    "晴雪": [
        {
            "name": "幻惑把戏",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "对空"],//技能标签
                "content": [
                    "骑着魔法扫帚飞向目标区域，对目标区域半径",
                    speSkillCon("500"),
                    "范围造成",
                    speSkillCon("300%最终攻击的风元素伤害"),
                    "同时吹散毒雾区域，并留下「幻惑之影」，持续",
                    speSkillCon("40"),
                    "秒",
                    "",
                    "「幻惑之影」内每",
                    speSkillCon("1"),
                    "秒造成",
                    speSkillCon("150%最终攻击的风元素伤害"),
                    "，目标每受到一次该伤害将提升",
                    speSkillCon("5%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "后续受到的幻惑之影伤害，最多提高",
                    speSkillCon("100%"),
                    speSkillCon("（增伤乘区·独立增伤）", SkillColorEnum.injuries),
                    "（敌人离开「幻惑之影」范围5秒后该增伤效果消失）。",
                    "",
                    "「幻惑之影」区域内的敌方目标基础减伤降低",
                    speSkillCon("50%"),
                    speSkillCon("（目标减益乘区·目标基础减伤降低）", SkillColorEnum.injuries),
                    "（该效果属于",
                    speSkillCon("[融甲]", SkillColorEnum.normal, ToastSkillEnum.融甲),
                    "），且处于区域内的友方同调者每",
                    speSkillCon("5"),
                    "秒回复自身",
                    speSkillCon("1%"),
                    "最大生命值。",
                    "",
                    "（晴雪离场或重伤时「幻惑之影」效果消失）"
                ]//满级技能内容描述
            }
        },
        {
            "name": "乌乌之友",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "15秒"], ["次数", "5"]],
                "tab": ["伤害", "召唤", "对空"],
                "content": [
                    "自动技能：每隔",
                    speSkillCon("5"),
                    "秒，会召唤一只乌乌伴随左右，最多拥有",
                    speSkillCon("6"),
                    "只。当自身乌乌数量超过6只时，会自动消耗2只，每只对当前目标",
                    speSkillCon("250"),
                    "半径范围造成",
                    speSkillCon("1000%最终攻击的风元素伤害"),
                    "",
                    "",
                    "主动技能：消耗3只乌乌，每只对选中区域",
                    speSkillCon("250"),
                    "半径范围造成",
                    speSkillCon("1750%最终攻击的风元素伤害")
                ]
            }
        },
        {
            "name": "外场全秀",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "60秒"]],
                "tab": ["伤害", "友方增益", "拦截", "对空"],
                "content": [
                    "对自身周围",
                    speSkillCon("500"),
                    "半径范围区域造成",
                    speSkillCon("3500%最终攻击的风元素伤害"),
                    "，并拦截范围内投射物，对已处于幻惑之影内的敌方额外造成",
                    speSkillCon("900%最终攻击的风元素伤害"),
                    "，并回复我方同调者",
                    speSkillCon("12"),
                    "秒异核充能，风元素同调者效果翻倍",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：旅行表演家",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.36次每秒"]],
                "atType": ["单体"],
                "content": [
                    "对当前目标造成",
                    speSkillCon("280%最终攻击的风元素伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "可召唤并驱使「乌乌」攻击目标，「乌乌」视为召唤物，且普通攻击每",
                        speSkillCon("4"),
                        "次获得1只「乌乌」。"
                    ],//零花本体特性
                    [
                        "自身处于「幻惑之影」内时，主动技能指令冷却回复加快",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·主动技能回复速度）", SkillColorEnum.injuries),
                        "。队友处于「幻惑之影」内额外攻击提高",
                        speSkillCon("25%"),
                        speSkillCon("（属性乘区·额外攻击力加成）", SkillColorEnum.injuries),
                        "（晴雪离场或重伤时该效果消失）"
                    ],//一花特性
                    [
                        "每次普通攻击会使「乌乌」协同攻击目标造成1次",
                        speSkillCon("700%最终攻击的风元素伤害"),
                        "（该伤害属于召唤物伤害），自动技能回复「乌乌」的速度缩短至",
                        speSkillCon("3"),
                        "秒"
                    ]//三花特性
                ]
            }
        }
    ],
    "瓦卡莎": [
        {
            "name": "风天",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "对空", "持续施法"],//技能标签
                "content": [
                    "持续施法，朝指定方向刮风吹散范围内的毒雾，持续对沿途敌人造成",
                    speSkillCon("200%最终攻击的风元素伤害"),
                    "并以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退目标，持续12秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "因坻之息",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "15秒"], ["增益持续", "18秒"]],
                "tab": ["水区域", "伤害", "对空", "持续施法"],
                "content": [
                    "祈求降雨，对场上随机位置半径",
                    speSkillCon("300"),
                    "范围内所有敌人每2秒造成",
                    speSkillCon("125%最终攻击的水元素伤害"),
                    "并逐渐生成水元素区域，持续",
                    speSkillCon("18"),
                    "秒",
                    "",
                    "期间有",
                    speSkillCon("100%"),
                    "概率落雷，对降雨区内随机一名敌人造成",
                    speSkillCon("125%最终攻击的雷元素伤害")
                ]
            }
        },
        {
            "name": "婆罗那天地",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "120秒"]],
                "tab": ["水区域", "友方增益", "自身增益", "对空", "持续施法"],
                "content": [
                    "持续施法，在持续施法期间将改变全场天气，并持续生成水元素区域，持续30秒。期间我方水元素同调者提升",
                    speSkillCon("50%[同调者攻击]", SkillColorEnum.normal, ToastSkillEnum.同调者攻击),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，同时每隔一定时间降下落雷，对随机目标点范围",
                    speSkillCon("150"),
                    "内的敌人造成",
                    speSkillCon("72%最终攻击的雷元素伤害"),
                    "，雨势会随时间逐渐加大，落雷的频率和伤害随之提升（伤害最多提升100%）",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：休息一下",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "-"], ["攻击速度", "-"]],
                "atType": ["不攻击"],
                "content": [
                    "技能未开启时不攻击"
                ],//普通攻击
                "specialContent": [
                    [
                        "持续祈祷，使全场敌人水元素抗性降低",
                        speSkillCon("20%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，雷元素抗性降低",
                        speSkillCon("10%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，风元素抗性降低",
                        speSkillCon("10%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低)
                    ],//零花本体特性
                    [
                        "主动技能【风天】持续时间延长",
                        speSkillCon("6"),
                        "秒"
                    ],//一花特性
                    [
                        "驻场时，水元素同调者除异核技能外，其他技能的回复速度加快",
                        speSkillCon("15%")
                    ]//三花特性
                ]
            }
        }
    ],
    "襄铃": [
        {
            "name": "拳焰式",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "10秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "对空"],//技能标签
                "content": [
                    speSkillCon("【拳焰式·普通】技能形态", SkillColorEnum.injuries),
                    "",
                    "普通状态下可使用",
                    "",
                    speSkillCon("以2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "抓取",
                    speSkillCon("1200"),
                    "范围内的目标至自身面前攻击，造成",
                    speSkillCon("2000%最终攻击的物理伤害"),
                    "",
                    speSkillCon("【拳焰式·狐拟态】技能形态", SkillColorEnum.injuries),
                    "",
                    "「狐拟态」状态下可使用",
                    "",
                    speSkillCon("以3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "抓取",
                    speSkillCon("1600"),
                    "范围内的目标至自身面前攻击，造成",
                    speSkillCon("3750%最终攻击的炎元素伤害")
                ]//满级技能内容描述
            }
        },
        {
            "name": "屏扇式",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "30秒"], ["次数", "∞"]],
                "tab": ["炎区域", "负面状态", "伤害"],
                "content": [
                    "被动：每隔",
                    speSkillCon("20"),
                    "秒可使用一次，使用后产生的指令冷却时间极短",
                    "",
                    speSkillCon("【屏扇式·普通】技能形态", SkillColorEnum.injuries),
                    "",
                    "普通状态下可使用",
                    "",
                    "对扇形范围内5条路径上的首个敌人造成",
                    speSkillCon("1850%最终攻击的物理伤害"),
                    "并以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "造成击退效果，对击退路径上的其他敌人造成",
                    speSkillCon("1150%最终攻击的物理伤害"),
                    "",
                    speSkillCon("【屏扇式·狐拟态】技能形态"),
                    "",
                    "「狐拟态」状态下可使用",
                    "",
                    "对扇形范围内5条路径上的首个敌人造成",
                    speSkillCon("2313%最终攻击的炎元素伤害"),
                    "并以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "造成击退效果，对击退路径上的其他敌人造成",
                    speSkillCon("1438%最终攻击的炎元素伤害"),
                    "且沿途留下炎元素区域"
                ]
            }
        },
        {
            "name": "狐拟态",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["自身增益"],
                "content": [
                    "变身成「狐拟态」，所有伤害转为炎元素伤害，攻击提升",
                    speSkillCon("120%"),
                    speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                    "，回复1次主动技能【拳焰式】使用次数，并使所有技能获得强化，持续",
                    speSkillCon("45"),
                    "秒",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：狐引",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "200"], ["攻击速度", "0.62次每秒"]],
                "atType": ["单体"],
                "content": [
                    "攻击面前的目标造成",
                    speSkillCon("192%最终攻击的物理伤害"),
                    "",
                    "近战范围没有敌人时，对远处一名敌人造成",
                    speSkillCon("96%最终攻击的物理伤害"),
                    "，并以",
                    speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "抓取到面前（每3秒最多触发一次）。"
                ],//普通攻击
                "specialContent": [
                    [
                        "可以战术移动至全场任意可达位置",
                        "",
                        "会自动将抓取的目标击飞入周围的可跌落点"
                    ],//零花本体特性
                    [
                        "施放异核技能【狐拟态】时，立即清空指令冷却时间并激活主动技能【屏扇式】"
                    ],//一花特性
                    [
                        "异核技能【狐拟态】时施展主动技能【屏扇式】留下的炎元素区域扩大"
                    ]//三花特性
                ]
            }
        }
    ],
    "阿棘": [
        {
            "name": "陷在糖里",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态"],//技能标签
                "content": [
                    "朝指定扇形区域投掷棒棒糖，命中目标或到达最远处后炸开，对半径",
                    speSkillCon("250"),
                    "范围内的所有敌人造成",
                    speSkillCon("950%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("15点蚀爆值"),
                    "；随后在地面产生粘液，使粘液上的地面单位敌人降低",
                    speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，粘液持续存在",
                    speSkillCon("20"),
                    "秒"
                ]//满级技能内容描述
            }
        },
        {
            "name": "捉迷藏",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
                "tab": ["自身增益", "负面状态"],
                "content": [
                    "被动：每隔",
                    speSkillCon("10"),
                    "秒强化自身普通攻击",
                    "",
                    "“常态”下可自动触发",
                    "",
                    "下一次普通攻击同时攻击3个目标，令目标降低",
                    speSkillCon("90%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，持续",
                    speSkillCon("3"),
                    "秒",
                    "",
                    "“隐匿姿态”下可自动触发",
                    "",
                    "下一次普通攻击范围扩大，额外对终端附加",
                    speSkillCon("1点蚀爆值"),
                    "，但伤害会随圈数向外逐层衰减，令目标降低",
                    speSkillCon("80%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，持续",
                    speSkillCon("3"),
                    "秒",
                    "",
                    speSkillCon("【捉迷藏·隐匿姿态】技能形态", SkillColorEnum.injuries),
                    "",
                    "“常态”下可使用",
                    "",
                    "主动：钻进草垛中，进入",
                    speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                    "状态，不会被优先攻击。普通攻击方式变为向四周撒棒棒糖，",
                    speSkillCon("攻击速度：0.65次每秒"),
                    "，造成伤害降低",
                    speSkillCon("50%"),
                    "",
                    speSkillCon("【捉迷藏·解除隐匿】技能形态", SkillColorEnum.injuries),
                    "",
                    "“隐匿姿态”下可使用",
                    "",
                    "主动：再次使用该技能或者使用其他技能后可以解除",
                    speSkillCon("[隐匿]", SkillColorEnum.normal, ToastSkillEnum.隐匿),
                    "状态"
                ]
            }
        },
        {
            "name": "一二三不许动",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "75秒"]],
                "tab": ["伤害", "负面状态", "穿透屏障"],
                "content": [
                    "向四周撒出大量棒棒糖，造成10次半径",
                    speSkillCon("600"),
                    "范围的攻击，总计造成",
                    speSkillCon("2700%最终攻击的蚀元素伤害"),
                    "，并为终端附加",
                    speSkillCon("25点蚀爆值"),
                    "，随后在自身脚下生成糖果粘液，粘液上的地面单位敌人移动速度降低",
                    speSkillCon("90%"),
                    "，粘液持续存在",
                    speSkillCon("18"),
                    "秒",
                    "",
                    "棒棒糖会在场上永久存在，敌人触碰到棒棒糖时将被",
                    speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "，持续",
                    speSkillCon("10"),
                    "秒",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：“猛兽”出没",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.53次每秒"]],
                "atType": ["群体", "对空"],
                "content": [
                    "随机使用红色或者绿色棒棒糖攻击敌人，并为终端附加",
                    speSkillCon("2点蚀爆值"),
                    "",
                    "红色棒棒糖令目标半径",
                    speSkillCon("150"),
                    "内的所有敌人降低",
                    speSkillCon("70%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                    "，短暂延迟后造成小范围",
                    speSkillCon("95%最终攻击的蚀元素伤害"),
                    "",
                    "绿色棒棒糖对当前目标造成",
                    speSkillCon("190%最终攻击的蚀元素伤害"),
                    "，令目标降低",
                    speSkillCon("80%[移动速度]", SkillColorEnum.normal, ToastSkillEnum.移动速度),
                ],//普通攻击
                "specialContent": [
                    [
                        "无"
                    ],//零花本体特性
                    [
                        "主动技能【陷在糖里】、异核技能【一二三不许动】产生的糖果粘液可以使站在上面的敌人攻击速度降低",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·额外攻击速度）", SkillColorEnum.injuries)
                    ],//一花特性
                    [
                        "处于糖果粘液上的敌人受到的蚀元素伤害额外提高",
                        speSkillCon("15%"),
                        speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries),
                        "，异核技能产生的棒棒糖会在场上永久存在"
                    ]//三花特性
                ]
            }
        }
    ],
    "赫九逸": [
        {
            "name": "勾魄",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "4"]],//技能使用情况，如冷却，可使用次数
                "tab": ["负面状态", "集火"],//技能标签
                "content": [
                    "对指定位置半径",
                    speSkillCon("250"),
                    "范围内的所有敌人造成",
                    speSkillCon("1000%最终攻击的物理伤害"),
                    "，并以",
                    speSkillCon("3级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "地将他们拉向",
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "，同时标记区域中心的一名敌人，当其处于其他同调者攻击范围内时，友方同调者将优先攻击该敌人",
                    "",
                    "焰响在场的情况下，技能范围半径扩大至",
                    speSkillCon("350")
                ]//满级技能内容描述
            }
        },
        {
            "name": "摄魂",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "主动技能",
                "skillTab": [["指令冷却", "10秒"], ["次数", "∞"]],
                "tab": ["负面状态"],
                "content": [
                    "被动：",
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "每隔",
                    speSkillCon("10"),
                    "秒连续产生3次声波，每次对周围半径",
                    speSkillCon("300"),
                    "范围内的敌人造成",
                    speSkillCon("333%最终攻击的物理伤害"),
                    "，并使其移动速度降低",
                    speSkillCon("30%"),
                    "，持续",
                    speSkillCon("5"),
                    "秒",
                    "",
                    "主动：将",
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "调整至指定位置",
                    "",
                    "焰响在场的情况下，声波的作用范围扩大至",
                    speSkillCon("400")
                ]
            }
        },
        {
            "name": "意夺神骇",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "100秒"]],
                "tab": ["伤害", "负面状态"],
                "content": [
                    "对全场范围所有敌方单位造成",
                    speSkillCon("3300%最终攻击的物理伤害"),
                    "并使其",
                    speSkillCon("[定身]", SkillColorEnum.normal, ToastSkillEnum.定身),
                    "，持续",
                    speSkillCon("7"),
                    "秒；在",
                    speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                    "作用范围内的敌人将额外受到",
                    speSkillCon("[眩晕]", SkillColorEnum.normal, ToastSkillEnum.眩晕),
                    "效果",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：鬼神听",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.40次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射幽魂造成",
                    speSkillCon("250%最终攻击的物理伤害")
                ],//普通攻击
                "specialContent": [
                    [
                        "开场时在身边召唤一枚",
                        speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                        "",
                        "焰响在场时，双方的技能范围都将得到大幅提升"
                    ],//零花本体特性
                    [
                        speSkillCon("[镇魂符]", SkillColorEnum.normal, ToastSkillEnum.镇魂符),
                        "附近半径500范围的友方或自己阵亡时，立即解除自身与目标同调者的",
                        speSkillCon("[控制效果]", SkillColorEnum.normal, ToastSkillEnum.控制效果),
                        "，让目标同调者以灵魂状态继续作战",
                        speSkillCon("10"),
                        "秒，期间提升",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·攻击力加成）", SkillColorEnum.injuries),
                        "攻击力，",
                        speSkillCon("100%"),
                        speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                        "攻击速度，",
                        speSkillCon("50%"),
                        "移动速度，",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                        "暴击率，",
                        speSkillCon("50%"),
                        speSkillCon("（属性乘区·暴击伤害）", SkillColorEnum.injuries),
                        "暴击伤害（该效果一场战斗中只会生效一次）"
                    ],//一花特性
                    [
                        "主动技能【勾魄】标记的敌人遭受伤害提高",
                        speSkillCon("10%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.injuries, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("15"),
                        "秒"
                    ]//三花特性
                ]
            }
        }
    ],
    "岚岚": [
        {
            "name": "风舞风舞风舞",
            "aliasNum": "1",//技能简称，1技能
            "maxLevel": 12,//技能最大等级
            "detail": {
                "type": "主动技能",//技能类型，主动、被动、自定等
                "skillTab": [["指令冷却", "20秒"], ["次数", "5"]],//技能使用情况，如冷却，可使用次数
                "tab": ["伤害", "负面状态", "拦截"],//技能标签
                "content": [
                    "被动：特性击退目标的几率提升",
                    speSkillCon("15%"),
                    "",
                    "朝目标方向",
                    speSkillCon("600"),
                    "距离内发射扇形疾风攻击，造成",
                    speSkillCon("1250%最终攻击的风元素伤害"),
                    "并以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退区域内敌人以及拦截投射物，同时吹散范围内的毒雾"
                ]//满级技能内容描述
            }
        },
        {
            "name": "疾疾疾",
            "aliasNum": "2",
            "maxLevel": 12,
            "detail": {
                "type": "自动技能",
                "skillTab": [["增益冷却", "25秒"], ["增益持续", "20秒"]],
                "tab": ["自身增益", "负面状态"],
                "content": [
                    "自身基础攻击速度提升",
                    speSkillCon("120%"),
                    speSkillCon("（属性乘区·攻击速度）", SkillColorEnum.injuries),
                    "，普通攻击击退目标的几率提升至原来的2倍，持续",
                    speSkillCon("20"),
                    "秒"
                ]
            }
        },
        {
            "name": "迅鸟不鸣",
            "aliasNum": "异核",
            "maxLevel": 6,
            "detail": {
                "type": "异核技能",
                "skillTab": [["充能时间", "80秒"]],
                "tab": ["伤害", "自身增益", "友方增益", "拦截"],
                "content": [
                    "以自身为中心放出狂风，以",
                    speSkillCon("2级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退场上所有敌人造成",
                    speSkillCon("3000%最终攻击的风元素伤害"),
                    "、拦截场上所有敌对投射物并吹散自身半径",
                    speSkillCon("600"),
                    "范围内的毒雾，同时使全体友方同调者提高",
                    speSkillCon("20%[同调者暴击率]", SkillColorEnum.normal, ToastSkillEnum.同调者暴击率),
                    speSkillCon("（属性乘区·暴击率）", SkillColorEnum.injuries),
                    "，持续",
                    speSkillCon("25"),
                    "秒",
                    "",
                    "战术家特性：开战时异核充能增加50%"
                ]
            }
        },
        {
            "name": "特性：学舌",
            "aliasNum": "特性",//特性技能需要特殊处理，在具体的地方需要用v-if判断
            "detail": {
                "type": "战斗特性",
                "tab": [["射程", "800"], ["攻击速度", "0.50次每秒"]],
                "atType": ["单体", "对空"],
                "content": [
                    "向当前目标发射羽箭造成",
                    speSkillCon("200%最终攻击的风元素伤害"),
                    "普通攻击命中时有",
                    speSkillCon("10%"),
                    "几率以",
                    speSkillCon("1级[位移强度]", SkillColorEnum.normal, ToastSkillEnum.位移强度),
                    "击退目标，若无法击退目标，则本次伤害提升",
                    speSkillCon("50%"),
                    speSkillCon("（增伤乘区·额外伤害）", SkillColorEnum.injuries)
                ],//普通攻击
                "specialContent": [
                    [
                        "无"
                    ],//零花本体特性
                    [
                        "被岚岚击退的目标会被",
                        speSkillCon("[定身]5", SkillColorEnum.normal, ToastSkillEnum.定身),
                        "秒"
                    ],//一花特性
                    [
                        "造成伤害使目标风元素抗性降低",
                        speSkillCon("20%"),
                        speSkillCon("（[目标减益乘区·目标抗性降低]）", SkillColorEnum.normal, ToastSkillEnum.目标减益乘区目标抗性降低),
                        "，持续",
                        speSkillCon("5"),
                        "秒"
                    ]//三花特性
                ]
            }
        }
    ],
    "老板": [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
    ]
}

/**
 * 所有角色茶憩成就等信息
 */
const allCharTea = {
    "莫红袖": {
        "achievement": [
            {
                "name": "意外刺激",
                "limit": "【默契值1级】",
                "tips": [
                    "“莫少校怎么了？又被辣到了？”",
                    "“我记得她选了甜的啊——喂，谁加的姜汁！”"
                ],
                "recipe": [
                    "简约至上",
                    "姜汁可可",
                    "热",
                    "糖浆",
                    "焦糖布丁",
                    "三叶长签"
                ]
            },
            {
                "name": "钢铁意志",
                "limit": "【默契值1级】",
                "tips": [
                    "身为军人，莫红袖从不浪费食物。",
                    "即便是面对眼前这杯加热过的无糖的青提啵啵奶茶……"
                ],
                "recipe": [
                    "竹节茶杯",
                    "青提啵啵奶茶",
                    "无糖",
                    "热",
                    "咸梅干",
                    "白玉兰"
                ]
            },
            {
                "name": "训练场外",
                "limit": "【默契值4级】",
                "tips": [
                    "面前这杯海水半蓝总让莫红袖想起九旻基地训练场外的海岸线，就连杯中沾了盐的茶冻都有些像是被海浪拥抱的礁石。"
                ],
                "recipe": [
                    "自证方圆",
                    "海水半蓝",
                    "少冰",
                    "柠檬汁",
                    "紫藤"
                ]
            },
            {
                "name": "猫一猫二",
                "limit": "【默契值13级】",
                "tips": [
                    "猫一猫二扒拉着莫红袖的袖口，可怜兮兮地舔着鼻尖。",
                    "“不行，草莓和汪汪饼干可以分给你们，但是云中桂影你们不能喝，撒娇也没用。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "云中桂影",
                    "草莓",
                    "汪汪饼干",
                    "精致纸伞"
                ]
            },
            {
                "name": "曾几何时",
                "limit": "【默契值1级】",
                "tips": [
                    "迎着上级略带笑意的表情，莫红袖仰头饮下了成年后的第一杯酒。",
                    "与她预期的辛辣不同，威士忌的口感醇厚回甘。",
                    "“早就帮你加了双倍糖和柠檬汁了。”"
                ],
                "recipe": [
                    "自证方圆",
                    "沉金记忆",
                    "双倍糖",
                    "柠檬汁",
                    "桂花"
                ]
            },
            {
                "name": "偶尔的迟钝",
                "limit": "【默契值18级】",
                "tips": [
                    "照顾到莫红袖的口味，监督每次都将给她的薄暮飞行调配得淡一些，还会额外加上苦味素中和辣味。",
                    "可是直到现在，莫红袖好像还没发现这一点。",
                    "“原来莫队也有没那么敏锐的时候啊……”",
                    "“嗯？”"
                ],
                "recipe": [
                    "简约至上",
                    "薄暮飞行",
                    "苦味素",
                    "偏淡",
                    "黄瓜片",
                    "水果签"
                ]
            },
            {
                "name": "休假",
                "limit": "【默契值16级】",
                "tips": [
                    "“监督，我能跟你讨一张疏帘淡月的配方吗？”莫红袖举了举面前的熊熊杯。",
                    "“当然可以。不过你了解这个是要……？”",
                    "“最近要回家一趟，我想让武馆里的师兄弟们都尝尝。”",
                    "“休假吗？”",
                    "“不……有人来踢馆。”",
                    "“？”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "疏帘淡月",
                    "五分糖",
                    "正常冰",
                    "空心圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "沉金记忆",
                    "无糖",
                    "苦味素"
                ],
                "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "海水半蓝",
                    "柠檬汁",
                    "正常冰",
                    "椰果"
                ],
                "ex": [439, 492, 537],
            },
            {
                "needLevel": 6,
                "recipe": [
                    "鲜榨雪梨汁",
                    "常温",
                    "椰果"
                ],
                "ex": [453, 508, 553],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "经典特浓咖啡",
                    "奶精球",
                    "加双份",
                    "香蕉冰淇淋"
                ],
                "ex": [496, 555, 605],//参考默契值，无加，满家具，满加成
            },
        ]
    },
    "禺期": {
        "achievement": [
            {
                "name": "禁忌",
                "limit": "【默契值1级】",
                "tips": [
                    "尽管监督又往牛奶里倒了满满一盒常温燕麦奶，禺期的注意点却始终如一。",
                    "“听说在海临，服用牛乳之人多是需要长高？”",
                    "“是这样。”监督点了点头，“但……”",
                    "“找、死！”",
                    "“啊啊啊我还没说完啊！？”"
                ],
                "recipe": [
                    "淑女风尚",
                    "甜牛乳",
                    "正常糖",
                    "常温",
                    "燕麦奶",
                    "空心圆匙"
                ]
            },
            {
                "name": "禁忌·二",
                "limit": "【默契值1级】",
                "tips": [
                    "“煅火之人饮冰作甚？”",
                    "“其实年纪大了，喝不了冰的话……可以跟我直说的。”",
                    "“哼！区区一杯苏打水——！”",
                    "“别加那么多冰块啦！装饰用的银杏叶都被淹没了！”"
                ],
                "recipe": [
                    "经典格纹",
                    "冰镇苏打水",
                    "多冰",
                    "椰果",
                    "银杏叶"
                ]
            },
            {
                "name": "处处皆禁忌",
                "limit": "【默契值1级】",
                "tips": [
                    "“又是姜汁可可，又是咖啡冻、薄荷叶的……禺期前辈，您真的要点这个吗？”",
                    "“何故吞吞吐吐的？”",
                    "“您本就觉少，喝了这些，我怕您晚上更睡不着了……”",
                    "“……雷霆之壁，现！”",
                    "“啊啊啊我已经说得很隐晦了，还是不行吗！？”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "姜汁可可",
                    "常温",
                    "奶精球",
                    "咖啡冻",
                    "薄荷叶"
                ]
            },
            {
                "name": "异色月亮",
                "limit": "【默契值1级】",
                "tips": [
                    "禺期虽不曾见过什么劳什子“黑月亮”，可是血月……他已经在埃特尔大裂变中见得够多了。",
                    "“前辈，能具体说说吗？”",
                    "“想知道？”禺期抱着胸",
                    "“满上。记得再加少许冰块与桂花。”"
                ],
                "recipe": [
                    "经典格纹",
                    "黑月亮",
                    "少冰",
                    "苦味素",
                    "蓝莓",
                    "桂花"
                ]
            },
            {
                "name": "不负众望",
                "limit": "【默契值10级】",
                "tips": [
                    "在白荆科技里随机拦下十个人，其中八个都猜禺期平常惯用青叶陶瓷杯，另外两个人更是断言他平日里一定爱喝那种无糖、滚烫的姜茶。",
                    "您猜怎么着？完全正确。"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "姜茶",
                    "无糖",
                    "热",
                    "圆柄长签"
                ]
            },
            {
                "name": "海量",
                "limit": "【默契值16级】",
                "tips": [
                    "尽管半杯夜色危情就足以放倒一个酒量尚可的小伙子。",
                    "但对禺期来说，这不过是一杯甜水，与茶冻、水果签那些小玩意最是相配。"
                ],
                "recipe": [
                    "淑女风尚",
                    "夜色危情",
                    "多冰",
                    "偏淡",
                    "茶冻",
                    "水果签"
                ]
            },
            {
                "name": "安全第一",
                "limit": "【默契值18级】",
                "tips": [
                    "金色的酒杯边沿倒映着熊熊燃烧的炉火。",
                    "啤酒混杂低因咖啡的香气缓慢蒸腾，透出一抹耐人寻味的咸。",
                    "“嚯——禺期怎么把工坊改成这个样子了，消防安全能过吗？”",
                    "“……你说得很有道理，我问问。”"
                ],
                "recipe": [
                    "鎏·金",
                    "恩利都苦啤兑苦咖",
                    "多冰",
                    "盐",
                    "低因",
                    "心形插签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "正常冰",
                    "樱桃"
                ],
                "ex": [362, 406, 442],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "德里亚德风味花茶",
                    "热",
                    "茶冻"
                ],
                "ex": [379, 425, 463],
            },
            {
                "needLevel": 8,
                "recipe": [
                    "惑星的艾琳",
                    "盐",
                    "樱桃"
                ],
                "ex": [417, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "姜茶",
                    "无糖",
                    "热"
                ],
                "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "恩利都苦啤兑苦咖",
                    "加一份",
                    "盐",
                    "正常冰"
                ],
                "ex": [448, 501, 546],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "田偌": {
        "achievement": [
            {
                "name": "条件反射",
                "limit": "【默契值13级】",
                "tips": [
                    "“诶，田警官怎么跑了？”",
                    "“他说他有心理阴影见不得这东西……”",
                    "“挺好喝的呀，还加了桂花呢！”"
                ],
                "recipe": [
                    "自证方圆",
                    "甜牛乳",
                    "常温",
                    "全脂牛奶",
                    "桂花"
                ]
            },
            {
                "name": "女神的诱惑",
                "limit": "【默契值13级】",
                "tips": [
                    "“好苦……不过有一种西瓜的味道。”",
                    "田诺顿了顿，看着杯中的樱花悠悠叹了一口气。",
                    "“喝完了，不知道完成任务能不能快一些，努力达到优秀，对我来说比较困难。”"
                ],
                "recipe": [
                    "自证方圆",
                    "惑星的艾琳",
                    "苦味素",
                    "西瓜",
                    "樱花"
                ]
            },
            {
                "name": "满配“芭蕾”",
                "limit": "【默契值4级】",
                "tips": [
                    "“全部都选了啊？真的好喝么……”",
                    "“还没完，我再找个装饰……嗯……就紫色的那个吧！”"
                ],
                "recipe": [
                    "简约至上/熊熊杯",
                    "奶油芭蕾",
                    "全脂牛奶",
                    "偏烈",
                    "加双份",
                    "紫藤"
                ]
            },
            {
                "name": "养生之道？",
                "limit": "【默契值10级】",
                "tips": [
                    "“还、还可以？不过怎么还有椰子和咖啡的味道……”",
                    "——难得没有被曲先生特制饮品配方打败的田警官如是说。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜汁可可",
                    "常温",
                    "椰浆",
                    "咖啡冻",
                    "白玉兰"
                ]
            },
            {
                "name": "各有所好",
                "limit": "【默契值6级】",
                "tips": [
                    "“苏打水？苍哥应该会喜欢。”",
                    "田偌搅了搅面前的饮料，又戳了戳冰块，犹豫了一下还是开口：“不过刚刚过来时我听到长谣在大喊薄荷蜜柚真难喝……”"
                ],
                "recipe": [
                    "简约至上/竹节茶杯",
                    "薄荷蜜柚苏打",
                    "少冰",
                    "咸梅干",
                    "经典长签"
                ]
            },
            {
                "name": "包治百病！",
                "limit": "【默契值1级】",
                "tips": [
                    "一杯热水治百病，没什么是多喝热水治不好的。",
                    "“但是都是热的了还带柠檬味儿是不是有点……”",
                    "“别急，还有菊花呢。”",
                    "？"
                ],
                "recipe": [
                    "熊熊杯",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "菊花"
                ]
            },
            {
                "name": "过去的某一个冬天",
                "limit": "【默契值18级】",
                "tips": [
                    "“不知道为什，忽然想起了以前我们家楼下小公园的松树。”",
                    "“小时候总想着什么时候能比它高，后来才发现还挺困难的。”",
                    "“不过后来公园改建，那几棵树也搬家了。”",
                    "田偌拿起圆匙，看着眼前的杯子，“监督，你说今年冬天海临会下雪么？”"
                ],
                "recipe": [
                    "竹节茶杯/熊熊杯",
                    "银色青松",
                    "柠檬汁",
                    "正常",
                    "空心圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "白开水",
                    "柠檬汁",
                    "热"
                ],
                "ex": [399, 447, 487],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "姜汁可可",
                    "椰浆",
                    "热",
                    "咖啡冻"
                ],
                "ex": [466, 522, 569],
            }
        ]
    },
    "焰响": {
        "achievement": [
            {
                "name": "热身动作",
                "limit": "【默契值1级】",
                "tips": [
                    "“不是吧Sir，我只是说来的路上有点冷，你不用抬姜茶出来吧！”",
                    "“你不是说热姜茶驱寒祛湿，对于暖暖身子很有帮助？”",
                    "“但是难喝啊！想要暖起来，只要做几组热身动作不就行了！1、2、3、4！”"
                ],
                "recipe": [
                    "简约至上",
                    "姜茶",
                    "正常糖",
                    "热",
                    "精致纸伞"
                ]
            },
            {
                "name": "“热气”？",
                "limit": "【默契值13级】",
                "tips": [
                    "“枸杞、菊花、黄瓜、柠檬……也不错啦，正好去去热气，再加两片柠檬吧！”",
                    "“热气是什么？”",
                    "“啊……啊……该怎么解释呢？”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "叶子冻",
                    "柠檬片"
                ]
            },
            {
                "name": "卡路里在燃烧",
                "limit": "【默契值5级】",
                "tips": [
                    "“为了中和柠檬和乳酸菌，云中桂影里本就加了许多糖，你还点了这么多小料，不担心你的卡路里摄入量了吗？”",
                    "“都怪饼干和樱桃太好吃了……要不我一边深蹲一边和你说话吧？”"
                ],
                "recipe": [
                    "自证方圆",
                    "云中桂影",
                    "樱桃",
                    "汪汪饼干",
                    "樱花"
                ]
            },
            {
                "name": "水杯里的秘密",
                "limit": "【默契值1级】",
                "tips": [
                    "“我以为你的水杯里装的是蛋白粉，没想到居然是酸梅汤……”",
                    "“欸，蛋白粉怎么比得上古法制作的酸梅汤啊！很靓的喔！”",
                    "“什么‘古法’会往酸梅汤里加珍珠啊……”"
                ],
                "recipe": [
                    "简约至上",
                    "冰镇酸梅汤",
                    "正常糖",
                    "珍珠",
                    "圆匙"
                ]
            },
            {
                "name": "随时随地好彩头",
                "limit": "【默契值10级】",
                "tips": [
                    "“朗姆酒、龙舌兰、伏特加，还有青柠汁……这不就是三配一？生生猛猛，好彩头啊！”",
                    "“这是怎么谐音过来的……？”"
                ],
                "recipe": [
                    "自证方圆",
                    "银色青松",
                    "盐",
                    "正常",
                    "空心圆匙"
                ]
            },
            {
                "name": "健身狂人",
                "limit": "【默契值16级】",
                "tips": [
                    "“你怎么一口气把整杯黎威尔日升都干了？别被我加的椰浆、西瓜给骗了，它的味道虽甜，酒精含量可不低。”",
                    "“咳咳，主要是我约了凌晨一点的健身房，赶着过去呢！”",
                    "“啊？这个点去……不会太累了吗？”",
                    "“小意思啦~”"
                ],
                "recipe": [
                    "熊熊杯",
                    "黎威尔日升",
                    "椰浆",
                    "柠檬汁",
                    "西瓜",
                    "蝴蝶结"
                ]
            },
            {
                "name": "交友广泛",
                "limit": "【默契值18级】",
                "tips": [
                    "“监督你怎么一直盯着手机，都不跟我说话？是双倍糖的沉金记忆不好喝，还是沾了柠檬汁的水果签太酸？”",
                    "“抱歉……有一批产品出了问题，我正在想办法联系姬先生，但是他不接电话……”",
                    "“早说啊！我有他的私人Chatmore，我帮你问问看！”",
                    "“真的吗？没想到你连他的Chatmore都有……”",
                    "“哼哼，监督你应该问我没有谁的号码才对~”"
                ],
                "recipe": [
                    "简约至上",
                    "沉金记忆",
                    "双倍糖",
                    "柠檬汁",
                    "水果签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "椰果"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "林": {
        "achievement": [
            {
                "name": "厌恶的必要性",
                "limit": "【默契值4级】",
                "tips": [
                    "“不喜欢喝甜牛乳的话，可以不用逼自己喝的……”",
                    "“不……能感受到厌恶也好，至少证明我还活着。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "全脂牛奶",
                    "紫藤"
                ]
            },
            {
                "name": "生存需要",
                "limit": "【默契值1级】",
                "tips": [
                    "“能有一杯干净的盐水就很令人感激了。”",
                    "“但是你的表情……”",
                    "“出于生存需要的感激，并不代表我喜欢。”",
                    "“黑曜的事都是这样吗———— ‘出于生存需要’？”",
                    "“……是的。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "白开水",
                    "多冰",
                    "盐",
                    "三叶长签"
                ]
            },
            {
                "name": "清醒时分",
                "limit": "【默契值5级】",
                "tips": [
                    "“现在时间不早了，你还要喝特浓咖啡吗？”",
                    "“反正也睡不着，不如更清醒。”",
                    "“……我还是给你换成低因的吧。”"
                ],
                "recipe": [
                    "航海时代",
                    "经典特浓咖啡",
                    "奶精球",
                    "低因",
                    "原味雪顶",
                    "水果签"
                ]
            },
            {
                "name": "印记",
                "limit": "【默契值18级】",
                "tips": [
                    "尽管监督每次都会将菜单拿给林，但他几乎只会点一杯缀有银杏叶的菊花茶。",
                    "这是一叶城留在他身上的印记之一。"
                ],
                "recipe": [
                    "航海时代",
                    "枸杞菊花茶",
                    "青提",
                    "茶冻",
                    "银杏叶"
                ]
            },
            {
                "name": "心病难医",
                "limit": "【默契值13级】",
                "tips": [
                    "众人皆知，林并非爱酒之人。",
                    "可总有那么几个午夜梦回的时刻，他会踉跄地撞进Chat To Chu，点一杯最烈的千苹果，惶然吞下。",
                    "————那是他的药。"
                ],
                "recipe": [
                    "扎啤杯",
                    "干苹果",
                    "正常冰",
                    "偏烈",
                    "原味雪顶",
                    "精致纸伞"
                ]
            },
            {
                "name": "偏好",
                "limit": "【默契值6级】",
                "tips": [
                    "“知道你喜欢喝茶……但是桃桃乌龙茶也可以？不会太甜吗？”",
                    "“咳。”林的脸上也被几声轻咳带出一抹不易察觉的红，显出几分活人的样子，“多加些冰就好。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "桃桃乌龙茶",
                    "五分糖",
                    "多冰",
                    "茶冻",
                    "桂花"
                ]
            },
            {
                "name": "另一个世界",
                "limit": "【默契值16级】",
                "tips": [
                    "“或许在另一个世界，磷灰小队的队员都能获得幸福。”",
                    "林举起手中的花茶，马克杯的棱纹折射着光线，在他的脸上投下深浅不一的影子。",
                    "————那你的幸福呢？",
                    "监督没有问，只是悄悄地叹了口气。"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻",
                    "五叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "姜茶",
                    "五分糖",
                    "常温"
                ],
                "ex": [415, 465, 507],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "桃桃乌龙茶",
                    "五分糖",
                    "正常冰",
                    "茶冻"
                ],
                "ex": [461, 516, 563],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "茶冻"
                ],
                "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "茶冻"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "温留": {
        "achievement": [
            {
                "name": "海错来客",
                "limit": "【默契值4级】",
                "tips": [
                    "“小家伙，我特意来寻你，你就拿这杯空杯糊弄我？！”",
                    "“温留，这是一杯盐水……”",
                    "“于我这海错来客而言，这与空杯何异？！”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "白开水",
                    "常温",
                    "盐",
                    "三叶长签"
                ]
            },
            {
                "name": "天道难测",
                "limit": "【默契值1级】",
                "tips": [
                    "“所以温留你是怎么来的森罗？”",
                    "“想来大抵是因为当时灵力倾泄，引发了空间异动，不过……”",
                    "“不过什么？”",
                    "“往来境与天道轮回息息相关，为海错最玄妙之处……我不好说。”"
                ],
                "recipe": [
                    "航海时代",
                    "甜牛乳",
                    "无糖",
                    "热",
                    "全脂牛奶",
                    "水果签"
                ]
            },
            {
                "name": "久远之事",
                "limit": "【默契值13级】",
                "tips": [
                    "“现如今的海错各族，真是一代不如一代。”",
                    "“要知道在当年，就是青龙没落后的旁支一脉，也诞生过能力抗我十招的小辈呢。”",
                    "温留高举着手中的海水半蓝，神色忿忿。"
                ],
                "recipe": [
                    "扎啤杯",
                    "海水半蓝",
                    "正常冰",
                    "苦味素",
                    "茶冻",
                    "长匙"
                ]
            },
            {
                "name": "万古春",
                "limit": "【默契值6级】",
                "tips": [
                    "“这就是他们心心念念的疏帘淡月？还不如清和自己酿的万古春。”",
                    "“万古春……这名字真好听，是清和前辈取的吗？”",
                    "“是啊。那老道，说什么‘明月不常照，万古春复来’，于是就这么叫了。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "疏帘淡月",
                    "五分糖",
                    "少冰",
                    "桂花"
                ]
            },
            {
                "name": "静电",
                "limit": "【默契值13级】",
                "tips": [
                    "“温留，今天怎么只点了杯花茶？”",
                    "“………………消火。”",
                    "“好……吧……？不知道是不是我的错觉，您今天的头发好像格外蓬松啊？有点想————啊呀！静电！”",
                    "“静电？你认识这邪火术法？”",
                    "“邪火？术法？”",
                    "对啊，在海错我可从来没遇到过这种事，也不知是海临的谁对我下了术法！要是被我逮到，我定要他好看————"
                ],
                "recipe": [
                    "扎啤杯",
                    "德里亚德风味花茶",
                    "热",
                    "叶子冻",
                    "樱花"
                ]
            },
            {
                "name": "自助",
                "limit": "【默契值16级】",
                "tips": [
                    "小家伙，我一进你这门便知，你这里很是有些好手————去，把他们都叫来，同我试试身手如何？",
                    "“你拿出这杯沉金记忆做什么？”",
                    "“还请高抬贵手，白荆不是自助比武场啊啊啊……”"
                ],
                "recipe": [
                    "航海时代",
                    "沉金记忆",
                    "正常糖",
                    "柠檬汁",
                    "银杏叶"
                ]
            },
            {
                "name": "翻译",
                "limit": "【默契值8级】",
                "tips": [
                    "“温留，听说自你来后，Deep Ocean的营业额又翻了几倍？”",
                    "“哼，那臭老道写的酒水名册，几人看得懂！老子索性给他重写了！”",
                    "“人形自走翻译器啊……”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "薄暮飞行",
                    "柠檬汁",
                    "偏烈",
                    "黄瓜片",
                    "心形插签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨",
                    "无糖",
                    "正常冰"
                ],
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "云无月": {
        "achievement": [
            {
                "name": "双向奔赴",
                "limit": "【默契值1级】",
                "tips": [
                    "在后援会的组织下，每一个参与这场音乐会的工作人员都拿到了一份精心准备的伴手礼和一杯在海临颇受欢迎的青提啵啵奶茶。",
                    "“我记得云小姐你不爱喝这个，要不让他们换……”",
                    "“无妨，拿给我吧。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "青提啵啵奶茶",
                    "双倍糖",
                    "多冰",
                    "咸梅干",
                    "银杏叶"
                ]
            },
            {
                "name": "略有疑惑",
                "limit": "【默契值1级】",
                "tips": [
                    "“……我听说海临人喝姜茶是为了暖胃，为什么要往里面放冰块？”"
                ],
                "recipe": [
                    "经典格纹",
                    "姜茶",
                    "正常糖",
                    "正常冰",
                    "心形插签"
                ]
            },
            {
                "name": "绝对音感",
                "limit": "【默契值4级】",
                "tips": [
                    "“这瓶橘子汽水被人动了手脚。”",
                    "“嗯？可是它看起来很正常啊……”",
                    "“如果它没问题，开瓶的声音就不应该是降B。”",
                    "“……绝对音感还能这么用吗？”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "玻璃橘子",
                    "多冰",
                    "芒果果冻",
                    "白玉兰"
                ]
            },
            {
                "name": "专注",
                "limit": "【默契值1级】",
                "tips": [
                    "琴室外传来一阵醉人的凤梨甜香，就连休伯特也忍不住四处张望，但云无月的琴声毫无动摇。",
                    "她的世界，至少在这一刻，只有眼前的d小调协奏曲k466。"
                ],
                "recipe": [
                    "淑女风尚",
                    "酒酿凤梨",
                    "双倍糖",
                    "少冰",
                    "三叶长签"
                ]
            },
            {
                "name": "无心之举？",
                "limit": "【默契值10级】",
                "tips": [
                    "云无月似乎很喜欢咖啡口味的任何东西，但对水果兴致缺缺。",
                    "就像现在，她正状似无意地把杯中的樱桃放在一边。",
                    "而监督也心照不宣地移开了眼。"
                ],
                "recipe": [
                    "经典格纹",
                    "黑月亮",
                    "少冰",
                    "柠檬汁",
                    "樱桃",
                    "桂花"
                ]
            },
            {
                "name": "简单即可",
                "limit": "【默契值13级】",
                "tips": [
                    "一杯简单的苏打水，若稍嫌不够，再向其中添些丰富口感的果冻即可。"
                ],
                "recipe": [
                    "鎏·金",
                    "冰镇苏打水",
                    "少冰",
                    "茶冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "恩利都往事",
                "limit": "【默契值18级】",
                "tips": [
                    "“恩利都盛产乳制品，小时候我不爱喝牛奶，休伯特总是把它混在咖啡里，再往里面放上两个奶精球……”"
                ],
                "recipe": [
                    "鎏·金",
                    "好椰拿铁",
                    "奶精球",
                    "加双份",
                    "心形插签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨",
                    "五分糖",
                    "少冰"
                ],
                "ex": [363, 406, 443],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "玻璃橘子",
                    "少冰",
                    "蜜桃冻"
                ],
                "ex": [405, 453, 494],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "冰镇酸梅汤",
                    "五分糖",
                    "蜜桃冻"
                ],
                "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "少冰",
                    "青梅"
                ],
                "ex": [492, 551, 601],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "乐无异": {
        "achievement": [
            {
                "name": "严禁酒驾",
                "limit": "【默契值13级】",
                "tips": [
                    "“监督，我要是喝了这杯沉金记忆，等下还能开扳不倒三号吗？”",
                    "“绝·对·不·行。”"
                ],
                "recipe": [
                    "柯林杯",
                    "沉金记忆",
                    "无糖",
                    "柠檬汁",
                    "经典长签"
                ]
            },
            {
                "name": "家风如此",
                "limit": "【默契值5级】",
                "tips": [
                    "“我已经把你那份咖啡换成低因的了，还是喝不惯吗？”",
                    "“没办法，我妈从小就不让我碰这些——而且低因也好苦啊！”",
                    "“……那我再给你加勺草莓冰淇淋。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "经典特浓咖啡",
                    "糖浆",
                    "低因",
                    "草莓冰淇淋",
                    "桂花"
                ]
            },
            {
                "name": "朋友的意义",
                "limit": "【默契值13级】",
                "tips": [
                    "“监督监督，我要阿华田奶茶，五分糖，加珍珠。我记得没有加冰的选项？真可惜。”",
                    "“你这点单也太熟练了吧……不是说傅女士平常不让你喝这些的吗？”",
                    "“咳，如果我说是风清洛教我的，监督你信吗？”",
                    "“如果这不是我这个月第三次听你甩锅给他，我可能会信。”",
                    "“那……雪长夏教我的？花时也行。”"
                ],
                "recipe": [
                    "柯林杯",
                    "阿华田奶茶",
                    "五分糖",
                    "珍珠",
                    "樱花"
                ]
            },
            {
                "name": "共通之处？",
                "limit": "【默契值8级】",
                "tips": [
                    "“我怀疑你们这些研究机械的人是不是都拿味觉换了天赋啊……”",
                    "“怎么这么说？”",
                    "“瞳老师、禺期前辈还有你，居然都是姜茶爱好者。”",
                    "“很好喝啊~”"
                ],
                "recipe": [
                    "环口杯",
                    "姜茶",
                    "正常糖",
                    "少冰",
                    "迷迭香"
                ]
            },
            {
                "name": "办法总比困难多",
                "limit": "【默契值1级】",
                "tips": [
                    "“双莓之恋……BS的联名款？”",
                    "“你知道？”",
                    "“当然啦。我不是跟监督你说过，我很关注那个艾达来的仿生机器人的。监督，我真的不能邀请她扫描——”",
                    "“不能。”",
                    "“那我退一步。如果说我非常有礼貌地——”",
                    "“不行。”",
                    "“但是我好不容易才抽到她的见面签售券，聊两句总归可以吧——”",
                    "“……啊？”"
                ],
                "recipe": [
                    "环口杯",
                    "双莓之恋",
                    "七分糖",
                    "正常冰",
                    "薄荷叶"
                ]
            },
            {
                "name": "头痛忽然来",
                "limit": "【默契值1级】",
                "tips": [
                    "“乐无异你这杯苏打水里有95%是冰块吧？喝太快会头疼的，你小心——”",
                    "“喵了个咪！好痛！”",
                    "“——我都还没说完。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "冰镇苏打水",
                    "多冰",
                    "茶冻",
                    "心形插签"
                ]
            },
            {
                "name": "风花雪月",
                "limit": "【默契值16级】",
                "tips": [
                    "“怎么来这里还在捣鼓通讯器？最喜欢的雪梨汁不喝了？”",
                    "“嗯，等会吧。风清洛今天晚上的飞机，我急着把这个改装完给他送去。”",
                    "“改装？”",
                    "“不是什么危险的事，就是加装了个独立发信器。这样……那家伙不管到哪里、不管什么时候，只要打开通讯器，都能联系到我们。”",
                    "“我们……？”",
                    "“风花雪月。”",
                    "说出这四个字，乐无异好像有些不好意思。",
                    "但他的眼睛是那么亮。"
                ],
                "recipe": [
                    "双层叶纹",
                    "鲜榨雪梨汁",
                    "多冰",
                    "椰果",
                    "三叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "玻璃橘子",
                    "多冰",
                    "叶子冻"
                ],
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "杨枝甘露",
                    "原味雪顶",
                    "珍珠"
                ],
                "ex": [567, 635, 692],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "修": {
        "achievement": [
            {
                "name": "误会一场",
                "limit": "【默契值1级】",
                "tips": [
                    "“修……难道你也喜欢……B……S……”",
                    "“小友何出此言？”",
                    "“你桌上的那杯双莓之恋……天啊……还是双倍糖……珍珠……”",
                    "“这是为小友准备的。”",
                    "“啊……谢谢你哦。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "双莓之恋",
                    "双倍糖",
                    "少冰",
                    "珍珠",
                    "迷迭香"
                ]
            },
            {
                "name": "关心",
                "limit": "【默契值1级】",
                "tips": [
                    "即便加了糖浆与雪顶，仍旧遮掩不住监督杯中双倍浓缩咖啡的浓浓苦味。",
                    "“小友若是困乏，还是早些休息为好。”"
                ],
                "recipe": [
                    "经典格纹",
                    "经典特浓咖啡",
                    "糖浆",
                    "加双份",
                    "原味雪顶",
                    "樱花"
                ]
            },
            {
                "name": "合作愉快？",
                "limit": "【默契值1级】",
                "tips": [
                    "直到修离开，他一次都没有拿起面前的青叶陶瓷杯。",
                    "“修是不是不太满意这次的合作啊……”",
                    "“他只是单纯不太喜欢姜茶吧。”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "姜茶",
                    "正常糖",
                    "少冰",
                    "薄荷叶"
                ]
            },
            {
                "name": "一切从简",
                "limit": "【默契值13级】",
                "tips": [
                    "“无需费心，给鄙人一杯冰水即可。”"
                ],
                "recipe": [
                    "鎏·金",
                    "白开水",
                    "少冰",
                    "柠檬汁",
                    "白玉兰"
                ]
            },
            {
                "name": "违和感",
                "limit": "【默契值1级】",
                "tips": [
                    "“修，你居然会喝橘子汽水？”",
                    "“偶尔，鄙人也想了解一下年轻人的喜好。”",
                    "修有些苦恼地看着面前装饰着水果签的杯子。",
                    "“就是这杯子，有些奇怪……”",
                    "“哈哈哈。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "玻璃橘子",
                    "正常冰",
                    "叶子冻",
                    "水果签"
                ]
            },
            {
                "name": "来而不往非礼也",
                "limit": "【默契值5级】",
                "tips": [
                    "“热雪梨汁？”",
                    "“我听你的鼻音有些重，就把你的点单换了……修你不会怪我自作主张吧？”",
                    "“小友一片好心，鄙人感念还来不及。只是……”",
                    "“只是什么？”",
                    "“来而不往非礼也。这一枚饼干，就当是给小友的回赠了。”"
                ],
                "recipe": [
                    "经典格纹",
                    "鲜榨雪梨汁",
                    "热",
                    "汪汪饼干",
                    "三叶长签"
                ]
            },
            {
                "name": "意料之外",
                "limit": "【默契值18级】",
                "tips": [
                    "在监督的坚持之下，修难得点了一款调制酒。",
                    "薄荷风味淡酒，少冰，佐以青梅……",
                    "“怎么样怎么样？”",
                    "“……小友恐怕比鄙人更了解自己的喜好了。”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "青草薄荷",
                    "少冰",
                    "偏淡",
                    "青梅",
                    "心形插签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "银色青松",
                    "苦味素",
                    "偏淡"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "蓝莓"
                ],
                "ex": [561, 628, 684],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "唐路遥": {
        "achievement": [
            {
                "name": "为“父”艰难",
                "limit": "【默契值1级】",
                "tips": [
                    "“兄弟，你也是帮小孩拿周边的？”",
                    "“为了那什么BS，这已经是我这礼拜的第四杯双莓之恋了。早知道要喝这么多，我也和你一样点三分糖、少冰了。”",
                    "“我们当爹的就是难啊——”",
                    "唐路遥看了眼不远处正晃悠着联动钥匙扣的无咎，终究还是没反驳。"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "双莓之恋",
                    "双倍糖",
                    "多冰",
                    "椰果",
                    "长匙"
                ]
            },
            {
                "name": "严格标准",
                "limit": "【默契值1级】",
                "tips": [
                    "“饮料？你们点吧，我得赶回去填份报表。急用。”",
                    "“唐经理，真的不尝尝新品吗？就是带酒精……”",
                    "“……用的什么酒？”",
                    "“甜米酒？”",
                    "“也行吧！五分糖，少冰，再加一片银杏叶。我拿回去逗鸟玩。”"
                ],
                "recipe": [
                    "航海时代",
                    "酒酿凤梨",
                    "五分糖",
                    "少冰",
                    "银杏叶"
                ]
            },
            {
                "name": "大危机？",
                "limit": "【默契值1级】",
                "tips": [
                    "“唐经理看着有些面熟啊，我们是不是在Deap Ocean见过？”",
                    "“啊哈哈齐总真是幽默——”",
                    "“你连续一个月点了‘黑月亮’……”",
                    "“……”",
                    "“多冰，加盐，加蓝莓，对吗？”",
                    "“我想您一定是看错了。我最近都在加班，哪有空去D……D什么来着？”",
                    "“也是。Deap Ocean里那个小伙可热情有趣多了。”",
                    "“哈哈。啊哈哈。”"
                ],
                "recipe": [
                    "扎啤杯",
                    "黑月亮",
                    "多冰",
                    "盐",
                    "蓝莓",
                    "圆柄长签"
                ]
            },
            {
                "name": "老样子",
                "limit": "【默契值5级】",
                "tips": [
                    "“唐经——”",
                    "“嘘！小声些！我可不想让鹿路运输的人知道我在你这喝些配方都不公开的酒。”",
                    "“那你……今天还来吗？”",
                    "“当然来！老样子。加一份苦味素和奇异果片。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "奇异果片",
                    "菊花"
                ]
            },
            {
                "name": "幻想时间",
                "limit": "【默契值8级】",
                "tips": [
                    "每当提及加班期结束后的安排，唐经理总显得有些……过于兴奋。",
                    "“监督你说，去黎威尔看日出怎么样？”",
                    "“那个……各个方面来说都不可能……还是再来一杯吧，加奶精球、草莓、柠檬汁？”",
                    "“还有纸伞！”"
                ],
                "recipe": [
                    "扎啤杯",
                    "黎威尔日升",
                    "奶精球",
                    "柠檬汁",
                    "草莓",
                    "精致纸伞"
                ]
            },
            {
                "name": "同是深夜加班人",
                "limit": "【默契值10级】",
                "tips": [
                    "3点38，办公室里忽然传来一阵脚步声，监督连头也没回。",
                    "“早啊，唐经理。来一杯吗？特浓？”",
                    "“……双份浓缩，多帮我抓两个糖包。”"
                ],
                "recipe": [
                    "航海时代",
                    "经典特浓咖啡",
                    "糖包",
                    "加双份",
                    "原味雪顶",
                    "水果签"
                ]
            },
            {
                "name": "大人的心得",
                "limit": "【默契值16级】",
                "tips": [
                    "加班的日子比咖啡还苦，必须佐酒送服。",
                    "可即便如此，唐经理还是坚持在自己的马克杯上摆几根充满仪式感的迷迭香。"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "苦味素",
                    "加双份",
                    "迷迭香"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黑月亮",
                    "柠檬汁",
                    "多冰",
                    "樱桃"
                ],
                "ex": [362, 406, 442],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "极夜马戏团",
                    "柠檬汁",
                    "偏烈",
                    "樱桃"
                ],
                "ex": [523, 586, 639],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "惑星的艾琳",
                    "柠檬汁",
                    "咖啡雪顶"
                ],
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "豹富": {
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
                "ex": [240, 269, 293],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "豹富特供",
                    "三文鱼"
                ],
                "ex": [288, 323, 352],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "豹富特供",
                    "和牛"
                ],
                "ex": [360, 403, 439],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "尤尼": {
        "achievement": [
            {
                "name": "非典型",
                "limit": "【默契值1级】",
                "tips": [
                    "“啊，我忘记加咸梅干了，稍等一下……好了。”",
                    "“……”",
                    "“怎么不喝？”",
                    "“太冰了，再等等吧。”",
                    "“酸梅汤里没加冰啊……只是冰镇的也不行？你还真是非典型斯奈菲尔人。不过也对，你那个时候，斯奈菲尔还没有那么寒冷。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "冰镇酸梅汤",
                    "五分糖",
                    "咸梅干",
                    "三叶长签"
                ]
            },
            {
                "name": "出海的心？",
                "limit": "【默契值4级】",
                "tips": [
                    "“船上的水手饮用烈酒是为了驱赶寒冷与潮湿，陆地上的人又是为了什么呢？体验在海上那种晕乎乎的感觉吗？”",
                    "“呃……也许？”",
                    "“看来每个人都有一颗出海的心啊。”",
                    "尤尼端起面前的沉金记忆，满意地品了一口。"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "沉金记忆",
                    "无糖",
                    "柠檬汁",
                    "银杏叶"
                ]
            },
            {
                "name": "水手习惯",
                "limit": "【默契值6级】",
                "tips": [
                    "“白桃芝士奶盖，五分糖……常温……OK！尤尼你要中杯还是大杯？”",
                    "“这个。”",
                    "“扎啤杯！？！？！？”",
                    "“在船上，我都是用这个喝水的，怎么了吗？”"
                ],
                "recipe": [
                    "扎啤杯",
                    "白桃芝士奶盖",
                    "五分糖",
                    "常温",
                    "精致纸伞"
                ]
            },
            {
                "name": "速溶风味",
                "limit": "【默契值16级】",
                "tips": [
                    "“尤尼，你确定要加很多糖浆？”",
                    "“嗯，还要低因的。”",
                    "“这……明明是我现磨手冲的，但是喝起来完全就是市面上贩售的速溶饮料啊……”",
                    "“没关系，我就喜欢这种速溶风味。”"
                ],
                "recipe": [
                    "扎啤杯",
                    "经典特浓咖啡",
                    "糖浆",
                    "低因",
                    "圆柄长签"
                ]
            },
            {
                "name": "难掩震惊",
                "limit": "【默契值1级】",
                "tips": [
                    "“不知道在其他异世界航行会是什么感觉……”",
                    "“其实，有些异世界至今都没有发现‘海’的存在。”",
                    "“这样啊……”",
                    "尤尼的语气平稳，可她的行动出卖了她动摇的内心——她就连自己加了双次盐都没发现。"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "黎威尔日升",
                    "椰浆",
                    "盐",
                    "西瓜",
                    "空心圆匙"
                ]
            },
            {
                "name": "淡水的珍贵",
                "limit": "【默契值13级】",
                "tips": [
                    "“寻常的白开水就够了吗？”",
                    "“嗯。海上的一杯淡水已经足够珍贵。”",
                    "“……不管怎么样我还是给你加根水果签吧！”"
                ],
                "recipe": [
                    "航海时代",
                    "白开水",
                    "常温",
                    "盐",
                    "水果签"
                ]
            },
            {
                "name": "波光粼粼",
                "limit": "【默契值18级】",
                "tips": [
                    "“这真的很像海水的颜色……”",
                    "“具体来说，更像是在晨光映照下半透的海面。”",
                    "“你描述得可真具体。”",
                    "尤尼看向监督，水色的眼眸中波光粼粼。",
                    "“……当然了。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "海水半蓝",
                    "少冰",
                    "苦味素",
                    "茶冻",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "甜牛乳",
                    "无糖",
                    "常温",
                    "全脂牛奶"
                ],
                "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "蜂蜜啤酒",
                    "偏淡",
                    "常温"
                ],
                "ex": [470, 526, 574],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白开水",
                    "柠檬汁",
                    "常温"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "昊苍": {
        "achievement": [
            {
                "name": "灵敏味觉",
                "limit": "【默契值1级】",
                "tips": [
                    "“奎斯坎尼斯的味觉可比海临人灵敏几万倍，无糖热姜茶是不是有点过分了，嗯？”"
                ],
                "recipe": [
                    "简约至上",
                    "姜茶",
                    "无糖",
                    "热",
                    "三叶长签"
                ]
            },
            {
                "name": "伤心了汪",
                "limit": "【默契值1级】",
                "tips": [
                    "“一点味道都没有的话，不知道为什么，有点伤心呢哈哈。”"
                ],
                "recipe": [
                    "自证方圆",
                    "白开水",
                    "多冰",
                    "盐",
                    "樱花"
                ]
            },
            {
                "name": "苦啤兑苦咖",
                "limit": "【默契值1级】",
                "tips": [
                    "“本来都这么苦了，还要加双倍浓缩。小监督，你在白荆科技过得还好吗？”"
                ],
                "recipe": [
                    "简约至上",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "柠檬汁",
                    "加双份",
                    "水果签"
                ]
            },
            {
                "name": "被名字欺骗",
                "limit": "【默契值4级】",
                "tips": [
                    "“我还以为拿铁是什么……原来还是咖啡啊。小监督，帮我再加些糖浆吧。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "好椰拿铁",
                    "糖浆",
                    "标准",
                    "空心圆匙"
                ]
            },
            {
                "name": "特殊情况",
                "limit": "【默契值6级】",
                "tips": [
                    "每当昊苍做了关于黎威尔的梦，他就会来休息室点一杯惑星的艾琳。",
                    "他并不喜欢那味道，也不会醉，但借着酒精的名义，他才能跟监督说些……不愿提起的过去。"
                ],
                "recipe": [
                    "自证方圆",
                    "惑星的艾琳",
                    "盐",
                    "杨桃",
                    "经典长签"
                ]
            },
            {
                "name": "小燕子推荐",
                "limit": "【默契值13级】",
                "tips": [
                    "“小监督，上次小燕子在你这喝了什么来着？回去之后，他跟我念叨了好几天呢。”",
                    "“杨枝甘露，加樱桃和芒果果冻。”",
                    "“那我来一份一样的就行。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "杨枝甘露",
                    "樱桃",
                    "芒果果冻",
                    "圆柄长签"
                ]
            },
            {
                "name": "蜂蜜啤酒",
                "limit": "【默契值18级】",
                "tips": [
                    "“……一杯蜂蜜啤酒，让我摸一下你的耳朵。”",
                    "“噗。小监督，为了摸我的耳朵，你还真是什么办法都想出来了啊？”",
                    "“……是我不好，你忘了我说的话吧。”",
                    "“我没说不同意啊。记得多加点冰块。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "蜂蜜啤酒",
                    "多冰",
                    "偏烈",
                    "精致纸伞"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "恩利都苦啤兑苦咖",
                    "标准",
                    "盐",
                    "少冰"
                ],
                "ex": [448, 501, 546],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "惑星的艾琳",
                    "盐",
                    "原味雪顶"
                ],
                "ex": [467, 523, 571],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "杨枝甘露",
                    "原味雪顶",
                    "椰果"
                ],
                "ex": [567, 635, 692],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "百里屠苏": {
        "achievement": [
            {
                "name": "难忘的搭配",
                "limit": "【默契值4级】",
                "tips": [
                    "“这杯加了特浓咖啡怎么样？我加了草莓冰淇淋，也不知道你喜不喜欢……”",
                    "“味道……十分独特，终生难忘。”"
                ],
                "recipe": [
                    "柯林杯",
                    "经典特浓咖啡",
                    "糖包",
                    "加双份",
                    "草莓冰淇淋",
                    "五叶长签"
                ]
            },
            {
                "name": "不合群的青年",
                "limit": "【默契值5级】",
                "tips": [
                    "每当午休来临，那些与百里屠苏年纪相仿的同事总是三三两两地聚在一起谈笑，而他却拿着一杯热水，独自坐在办公桌前，也不知在想什么。",
                    "别误会，大家并没有孤立他，不如说……他一个人孤立了所有人？"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "柠檬片"
                ]
            },
            {
                "name": "我猜我猜我猜猜猜",
                "limit": "【默契值6级】",
                "tips": [
                    "“…………”",
                    "“是芒果果冻太甜了吗？”",
                    "“…………”",
                    "“还是橘子涩口？”",
                    "“…………”",
                    "“我知道了，是——”",
                    "“冰。”"
                ],
                "recipe": [
                    "环口杯",
                    "玻璃橘子",
                    "多冰",
                    "芒果果冻",
                    "长匙"
                ]
            },
            {
                "name": "回忆",
                "limit": "【默契值13级】",
                "tips": [
                    "刚离开那·间实验室的时候，也曾有人给过他这么一杯热牛奶。",
                    "“暖暖身子。我们马上带你走。”"
                ],
                "recipe": [
                    "双层叶纹",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "全脂牛奶",
                    "樱花"
                ]
            },
            {
                "name": "意外收获？",
                "limit": "【默契值10级】",
                "tips": [
                    "看着监督绞尽脑汁改换配方的模样，百里屠苏抿了抿嘴，还是将眼前这杯加了椰果的双莓之恋端了起来——",
                    "……还不错。"
                ],
                "recipe": [
                    "柯林杯",
                    "双莓之恋",
                    "三分糖",
                    "少冰",
                    "椰果",
                    "精致纸伞"
                ]
            },
            {
                "name": "特别支援",
                "limit": "【默契值16级】",
                "tips": [
                    "“一杯水就……”",
                    "“停！”监督将一杯加了茶冻的雪梨汁推到他面前，“有人告诉我，你喜欢这个？”",
                    "“……十手卫。”百里屠苏的语气难得有了些起伏，听着鲜活多了。"
                ],
                "recipe": [
                    "双层叶纹",
                    "鲜榨雪梨汁",
                    "热",
                    "茶冻",
                    "空心圆匙"
                ]
            },
            {
                "name": "春风送暖",
                "limit": "【默契值18级】",
                "tips": [
                    "百里屠苏不明白为什么白荆科技会邀请他参加内部聚餐，也不明白自己为什么真的来了。",
                    "“别管这么多了，开心就好。”监督不知被灌了几杯沉金记忆，脸红彤彤的，咧着嘴就往百里屠苏怀里塞了一个……红包？“要开心啊，屠苏。”",
                    "“………………嗯。”"
                ],
                "recipe": [
                    "环口杯",
                    "沉金记忆",
                    "五分糖",
                    "盐",
                    "薄荷叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "干苹果",
                    "偏淡",
                    "少冰",
                    "奇异果片"
                ],
                "ex": [492, 551, 601],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "沉金记忆",
                    "五分糖",
                    "苦味素"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "米达斯": {
        "achievement": [
            {
                "name": "敏锐察觉",
                "limit": "【默契值1级】",
                "tips": [
                    "“奶油芭蕾的味道……似乎和之前有所不同。”",
                    "“今天普通牛奶刚好用完了，就换了燕麦奶。你尝出来了？”",
                    "“嗯。有股……硝烟的味道。”"
                ],
                "recipe": [
                    "简约至上",
                    "奶油芭蕾",
                    "燕麦奶",
                    "标准",
                    "紫藤"
                ]
            },
            {
                "name": "难言的魔力",
                "limit": "【默契值5级】",
                "tips": [
                    "监督是故意将满杯熊熊燕麦牛奶放到米达斯面前的。",
                    "米达斯清楚地知道这一点。",
                    "——不知为何，他身边的人似乎都爱看他为难的样子。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "焦糖布丁",
                    "银杏叶"
                ]
            },
            {
                "name": "箱中之物",
                "limit": "【默契值1级】",
                "tips": [
                    "尽管米达斯本人对姜茶不甚感冒，但那箱中之物似乎对它颇为青睐。",
                    "每当监督端出一杯热气腾腾的姜茶，它总是格外平静。"
                ],
                "recipe": [
                    "简约至上",
                    "姜茶",
                    "正常糖",
                    "热",
                    "水果签"
                ]
            },
            {
                "name": "慨叹",
                "limit": "【默契值1级】",
                "tips": [
                    "“换作一年前，我绝对想不到如今我还能拥有端坐饮茶的余裕。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "枸杞菊花茶",
                    "青提",
                    "茶冻",
                    "柠檬片"
                ]
            },
            {
                "name": "助力？",
                "limit": "【默契值10级】",
                "tips": [
                    "干苹果的醇香萦绕鼻尖。",
                    "米达斯对这味道再熟悉不过。",
                    "在无数个辗转反侧的夜，唯有它能助自己一臂之力。"
                ],
                "recipe": [
                    "自证方圆",
                    "干苹果",
                    "多冰",
                    "偏烈",
                    "奇异果片",
                    "樱花"
                ]
            },
            {
                "name": "伴手礼",
                "limit": "【默契值18级】",
                "tips": [
                    "“监督，也许……你能将酸梅汤的方子给我吗？”",
                    "“当然可以。是带给齐齐的吗？”",
                    "“嗯。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "冰镇酸梅汤",
                    "五分糖",
                    "汪汪饼干",
                    "蝴蝶结"
                ]
            },
            {
                "name": "晨星",
                "limit": "【默契值10级】",
                "tips": [
                    "无论何时何地，米达斯的身边总是备着一个装满清水的水壶。",
                    "“时刻准备投入战斗是军人的天职。”",
                    "米达斯没有注意到，在说出这句话时，他难得地昂起了头，眼神如晨星般闪烁。"
                ],
                "recipe": [
                    "自证方圆",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "桂花"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "白开水",
                    "常温",
                    "盐"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "十手卫": {
        "achievement": [
            {
                "name": "拒绝",
                "limit": "【默契值4级】",
                "tips": [
                    "“我现在脑子就够乱的了，没必要再来一杯‘记忆’。”",
                    "“还那么苦。”"
                ],
                "recipe": [
                    "简约至上",
                    "沉金记忆",
                    "无糖",
                    "苦味素",
                    "紫藤"
                ]
            },
            {
                "name": "主人的烦恼",
                "limit": "【默契值5级】",
                "tips": [
                    "“我记得老卫你不爱喝姜茶啊，怎么今天还专门点这个？”",
                    "“昨天突然降温，我还得出去遛狗，结果就有点着凉。今天不喝点热的不行啊。”",
                    "“歇一天不行吗？”",
                    "“我以前和吴苍还能有个商量，地地就……”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜茶",
                    "五分糖",
                    "热",
                    "枫叶"
                ]
            },
            {
                "name": "重返岗位",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督，等会我走的时候，能从你这顺一杯咖啡吗？”",
                    "“当然可以。不过这都几点了……老卫你还喝咖啡啊？”",
                    "“没办法，要回局里一趟。”",
                    "“你还算半个病号呢，这就开始加班了？”",
                    "“罪犯可不会等着我康复了再犯事。监督你记得帮我加两……算了，还是一份浓缩吧。”"
                ],
                "recipe": [
                    "自证方圆",
                    "经典特浓咖啡",
                    "椰浆",
                    "加一份",
                    "原味雪顶",
                    "白玉兰"
                ]
            },
            {
                "name": "迷惑手段",
                "limit": "【默契值13级】",
                "tips": [
                    "在Deep Ocean晦暗不明的灯光下，十手卫浅抿了一口杯中琥珀色的液体，不动声色地靠近自己的线人。",
                    "“不知道的还以为你拿着威士忌呢，谁能想到是酸梅汤啊——你还加了珍珠？？我都不知道这里还卖这个！”"
                ],
                "recipe": [
                    "熊熊杯",
                    "冰镇酸梅汤",
                    "五分糖",
                    "珍珠",
                    "迷迭香"
                ]
            },
            {
                "name": "意料之外",
                "limit": "【默契值8级】",
                "tips": [
                    "“监督瞧瞧，这是什么？”",
                    "“保温杯。”",
                    "“这可不是寻常的保温杯——这是小梓塞给我的。”",
                    "“听说我这次失踪之后啊，她都求到魁主面前去了。哎呀——”",
                    "“所以里面装了什么？”",
                    "“我还没来得及打开呢。正好，一块看看？”",
                    "“这是………………………………………白水？”",
                    "“最多加了点柠檬汁。”",
                    "“这丫头——好歹装点鸡汤啊！关心人还这么别扭，跟椿简直一模一……不、比她妈还严重！”"
                ],
                "recipe": [
                    "自证方圆",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "桂花"
                ]
            },
            {
                "name": "归处",
                "limit": "【默契值16级】",
                "tips": [
                    "“那可真是一片漂亮的海……”",
                    "“抛开失忆不谈，生活很悠闲，很适合长住。”",
                    "“不过，我总是要回来的。”",
                    "“没办法，谁叫我的心在这儿。”"
                ],
                "recipe": [
                    "简约至上",
                    "海水半蓝",
                    "正常冰",
                    "柠檬汁",
                    "茶冻",
                    "经典长签"
                ]
            },
            {
                "name": "迷思",
                "limit": "【默契值18级】",
                "tips": [
                    "“监督，你说，这加了蜂蜜的酒还是酒，为什么加了蜂蜜的水，大家就不认为它不能和纯净水相提并论呢？”",
                    "“这……好哲学的问题。你怎么看？”",
                    "“我想，是因为‘酒’够强烈。不管混了多少‘杂质’，它都不会动摇。”",
                    "“老卫，你这说的还是眼前这杯蜂蜜啤酒吗？”",
                    "“哈哈，谁知道呢。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "蜂蜜啤酒",
                    "少冰",
                    "偏烈",
                    "经典长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "柚柚切颗NOW",
                    "五分糖",
                    "杨桃"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "明月尘": {
        "achievement": [
            {
                "name": "尊敬",
                "limit": "【默契值1级】",
                "tips": [
                    "“虽然在成为阿玛辛后，我的味觉退化了不少，但……加了苦味素的苦啤兑苦咖？”",
                    "“这是阁下平日的饮品？”",
                    "“……你实在令人尊敬。”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "苦味素",
                    "标准",
                    "柠檬片"
                ]
            },
            {
                "name": "随身物品",
                "limit": "【默契值13级】",
                "tips": [
                    "明月尘扫了一眼自己面前的无糖热牛奶，无声地将自己的箱子打开，从里面拿出一整瓶未开封的红酒。",
                    "“……你一直随身带着这个吗？”",
                    "“是的。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "甜牛乳",
                    "无糖",
                    "热",
                    "三叶长签"
                ]
            },
            {
                "name": "黑月亮",
                "limit": "【默契值4级】",
                "tips": [
                    "“如果世上的某处真有黑月亮，那夜晚就更加无趣了。”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "黑月亮",
                    "多冰",
                    "柠檬汁",
                    "樱桃",
                    "水果签"
                ]
            },
            {
                "name": "虚惊一场",
                "limit": "【默契值5级】",
                "tips": [
                    "“无须担心，这杯极夜马戏团里的盐不会对我造成任何影响。”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "极夜马戏团",
                    "盐",
                    "偏烈",
                    "奇异果片",
                    "精致纸伞"
                ]
            },
            {
                "name": "切莫当真",
                "limit": "【默契值6级】",
                "tips": [
                    "“这杯五分糖的热姜茶还不错，阁下要试试吗？”",
                    "“……我能相信阿玛辛的味觉吗？”",
                    "“当然。”",
                    "明月尘真诚地笑了。"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "姜茶",
                    "五分糖",
                    "热",
                    "银杏叶"
                ]
            },
            {
                "name": "永生之苦",
                "limit": "【默契值13级】",
                "tips": [
                    "“如此灿烂的日出业已陨落，而我却被引至永生的道路……命运啊，实在是可悲可恶不可测。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "黎威尔日升",
                    "椰浆",
                    "柠檬汁",
                    "黄瓜片",
                    "五叶长签"
                ]
            },
            {
                "name": "行走的灾厄",
                "limit": "【默契值1级】",
                "tips": [
                    "“在漫长的岁月中，我曾不止一次培植鲜花草木。”",
                    "“只可惜阿玛辛所过之处唯有死亡随行——有时早晨种下，傍晚便已腐朽。”",
                    "“嗯？阁下说和阿玛辛没关系……？”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻"
                ],
                "ex": [434, 486, 530],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "少冰",
                    "樱桃"
                ],
                "ex": [461, 517, 564],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "极夜马戏团",
                    "盐",
                    "正常",
                    "樱桃"
                ],
                "ex": [476, 533, 581],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "白开水",
                    "盐",
                    "少冰"
                ],
                "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "景": {
        "achievement": [
            {
                "name": "无需更改",
                "limit": "【默契值4级】",
                "tips": [
                    "早在景接任前，橘子汁便是乐园岛食堂餐点的标配。",
                    "尽管她本人并不喜爱那酸甜的味道，但她并不会根据自己的喜好随意更改岛上设置。",
                    "——哪怕只是一杯饮料。"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "玻璃橘子",
                    "少冰",
                    "叶子冻",
                    "薄荷叶"
                ]
            },
            {
                "name": "流行配方",
                "limit": "【默契值5级】",
                "tips": [
                    "“一般。”",
                    "刑狱长放下手中的三分糖的白桃芝士奶盖，淡然地评价道。",
                    "“欸？我看你点单那么详细，还以为是你很喜欢的口味……”",
                    "“只是听说这个配方在岛外颇受欢迎，所以有些好奇罢了。”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "白桃芝士奶盖",
                    "三分糖",
                    "正常冰",
                    "青提",
                    "迷迭香"
                ]
            },
            {
                "name": "“双面”",
                "limit": "【默契值13级】",
                "tips": [
                    "为处理公务，刑狱长习惯了随时处于紧绷状态。",
                    "但景可以在监督这里，点一杯更烈的啤酒。"
                ],
                "recipe": [
                    "马天尼杯",
                    "蜂蜜啤酒",
                    "多冰",
                    "偏烈",
                    "枫叶"
                ]
            },
            {
                "name": "公务缠身",
                "limit": "【默契值1级】",
                "tips": [
                    "在监督的印象中，景几乎不会劝自己早些下班或是减少工作量。",
                    "——她比任何人都了解那些积压的公务有多重要。",
                    "但她仍会时不时地发一张夜色危情或是空香槟杯的照片。",
                    "“下班后一起喝一杯吧。我会等你。”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "夜色危情",
                    "少冰",
                    "正常",
                    "咸梅干",
                    "白玉兰"
                ]
            },
            {
                "name": "一片心意",
                "limit": "【默契值13级】",
                "tips": [
                    "“刑狱长大人，关于近期……”",
                    "狱警C439抱着文件走进刑狱长办公室的瞬间，突然晃了一下神。",
                    "“……好甜的花香。是这杯茶的缘故吗？我还不知道您居然喜欢喝这种茶。”",
                    "“一位朋友的心意。”",
                    "原来刑狱长大人是有朋友的啊……",
                    "C439艰难拽回自己失礼的想法。"
                ],
                "recipe": [
                    "马天尼杯",
                    "德里亚德风味花茶",
                    "热",
                    "芒果果冻",
                    "银杏叶"
                ]
            },
            {
                "name": "起床气",
                "limit": "【默契值1级】",
                "tips": [
                    "景知道自己的起床气问题颇为严重。",
                    "不过没关系，只要在床头准备一大杯冰镇苏打水，逼迫自己迅速清醒过来就好了。",
                    "她以为永远不会有人注意到她的这点“小习惯”。",
                    "所以……当监督将递给她特制的安眠剂时，景惊讶极了。",
                    "“看你大早上喝那么多冰水不太舒服的样子……还是试试这个吧。”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "冰镇苏打水",
                    "多冰",
                    "椰果",
                    "水果签"
                ]
            },
            {
                "name": "认同",
                "limit": "【默契值18级】",
                "tips": [
                    "景还记得，自己刚上任时，狱警们或阴鸷或看笑话的眼神。",
                    "但如今，他们有意无意地模仿、跟随着她的一举一动。",
                    "就连她爱喝的菊花茶也成为了乐园岛上最畅销的物资之一。"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "茶冻",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黎威尔日升",
                    "椰浆",
                    "盐",
                    "青梅"
                ],
                "ex": [527, 591, 644],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "耶芙娜": {
        "achievement": [
            {
                "name": "甜蜜绝缘",
                "limit": "【默契值1级】",
                "tips": [
                    "“抱歉，我想这种像云朵一样梦幻甜蜜的饮品并不适合我。”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "白桃芝士奶盖",
                    "双倍糖",
                    "常温",
                    "奇异果片",
                    "枫叶"
                ]
            },
            {
                "name": "噩梦味道",
                "limit": "【默契值1级】",
                "tips": [
                    "浓厚甜蜜的巧克力裹着脆甜的西瓜，噩梦一般的味道，耶芙娜喝了一口就放下了。"
                ],
                "recipe": [
                    "巧克力风暴",
                    "西瓜",
                    "焦糖布丁"
                ]
            },
            {
                "name": "风的味道",
                "limit": "【默契值1级】",
                "tips": [
                    "“唔……喝起来有些像斯奈菲尔的寒风。”",
                    "“我明白了，像喝西北风。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "青草薄荷",
                    "少冰",
                    "偏淡",
                    "薄荷叶"
                ]
            },
            {
                "name": "像水一样",
                "limit": "【默契值6级】",
                "tips": [
                    "这样寡淡的味道并不符合斯奈菲尔人的品味。"
                ],
                "recipe": [
                    "夜色危情",
                    "少冰",
                    "偏淡",
                    "珍珠"
                ]
            },
            {
                "name": "抵抗诱惑",
                "limit": "【默契值8级】",
                "tips": [
                    "糖是斯奈菲尔的奢侈品，耶芙娜不允许自己沉溺于此。"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "蜂蜜啤酒",
                    "少冰",
                    "偏烈",
                    "柠檬片"
                ]
            },
            {
                "name": "松针泡酒",
                "limit": "【默契值18级】",
                "tips": [
                    "“原来松针也能泡酒吗？”",
                    "“是遥城那边传过来的配方吧？”",
                    "“斯奈菲尔最不缺的就是松针了，却没有人想到用它来泡酒。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "银色青松",
                    "苦味素",
                    "偏烈",
                    "五叶长签"
                ]
            },
            {
                "name": "生命的味道",
                "limit": "【默契值10级】",
                "tips": [
                    "苦涩而又清冽的味道在喉中绽放，许久之后，令人沉醉的回甘涌上味蕾。"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "薄暮飞行",
                    "苦味素",
                    "偏烈",
                    "青提",
                    "经典长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "椰果"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "奇异果片"
                ],
                "ex": [508, 569, 620],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "夜色危情",
                    "偏烈",
                    "多冰",
                    "珍珠"
                ],
                "ex": [511, 572, 624],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "薄暮飞行",
                    "苦味素",
                    "偏烈",
                    "黄瓜片"
                ],
                "ex": [520, 583, 635],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "无咎": {
        "achievement": [
            {
                "name": "如果你能感同身受",
                "limit": "【默契值4级】",
                "tips": [
                    "“喝了这杯，你就知道平时唐经理有多苦多能熬了。”"
                ],
                "recipe": [
                    "简约至上",
                    "恩利都苦啤兑苦咖",
                    "苦味素",
                    "加双份"
                ]
            },
            {
                "name": "再见，鹿路运输",
                "limit": "【默契值5级】",
                "tips": [
                    "透过可爱的杯子，无咎双眼无神地看着再熟悉不过的图案沉在温吞吞的饮料里，脑中只剩下一个想法——",
                    "太酸了，今晚他就要离家出走。"
                ],
                "recipe": [
                    "熊熊杯",
                    "鹿鹿冻柠茶",
                    "无糖",
                    "常温"
                ]
            },
            {
                "name": "自制芒果冰……？",
                "limit": "【默契值1级】",
                "tips": [
                    "无咎喜欢芒果，这一天他不死心地把芒果果冻整颗扔进了冰水里……"
                ],
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "芒果果冻"
                ]
            },
            {
                "name": "薄荷心情",
                "limit": "【默契值8级】",
                "tips": [
                    "冰冰凉凉直透心底，再搭配一根水果签方便吃加入的水果。",
                    "当然了，薄荷叶最好还是别吃。"
                ],
                "recipe": [
                    "简约至上",
                    "青草薄荷",
                    "多冰",
                    "青梅",
                    "水果签"
                ]
            },
            {
                "name": "去海边吧——",
                "limit": "【默契值13级】",
                "tips": [
                    "“监督我们去海边吧！”",
                    "“……太突然了。”",
                    "“叫上我姐、路还有北洛！哦监督你会游泳么，你要是不会就和路一起——”",
                    "“要加果冻么？”",
                    "“要要要！还要这个花！”"
                ],
                "recipe": [
                    "自证方圆",
                    "海水半蓝",
                    "芒果果冻",
                    "樱花"
                ]
            },
            {
                "name": "多喝水果",
                "limit": "【默契值18级】",
                "tips": [
                    "“喜欢苹果么？”",
                    "“啊！”",
                    "“奇异果？”",
                    "“没吃过！”",
                    "“好的。”",
                    "“？”"
                ],
                "recipe": [
                    "干苹果",
                    "多冰",
                    "偏烈",
                    "奇异果片"
                ]
            },
            {
                "name": "那晚的月亮",
                "limit": "【默契值16级】",
                "tips": [
                    "无咎平时并不喜欢咖啡味。",
                    "“想什么呢，半夜不睡觉。”",
                    "“没有啊。”无咎拿起樱桃朝着天上的满月比了比，接着一口塞到了嘴里。",
                    "“就是做了个稀里糊涂的梦，醒来后发现什么都没记住。”"
                ],
                "recipe": [
                    "自证方圆",
                    "黑月亮",
                    "正常冰",
                    "樱桃"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "芒果果冻"
                ],
                "ex": [425, 476, 519],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "杨枝甘露",
                    "樱桃",
                    "芒果果冻"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "多冰",
                    "樱桃"
                ],
                "ex": [476, 533, 581],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "比戈尼娅": {
        "achievement": [
            {
                "name": "优雅永存",
                "limit": "【默契值13级】",
                "tips": [
                    "“你一定要用郁金香酒杯装牛奶吗？”",
                    "“亲爱的，优雅可是我的最后一件衣服，你要我脱掉吗？”",
                    "“……穿着吧！穿着吧！”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "甜牛乳",
                    "正常糖",
                    "常温",
                    "长匙"
                ]
            },
            {
                "name": "雷区",
                "limit": "【默契值1级】",
                "tips": [
                    "“枸杞、杨桃、咸梅干、银杏叶……亲爱的，你也许不知道我喜欢什么，但你可真是了解我不喜欢什么。”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "枸杞菊花茶",
                    "杨桃",
                    "咸梅干",
                    "银杏叶"
                ]
            },
            {
                "name": "坏女人",
                "limit": "【默契值1级】",
                "tips": [
                    "比戈尼娅看了眼马天尼杯里的冰雪梨汁，嗤笑一声，优雅地将里头的汪汪饼干挑了出来……",
                    "——随后一口，咬掉了饼干的头。"
                ],
                "recipe": [
                    "马天尼杯",
                    "鲜榨雪梨汁",
                    "多冰",
                    "汪汪饼干",
                    "薄荷叶"
                ]
            },
            {
                "name": "反差",
                "limit": "【默契值13级】",
                "tips": [
                    "光看比戈尼娅举着郁金香酒杯，迤迤然走动的样子，谁能想到她杯中装的竟是无糖酸梅汤呢？"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "冰镇酸梅汤",
                    "无糖",
                    "蜜桃冻",
                    "柠檬片"
                ]
            },
            {
                "name": "秘密配方",
                "limit": "【默契值5级】",
                "tips": [
                    "“啊呀，你真的没有把配方告诉任何人？”",
                    "“真乖。”",
                    "比戈尼娅笑眯眯地将马天尼杯口的薄荷叶摘了下来，轻轻舔了一口茎叶上沾染的烈性汁液。"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "极夜马戏团",
                    "盐",
                    "偏烈",
                    "樱桃",
                    "白玉兰"
                ]
            },
            {
                "name": "归于混沌",
                "limit": "【默契值10级】",
                "tips": [
                    "“太阳升起？真是幻想中才有的景色。”",
                    "比戈尼娅毫不留情地将青梅投入香槟杯中，瑰丽的颜色很快便融成混沌一片。"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "黎威尔日升",
                    "奶精球",
                    "柠檬汁",
                    "青梅",
                    "经典长签"
                ]
            },
            {
                "name": "夜色危情",
                "limit": "【默契值16级】",
                "tips": [
                    "“你问我为什么喜欢喝这个？”",
                    "“当然是因为它的名字。”",
                    "比戈尼娅笑着举起马天尼杯，光线在少量冰块与茶冻之间迷离，在她脸上投下暧昧的影子。"
                ],
                "recipe": [
                    "马天尼杯",
                    "夜色危情",
                    "少冰",
                    "偏烈",
                    "茶冻",
                    "枫叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇酸梅汤",
                    "五分糖",
                    "珍珠"
                ],
                "ex": [346, 388, 423],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "玻璃橘子",
                    "正常冰",
                    "芒果果冻"
                ],
                "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "极夜马戏团",
                    "柠檬汁",
                    "偏烈",
                    "樱桃"
                ],
                "ex": [473, 530, 578],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "夜色危情",
                    "偏烈",
                    "正常冰",
                    "珍珠"
                ],
                "ex": [488, 547, 596],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "白鸟梓": {
        "achievement": [
            {
                "name": "糖分超标",
                "limit": "【默契值1级】",
                "tips": [
                    "“又是白桃芝士，又是双倍糖和西瓜，到底谁在喝这么甜的东西？”",
                    "“呃……我。”",
                    "白鸟梓叼在嘴里的枫叶梗啪嗒一声掉在了桌上。"
                ],
                "recipe": [
                    "简约至上",
                    "白桃芝士奶盖",
                    "双倍糖",
                    "多冰",
                    "西瓜",
                    "枫叶"
                ]
            },
            {
                "name": "惩罚道具",
                "limit": "【默契值1级】",
                "tips": [
                    "“这热姜茶……拿去给那些不守规矩、擅闯血露薇的家伙喝正好。”"
                ],
                "recipe": [
                    "自证方圆",
                    "姜茶",
                    "正常糖",
                    "热",
                    "紫藤"
                ]
            },
            {
                "name": "好、好孩子？",
                "limit": "【默契值1级】",
                "tips": [
                    "“就算加了那么多冰块、糖浆、焦糖布丁，姜汁可可还是那么难喝。”",
                    "“那你还喝完了……”",
                    "“你为在下准备了那么久，自然要喝。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜汁可可",
                    "多冰",
                    "糖浆",
                    "焦糖布丁",
                    "银杏叶"
                ]
            },
            {
                "name": "难管但听劝",
                "limit": "【默契值4级】",
                "tips": [
                    "“加一份浓缩就够了，喝太多咖啡会长不高的。”",
                    "白鸟梓听完冷哼一声，手却乖乖伸向了奶精球和雪顶。"
                ],
                "recipe": [
                    "简约至上",
                    "经典特浓咖啡",
                    "奶精球",
                    "加一份",
                    "原味雪顶",
                    "精致纸伞"
                ]
            },
            {
                "name": "如此相似",
                "limit": "【默契值6级】",
                "tips": [
                    "看着面前只加了些茶冻、紫藤的冰镇苏打水，监督忍不住扶额。",
                    "“不愧是在修手底下长大的孩子……喜好也是如此简单。”"
                ],
                "recipe": [
                    "自证方圆",
                    "冰镇苏打水",
                    "少冰",
                    "茶冻",
                    "紫藤"
                ]
            },
            {
                "name": "旧日不再",
                "limit": "【默契值13级】",
                "tips": [
                    "“这味道怎么如此熟悉……”白鸟梓脸色晦暗不明，“监督，能将配方告诉在下吗？”",
                    "“啊？让我看看。海水半蓝，多些冰块，加盐和蜜桃冻。”",
                    "“呵，和父亲当年用筷子沾着让我尝的，必不会是如此新潮之物……但……多谢了，监督。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "海水半蓝",
                    "多冰",
                    "盐",
                    "蜜桃冻",
                    "蝴蝶结"
                ]
            },
            {
                "name": "“宗师风范”",
                "limit": "【默契值18级】",
                "tips": [
                    "白鸟梓倚着长刀，一边凝望着远处的虚空，一边拨开杯边的紫藤，缓缓啜饮了一口。",
                    "“嗯，真有点‘千帆过尽，江河无憾’的宗师风范了——如果我不知道你拿着的只是一杯加了柠檬汁的热水的话。”"
                ],
                "recipe": [
                    "简约至上",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "紫藤"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "多冰",
                    "青提"
                ],
                "ex": [346, 388, 423],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "经典特浓咖啡",
                    "糖浆",
                    "标准",
                    "香蕉冰淇淋"
                ],
                "ex": [448, 501, 546],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "霍冉": {
        "achievement": [
            {
                "name": "有意见？",
                "limit": "【默契值1级】",
                "tips": [
                    "“枸杞……黄瓜……咸梅干？监督你什么意思？”",
                    "“没、没什么意思？你不是挺喜欢黄瓜和咸梅干的么？”",
                    "“但我也不想喝菊花茶啊！把这杯打包给我小弟吧。”霍冉嘴里叼着圆匙，看着眼前的茶水一动不动。"
                ],
                "recipe": [
                    "简约至上/竹节茶杯",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "咸梅干",
                    "圆匙"
                ]
            },
            {
                "name": "不愿面对的特产",
                "limit": "【默契值1级】",
                "tips": [
                    "“呸呸呸……又苦又涩，确定这是咖啡？？哦我知道了！这是不是就是小砚儿说难喝的那个什么咖啡啤酒！”",
                    "“是啤酒咖啡。”",
                    "“有什么区别……不是，你还加了苦和两份料？？”",
                    "“……装饰花需要么？”"
                ],
                "recipe": [
                    "简约至上",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "苦味素",
                    "加一份",
                    "紫藤"
                ]
            },
            {
                "name": "一杯奶茶",
                "limit": "【默契值4级】",
                "tips": [
                    "“看起来像是元桃桃会喜欢的东西。”",
                    "“确实，半糖少冰？”",
                    "“再加份珍珠吧，我拿个签子扎青提吃。”"
                ],
                "recipe": [
                    "青提啵啵奶茶",
                    "五分糖",
                    "少冰",
                    "珍珠",
                    "经典长签"
                ]
            },
            {
                "name": "拒绝熬夜",
                "limit": "【默契值5级】",
                "tips": [
                    "“我还以为是奶茶，结果是奶油咖啡啊，那低因吧，今晚不能熬夜。”",
                    "“为什么？”",
                    "“明天还要一大早起来抢票！”",
                    "“…………”"
                ],
                "recipe": [
                    "奶油芭蕾",
                    "全脂牛奶",
                    "正常",
                    "低因"
                ]
            },
            {
                "name": "头脑清醒的大姐头",
                "limit": "【默契值8级】",
                "tips": [
                    "保持清醒的头脑，才能成为街头最拉风的人——霍冉如是说。",
                    "",
                    "",
                    "“但这只是一杯薄荷苏——”",
                    "“还有那么多冰呢！诶监督再加点茶冻呗。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "薄荷蜜柚苏打",
                    "多冰",
                    "茶冻",
                    "枫叶"
                ]
            },
            {
                "name": "追星人的自我修养",
                "limit": "【默契值18级】",
                "tips": [
                    "“啊啊啊啊啊是BS的联动奶茶！！！三分糖正常冰加一份椰果谢谢监督！！！”",
                    "“哦再给我一根水果签！”",
                    "“……我怀疑你今天急着来休息室目的就是这个……”",
                    "“那近水楼台当然比外面排队强啊！外卖订单已经要等待一个半小时了！”",
                    "“唉……”"
                ],
                "recipe": [
                    "简约至上/自证方圆",
                    "双莓之恋",
                    "三分糖",
                    "正常冰",
                    "椰果",
                    "水果签"
                ]
            },
            {
                "name": "月黑风高",
                "limit": "【默契值16级】",
                "tips": [
                    "“黑月亮……这个名字……让我想起了以前的事情……”霍冉的声音难得的低下去，直到最后没了声音。",
                    "“嗯？怎么了？”监督有些担心地放下调羹，“是你之前说的那个青面……”",
                    "“让我想起来当年月黑风高出门赴约的日子！”",
                    "“……加了份蓝莓，还有刚刚不小心手抖，可能有点苦……”"
                ],
                "recipe": [
                    "自证方圆",
                    "黑月亮",
                    "少冰",
                    "苦味素",
                    "蓝莓",
                    "经典长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "咸梅干"
                ],
                "ex": [414, 463, 505],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "黎威尔日升",
                    "糖包",
                    "柠檬汁",
                    "黄瓜片"
                ],
                "ex": [420, 470, 512],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "薄荷蜜柚苏打",
                    "常温",
                    "咸梅干"
                ],
                "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "惑星的艾琳",
                    "苦味素",
                    "原味雪顶"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "双莓之恋",
                    "五分糖",
                    "常温",
                    "蜜桃冻"
                ],
                "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "马尔斯": {
        "achievement": [
            {
                "name": "非自愿品尝",
                "limit": "【默契值1级】",
                "tips": [
                    "马尔斯看着面前堆满了奶油的神秘饮品，没有动。",
                    "——仿佛喝一口就会影响他出刀的速度。"
                ],
                "recipe": [
                    "熊熊杯",
                    "奶油芭蕾",
                    "全脂牛奶",
                    "偏烈",
                    "加双份",
                    "菊花"
                ]
            },
            {
                "name": "“封口费”",
                "limit": "【默契值1级】",
                "tips": [
                    "“长谣说感谢你上次帮她的忙，让我请你喝一杯这个。”",
                    "“……”",
                    "“虽然这么……可爱的燕麦牛奶可能跟你可能不太搭。”",
                    "“谢谢。请帮我换成脱脂牛奶。”",
                    "“嗯，顺便加了份咖啡冻，用长签吃更方便。说起来你帮了她什么？”",
                    "“……”",
                    "“……你的表情告诉我‘往事不堪回首’……是不是她在学校——啊，所以这其实是封口费？”",
                    "“还有事，先走了。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "熊熊燕麦牛奶",
                    "脱脂牛奶",
                    "咖啡冻",
                    "圆柄长签"
                ]
            },
            {
                "name": "一杯热茶",
                "limit": "【默契值5级】",
                "tips": [
                    "热姜茶，加糖。",
                    "这是马尔斯最经常点的饮品。",
                    "“今天要不要放朵桂花？”",
                    "“嗯，谢谢。”"
                ],
                "recipe": [
                    "自证方圆",
                    "姜茶",
                    "五分糖",
                    "热",
                    "桂花"
                ]
            },
            {
                "name": "某一日的谢礼",
                "limit": "【默契值1级】",
                "tips": [
                    "“给，冰镇橘子汽水，任务辛苦了。”",
                    "“合约上写的，你不必专门谢我。”",
                    "“嗯，再加份叶子冻？”",
                    "“好，谢谢。”",
                    "马尔斯看着面前的汽水抬起手，接着，杯沿插上了一朵白玉兰。",
                    "“……”"
                ],
                "recipe": [
                    "自证方圆",
                    "玻璃橘子",
                    "少冰",
                    "叶子冻",
                    "白玉兰"
                ]
            },
            {
                "name": "双份惊喜",
                "limit": "【默契值6级】",
                "tips": [
                    "有时因为工作需要，马尔斯不得不熬夜。",
                    "今天，咖啡里被加了两份惊喜。",
                    "味道有点奇怪，但也还好。",
                    "马尔斯用圆匙搅拌着咖啡，冰淇淋又悄悄融化了一点。"
                ],
                "recipe": [
                    "简约至上",
                    "经典特浓咖啡",
                    "椰浆",
                    "标准",
                    "咖啡雪顶",
                    "圆匙"
                ]
            },
            {
                "name": "有效摄入",
                "limit": "【默契值10级】",
                "tips": [
                    "运动后需要摄入适量的淡盐水。",
                    "马尔斯十年如一日地坚持着。"
                ],
                "recipe": [
                    "熊熊杯",
                    "白开水",
                    "常温",
                    "盐",
                    "菊花"
                ]
            },
            {
                "name": "难得一杯",
                "limit": "【默契值16级】",
                "tips": [
                    "马尔斯很少主动摄入酒精，这是偶尔的一杯。",
                    "杯口蘸了层淡盐，杯中加了青梅。",
                    "——这个人很清楚自己的喜好。",
                    "马尔斯看了看眼前这位执行官，用长签拨了拨冰块。"
                ],
                "recipe": [
                    "简约至上/自证方圆",
                    "黑月亮",
                    "少冰",
                    "盐",
                    "青梅",
                    "经典长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "薄暮飞行",
                    "盐",
                    "偏烈",
                    "黄瓜片"
                ],
                "ex": [454, 509, 555],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白开水",
                    "盐",
                    "常温"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "Sweeper-EX": {
        "achievement": [
            {
                "name": "自动防卫模式",
                "limit": "【默契值1级】",
                "tips": [
                    "【正在扫描“郁金香酒杯”……请稍后……】",
                    "【成分识别中……】",
                    "【钙……镁和有机酸……已确认为“枫糖浆”……咖啡因……少量冰块……】",
                    "【警报！警报！已开启自动防卫模式——】"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "枫糖薄荷",
                    "少冰",
                    "奶精球",
                    "咖啡冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "污垢清除",
                "limit": "【默契值13级】",
                "tips": [
                    "“Sweeper对着那杯姜汁可可干什么呢？”",
                    "“分离、去除里面的‘污垢’。”",
                    "“污垢……等下，他是说椰果吗？那是小料！啊，怎么把装饰用的枫叶也吸走了！”"
                ],
                "recipe": [
                    "马天尼杯",
                    "姜汁可可",
                    "热",
                    "椰浆",
                    "椰果",
                    "枫叶"
                ]
            },
            {
                "name": "有我甜吗？",
                "limit": "【默契值1级】",
                "tips": [
                    "无视处理器中自动跳出的11658项有关“酒精危害”的检索内容，Sweeper更想问监督……",
                    "“双倍糖……有我甜吗？”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "酒酿凤梨",
                    "双倍糖",
                    "多冰",
                    "蝴蝶结"
                ]
            },
            {
                "name": "迷思",
                "limit": "【默契值13级】",
                "tips": [
                    "机械甜心会梦见电子月亮吗，会将马天尼杯口的盐粒认作星辰吗？"
                ],
                "recipe": [
                    "马天尼杯",
                    "黑月亮",
                    "少冰",
                    "盐",
                    "偏烈",
                    "五叶长签"
                ]
            },
            {
                "name": "独家饮料",
                "limit": "【默契值16级】",
                "tips": [
                    "“监督，你也要来一杯吗？”",
                    "“什么？‘抗磨降噪、长效续航’……这是饮料吗？”",
                    "“加了奇异果片很好喝哒~”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "高级润滑油",
                    "正常",
                    "奇异果片",
                    "白玉兰"
                ]
            },
            {
                "name": "小心机",
                "limit": "【默契值1级】",
                "tips": [
                    "每当需要加班，监督就会提前煮一大壶又苦又浓的咖啡，随时取用。",
                    "可不知什么时候起，Sweeper总是先监督一步，把它全部装进自己茶壶似的肚子里。",
                    "“我太喜欢奶精球的味道了嘛——监督，你要是困了，就早点睡吧。”",
                    "“Sweeper可以唱安眠曲给你听哟~”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "经典特浓咖啡",
                    "奶精球",
                    "柠檬片"
                ]
            },
            {
                "name": "一视同“人”",
                "limit": "【默契值13级】",
                "tips": [
                    "每天清晨，白荆科技的食堂都会为员工准备牛奶和面包当作早餐。",
                    "——包括Sweeper。",
                    "他们甚至贴心地记下了他的喜好，虽然没人知道他为什么会更偏好加了薄荷叶的脱脂牛奶。"
                ],
                "recipe": [
                    "马天尼杯",
                    "甜牛乳",
                    "正常糖",
                    "多冰",
                    "脱脂牛奶",
                    "薄荷叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "奶油芭蕾",
                    "标准",
                    "正常",
                    "燕麦奶"
                ],
                "ex": [461, 517, 564],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "玄戈": {
        "achievement": [
            {
                "name": "死敌",
                "limit": "【默契值4级】",
                "tips": [
                    "“监督，即便是我的死敌，也不会端一杯熊熊燕麦牛奶给我。”",
                    "“……一般人的人生可不会有死敌这种东西…”",
                    "“而我有很多。”",
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "熊熊燕麦牛奶",
                    "燕麦奶",
                    "焦糖布丁",
                    "迷迭香"
                ]
            },
            {
                "name": "意外",
                "limit": "【默契值5级】",
                "tips": [
                    "“玄戈，你看起来很惊讶？这杯盐水有什么问题吗？”",
                    "“没什么，只是……它太简单了。而我的人生离这个词太远了。”",
                ],
                "recipe": [
                    "马天尼杯",
                    "白开水",
                    "盐",
                    "常温",
                    "银杏叶"
                ]
            },
            {
                "name": "刻板印象",
                "limit": "【默契值1级】",
                "tips": [
                    "“苦啤、苦咖、双倍浓缩咖啡液，还有额外添加的苦味素……也许我该反思一下，我在监督眼中究竟是什么形象？”",
                    "“我看影视作品中的大佬都喜欢这种配置？”",
                    "“……”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "恩利都苦啤兑苦咖",
                    "多冰",
                    "苦味素",
                    "加双份",
                    "薄荷叶"
                ]
            },
            {
                "name": "相似处？",
                "limit": "【默契值13级】",
                "tips": [
                    "“说不定乌瑞亚也许是与北三岛最相似的地方。”",
                    "“监督为什么这么说？”",
                    "“我不是说自然环境，而是两地对于种群或者说家族的重视。”",
                    "“若是在这一方面，我不否认。”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻",
                    "空心圆匙"
                ]
            },
            {
                "name": "礼物",
                "limit": "【默契值10级】",
                "tips": [
                    "“蝴蝶结？”",
                    "“咳。可以取下来，拿给陀螺玩。”",
                    "“你想得还真是周全。多谢。”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "夜色危情",
                    "少冰",
                    "偏烈",
                    "珍珠",
                    "蝴蝶结"
                ]
            },
            {
                "name": "冬日气息",
                "limit": "【默契值16级】",
                "tips": [
                    "“这杯饮品有北三岛的味道。”",
                    "“毕竟是以银色青松为灵感调配的嘛。”",
                    "“难怪。有一股凛冬的味道。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "银色青松",
                    "柠檬汁",
                    "偏淡",
                    "五叶长签"
                ]
            },
            {
                "name": "未来",
                "limit": "【默契值18级】",
                "tips": [
                    "“我很好奇，你希望北洛毕业后回北三岛吗？”",
                    "“比起我的‘希望’，他自己要先想清楚。”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "沉金记忆",
                    "五分糖",
                    "苦味素",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黑月亮",
                    "多冰",
                    "盐",
                    "青提"
                ],
                "ex": [554, 620, 676],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "茜茜": {
        "achievement": [
            {
                "name": "雷同",
                "limit": "【默契值13级】",
                "tips": [
                    "“怎么样？好喝吗？”",
                    "“……………………味道和药差不多呢。”",
                    "茜茜默默将桂圆红枣茶推远了一些。",
                ],
                "recipe": [
                    "自证方圆",
                    "桂圆红枣茶",
                    "七分糖",
                    "热",
                    "枸杞",
                    "紫藤"
                ]
            },
            {
                "name": "奇怪用途",
                "limit": "【默契值6级】",
                "tips": [
                    "“没想到你居然喜欢喝这个。”",
                    "监督将姜汁可可往吧台上一放，还没等拿给茜茜，奈奥格便率先接了过去。",
                    "“和普通的可可一样啊。”",
                    "“……等一下！”监督突然伸手，又将杯子拿了回来。",
                    "“完全没有姜汁的味道了。奈奥格你……”"
                ],
                "recipe": [
                    "简约至上",
                    "姜汁可可",
                    "正常冰",
                    "奶精球",
                    "焦糖布丁",
                    "三叶长签"
                ]
            },
            {
                "name": "大人的魔法",
                "limit": "【默契值1级】",
                "tips": [
                    "也许是习惯了沉默不语的生活，即便是现在，茜茜也不太爱说话。有时和旁人说着说着，还会突然陷入沉默。",
                    "————可和监督在一起，却从来没发生过这样的事。",
                    "“监督，你怎么知道茜茜什么时候会沉默呢？”",
                    "“是大人的魔法。”监督笑了笑，又一次适时地用一杯桃桃乌龙换走了茜茜手中的空杯子。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "桃桃乌龙茶",
                    "五分糖",
                    "少冰",
                    "椰果",
                    "银杏叶"
                ]
            },
            {
                "name": "小心",
                "limit": "【默契值1级】",
                "tips": [
                    "“唉，小朋友不可以喝咖啡。”",
                    "“是给景姐姐的。她看公文的时候经常喝……”",
                    "茜茜抓着奈奥格的手臂，几不可查地蜷缩起身体。",
                    "“还是说……茜茜又做了不好的事？”"
                ],
                "recipe": [
                    "熊熊杯",
                    "好椰拿铁",
                    "椰浆",
                    "低因",
                    "圆柄长签"
                ]
            },
            {
                "name": "勇敢的心",
                "limit": "【默契值1级】",
                "tips": [
                    "比起同龄人喜爱的甜食，茜茜喜欢尽可能地尝试那些新鲜事物。",
                    "————即便它们“新鲜”得有些离奇了。",
                    "“苏打水里放咸梅干？你确定？”",
                    "“茜茜确定。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "薄荷蜜柚苏打",
                    "多冰",
                    "咸梅干",
                    "柠檬片"
                ]
            },
            {
                "name": "注意事项",
                "limit": "【默契值16级】",
                "tips": [
                    "“牛奶……热的”",
                    "“老板喜欢热的。”",
                    "“啊，监督你怎么知道……”",
                    "“你喜欢和小动物玩也不是一天两天了。啊，对了，在楼里遇到其他小动物的时候，记得先试一下他们会不会说话。”"
                ],
                "recipe": [
                    "自证方圆",
                    "甜牛乳",
                    "无糖",
                    "热",
                    "全脂牛奶",
                    "空心圆匙"
                ]
            },
            {
                "name": "抛接游戏",
                "limit": "【默契值18级】",
                "tips": [
                    "“你在和奈奥格玩抛接游戏……？”",
                    "“不、不可以吗？”茜茜啊的一下将汪汪饼干放回了吧台上。",
                    "“我可以加入吗？”"
                ],
                "recipe": [
                    "简约至上",
                    "阿华田奶茶",
                    "三分糖",
                    "汪汪饼干",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "海水半蓝",
                    "少冰",
                    "柠檬汁",
                    "芒果果冻"
                ],
                "ex": [420, 470, 512],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "杨枝甘露",
                    "青提",
                    "芒果果冻"
                ],
                "ex": [490, 548, 598],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "柚柚切颗NOW",
                    "正常糖",
                    "草莓"
                ],
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "鸢": {
        "achievement": [
            {
                "name": "初印象",
                "limit": "【默契值13级】",
                "tips": [
                    "加入白荆科技的第一天，鸢连同事都没见过几个，便被拉来了新人聚餐。",
                    "半个小时后，她能做的就只有呆呆地望着眼前泛着气泡的沉金记忆。",
                    "“如果不太适应这种场合，偷偷溜走也是可以的。”一个穿着蓝白制服的陌生人突然走到她的身边。",
                    "“啊，可是……”这样似乎显得不太合群，她这么想着，没有说出口。",
                    "身前的陌生人笑了笑，接过鸢手里的沉金记忆，一饮而尽。",
                    "“不用担心，这里不合群的人比你想象中要多。”",
                    "这就是鸢对监督的第一印象。"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "沉金记忆",
                    "双倍糖",
                    "柠檬汁",
                    "心形插签"
                ]
            },
            {
                "name": "保守主义",
                "limit": "【默契值6级】",
                "tips": [
                    "“一杯象征危险和未知的饮品吗……？”",
                    "鸢望着手中的杯子，又加了些盐粒。",
                    "“还是……平凡的生活更好。”"
                ],
                "recipe": [
                    "航海时代",
                    "极夜马戏团",
                    "盐",
                    "偏烈",
                    "银杏叶"
                ]
            },
            {
                "name": "天降？青梅？",
                "limit": "【默契值5级】",
                "tips": [
                    "“你怎么这副表情？”",
                    "“只是觉得有些不可思议，这本小说中的主人公居然会为了刚认识的人去质疑自己的发小……”",
                    "“……鸢，在‘天降’和‘青梅’之中，你是无条件选‘青梅’的那一派吧？”",
                    "“应该……是的。”",
                    "“嗯……我可能不应该选这杯惑星的艾琳给你。”"
                ],
                "recipe": [
                    "扎啤杯",
                    "惑星的艾琳",
                    "苦味素",
                    "青提",
                    "迷迭香"
                ]
            },
            {
                "name": "家的味道",
                "limit": "【默契值10级】",
                "tips": [
                    "每到绣球花开放的时节，福利院的孩子们便会开始央求院长为他们熬煮一些酸梅汤作为消暑饮品。",
                    "院长总是欣然答应。",
                    "在之后的几个月里，葵花福利院里总是弥漫着一股若有若无的酸甜香气。",
                    "——这大概就是家的味道吧。",
                    "鸢曾如此坚信。"
                ],
                "recipe": [
                    "航海时代",
                    "冰镇酸梅汤",
                    "五分糖",
                    "咸梅干",
                    "圆柄长签"
                ]
            },
            {
                "name": "好员工",
                "limit": "【默契值1级】",
                "tips": [
                    "“在这么多饮品里，你只想要一杯玻璃橘子吗？”",
                    "“这样就好了。”",
                    "“嗯，等下还要回去加班，不可以碰酒。”",
                    "“有你这么自觉的员工，我都有些不好意思了……”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "玻璃橘子",
                    "少冰",
                    "芒果果冻",
                    "樱花"
                ]
            },
            {
                "name": "病中往事",
                "limit": "【默契值16级】",
                "tips": [
                    "七叶的身体一直不好，尤其是在小时候。",
                    "她总是莫名其妙地发起烧来，然后整宿陷入高热之中。",
                    "鸢什么也做不了，只能守在好友的床前，一遍一遍地热着那杯七叶最爱的甜牛奶。只为了她醒来时，能第一时间喝上。",
                    "“圣西尔大人，拜托了，让七叶好起来啊……”"
                ],
                "recipe": [
                    "扎啤杯",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "精致纸伞"
                ]
            },
            {
                "name": "体贴入微",
                "limit": "【默契值18级】",
                "tips": [
                    "“一杯正常冰、加茶冻的薄荷蜜柚苏打？这不是最近大家每天都点的饮料嘛。鸢你也喜欢吗？”",
                    "“其实，这是我第一次尝试……”",
                    "“第一次？你之前没跟着他们一起点过？”",
                    "“嗯，我想先自己私下尝尝。这样就算不太喜欢，下次和大家一起喝的时候也不会表现得太明显，扫了大家的兴。”",
                    "“你这也太细致了……”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "茶冻",
                    "三叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "玻璃橘子",
                    "少冰",
                    "椰果"
                ],
                "ex": [519, 582, 634],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "崔远之": {
        "achievement": [
            {
                "name": "什么意思",
                "limit": "【默契值1级】",
                "tips": [
                    "“比起我，你更需要喝牛奶。”",
                    "崔远之摘下杯口的枫叶，微笑的模样比他冷着脸更让人警惕——等下，他什么意思？"
                ],
                "recipe": [
                    "简约至上",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "焦糖布丁",
                    "枫叶"
                ]
            },
            {
                "name": "错误选择",
                "limit": "【默契值1级】",
                "tips": [
                    "“加了枸杞和咸梅干的枸杞菊花茶？”",
                    "“这么需要养生，不如早死。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "枸杞菊花茶",
                    "枸杞",
                    "咸梅干",
                    "银杏叶"
                ]
            },
            {
                "name": "不满意",
                "limit": "【默契值1级】",
                "tips": [
                    "“被我倒掉是这杯无糖酒酿凤梨唯一的归宿。”"
                ],
                "recipe": [
                    "自证方圆",
                    "酒酿凤梨",
                    "无糖",
                    "多冰",
                    "紫藤"
                ]
            },
            {
                "name": "恶言",
                "limit": "【默契值13级】",
                "tips": [
                    "“你就算加再多芒果果冻，这也还是一杯薄荷蜜柚苏打。”",
                    "“无趣就是无趣。人也一样。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "芒果果冻",
                    "圆柄长签"
                ]
            },
            {
                "name": "毫无作用",
                "limit": "【默契值4级】",
                "tips": [
                    "“这杯黑月亮有必要加青梅和盐吗？”",
                    "“——算了，有些人活着不也毫无作用，我跟一杯饮料计较什么。”"
                ],
                "recipe": [
                    "简约至上",
                    "黑月亮",
                    "少冰",
                    "盐",
                    "青梅",
                    "水果签"
                ]
            },
            {
                "name": "辛辣点评",
                "limit": "【默契值13级】",
                "tips": [
                    "“味道差强人意。”",
                    "崔远之放下手中的夜色危情。",
                    "“品味一塌糊涂。”",
                    "……下次还给他用粘了蝴蝶结的熊熊杯！"
                ],
                "recipe": [
                    "熊熊杯",
                    "夜色危情",
                    "正常冰",
                    "偏烈",
                    "珍珠",
                    "蝴蝶结"
                ]
            },
            {
                "name": "不愉快的愉快",
                "limit": "【默契值18级】",
                "tips": [
                    "“熟悉的味道……真是令人不愉快。”",
                    "“那你还一饮而尽？”",
                    "“我就是喜欢‘令人不愉快’。”",
                    "……下次干脆把苦味素再加多一点算了。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "奇异果片",
                    "白玉兰"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "干苹果",
                    "偏烈",
                    "正常冰",
                    "奇异果片"
                ],
                "ex": [385, 431, 470],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "黑月亮",
                    "苦味素",
                    "多冰",
                    "樱桃"
                ],
                "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "夜色危情",
                    "偏烈",
                    "正常冰",
                    "茶冻"
                ],
                "ex": [447, 501, 546],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白开水",
                    "柠檬汁",
                    "正常冰"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "恩利都苦啤兑苦咖",
                    "加双份",
                    "苦味素",
                    "正常冰"
                ],
                "ex": [512, 573, 625],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "樱桃"
                ],
                "ex": [588, 658, 717],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "红玉": {
        "achievement": [
            {
                "name": "失误",
                "limit": "【默契值4级】",
                "tips": [
                    "“熊熊燕麦牛奶？”红玉有些揶揄地看着监督。",
                    "“我我我拿错了——”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "焦糖布丁",
                    "精致纸伞"
                ]
            },
            {
                "name": "曾几何时",
                "limit": "【默契值13级】",
                "tips": [
                    "红玉还记得，小时候，不管父亲回来得多晚，他都会泡一杯热姜茶，和母亲说会话。",
                    "两人靠在一块，聊聊今天都发生了什么，红玉是不是又长高了……",
                    "曾几何时，红玉以为这样的日子会一直持续下去……"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "姜茶",
                    "无糖",
                    "热",
                    "经典长签"
                ]
            },
            {
                "name": "苦酒入喉",
                "limit": "【默契值1级】",
                "tips": [
                    "“红队喝苦啤兑苦酒还要加苦味素和双份浓缩啊？我光是听着，都觉得苦了……”",
                    "“经历的多了，这酒自然就不苦了。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "恩利都苦啤兑苦咖",
                    "多冰",
                    "苦味素",
                    "加双份",
                    "五叶长签"
                ]
            },
            {
                "name": "感同身受",
                "limit": "【默契值1级】",
                "tips": [
                    "“再撑一撑。”红玉揉了揉太阳穴，饮下又一杯特浓咖啡，“红玉，你是最明白受害人家属的心情的……再撑一撑……”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "经典特浓咖啡",
                    "糖包",
                    "加双份",
                    "圆匙"
                ]
            },
            {
                "name": "大声质问",
                "limit": "【默契值10级】",
                "tips": [
                    "“夜色危情？”红玉望着杯中的茶冻忽然笑了起来，“那些妹妹也很喜欢请我喝这个。”",
                    "“……你有几个好妹妹啊！”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "夜色危情",
                    "多冰",
                    "偏烈",
                    "茶冻",
                    "柠檬片"
                ]
            },
            {
                "name": "信任关系",
                "limit": "【默契值13级】",
                "tips": [
                    "“配方不公开？”",
                    "红玉皱着眉，缓缓放下手中的蝶形香槟杯。",
                    "“监督，不管你遇到了什么麻烦的人或者事，‘红队’……还有‘红玉’，都会站在你身后，知道吗？”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "极夜马戏团",
                    "柠檬汁",
                    "偏烈",
                    "奇异果片",
                    "迷迭香"
                ]
            },
            {
                "name": "兜风去",
                "limit": "【默契值16级】",
                "tips": [
                    "“今天就不了。”红玉将郁金香酒杯推远了一些。",
                    "“你居然会拒绝薄暮飞行？这不是你最喜欢喝吗？我还加了叶子冻……”",
                    "“唉，没办法，谁叫我今天打算带某人去兜个风~”红玉从吧台那端探过身来，“监督，我给你的头盔还在吧？”",
                    "“在！！！！！！”"
                ],
                "recipe": [
                    "马天尼杯",
                    "薄暮飞行",
                    "盐",
                    "正常",
                    "青提",
                    "枫叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "银色青松",
                    "盐",
                    "正常"
                ],
                "ex": [519, 582, 634],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "极夜马戏团",
                    "盐",
                    "正常",
                    "樱桃"
                ],
                "ex": [561, 628, 684],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "凤无梦": {
        "achievement": [
            {
                "name": "森罗特有套路",
                "limit": "【默契值1级】",
                "tips": [
                    "“‘正常糖、热、蜜桃冻’，看着和公式也差不多嘛。”",
                    "“监督监督，难道‘联名’是什么森罗特有的回路吗？只要说出口，就能召集那么多人排队——”",
                    "“比起回路，不如说是森罗特有套路。”监督一脸平静。"
                ],
                "recipe": [
                    "淑女风尚",
                    "双莓之恋",
                    "正常糖",
                    "热",
                    "蜜桃冻",
                    "白玉兰"
                ]
            },
            {
                "name": "误会一场",
                "limit": "【默契值1级】",
                "tips": [
                    "“啊呀，监督你讨厌无梦小姐可以直说的！”",
                    "“你别乱说，我没有。”",
                    "“那你为什么要往无梦小姐的枸杞菊花茶里放梅干？咸得都喝不出黄瓜片的清香了！桂花味也闻不到了！”",
                    "“啊，我手抖放错了！”"
                ],
                "recipe": [
                    "经典格纹",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "咸梅干",
                    "桂花"
                ]
            },
            {
                "name": "网络一线牵",
                "limit": "【默契值1级】",
                "tips": [
                    "“凤无梦，难得你主动说想尝尝苏打水，我还以为你很喜欢？可是看你的表情……”",
                    "“无梦小姐被骗了啦监督！网上那些家伙说，加了薄荷叶和茶冻的苏打水天下第一！我看是天下第一难喝才对！”",
                    "“噗，原来是这样如此……”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "冰镇苏打水",
                    "多冰",
                    "茶冻",
                    "薄荷叶"
                ]
            },
            {
                "name": "疯狂森罗人",
                "limit": "【默契值1级】",
                "tips": [
                    "“为了名字硬凑新品？完全不考虑味道吗？”人偶端着好椰拿铁，十分困惑地歪着头，“那岂不是很容易搞出一些很暗黑的饮料？”",
                    "“的确如此。可是有时候，越是难喝，越会受到追捧。”",
                    "“……我刚刚还在想，我要是多加一份糖包和浓缩咖啡会不会太疯狂……看来远不如你们森罗人哩！”"
                ],
                "recipe": [
                    "淑女风尚",
                    "好椰拿铁",
                    "糖包",
                    "加一份",
                    "三叶长签"
                ]
            },
            {
                "name": "漂亮装饰",
                "limit": "【默契值5级】",
                "tips": [
                    "“本来是为了鹿头装饰才点的冻柠茶，没想到银杏叶也那么漂亮啊！宝宝都想要！宝宝都想要！”",
                    "“给你给你。”"
                ],
                "recipe": [
                    "经典格纹",
                    "鹿鹿冻柠茶",
                    "七分糖",
                    "少冰",
                    "银杏叶"
                ]
            },
            {
                "name": "强大记忆力",
                "limit": "【默契值8级】",
                "tips": [
                    "“监督，你怎么知道无梦小姐喜欢喝这个？”",
                    "“她之前点过，不是吗？”",
                    "“可是她只点过一次，还是和大家一起点的！这样都能记住吗？”",
                    "“嗯。”监督不假思索地“吟唱”了起来，“熊熊燕麦牛奶，但是换成脱脂版本，加一份汪汪饼干，还有水果签……对吗？”",
                    "“……全对。那个……谢谢您。”",
                ],
                "recipe": [
                    "淑女风尚",
                    "熊熊燕麦牛奶",
                    "脱脂牛奶",
                    "汪汪饼干",
                    "水果签"
                ]
            },
            {
                "name": "你脸红啦",
                "limit": "【默契值16级】",
                "tips": [
                    "“没想到在特默里恩之外，还有这么多异世界！要是能去看看就好了！”",
                    "“一定能去的。”监督将纸伞插在鎏金杯口的动作行云流水，可语气却变得有些微妙的紧绷，“……我保证。”",
                    "“嗯，我相信您。”凤无梦难得开口道。",
                    "…………",
                    "“哎呀！监督你脸红啦！羞羞！”"
                ],
                "recipe": [
                    "鎏·金",
                    "德里亚德风味花茶",
                    "热",
                    "蜜桃冻",
                    "精致纸伞"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "好椰拿铁",
                    "椰浆",
                    "低因"
                ],
                "ex": [393, 441, 480],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "柚柚切颗NOW",
                    "五分糖",
                    "奇异果片"
                ],
                "ex": [512, 573, 625],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "吉娜": {
        "achievement": [
            {
                "name": "警铃大作",
                "limit": "【默契值1级】",
                "tips": [
                    "隐藏在白桃香气之下的苦涩滋味，令吉娜不由得弓起脊背。",
                    "“只是加了些热茶和菊花而已，别紧张。”"
                ],
                "recipe": [
                    "自证方圆",
                    "桃桃乌龙茶",
                    "正常糖",
                    "热",
                    "菊花"
                ]
            },
            {
                "name": "抗拒温暖",
                "limit": "【默契值1级】",
                "tips": [
                    "吉娜的视线快速扫过吧台。",
                    "枸杞、菊花、杨桃、银杏叶……",
                    "她不喜欢这些让她心头一暖的东西。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "枸杞菊花茶",
                    "杨桃",
                    "叶子冻",
                    "银杏叶"
                ]
            },
            {
                "name": "无效伪装",
                "limit": "【默契值1级】",
                "tips": [
                    "即便加了那么多冰块，一股独属于蜂蜜啤酒的古怪香气冲击着吉娜的鼻腔，她反倒挤出一丝笑容。",
                    "监督有些无奈地长叹了口气：“在我面前，你可以不伪装的。”",
                    "……嘶。"
                ],
                "recipe": [
                    "简约至上",
                    "蜂蜜啤酒",
                    "多冰",
                    "偏烈",
                    "经典长签"
                ]
            },
            {
                "name": "口是心非",
                "limit": "【默契值6级】",
                "tips": [
                    "“苏打水而已。”吉娜如此评价道。",
                    "但监督望着她被冰到泛红还不肯放开竹节茶杯的手指，微微笑了。",
                    "“嘶，你盯着看什么。”",
                    "“咳，没什么，就是觉得白玉兰不错，咳咳。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "冰镇苏打水",
                    "正常冰",
                    "芒果果冻",
                    "白玉兰"
                ]
            },
            {
                "name": "狩猎时刻",
                "limit": "【默契值5级】",
                "tips": [
                    "看着杯口如星光般的碎盐，吉娜忽然想起了特默里恩的夜空。",
                    "还有那些在她手中颤动的喉管、不断涌出的……",
                    "“难得看你发呆，是‘黑月亮’不合口吗？”",
                    "“不……只是突然想起了一些不那么难捱的日子。”",
                    "她伸出舌头，隐秘地舔了舔嘴边鲜红的樱桃汁水。"
                ],
                "recipe": [
                    "简约至上",
                    "黑月亮",
                    "少冰",
                    "盐",
                    "樱桃",
                    "精致纸伞"
                ]
            },
            {
                "name": "是小狗吗",
                "limit": "【默契值13级】",
                "tips": [
                    "刚把黎威尔日升端了出来，某人的尾巴就开始小幅度地摇晃了起来。",
                    "当监督转过身，在熊熊杯上细致地绑蝴蝶结时，身后更是传来一阵细微的破空声。",
                    "究竟有多喜欢，才能把尾巴摇出这个声音啊。",
                    "监督偷偷朝身后看了一眼，某人似乎完全没意识到呢。"
                ],
                "recipe": [
                    "熊熊杯",
                    "黎威尔日升",
                    "奶精球",
                    "柠檬汁",
                    "青梅",
                    "蝴蝶结"
                ]
            },
            {
                "name": "眼下为真",
                "limit": "【默契值16级】",
                "tips": [
                    "“你就不怕，有一天我会了结你的生命——就像真正的怪物那样。”",
                    "“这件事……还是等真正发生了，再由未来的我去考虑吧。”监督歪了歪头，“现在我更在意我眼前名叫吉娜的女士会不会觉得这杯薄暮飞行太淡了。”",
                    "“……正好。”",
                    "“那还要加苦味素和黄瓜片吗？”",
                    "“……加。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "薄暮飞行",
                    "苦味素",
                    "偏淡",
                    "黄瓜片",
                    "空心圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "蜂蜜啤酒",
                    "偏淡",
                    "多冰"
                ],
                "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "多冰",
                    "樱桃"
                ],
                "ex": [513, 574, 626],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "黎威尔日升",
                    "椰浆",
                    "盐",
                    "青梅"
                ],
                "ex": [527, 591, 644],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "司危": {
        "achievement": [
            {
                "name": "淡柠檬水",
                "limit": "【默契值1级】",
                "tips": [
                    "“我为什么要喝它。”",
                    "“嗯……你上次不是说想试试淡柠檬水的味道？”",
                    "“我已经喝过了。”",
                    "“？”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "白开水",
                    "常温",
                    "柠檬汁",
                    "菊花"
                ]
            },
            {
                "name": "自己的联名",
                "limit": "【默契值1级】",
                "tips": [
                    "“怎么？自己的联名不喜欢？”",
                    "“太甜了。”",
                    "“你茶冻倒是吃完了……”"
                ],
                "recipe": [
                    "双莓之恋",
                    "七分糖",
                    "少冰",
                    "茶冻",
                    "紫藤"
                ]
            },
            {
                "name": "覆盖味觉",
                "limit": "【默契值4级】",
                "tips": [
                    "在司危的数据记载中，西柚多汁、微酸，偶尔伴随着麻舌感。",
                    "“……甜的啊。”司危看着面前的果汁，把她的数据错误归咎为糖分和漂浮的雪顶。"
                ],
                "recipe": [
                    "环口杯/家用玻璃杯",
                    "柚柚切颗NOW",
                    "正常糖",
                    "原味雪顶",
                    "长匙"
                ]
            },
            {
                "name": "谨慎言辞",
                "limit": "【默契值13级】",
                "tips": [
                    "“……拿走，不喝。”",
                    "“但是……”",
                    "“呵，怎么，你是想说可以助眠还是想说可以长高？”",
                    "监督咽了咽口水，觉得自己只要一开口，就会凶多吉少。"
                ],
                "recipe": [
                    "柯林杯",
                    "甜牛乳",
                    "无糖",
                    "常温",
                    "脱脂牛奶"
                ]
            },
            {
                "name": "夏活特供",
                "limit": "【默契值8级】",
                "tips": [
                    "爱豆户外演出的公认消暑利器。",
                    "“我不——拿过来吧。”"
                ],
                "recipe": [
                    "环口杯/家用玻璃杯",
                    "枫糖薄荷",
                    "多冰",
                    "奶精球",
                    "珍珠",
                    "心形插签"
                ]
            },
            {
                "name": "重复点单",
                "limit": "【默契值16级】",
                "tips": [
                    "司危从不主动给出好不好喝这个答案。",
                    "——她只是偶尔会点同一杯饮料，坐在位子上发呆。",
                    "“低耗模式而已，你以为是什么？”",
                    "“好吧，这杯桃桃乌龙茶怎么样？”",
                    "“还行。”",
                    "“那再加份水果冻？”",
                    "“随便。”"
                ],
                "recipe": [
                    "环口杯/家用玻璃杯/双层叶纹",
                    "桃桃乌龙茶",
                    "无糖",
                    "少冰",
                    "芒果果冻",
                    "桂花"
                ]
            },
            {
                "name": "坚硬",
                "limit": "【默契值18级】",
                "tips": [
                    "司危常说自己拥有最坚硬的骨骼——这是当然。",
                    "然而玻璃依旧能够让她受伤。",
                    "叶纹杯壁的水珠缓缓流下，她闻到了橘子的味道。",
                    "还有蜜桃。"
                ],
                "recipe": [
                    "双层叶纹",
                    "玻璃橘子",
                    "少冰",
                    "蜜桃冻",
                    "紫藤"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "鲜榨雪梨汁",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [356, 399, 434],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "柚柚切颗NOW",
                    "三分糖",
                    "奇异果片"
                ],
                "ex": [393, 542, 480],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "枫糖薄荷",
                    "椰浆",
                    "正常冰",
                    "咸梅干"
                ],
                "ex": [484, 542, 590],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "玻璃橘子",
                    "正常冰",
                    "叶子冻"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "雪长夏": {
        "achievement": [
            {
                "name": "读档重开",
                "limit": "【默契值1级】",
                "tips": [
                    "“如果是在游戏里，看到这杯无糖热姜茶的瞬间，我就会读档重来。”"
                ],
                "recipe": [
                    "经典格纹",
                    "姜茶",
                    "无糖",
                    "热",
                    "水果签"
                ]
            },
            {
                "name": "糖分供给",
                "limit": "【默契值8级】",
                "tips": [
                    "“抱歉，我记得你讨厌姜汁类，一时没注意……”",
                    "“没事，有可可。味道没有想象中差。”",
                    "监督警觉地眯起眼。",
                    "“雪长夏，你不会是个甜食派吧？”",
                    "雪长夏神色不变：“监督，大脑运作需要糖分。很多糖分。”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "姜汁可可",
                    "常温",
                    "糖浆",
                    "圆匙"
                ]
            },
            {
                "name": "可爱……？",
                "limit": "【默契值10级】",
                "tips": [
                    "看着眼前的名为淑女风尚的茶杯，雪长夏看了一眼监督，又看了一眼监督。",
                    "“我想这个更适合花时。”",
                    "“噗。”监督嘴里的茉茉奶绿差点喷了出来。"
                ],
                "recipe": [
                    "淑女风尚",
                    "茉茉奶绿",
                    "正常糖",
                    "热",
                    "水果签"
                ]
            },
            {
                "name": "牙齿烦恼",
                "limit": "【默契值5级】",
                "tips": [
                    "“嘶……”",
                    "“牙疼？太冰了还是太甜了？”",
                    "“两者皆有。”雪长夏多少有些不情不愿地放下手中的桃桃乌龙茶，“如果牙齿也能像游戏中的装备一样，轻松置换就好了。”"
                ],
                "recipe": [
                    "经典格纹",
                    "桃桃乌龙茶",
                    "正常糖",
                    "多冰",
                    "蜜桃冻",
                    "心形插签"
                ]
            },
            {
                "name": "深夜聊天记录",
                "limit": "【默契值6级】",
                "tips": [
                    "【监督】",
                    "-半夜看到你上线，吓了我一跳。",
                    "-睡不着？",
                    "【雪长夏】",
                    "-嗯。在想一些不好好做游戏就要回去继承亿万家产的事。",
                    "【监督】",
                    "-……你不要总是轻描淡写地用玩笑话揭自己的伤疤。",
                    "-喝杯热牛奶，先好好睡一觉。",
                    "-加点糖。"
                ],
                "recipe": [
                    "淑女风尚",
                    "甜牛乳",
                    "五分糖",
                    "热",
                    "银杏叶"
                ]
            },
            {
                "name": "友情的真实",
                "limit": "【默契值16级】",
                "tips": [
                    "“那个……雪长夏……你的通讯器在响。”",
                    "“嗯。”",
                    "“你不看看是谁找你吗？”",
                    "“不用看，是花时。他有事求我。”",
                    "“啊？那不赶紧……”",
                    "“不急。”雪长夏慢悠悠地将刚烤好的汪汪饼干丢进牛奶里，“他现在还一口一个‘雪长夏’，等他喊我‘哥’的时候，我再回他也来得及。”",
                    "“你不是比他小吗……”",
                    "“没错。”"
                ],
                "recipe": [
                    "鎏·金",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "汪汪饼干",
                    "白玉兰"
                ]
            },
            {
                "name": "他的勇者",
                "limit": "【默契值1级】",
                "tips": [
                    "“如果有机会设计一个体量足够大的开放世界，也许我会将其命名为森罗Online。”",
                    "“哦？”",
                    "“到时候还请监督来做我的勇者。”",
                    "“……”",
                    "“你这是趁机要我的授权吗？”",
                    "“被发现了？”雪长夏端起面前的陶瓷杯，薄荷蜜柚苏打里的气泡与他的笑意一同轻快浮起。"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "薄荷蜜柚苏打",
                    "常温",
                    "叶子冻",
                    "精致纸伞"
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
                "ex": [569, 637, 694],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "狄砚": {
        "achievement": [
            {
                "name": "难解的结",
                "limit": "【默契值13级】",
                "tips": [
                    "似乎只要是来自恩利都的事物，便很难在遥城人之中受到欢迎。",
                    "“您的好意我心领了。”",
                    "狄砚轻轻用五叶长签搅动着柯林杯里的冰块，却一口也没有喝。"
                ],
                "recipe": [
                    "柯林杯",
                    "恩利都苦啤兑苦咖",
                    "多冰",
                    "盐",
                    "加双份",
                    "五叶长签"
                ]
            },
            {
                "name": "“惊人”酒量",
                "limit": "【默契值1级】",
                "tips": [
                    "只是将装有甜米酿的玻璃杯摆在面前，没过多久，狄砚含笑的眼便有些迷离了起来。",
                    "“这样也会醉吗？”",
                    "“抱、抱歉。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "酒酿凤梨",
                    "正常糖",
                    "正常冰",
                    "紫藤"
                ]
            },
            {
                "name": "我怀念的",
                "limit": "【默契值13级】",
                "tips": [
                    "也许是因为狄砚那些年太过瘦小，又是难得的女儿，家人对她总是格外仔细。",
                    "就是炎炎夏日，他们也要往她怀里揣一壶祛湿的热茶。",
                    "以至于如今猛地闻见姜片的辛辣，狄砚心头涌起的，竟是一点怀念。"
                ],
                "recipe": [
                    "柯林杯",
                    "姜茶",
                    "无糖",
                    "热",
                    "心形插签"
                ]
            },
            {
                "name": "奇怪的搭配",
                "limit": "【默契值6级】",
                "tips": [
                    "狄砚虽然不明白监督为何会在奶油芭蕾中投入双份浓缩与燕麦奶，调制成如此激烈的味道……",
                    "但她不会质疑监督，任何时候都不会。"
                ],
                "recipe": [
                    "环口杯",
                    "奶油芭蕾",
                    "燕麦奶",
                    "偏烈",
                    "加双份",
                    "桂花"
                ]
            },
            {
                "name": "意外滋味",
                "limit": "【默契值16级】",
                "tips": [
                    "“这个味道的苏打水在我常去的射击场也有贩售……薄荷、蜂蜜、咖啡……”",
                    "“没有咖啡哦。”",
                    "“嗯？”",
                    "“小砚你尝到的，该不会是硝烟的味道吧？”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "芒果果冻",
                    "菊花"
                ]
            },
            {
                "name": "我们俩",
                "limit": "【默契值10级】",
                "tips": [
                    "“真没想到小砚会喜欢‘惑星的艾琳’。”",
                    "“比起味道，我更喜欢它背后的故事——监督相信一见钟情吗？”",
                    "“……嗯。”",
                    "两个人对视了一眼，又同时移开目光。",
                    "——怎么连额外添加的苦味素都变得有些甜？"
                ],
                "recipe": [
                    "双层叶纹",
                    "惑星的艾琳",
                    "苦味素",
                    "西瓜",
                    "空心圆匙"
                ]
            },
            {
                "name": "皆大欢喜",
                "limit": "【默契值18级】",
                "tips": [
                    "监督研究了很久才找到狄砚也能接受的含酒精的饮品配方——海水半蓝，加柠檬汁与椰果，还要放许多冰块。",
                    "狄砚尝了一口……确实没有令她难受的酒精味道，她尝到的，只有心意。"
                ],
                "recipe": [
                    "双层叶纹",
                    "海水半蓝",
                    "多冰",
                    "柠檬汁",
                    "椰果",
                    "三叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "姜茶",
                    "五分糖",
                    "常温"
                ],
                "ex": [315, 352, 384],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "黑月亮",
                    "盐",
                    "多冰",
                    "樱桃"
                ],
                "ex": [373, 418, 455],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "经典特浓咖啡",
                    "奶精球",
                    "标准",
                    "咖啡雪顶"
                ],
                "ex": [410, 459, 501],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "惑星的艾琳",
                    "盐",
                    "咖啡雪顶"
                ],
                "ex": [433, 485, 528],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "海水半蓝",
                    "柠檬汁",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [461, 517, 564],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "艾摩诃": {
        "achievement": [
            {
                "name": "能喝，信我",
                "limit": "【默契值1级】",
                "tips": [
                    "“养生？”艾摩诃看着眼前的杯子，难得没有第一时间拿起杯子，“可是你还加了很多奇怪的东西。”",
                    "“能喝，信我！”",
                    "所有都盯着艾摩诃——等着他喝下这杯混合了提子果冻和薄荷的养生茶。"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "枸杞菊花茶",
                    "青提",
                    "叶子冻",
                    "薄荷叶"
                ]
            },
            {
                "name": "至暗时刻",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督，你这里就没什么正常的饮料么？”",
                    "“所以姜汁和可可到底为什么要放在一起……尚非乐都被难喝哭了……”瓦卡莎勉强从沙发里抬起头，含含糊糊地说。",
                    "“监督刚刚是不是还放了糖浆和珍珠？呃，看起来更黑暗了。”长谣躲远了点，“喝完了不会和元桃桃一样去医务部吧？”",
                    "“……”"
                ],
                "recipe": [
                    "姜汁可可",
                    "热",
                    "糖浆",
                    "珍珠"
                ]
            },
            {
                "name": "雪顶咖啡",
                "limit": "【默契值1级】",
                "tips": [
                    "熬夜的最佳伴侣，觉得劲儿不够就再加一份咖啡因，觉得太苦就可以加份糖。",
                    "记得带上勺子搅拌一下哦。"
                ],
                "recipe": [
                    "经典格纹",
                    "经典特浓咖啡",
                    "糖包",
                    "加一份",
                    "原味雪顶",
                    "空心圆匙"
                ]
            },
            {
                "name": "很怪，再喝一口",
                "limit": "【默契值1级】",
                "tips": [
                    "恩利都特产，加盐会有特殊的风味。",
                    "“这朵花能吃么？”艾摩诃嚼着冰块，看着杯口的装饰花问到。"
                ],
                "recipe": [
                    "经典格纹",
                    "恩利都苦啤兑苦咖",
                    "多冰",
                    "盐",
                    "标准",
                    "桂花"
                ]
            },
            {
                "name": "金色凤梨传说",
                "limit": "【默契值5级】",
                "tips": [
                    "“这个颜色很像夜摩的一种酒。”",
                    "“嗯？夜摩的酒叫什么？”",
                    "“不知道。女王大人请阿兰那喝过。”",
                    "“……那，好喝么？”",
                    "“嗯嗯。”",
                    "“这杯呢？”",
                    "“一般。”",
                    "“……………………”"
                ],
                "recipe": [
                    "淑女风尚/青叶陶瓷杯",
                    "酒酿凤梨",
                    "三分糖",
                    "少冰",
                    "圆匙"
                ]
            },
            {
                "name": "受欢迎",
                "limit": "【默契值13级】",
                "tips": [
                    "一杯冰镇的气泡水，再加点咸甜和清凉。",
                    "“很凉，在夜摩应该会很受欢迎。”",
                    "“……多谢夸奖？”",
                    "“哦，就是这把伞太小了，没什么用。”",
                    "“…………”"
                ],
                "recipe": [
                    "鎏·金",
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干",
                    "精致纸伞"
                ]
            },
            {
                "name": "芭蕾不是芭菲",
                "limit": "【默契值18级】",
                "tips": [
                    "“芭菲是什么？”",
                    "“嗯……芭菲是一种甜点，但是这两个字是芭蕾。”",
                    "“哦，那芭蕾是什么？”",
                    "“一种舞蹈的名字。”",
                    "“那为什么这个水叫舞蹈的名字？”",
                    "“呃，要再加点什么么？燕麦奶？再加一份咖啡？这个长签给你搅匀一下。”",
                    "“都要，谢谢。”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "奶油芭蕾",
                    "燕麦奶",
                    "偏烈",
                    "加双份",
                    "圆柄长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "恩利都苦啤兑苦咖",
                    "加一份",
                    "盐",
                    "正常冰"
                ],
                "ex": [367, 411, 448],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻"
                ],
                "ex": [393, 441, 480],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "黎威尔日升",
                    "椰浆",
                    "柠檬汁",
                    "青提"
                ],
                "ex": [448, 501, 546],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "白开水",
                    "柠檬汁",
                    "常温"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "余音": {
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
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "卯绒绒": {
        "achievement": [
            {
                "name": "嗓子刺客",
                "limit": "【默契值1级】",
                "tips": [
                    "“啊啊啊有小刀在我嘴里剌——”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "姜茶",
                    "正常糖",
                    "热"
                ]
            },
            {
                "name": "润嗓小妙招",
                "limit": "【默契值1级】",
                "tips": [
                    "不好喝，但是可以保护嗓子。"
                ],
                "recipe": [
                    "白开水",
                    "常温",
                    "盐"
                ]
            },
            {
                "name": "长这么大不容易",
                "limit": "【默契值13级】",
                "tips": [
                    "“啊，这滋味让我想起了蘑菇屋门口甜甜的水草~”",
                    "“啊，这香气让我想起了三舅妈种的果子~”",
                    "“啊，这口感让我想起了小时候吃的炸炸菇~”",
                    "“啊……嗯？等等，炸炸菇不是有毒吗？”"
                ],
                "recipe": [
                    "柯林杯",
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "叶子冻",
                    "紫藤"
                ]
            },
            {
                "name": "差别对待",
                "limit": "【默契值8级】",
                "tips": [
                    "喝不了姜茶的卯卯和绒绒意外地很喜欢姜汁可可，这是为什么？"
                ],
                "recipe": [
                    "姜汁可可",
                    "热",
                    "椰浆",
                    "焦糖布丁"
                ]
            },
            {
                "name": "致富之路",
                "limit": "【默契值10级】",
                "tips": [
                    "我们把它加入茶楼的饮品单吧，一定能大赚一笔！”"
                ],
                "recipe": [
                    "双层叶纹",
                    "白桃芝士奶盖",
                    "三分糖",
                    "正常冰",
                    "樱桃",
                    "经典长签"
                ]
            },
            {
                "name": "有难同当",
                "limit": "【默契值16级】",
                "tips": [
                    "“感情深，一口闷！”"
                ],
                "recipe": [
                    "环口杯/家用玻璃杯",
                    "桃桃乌龙茶",
                    "正常糖",
                    "热",
                    "茶冻",
                    "心形插签"
                ]
            },
            {
                "name": "公平分配",
                "limit": "【默契值18级】",
                "tips": [
                    "杯子里有两颗草莓，一颗是草莓，另一颗也是草莓。"
                ],
                "recipe": [
                    "双层叶纹",
                    "双莓之恋",
                    "正常糖",
                    "多冰",
                    "蜜桃冻",
                    "空心圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "白开水",
                    "柠檬汁",
                    "常温"
                ],
                "ex": [371, 415, 453],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "茶冻"
                ],
                "ex": [435, 487, 531],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白桃芝士奶盖",
                    "五分糖",
                    "正常冰",
                    "西瓜"
                ],
                "ex": [448, 502, 547],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "龙和": {
        "achievement": [
            {
                "name": "不吃苦中苦",
                "limit": "【默契值4级】",
                "tips": [
                    "龙和端详着手中名为咖啡的饮品：“森罗人实在奇怪，费尽周章竟是为了‘吃点苦头’。就是当年修习术法之时，我也不曾这么为难过我自己。”",
                    "“这不是为了工作吗……我帮你把这杯加了双倍浓缩的咖啡端下去吧。”",
                    "“多谢。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "经典特浓咖啡",
                    "椰浆",
                    "加双份",
                    "原味雪顶",
                    "蝴蝶结"
                ]
            },
            {
                "name": "突生变故",
                "limit": "【默契值10级】",
                "tips": [
                    "“监督，此物凶险异常，光是饮下，便觉得喉头隐隐作痛，恐怕是被人下了咒！看我————”",
                    "“啊啊啊啊！苏打水我已经撤了！！你不要火烧吧台啊啊！！”"
                ],
                "recipe": [
                    "简约至上",
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干",
                    "精致纸伞"
                ]
            },
            {
                "name": "？？？？？",
                "limit": "【默契值8级】",
                "tips": [
                    "“………………”龙和浅抿了一口竹节茶杯中的白水，双眉紧蹙，默然不语。",
                    "“怎么不说话？在陆地上喝水的感觉怎么样？”",
                    "有种……一边呼吸一边……‘呼吸’的感觉……好生奇怪……监督，你能懂吗？"
                ],
                "recipe": [
                    "竹节茶杯",
                    "白开水",
                    "常温",
                    "盐",
                    "空心圆匙"
                ]
            },
            {
                "name": "本性难改",
                "limit": "【默契值6级】",
                "tips": [
                    "“你虽然不喜爱森罗那些工序过多、精于制作的饮品，但是对各色酒水倒是来者不拒。”",
                    "“于我而言，酒只分烈度。不管加什么都难改其本，无甚要紧。”",
                    "“那你手里那杯夜色危情对你来说怎么样？要不要再烈一些？”",
                    "“不必了。已然足矣。”"
                ],
                "recipe": [
                    "简约至上",
                    "夜色危情",
                    "少冰",
                    "偏淡",
                    "水果签"
                ]
            },
            {
                "name": "终知晓",
                "limit": "【默契值13级】",
                "tips": [
                    "“噗嗤……”",
                    "“监督笑什么？”",
                    "“你啊，不仅和龙晴点的一模一样，就连喝下时的表情都一样。”",
                    "“可我妹妹并不喜欢枸杞菊花茶啊，她为什么要点？”",
                    "“………………………………啊。”",
                    "也许是因为她想你了吧。",
                    "监督没有将话挑明，只是等龙和自己想明白。"
                ],
                "recipe": [
                    "自证方圆",
                    "枸杞菊花茶",
                    "杨桃",
                    "叶子冻",
                    "空心圆匙"
                ]
            },
            {
                "name": "顿悟",
                "limit": "【默契值16级】",
                "tips": [
                    "“怎么会有人不喜欢汪汪饼干！”",
                    "“太甜。”",
                    "“………………可是它造型可爱啊！！”",
                    "龙和歪了歪头，用银杏叶将杯中的饼干捞了上来，细细端详了一番。",
                    "“可爱之事暂且不谈，监督，你觉不觉得它有些像……温留前辈？”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "冰镇酸梅汤",
                    "五分糖",
                    "汪汪饼干",
                    "银杏叶"
                ]
            },
            {
                "name": "主观能动性",
                "limit": "【默契值18级】",
                "tips": [
                    "“咦？你不是不爱喝过甜和过度制作的饮品吗？怎么端着杯杨枝甘露。”",
                    "“我原是不喜，可元桃桃带我去店里见了一回。我才知道，一杯杨枝甘露竞需要费那么多功夫————我决定从此喜欢它了。”",
                    "“口味这种事，是能靠你自己主观上决定的吗？”",
                    "“自然！”",
                    "只见龙和深吸一口气，居然将整杯一饮而尽！",
                    "“要不还是算了吧……”"
                ],
                "recipe": [
                    "熊熊杯",
                    "杨枝甘露",
                    "樱桃",
                    "椰果",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "柚柚切颗NOW",
                    "五分糖",
                    "杨桃"
                ],
                "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "咸梅干"
                ],
                "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "瞳": {
        "achievement": [
            {
                "name": "没想到",
                "limit": "【默契值1级】",
                "tips": [
                    "“瞳老师，这杯桃桃乌龙茶，您不喜欢，我就撤……”",
                    "“留着。元桃桃等会要来我这补作业。”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "桃桃乌龙茶",
                    "三分糖",
                    "正常冰",
                    "椰果",
                    "长匙"
                ]
            },
            {
                "name": "无法理解",
                "limit": "【默契值13级】",
                "tips": [
                    "看着白荆前台数十杯为了BS联名周边而买的双莓之恋，瞳决定在员工培训中新增一门关于理性决定的课程。"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "双莓之恋",
                    "正常糖",
                    "多冰",
                    "珍珠",
                    "蝴蝶结"
                ]
            },
            {
                "name": "死道友不死贫道",
                "limit": "【默契值1级】",
                "tips": [
                    "“无糖热牛奶并不能让我休息得更好，你准时上交的研究报告可以。”",
                    "“啊……啊……那个……苏筱上个月的论文还没交！”",
                    "“监督——”"
                ],
                "recipe": [
                    "马天尼杯",
                    "甜牛乳",
                    "无糖",
                    "热",
                    "脱脂牛奶",
                    "薄荷叶"
                ]
            },
            {
                "name": "体感？",
                "limit": "【默契值5级】",
                "tips": [
                    "虽然只在白开水中加了几滴柠檬汁，然而瞳还是察觉到了。",
                    "“ph值不对。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "白开水",
                    "常温",
                    "柠檬汁",
                    "枫叶"
                ]
            },
            {
                "name": "自有方法",
                "limit": "【默契值8级】",
                "tips": [
                    "不公布配方？",
                    "瞳敲了敲手臂内侧。",
                    "“已开始检测——”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "极夜马戏团",
                    "盐",
                    "正常",
                    "奇异果片",
                    "五叶长签"
                ]
            },
            {
                "name": "师生",
                "limit": "【默契值16级】",
                "tips": [
                    "曾几何时，每当一项研究结束，曲观玄都会找瞳喝一杯。",
                    "曲观玄走了，这事也就随之终止。",
                    "直到某一天，监督端着一杯海水半蓝出现在他的实验室。",
                    "“你确实是曲观玄的学生。”",
                    "“？”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "海水半蓝",
                    "少冰",
                    "苦味素",
                    "蜜桃冻",
                    "柠檬片"
                ]
            },
            {
                "name": "意外答案",
                "limit": "【默契值18级】",
                "tips": [
                    "“明明白荆科技95%的人都受不了姜汁可可，为什么它还顽固地扒在菜单上啊？到底谁在喝啊？”",
                    "“……瞳老师。”",
                    "“啊？”"
                ],
                "recipe": [
                    "马天尼杯",
                    "姜汁可可",
                    "热",
                    "奶精球",
                    "咖啡冻",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨",
                    "三分糖",
                    "少冰"
                ],
                "ex": [311, 349, 380],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "薄荷蜜柚苏打",
                    "少冰",
                    "叶子冻"
                ],
                "ex": [346, 388, 423],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "白开水",
                    "盐",
                    "少冰"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "极夜马戏团",
                    "盐",
                    "正常",
                    "蓝莓"
                ],
                "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "经典特浓咖啡",
                    "奶精球",
                    "标准",
                    "咖啡雪顶"
                ],
                "ex": [492, 551, 601],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "缇诗": {
        "achievement": [
            {
                "name": "应尝尽尝",
                "limit": "【默契值13级】",
                "tips": [
                    "“你明知自己不喜欢放太多糖的饮料，为什么还要点双倍糖的阿华田奶茶？”",
                    "“……如果可以，我想什么都尝试一下。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "阿华田奶茶",
                    "双倍糖",
                    "珍珠",
                    "紫藤"
                ]
            },
            {
                "name": "花开若有时",
                "limit": "【默契值1级】",
                "tips": [
                    "“你盯着这杯花茶好久了……是太烫了吗？”",
                    "“不。我只是在想……我还是更喜欢它们盛放的模样。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "德里亚德风味花茶",
                    "热",
                    "茶冻",
                    "迷迭香"
                ]
            },
            {
                "name": "打包带走",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督，我可以打包一份茉茉奶绿带走吗？三分糖、少冰、需要加蜜桃冻。”",
                    "“当然可以。你很喜欢这个口味吗？”",
                    "“纳加尔喜欢。”",
                    "“……啊？”"
                ],
                "recipe": [
                    "航海时代",
                    "茉茉奶绿",
                    "三分糖",
                    "少冰",
                    "蜜桃冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "沙漠孤夜凉",
                "limit": "【默契值4级】",
                "tips": [
                    "“没想到你居然会喜欢喝这个。”",
                    "“沙漠的夜晚很冷，也很漫长……一杯热腾腾的姜汁可可能够陪伴我很久。”"
                ],
                "recipe": [
                    "扎啤杯",
                    "姜汁可可",
                    "常温",
                    "糖浆",
                    "咖啡冻",
                    "圆匙"
                ]
            },
            {
                "name": "进步",
                "limit": "【默契值10级】",
                "tips": [
                    "“我还记得你第一次喝苏打水的时候，被吓得不轻……没想到这么快就喜欢上了。”",
                    "“嗯。气泡在舌尖跳动的感觉很有趣。要是再加上几粒咸梅干和冰块——监督，你笑什么？”",
                    "“没想到一段时间不见，你居然能流利地说长难句了，有点欣慰。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "冰镇苏打水",
                    "正常冰",
                    "咸梅干",
                    "银杏叶"
                ]
            },
            {
                "name": "愁",
                "limit": "【默契值13级】",
                "tips": [
                    "“监督，你为什么突然停下了？”",
                    "“我突然意识到一件事……”",
                    "“什么？”",
                    "“虽然你的身体各项机能与成人无异，但在物理意义上你只存在两年时间……我真的可以给你提供这杯极夜马戏团吗？”",
                    "“好问题。也许我们该边喝边谈。”",
                    "“？”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "极夜马戏团",
                    "盐",
                    "正常",
                    "蓝莓",
                    "心形插签"
                ]
            },
            {
                "name": "海",
                "limit": "【默契值18级】",
                "tips": [
                    "令人惊奇的是，缇诗经常做梦。",
                    "在她的梦中，总有一抹蓝。",
                    "那是某一日，无端出现在无垠荒漠里的海。",
                    "海说：“那么我们重新认识一下。你好，缇诗小姐，很高兴认识你。”",
                    "“……谢谢，我也很高兴认识你。”"
                ],
                "recipe": [
                    "航海时代",
                    "海水半蓝",
                    "少冰",
                    "柠檬汁",
                    "芒果果冻",
                    "水果签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "柚柚切颗NOW",
                    "五分糖",
                    "草莓"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "鲜榨雪梨汁",
                    "常温",
                    "茶冻"
                ],
                "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "风晴雪": {
        "achievement": [
            {
                "name": "平平无奇",
                "limit": "【默契值8级】",
                "tips": [
                    "“监督，这杯白开水只有一点点咸味欸。能把那边的苦味素递给我吗？”",
                    "“……你猜它为什么叫白开水……”"
                ],
                "recipe": [
                    "简约至上",
                    "白开水",
                    "常温",
                    "盐",
                    "枫叶"
                ]
            },
            {
                "name": "话音刚落",
                "limit": "【默契值6级】",
                "tips": [
                    "“这就是哥哥爱喝的沉金记忆吗？原来是因为不好喝，哥哥才不让我喝的啊。”",
                    "“……我想，应该不是因为这个。不觉得酒精浓度有点高吗？”",
                    "“嗯唔……嗯……？”",
                    "“坏了，已经醉了！”"
                ],
                "recipe": [
                    "熊熊杯",
                    "沉金记忆",
                    "正常糖",
                    "柠檬汁",
                    "精致纸伞"
                ]
            },
            {
                "name": "料理的滋味",
                "limit": "【默契值4级】",
                "tips": [
                    "“加了双倍浓缩之后，味道变得跟你做的饭有点像啊……”",
                    "“相似的好吃吗？”",
                    "“………………啊对对对。”"
                ],
                "recipe": [
                    "简约至上",
                    "经典特浓咖啡",
                    "糖包",
                    "加双份",
                    "草莓冰淇淋",
                    "水果签"
                ]
            },
            {
                "name": "两不耽误",
                "limit": "【默契值1级】",
                "tips": [
                    "“德里亚德森林这种名字，真的很适合出现在‘格兰索历险记’里呢。”",
                    "“别一边闲聊一边往花茶里加咸梅干啊！”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "德里亚德风味花茶",
                    "热",
                    "咸梅干",
                    "白玉兰"
                ]
            },
            {
                "name": "稳定发挥",
                "limit": "【默契值5级】",
                "tips": [
                    "“你不是等下要去训练场，现在喝黑月亮真的没关系吗？别像上次似的，忽然就醉倒了。”",
                    "“没事没事~在战场上，干扰项只多不少，但我的准心从不会轻易动摇。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "黑月亮",
                    "正常冰",
                    "苦味素",
                    "蝴蝶结"
                ]
            },
            {
                "name": "肌肉记忆",
                "limit": "【默契值16级】",
                "tips": [
                    "还没来得及细品苦啤对苦咖的滋味，忽听见窗外传来一声爆响。",
                    "风晴雪下意识放下手中的竹节茶杯，一个箭步窜到窗帘边，隐蔽而熟练地拉开枪栓。",
                    "“风小姐，是烟火哦。”",
                    "“烟火？”",
                    "风晴雪的神情多少有些迷茫。"
                ],
                "recipe": [
                    "竹节茶杯",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "盐",
                    "加双份",
                    "银杏叶"
                ]
            },
            {
                "name": "出乎意料",
                "limit": "【默契值18级】",
                "tips": [
                    "“咦……”",
                    "“监督你怎么这个表情？是我点的熊熊燕麦牛奶有问题吗？”",
                    "“不……就是因为太正常了……出乎意料的正常……”",
                    "“那我加点苦味素？”",
                    "“别别别，燕麦奶和汪汪饼干就挺好的！”"
                ],
                "recipe": [
                    "自证方圆",
                    "熊熊燕麦牛奶",
                    "燕麦奶",
                    "汪汪饼干",
                    "经典长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "夜色危情",
                    "偏烈",
                    "少冰",
                    "咸梅干"
                ],
                "ex": [511, 572, 624],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "玻璃橘子",
                    "少冰",
                    "椰果"
                ],
                "ex": [567, 635, 692],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "熊熊燕麦牛奶",
                    "燕麦奶",
                    "焦糖布丁"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "罗咤": {
        "achievement": [
            {
                "name": "拒绝配合",
                "limit": "【默契值1级】",
                "tips": [
                    "“好啊，玄戈他们在天鹿让我天天喝这个就算了，你也不放过我？！”",
                    "“呃，为了让你觉得开心一点，给你配了无糖，还加了冰——”",
                    "“是这个问题么！？”"
                ],
                "recipe": [
                    "甜牛乳",
                    "无糖",
                    "多冰",
                    "全脂牛奶"
                ]
            },
            {
                "name": "下单失误",
                "limit": "【默契值4级】",
                "tips": [
                    "“……”",
                    "“……”",
                    "“我为什么要喝这玩意，还用搪瓷杯，你最好解、释、清、楚。”",
                    "监督看着面前的女孩，实在说不出——不小心把你的和禺期的搞反了这句话。"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "姜茶",
                    "无糖",
                    "常温"
                ]
            },
            {
                "name": "转移话题的艺术",
                "limit": "【默契值5级】",
                "tips": [
                    "“怎么？我点咖啡很奇怪么？爆炸实验可是要经常熬夜的！”",
                    "“……………………”",
                    "“说起来，监督，你们这儿有没有空余的房——”",
                    "“给！你的糖浆，圆匙在手边自己拿一下。”"
                ],
                "recipe": [
                    "经典搪瓷杯/扎啤杯",
                    "经典特浓咖啡",
                    "糖浆",
                    "低因",
                    "空心圆匙"
                ]
            },
            {
                "name": "到底谁在喝无糖？",
                "limit": "【默契值1级】",
                "tips": [
                    "“到底是谁在喝无糖，都喝奶茶还这么养生？这菊花又是什么？”",
                    "“……它只是一杯奶绿，无糖是无辜的。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "茉茉奶绿",
                    "无糖",
                    "正常冰",
                    "菊花"
                ]
            },
            {
                "name": "能吃还能玩",
                "limit": "【默契值8级】",
                "tips": [
                    "“真意外，你竟然会喜欢看起来这么平平无奇的东西。”",
                    "“怎么？你又不懂了吧，这样才有意思。”",
                    "罗咤从冰山冰海中拿起一块——接着准确砸在正在睡觉的豹富的聚宝盆里。",
                    "“唔，这个梅干不错，哪儿买的？”",
                    "“………………”"
                ],
                "recipe": [
                    "航海时代",
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干"
                ]
            },
            {
                "name": "混合在一起",
                "limit": "【默契值10级】",
                "tips": [
                    "“监督。”",
                    "“啊，啊？”",
                    "“你到底是怎么准确地把我喜欢的和不喜欢的混在一起的？”",
                    "“哦我知道了，打击报复？因为昨天我多用了两瓶萃取液？你也太小气了吧！”",
                    "“……我说这是意外你信么？”",
                    "监督捏紧了手里忘了哪名研究员递给过来的小纸条：",
                    "她喜欢青提奶茶最烦双倍糖和芒果，其他你看着办千万别让她回来找我们求求了监督！"
                ],
                "recipe": [
                    "经典搪瓷杯/航海时代",
                    "青提啵啵奶茶",
                    "双倍糖",
                    "正常冰",
                    "芒果果冻",
                    "菊花"
                ]
            },
            {
                "name": "片刻的安静",
                "limit": "【默契值18级】",
                "tips": [
                    "罗咤难得安静地喝着她喜欢的奶茶。",
                    "这么看的也只是个普通小女孩，和桃子的颜色还挺配的。",
                    "“监督我们来猜拳啊！输了的人把这朵花吃了！”",
                    "——并没有，监督面无表情地背过身，假装自己聋了。"
                ],
                "recipe": [
                    "经典搪瓷杯/航海时代",
                    "桃桃乌龙茶",
                    "正常糖",
                    "少冰",
                    "蜜桃冻",
                    "白玉兰"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "叶子冻"
                ],
                "ex": [371, 415, 453],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干"
                ],
                "ex": [435, 487, 531],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "卡洛琳": {
        "achievement": [
            {
                "name": "卡洛琳的标准",
                "limit": "【默契值1级】",
                "tips": [
                    "“一杯热盐水？也太过无趣了吧，监督！”"
                ],
                "recipe": [
                    "柯林杯",
                    "白开水",
                    "热",
                    "盐",
                    "紫藤"
                ]
            },
            {
                "name": "攻击性极强",
                "limit": "【默契值1级】",
                "tips": [
                    "“无糖芝士奶盖？黄瓜片？快把这环口杯拿走！生活得有多平淡才能接受这种搭配？”"
                ],
                "recipe": [
                    "环口杯",
                    "白桃芝士奶盖",
                    "无糖",
                    "正常冰",
                    "黄瓜片",
                    "迷迭香"
                ]
            },
            {
                "name": "二次创作",
                "limit": "【默契值1级】",
                "tips": [
                    "“乌瑞亚那边是这个口味？那我可要调低对它的评价咯。”",
                    "“这不是挺好喝的？”",
                    "“普通的‘好喝’。”卡洛琳撇了撇嘴，“能把珍珠递给我吗？不二次创作一下，我会无聊死的。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "德里亚德风味花茶",
                    "热",
                    "珍珠",
                    "长匙"
                ]
            },
            {
                "name": "激进分子的自白",
                "limit": "【默契值5级】",
                "tips": [
                    "“您可以再激进一些，光是加了柠檬汁、青提、薄荷叶的薄暮飞行可取悦不了我——太淡了。”"
                ],
                "recipe": [
                    "环口杯",
                    "薄暮飞行",
                    "柠檬汁",
                    "偏淡",
                    "青提",
                    "薄荷叶"
                ]
            },
            {
                "name": "危险发言",
                "limit": "【默契值6级】",
                "tips": [
                    "卡洛琳笑眯眯地用长匙敲了敲玻璃杯口：“如果配方只是五分糖的青提啵啵奶茶加一些芒果果冻的话，我用坩埚也可以做吧？”",
                    "“别！！！！”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "青提啵啵奶茶",
                    "五分糖",
                    "少冰",
                    "芒果果冻",
                    "长匙"
                ]
            },
            {
                "name": "等价交换",
                "limit": "【默契值13级】",
                "tips": [
                    "“帮白荆研发新药当然可以，不过让我想想，像这样的‘额外工作’……我该让你付出些什么，才算等价交换~”",
                    "监督有些紧张地抿着嘴。",
                    "“一杯枸杞菊花茶怎么样？记得多加一份枸杞、一份叶子冻，还要在杯子上插一朵桂花~”",
                    "“就这样？”",
                    "“没错~监督，这可是友情价。要知道，我给欧阳先生的‘报价’可不止这样哦。”"
                ],
                "recipe": [
                    "双层叶纹",
                    "枸杞菊花茶",
                    "枸杞",
                    "叶子冻",
                    "桂花"
                ]
            },
            {
                "name": "神奇之手",
                "limit": "【默契值16级】",
                "tips": [
                    "“一杯正常糖、常温的酒酿凤梨竟有如此丰富的香气？监督，什么时候能让我研究研究你这双神奇之手呢？”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "酒酿凤梨",
                    "正常糖",
                    "常温",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "极夜马戏团",
                    "盐",
                    "偏淡",
                    "蓝莓"
                ],
                "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "莉缇亚": {
        "achievement": [
            {
                "name": "淡粉",
                "limit": "【默契值1级】",
                "tips": [
                    "不知出于什么原因，莉缇亚总是能收到很多粉嫩的礼物。",
                    "也包括今天这杯泛着淡粉色的饮料。"
                ],
                "recipe": [
                    "桃桃乌龙茶",
                    "三分糖",
                    "少冰"
                ]
            },
            {
                "name": "日出之地",
                "limit": "【默契值1级】",
                "tips": [
                    "莉缇亚不会特意去回忆黎威尔的过往，就像她不会特意去迎接曾经的日出。",
                    "“今天加一份青提怎么样？”",
                    "“那请监督再帮我添一些其他的风味吧。顺便今天，我想要那个格纹的杯子。”",
                    "“好啊，给，你的长签。”"
                ],
                "recipe": [
                    "经典格纹",
                    "黎威尔日升",
                    "糖包",
                    "柠檬汁",
                    "青提",
                    "三叶长签"
                ]
            },
            {
                "name": "清凉冰爽",
                "limit": "【默契值4级】",
                "tips": [
                    "偶尔也需要一杯简单的苏打水清凉一下。",
                    "可以考虑加点果冻，再配上一朵小花。"
                ],
                "recipe": [
                    "冰镇苏打水",
                    "少冰",
                    "茶冻",
                    "樱花"
                ]
            },
            {
                "name": "意外的喜好",
                "limit": "【默契值6级】",
                "tips": [
                    "“怎么想到给我点这个？”",
                    "“只是觉得莉缇亚说不定意外不讨厌。”",
                    "莉缇亚笑了笑，拿起一根插签，“那就五分糖，多谢监督。”"
                ],
                "recipe": [
                    "甜牛乳",
                    "五分糖",
                    "常温",
                    "脱脂牛奶",
                    "心形插签"
                ]
            },
            {
                "name": "淑女口味",
                "limit": "【默契值10级】",
                "tips": [
                    "“莉缇亚小姐喜欢这个啊……？”",
                    "“怎么了怎么了看不起恩利都特产是吧，真的很上头，比柠檬咖啡猛多了！”",
                    "“诶怎么还拉踩呢——”",
                    "莉缇亚端着精致的咖啡杯，将所有自以为的悄悄话都听在耳中。",
                    "——接着她又加了几粒盐，拿起了迷迭香。",
                    "“？？？”"
                ],
                "recipe": [
                    "淑女风尚",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "盐",
                    "标准",
                    "迷迭香"
                ]
            },
            {
                "name": "调酒师的故事",
                "limit": "【默契值18级】",
                "tips": [
                    "他们都说这杯酒就像莉缇亚本人一样，温柔又疏离。",
                    "“‘隔着人潮，只望了我一眼’……看起来它的背后有一段浪漫的故事，监督知道么？”",
                    "“这可能就只有调酒师本人才知道了吧……柠檬汁要加点么？”",
                    "“谢谢。”",
                    "她挑起一枚樱桃，将目光投向窗外——太阳快落山了。"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "惑星的艾琳",
                    "柠檬汁",
                    "樱桃",
                    "枫叶"
                ]
            },
            {
                "name": "冬天的味道",
                "limit": "【默契值16级】",
                "tips": [
                    "淡淡的冬天里，一朵樱花飘落在不属于它的季节。",
                    "——“监督，要不要算一算今年的冬天，海临会不会下雪？”"
                ],
                "recipe": [
                    "鎏·金",
                    "银色青松",
                    "盐",
                    "偏淡",
                    "樱花"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻"
                ],
                "ex": [393, 441, 480],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "冰镇苏打水",
                    "少冰",
                    "咸梅干"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "极夜马戏团",
                    "盐",
                    "偏烈",
                    "樱桃"
                ],
                "ex": [504, 564, 615],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "银色青松",
                    "盐",
                    "偏淡"
                ],
                "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "惑星的艾琳",
                    "盐",
                    "樱桃"
                ],
                "ex": [558, 625, 685],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "尚非乐": {
        "achievement": [
            {
                "name": "猫奴……们",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督监督，我不可以喝姜汁可可的！”",
                    "“怎么了？”",
                    "“我家楼下的猫咪不喜欢生姜的味道，一闻到就会逃得远远的……”",
                    "“原来如此……那你还是可以带这枝紫藤走。老板亲测，逗猫一绝。”"
                ],
                "recipe": [
                    "简约至上",
                    "姜汁可可",
                    "热",
                    "糖浆",
                    "珍珠",
                    "紫藤"
                ]
            },
            {
                "name": "好学生",
                "limit": "【默契值1级】",
                "tips": [
                    "“这杯咖啡你真的不尝尝？我已经换成了低因配方，还加了好多香蕉冰淇淋和奶精球，不会让你睡不着的。”",
                    "“不行不行，我明天早八呢！”"
                ],
                "recipe": [
                    "自证方圆",
                    "经典特浓咖啡",
                    "奶精球",
                    "低因",
                    "香蕉冰淇淋",
                    "空心圆匙"
                ]
            },
            {
                "name": "世事难料",
                "limit": "【默契值1级】",
                "tips": [
                    "“我记得你不喝生姜类饮料啊？怎么点了姜茶？”",
                    "“嗯……没关系了……楼下的猫咪和我绝交了呜呜……”",
                    "“……多给你一根水果签，就当是安慰了。”",
                    "“谢谢监督……”"
                ],
                "recipe": [
                    "自证方圆",
                    "姜茶",
                    "正常糖",
                    "常温",
                    "水果签"
                ]
            },
            {
                "name": "了不起的汪",
                "limit": "【默契值5级】",
                "tips": [
                    "“我接元桃桃放学的时候，看到校门口的宣传栏里贴了一封公开信，好像是表彰某个人见义勇为哦——”",
                    "“啊！监督你看到了……嘿嘿……”",
                    "“你做得很棒！今天的阿华田奶茶，我不仅给你放双倍糖，还要再加一份汪汪饼干！”",
                    "“太好啦！”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "阿华田奶茶",
                    "双倍糖",
                    "汪汪饼干",
                    "枫叶"
                ]
            },
            {
                "name": "一眼看破",
                "limit": "【默契值6级】",
                "tips": [
                    "“监督，我上个礼拜考了双百哦~我今天可以选五分糖、加了椰果和菊花的桃桃乌龙茶吗？”",
                    "“这个配方怎么这么熟悉……看来你最近和元桃桃她们玩得很好？”",
                    "“监督你怎么什么都知道？”",
                    "“你以为每天是谁给她准备那么一大桶茶的……”",
                    "“塔师傅？”",
                    "“……倒也没错。”"
                ],
                "recipe": [
                    "自证方圆",
                    "桃桃乌龙茶",
                    "五分糖",
                    "热",
                    "椰果",
                    "菊花"
                ]
            },
            {
                "name": "认生是什么？",
                "limit": "【默契值10级】",
                "tips": [
                    "尚非乐每次放学放得早了，就会跑去R.E.D.门口等昊苍。",
                    "要是赶上昊苍加班的时候，他那望眼欲穿的模样别提有多可怜了——就连最铁面无私的局长看了，也忍不住帮他带一杯冰镇苏打水。",
                    "“伯伯，可以帮我加点柠檬片和咸梅干吗？”",
                    "“……可以。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "冰镇苏打水",
                    "少冰",
                    "咸梅干",
                    "柠檬片"
                ]
            },
            {
                "name": "乐“基”生悲",
                "limit": "【默契值16级】",
                "tips": [
                    "“监督你怎么知道我最喜欢白桃芝士奶盖！熊熊杯也好可爱！”",
                    "“知道啦知道啦，这么兴奋……小心尾巴露出来。”",
                    "“放心！我最近都有好好练习，一定不会露出来的！”",
                    "“这么厉害？那再奖励你一个蝴蝶结——啊，还是露出来了。”",
                    "“呜汪……”"
                ],
                "recipe": [
                    "熊熊杯",
                    "白桃芝士奶盖",
                    "正常糖",
                    "少冰",
                    "蓝莓",
                    "蝴蝶结"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "经典特浓咖啡",
                    "糖浆",
                    "低因",
                    "原味雪顶"
                ],
                "ex": [390, 437, 476],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "茉茉奶绿",
                    "三分糖",
                    "正常冰",
                    "茶冻"
                ],
                "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "桃桃乌龙茶",
                    "五分糖",
                    "正常冰",
                    "茶冻"
                ],
                "ex": [461, 516, 563],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干"
                ],
                "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "刘兄": {
        "achievement": [
            {
                "name": "大俗大雅",
                "limit": "【默契值1级】",
                "tips": [
                    "“沉闷啊，无聊啊，平凡啊——”",
                    "“这是荒诞派文学的诞生之物！”",
                    "“再来一杯，敬庸俗！”",
                    "“监督，你给她喝什么了……这是醉了？”苏筱凑过来，低声问道。",
                    "“……白水兑柠檬汁也会么……”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "白开水",
                    "少冰",
                    "柠檬汁"
                ]
            },
            {
                "name": "有效助眠",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督，恕我直言，就算你插了朵花，也掩盖不了它更招小孩子喜欢。”",
                    "“你的编辑给我发了20条信息，说骗、呃，让你早点睡觉，免得明天颁奖典礼又睡过去。”",
                    "“那牛奶也不用加糖啊，还是热的。”",
                    "“嗯，配合你的喜好，换成了燕麦的。”",
                    "“……”"
                ],
                "recipe": [
                    "经典搪瓷杯/棱纹马克杯",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "燕麦奶",
                    "菊花"
                ]
            },
            {
                "name": "灵感激发",
                "limit": "【默契值1级】",
                "tips": [
                    "异界风味的花茶，激起了刘兄新的创作灵感。",
                    "",
                    "",
                    "“这个伞不错，但是下次别加梅干……啊！我想到了！”刘兄嘴里嘀嘀咕咕，看来明天的连载更新终于有着落了。"
                ],
                "recipe": [
                    "扎啤杯",
                    "德里亚德风味花茶",
                    "常温",
                    "咸梅干",
                    "精致纸伞"
                ]
            },
            {
                "name": "清热败火值得拥有",
                "limit": "【默契值5级】",
                "tips": [
                    "“唉……给我来个最败火的……”",
                    "",
                    "",
                    "——偶尔，畅销书作家也需要养生。"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "枸杞菊花茶",
                    "枸杞",
                    "叶子冻",
                    "银杏叶"
                ]
            },
            {
                "name": "半蓝",
                "limit": "【默契值8级】",
                "tips": [
                    "“由柠檬汁、菠萝汁、苏打水混合柑橘甜酒调制而成……”",
                    "“不喜欢？”",
                    "“没有，你加了点苦味，点睛之笔。”",
                    "“谢谢。”",
                    "“不过水果就有点失败了，再接再厉监督。”",
                    "“……谢谢。”"
                ],
                "recipe": [
                    "海水半蓝",
                    "少冰",
                    "苦味素",
                    "芒果果冻"
                ]
            },
            {
                "name": "最浓的咖啡最长的夜",
                "limit": "【默契值16级】",
                "tips": [
                    "最浓的咖啡，陪伴刘兄熬过最长的夜。",
                    "——结果本人不小心多放了份糖。",
                    "监督沉默了三秒，默默递过一个冰淇淋球，配上一根三叶长签。"
                ],
                "recipe": [
                    "经典搪瓷杯/棱纹马克杯",
                    "经典特浓咖啡",
                    "糖浆",
                    "加双份",
                    "香蕉冰淇淋",
                    "三叶长签"
                ]
            },
            {
                "name": "急寻配方提供者",
                "limit": "【默契值13级】",
                "tips": [
                    "刘兄一直想找到配方的提供者，但是无果。",
                    "他一定是个很有故事的人，说不定可以成为我的下一个灵感。刘兄看着蓝莓在酒杯中静静躺着，又抿了一口。"
                ],
                "recipe": [
                    "航海时代",
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "蓝莓",
                    "银杏叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "恩利都苦啤兑苦咖",
                    "加双份",
                    "苦味素",
                    "少冰"
                ],
                "ex": [390, 436, 476],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "樱桃"
                ],
                "ex": [462, 517, 564],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "经典特浓咖啡",
                    "糖浆",
                    "加双份",
                    "香蕉冰淇淋"
                ],
                "ex": [496, 555, 605],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "龙晴": {
        "achievement": [
            {
                "name": "咚！",
                "limit": "【默契值1级】",
                "tips": [
                    "龙晴不喜欢椰子，因为小时候第一次钻出水面的时候，被刚好落下的椰子砸到了头。"
                ],
                "recipe": [
                    "自证方圆",
                    "好椰拿铁",
                    "奶精球",
                    "低因",
                    "空心圆匙"
                ]
            },
            {
                "name": "养生？可以但没必要",
                "limit": "【默契值1级】",
                "tips": [
                    "“龙晴是不是从一出生就生活在水里啊？”",
                    "“恩，海错都是水嘛！”",
                    "“一直泡在水里不会得关节炎吗？”",
                    "“……你是在问一条鱼会不会得关节炎？”"
                ],
                "recipe": [
                    "自证方圆",
                    "枸杞菊花茶",
                    "杨桃",
                    "叶子冻",
                    "紫藤"
                ]
            },
            {
                "name": "层次感",
                "limit": "【默契值5级】",
                "tips": [
                    "酸酸的草莓中和了双倍糖的甜度，勉强能够入口。"
                ],
                "recipe": [
                    "双莓之恋",
                    "双倍糖",
                    "热",
                    "蜜桃冻"
                ]
            },
            {
                "name": "牛≠豹富",
                "limit": "【默契值6级】",
                "tips": [
                    "“牛奶？那是什么？”",
                    "“牛分泌的乳汁，哺育幼崽的。”",
                    "“牛是什么？”",
                    "“一种食草的大型哺乳动物。”",
                    "“哺乳动物又是什么？”",
                    "“就是……对了，豹富就是哺乳动物。”",
                    "“……”",
                    "“怎么还嫌弃起来了？”"
                ],
                "recipe": [
                    "甜牛乳",
                    "正常糖",
                    "常温",
                    "燕麦奶"
                ]
            },
            {
                "name": "别样体验",
                "limit": "【默契值13级】",
                "tips": [
                    "龙晴喜欢这种火辣辣的感觉，和冰冷的海水是完全不同的体验。"
                ],
                "recipe": [
                    "熊熊杯",
                    "姜茶",
                    "无糖",
                    "常温",
                    "精致纸伞"
                ]
            },
            {
                "name": "不能浪费",
                "limit": "【默契值18级】",
                "tips": [
                    "超级喜欢的桃桃乌龙被做成了最不喜欢的样子，龙晴硬着头皮喝完了。"
                ],
                "recipe": [
                    "桃桃乌龙茶",
                    "正常糖",
                    "正常冰",
                    "椰果"
                ]
            },
            {
                "name": "湛蓝的故乡",
                "limit": "【默契值16级】",
                "tips": [
                    "湛蓝的水波上漂浮着晶莹的浮冰，让龙晴想起了遥远的故乡。"
                ],
                "recipe": [
                    "简约至上",
                    "海水半蓝",
                    "多冰",
                    "芒果果冻",
                    "枫叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "叶子冻"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "奶油芭蕾",
                    "加双份",
                    "正常",
                    "全脂牛奶"
                ],
                "ex": [454, 509, 555],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "珑": {
        "achievement": [
            {
                "name": "卦象",
                "limit": "【默契值1级】",
                "tips": [
                    "“今日卦象，宜清水，宜温热，宜酸。”",
                    "“……这也行？”"
                ],
                "recipe": [
                    "鎏·金",
                    "白开水",
                    "热",
                    "柠檬汁",
                    "樱花"
                ]
            },
            {
                "name": "万事可赌",
                "limit": "【默契值13级】",
                "tips": [
                    "“为什么我一把这杯熊熊燕麦牛奶端上来，邻座的员工就哀嚎着吞了一整杯酒。”",
                    "“方才小执行官不在，我与那人开了个小小赌约。若是你加了整颗布丁，便算他输。”",
                    "“这也可以赌……”",
                    "“闲着也是闲着。”"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "焦糖布丁",
                    "薄荷叶"
                ]
            },
            {
                "name": "新品追加",
                "limit": "【默契值1级】",
                "tips": [
                    "“我虽不善酒力，但这一杯蜂蜜啤酒实是有些滋味，该让卯卯、绒绒加在茶楼的菜单上。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "蜂蜜啤酒",
                    "少冰",
                    "偏淡",
                    "水果签"
                ]
            },
            {
                "name": "有效体验",
                "limit": "【默契值1级】",
                "tips": [
                    "“我记得这是你第一次喝姜汁可可。你可以先闻一下，接受不了的话，可以不喝。”",
                    "“无妨，我会喝的。经历有好有坏，总好过一片空白，不是吗？”"
                ],
                "recipe": [
                    "经典格纹",
                    "姜汁可可",
                    "热",
                    "椰浆",
                    "三叶长签"
                ]
            },
            {
                "name": "幸运儿",
                "limit": "【默契值10级】",
                "tips": [
                    "“除了口味，听闻青草薄荷还以其清新的颜色而知名，交予我手着实有些可惜了。”",
                    "“不过色盲总好过心盲。在黑曜，我已是极幸运之人。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "青草薄荷",
                    "多冰",
                    "偏烈",
                    "青梅",
                    "白玉兰"
                ]
            },
            {
                "name": "前尘忽至",
                "limit": "【默契值16级】",
                "tips": [
                    "“怎么了？是这杯桂圆红枣茶味道不正吗？”",
                    "“……只是忽然想起旒珠大人也颇为喜爱此物。”"
                ],
                "recipe": [
                    "经典格纹",
                    "桂圆红枣茶",
                    "五分糖",
                    "少冰",
                    "青梅",
                    "蝴蝶结"
                ]
            },
            {
                "name": "异世五彩",
                "limit": "【默契值18级】",
                "tips": [
                    "珑看着杯中花茶，喃喃说道：“愿另一个世界的我尽览世间五彩。”"
                ],
                "recipe": [
                    "鎏·金",
                    "德里亚德风味花茶",
                    "常温",
                    "咸梅干",
                    "精致纸伞"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "姜茶",
                    "五分糖",
                    "热"
                ],
                "ex": [512, 573, 625],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "咸梅干"
                ],
                "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "言御": {
        "achievement": [
            {
                "name": "“旧事”重提",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督，我可不是我妹妹。”言御将面前盛着热牛奶的杯子推远了些。",
                    "“这样啊，‘甜蜜幻境’。”",
                    "“……说好了不提了。”"
                ],
                "recipe": [
                    "自证方圆",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "全脂牛奶",
                    "经典长签"
                ]
            },
            {
                "name": "喜恶分明",
                "limit": "【默契值1级】",
                "tips": [
                    "“不爱喝酒？”",
                    "“嗯。”言御看了看，“而且还是……甜的。”",
                    "“只加了一点点蜂蜜啦。”"
                ],
                "recipe": [
                    "简约至上",
                    "蜂蜜啤酒",
                    "正常冰",
                    "偏烈",
                    "三叶长签"
                ]
            },
            {
                "name": "名字欺诈",
                "limit": "【默契值5级】",
                "tips": [
                    "言御今天显得格外的沉默，一口接一口啜饮着竹节茶杯里的液体。",
                    "“等下！你在喝酒！”",
                    "“？”言御眯起了眼，“……可是它叫干苹果。”",
                    "“也有威士忌啦！”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "干苹果",
                    "少冰",
                    "偏淡",
                    "奇异果片",
                    "柠檬片"
                ]
            },
            {
                "name": "“同道中人”",
                "limit": "【默契值4级】",
                "tips": [
                    "“……想喝什么？”",
                    "“咖啡吧。加双份浓缩液。”言御揉了揉太阳穴，“等会儿还要去加班。”",
                    "“哈、哈，我等会也……唉，算了，我也来一杯吧。”",
                    "两人不约而同地叹了口气。"
                ],
                "recipe": [
                    "自证方圆",
                    "经典特浓咖啡",
                    "糖浆",
                    "加双份",
                    "原味雪顶",
                    "白玉兰"
                ]
            },
            {
                "name": "有话直说",
                "limit": "【默契值18级】",
                "tips": [
                    "“言先生，你也不希望我把你用熊熊杯的可爱照片传到Chatmore吧？”",
                    "“……你想做什么？”",
                    "“咳，我们在伊南纳有个援助建立信息基站的项目出了点技术问题，想让你帮忙看看。”",
                    "“……监督，这种事，直说就可以了。”",
                    "“直说……这不符合某人的风格吧~”",
                    "“咳。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "冰镇酸梅汤",
                    "三分糖",
                    "蜜桃冻",
                    "迷迭香"
                ]
            },
            {
                "name": "反将一军",
                "limit": "【默契值6级】",
                "tips": [
                    "“听说白毛猫猫中听不见的比例格外高呢。”",
                    "“监督，你刚刚说什么？”",
                    "“……没什么。”",
                    "看着监督狐疑的表情，言御端起雪梨汁满足地喝了一口。"
                ],
                "recipe": [
                    "简约至上",
                    "鲜榨雪梨汁",
                    "常温",
                    "椰果",
                    "精致纸伞"
                ]
            },
            {
                "name": "变化……？",
                "limit": "【默契值1级】",
                "tips": [
                    "“你知道你妹妹也很爱喝薄荷蜜柚苏打吗？”",
                    "“当然。”",
                    "“啊？你知道？可是她说——”",
                    "“最近刚知道的——从‘甜蜜幻境’出来后。说起来，还要多谢监督。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "薄荷蜜柚苏打",
                    "少冰",
                    "叶子冻",
                    "银杏叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "薄荷蜜柚苏打",
                    "常温",
                    "叶子冻"
                ],
                "ex": [540, 604, 659],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "鲜榨雪梨汁",
                    "常温",
                    "椰果"
                ],
                "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "玻璃橘子",
                    "少冰",
                    "芒果果冻"
                ],
                "ex": [558, 625, 682],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "紫都": {
        "achievement": [
            {
                "name": "人生百味",
                "limit": "【默契值4级】",
                "tips": [
                    "又冰又苦又咸，紫都看着这杯神奇的饮料眨了眨眼。",
                    "“这就是路遥感受到的人生的味道么？”",
                    "“……至少我不会放盐！”"
                ],
                "recipe": [
                    "环口杯",
                    "恩利都苦啤兑苦咖",
                    "正常冰",
                    "盐",
                    "标准"
                ]
            },
            {
                "name": "冬日暖阳",
                "limit": "【默契值8级】",
                "tips": [
                    "冬日、落雪、透过叶间洒下的阳光……这就是紫都在初尝这杯饮品的想到的。",
                    "“下次调味可以试试不这么浓烈，不过小监督蘸盐的手法意外的熟练啊……”她笑着说。"
                ],
                "recipe": [
                    "银色青松",
                    "盐",
                    "偏烈"
                ]
            },
            {
                "name": "感恩的心",
                "limit": "【默契值5级】",
                "tips": [
                    "“这个辛西亚的标志还是当初路遥亲手画的呢。小朋友们都特别喜欢，围着路遥打转了好久还要带着他绕海临跑一圈，当然，他最后拼命地拒绝了。”",
                    "“啊就用那个直筒杯就可以，再加点冰和糖，多谢小监督~”"
                ],
                "recipe": [
                    "柯林杯",
                    "鹿鹿冻柠茶",
                    "三分糖",
                    "多冰"
                ]
            },
            {
                "name": "浪漫之都的记忆",
                "limit": "【默契值10级】",
                "tips": [
                    "浪漫之都蒂尔莫最为著名的饮品之一，通过调制可以打造特殊的“苦感”，让人欲罢不能。",
                    "“可以再帮我加些装饰么？”"
                ],
                "recipe": [
                    "沉金记忆",
                    "无糖",
                    "苦味素",
                    "紫藤"
                ]
            },
            {
                "name": "相约团建",
                "limit": "【默契值6级】",
                "tips": [
                    "再普通不过的玻璃杯也会被杯中的酒染上一层模糊的颜色。",
                    "“马戏表演呀……那要不要找机会鹿路运输和白荆科技一起出门团建下？听说有个马戏团的巡回表演下一站就是海临。”",
                    "“好啊，给，你的樱桃。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "极夜马戏团",
                    "偏烈",
                    "樱桃"
                ]
            },
            {
                "name": "暮色飞行",
                "limit": "【默契值18级】",
                "tips": [
                    "“……确定要放冰淇淋？”",
                    "“再配上一片叶子吧。”",
                    "“……已经加了很多调味了，不然……”",
                    "“看名字，不多加点怎么体验飞行的感觉。”",
                    "“我觉得重点不在这里……”"
                ],
                "recipe": [
                    "双层叶纹",
                    "薄暮飞行",
                    "柠檬汁",
                    "偏淡",
                    "草莓冰淇淋",
                    "枫叶"
                ]
            },
            {
                "name": "来自乌瑞亚的她",
                "limit": "【默契值16级】",
                "tips": [
                    "紫都偶尔会提起在乌瑞亚时的见闻，每逢这时，她总是安静端着一杯花茶坐在窗边。",
                    "看着玻璃杯叶纹折射出的七彩阳光，紫都抬起手——又加了一小块叶子冻。",
                    "“诶等茶是r——”"
                ],
                "recipe": [
                    "双层叶纹",
                    "德里亚德风味花茶",
                    "热",
                    "叶子冻",
                    "桂花"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "疏帘淡月",
                    "五分糖",
                    "热"
                ],
                "ex": [474, 531, 579],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "德里亚德风味花茶",
                    "热",
                    "茶冻"
                ],
                "ex": [620, 695, 758],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "芙蕖": {
        "achievement": [
            {
                "name": "健康管理",
                "limit": "【默契值1级】",
                "tips": [
                    "怎么，偶像更需要注意身体。"
                ],
                "recipe": [
                    "姜茶",
                    "常温"
                ]
            },
            {
                "name": "“控制摄入”",
                "limit": "【默契值1级】",
                "tips": [
                    "“唔……如笙姐姐让我控制咖啡因的摄入。”",
                    "“那好吧我们——”",
                    "“不过偶尔一次没关系，可以加一份奶精球、一份雪顶么？”",
                    "“……好。”"
                ],
                "recipe": [
                    "鎏·金/青叶陶瓷杯",
                    "经典特浓咖啡",
                    "奶精球",
                    "低因",
                    "原味雪顶",
                    "白玉兰"
                ]
            },
            {
                "name": "鲜榨果汁",
                "limit": "【默契值1级】",
                "tips": [
                    "一杯鲜榨果汁，偷偷加上几颗珍珠。",
                    "芙蕖经常这么浑水摸鱼，装作自己非常健康生活。"
                ],
                "recipe": [
                    "经典格纹",
                    "鲜榨雪梨汁",
                    "常温",
                    "珍珠",
                    "水果签"
                ]
            },
            {
                "name": "绝配",
                "limit": "【默契值10级】",
                "tips": [
                    "“云中桂影……真好听。唉，我就起不出来，每次写歌最后都会在歌名上犹豫不决。”",
                    "芙蕖用圆匙舀了口冰淇淋，接着像是想起什么又拿起小饼干。",
                    "“监督，我听说它们是绝妙组合，像不像我和司危？”"
                ],
                "recipe": [
                    "经典格纹/鎏·金",
                    "云中桂影",
                    "香蕉冰淇淋",
                    "汪汪饼干",
                    "空心圆匙"
                ]
            },
            {
                "name": "片刻沉溺",
                "limit": "【默契值5级】",
                "tips": [
                    "一杯拿铁，送给在舞台上努力发光的人。"
                ],
                "recipe": [
                    "鎏·金",
                    "好椰拿铁",
                    "奶精球",
                    "低因",
                    "心形插签"
                ]
            },
            {
                "name": "副业兴隆",
                "limit": "【默契值16级】",
                "tips": [
                    "“这是有熊推出的配方？”",
                    "芙蕖看着饼干慢慢泡软在牛奶里，慢慢喝了一口。",
                    "“怎么样？”",
                    "“唔！感觉有一天资金周转不灵，靠这个都可以迎来事业第二春。”芙蕖将装饰品放在一旁，又喝了一口。"
                ],
                "recipe": [
                    "鎏·金",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "汪汪饼干",
                    "迷迭香"
                ]
            },
            {
                "name": "你知我知",
                "limit": "【默契值18级】",
                "tips": [
                    "“……你确定要加这么多东西么？”监督犹豫地将长签插入杯中，将满满一杯加料巧克力热饮递了过去。",
                    "“……没、没关系。监督你千万千万，别告诉如笙姐姐。”",
                    "没关系，体重秤会告诉她的……监督沉默。"
                ],
                "recipe": [
                    "淑女风尚",
                    "巧克力风暴",
                    "草莓冰淇淋",
                    "焦糖布丁",
                    "三叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "叶子冻"
                ],
                "ex": [445, 498, 543],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "汪汪饼干"
                ],
                "ex": [510, 571, 622],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "巧克力风暴",
                    "草莓冰淇淋",
                    "汪汪饼干"
                ],
                "ex": [534, 598, 652],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "苏筱": {
        "achievement": [
            {
                "name": "改良配方实验员",
                "limit": "【默契值1级】",
                "tips": [
                    "“你明知道我不喜欢这个。”",
                    "“老师说了，他改良了一下姜汁和可可的比例，还加了些椰浆和珍珠丰富口感。”",
                    "“更黑暗了好吧？？姜汁和可可从根本上就不应该出现在一起！！”",
                    "“唉~尊重每一杯饮品的自然发展~请吧——”"
                ],
                "recipe": [
                    "姜汁可可",
                    "热",
                    "椰浆",
                    "珍珠"
                ]
            },
            {
                "name": "半糖主义",
                "limit": "【默契值1级】",
                "tips": [
                    "“感冒了？给。”",
                    "苏筱晕晕乎乎地看着面前的茶水，不情愿地问了句，“放糖了么……”",
                    "“只能喝半糖。”",
                    "“好吧……”"
                ],
                "recipe": [
                    "姜茶",
                    "五分糖",
                    "热"
                ]
            },
            {
                "name": "经典凤梨",
                "limit": "【默契值1级】",
                "tips": [
                    "经典酒酿凤梨，区别只在于容器、糖分和冰块。",
                    "哦，还有装饰品。"
                ],
                "recipe": [
                    "柯林杯",
                    "酒酿凤梨",
                    "七分糖",
                    "多冰",
                    "经典长签"
                ]
            },
            {
                "name": "养生与享乐",
                "limit": "【默契值1级】",
                "tips": [
                    "“有没有什么可以让我更快写出来论文的办法……救命啊……”",
                    "“没有，但是提前养生可以让你有更多时间写论文。”",
                    "“……我要加杨桃和叶子冻！”",
                    "“好好。”"
                ],
                "recipe": [
                    "柯林杯",
                    "枸杞菊花茶",
                    "杨桃",
                    "叶子冻",
                    "樱花"
                ]
            },
            {
                "name": "接近一比一还原",
                "limit": "【默契值6级】",
                "tips": [
                    "“说起来德里亚德风味到底是用什么还原出来的？”",
                    "“你还是去问本人吧。”",
                    "“唉……我做实验的时候也能一比一还原就好了……”"
                ],
                "recipe": [
                    "柯林杯",
                    "德里亚德风味花茶",
                    "常温",
                    "蜜桃冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "马戏团",
                "limit": "【默契值13级】",
                "tips": [
                    "“马戏团？说起来岚岚上次还说什么时候和她一起去看她的马戏团同伴表演呢。”",
                    "“今天的有点烈，还蘸了盐，你慢点喝。”",
                    "“有长签么？我想吃片奇异果~”"
                ],
                "recipe": [
                    "双层叶纹",
                    "极夜马戏团",
                    "盐",
                    "偏烈",
                    "奇异果片",
                    "五叶长签"
                ]
            },
            {
                "name": "最可爱的饮料",
                "limit": "【默契值1级】",
                "tips": [
                    "“唉，真是可爱的饮料，可爱又好喝。”",
                    "“你也可以发明一个‘白荆柠檬茶’之类的？”",
                    "“鹿头是可爱的，白荆科技的树怎么看都……”",
                    "“可以用sweeper，老板，唔……豹富也行？你去说他一定会同意你使用他的肖像权的。”"
                ],
                "recipe": [
                    "柯林杯",
                    "鹿鹿冻柠茶",
                    "双倍糖",
                    "多冰",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "鹿鹿冻柠茶",
                    "五分糖",
                    "正常冰"
                ],
                "ex": [475, 532, 580],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白桃芝士奶盖",
                    "五分糖",
                    "正常冰",
                    "奇异果片"
                ],
                "ex": [503, 563, 614],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "阳铃": {
        "achievement": [
            {
                "name": "将错就错",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督老师……你刚刚好像多放了一份苦味素……”",
                    "“……”",
                    "监督拿着手里笔直的玻璃杯，犹豫了一会，放了颗青提进去。"
                ],
                "recipe": [
                    "柯林杯",
                    "惑星的艾琳",
                    "苦味素",
                    "青提"
                ]
            },
            {
                "name": "创始人的“传奇”",
                "limit": "【默契值1级】",
                "tips": [
                    "“……小幺，你尝一口……？”",
                    "“小幺你怎么了小幺！”",
                    "“……”第1892个被曲观玄特制饮品打败的人出现了，哦是动物。",
                    "看来冰块奶精果冻也救不了它……"
                ],
                "recipe": [
                    "姜汁可可",
                    "多冰",
                    "奶精球",
                    "咖啡冻"
                ]
            },
            {
                "name": "提升记忆力",
                "limit": "【默契值13级】",
                "tips": [
                    "“好困…………”",
                    "“给，牛奶，给你换成了燕麦的。”",
                    "“蝴蝶结好可爱……唔，监督老师！它能增强我的记忆力么！”",
                    "“呃……睡个好觉可能也算？”"
                ],
                "recipe": [
                    "环口杯",
                    "甜牛乳",
                    "无糖",
                    "常温",
                    "燕麦奶",
                    "蝴蝶结"
                ]
            },
            {
                "name": "有求必应",
                "limit": "【默契值8级】",
                "tips": [
                    "普通玻璃杯装满浓郁的巧克力，希望品尝到的人能有甜蜜的一天。",
                    "“监督老师，请给我加一份雪顶，还有一份珍珠！”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "巧克力风暴",
                    "咖啡雪顶",
                    "珍珠",
                    "五叶长签"
                ]
            },
            {
                "name": "奶油芭蕾",
                "limit": "【默契值13级】",
                "tips": [
                    "“诶诶诶小幺你别往奶油里扑呀！”",
                    "当阳铃把小幺从咖啡和鲜奶油中拯救出来时，小幺已经把薄荷叶塞到了嘴里。",
                    "——一秒之后，吐了出来。"
                ],
                "recipe": [
                    "环口杯",
                    "奶油芭蕾",
                    "脱脂牛奶",
                    "正常",
                    "加双份",
                    "薄荷叶"
                ]
            },
            {
                "name": "“你的眼睛”",
                "limit": "【默契值16级】",
                "tips": [
                    "阳铃听说这杯饮料很像自己的眼睛。",
                    "她端起环口杯对着窗子，阳光让她不由得眯了眯眼睛。",
                    "真好看。",
                    "她喝了一口，想到了大海。",
                    "“监督老师，我们去海边散步吧！”"
                ],
                "recipe": [
                    "环口杯",
                    "海水半蓝",
                    "少冰",
                    "盐",
                    "茶冻",
                    "长匙"
                ]
            },
            {
                "name": "注意措辞",
                "limit": "【默契值18级】",
                "tips": [
                    "“好香的味道，监督老师你煮了什么？”",
                    "“花茶，唔，要加点什么么，不过加水果冻的话可能会化掉。”",
                    "“没关系，请再给我烧一根香！”",
                    "“？？？”监督震惊了片刻反应过来，缓缓拿出了迷迭香。"
                ],
                "recipe": [
                    "环口杯",
                    "德里亚德风味花茶",
                    "热",
                    "蜜桃冻",
                    "迷迭香"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "甜牛乳",
                    "无糖",
                    "常温",
                    "全脂牛奶"
                ],
                "ex": [385, 431, 470],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "青提啵啵奶茶",
                    "五分糖",
                    "少冰",
                    "椰果"
                ],
                "ex": [420, 470, 512],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "椰果"
                ],
                "ex": [470, 526, 574],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "茶冻"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "元桃桃": {
        "achievement": [
            {
                "name": "经典，有经典的道理",
                "limit": "【默契值1级】",
                "tips": [
                    "熬夜必备，白荆科技年度最受欢迎的朴实无华饮品！",
                    "当然了，元桃桃觉得太苦了，还害怕睡不着觉。",
                    "“再加点！再加点！”"
                ],
                "recipe": [
                    "经典特浓咖啡",
                    "糖包",
                    "低因",
                    "草莓冰淇淋"
                ]
            },
            {
                "name": "拒绝白开水",
                "limit": "【默契值1级】",
                "tips": [
                    "“我能——”",
                    "“你不能。”",
                    "元桃桃捂着牙，哀怨地看着面前的玻璃杯。",
                    "“那随便加点什么东西调味吧求求你了监督——”",
                    "“好，你说的。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "白开水",
                    "多冰",
                    "柠檬汁"
                ]
            },
            {
                "name": "好孩子奖励？",
                "limit": "【默契值1级】",
                "tips": [
                    "好孩子的标准睡前奖励，但是元桃桃坚持要甜的。",
                    "“……你还要加冰？”",
                    "“还要换点新花样！”"
                ],
                "recipe": [
                    "甜牛乳",
                    "正常糖",
                    "正常冰",
                    "燕麦奶"
                ]
            },
            {
                "name": "早年养生",
                "limit": "【默契值13级】",
                "tips": [
                    "元桃桃最害怕的几样饮品之一——只是凑近金属杯口闻一闻都让她觉得整个人养生了起来。",
                    "“这里面红红绿绿的是什么……？”",
                    "“是你的健康。”"
                ],
                "recipe": [
                    "环口杯",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "咸梅干"
                ]
            },
            {
                "name": "白桃猎人",
                "limit": "【默契值10级】",
                "tips": [
                    "没有任何一杯白桃饮料能逃过元桃桃。",
                    "没有任何一份芝士奶盖能逃过元桃桃。",
                    "“所以为什么要在这里加西瓜？”",
                    "“哎呀试试嘛，几分糖什么冰记住了么？”"
                ],
                "recipe": [
                    "白桃芝士奶盖",
                    "七分糖",
                    "多冰",
                    "西瓜"
                ]
            },
            {
                "name": "唯一的茶",
                "limit": "【默契值18级】",
                "tips": [
                    "元桃桃唯一喜欢的“茶”，即便是不加糖、不加冰她也可以忍受。",
                    "“但是至少不要在里面加冻冻！化了啊啊啊啊！”"
                ],
                "recipe": [
                    "桃桃乌龙茶",
                    "无糖",
                    "热",
                    "茶冻"
                ]
            },
            {
                "name": "双子星之恋",
                "limit": "【默契值16级】",
                "tips": [
                    "“监督监督监督监督监督联动新品上了啊啊啊啊啊啊！”",
                    "“……给给给你的点单，所有要加的都加上了，下、不、为、例。”",
                    "“哇好漂亮的花！谢谢监督~”"
                ],
                "recipe": [
                    "柯林杯/双层叶纹",
                    "双莓之恋",
                    "五分糖",
                    "正常冰",
                    "蜜桃冻",
                    "樱花"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨",
                    "正常糖",
                    "正常冰"
                ],
                "ex": [472, 529, 576],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "青提啵啵奶茶",
                    "正常糖",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [528, 591, 644],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "双莓之恋",
                    "正常糖",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "长谣": {
        "achievement": [
            {
                "name": "气泡消失术",
                "limit": "【默契值1级】",
                "tips": [
                    "“唔……谣谣想要一杯没有那么多气泡的凉凉的有点咸咸的苏打水！”",
                    "“怎么这么多定语……”",
                    "“还想要圆圆的长匙装饰！”",
                    "“那又是什么……”"
                ],
                "recipe": [
                    "简约至上/竹节茶杯",
                    "薄荷蜜柚苏打",
                    "多冰",
                    "咸梅干",
                    "圆匙"
                ]
            },
            {
                "name": "好椰好耶",
                "limit": "【默契值1级】",
                "tips": [
                    "椰子风味加倍的独特饮品，不过小孩子最好还是注意咖啡因的摄入量。"
                ],
                "recipe": [
                    "好椰拿铁",
                    "椰浆",
                    "低因"
                ]
            },
            {
                "name": "怪味可可",
                "limit": "【默契值5级】",
                "tips": [
                    "普通的茶杯里是不普通的甜味饮品。",
                    "或许不只是甜味，还有生姜和椰子的味道……"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜汁可可",
                    "多冰",
                    "椰浆"
                ]
            },
            {
                "name": "咖啡还是巧克力？",
                "limit": "【默契值1级】",
                "tips": [
                    "明明是巧克力，却是满满的咖啡味……",
                    "长谣还说想要一个小装饰，但是却拒绝透露具体想要什么。",
                    "“猜小孩子的心思也是大人的工作嘛。”"
                ],
                "recipe": [
                    "简约至上/竹节茶杯",
                    "巧克力风暴",
                    "咖啡雪顶",
                    "咖啡冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "到底甜不甜",
                "limit": "【默契值16级】",
                "tips": [
                    "当长谣被问起到底是更喜欢柚子还是更喜欢雪顶时，她沉默了很久才抬起头，说了句看似风马牛不相及的话。",
                    "“不会又是无糖吧。”"
                ],
                "recipe": [
                    "柚柚切颗NOW",
                    "无糖",
                    "原味雪顶"
                ]
            },
            {
                "name": "实现熊熊自由",
                "limit": "【默契值18级】",
                "tips": [
                    "最喜欢的杯子装搭配最喜欢的饮品，再配上一枚蝴蝶结吧。",
                    "“谣谣其实不太喜欢饮料里面加奇怪的东西，但是这次就算啦。”",
                    "“那块饼干明明是你自己偷偷放进去的。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "熊熊燕麦牛奶",
                    "燕麦奶",
                    "汪汪饼干",
                    "蝴蝶结"
                ]
            },
            {
                "name": "普通冻柠茶",
                "limit": "【默契值1级】",
                "tips": [
                    "鹿路运输的标志随着冰块沉浮，长谣拿起一片枫叶——",
                    "插在了辛西亚头上。"
                ],
                "recipe": [
                    "简约至上/竹节茶杯",
                    "鹿鹿冻柠茶",
                    "五分糖",
                    "正常冰",
                    "枫叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨/鹿鹿冻柠茶",
                    "五分糖",
                    "少冰"
                ],
                "ex": [399, 447, 487],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "白桃芝士奶盖",
                    "五分糖",
                    "少冰",
                    "青提"
                ],
                "ex": [411, 460, 502],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "柚柚切颗NOW",
                    "五分糖",
                    "原味雪顶"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "提提亚": {
        "achievement": [
            {
                "name": "口味变化",
                "limit": "【默契值4级】",
                "tips": [
                    "“哈嘶哈嘶哈嘶，介也太辣了……”",
                    "监督疑惑地看了看面前的姜汁可可。",
                    "“你不是说你生活的那个小镇口味还挺重的？”",
                    "“口能是我在乐园岛生活了太久，已经扑习惯吃这些了……”",
                    "“……那我给你多加点冰。”",
                    "“害要焦糖布丁。”",
                    "“好好好。”"
                ],
                "recipe": [
                    "柯林杯",
                    "姜汁可可",
                    "多冰",
                    "糖浆",
                    "焦糖布丁",
                    "精致纸伞"
                ]
            },
            {
                "name": "珍贵之物",
                "limit": "【默契值13级】",
                "tips": [
                    "在乐园岛上，淡水的地位颇为重要。",
                    "即便提提亚并不喜欢它，她仍会喝得一滴不剩。"
                ],
                "recipe": [
                    "环口杯",
                    "白开水",
                    "常温",
                    "柠檬汁",
                    "迷迭香"
                ]
            },
            {
                "name": "憧憬",
                "limit": "【默契值1级】",
                "tips": [
                    "“真的是枸杞菊花茶啊。”提提亚好奇地看着杯中浮沉的黄瓜片。",
                    "“你怎么一副没见过的样子？”",
                    "“就是没见过啊……”",
                    "“没见过，你为什么会点它？”",
                    "“……他们说刑狱长大人很喜欢喝来着……”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "茶冻",
                    "心形插签"
                ]
            },
            {
                "name": "酒量培养",
                "limit": "【默契值1级】",
                "tips": [
                    "“甜甜的~再来一杯！”",
                    "“酒酿凤梨虽然甜甜的，但是度数蛮高的。你小心些，别喝醉了。”",
                    "“放心啦，执行官大人，我的酒量还不错呢~”提提亚将空杯子往监督面前又推了推，“从我记事起，我爷爷就会用叉子沾酒给我尝尝呢。”",
                    "“……怎么蒂尔莫的老人家也这样啊！！”"
                ],
                "recipe": [
                    "双层叶纹",
                    "酒酿凤梨",
                    "双倍糖",
                    "少冰",
                    "紫藤"
                ]
            },
            {
                "name": "新朋友",
                "limit": "【默契值10级】",
                "tips": [
                    "对于提提亚的来访，不少白荆科技的员工都感到了一丝不自在。",
                    "“那可是乐园岛的狱警诶？”",
                    "“不会又是来抓监督的吧？”",
                    "“你为什么要说又啊！”",
                    "但也有人对此毫不在意。",
                    "“三点了！该喝下午茶了！为了庆祝元桃桃大人期中测验及格，每个人都可以来前台拿一杯青提啵啵奶茶哦~”元桃桃挑了挑下巴，“包括你。”",
                    "“我吗？”提提亚眨巴眨巴眼，“好、好啊。”",
                    "“……这就是小学生的社交力吗？”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "青提啵啵奶茶",
                    "正常糖",
                    "热",
                    "椰果",
                    "柠檬片"
                ]
            },
            {
                "name": "感同身受",
                "limit": "【默契值16级】",
                "tips": [
                    "“提提亚……提提亚……M469！”",
                    "“到！”",
                    "“你写什么写得这么努力？玻璃橘子里的冰块都化光了。”",
                    "“是工作日志。狱警出访别地，不仅要记录每一项行程安排，每天还要上交一篇思想报告，”提提亚用额头抵着桌面，“呜……我讨厌文书工作。”",
                    "“……同感。”"
                ],
                "recipe": [
                    "柯林杯",
                    "玻璃橘子",
                    "正常冰",
                    "芒果果冻",
                    "空心圆匙"
                ]
            },
            {
                "name": "所谓秩序",
                "limit": "【默契值18级】",
                "tips": [
                    "“我听说，Binary Star的两位来自一个很特别的异世界。”",
                    "“是的，‘艾达’。那里秩序极度严格，就像是一座被无限放大的囚笼。”",
                    "“可秩序本身有什么错呢？就像我的钥匙，既能锁住罪人，也能放跑囚犯。”提提亚举起了面前的双莓之恋，“错的，向来都是人。”"
                ],
                "recipe": [
                    "双层叶纹",
                    "双莓之恋",
                    "七分糖",
                    "常温",
                    "珍珠",
                    "空心圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "桃桃乌龙茶",
                    "正常糖",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "拉波": {
        "achievement": [
            {
                "name": "简与繁",
                "limit": "【默契值13级】",
                "tips": [
                    "“好吵闹。”",
                    "“我没在说话？”",
                    "“我是指这杯白桃芝士奶盖一还有这一堆小料————吵到我的眼晴了。”"
                ],
                "recipe": [
                    "淑女风尚",
                    "白桃芝士奶盖",
                    "双倍糖",
                    "多冰",
                    "青提",
                    "白玉兰"
                ]
            },
            {
                "name": "罪与罚",
                "limit": "【默契值1级】",
                "tips": [
                    "“我在乐园岛的文件里没有看到你的认罪书？”",
                    "“他们是强制逮捕我的。时至今日，我也不认为我的所作所为是一种罪行。”",
                    "监督将加了青梅的黑月亮推向拉波，神色平和，言语却尖锐。",
                    "“哦？以我对你的了解，若你真觉得自己无罪，又怎么会老老实实在乐园岛认罚？”",
                    "“罚？那可是我的乐园。”"
                ],
                "recipe": [
                    "经典格纹",
                    "黑月亮",
                    "少冰",
                    "盐",
                    "青梅",
                    "水果签"
                ]
            },
            {
                "name": "声与形",
                "limit": "【默契值1级】",
                "tips": [
                    "“我听到了微风吹拂树叶的声音…你在准备玻璃橘子？”",
                    "“静物也能被你听到？”",
                    "“我只是听到了你的思绪————你准备不同的饮品时，思考的声音也不尽相同。”",
                    "“白荆可有54种饮品啊。”",
                    "“听得多了，自然能分辨出来。”"
                ],
                "recipe": [
                    "鎏·金",
                    "玻璃橘子",
                    "少冰",
                    "叶子冻",
                    "迷迭香"
                ]
            },
            {
                "name": "黑与白",
                "limit": "【默契值10级】",
                "tips": [
                    "“我看了你的档案，你似乎乐于从经历复杂的人中挑选受害者————为什么？”",
                    "“污染一杯白水有什么意思？将坚石雕琢成形才更有成就感。”",
                    "“太恶劣了……”",
                    "监督不由地将手伸向盐罐，整瓶倒进了陶瓷杯中。"
                ],
                "recipe": [
                    "青叶陶瓷杯",
                    "白开水",
                    "常温",
                    "盐",
                    "圆匙"
                ]
            },
            {
                "name": "智与愚",
                "limit": "【默契值1级】",
                "tips": [
                    "“现在已经20点了。你还要双倍浓缩的咖啡吗？”",
                    "“比起愚钝的昏沉，我宁愿成为永久的理智的囚徒。”",
                    "“特默里恩人讲话怎么都有点咏叹调的感觉……”"
                ],
                "recipe": [
                    "经典格纹",
                    "经典特浓咖啡",
                    "糖包",
                    "加双份",
                    "原味雪顶",
                    "蝴蝶结"
                ]
            },
            {
                "name": "问与答",
                "limit": "【默契值6级】",
                "tips": [
                    "“你在看什么？这次的外勤报告吗？怎么样，你现在还相信你的协作外派计划对我们这些囚徒是有意义的吗？”",
                    "“是的。”",
                    "“为什么？”",
                    "“因为你开始在乎这个问题的答案。”",
                    "“…………………………………………………………呵。”",
                    "拉波转动着手里的干苹果，难得没有反驳。"
                ],
                "recipe": [
                    "鎏·金",
                    "干苹果",
                    "正常冰",
                    "偏烈",
                    "奇异果片",
                    "空心圆匙"
                ]
            },
            {
                "name": "我与你",
                "limit": "【默契值13级】",
                "tips": [
                    "————任何一段关系终将走向结束。",
                    "————但是，作品，哦，我的作品，自诞生既已永恒。",
                    "拉波浅抿了一口手中的咖啡，目光随着吧台后忙碌的监督而动。",
                    "————愿你永恒。"
                ],
                "recipe": [
                    "淑女风尚",
                    "惑星的艾琳",
                    "苦味素",
                    "杨桃",
                    "心形插签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "姜茶",
                    "五分糖",
                    "少冰"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "惑星的艾琳",
                    "盐",
                    "樱桃"
                ],
                "ex": [558, 625, 682],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "伊琅相思": {
        "achievement": [
            {
                "name": "浪费",
                "limit": "【默契值1级】",
                "tips": [
                    "“珍贵的水源不该被浪费在这种名为奶茶的甜腻之物上。”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "阿华田奶茶",
                    "双倍糖",
                    "椰果",
                    "长匙"
                ]
            },
            {
                "name": "随口之言",
                "limit": "【默契值1级】",
                "tips": [
                    "“森罗的天气实在太过温和。”",
                    "伊琅相思注视着马天尼杯口的盐粒，状似无心地开口道。",
                    "“若没有烈酒相伴，实在无趣。”"
                ],
                "recipe": [
                    "马天尼杯",
                    "银色青松",
                    "盐",
                    "偏烈",
                    "银杏叶"
                ]
            },
            {
                "name": "旭日复升",
                "limit": "【默契值5级】",
                "tips": [
                    "“我们热爱的一切从未消亡，世界不过是为他们捏造了新的容器。”",
                    "“就像这杯黎威尔日升——它出现在这张菜单上的那一刻，黎威尔的太阳便在我们那位长耳朵的朋友心中再次升起。”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "黎威尔日升",
                    "椰浆",
                    "柠檬汁",
                    "薄荷叶"
                ]
            },
            {
                "name": "新奇事物",
                "limit": "【默契值16级】",
                "tips": [
                    "“‘马戏团’？又一项夜摩没有的事物呢。”",
                    "伊琅相思摇晃着手中的郁金香酒杯，吞下那么多烈酒也没有让她眼中的亮光迷蒙哪怕一丝一毫。",
                    "“若想让我的子民在森罗将这些新奇事物全都体验一遍，不知道准备一头海兽重量的金币够不够？”"
                ],
                "recipe": [
                    "郁金香酒杯",
                    "极夜马戏团",
                    "苦味素",
                    "偏烈",
                    "柠檬片"
                ]
            },
            {
                "name": "不自知",
                "limit": "【默契值8级】",
                "tips": [
                    "“即便是一杯寻常烈酒，森罗人也会毫无顾忌地投入这么多珍奇吗？”",
                    "“呃，只是一些普通苹果……？”",
                    "“森罗人呐，有时还真是豪奢而不自知。”"
                ],
                "recipe": [
                    "笛型香槟杯",
                    "干苹果",
                    "多冰",
                    "偏烈",
                    "空心圆匙"
                ]
            },
            {
                "name": "盛装出席",
                "limit": "【默契值18级】",
                "tips": [
                    "“是我的错觉吗，你今天穿得好像比平常还要……呃……”",
                    "“优弥亚既以沉金记忆相邀，我自然也要盛装出席，以示礼貌。”",
                    "“我已经搞不懂夜摩的‘盛装’是什么概念了……”"
                ],
                "recipe": [
                    "蝶形香槟杯",
                    "沉金记忆",
                    "无糖",
                    "盐",
                    "水果签"
                ]
            },
            {
                "name": "纵享此刻",
                "limit": "【默契值1级】",
                "tips": [
                    "当伊琅相思端着两杯夜色危情，微笑着站在办公室门口，监督可真是吓了一跳。",
                    "“那些同调者在你门口走来走去，就是不忍打扰你。”",
                    "“我们夜摩人可不管这个——优弥亚，介意让我加入你的夜晚吗？”"
                ],
                "recipe": [
                    "马天尼杯",
                    "夜色危情",
                    "正常冰",
                    "偏烈",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "夜色危情",
                    "偏烈",
                    "正常冰",
                    "茶冻"
                ],
                "ex": [593, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "北洛": {
        "achievement": [
            {
                "name": "全身心的拒绝",
                "limit": "【默契值1级】",
                "tips": [
                    "即便把白桃芝士奶盖做成无糖，北洛仍旧不愿尝哪怕一口。"
                ],
                "recipe": [
                    "简约至上",
                    "白桃芝士奶盖",
                    "无糖",
                    "常温",
                    "奇异果片",
                    "三叶长签"
                ]
            },
            {
                "name": "否定现实",
                "limit": "【默契值1级】",
                "tips": [
                    "紫都扬言都是因为监督加了咸梅干的缘故，不然北洛不可能不喜欢德里亚德风味花茶。"
                ],
                "recipe": [
                    "自证方圆",
                    "德里亚德风味花茶",
                    "热",
                    "咸梅干",
                    "樱花"
                ]
            },
            {
                "name": "一片好心",
                "limit": "【默契值13级】",
                "tips": [
                    "北洛来时淋的雨，还没走到休息室就干了。",
                    "可监督还是为他准备了姜茶。",
                    "“……多谢。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜茶",
                    "正常糖",
                    "常温",
                    "白玉兰"
                ]
            },
            {
                "name": "苦啤兑苦咖",
                "limit": "【默契值5级】",
                "tips": [
                    "“唐路遥就爱喝这个？”",
                    "北洛用三叶长签将杯口的盐粒全部刮了下去。",
                    "“真会给自己找罪受。”"
                ],
                "recipe": [
                    "简约至上",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "盐",
                    "低因",
                    "三叶长签"
                ]
            },
            {
                "name": "严禁醉驾",
                "limit": "【默契值1级】",
                "tips": [
                    "“等会我还要去送快递，这杯黑月亮还是监督你自己喝吧。”",
                    "北洛离去的脚步又停了下来。",
                    "“这枝白玉兰我拿走了。”"
                ],
                "recipe": [
                    "自证方圆",
                    "黑月亮",
                    "多冰",
                    "柠檬汁",
                    "青梅",
                    "白玉兰"
                ]
            },
            {
                "name": "欲言又止",
                "limit": "【默契值6级】",
                "tips": [
                    "北洛多看了两眼面前插着精致纸伞的熊熊杯。",
                    "看在海水半蓝还算合口的份上，他什么都没说。"
                ],
                "recipe": [
                    "熊熊杯",
                    "海水半蓝",
                    "正常冰",
                    "盐",
                    "椰果",
                    "精致纸伞"
                ]
            },
            {
                "name": "是谁呢？",
                "limit": "【默契值16级】",
                "tips": [
                    "“……原来是这个味道。”",
                    "“北洛你以前喝过极夜马戏团？”",
                    "“见别人喝过。”",
                    "“是鹿路运输的人吗？”",
                    "“不是。”"
                ],
                "recipe": [
                    "自证方圆",
                    "极夜马戏团",
                    "柠檬汁",
                    "正常",
                    "樱桃",
                    "水果签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "黑月亮",
                    "苦味素",
                    "多冰",
                    "樱桃"
                ],
                "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "叶子冻"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "岑缨": {
        "achievement": [
            {
                "name": "尝试的勇气",
                "limit": "【默契值1级】",
                "tips": [
                    "“你不是受不了姜汁的味道嘛，怎么还喝这么一大口？”",
                    "监督哭笑不得地看着“眼泪汪汪”的岑缨。",
                    "“……我想着什么都要试一下……”"
                ],
                "recipe": [
                    "柯林杯",
                    "姜汁可可",
                    "多冰",
                    "椰浆",
                    "椰果",
                    "经典长签"
                ]
            },
            {
                "name": "好奇心",
                "limit": "【默契值1级】",
                "tips": [
                    "“配方不公开吗？感觉背后一定有什么特别的故事……”",
                    "监督沉默不语，只是往岑缨的环口杯里又添了一勺抹茶冰淇淋。"
                ],
                "recipe": [
                    "环口杯",
                    "极夜马戏团",
                    "柠檬汁",
                    "偏淡",
                    "抹茶冰淇淋",
                    "长匙"
                ]
            },
            {
                "name": "一点了悟",
                "limit": "【默契值1级】",
                "tips": [
                    "“小叔叔总是念叨的‘惑星的艾琳’，原来是这个味道。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "惑星的艾琳",
                    "盐",
                    "西瓜",
                    "五叶长签"
                ]
            },
            {
                "name": "字条",
                "limit": "【默契值1级】",
                "tips": [
                    "岑缨这次外出考察一结束就直奔白荆科技，可迎接她的，只有监督的字条和一杯五分糖的热牛奶。",
                    "“先去好好睡一觉。有什么想要分享的，睡醒再和我说。”"
                ],
                "recipe": [
                    "柯林杯",
                    "甜牛乳",
                    "五分糖",
                    "热",
                    "脱脂牛奶",
                    "精致纸伞"
                ]
            },
            {
                "name": "照片分享",
                "limit": "【默契值8级】",
                "tips": [
                    "“监督你看，这是我在考察船上拍到的夕阳，和这杯海水半蓝是不是很像？”"
                ],
                "recipe": [
                    "环口杯",
                    "海水半蓝",
                    "正常冰",
                    "盐",
                    "椰果",
                    "蝴蝶结"
                ]
            },
            {
                "name": "意外的启发",
                "limit": "【默契值16级】",
                "tips": [
                    "“好久没看到小缨子了，她最近忙什么呢？又出去考察了？”",
                    "“没。这不是上次在监督那喝了一杯双莓之恋吗？她大受启发，最近天天在帮博物馆设计联名方案呢。”"
                ],
                "recipe": [
                    "双层叶纹",
                    "双莓之恋",
                    "正常糖",
                    "多冰",
                    "焦糖布丁",
                    "樱花"
                ]
            },
            {
                "name": "可爱之物难以抵抗",
                "limit": "【默契值1级】",
                "tips": [
                    "“你不是最喜欢云中桂影了，怎么今天喝得这么……小心翼翼的？”",
                    "“汪汪饼干太可爱了，我怕自己喝得太快，它会变形……”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "云中桂影",
                    "黄瓜片",
                    "汪汪饼干",
                    "五叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "惑星的艾琳",
                    "苦味素",
                    "咖啡雪顶"
                ],
                "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "奶油芭蕾",
                    "加双份",
                    "正常",
                    "全脂牛奶"
                ],
                "ex": [477, 534, 582],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "言雀": {
        "achievement": [
            {
                "name": "初次见面",
                "limit": "【默契值1级】",
                "tips": [
                    "监督还记得言雀第一次来休息室的样子。",
                    "她怯生生地打量着四周，即便监督端上了她最不喜欢的热姜茶，也不愿多吐露一个字。",
                    "“……真怀念当时啊。”",
                    "“嗯？什么意思？”"
                ],
                "recipe": [
                    "扎啤杯",
                    "姜茶",
                    "无糖",
                    "热",
                    "枫叶"
                ]
            },
            {
                "name": "认生",
                "limit": "【默契值1级】",
                "tips": [
                    "“好喝吗？”",
                    "“……………………嗯。”",
                    "“这样啊……”",
                    "“……………………嗯。”",
                    "言御分明说言雀不爱喝枸杞菊花茶来着……",
                    "唉……明明在“甜蜜幻境”里已经很熟悉了，回到现实又……"
                ],
                "recipe": [
                    "航海时代",
                    "枸杞菊花茶",
                    "黄瓜片",
                    "茶冻",
                    "水果签"
                ]
            },
            {
                "name": "破冰时刻",
                "limit": "【默契值13级】",
                "tips": [
                    "“…………这……是监督要喝的吧？”",
                    "“啊！抱歉，我拿错了——啊！”监督一时慌了神，反倒将搪瓷杯碰倒，咖啡与雪顶淌了一桌。",
                    "“——噗。”言雀讲话忽然自然了许多，“原来监督也会出错嘛。”",
                    "“你以为我是什么设定好的机器人吗……”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "经典特浓咖啡",
                    "奶精球",
                    "加双份",
                    "咖啡雪顶",
                    "三叶长签"
                ]
            },
            {
                "name": "怀念",
                "limit": "【默契值4级】",
                "tips": [
                    "“好可爱的汪汪饼干——监督我可不可以再要一个，我保证我会把牛奶都喝光的！”",
                    "“你本来就爱喝熊熊燕麦牛奶！”",
                    "“你就答应我嘛~”",
                    "“知道了知道了，我有点怀念你还跟我认生的时候了。”",
                    "“呜呜，我伤心了——再加一个~”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "汪汪饼干",
                    "银杏叶"
                ]
            },
            {
                "name": "戛然而止",
                "limit": "【默契值5级】",
                "tips": [
                    "“监督你怎么知道我爱喝青提啵啵奶茶！当初还是爱丽丝推——”",
                    "言雀的话戛然而止。",
                    "监督在心里默默叹了口气：“……我再给你加一些芒果果冻？”",
                    "“……嗯。”"
                ],
                "recipe": [
                    "航海时代",
                    "青提啵啵奶茶",
                    "五分糖",
                    "少冰",
                    "芒果果冻",
                    "精致纸伞"
                ]
            },
            {
                "name": "相似之处",
                "limit": "【默契值18级】",
                "tips": [
                    "“啊，你也喜欢喝这个？你哥哥他也……”",
                    "“我可不是学他！”",
                    "“我什么都还没说。”",
                    "言雀一时语塞，只能低下头，用力地搅动着扎啤杯里的冰块"
                ],
                "recipe": [
                    "扎啤杯",
                    "薄荷蜜柚苏打",
                    "多冰",
                    "叶子冻",
                    "圆柄长签"
                ]
            },
            {
                "name": "异世界畅想",
                "limit": "【默契值16级】",
                "tips": [
                    "“你是说……这杯花茶的配方来自乌瑞亚？”",
                    "言雀放下马克杯，若有所思地歪了歪头。",
                    "“真想知道异世界的大米饭是什么样子……会不会像《星之艾斯戴尔》里的白雕那样大只！”",
                    "“……救命，我脑袋里有画面了。”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "德里亚德风味花茶",
                    "常温",
                    "蜜桃冻",
                    "圆匙"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "杨枝甘露",
                    "青提",
                    "芒果果冻"
                ],
                "ex": [412, 462, 503],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 5,
                "recipe": [
                    "青提啵啵奶茶",
                    "七分糖",
                    "多冰",
                    "蜜桃冻"
                ],
                "ex": [477, 534, 582],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "双莓之恋",
                    "双倍糖",
                    "多冰",
                    "蜜桃冻"
                ],
                "ex": [478, 535, 584],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "白桃芝士奶盖",
                    "七分糖",
                    "多冰",
                    "青提"
                ],
                "ex": [537, 602, 656],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "晴雪": {
        "achievement": [
            {
                "name": "海量",
                "limit": "【默契值13级】",
                "tips": [
                    "“这不就是一杯加了点盐的白开水，你怎么喝得这么痛苦？”",
                    "“不是难喝，就是有点烦……”",
                    "“烦？”",
                    "“作为一只龙，我每次都要喝好久好久才能在体内储备足够多的水。但是喝水的时候，我又干不了别的事，这真的很无聊！”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "白开水",
                    "常温",
                    "盐",
                    "心形插签"
                ]
            },
            {
                "name": "有福同享？",
                "limit": "【默契值13级】",
                "tips": [
                    "“酒的味道可真难喝啊——让乌乌、蛙蛙试试~”",
                    "“喂。”",
                    "“安心啦，我给它尝的是上面的青提。”"
                ],
                "recipe": [
                    "经典搪瓷杯",
                    "薄暮飞行",
                    "苦味素",
                    "偏烈",
                    "青提",
                    "三叶长签"
                ]
            },
            {
                "name": "龙的好奇心",
                "limit": "【默契值4级】",
                "tips": [
                    "“呃啊，好苦！监督，这就是你平常喝的东西？”",
                    "“跟你说了，你可能接受不了——你甚至加了双倍浓缩。”",
                    "“我什么都想试一下嘛。”"
                ],
                "recipe": [
                    "航海时代",
                    "恩利都苦啤兑苦咖",
                    "少冰",
                    "盐",
                    "加双份",
                    "精致纸伞"
                ]
            },
            {
                "name": "藏不住",
                "limit": "【默契值1级】",
                "tips": [
                    "“生活在德里亚德的那些小家伙真的很敏锐！”",
                    "“每次还没看到我，他们就已经把耳朵竖起来了；我要是靠近一些，他们更是不知道跑到哪里去了。”",
                    "“——明明我特意变回了人形的！”"
                ],
                "recipe": [
                    "航海时代",
                    "德里亚德风味花茶",
                    "常温",
                    "叶子冻",
                    "水果签"
                ]
            },
            {
                "name": "飞行的终点",
                "limit": "【默契值1级】",
                "tips": [
                    "“海水半蓝？好奇特的……啊啊啊，监督，我想起我是怎么来到森罗的了！”",
                    "“我从乌瑞亚山巅启程，朝着东方一直飞一直飞，一路穿越埃特尔荒原，抵达极东之海，然后——我就到这里来了！”"
                ],
                "recipe": [
                    "扎啤杯",
                    "海水半蓝",
                    "少冰",
                    "柠檬汁",
                    "长匙"
                ]
            },
            {
                "name": "完美之物",
                "limit": "【默契值10级】",
                "tips": [
                    "“监督监督，你手里那个金灿灿的是什么！”",
                    "“原来这个宝贝的名字叫做橘子啊。”",
                    "“这圆润的外形、闪亮的色泽、清新的香气——决定了，我要在我的宝库里堆一座橘子山！”"
                ],
                "recipe": [
                    "扎啤杯",
                    "玻璃橘子",
                    "少冰",
                    "芒果果冻",
                    "空心圆匙"
                ]
            },
            {
                "name": "狗……？",
                "limit": "【默契值18级】",
                "tips": [
                    "“这个配牛奶吃的饼干好可爱啊，是按照小辛西亚做的吗？”",
                    "“狗？那是什么？森罗的特有种吗？”",
                    "“会汪汪叫的种族……？总感觉有些熟悉呢……在大裂变之前，我似乎遇见过……”"
                ],
                "recipe": [
                    "棱纹马克杯",
                    "熊熊燕麦牛奶",
                    "全脂牛奶",
                    "汪汪饼干",
                    "银杏叶"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "少冰",
                    "咸梅干"
                ],
                "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "玻璃橘子",
                    "少冰",
                    "椰果"
                ],
                "ex": [567, 635, 692],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "熊熊燕麦牛奶",
                    "燕麦奶",
                    "焦糖布丁"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "瓦卡莎": {
        "achievement": [
            {
                "name": "咖啡奶油",
                "limit": "【默契值5级】",
                "tips": [
                    "咖啡和奶油在杯中相撞，记得调整牛奶和咖啡因的比例。"
                ],
                "recipe": [
                    "奶油芭蕾",
                    "脱脂牛奶",
                    "正常",
                    "低因"
                ]
            },
            {
                "name": "“随便配配”",
                "limit": "【默契值6级】",
                "tips": [
                    "“奶绿……是什么？绿色的？”",
                    "“奶绿就是绿茶和牛——”",
                    "“唉算了好麻烦，你随便配配，加份椰果就好了。”",
                    "“…………你最好是。”"
                ],
                "recipe": [
                    "茉茉奶绿",
                    "五分糖",
                    "正常冰",
                    "椰果"
                ]
            },
            {
                "name": "枸杞的平方",
                "limit": "【默契值4级】",
                "tips": [
                    "在这之前，瓦卡莎从来没觉得自己对杯子上的花纹这么感兴趣过。",
                    "“一定要喝么……”",
                    "“愿赌服输啊瓦卡莎小朋友。”",
                    "“但是你怎么还偷偷加料啊？”"
                ],
                "recipe": [
                    "双层叶纹",
                    "枸杞菊花茶",
                    "枸杞"
                ]
            },
            {
                "name": "普通气泡水",
                "limit": "【默契值13级】",
                "tips": [
                    "“……好多冰……怎么还有点咸有点酸……”",
                    "“这个蝴蝶结又是什么？”"
                ],
                "recipe": [
                    "环口杯",
                    "冰镇苏打水",
                    "多冰",
                    "咸梅干",
                    "蝴蝶结"
                ]
            },
            {
                "name": "梅干搭档",
                "limit": "【默契值8级】",
                "tips": [
                    "Chat to Chiu里风评两极分化的一款饮品，瓦卡莎意外地很喜欢，每当喝到她都会主动伸出手，往杯中加点梅子。",
                    "“你喜欢梅子？”",
                    "“不喜欢，但是在这里很好喝。”"
                ],
                "recipe": [
                    "薄荷蜜柚苏打",
                    "正常冰",
                    "咸梅干"
                ]
            },
            {
                "name": "鲜榨果汁",
                "limit": "【默契值13级】",
                "tips": [
                    "鲜榨的果汁中加入瓦卡莎最喜欢的配料，再搭配点绿色的小饰品，静静等着她的到来吧。"
                ],
                "recipe": [
                    "环口杯",
                    "鲜榨雪梨汁",
                    "多冰",
                    "椰果",
                    "迷迭香"
                ]
            },
            {
                "name": "橘子和芒果",
                "limit": "【默契值18级】",
                "tips": [
                    "“橘子和芒果像么？他们是好朋友么？”瓦卡莎咬着吸管，转着竹签扎制的小伞难得有精神。",
                    "“为什么这么问？是发生了什么事么？”",
                    "“老师留的作业。”",
                    "“啊？”"
                ],
                "recipe": [
                    "柯林杯",
                    "玻璃橘子",
                    "少冰",
                    "芒果果冻",
                    "精致纸伞"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "冰镇苏打水",
                    "正常冰",
                    "椰果"
                ],
                "ex": [425, 476, 519],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "茉茉奶绿",
                    "三分糖",
                    "正常冰",
                    "椰果"
                ],
                "ex": [483, 542, 590],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "鲜榨雪梨汁",
                    "正常冰",
                    "椰果"
                ],
                "ex": [495, 554, 604],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "青提啵啵奶茶",
                    "五分糖",
                    "正常冰",
                    "椰果"
                ],
                "ex": [560, 627, 683],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 18,
                "recipe": [
                    "玻璃橘子",
                    "正常冰",
                    "椰果"
                ],
                "ex": [594, 665, 725],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "襄铃": {
        "achievement": [
            {
                "name": "偏差",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督监督，这是最基础的‘姜茶’吗？”",
                    "“嗯？正常糖正常冰，没加任何东西……没错啊。怎么了吗？”",
                    "“主脑出具的报告里说襄铃对生姜的喜好值超过84%……可是襄铃一点都不喜欢这个味道……”",
                    "“比起主脑出现偏差，我更惊讶于它居然连这种数值都要估算。”"
                ],
                "recipe": [
                    "柯林杯",
                    "姜茶",
                    "正常糖",
                    "正常冰",
                    "经典长签"
                ]
            },
            {
                "name": "咖啡初体验",
                "limit": "【默契值1级】",
                "tips": [
                    "“唔啊，咖啡怎么是这个味道……”",
                    "“你没喝过？”",
                    "“嗯。主脑规定，未成年人是不准碰咖啡因的。”",
                    "“那你第一次尝试就点双倍浓缩？”",
                    "“襄铃想试一试嘛……”",
                    "“……至少跟我说一声，我好给你加些草莓冰淇淋什么的。喏，记得用长匙搅一下。”"
                ],
                "recipe": [
                    "环口杯",
                    "经典特浓咖啡",
                    "椰浆",
                    "加双份",
                    "草莓冰淇淋",
                    "长匙"
                ]
            },
            {
                "name": "熟悉味道",
                "limit": "【默契值5级】",
                "tips": [
                    "“甜甜的热牛奶最棒了！睡前喝一杯，就连梦里的设计都更厉害一些呢！”",
                    "“小心，别把玻璃杯碰洒了——怎么忽然这么激动啊？”",
                    "“襄铃难得在海临遇到熟悉的味道嘛，嘿嘿。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "甜牛乳",
                    "正常糖",
                    "热",
                    "全脂牛奶",
                    "柠檬片"
                ]
            },
            {
                "name": "认可的味道",
                "limit": "【默契值13级】",
                "tips": [
                    "“喂，狐狸丫头，接着。”",
                    "“啊？禺期前辈……你好？你为什么要给襄铃苏打水啊？”",
                    "禺期并没有回答，只是冷哼一声，扬长而去。",
                    "“哟，老头子还给你加了茶冻啊？”乐无异不知从哪儿冒了出来，“你还不知道呢？老头子最近天天在武器技术部夸你呢，说你改造的电机特别——”",
                    "“乐！无！异！”"
                ],
                "recipe": [
                    "柯林杯",
                    "冰镇苏打水",
                    "少冰",
                    "茶冻",
                    "五叶长签"
                ]
            },
            {
                "name": "高共情力的孩子",
                "limit": "【默契值8级】",
                "tips": [
                    "来了休息室那么多次，襄铃终于找到了克服生姜的方法。",
                    "“只要加很多很多的冰块，再加很多很多奶精球和珍珠就可以了！”",
                    "“……其实你只要跟我说一声，我把姜汁可可里的姜汁去掉就行了。”",
                    "“不行！直接去掉的话，姜汁也很可怜啊……”"
                ],
                "recipe": [
                    "环口杯",
                    "姜汁可可",
                    "多冰",
                    "奶精球",
                    "珍珠",
                    "长匙"
                ]
            },
            {
                "name": "意外的“锐评”",
                "limit": "【默契值10级】",
                "tips": [
                    "“襄铃每次点双莓之恋都只点三分糖，毕竟耳机里BS的新曲就够甜了。”",
                    "襄铃专注于用长签打捞粘在杯壁上的焦糖布丁，丝毫不顾监督听完她这句话后憋笑有多辛苦。"
                ],
                "recipe": [
                    "双层叶纹",
                    "双莓之恋",
                    "三分糖",
                    "常温",
                    "焦糖布丁",
                    "三叶长签"
                ]
            },
            {
                "name": "忠实信徒",
                "limit": "【默契值1级】",
                "tips": [
                    "“酒酿凤梨，七分糖少冰加柠檬片是吧？襄铃，这个配方你都喝了一个月了，不腻吗？”",
                    "“不腻啊，襄铃最喜欢这个味道了！”",
                    "“最喜欢？那它和肉包，你选哪个？”",
                    "“肉包！”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "酒酿凤梨",
                    "七分糖",
                    "少冰",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "酒酿凤梨",
                    "五分糖",
                    "正常冰"
                ],
                "ex": [413, 463, 505],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "双莓之恋",
                    "五分糖",
                    "正常冰",
                    "焦糖布丁"
                ],
                "ex": [476, 533, 581],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "阿棘": {
        "achievement": [
            {
                "name": "小朋友的担心",
                "limit": "【默契值1级】",
                "tips": [
                    "“我喝了牛奶的话呜呜呜……”阿棘的眼泪啪嗒啪嗒地滴在圆匙上，“小牛、小牛该怎么办啊？”",
                    "“已经帮你换成燕麦奶了！”"
                ],
                "recipe": [
                    "简约至上",
                    "甜牛乳",
                    "正常糖",
                    "燕麦奶",
                    "圆匙"
                ]
            },
            {
                "name": "闻起来像药，喝起来像药",
                "limit": "【默契值1级】",
                "tips": [
                    "阿棘捏着鼻子，一仰脖，一下子灌进去一整杯无糖热姜茶。",
                    "“傻阿棘，你怎么这么喝啊！”",
                    "“药……不都是这、这么喝的？”阿棘眨巴眨巴眼。",
                    "“这不是——算了。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "姜茶",
                    "无糖",
                    "热",
                    "柠檬片"
                ]
            },
            {
                "name": "阴差阳错",
                "limit": "【默契值4级】",
                "tips": [
                    "“换成全脂牛奶，偏淡，加了浓缩咖啡和水果签的奶油芭蕾？这不像是阿棘你的口味啊……这真是你自己点的？”",
                    "“焰、焰响姐姐帮我点的……她说走什么走什么的……我……我我我我听不太明白……就就就这样了……”阿棘越说越小声。",
                    "“呃啊，她那是方言。你听不懂怎么不问——算了，我不用猜也知道，你不敢对不对？”",
                    "阿棘猛猛点头。"
                ],
                "recipe": [
                    "自证方圆",
                    "奶油芭蕾",
                    "全脂牛奶",
                    "偏淡",
                    "标准",
                    "水果签"
                ]
            },
            {
                "name": "可靠的大人",
                "limit": "【默契值1级】",
                "tips": [
                    "“咦？橘子汽水没、没有想象的酸呢……”",
                    "“知道你不喜欢，特意加了芒果果冻。不错吧？喏，拿着三叶长签，可以挑着吃。”",
                    "阿棘望着监督，眼睛里闪着崇拜的光。"
                ],
                "recipe": [
                    "简约至上",
                    "玻璃橘子",
                    "多冰",
                    "芒果果冻",
                    "三叶长签"
                ]
            },
            {
                "name": "痛并快乐着",
                "limit": "【默契值10级】",
                "tips": [
                    "阿棘捂着脸，想要趁牙齿反应过来之前，用水果签把巧克力风暴里的草莓冰淇淋、焦糖布丁全部扒出来吃掉。",
                    "“哎呦痛——呜呜呜好吃——痛痛痛——”"
                ],
                "recipe": [
                    "自证方圆",
                    "巧克力风暴",
                    "草莓冰淇淋",
                    "焦糖布丁",
                    "水果签"
                ]
            },
            {
                "name": "出糗时刻",
                "limit": "【默契值6级】",
                "tips": [
                    "每当阿棘在训练课里成功控制住自己的法术不暴走，监督就会在课后为他点一杯茉茉奶绿。",
                    "直到某次出外勤时，阿棘一边施展法术，一边流利、大声地喊出“茉茉奶绿三分糖正常冰加珍珠——！”。",
                    "——那是监督今年笑得最大声的一次了。"
                ],
                "recipe": [
                    "简约至上",
                    "茉茉奶绿",
                    "三分糖",
                    "正常冰",
                    "珍珠",
                    "圆匙"
                ]
            },
            {
                "name": "囤积的快乐",
                "limit": "【默契值18级】",
                "tips": [
                    "西柚、白柚、杨桃、柠檬的复杂果香混杂在一起，阿棘抱着熊熊杯，仿佛回到了乌瑞亚的地下，回到了他囤满浆果的房间。"
                ],
                "recipe": [
                    "熊熊杯",
                    "柚柚切颗NOW",
                    "正常糖",
                    "杨桃",
                    "柠檬片"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "青提啵啵奶茶",
                    "五分糖",
                    "少冰",
                    "珍珠"
                ],
                "ex": [431, 483, 526],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 8,
                "recipe": [
                    "鹿鹿冻柠茶",
                    "五分糖",
                    "少冰"
                ],
                "ex": [453, 508, 526],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 16,
                "recipe": [
                    "杨枝甘露",
                    "抹茶冰淇淋",
                    "珍珠"
                ],
                "ex": [461, 517, 563],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "赫九逸": {
        "achievement": [
            {
                "name": "文学经典·一",
                "limit": "【默契值1级】",
                "tips": [
                    "“我一口喝下又浓又苦的咖啡，",
                    "虽然只是那么小小的一杯，",
                    "那些咖啡渣却固执地堵在我的喉咙和胸口，",
                    "使我呼吸不顺，足足咳了半个小时。”"
                ],
                "recipe": [
                    "简约至上",
                    "经典特浓咖啡",
                    "椰浆",
                    "标准",
                    "香蕉冰淇淋",
                    "五叶长签"
                ]
            },
            {
                "name": "文学经典·二",
                "limit": "【默契值4级】",
                "tips": [
                    "“这个世界不会因为一杯热可可变得更好，",
                    "或是更坏。”"
                ],
                "recipe": [
                    "自证方圆",
                    "姜汁可可",
                    "正常冰",
                    "奶精球",
                    "椰果",
                    "桂花"
                ]
            },
            {
                "name": "文学经典·三",
                "limit": "【默契值13级】",
                "tips": [
                    "“清水是一个聪明人唯一的饮料。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "白开水",
                    "常温",
                    "盐",
                    "柠檬片"
                ]
            },
            {
                "name": "通俗小说·一",
                "limit": "【默契值1级】",
                "tips": [
                    "“当命运递给你一个酸柠檬时，",
                    "让我们设法做一杯甜的。”"
                ],
                "recipe": [
                    "自证方圆",
                    "云中桂影",
                    "青梅",
                    "焦糖布丁",
                    "经典长签"
                ]
            },
            {
                "name": "诗词典籍·一",
                "limit": "【默契值8级】",
                "tips": [
                    "“何须浅碧深红色，",
                    "自是花中第一流。”"
                ],
                "recipe": [
                    "简约至上",
                    "疏帘淡月",
                    "无糖",
                    "少冰",
                    "三叶长签"
                ]
            },
            {
                "name": "通俗小说·二",
                "limit": "【默契值13级】",
                "tips": [
                    "“烈酒很像海水或者荣誉：越喝就越想喝。”"
                ],
                "recipe": [
                    "竹节茶杯",
                    "银色青松",
                    "苦味素",
                    "偏烈",
                    "柠檬片"
                ]
            },
            {
                "name": "诗词典籍·二",
                "limit": "【默契值16级】",
                "tips": [
                    "“秋太淡，添红枣。”"
                ],
                "recipe": [
                    "熊熊杯",
                    "桂圆红枣茶",
                    "正常糖",
                    "热",
                    "枸杞",
                    "迷迭香"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "云中桂影",
                    "咖啡雪顶",
                    "焦糖布丁"
                ],
                "ex": [405, 453, 494],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "海水半蓝",
                    "苦味素",
                    "正常冰",
                    "蜜桃冻"
                ],
                "ex": [434, 486, 529],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "银色青松",
                    "苦味素",
                    "偏淡"
                ],
                "ex": [450, 504, 549],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "岚岚": {
        "achievement": [
            {
                "name": "讨厌的范围",
                "limit": "【默契值1级】",
                "tips": [
                    "“讨厌讨厌讨厌讨厌——”",
                    "“别只重复一个词，你具体讨厌什么啊？”",
                    "“阿华田、双倍糖、饼干、蝴蝶结、环口杯……”",
                    "“全部都讨厌吗！？”"
                ],
                "recipe": [
                    "环口杯",
                    "阿华田奶茶",
                    "双倍糖",
                    "汪汪饼干",
                    "蝴蝶结"
                ]
            },
            {
                "name": "音调问题",
                "limit": "【默契值1级】",
                "tips": [
                    "“一定要在巧克力里加樱桃和咖啡冻吗，比我捡回来筑巢的榴莲壳还难闻。”",
                    "“……真伤人啊。”",
                    "“会吗。是不是因为我的音调有点奇怪才——”",
                    "“不，不关音调的事……”"
                ],
                "recipe": [
                    "柯林杯",
                    "巧克力风暴",
                    "樱桃",
                    "咖啡冻",
                    "樱花"
                ]
            },
            {
                "name": "如有雷同",
                "limit": "【默契值1级】",
                "tips": [
                    "“监督监督，我没想到海临人还会喝牙膏啊。”",
                    "“……你的牙膏不会是薄荷蜜柚味的吧？”",
                    "“对对对，就是这个。还好有叶子冻，不然我都想漱口了。”"
                ],
                "recipe": [
                    "家用玻璃杯",
                    "薄荷蜜柚苏打",
                    "多冰",
                    "叶子冻",
                    "长匙"
                ]
            },
            {
                "name": "实用主义",
                "limit": "【默契值13级】",
                "tips": [
                    "“你对姜汁类的饮料还真是情有独钟。”",
                    "“谁叫它那么特别。只要喝上一杯，就算在冬天飞一整晚也不会冷。”",
                    "“……首先，你点的是冰姜茶。其次，气温太低，你就适当少飞一会。”",
                    "“那可不行。”"
                ],
                "recipe": [
                    "双层叶纹",
                    "姜茶",
                    "正常糖",
                    "正常冰",
                    "桂花"
                ]
            },
            {
                "name": "心结",
                "limit": "【默契值4级】",
                "tips": [
                    "每当纽巍蒂朵绽放的时候，宁芙缇总是最先发现的。",
                    "他们的视力是那样好。德里亚德哪里的浆果已经成熟，哪里的古树即将枯萎……他们全都知道。",
                    "“然而我就站在他们面前，他们却‘看不见’我。”",
                    "岚岚手中的圆匙在柯林杯的杯壁上，划出一道刺耳的哨音，宛如悲鸣。"
                ],
                "recipe": [
                    "柯林杯",
                    "德里亚德风味花茶",
                    "常温",
                    "椰果",
                    "圆匙"
                ]
            },
            {
                "name": "严禁动物表演",
                "limit": "【默契值5级】",
                "tips": [
                    "“为了感谢监督请我喝姜汁可可，我决定在二饭举行晚餐秀。”",
                    "“不必了，真的不必了。”",
                    "“别客气。看在焦糖布丁的份上，我还要加开呢。每天两场，持续一周。”",
                    "“呃……”",
                    "虽说海临严禁动物表演，但没人告诉监督“动物”非要表演该怎么办啊。"
                ],
                "recipe": [
                    "环口杯",
                    "姜汁可可",
                    "热",
                    "椰浆",
                    "焦糖布丁",
                    "薄荷叶"
                ]
            },
            {
                "name": "特别原因",
                "limit": "【默契值18级】",
                "tips": [
                    "“岚岚你为什么这么喜欢喝杨枝甘露啊？”",
                    "“听说在所有饮料之中，它的制作时间是最长的——这样我们就能聊久一点了，多好啊。”",
                    "岚岚的脸被双层叶纹杯上的枫叶挡住了一些，看不清平静语气下的脸是不是有些红。"
                ],
                "recipe": [
                    "双层叶纹",
                    "杨枝甘露",
                    "原味雪顶",
                    "芒果果冻",
                    "五叶长签"
                ]
            }
        ],
        "hignRapport": [
            {
                "needLevel": 1,
                "recipe": [
                    "巧克力风暴",
                    "青提",
                    "焦糖布丁"
                ],
                "ex": [378, 423, 461],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 4,
                "recipe": [
                    "德里亚德风味花茶",
                    "常温",
                    "茶冻"
                ],
                "ex": [379, 425, 463],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "枸杞菊花茶",
                    "枸杞",
                    "茶冻"
                ],
                "ex": [544, 609, 664],//参考默契值，无加，满家具，满加成
            }
        ]
    },
    "老板": {
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
                "ex": [240, 269, 293],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 6,
                "recipe": [
                    "老板特供",
                    "三文鱼"
                ],
                "ex": [288, 323, 352],//参考默契值，无加，满家具，满加成
            },
            {
                "needLevel": 10,
                "recipe": [
                    "老板特供",
                    "冻干鸡肉"
                ],
                "ex": [360, 403, 439],//参考默契值，无加，满家具，满加成
            }
        ]
    }
}

export { charAttr, allChar, allCharSkill, allCharTea }