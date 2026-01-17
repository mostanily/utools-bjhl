import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 泡影 = {
    "name": "泡影",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.泡影,
    "tacgie": "6/66/hbsjdittgkg4vez99dm3pm8au8tg53o.png",
    "openDate": "2024-07-01",
    "extraData": {
        "illust": LaohenIllust.太子池安, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.潮汐助威,
        MXLaohenEnum.自动防御系统,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.大敌当前,
        MXLaohenEnum.饱和式救援
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.水泽破阵
    ], //唤醒技能
}