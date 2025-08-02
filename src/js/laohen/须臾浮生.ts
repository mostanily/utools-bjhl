import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 须臾浮生 = {
    "name": "须臾浮生",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.须臾浮生,
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.距离把控,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.元素专攻方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.风影追击
    ], //唤醒技能
}