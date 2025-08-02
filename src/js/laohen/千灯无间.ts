import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 千灯无间 = {
    "name": "千灯无间",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.千灯无间,
    "extraData": {
        "illust": LaohenIllust.乔瑟夫乔尊尊, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.充能回复,
        MXLaohenEnum.核心充能菱形β型,
        MXLaohenEnum.暴风骤雨菱形β型,
        MXLaohenEnum.元素领袖蚀,
        MXLaohenEnum.蓄势待发,
        MXLaohenEnum.异核过载
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.伤疗双效
    ], //唤醒技能
}