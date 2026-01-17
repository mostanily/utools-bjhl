import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 世事难料 = {
    "name": "世事难料",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.世事难料,
    "tacgie": "b/b8/42gueeude2de8lm0w4eoeywt8l2u9ut.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.熟了的鱼, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.黄金精神,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.生机盎然方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.百折不挠方块
    ], //唤醒技能
}