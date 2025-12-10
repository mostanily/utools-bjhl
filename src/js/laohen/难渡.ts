import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 难渡 = {
    "name": "难渡",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.难渡,
    "tacgie": "9/95/76s2mkzurudjywi3cksbnxo9678ewjy.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.距离把控,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.强攻对地方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.同频激励
    ], //唤醒技能
}