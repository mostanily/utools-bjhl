import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 魇境边界 = {
    "name": "魇境边界",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.魇境边界,
    "tacgie": "e/e8/nmp182nqmdyscliv8br1ud3vtsiiguk.png",
    "openDate": "2024-10-10",
    "extraData": {
        "illust": LaohenIllust.iii303, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.元素领袖雷,
        MXLaohenEnum.元素专攻三角α型,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.强攻对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.力量平衡
    ], //唤醒技能
}