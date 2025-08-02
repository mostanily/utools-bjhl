import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 棺中鸟 = {
    "name": "棺中鸟",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.棺中鸟,
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.治愈守备,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.元素领袖蚀,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.暴风骤雨方块α型,
        MXLaohenEnum.大敌当前
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀力庇护
    ], //唤醒技能
}