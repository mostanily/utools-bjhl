import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 于火光中蛋生 = {
    "name": "于火光中「蛋」生",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.于火光中蛋生,
    "tacgie": "7/78/okcxncgi7licn1tebid0tkp70jryv8n.png",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.护盾灌注,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.元素半衰期,
        MXLaohenEnum.核心充能菱形α型,
        MXLaohenEnum.铁杵磨成针菱形,
        MXLaohenEnum.及时援助菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.战术强化
    ], //唤醒技能
}