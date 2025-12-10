import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 残照 = {
    "name": "残照",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.体质,
    "id": LaohenNameEnum.残照,
    "tacgie": "1/10/twfuajberx05jifsmq30ebhwt21m0sv.png",
    "extraData": {
        "illust": LaohenIllust.灼忘, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.炎能灌注,
        MXLaohenEnum.虽远必诛,
        MXLaohenEnum.化险为夷,
        MXLaohenEnum.生生不息方块,
        MXLaohenEnum.自动瞄准系统方块α型,
        MXLaohenEnum.生机盎然方块α型,
        MXLaohenEnum.坚实护盾
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.弱点标记
    ], //唤醒技能
}