import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 庆典巡游 = {
    "name": "庆典巡游",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.庆典巡游,
    "tacgie": "8/8d/esrqzsuvgzfqrk13gy4ew0h7u3f5max.png",
    "openDate": "2024-02-01",
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.摆脱困境,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.生机盎然方块β型,
        MXLaohenEnum.狩猎时刻对空,
        MXLaohenEnum.特殊减伤对空
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.协助强化
    ], //唤醒技能
}