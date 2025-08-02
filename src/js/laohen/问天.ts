import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 问天 = {
    "name": "问天",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.问天,
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.强攻对地方块,
        MXLaohenEnum.星河奔腾三角,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.原生特攻α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炎境激聚
    ], //唤醒技能
}