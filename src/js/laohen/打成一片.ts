import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 打成一片 = {
    "name": "打成一片",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.打成一片,
    "tacgie": "d/dc/jhkoghys5dpgvj0ukorhc161tvuv0uy.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.跟头, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.核心充能方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.量化抵御
    ], //唤醒技能
}