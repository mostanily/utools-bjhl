import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 科技光辉 = {
    "name": "科技光辉",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.防御,
    "id": LaohenNameEnum.科技光辉,
    "tacgie": "4/4f/9ay2jbcx5t79mcxa2e5ym4pbjf7ftej.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.治愈守备,
        MXLaohenEnum.大敌当前,
        MXLaohenEnum.自动瞄准系统三角α型,
        MXLaohenEnum.特殊减伤对地,
        MXLaohenEnum.失焦
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.坚毅不屈
    ], //唤醒技能
}