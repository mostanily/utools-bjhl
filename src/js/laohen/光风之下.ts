import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 光风之下 = {
    "name": "光风之下",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.光风之下,
    "tacgie": "b/bb/axqf11dbjb7dsatgo7we7ixpa4plbio.png",
    "openDate": "2025-10-09",
    "extraData": {
        "illust": LaohenIllust.kana酱, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "紫都"
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.充能回复,
        MXLaohenEnum.元素领袖风,
        MXLaohenEnum.元素专攻菱形β型,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.千嶂风鸣
    ], //唤醒技能
}