import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 向阳 = {
    "name": "向阳",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.向阳,
    "tacgie": "6/6d/1gr9drrr09tmgkuccazfql8iycd18zm.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.金刚不坏,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.核心充能方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.绝地反击
    ], //唤醒技能
}