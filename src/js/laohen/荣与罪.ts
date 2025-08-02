import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 荣与罪 = {
    "name": "荣与罪",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.荣与罪,
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.铁杵磨成针菱形,
        MXLaohenEnum.星河奔腾方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炎雷激励
    ], //唤醒技能
}