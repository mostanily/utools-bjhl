import { toastWithSkill } from './toastWithSkillConst.ts';
import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';

class DefaultRes {
    desc: string;
    color: number;
    repIndex: number;
    withToast: boolean;
    title: string;
    con: (string | (string | { desc: string, color: number })[]) | (string | (string | { desc: string, color: number })[])[];
    conSpe: any[];
    isImg: boolean;
    constructor() {
        this.desc = ""
        this.color = 0
        this.repIndex = -1
        this.withToast = false
        this.title = ""
        this.con = ""
        this.conSpe = new Array
        this.isImg = false
    }
}

/**
 * 返回特殊技能内容对象
 * @param con 特殊技能内容
 * @param color 颜色类型
 * @param toastTitle toast弹窗标题内容
 * @returns 
 */
const speSkillCon = (con: string, color: number = SkillColorEnum.normal, toastTitle: number = -1, repIndex: number = -1) => {
    const res = new DefaultRes()
    res.desc = con
    res.color = color
    res.repIndex = repIndex
    if (toastTitle != -1) {
        res.withToast = true
        if (typeof toastWithSkill[toastTitle][0] === "string") {
            res.title = toastWithSkill[toastTitle][0]
        }
        if (typeof toastWithSkill[toastTitle][1] === "string") {
            res.con = toastWithSkill[toastTitle][1]
        } else {
            res.conSpe = toastWithSkill[toastTitle][1]
        }
    }
    return res
}

/**
 * 返回特殊技能内容对象(仅展示图片)
 * @param skillStatusEnum 技能状态对应的枚举值
 * @returns 
 */
const speSkillConWithImg = (skillStatusEnum: number) => {
    const res = new DefaultRes()
    res.isImg = true
    res.desc = `img/skill/skill-status/${skillStatusEnum}.png`;
    return res
}

export { speSkillCon, speSkillConWithImg, DefaultRes }