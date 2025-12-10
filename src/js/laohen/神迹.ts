import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 神迹 = {
    "name": "神·迹",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.神迹,
    "tacgie": "a/a2/285utyrrbnh4sstyckv2tw7mjlzbjlo.png",
    "extraData": {
        "illust": LaohenIllust.竹墨繁漪, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.精神振奋,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.元素专攻三角β型,
        MXLaohenEnum.庇佑,
        MXLaohenEnum.失焦
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.屏碎涟漪
    ], //唤醒技能
}