import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const Feat = {
    "name": "Feat",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.Feat,
    "tacgie": "8/88/ghzo60amvpbavz94y5t95hhdg3yiwuu.png",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.复数共振,
        MXLaohenEnum.屏障效应,
        MXLaohenEnum.元素专攻方块β型,
        MXLaohenEnum.星河奔腾三角,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.大敌当前
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.远击增幅
    ], //唤醒技能
}