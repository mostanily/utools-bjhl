import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 书卷晨曦 = {
    "name": "书卷晨曦",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.书卷晨曦,
    "tacgie": "0/08/anffd7wpns6auroi0xraxlo146ci94b.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.特殊减伤对空,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.核心充能三角α型,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.出淤泥而全染
    ], //唤醒技能
}