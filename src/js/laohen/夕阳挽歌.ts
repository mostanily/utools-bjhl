import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 夕阳挽歌 = {
    "name": "夕阳挽歌",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.攻击,
    "id": LaohenNameEnum.夕阳挽歌,
    "tacgie": "e/ee/jthjoo86ajq4vjx067usjn39cxsikay.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.竹墨繁漪, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.生命收割,
        MXLaohenEnum.落后就要挨打,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.对空特攻α型,
        MXLaohenEnum.利刃三角α型,
        MXLaohenEnum.自动瞄准系统三角α型,
        MXLaohenEnum.伤害赐福菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.力量喷涌
    ], //唤醒技能
}