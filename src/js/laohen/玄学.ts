import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 玄学 = {
    "name": "「玄」学",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.玄学,
    "tacgie": "0/02/091yhz1lnj8dxioazxc4ondwazlgzi6.png",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.摆脱困境,
        MXLaohenEnum.你相信光吗,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.化险为夷
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.生人勿近方块
    ], //唤醒技能
}