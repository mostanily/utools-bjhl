import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 事无出世间 = {
    "name": "事无出世间",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.事无出世间,
    "tacgie": "6/6d/pcxxwjut0rci9tctvwlfjy9z9e99n2w.png",
    "openDate": "2025-07-31",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.人形特攻α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.余烬增辉
    ], //唤醒技能
}