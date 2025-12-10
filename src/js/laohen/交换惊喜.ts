import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 交换惊喜 = {
    "name": "交换惊喜",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.交换惊喜,
    "tacgie": "5/56/ib0ao47lmdrpxz6kno58pkdsd057j72.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.正义守护,
        MXLaohenEnum.黄金精神,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.昂扬斗志方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.破阵乾坤
    ], //唤醒技能
}