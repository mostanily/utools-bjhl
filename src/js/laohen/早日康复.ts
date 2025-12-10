import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 早日康复 = {
    "name": "早日康复",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.早日康复,
    "tacgie": "7/7b/prq7w5wcpa97sd63hwnp29554quzorc.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.醉生梦死,
        MXLaohenEnum.机械特攻α型,
        MXLaohenEnum.暴风骤雨三角β型,
        MXLaohenEnum.特殊减伤对空,
        MXLaohenEnum.核心充能三角α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.因祸得福
    ], //唤醒技能
}