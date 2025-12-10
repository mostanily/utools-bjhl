import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 火热手感 = {
    "name": "火热手感",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.火热手感,
    "tacgie": "f/f1/a1chd5f6le8i2gcjbkqnrq3nzwdxbps.png",
    "extraData": {
        "illust": LaohenIllust.iii303, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.黄金精神,
        MXLaohenEnum.虽远必诛,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.元素专攻方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.疗愈力劲
    ], //唤醒技能
}