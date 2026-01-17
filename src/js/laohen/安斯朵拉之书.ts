import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 安斯朵拉之书 = {
    "name": "安斯朵拉之书",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.安斯朵拉之书,
    "tacgie": "4/40/2ylqt08vxegjtjqhwl0y9x209u275fm.png",
    "openDate": "2025-12-29",
    "extraData": {
        "illust": LaohenIllust.Noir, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.庇佑,
        MXLaohenEnum.失焦,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.异核过载
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.风能助力
    ], //唤醒技能
}