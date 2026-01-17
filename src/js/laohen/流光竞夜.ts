import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 流光竞夜 = {
    "name": "流光竞夜",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.流光竞夜,
    "tacgie": "e/e8/hvagvwigdfdqx1c1ct6xy0ewi5vnuyu.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.zz银咋, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.虽远必诛,
        MXLaohenEnum.元素残留,
        MXLaohenEnum.原生特攻β型,
        MXLaohenEnum.自动瞄准系统方块β型,
        MXLaohenEnum.昂扬斗志菱形β型,
        MXLaohenEnum.手执利兵菱形
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.屏障赋能物理
    ], //唤醒技能
}