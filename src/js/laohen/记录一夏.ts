import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 记录一夏 = {
    "name": "记录一夏",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.记录一夏,
    "tacgie": "4/46/o0gwbjc01qeszb50f7vk0brk29ak12r.png",
    "openDate": "2024-08-12",
    "extraData": {
        "illust": LaohenIllust.墨秃, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.技多不压身,
        MXLaohenEnum.护盾灌注,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.落井下石,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.原生特攻β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.雷寒同调
    ], //唤醒技能
}