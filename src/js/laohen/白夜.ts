import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 白夜 = {
    "name": "白夜",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.白夜,
    "tacgie": "7/7a/alkzy4ug16tiz1pu4598s6jzx65slih.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.印巴巴, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.BonusTime,
        MXLaohenEnum.为友谊干杯,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.狩猎时刻对空,
        MXLaohenEnum.核心充能三角β型,
        MXLaohenEnum.利刃三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.祝福区域
    ], //唤醒技能
}