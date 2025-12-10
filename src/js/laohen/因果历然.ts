import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 因果历然 = {
    "name": "因果历然",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.因果历然,
    "tacgie": "3/31/e5zdnzyfit40jlhymrsg2o6bj0j6oju.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.抓准时机,
        MXLaohenEnum.复数共振,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.手执利兵三角,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.失焦,
        MXLaohenEnum.针对打击菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.受击反制
    ], //唤醒技能
}