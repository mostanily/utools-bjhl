import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 同行 = {
    "name": "同行",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.同行,
    "tacgie": "8/80/99a62omly6xnzh7h9zac2yu4x7qqwnb.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航,
        "skillLink": "苏筱"
    },
    "mxSkill": [
        MXLaohenEnum.格挡专攻,
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.化险为夷,
        MXLaohenEnum.庇佑
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.生命祝福
    ], //唤醒技能
}