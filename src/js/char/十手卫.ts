import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';
import { ToastSkillEnum } from '../enum/toastSkillEnum.ts';
import { MXLaohenEnum } from '../enum/laohenNameEnum.ts';
import { speSkillCon } from '../consts/SkillCon.ts';

const Desc = {
    "job": "尖锋", "skill": [MXLaohenEnum.强攻对地方块, MXLaohenEnum.驭风之力], "attr": "feng", "star": "6",
    "nameEn": "MAMORU", "tag": ["输出", "爆发"], "originWorld": "森罗", "orginChar": "原创",
    "cv": "", "openDate": "2025年02月13日", "resourse": ["定向共鸣·至暗至明"],
    "introText": "怎么看见我这副表情，放轻松小监督，咱们之间就用不着互相自我介绍了吧。",
    "tacgie": {
        "name": "初始外装",
        "listNames": ["立绘", "S4立绘", "3D"],
        "imgs": [
            "2/22/q4os15qoa6551igi7eml8nn0bdgjjxd.png",
            "b/be/4goyqjumnlbx0sxvnnhtp8wbegxn5xj.png",
            "4/4b/dkc2h5qt1f2ww1sylhhusrdy12p5udw.png"
        ]
    },
    "extraTacgie": [
        {
            "name": "森罗映像",
            "listNames": ["苍烟客"],
            "imgs": [
                "a/a2/8oaqce0xnu71q8e84mu4z5j084q64d4.png"
            ],
            "listImg": [
                "b/bf/pdh7lin1inr00mz6c3gunk0djow5dnp.png"
            ]
        }
    ]
}

const Skill = [
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
]

const Tea = {
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
            "ex": [594, 665, 725, 791],//参考默契值，无加，满家具，满加成
        }
    ]
}

const 十手卫 = {
    "desc": Desc,
    "skill": Skill,
    "tea": Tea
}

export { 十手卫 }