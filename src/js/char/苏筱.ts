import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "护佑者", "skill": [MXLaohenEnum.坚实护盾, MXLaohenEnum.锻炼治疗], "attr": "wuli", "star": "5",
    "nameEn": "SUXIAO", "tag": ["治疗", "屏障"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "Vila", "openDate": "2024年01月12日", "resourse": ["主线初始赠送"]
}

const Skill = [
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
]

const Tea = {
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
}

const 苏筱 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 苏筱 }