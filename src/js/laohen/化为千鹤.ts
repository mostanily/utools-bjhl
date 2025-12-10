import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 化为千鹤 = {
    "name": "化为千鹤",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.化为千鹤,
    "tacgie": "e/e5/e8b44jbu8fcxpfnwbxoa32opz097dwh.png",
    "extraData": {
        "illust": LaohenIllust.kan, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.元素转化,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.自动瞄准系统方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.烈焰暴击
    ], //唤醒技能
}