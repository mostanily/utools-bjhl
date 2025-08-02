import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 空 = {
    "name": "「空」",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.空,
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.回光返照,
        MXLaohenEnum.弱点石化,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.昂扬斗志方块α型,
        MXLaohenEnum.狩猎时刻对地,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.铁杵磨成针三角
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.绝处逢生
    ], //唤醒技能
}