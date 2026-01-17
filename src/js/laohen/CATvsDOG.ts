import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const CATvsDOG = {
    "name": "「CAT vs. DOG」",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.CATvsDOG,
    "tacgie": "c/c7/mhxnikn5dcrxdjpmam1rcr2ttmjz7ux.png",
    "openDate": "2024-05-20",
    "extraData": {
        "illust": LaohenIllust.鲛猫, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.炎能灌注,
        MXLaohenEnum.元素逆转方块,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.核心充能方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炽焰增威
    ], //唤醒技能
}