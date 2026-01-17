import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 形与神 = {
    "name": "形与神",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.形与神,
    "tacgie": "a/ae/4ys2if0pjio103hvvu5eoh2utkuw6l6.png",
    "openDate": "2025-05-08",
    "extraData": {
        "illust": LaohenIllust.llmia咻, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.醉生梦死,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.元素领袖霜,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.铁杵磨成针菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.凝冰间隙
    ], //唤醒技能
}