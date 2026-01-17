import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 秩序囚笼 = {
    "name": "秩序囚笼",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.秩序囚笼,
    "tacgie": "4/4b/9id4ez5nl0c2vjj156cyr96y4msva7m.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.阿尼鸭Anya, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.炎能灌注,
        MXLaohenEnum.沉重打击,
        MXLaohenEnum.坚定意志菱形α型,
        MXLaohenEnum.核心充能菱形α型,
        MXLaohenEnum.落井下石,
        MXLaohenEnum.伤害赐福菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.针对削弱
    ], //唤醒技能
}