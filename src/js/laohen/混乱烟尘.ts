import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 混乱烟尘 = {
    "name": "混乱烟尘",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.混乱烟尘,
    "tacgie": "e/eb/kojgyc0gami0v9zqe3fxr4pctd5mfg9.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.自动瞄准系统三角α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.集中火力
    ], //唤醒技能
}