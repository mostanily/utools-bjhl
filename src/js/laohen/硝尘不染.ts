import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 硝尘不染 = {
    "name": "硝尘不染",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.硝尘不染,
    "tacgie": "7/75/kirj6s2bzhutaf491dk1k90wryme4tx.png",
    "openDate": "2026-03-23",
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.奉献,
        MXLaohenEnum.元素领袖物理,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.核心充能三角β型,
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.物理供能
    ], //唤醒技能
}