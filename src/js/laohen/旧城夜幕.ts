import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 旧城夜幕 = {
    "name": "旧城夜幕",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.旧城夜幕,
    "tacgie": "0/01/1qjq4xtti1fgjizh4c0pre19buzpatw.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.充能回复,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.生生不息菱形,
        MXLaohenEnum.针对打击菱形,
        MXLaohenEnum.坚定意志菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.荆棘之志
    ], //唤醒技能
}