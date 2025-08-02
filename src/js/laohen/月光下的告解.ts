import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 月光下的告解 = {
    "name": "月光下的告解",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.月光下的告解,
    "extraData": {
        "illust": LaohenIllust.乔瑟夫乔尊尊, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.蚀力掌控,
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.暴风骤雨三角β型,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.狩猎时刻对地,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀影锐击
    ], //唤醒技能
}