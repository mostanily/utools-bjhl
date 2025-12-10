import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 晓梦迷花 = {
    "name": "晓梦迷花",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.晓梦迷花,
    "tacgie": "1/1c/60lhyldsomchcq569p6y9b72jhpuso1.png",
    "extraData": {
        "illust": LaohenIllust.YGeriAn, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.落后就要挨打,
        MXLaohenEnum.快步流星,
        MXLaohenEnum.势如破竹对地,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.坚定意志菱形α型,
        MXLaohenEnum.元素半衰期
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.奇核风动
    ], //唤醒技能
}