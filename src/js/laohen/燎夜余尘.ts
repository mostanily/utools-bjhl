import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 燎夜余尘 = {
    "name": "燎夜余尘",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.燎夜余尘,
    "tacgie": "5/51/1jvb3ub5yepquaihgd7e27b975dt8c5.png",
    "openDate": "2025-06-19",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.强攻对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.炎雷同灼
    ], //唤醒技能
}