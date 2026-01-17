import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 家 = {
    "name": "「家」",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.家,
    "tacgie": "a/a1/9j8z7dm8sttty302jk5hjv99wtlefmk.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.复仇者之怒,
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.狩猎时刻对地,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.乘胜追击
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.生人勿近三角
    ], //唤醒技能
}