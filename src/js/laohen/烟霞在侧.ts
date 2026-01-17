import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 烟霞在侧 = {
    "name": "烟霞在侧",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.烟霞在侧,
    "tacgie": "3/35/pm3av2fp6z7dkpxrcmdqe27ktbduwud.png",
    "openDate": "2025-12-04",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.元素领袖风,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.元素锋刃
    ], //唤醒技能
}