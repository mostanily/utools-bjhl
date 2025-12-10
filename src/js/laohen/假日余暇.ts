import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 假日余暇 = {
    "name": "假日余暇",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.假日余暇,
    "tacgie": "0/06/pfc8fv1tp5tc7fstwt6pzwou23fyfu8.png",
    "extraData": {
        "illust": LaohenIllust.熏肉, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.危险游戏,
        MXLaohenEnum.容光焕发,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.坚实护盾,
        MXLaohenEnum.生生不息菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.统筹备战
    ], //唤醒技能
}