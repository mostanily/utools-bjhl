import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 问卜天地 = {
    "name": "问卜天地",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.问卜天地,
    "tacgie": "e/ec/jlgg0zlnhc5ld6on658w2zr8uoym4qh.png",
    "openDate": "2024-05-09",
    "extraData": {
        "illust": LaohenIllust.鲛猫, //画师,
        "resourse": LaohenResourse.活动
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.轻车熟路,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.强攻对精英
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.元素效应
    ], //唤醒技能
}