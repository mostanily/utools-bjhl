import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 旧巷 = {
    "name": "旧巷",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.旧巷,
    "tacgie": "9/92/klvnh1ktnzu0zvv91iqwd55tsvxogrv.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.电磁风暴,
        MXLaohenEnum.针对打击菱形,
        MXLaohenEnum.坚实护盾,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.核心充能菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.福利发放
    ], //唤醒技能
}