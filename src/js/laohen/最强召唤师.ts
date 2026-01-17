import { MXLaohenEnum, LaohenNameEnum } from '../enum/laohenNameEnum.ts';
import { LaohenRarity, LaohenAttrType, LaohenResourse, LaohenIllust } from '../enum/skillSimpleEnum.ts';

export const 最强召唤师 = {
    "name": "最强召唤师",
    "rarity": LaohenRarity.ssr, //稀有度
    "type": LaohenAttrType.终端,
    "id": LaohenNameEnum.最强召唤师,
    "tacgie": "c/c1/aqu26leqsr0uweujw9alkph735xm9ns.png",
    "openDate": "2024-01-12",
    "extraData": {
        "illust": LaohenIllust.Juanmao, //画师,
        "resourse": LaohenResourse.寻迹潜航
    },
    "mxSkill": [
        MXLaohenEnum.能量缓释,
        MXLaohenEnum.回收利用,
        MXLaohenEnum.异种特攻β型,
        MXLaohenEnum.对空特攻β型,
        MXLaohenEnum.无处可藏,
        MXLaohenEnum.及时援助菱形β型,
        MXLaohenEnum.核心充能菱形β型
    ], //慢巡技能
    "hxSkill": [
        MXLaohenEnum.冰霜共鸣
    ], //唤醒技能
}