import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 甜蜜心绪 = {
    "name": "甜蜜心绪",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.甜蜜心绪,
    "tacgie": "b/b8/nhc2xk4tnu53x5fgy5cedsk72sbicr0.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.福被众生,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.核心充能菱形α型,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.等待时机
    ], //唤醒技能
}