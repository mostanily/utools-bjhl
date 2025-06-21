import { toastWithSkill } from './toastWithSkillConst.ts';
import { SkillColorEnum } from '../enum/skillSimpleEnum.ts';

/**
 * 返回特殊技能内容对象
 * @param con 特殊技能内容
 * @param color 颜色类型
 * @param toastTitle toast弹窗标题内容
 * @returns 
 */
const speSkillCon = (con: string, color: number = SkillColorEnum.normal, toastTitle: number = -1, repIndex: number = -1) => {
    const res = { "desc": con, "color": color, "repIndex": repIndex, "withToast": false, "title": "", "con": "", "conSpe": new Array };
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

export { speSkillCon }