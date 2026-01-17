import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 繁星记忆 = {
    "name": "繁星记忆",
    "rarity": LaohenRarity.sr, //稀有度
    "type": LaohenAttrType.专精,
    "id": LaohenNameEnum.繁星记忆,
    "tacgie": "c/cb/2ovnj2wpaaxe3jfvrmky5qwnvf8os9k.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.猫鱼, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.生命颂歌,
        MXLaohenEnum.格挡反击,
        MXLaohenEnum.乘人之危对精英,
        MXLaohenEnum.势如破竹对精英,
        MXLaohenEnum.手执利兵方块,
        MXLaohenEnum.生机盎然方块α型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.反客为主
    ], //唤醒技能
}