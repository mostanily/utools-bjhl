import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 于人海中 = {
    "name": "于人海中",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.于人海中,
    "tacgie": "4/4d/cd715zj141fjz2h6zpg2f1c4wjyvmef.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.危险游戏,
        MXLaohenEnum.坚定意志菱形α型,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.手执利兵菱形,
        MXLaohenEnum.坚实护盾
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.信号干扰菱形
    ], //唤醒技能
}