import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 新醅 = {
    "name": "新醅",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.新醅,
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.庇护共鸣,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.强攻对地方块,
        MXLaohenEnum.元素领袖物理,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.昂扬斗志方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.追跡痕爆
    ], //唤醒技能
}