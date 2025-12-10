import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 街市清晨 = {
    "name": "街市清晨",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.街市清晨,
    "tacgie": "1/12/5t2lelscpp077sw77tn35g2mtjwktlu.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.回光返照,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.昂扬斗志方块α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.连击赐福
    ], //唤醒技能
}