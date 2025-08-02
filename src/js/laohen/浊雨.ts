import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 浊雨 = {
    "name": "浊雨",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.浊雨,
    "extraData": {
        "illust": LaohenIllust.YGeriAn, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.以头抢地,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.及时援助菱形β型,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.元素专攻方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.终转攻轮
    ], //唤醒技能
}