import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 向火而去 = {
    "name": "向火而去",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.向火而去,
    "tacgie": "e/e1/rclrb6soj7zn5cl8lzphn5u698nx55q.png",
    "openDate": "2026-01-01",
    "extraData": {
        "illust": LaohenIllust.东河, //画师,
        "resourse": LaohenResourse.定向潜航,
        "skillLink": "乐无异"
    },
    "mxSkill": [
        MXLaohenEnum.庇护共鸣,
        MXLaohenEnum.职业联动方块,
        MXLaohenEnum.一线生机,
        MXLaohenEnum.星河奔腾方块,
        MXLaohenEnum.强攻对地方块,
        MXLaohenEnum.异核过载,
        MXLaohenEnum.核心充能方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.机械充能
    ], //唤醒技能
}