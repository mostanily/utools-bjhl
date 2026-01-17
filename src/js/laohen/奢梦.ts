import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 奢梦 = {
    "name": "奢梦",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.奢梦,
    "tacgie": "1/16/j2b4g0j45xkc3dzpvfusjkkn5xxwzx1.png",
    "openDate": "2024-09-23",
    "extraData": {
        "illust": LaohenIllust.竹墨繁漪, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.元素专攻菱形α型,
        MXLaohenEnum.暴风骤雨菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀灵激励
    ], //唤醒技能
}