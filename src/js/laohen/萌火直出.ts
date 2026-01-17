import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 萌火直出 = {
    "name": "萌火直出",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.萌火直出,
    "tacgie": "5/52/5q674fesbp8yylt4rhogzthpcriwlm2.png",
    "openDate": "2025-05-29",
    "extraData": {
        "illust": LaohenIllust.墨秃, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.水利万物,
        MXLaohenEnum.危险游戏,
        MXLaohenEnum.元素领袖水,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.暴风骤雨菱形β型,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.涌泉赋能
    ], //唤醒技能
}