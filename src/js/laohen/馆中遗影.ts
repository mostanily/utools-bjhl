import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 馆中遗影 = {
    "name": "馆中遗影",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.馆中遗影,
    "extraData": {
        "illust": LaohenIllust.Juanmao, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.快步流星,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.昂扬斗志方块β型,
        MXLaohenEnum.落井下石,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.针对打击菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.影盾
    ], //唤醒技能
}