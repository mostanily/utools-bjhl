import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 沙中金火 = {
    "name": "沙中金火",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.沙中金火,
    "tacgie": "2/2b/sffdm4hvr2lrd5o5bj0fah2vef6csps.png",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.福被众生,
        MXLaohenEnum.充能回复,
        MXLaohenEnum.元素领袖水,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.暴风骤雨菱形β型,
        MXLaohenEnum.坚实护盾
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.磐潮壁垒
    ], //唤醒技能
}