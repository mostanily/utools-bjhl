import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 洗出汪外 = {
    "name": "洗出汪外",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.洗出汪外,
    "extraData": {
        "illust": LaohenIllust.小藻, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.元素领袖炎,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.化险为夷,
        MXLaohenEnum.自动瞄准系统方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炽炎同频
    ], //唤醒技能
}