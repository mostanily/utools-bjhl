import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 天陷 = {
    "name": "天陷",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.天陷,
    "extraData": {
        "illust": LaohenIllust.波波, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.快步流星,
        MXLaohenEnum.深藏身与名,
        MXLaohenEnum.大敌当前,
        MXLaohenEnum.昂扬斗志方块α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.坚实护盾,
        MXLaohenEnum.生生不息菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炽热生命
    ], //唤醒技能
}