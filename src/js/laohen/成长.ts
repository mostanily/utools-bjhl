import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 成长 = {
    "name": "成长",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.成长,
    "tacgie": "2/2a/40o35qn7erykrfak4gtaeqdoo4r8s3c.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.BITE, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.护盾赐福,
        MXLaohenEnum.为友谊干杯,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.昂扬斗志三角β型,
        MXLaohenEnum.暴风骤雨三角β型,
        MXLaohenEnum.及时援助菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.护盾共鸣
    ], //唤醒技能
}