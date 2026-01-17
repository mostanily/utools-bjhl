import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 堕入星尘 = {
    "name": "堕入星尘",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.堕入星尘,
    "tacgie": "3/38/b7br938elwrecyouhjkbgh12fd6ltny.png",
    "openDate": "2025-07-10",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "言雀"
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.元素专攻菱形β型,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.核心充能菱形α型,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.伤害赐福菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.雷霆同辉
    ], //唤醒技能
}