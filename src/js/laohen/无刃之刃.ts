import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 无刃之刃 = {
    "name": "无刃之刃",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.无刃之刃,
    "tacgie": "4/40/sl83jyhtkc1unflva49leiyyix2se3p.png",
    "openDate": "2025-11-20",
    "extraData": {
        "illust": LaohenIllust.当雨作金泽, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "崔远之"
    },
    "mxSkill": [
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.元素领袖雷,
        MXLaohenEnum.利刃三角β型,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.自动瞄准系统三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.瞬狱雷光
    ], //唤醒技能
}