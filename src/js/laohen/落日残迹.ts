import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 落日残迹 = {
    "name": "落日残迹",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.落日残迹,
    "tacgie": "6/6d/iz2qghgyj0beghq1b9092sqs7bo51sn.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.沉重打击,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.铁杵磨成针菱形,
        MXLaohenEnum.元素半衰期,
        MXLaohenEnum.及时援助菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.元素炼炉
    ], //唤醒技能
}