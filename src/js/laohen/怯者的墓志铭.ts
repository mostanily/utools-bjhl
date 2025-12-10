import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 怯者的墓志铭 = {
    "name": "怯者的墓志铭",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.怯者的墓志铭,
    "tacgie": "6/69/eltuq1sgiyfjg4dsjvngm088yolso6z.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.距离把控,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.强攻对地方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.唤物充能
    ], //唤醒技能
}