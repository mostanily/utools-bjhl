import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 海临人的好奇心 = {
    "name": "海临人的好奇心",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.海临人的好奇心,
    "tacgie": "4/49/139mscxwo4r7il5owizo2tl47vpab7o.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.太子池安, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.治愈加速,
        MXLaohenEnum.渐入佳境,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.特殊减伤对空,
        MXLaohenEnum.针对打击三角,
        MXLaohenEnum.强攻对地
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.隐匿其中
    ], //唤醒技能
}