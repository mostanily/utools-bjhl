import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 明日暄风 = {
    "name": "明日暄风",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.明日暄风,
    "tacgie": "3/3e/7808n8urhq42e4h6ehc53byieyevvoq.png",
    "extraData": {
        "illust": LaohenIllust.东河, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "米达斯"
    },
    "mxSkill": [
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.元素领袖物理,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.昂扬斗志方块α型,
        MXLaohenEnum.生生不息方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.物能协同
    ], //唤醒技能
}