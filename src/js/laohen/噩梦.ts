import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 噩梦 = {
    "name": "噩梦",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.噩梦,
    "tacgie": "9/9d/bukkgjpo3epssu8ykwqhdcmj9c4ru3t.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.距离把控,
        MXLaohenEnum.金刚不坏,
        MXLaohenEnum.昂扬斗志方块β型,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.落井下石,
        MXLaohenEnum.生生不息菱形,
        MXLaohenEnum.核心充能菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.屏障水
    ], //唤醒技能
}