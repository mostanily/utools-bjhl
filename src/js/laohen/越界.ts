import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 越界 = {
    "name": "越界",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.越界,
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.奉献,
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.元素专攻菱形β型,
        MXLaohenEnum.坚实护盾,
        MXLaohenEnum.核心充能菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.风力共能
    ], //唤醒技能
}