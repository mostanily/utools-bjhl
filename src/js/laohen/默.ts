import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 默 = {
    "name": "「默」",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.默,
    "tacgie": "4/4c/4idg1i6hvysrknngns2c4xz1mvalsag.png",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.奉献,
        MXLaohenEnum.元素领袖物理,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.单打独斗对首领,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.核心充能三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.利刃连击
    ], //唤醒技能
}