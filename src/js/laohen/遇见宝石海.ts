import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 遇见宝石海 = {
    "name": "遇见宝石海",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.遇见宝石海,
    "tacgie": "d/d7/51wlp37bnslimgp2uful08y3wcopc2a.png",
    "openDate": "2024-08-08",
    "extraData": {
        "illust": LaohenIllust.木昆昆, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.回收利用,
        MXLaohenEnum.你相信光吗,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.单打独斗对首领,
        MXLaohenEnum.生机盎然方块β型,
        MXLaohenEnum.自动瞄准系统方块β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.穹雷破晓
    ], //唤醒技能
}