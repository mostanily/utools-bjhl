import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 恶土之花 = {
    "name": "恶土之花",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.恶土之花,
    "tacgie": "0/0c/5301pr66vakzih7jjg6ia2bpf7kve83.png",
    "extraData": {
        "illust": LaohenIllust.和子君, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.回光返照,
        MXLaohenEnum.以头抢地,
        MXLaohenEnum.原生特攻α型,
        MXLaohenEnum.对空特攻α型,
        MXLaohenEnum.乘人之危对空,
        MXLaohenEnum.人形特攻α型,
        MXLaohenEnum.及时援助菱形α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.物理专精
    ], //唤醒技能
}