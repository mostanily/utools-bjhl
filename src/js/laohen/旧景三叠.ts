import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 旧景三叠 = {
    "name": "旧景三叠",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.旧景三叠,
    "tacgie": "b/b9/c2l3tjpx0oxdsr3ryq4r2ai31ln2er4.png",
    "openDate": "2026-01-15",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.为友谊干杯,
        MXLaohenEnum.核心充能三角α型,
        MXLaohenEnum.暴风骤雨三角α型,
        MXLaohenEnum.元素专攻三角α型,
        MXLaohenEnum.元素领袖炎
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.利刃侵袭
    ], //唤醒技能
}