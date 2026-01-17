import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 曙色的地平线 = {
    "name": "曙色的地平线",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.曙色的地平线,
    "tacgie": "8/8f/1ox2urm2hyks8t87oxnzzsecsntxlgg.png",
    "openDate": "2024-10-10",
    "extraData": {
        "illust": LaohenIllust.东河, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.虽远必诛,
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.失焦,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.单打独斗对首领,
        MXLaohenEnum.生生不息方块
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.轰能激发
    ], //唤醒技能
}