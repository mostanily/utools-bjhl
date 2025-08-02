import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 向新世界去 = {
    "name": "向新世界去",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.向新世界去,
    "extraData": {
        "illust": LaohenIllust.乙配, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.虽远必诛,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.自动瞄准系统方块β型,
        MXLaohenEnum.元素专攻方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.水域之力
    ], //唤醒技能
}