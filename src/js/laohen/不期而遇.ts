import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 不期而遇 = {
    "name": "不期而遇",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.不期而遇,
    "tacgie": "f/f0/d2ol0zmv9ett86fhnn5aoi3p9p4q4o9.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.zz银咋, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.失控元素,
        MXLaohenEnum.福被众生,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.元素半衰期,
        MXLaohenEnum.铁杵磨成针菱形,
        MXLaohenEnum.落井下石
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.退敌之势
    ], //唤醒技能
}