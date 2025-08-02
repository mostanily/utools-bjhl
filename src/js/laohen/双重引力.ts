import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 双重引力 = {
    "name": "双重引力",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.双重引力,
    "extraData": {
        "illust": LaohenIllust.阿尼鸭Anya, //画师,
        "resourse": LaohenResourse.寻迹潜航,
        "skillLink": "司危"
    },
    "mxSkill": [
        MXLaohenEnum.正义守护,
        MXLaohenEnum.电磁风暴,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.机械特攻α型,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.异种特攻α型,
        MXLaohenEnum.坚定意志菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.压力反制
    ], //唤醒技能
}