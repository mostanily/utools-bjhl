import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
/**
 * 返回特殊技能内容对象
 * @param con 特殊技能内容
 * @param color 颜色类型
 * @returns 
 */
const speSkillCon = (con: string, color: number = SkillColorEnum.normal) => {
    return { "desc": con, "color": color};
}

/**
 * 角色技能特殊效果提示内容
 */
const toastWithSkill = [
    ["【位移强度】", "[位移强度等级]不低于目标的[对抗位移等级]时，该位移效果才会生效"],
    ["【嘲讽】", "使受到该效果的目标优先攻击施放者"],
    ["【目标减益乘区·目标抗性降低】", "同调者施加的抗性降低效果最多为100%，不包含怪物本身基础抗性"],
    ["【防御依赖】", "效果随防御提升，1000点时达到最大值"],
    ["【同调者基础减伤】", "获得多个[同调者基础减伤]提升效果时，仅生效其中的最大值"],
    ["【复调】", "友方同调者普通攻击命中时，会根据云无月当前演奏的曲目对目标造成额外伤害，若友方同调者为蚀元素侧将会额外为终端附加蚀爆值"],
    ["【真实伤害】", "该类型伤害不受目标的减伤或防御效果影响"],
    ["【融甲】", "通过不同方式对目标施加隔融甲效果使目标基础减伤降低时，仅生效其中的最大值"],
    ["【眩晕】", "该状态下无法移动、无法进行任何操作及技能施放"],
    ["【愤怒值】", "每次普通攻击或受击时积攒，满额后对目标及周围敌人进行攻击造成物理伤害"],
    ["【同调者攻击】", "获得多个[同调者攻击]提升效果时，仅生效其中的最大值"],
    ["【同调者攻击速度】", "获得多个[同调者攻击速度]提升效果时，仅生效其中的最大值"],
    ["【同调者专精】", "获得多个[同调者专精]提升效果时，仅生效其中的最大值"],
    ["【孤蓝的庇佑】", "通过施放主动技能可获得【孤蓝的庇佑】层数；异核技能【潮汐的盛宴】消耗【孤蓝的庇佑】层数提升伤害"],
    ["【同调者暴击率】", "获得多个[同调者暴击率]提升效果时，仅生效其中的最大值"],
    ["【损耗】", "无视自身当前所有伤害减免效果及护盾，且无法触发刻印技能效果，最多将生命值减少至1"],
    ["【石中火】", "每层提升自身基础攻击力和基础减伤，且生命值越低减伤效果越高，上限30层"],
    ["【血之祭坛】", "明月尘可以通过释放技获取能量，释放异核技能【死心宣告】需要消耗100点能量"],
    ["【目标减益乘区·目标受伤害增加】", "目标受到的伤害增加效果最多为150%"],
    ["【荣耀加身】", "【守誓】状态下自身普通攻击时，消耗1层“荣耀加身”对目标及周围造成伤害，最多叠加36层"],
    ["【永霜】", "被附加了“渐霜”的目标，若在2秒内被击败则会被冻结进入“永霜”状态，短暂延迟后对周围敌人造成霜元素伤害并使耶芙娜在一段时间内增加基础减伤"],
    ["【渐霜】", "普通攻击和技能对目标造成伤害后对其附加“渐霜”"],
    ["【冻结状态】", "处于该状态的敌方单位无法行动，并且在受到霜元素伤害时，有一定几率直接被击败"],
    ["【火羽燃烧】", "被附着该效果的目标，一段时间内，将持续受到炎元素伤害"],
    ["【控制效果】", "包括眩晕、定身、石化、冻结、眩光、移动速度降低"],
    ["【灼烧】", "处于炎元素区域上所受到的特续伤害，每秒受到1%当前血量的炎元素伤害；每秒受到的伤害不会超过刻印终端属性"],
    ["【移动速度】", "目标受到多个[移动速度]降低效果时，仅生效其中的最大值"],
    ["【血食】", "普通攻击命中目标或伤魂鸟吸取友方生命时，可回复“血食”，100点时可施放自动技能【子夜啼】"],
    ["【恶念】", "100点时可使用主动技能【鬼枪上膛】，令“鬼手”现身并随时间消耗恶念”"],
    ["【执法者印记】", "红玉对目标造成伤害时附加该印记，会使其受到来自红玉的伤害提升"],
    ["【定身】", "该状态下无法移动"],
    ["【音律】", "普通攻击会同时攻击除目标外，场上带有“音律”标记的单位并造成无视减伤的物理伤害，随后清除其“音律”标记"],
    ["【DEBUFF】", "特定攻击会使目标进入该状态，雪长夏的普通攻击伤害对其造成伤害时必定触发暴击"],
    ["【剩余电量】", "100点时在“大师剑”形态下可自动触发【割草模式】，期间提升自身攻击速度，“大师剑”形态的普通攻击可造成额外伤害"],
    ["【隐匿】", "不会被敌方目标优先攻击"],
    ["【猎人印记】", "普通攻击命中目标后对其叠加，目标头顶金色圆环显示当前印记层数，达到指定层数触发小范围雷元素伤害"],
    ["【充能弹匣】", "自身普通攻击命中「巡视装置」、「协同装置」进行射击可以为自身叠加「充能弹匣」，「充能匣」累积满时可获得一枚「排云弹」"],
    ["【排云弹】", "「充能弹匣」累积满时可生成一枚「排云弹」，释放主动技能「排云」时会消耗「排云弹」"],
    ["【弹药】", "当存在弹药时，自身基础攻击速度将得到提升，每次普通攻击会消耗弹药，最多可装填20妆弹药"],
    ["【属性乘区·主动技能回复速度】", "主动技能回复速度最多为150%"],
    ["【冰点协议】", "为被赋予的目标抵御伤害，施加伤害抵挡量时，不计入目标的受治疗加成。同调者身上存在的「冰点协议」最大不超过言御最大生命值的2倍"],
    ["【极寒测试】", "使友方同调者下一次普通攻击时，以普通攻击目标为中心，造成一次基于言御最终攻击力的范围霜元素伤害，该伤害在“潮湿”环境下会直接生成霜元素区域。极寒测试视为友方造成的伤害，除最终攻击力外的所有属性使用友方自身的加成"],
    ["【同调者最大生命值】", "获得多个[同调者最大生命值]提升效果时，仅生效其中的最大值"],
    ["【罪业漩涡】", "提提亚造成的普通收击伤害会以一定比例传递给罪业旋涡连接的目标；场上仅有一个带有罪业旋涡的单位时，普通攻击伤害大幅提高"],
    ["【回溯】", "若当前生命值高于记录的生命值，则维持当前生命值不变"],
    ["【明灵】", "隐匿状态，状态期间友方同调者不会被敌方目标优先攻击"],
    ["【眩光】", "普通攻击无法命中目标"],
    ["【不规则星芒】", "通过自身施放自动技能后产生，会随机攻击场上的敌方单位造成范围伤害，持续整场战斗，区域切换或言雀换至后备队时场上存在的不规则星芒将会消失"],
    ["【镇魂符】", "开场时便会召唤在赫力逸身边，每隔一段时间会施放震波对周围的敌人造成伤害并降低其移动速度，可通过使用技能调整镇魂符的位置"],
    ["【石化】", "该状态下无法移动、无法进行任何操作及技能施放"],
    ["【靶向效应】", "缇诗通过主动技能可提升自身「靶向效应」强度，达到强度Ⅲ后不再提升，随「靶向效应」获得战能力成长"],
    ["【苦痛涡核】", "对敌人施加「苦痛涡核标记」，如果敌人已拥有「苦痛涡核标记」则消耗标记并造成「苦痛涡核引爆」伤害。「苦痛涡核标记】不会随时间消失，米达斯重伤或离场时，标记消失。"],
    ["【同调者暴击伤害】", "获得多个[同调者暴击伤害]提升效果时，仅生效其中的最大值"],
    ["【璨星】", "当[璨星]达到一定数量时，将自动消耗对应数量的[璨星]激活【荡厄】"],
    ["【属性乘区·额外攻击力加成】", "同调者的额外攻击力加成最多为120%"],
    ["【同调】", [
        "场上其他同调者部分属性乘区加成高于自身时，自身受到的该属性加成变为「属性乘区同步加成」",
        "",
        "「属性乘区同步加成」：场上同调者最高的属性乘区加成，但是不超出相应属性的同步上限",
        "",
        "可同步的属性乘区及同步上限：",
        "",
        speSkillCon("属性乘区·刻印攻击百分比增加"),
        "和",
        speSkillCon("属性乘区·刻印攻击额外增加值"),
        "：60%；",
        "",
        speSkillCon("[属性乘区·额外攻击力加成]"),
        "：90%；",
        "",
        speSkillCon("属性乘区·刻印专精百分比增加"),
        "：20%；",
        "",
        speSkillCon("属性乘区·额外攻击速度"),
        "：60%；",
        "",
        speSkillCon("属性乘区·暴击率"),
        "：最终值小于等于60%；",
        "",
        speSkillCon("属性乘区·暴击伤害"),
        "：最终值小于等于160%"
    ]],
    ["【切分音】", "在产生时，可以生成小范围的水元素区域。可以消耗一定数量的[切分音]释放主动技能【定音乐轨】"],
    ["【汽化反应】", [
        "当目标处于",
        speSkillCon("水元素"),
        "区域上，受到",
        speSkillCon("炎元素", SkillColorEnum.injuries),
        "伤害时，或者",
        "",
        "当目标处于",
        speSkillCon("炎元素", SkillColorEnum.injuries),
        "区域上，受到",
        speSkillCon("水元素"),
        "伤害时，触发",
        speSkillCon("【汽化】"),
        "反应：",
        "",
        "生成雾化区域，该区域中的友方同调者受到的伤害",
        speSkillCon("降低50%"),
        "。"
    ]],
    ["【传导反应】", [
        "当目标处于",
        speSkillCon("水元素"),
        "区域上，受到",
        speSkillCon("雷元素", SkillColorEnum.orange),
        "伤害时触发",
        speSkillCon("【传导】"),
        "反应：",
        "",
        "使该区域内敌对目标",
        speSkillCon("【麻痹】"),
        "而无法行动（不会清除水元素区域)。",
        "",
        "反应免疫类型为水或雷的单位及部分特殊单位可免疫传导反应。"
    ]],
    ["【冻结反应】", [
        "当目标处于",
        speSkillCon("水元素"),
        "区域上，受到",
        speSkillCon("霜元素", SkillColorEnum.bing),
        "伤害时，或者",
        "",
        "当目标处于",
        speSkillCon("霜元素", SkillColorEnum.bing),
        "区域上，受到",
        speSkillCon("水元素"),
        "伤害时，触发",
        speSkillCon("【冻结】"),
        "反应：",
        "",
        "对该区域内敌对目标造成",
        speSkillCon("【冻结】"),
        "效果。",
        "",
        "反应免疫类型为水或霜的单位及部分特殊单位可免疫冻结反应。"
    ]],
    ["【天相】", "温留施放异核技能或防御姿态下释放技能获取天相，释放技能【天地不照】进入攻击姿态需要最少消耗50点天相"],
    ["【腐淖】", "茜茜指挥奈奥格「幽语者形态」下施放技能生成该资源，奈奥格「吞蚀者形态」下施放技能消耗该资源"],
];

/**
 * 烙痕技能特殊字段说明
 */
const laohenToastWithSkill = [
    ["【减益效果】", "使目标处于能力下降状态或处于被控制状态下的效果"],
    ["【潮湿环境】",
        "水元素地形蒸发速度减缓，炎元素地形消失速度加快",
        "部分角色技能在该环境下可以直接生成霜元素地形",
        "部分刻印技能在潮湿环境下能发挥更强的效果"
    ],
    ["【防御依赖】", "效果随防御提升，1000点时达到最大值"],
    ["【干燥环境】",
        "水元素地形蒸发速度加快，炎元素地形消失速度减缓",
        "敌人受到炎元素攻击时，有几率在脚下产生炎元素地形",
        "部分刻印技能在干燥环境下能发挥更强的效果"
    ],
    ["【隐匿】", "不会被敌方目标优先攻击"],
    ["【属性乘区·额外攻击力加成】", "同调者的额外攻击力加成最多为120%"],
    ["【目标减益乘区·目标抗性降低】", "同调者施加的抗性降低效果最多为100%，不包含怪物本身基础抗性"],
    ["【眩晕】", "该状态下无法移动、无法进行任何操作及技能施放"],
    ["【真实伤害】", "该类型伤害不受目标的减伤或防御效果影响"],
    ["【石化】", "该状态下无法移动、无法进行任何操作及技能施放"],
    ["【目标减益乘区·目标受伤害增加】", "目标受到的伤害增加效果最多为150%"],
    ["【控制效果】", "包括眩晕、定身、石化、冻结、眩光、移动速度降低"],
    ["【蚀爆伤害】",
        "蚀元素同调者的技能可以使终端获得蚀爆值，大于等于100点，将触发一次基于敌人当前生命值百分比的全场蚀爆伤害，并清零终端蚀爆值，该效果每15秒最多触发一次。同时场上蚀元素同调者刻印攻击增加，最多叠加5次（属性乘区·刻印攻击额外增加值），该效果随刻印终端的数值提高，终端超过1000点后提高效果增强。",
        "蚀爆伤害触发时，蚀爆值超出100点的部分每点额外提升0.2%蚀爆伤害，最多提升100%"
    ],
    ["【炎元素区域】", "处于炎元素区域上的敌人，每秒受到1%当前血量的炎元素伤害每秒受到的伤害最多不会超过刻印终端属性"],
    ["【激励】", "每层激励效果提升10%伤害，最多同时生效20层", "", "※标注为“激励技能”的刻印技能在满足特定条件后，能够为小队中的所有同调者提供激励效果"],
    ["【雾化区域】", "由水元素区域和炎元素（或者炎元素区域和水元素）反应生成的区域，该区域内友方同调者受到的伤害降低50%"],
    ["【冻结反应】",
        "当目标处于水元素区域上，受到霜元素伤害时，或者当目标处于霜元素区域上，受到水元素伤害时，触发【冻结】反应：",
        "对该区域内敌对目标造成【冻结】效果。",
        "反应免疫类型为水或霜的单位及部分特殊单位可免疫冻结反应。"
    ],
    ["【传导反应】",
        "当目标处于水元素区域上，受到雷元素伤害时触发【传导】反应：",
        "使该区域内敌对目标【麻痹】而无法行动（不会清除水元素区域）。",
        "反应免疫类型为水或雷的单位及部分特殊单位可免疫传导反应。"
    ],
    ["【电解反应】",
        "当目标处于霜元素区域上，受到雷元素伤害时触发【电解】反应：",
        "降低该区域内敌对目标33%的攻击，对精英和首领单位效果减弱，最多可叠加3层。",
        "反应免疫类型为霜或雷的单位及部分特殊单位可免疫电解反应。"
    ],
    ["【冻结状态】", "处于该状态的敌方单位无法行动，并且在受到霜元素伤害时，有一定几率直接被击败"],
    ["【属性乘区·主动技能回复速度】", "主动技能回复速度最多为150%"],
    ["【爆燃反应】",
        "当目标处于元素区域上，受到雷元素伤害时触发【爆燃】反应：",
        "额外造成一次基于触发者攻击力和专精值的伤害（不会清除炎元素区域）。",
        "反应免疫类型为炎或雷的单位及部分特殊单位可免疫爆燃反应。"
    ],
    ["【元素反应触发增伤】", "元素反应触发的目标受到伤害提高的效果，仅生效其中的最大值"],
    ["【汽化反应】",
        "当目标处于水元素区域上，受到炎元素伤害时，或者当目标处于炎元素区域上，受到水元素伤害时，触发【汽化】反应：",
        "生成雾化区域，该区域中的友方同调者受到的伤害降低50%。"
    ],
    ["【消融反应】",
        "当目标处于炎元素区域上，受到霜元素伤害时，或当目标处于霜元素区域上，受到炎元素伤害时，触发【消融】反应：",
        "降低该区域内敌对目标5%的基础减伤，最多降低目标60%基础减伤。",
        "反应免疫类型为炎或霜的单位及部分特殊单位可免疫消融反应。"
    ],
    ["【增益效果】", "使目标处于能力提升状态下的效果"],
    ["【定身】", "该状态下无法移动"],
    ["【同调】",
        "场上其他同调者部分属性乘区加成高于自身时，自身受到的该属性加成变为「属性乘区同步加成」",
        "「属性乘区同步加成」：场上同调者最高的属性乘区加成，但是不超出相应属性的同步上限",
        "可同步的属性乘区及同步上限：",
        [
            speSkillCon("属性乘区·刻印攻击百分比增加"),
            "和",
            speSkillCon("属性乘区·刻印攻击额外增加值"),
            "：60%；",
            "",
            speSkillCon("[属性乘区·额外攻击力加成]"),
            "：90%；",
            "",
            speSkillCon("属性乘区·刻印专精百分比增加"),
            "：20%；",
            "",
            speSkillCon("属性乘区·额外攻击速度"),
            "：60%；",
            "",
            speSkillCon("属性乘区·暴击率"),
            "：最终值小于等于60%；",
            "",
            speSkillCon("属性乘区·暴击伤害"),
            "：最终值小于等于160%"
        ]
    ],
    ["【屏障破碎】", "屏障受到超出屏障强度的投射物攻击时或破坏屏障效果时会破碎；若屏障以层数计数，则每次消耗层数均视为屏障破碎，但存在8秒冷却时间"]
]

export { toastWithSkill, laohenToastWithSkill }