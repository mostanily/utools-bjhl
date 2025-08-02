import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 失罪夜 = {
    "name": "失罪夜",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.失罪夜,
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.元素领袖雷,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.核心充能三角α型,
        MXLaohenEnum.强攻对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.元素之境
    ], //唤醒技能
}