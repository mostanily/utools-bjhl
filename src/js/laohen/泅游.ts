import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 泅游 = {
    "name": "泅游",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.泅游,
    "extraData": {
        "illust": LaohenIllust.laxy, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.为友谊干杯,
        MXLaohenEnum.元素领袖炎,
        MXLaohenEnum.星河奔腾三角,
        MXLaohenEnum.暴风骤雨三角α型,
        MXLaohenEnum.元素专攻三角α型,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.烬灼连破
    ], //唤醒技能
}