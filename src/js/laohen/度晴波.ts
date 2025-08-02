import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 度晴波 = {
    "name": "度晴波",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.度晴波,
    "extraData": {
        "illust": LaohenIllust.YGeriAn, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.黄金精神,
        MXLaohenEnum.生机盎然方块α型,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.单打独斗对首领,
        MXLaohenEnum.核心充能三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炙地之力
    ], //唤醒技能
}