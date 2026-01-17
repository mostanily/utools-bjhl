import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 雪轻日暖 = {
    "name": "雪轻日暖",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.雪轻日暖,
    "tacgie": "f/f4/hoczbddv7arj7yaas064svrzlxhtxo0.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Juanmao, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.主场优势,
        MXLaohenEnum.奉献,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.核心充能方块β型,
        MXLaohenEnum.核心充能菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.主场扩大
    ], //唤醒技能
}