import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 如长夜振翅 = {
    "name": "如长夜振翅",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.如长夜振翅,
    "tacgie": "7/71/kspwtgmyqfchha0ewyx2fa40nsxgiz7.png",
    "openDate": "2025-11-17",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.叶脉联结计划,
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.元素专攻菱形β型,
        MXLaohenEnum.元素领袖蚀
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀能协奏
    ], //唤醒技能
}