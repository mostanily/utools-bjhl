import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 你好维瑟尔 = {
    "name": "你好，维瑟尔",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.你好维瑟尔,
    "tacgie": "5/53/i3wvt1qp2d5chn5gxoij7tbjzsnmuo0.png",
    "extraData": {
        "illust": LaohenIllust.Akai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.正义守护,
        MXLaohenEnum.自动防御系统,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.昂扬斗志方块β型,
        MXLaohenEnum.生机盎然方块β型,
        MXLaohenEnum.大敌当前
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.冻结延长
    ], //唤醒技能
}