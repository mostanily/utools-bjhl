import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 余兴节目 = {
    "name": "余兴节目",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.余兴节目,
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.奉献,
        MXLaohenEnum.庇护共鸣,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.坚实护盾,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.异核过载
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.盾鸣赐福
    ], //唤醒技能
}