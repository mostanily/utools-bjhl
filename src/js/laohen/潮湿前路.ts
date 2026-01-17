import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 潮湿前路 = {
    "name": "潮湿前路",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.潮湿前路,
    "tacgie": "6/61/5e5h0jaz9a7u8wvm6dhau09643lbelb.png",
    "openDate": "2024-05-30",
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.星河奔腾菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.曲流制敌
    ], //唤醒技能
}