import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 野风 = {
    "name": "野风",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.野风,
    "tacgie": "5/59/i803mkipis2ozzga8557izrh9aaq0jo.png",
    "openDate": "2024-12-12",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.暴风骤雨方块α型,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.化险为夷
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.攻守兼备
    ], //唤醒技能
}