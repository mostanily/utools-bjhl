import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 局外人 = {
    "name": "局外人",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.局外人,
    "tacgie": "0/02/cpgsa624uu7bqu07sj4svbgjimy71nt.png",
    "openDate": "2025-07-31",
    "extraData": {
        "illust": LaohenIllust.乙配, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.距离把控,
        MXLaohenEnum.元素领袖炎,
        MXLaohenEnum.强攻对地方块,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.自动瞄准系统方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炽痕共鸣
    ], //唤醒技能
}