import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 烟尘往事 = {
    "name": "烟尘往事",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.烟尘往事,
    "tacgie": "0/0d/4z0bliydszqhl5apv52h8s2ux4x8f0z.png",
    "openDate": "2024-01-25",
    "extraData": {
        "illust": LaohenIllust.AurogonShanghai, //画师,
        "resourse": LaohenResourse.主线
    },
    "mxSkill": [
        MXLaohenEnum.蚀力掌控,
        MXLaohenEnum.深藏身与名,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.机械特攻β型,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.核心充能菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.元素注能
    ], //唤醒技能
}