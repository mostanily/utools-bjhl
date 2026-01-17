import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 旖旎夜色 = {
    "name": "旖旎夜色",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.旖旎夜色,
    "tacgie": "1/1f/p5bggwniv79c8kv2s9wtnd6humnuop1.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.能力催化,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.昂扬斗志菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.状态绝佳
    ], //唤醒技能
}