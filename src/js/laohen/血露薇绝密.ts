import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 血露薇绝密 = {
    "name": "血露薇·绝密",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.血露薇绝密,
    "tacgie": "d/d3/2h25umr07esihi14s4xg18m1lmmmrb1.png",
    "extraData": {
        "illust": LaohenIllust.min, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.距离把控,
        MXLaohenEnum.格挡反击,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.对空特攻α型,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.强攻对精英,
        MXLaohenEnum.自动瞄准系统方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.致命弱点
    ], //唤醒技能
}