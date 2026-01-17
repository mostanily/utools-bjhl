import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 共弈者 = {
    "name": "共弈者",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.共弈者,
    "tacgie": "0/0f/6zxyjwjxjfgfczla8p62y5nmeann1t8.png",
    "openDate": "2026-01-15",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.回收利用,
        MXLaohenEnum.庇佑,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.核心充能三角α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.叠焰燎原
    ], //唤醒技能
}