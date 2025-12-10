import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 瞳中困影 = {
    "name": "瞳中困影",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.瞳中困影,
    "tacgie": "7/72/qx051rz5poh2cq7c1fjib18dpxdwib5.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.复仇者之怒,
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.落井下石
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.共振催化
    ], //唤醒技能
}