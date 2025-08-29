import { allLaohenSkill } from './laohenConsts.ts'
import { canChangeSkill, beforeChangeSkill } from './simpleConsts.ts'


class DefaultSourceLH {
    烙痕漫巡技能;
    烙痕唤醒技能;
    队长刻印技能;
    constructor() {
        this.烙痕漫巡技能 = new Array;
        this.烙痕唤醒技能 = new Array;
        this.队长刻印技能 = new Array;
    }
}

class DefaultSkillObj extends DefaultSourceLH {
    ids;
    constructor() {
        super();
        this.ids = new Array;
    }
}

class DefaultNeedChangeSkillData {
    name;
    sourseLaohen;
    constructor() {
        this.name = ''
        this.sourseLaohen = new DefaultSourceLH();
    }
}
//定义一个符合规则的空对象，方便初始化可改造技能数据
const canChangeSkillSetObj: Record<string, DefaultSkillObj> = {}

class InitLaohenSkill {
    laohenskill;
    canChangeSkillSet;
    constructor() {
        this.laohenskill = allLaohenSkill;
        this.canChangeSkillSet = canChangeSkillSetObj
        canChangeSkill.forEach((name) => {
            this.canChangeSkillSet[name] = new DefaultSkillObj()
        })

        for (let key in allLaohenSkill) {
            const currSkill = allLaohenSkill[key]
            let dataObj = new DefaultNeedChangeSkillData()
            dataObj.name = currSkill.name
            dataObj.sourseLaohen.烙痕漫巡技能 = currSkill.sourseLaohen.烙痕漫巡技能
            dataObj.sourseLaohen.烙痕唤醒技能 = currSkill.sourseLaohen.烙痕唤醒技能
            dataObj.sourseLaohen.队长刻印技能 = currSkill.sourseLaohen.队长刻印技能
            let currIndex = Number(key)
            this.initCanChangeSkill(currIndex, this.canChangeSkillSet, dataObj)
        }
        this.resetChangeSkill(this.canChangeSkillSet)
    }
    /**
     * 初始化被改造的技能对应的所有烙痕信息（ID）
     * @param key 当前技能id
     * @param canChangeSkillSetObj 符合改造的技能对象集合
     * @param dataObj 当前技能临时对象数据
     */
    initCanChangeSkill(key: number, canChangeSkillSetObj: Record<string, DefaultSkillObj>, dataObj: DefaultNeedChangeSkillData) {
        let i = 0
        Object.entries(canChangeSkillSetObj).forEach(([, needChangeSkill]) => {
            this.initEachCanChangeSkill(key, i, needChangeSkill, dataObj)
            i++
        })
    }

    /**
     * 初始化可改造技能后，重新将可改造技能对应的烙痕信息重新赋值给原始烙痕数据中
     * @param canChangeSkillSetObj 符合改造的技能对象集合
     */
    resetChangeSkill(canChangeSkillSetObj: Record<string, DefaultSkillObj>) {
        let i = 0
        Object.entries(canChangeSkillSetObj).forEach(([, needChangeSkill]) => {
            this.resetEachChangeSkill(needChangeSkill, i)
            i++
        })
    }

    initEachCanChangeSkill(key: number, changeSkillIndex: number, needChangeSkill: DefaultSkillObj, dataObj: DefaultNeedChangeSkillData) {
        if (beforeChangeSkill[changeSkillIndex].includes(dataObj.name)) {
            this.laohenskill[key].takeEffect = [0]
            needChangeSkill.ids.push(key)
            needChangeSkill.烙痕漫巡技能 = [...needChangeSkill.烙痕漫巡技能, ...dataObj.sourseLaohen.烙痕漫巡技能]
            needChangeSkill.烙痕唤醒技能 = [...needChangeSkill.烙痕唤醒技能, ...dataObj.sourseLaohen.烙痕唤醒技能]
            needChangeSkill.队长刻印技能 = [...needChangeSkill.队长刻印技能, ...dataObj.sourseLaohen.队长刻印技能]
        }
    }

    resetEachChangeSkill(needChangeSkill: DefaultSkillObj, changeSkillIndex: number) {
        for (let id in needChangeSkill.ids) {
            const currId = needChangeSkill.ids[id]
            this.laohenskill[currId].name = canChangeSkill[changeSkillIndex]
            this.laohenskill[currId].sourseLaohen.烙痕漫巡技能 = needChangeSkill.烙痕漫巡技能
            this.laohenskill[currId].sourseLaohen.烙痕唤醒技能 = needChangeSkill.烙痕唤醒技能
            this.laohenskill[currId].sourseLaohen.队长刻印技能 = needChangeSkill.队长刻印技能
        }
    }
}

export { InitLaohenSkill }