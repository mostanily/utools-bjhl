import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 城市嚣音 = {
    "name": "城市嚣音",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.城市嚣音,
    "tacgie": "a/ad/ni49w503igr6z455owunbe8w5f7keg9.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.混合打击,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.自动瞄准系统三角α型,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.狩猎时刻对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.单点突破
    ], //唤醒技能
}