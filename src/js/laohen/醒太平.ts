import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 醒太平 = {
    "name": "醒太平",
        "rarity": LaohenRarity.sr, //稀有度
        "type": LaohenAttrType.体质,
        "id": LaohenNameEnum.醒太平,
        "tacgie": "7/7f/b5ib38l87clj56q57308tmei4a8nf3e.png",
        "openDate": "2024-02-22",
        "extraData": {
            "illust": LaohenIllust.鲸谜, //画师,
            "resourse": LaohenResourse.活动
        },
        "mxSkill": [
            MXLaohenEnum.元素转化,
            MXLaohenEnum.金刚不坏,
            MXLaohenEnum.化险为夷,
            MXLaohenEnum.乘人之危对地,
            MXLaohenEnum.核心充能方块α型,
            MXLaohenEnum.生机盎然方块α型
        ], //慢巡技能
        "hxSkill": [
            MXLaohenEnum.坚毅不倒
        ], //唤醒技能
}