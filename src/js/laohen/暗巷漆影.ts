import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 暗巷漆影 = {
    "name": "暗巷漆影",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.暗巷漆影,
    "tacgie": "0/03/4p1ba08kq1iuh6anbbo8n2a6ic4mq8k.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Akai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.容光焕发,
        MXLaohenEnum.充能回复,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.手执利兵三角,
        MXLaohenEnum.暴风骤雨三角α型,
        MXLaohenEnum.乘胜追击
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.人多势众
    ], //唤醒技能
}