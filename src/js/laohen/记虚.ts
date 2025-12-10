import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 记虚 = {
    "name": "记虚",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.记虚,
    "tacgie": "2/2f/75842zmz37iek3rtdgyfapnyxkq4r2e.png",
    "extraData": {
        "illust": LaohenIllust.kan, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.技多不压身,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.落井下石
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.召唤增幅
    ], //唤醒技能
}