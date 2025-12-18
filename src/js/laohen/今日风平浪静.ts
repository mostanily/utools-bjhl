import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 今日风平浪静 = {
    "name": "今日风平浪静",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.今日风平浪静,
    "tacgie": "6/63/52n2smlgyrkqjwruwdviuxrvajptyvh.png",
    "extraData": {
        "illust": LaohenIllust.laxy, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "尤尼"
    },
    "mxSkill": [
        MXLaohenEnum.距离把控,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.元素专攻方块β型,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.元素领袖水,
        MXLaohenEnum.乘人之危对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.波涛助澜
    ], //唤醒技能
}