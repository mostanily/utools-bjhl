import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 精准控分 = {
    "name": "精准控分",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.精准控分,
    "tacgie": "6/69/tiol1bxferxf4c9dlpcvftomr6scajn.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.猫鱼, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.醉生梦死,
        MXLaohenEnum.落后就要挨打,
        MXLaohenEnum.元素半衰期,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.坚实护盾
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.千锤百炼
    ], //唤醒技能
}