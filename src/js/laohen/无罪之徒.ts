import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 无罪之徒 = {
    "name": "无罪之徒",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.无罪之徒,
    "tacgie": "d/da/5nfyxqezwsul56m84xes81xh2dekv2f.png",
    "openDate": "2024-07-18",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.轻车熟路,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.针锋相对对首领,
        MXLaohenEnum.星河奔腾菱形,
        MXLaohenEnum.落井下石,
        MXLaohenEnum.元素专攻菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.万象侵袭
    ], //唤醒技能
}