import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 拂晓 = {
    "name": "拂晓",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.拂晓,
    "tacgie": "2/22/dr03b24as6920qwtymwndrrq6asgc3m.png",
    "extraData": {
        "illust": LaohenIllust.灼忘, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.容光焕发,
        MXLaohenEnum.以头抢地,
        MXLaohenEnum.手执利兵菱形,
        MXLaohenEnum.昂扬斗志菱形α型,
        MXLaohenEnum.生生不息菱形,
        MXLaohenEnum.坚定意志菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.生人勿近菱形
    ], //唤醒技能
}