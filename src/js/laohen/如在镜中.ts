import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 如在镜中 = {
    "name": "如在镜中",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.如在镜中,
    "tacgie": "4/4b/4ytr69y70crwp2y3x4tjnalpwfi0adp.png",
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.元素逆转三角,
        MXLaohenEnum.乘人之危对地,
        MXLaohenEnum.强攻对空,
        MXLaohenEnum.元素专攻三角β型,
        MXLaohenEnum.特殊减伤对地,
        MXLaohenEnum.星河奔腾三角
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.蚀力穿透
    ], //唤醒技能
}