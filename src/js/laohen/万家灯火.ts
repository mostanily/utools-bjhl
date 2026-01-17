import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 万家灯火 = {
    "name": "万家灯火",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.万家灯火,
    "tacgie": "d/da/6s5ptxqdyvrrralmfkjw4vwd28i0kbk.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.自动防御系统,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.昂扬斗志方块β型,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.大敌当前
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蛮力打击
    ], //唤醒技能
}