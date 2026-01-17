import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 藏锋 = {
    "name": "藏锋",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.藏锋,
    "tacgie": "e/e2/58xmj8wypb6wir5fp1ntlj7hfkuvj2m.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.iii303, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.复仇者之怒,
        MXLaohenEnum.治愈加速,
        MXLaohenEnum.对空特攻α型,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.暴风骤雨三角α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀力渗透
    ], //唤醒技能
}