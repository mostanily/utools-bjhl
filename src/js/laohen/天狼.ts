import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 天狼 = {
    "name": "天狼",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.天狼,
    "tacgie": "5/5b/hkkwgnm3ivwn09c5t3tx6z8ma0dwzm7.png",
    "openDate": "2024-03-28",
    "extraData": {
        "illust": LaohenIllust.MOL, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.片叶不沾身,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.失焦,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.乘胜追击
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.冰冻三尺
    ], //唤醒技能
}