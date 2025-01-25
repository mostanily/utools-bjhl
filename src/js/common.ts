import { charAttr, allChar, allCharSkill, allCharTea } from './consts/charConsts.ts';
import { colorConfig } from './consts/simpleConsts.ts';
import { poolConfig, roleConfig, laohenConfig} from './consts/chouConfig.ts';

/**
 * 角色通用类
 */
export default class CommonUtil {

    static charAttr = charAttr
    static allChar = allChar
    static allCharSkill = allCharSkill
    static allCharTea = allCharTea
    static poolConfig = poolConfig
    static roleConfig = roleConfig
    static laohenConfig = laohenConfig

    /**
     * 获取角色头像
     * @param {string} charName 角色名称，如：景
     * @param {number} xType 头像尺寸类型，共有 1,1.5,2三种类型
     * @returns 
     */
    static getCharImg(charName: string, xType: number) {
        if (xType === 1) {
            return 'img/char/1x/80px-角色_' + charName + '_头像.png';
        } else if (xType === 1.5) {
            return 'img/char/1.5x/120px-角色_' + charName + '_头像.png';
        } else {
            return 'img/char/2x/160px-角色_' + charName + '_头像.png';
        }
    }
    /**
     * 获取角色所属元素图标
     * @param {string} attrName 元素名称，如：火
     * @param {number} xType 头像尺寸类型，共有 1,1.5两种类型
     * @param {boolean} isOriginal 是否需要获取圆形的图片地址，默认false
     * @returns 
     */
    static getCharAttrImg(attrName: string, xType: number, isOriginal: boolean = false) {
        if (xType === 1) {
            return isOriginal ? 'img/charAttr/single/1x/20px-Ui_元素_' + attrName + '.png'
                : 'img/charAttr/1x/80px-UI_头像缩略图_元素_' + attrName + '.png';
        } else if (xType === 1.5) {
            return isOriginal ? 'img/charAttr/single/1.5x/30px-Ui_元素_' + attrName + '.png'
                : 'img/charAttr/1.5x/108px-UI_头像缩略图_元素_' + attrName + '.png';
        } else {
            //方形的图片不存在2x类型，所以此处直接返回圆形的图片
            return 'img/charAttr/single/1.5x/40px-Ui_元素_' + attrName + '.png'
        }
    }
    /**
     * 获取角色所属星级图标
     * @param {number} star 角色所属星级，如：6
     * @param {number} xType 头像尺寸类型，共有 1,1.5,2三种类型
     * @returns 
     */
    static getCharStarImg(star: number, xType: number) {
        if (xType === 1) {
            return 'img/charStar/1x/80px-UI_头像缩略图_星级_' + star + '星.png';
        } else if (xType === 1.5) {
            return 'img/charStar/1.5x/120px-UI_头像缩略图_星级_' + star + '星.png';
        } else {
            return 'img/charStar/2x/140px-UI_头像缩略图_星级_' + star + '星.png';
        }
    }
    /**
     * 获取角色所属职业图标
     * @param {string} jobName 角色所属职业名称（共7种职业），如：尖锋
     * @param {number} xType 头像尺寸类型，共有 1,1.5,2三种类型
     * @returns 
     */
    static getJobTypeImg(jobName: string, xType: number) {
        if (xType === 1) {
            return 'img/jobType/1x/30px-UI_头像缩略图_职业_' + jobName + '.png';
        } else if (xType === 1.5) {
            return 'img/jobType/1.5x/45px-UI_头像缩略图_职业_' + jobName + '.png';
        } else {
            return 'img/jobType/2x/60px-UI_头像缩略图_职业_' + jobName + '.png';
        }
    }

    /**
     * 获取技能描述中的伤害或乘区数值的颜色设置
     * @param colorEnum 
     * @returns 
     */
    static getSkillNumColor(colorEnum: number) {
        return colorConfig[colorEnum]
    }

    /**
     * 获取角色的技能图标
     * @param aliasNum 技能别称
     * @param charName 角色名称
     * @param xType 图片尺寸类型
     * @returns 
     */
    static getSkillImg(aliasNum: string, charName: string, xType: number) {
        if (aliasNum === '特性' || aliasNum === '特性强化') {
            return CommonUtil.getSpeSkillImg(xType, aliasNum)
        }
        if (xType === 1) {
            return 'img/skill/1x/50px-' + charName + '_' + aliasNum + '.png'
        } else if (xType === 1.5) {
            return 'img/skill/1.5x/75px-' + charName + '_' + aliasNum + '.png'
        } else {
            return 'img/skill/2x/100px-' + charName + '_' + aliasNum + '.png'
        }
    }

    /**
     * 获取通用特性技能图标
     * @param xType 图片尺寸类型
     * @param aliasNum 技能别称
     * @returns 
     */
    static getSpeSkillImg(xType: number, aliasNum: string) {
        if (xType === 1) {
            return 'img/skill/1x/50px-' + aliasNum + '.png'
        } else if (xType === 1.5) {
            return 'img/skill/1.5x/75px-' + aliasNum + '.png'
        } else {
            return 'img/skill/2x/100px-' + aliasNum + '.png'
        }
    }
}