import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 芳年未及 = {
    "name": "芳年未及",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.芳年未及,
    "extraData": {
        "illust": LaohenIllust.墨秃, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.庇佑,
        MXLaohenEnum.星河奔腾三角,
        MXLaohenEnum.暴风骤雨三角β型,
        MXLaohenEnum.自动瞄准系统三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀能联结
    ], //唤醒技能
}