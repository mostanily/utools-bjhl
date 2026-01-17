import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 暗涌轮廓 = {
    "name": "暗涌轮廓",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.暗涌轮廓,
    "tacgie": "7/77/lbqbn4nbaxg7utmtyl6mue12nlddcoj.png",
    "openDate": "2025-01-02",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.失焦,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.昂扬斗志三角β型,
        MXLaohenEnum.手执利兵三角
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.异能再生
    ], //唤醒技能
}