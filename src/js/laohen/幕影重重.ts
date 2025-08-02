import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 幕影重重 = {
    "name": "幕影重重",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.幕影重重,
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.危险游戏,
        MXLaohenEnum.回收利用,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.铁杵磨成针菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.强效缓解
    ], //唤醒技能
}