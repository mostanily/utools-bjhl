import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 流星坠处 = {
    "name": "流星坠处",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.流星坠处,
    "tacgie": "d/dd/r9iuzsf80tmtcqbzwbus0eka7xp7yv9.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.黄金精神,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.昂扬斗志方块β型,
        MXLaohenEnum.自动瞄准系统方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.核心重压
    ], //唤醒技能
}