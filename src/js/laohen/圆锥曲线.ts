import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 圆锥曲线 = {
    "name": "圆锥曲线",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.圆锥曲线,
    "tacgie": "9/9b/qxv6hzkhsf8081k7p05xvvku2c8dyc4.png",
    "openDate": "2024-04-25",
    "extraData": {
        "illust": LaohenIllust.熟了的鱼, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.混合打击,
        MXLaohenEnum.为友谊干杯,
        MXLaohenEnum.核心充能三角α型,
        MXLaohenEnum.昂扬斗志三角α型,
        MXLaohenEnum.暴风骤雨三角α型,
        MXLaohenEnum.特殊减伤对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.陷阵勇士
    ], //唤醒技能
}