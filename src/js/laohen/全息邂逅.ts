import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 全息邂逅 = {
    "name": "全息邂逅",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.全息邂逅,
    "tacgie": "8/84/1vsofafk5ler2qrs2qfjxva6dpj2smf.png",
    "openDate": "2025-09-25",
    "extraData": {
        "illust": LaohenIllust.乔瑟夫乔尊尊, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "风晴雪"
    },
    "mxSkill": [
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.元素专攻三角β型,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.庇佑,
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.风雪交加
    ], //唤醒技能
}