import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 千纪启明 = {
    "name": "千纪启明",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.千纪启明,
    "tacgie": "2/23/on168cx6cxfgbej0f8b2svp3tsndfsv.png",
    "openDate": "2024-08-29",
    "extraData": {
        "illust": LaohenIllust.鲛猫, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.治愈守备,
        MXLaohenEnum.元素逆转菱形,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.伤害赐福菱形α型,
        MXLaohenEnum.核心充能菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.唤物增威
    ], //唤醒技能
}