import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 团圆 = {
    "name": "团圆",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.团圆,
    "tacgie": "5/5b/6iw3mzr4yo8j78jwspsp8jor05k6r1a.png",
    "openDate": "2024-02-01",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.护盾灌注,
        MXLaohenEnum.技多不压身,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.昂扬斗志菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.百折不挠菱形
    ], //唤醒技能
}