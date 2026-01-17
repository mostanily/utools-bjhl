import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 偷偷摩摩 = {
    "name": "偷偷「摩摩」",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.偷偷摩摩,
    "tacgie": "0/05/lhjqvqsv4bs7zl8pix5jrjby0khged8.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Juanmao, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.危险预警,
        MXLaohenEnum.治愈守备,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.饱和式救援,
        MXLaohenEnum.特殊减伤对首领,
        MXLaohenEnum.失焦
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.自愈能量
    ], //唤醒技能
}