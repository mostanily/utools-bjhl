import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "筑术师", "skill": [MXLaohenEnum.核心充能三角α型, MXLaohenEnum.主场扩大], "attr": "shui", "star": "6",
    "nameEn": "FURAY&FURNEY", "tag": ["群攻", "元素区域"], "originWorld": "乌瑞亚", "orginChar": "古剑奇谭网络版",
    "cv": "二娇、杨鸥", "openDate": "2024年01月12日", "resourse": ["常态共鸣·异世交汇", "常态共鸣"]
}

const Skill = [
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
]

const Tea = {
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
}

const 卯绒绒 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 卯绒绒 }