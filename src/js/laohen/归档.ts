import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 归档 = {
    "name": "归档",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.归档,
    "tacgie": "b/b3/f36okcwrf8903wmvzzqk8qbwr2vqude.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.机械特攻α型,
        MXLaohenEnum.庇佑,
        MXLaohenEnum.核心充能三角α型,
        MXLaohenEnum.针对打击三角
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.信号干扰三角
    ], //唤醒技能
}