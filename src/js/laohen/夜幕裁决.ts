import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 夜幕裁决 = {
    "name": "夜幕裁决",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.夜幕裁决,
    "tacgie": "1/11/53edki3t22vdwnkg3leyxqg7ufeuzuc.png",
    "openDate": "2026-02-12",
    "extraData": {
        "illust": LaohenIllust.llmia咻, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "云无月"
    },
    "mxSkill": [
        MXLaohenEnum.庇护共鸣,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.暴风骤雨方块α型,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.元素领袖蚀,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.自动瞄准系统方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.能量自溢
    ], //唤醒技能
}