import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 执愿 = {
    "name": "执愿",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.执愿,
    "tacgie": "8/83/5gbswmrdjd0lmuep2idxjyfax434t4p.png",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.乘胜追击,
        MXLaohenEnum.失焦
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.战策充能
    ], //唤醒技能
}