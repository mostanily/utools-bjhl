import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 繁花蜃影 = {
    "name": "繁花蜃影",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.繁花蜃影,
    "tacgie": "f/f0/0yf4sx405ayrglmlcalo2a67f3b3rig.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.摆脱困境,
        MXLaohenEnum.破釜沉舟,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.化险为夷,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.自动瞄准系统方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀之激励
    ], //唤醒技能
}