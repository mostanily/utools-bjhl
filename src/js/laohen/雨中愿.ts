import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 雨中愿 = {
    "name": "雨中愿",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.雨中愿,
    "tacgie": "d/d2/53u3x1cm282n6v1054yhlkwkbo8dlhk.png",
    "extraData": {
        "illust": LaohenIllust.夜少与狗饼干, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.元素残留,
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.坚定意志菱形β型,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.坚实护盾
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.左膀右臂菱形
    ], //唤醒技能
}