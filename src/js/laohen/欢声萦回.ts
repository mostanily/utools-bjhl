import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 欢声萦回 = {
    "name": "欢声萦回",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.欢声萦回,
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.定向潜航
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.擒贼先擒王,
        MXLaohenEnum.铁杵磨成针三角,
        MXLaohenEnum.强攻对地,
        MXLaohenEnum.特殊减伤对地,
        MXLaohenEnum.自动瞄准系统三角β型,
        MXLaohenEnum.元素专攻三角β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.深邃蚀渊
    ], //唤醒技能
}