import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 生死在握 = {
    "name": "生死在握",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.生死在握,
    "tacgie": "6/61/7e1cqus1t5hjm0eel8wr9e3roz2648w.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.侵蚀,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.核心充能菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀入骨髓
    ], //唤醒技能
}