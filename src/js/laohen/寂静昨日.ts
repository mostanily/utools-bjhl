import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 寂静昨日 = {
    "name": "寂静昨日",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.寂静昨日,
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.失控元素,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.伤害赐福菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.水汽弥漫
    ], //唤醒技能
}