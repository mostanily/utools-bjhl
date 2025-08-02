import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 失途之日 = {
    "name": "失途之日",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.失途之日,
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.BonusTime,
        MXLaohenEnum.职业联动三角,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.势如破竹对空,
        MXLaohenEnum.暴风骤雨三角β型,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.自动瞄准系统三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.风力加剧
    ], //唤醒技能
}