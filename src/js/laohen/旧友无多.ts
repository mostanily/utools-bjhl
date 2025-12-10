import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 旧友无多 = {
    "name": "旧友无多",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.旧友无多,
    "tacgie": "5/5e/r9s5fsjl8ly0lbpchhk42jkp5lgklwf.png",
    "extraData": {
        "illust": LaohenIllust.印巴巴, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.危险预警,
        MXLaohenEnum.混合打击,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.狩猎时刻对空,
        MXLaohenEnum.昂扬斗志三角β型,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.伤害赐福菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.雷霆万钧
    ], //唤醒技能
}