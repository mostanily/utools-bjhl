import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 最好吃的朋友 = {
    "name": "最好吃的朋友",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.最好吃的朋友,
    "tacgie": "8/83/3cfp5sf35f8hn3td88chz5j9uxk5071.png",
    "extraData": {
        "illust": LaohenIllust.墨秃, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.奉献,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.烹饪时刻
    ], //唤醒技能
}