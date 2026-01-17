import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 系 = {
    "name": "「系」",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.系,
    "tacgie": "6/65/ff91pzep8nkyppkqa2hys9fe4wybuxp.png",
    "openDate": "2026-01-15",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.回收利用,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.元素专攻三角α型,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.乘人之危对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.异能解构
    ], //唤醒技能
}