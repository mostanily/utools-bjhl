import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 谎言之下 = {
    "name": "谎言之下",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.谎言之下,
    "tacgie": "9/90/6wok31ul2hv8l97rfx4mjzj9fhqudd8.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.护盾灌注,
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.利刃三角α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.召唤协调
    ], //唤醒技能
}