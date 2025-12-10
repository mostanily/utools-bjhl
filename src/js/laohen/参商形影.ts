import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 参商形影 = {
    "name": "参商形影",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.参商形影,
    "tacgie": "e/e9/tawezirlrkbdviccemiyruelggsgajr.png",
    "extraData": {
        "illust": LaohenIllust.印巴巴, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.屏障效应,
        MXLaohenEnum.水利万物,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.生机盎然方块β型,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.润物无声
    ], //唤醒技能
}