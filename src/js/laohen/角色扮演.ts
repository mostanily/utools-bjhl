import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 角色扮演 = {
    "name": "角色扮演",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.角色扮演,
    "tacgie": "9/98/pzqofsqw5klfrnde7zsojfdz77dgp6t.png",
    "openDate": "2024-03-28",
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.距离把控,
        MXLaohenEnum.正义守护,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.化险为夷,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.针对打击三角
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.雷霆寒霜
    ], //唤醒技能
}