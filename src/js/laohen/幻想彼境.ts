import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 幻想彼境 = {
    "name": "幻想彼境",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.幻想彼境,
    "tacgie": "5/5a/be6q097mv7zn38hx5cwqqtx68mw5f8b.png",
    "extraData": {
        "illust": LaohenIllust.印巴巴, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.元素瞄准,
        MXLaohenEnum.职业联动菱形,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.及时援助菱形β型,
        MXLaohenEnum.伤害赐福菱形β型,
        MXLaohenEnum.核心充能菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.反应增幅
    ], //唤醒技能
}