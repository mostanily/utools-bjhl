import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 意外邂逅 = {
    "name": "意外邂逅",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.意外邂逅,
    "tacgie": "1/13/qjkg1i5z40bnqggmhzf59i1v9ygi049.png",
    "openDate": "2024-02-26",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.生命收割,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.针对打击菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.主动激励
    ], //唤醒技能
}