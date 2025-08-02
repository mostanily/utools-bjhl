import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 逐光者 = {
    "name": "逐光者",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.逐光者,
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.抓准时机,
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.暴风骤雨三角α型,
        MXLaohenEnum.特殊减伤对空,
        MXLaohenEnum.及时援助菱形α型,
        MXLaohenEnum.坚定意志菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.成功掩护
    ], //唤醒技能
}