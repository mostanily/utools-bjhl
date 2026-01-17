import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 一枕酣甜 = {
    "name": "一枕酣甜",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.一枕酣甜,
    "tacgie": "6/6e/mh70q7yevbq23wi5tunzdc9mn1m7h1n.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Akai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.侵蚀,
        MXLaohenEnum.元素瞄准,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.铁杵磨成针菱形,
        MXLaohenEnum.及时援助菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.束缚蚀力
    ], //唤醒技能
}