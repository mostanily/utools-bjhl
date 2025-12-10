import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "游徒", "skill": [MXLaohenEnum.铁杵磨成针三角, MXLaohenEnum.超频引雷], "attr": "lei", "star": "5",
    "nameEn": "SORLEY", "tag": ["输出", "群攻"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "三石", "openDate": "2024年03月28日", "resourse": ["定向共鸣·飞雪初晴", "定向共鸣·王牌机械师", "常态共鸣"],
    "introText": "我叫雪长夏，是个做游戏的。监督……你喜欢什么类型的游戏？",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "3/38/4zerzufuas5ipeka2vjkr16an9bqyd9.png",
            "b/b5/i2zlgb4aevtpih4419rksmn4mnq55g4.png",
            "c/cb/h0o9m0pwbzmw88guto1w2t6yd7lanzn.png"
        ]
    }
}

const Skill = [
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
]

const Tea = {
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
}

const 雪长夏 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 雪长夏 }