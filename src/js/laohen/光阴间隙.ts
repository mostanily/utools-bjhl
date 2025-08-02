import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 光阴间隙 = {
    "name": "光阴间隙",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.光阴间隙,
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.危险预警,
        MXLaohenEnum.以头抢地,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.坚定意志菱形α型,
        MXLaohenEnum.核心充能菱形α型,
        MXLaohenEnum.元素半衰期
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.创痕激发
    ], //唤醒技能
}