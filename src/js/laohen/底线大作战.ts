import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 底线大作战 = {
    "name": "底线大作战",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.底线大作战,
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.自动瞄准系统方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.异核雷鸣
    ], //唤醒技能
}