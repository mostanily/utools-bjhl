import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 朗朗乾坤 = {
    "name": "朗朗乾坤",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.朗朗乾坤,
    "tacgie": "7/72/6m0j5gipstdw137fupew5lzu6k1wudl.png",
    "extraData": {
        "illust": LaohenIllust.跟头, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.你相信光吗,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.大敌当前,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.特殊减伤对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.麻痹大意
    ], //唤醒技能
}