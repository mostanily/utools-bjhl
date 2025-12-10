import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 一线之隔 = {
    "name": "一线之隔",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.一线之隔,
    "tacgie": "b/bb/jn1150o3ewr3bxkf5x89kl0uxg40fya.png",
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.生命收割,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.机械特攻α型,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.核心充能方块α型,
        MXLaohenEnum.手执利兵菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.坚硬外皮
    ], //唤醒技能
}