import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 为伍 = {
    "name": "为伍",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.为伍,
    "tacgie": "4/4a/cjmek7qijsslpkahr2g992d7ncvjgfx.png",
    "openDate": "2025-10-23",
    "extraData": {
        "illust": LaohenIllust.沢马Haru, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.技多不压身,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.伤害赐福菱形α型,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.元素领袖蚀
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀渊异能
    ], //唤醒技能
}