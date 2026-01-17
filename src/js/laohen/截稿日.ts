import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 截稿日 = {
    "name": "截稿日",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.截稿日,
    "tacgie": "9/9f/3elbiccljcekti6rnlx8wb073bjqs3x.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.狩猎时刻对精英,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.自动瞄准系统三角β型,
        MXLaohenEnum.强攻对空
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.自强不息
    ], //唤醒技能
}