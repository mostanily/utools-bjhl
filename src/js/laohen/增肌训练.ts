import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 增肌训练 = {
    "name": "增肌训练",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.增肌训练,
    "tacgie": "9/96/ml6k597pripc17517jmkzsonivqmg77.png",
    "extraData": {
        "illust": LaohenIllust.熟了的鱼, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.弱点石化,
        MXLaohenEnum.狩猎时刻对精英,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.强攻对空
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.狙击
    ], //唤醒技能
}