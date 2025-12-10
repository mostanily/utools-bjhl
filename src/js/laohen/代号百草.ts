import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 代号百草 = {
    "name": "代号「百草」",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.代号百草,
    "tacgie": "5/59/a8g169t7tqq3hhk3mdv7bem7jfqsxhf.png",
    "extraData": {
        "illust": LaohenIllust.夜少与狗饼干, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.抓准时机,
        MXLaohenEnum.技多不压身,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.生生不息菱形,
        MXLaohenEnum.昂扬斗志菱形α型,
        MXLaohenEnum.伤害赐福菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.屏障炎
    ], //唤醒技能
}