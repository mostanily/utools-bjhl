import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 未晞 = {
    "name": "未晞",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.未晞,
    "extraData": {
        "illust": LaohenIllust.乙配, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.奉献,
        MXLaohenEnum.单打独斗对首领,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.手执利兵方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.物调联破
    ], //唤醒技能
}