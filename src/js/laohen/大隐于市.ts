import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 大隐于市 = {
    "name": "大隐于市",
    "rarity": LaohenRarity.r, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.大隐于市,
    "tacgie": "e/e1/a8eplgmhwjxlxvf9ab1c7vcp6jx2v00.png",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.大力出奇迹,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.生机盎然方块α型,
        MXLaohenEnum.昂扬斗志三角α型,
        MXLaohenEnum.乘胜追击
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.冻结精通
    ], //唤醒技能
}