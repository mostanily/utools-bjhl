import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 将明 = {
    "name": "将明",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.将明,
    "tacgie": "a/af/99lnkfxj9psqjap90pxy9mq0126di75.png",
    "openDate": "2026-03-26",
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "林"
    },
    "mxSkill": [
        MXLaohenEnum.庇护共鸣,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.元素领袖炎,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.大敌当前
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炎能噬甲
    ], //唤醒技能
}