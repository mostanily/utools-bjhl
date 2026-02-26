import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 不眠夜 = {
    "name": "不眠夜",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.不眠夜,
    "tacgie": "0/0d/8q57quorinfprnx3ugc772dqovut4t6.png",
    "openDate": "2026-02-26",
    "extraData": {
        "illust": LaohenIllust.laxy, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "耶芙娜"
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.主场优势,
        MXLaohenEnum.元素领袖霜,
        MXLaohenEnum.元素专攻方块β型,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.核心充能方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.凛冬将至
    ], //唤醒技能
}