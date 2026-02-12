import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 最初章 = {
    "name": "最初章",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.最初章,
    "tacgie": "6/6f/qblor4au2lbfybfrxyz2on00ocu4iiz.png",
    "openDate": "2026-02-09",
    "extraData": {
        "illust": LaohenIllust.小藻, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.奉献,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.核心充能方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.异核能量
    ], //唤醒技能
}