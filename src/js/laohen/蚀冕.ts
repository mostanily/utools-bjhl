import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 蚀冕 = {
    "name": "蚀冕",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.蚀冕,
    "tacgie": "b/b4/0rlggocscnb2752xmn8pi0gd3psjtni.png",
    "openDate": "2026-01-29",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "昊苍"
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.距离把控,
        MXLaohenEnum.强攻对地方块,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.元素专攻方块α型,
        MXLaohenEnum.一线生机
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炎焱威能
    ], //唤醒技能
}