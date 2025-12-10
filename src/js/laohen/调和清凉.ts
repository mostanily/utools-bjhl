import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 调和清凉 = {
    "name": "调和清凉",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.调和清凉,
    "tacgie": "c/c5/7nfl008thk97niop217w5gt1gdjjrr8.png",
    "extraData": {
        "illust": LaohenIllust.夜少与狗饼干, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.回光返照,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.昂扬斗志方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.伤痕赐福
    ], //唤醒技能
}