import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 千本之门 = {
    "name": "千本之门",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.千本之门,
    "tacgie": "9/99/2jh17fbcughqvnn080edjf4mxokvu6i.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.轻车熟路,
        MXLaohenEnum.昂扬斗志方块α型,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.伤害赐福菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.无畏者
    ], //唤醒技能
}