import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 通道 = {
    "name": "通道",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.通道,
    "tacgie": "8/89/gj62rttcf2r2mnyh6yjeagiwzm2kj22.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.BonusTime,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.手执利兵三角,
        MXLaohenEnum.生机盎然方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.熊熊燃烧
    ], //唤醒技能
}