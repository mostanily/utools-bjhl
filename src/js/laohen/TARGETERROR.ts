import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const TARGETERROR = {
    "name": "TARGET ERROR",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.TARGETERROR,
    "tacgie": "7/73/jr7tfregrrslo5dnco47a1xw6qzvg8w.png",
    "extraData": {
        "illust": LaohenIllust.laxy, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.潮汐助威,
        MXLaohenEnum.屏障效应,
        MXLaohenEnum.元素领袖水,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.元素专攻三角β型,
        MXLaohenEnum.特殊减伤对空
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.水蕴赐福
    ], //唤醒技能
}