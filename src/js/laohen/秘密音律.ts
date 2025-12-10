import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 秘密音律 = {
    "name": "秘密音律",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.秘密音律,
    "tacgie": "5/54/5w02u6sfpfalgzeox0gogn4ykyyff7a.png",
    "extraData": {
        "illust": LaohenIllust.太子池安, //画师,
        "resourse": LaohenResourse.叶脉联结计划
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.人形特攻β型,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.自动瞄准系统三角β型,
        MXLaohenEnum.狩猎时刻对空
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.连击精通
    ], //唤醒技能
}