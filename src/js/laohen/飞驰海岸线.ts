import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 飞驰海岸线 = {
    "name": "飞驰海岸线",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.飞驰海岸线,
    "tacgie": "4/43/sp1eyemnkxhkioahbkw5gu3qv44ae6q.png",
    "extraData": {
        "illust": LaohenIllust.东河, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.深藏身与名,
        MXLaohenEnum.生命收割,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.生生不息菱形,
        MXLaohenEnum.手执利兵菱形,
        MXLaohenEnum.昂扬斗志菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.技决重威
    ], //唤醒技能
}