import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 樱华如梦 = {
    "name": "樱华如梦",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.樱华如梦,
    "tacgie": "3/32/4mb8brzxmq0p18e7usx0afjkoleogxk.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.生命颂歌,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.生机盎然方块α型,
        MXLaohenEnum.化险为夷
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.战斗反射
    ], //唤醒技能
}