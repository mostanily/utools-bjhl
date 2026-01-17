import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 速速降温 = {
    "name": "速速降温",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.速速降温,
    "tacgie": "8/80/p6432m7pgnabq8ibp7ho5w9yy2q1vth.png",
    "openDate": "2024-08-08",
    "extraData": {
        "illust": LaohenIllust.laxy, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.快步流星,
        MXLaohenEnum.沉重打击,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.坚定意志菱形α型,
        MXLaohenEnum.元素专攻菱形α型,
        MXLaohenEnum.元素半衰期
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.寒霜雷涌
    ], //唤醒技能
}