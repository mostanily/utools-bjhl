import { allLaohen, getSpeLink } from './consts/laohenConsts.ts'
import {
    rarityName,
    rarityEnName,
    jobNames,
    IllustNames,
    LaohenResourseName,
    LaohenSkillTypeName
} from './consts/simpleConsts.ts'
import { InitLaohenSkill } from './consts/changeSkillConst'

export default class Laohen {
    static rarityName = rarityName
    static rarityEnName = rarityEnName
    static IllustNames = IllustNames
    static attrName = ["体质", "防御", "攻击", "专精", "终端"]
    static LaohenResourseName = LaohenResourseName
    static laohenSkillTypeName = LaohenSkillTypeName

    /**
     * 所有烙痕技能，此处列出的技能必须与枚举类顺序一致
     */
    static allLaohenSkill = (new InitLaohenSkill()).laohenskill

    /**
     * 所有烙痕
     */
    static allLaohen = allLaohen

    /**
     * 获取烙痕技能详情
     * @param laohen 入参为此枚举值MXLaohenEnum.(xx)
     * @returns 返回单个技能详情
     */
    static getLaohenSkillDetaill(laohenSkillEnum: number) {
        return Laohen.allLaohenSkill[laohenSkillEnum];
    }

    /**
     * 获取烙痕详情
     * @param laohenEnum 烙痕枚举值，LaohenNameEnum.(x)
     * @returns 返回单个烙痕详情
     */
    static getLaohenDetail(laohenEnum: number) {
        return Laohen.allLaohen[laohenEnum];
    }

    /**
     * 获取稀有度中文名称
     * @param rarity 稀有度，枚举LaohenRarity.(x)
     * @param needEn 是否需要查询英文名称，默认true
     * @returns 
     */
    static getRarityName(rarity: number, needEn: boolean = true) {
        return needEn ? rarityEnName[rarity] : rarityName[rarity]
    }

    /**
     * 获取职业名称
     * @param jobType 职业类别，枚举JobTypeName.(x)
     * @returns 
     */
    static getJobName(jobType: number) {
        return jobNames[jobType]
    }

    /**
     * 获取画师名称
     * @param illustEnum 画师枚举值，LaohenIllust.(x)
     * @returns 
     */
    static getLaohenIllust(illustEnum: number) {
        return IllustNames[illustEnum]
    }

    /**
     * 获取烙痕来源名称
     * @param resourseEnum 来源枚举值
     * @returns 
     */
    static getLaohenResourseName(resourseEnum: number) {
        return LaohenResourseName[resourseEnum]
    }

    /**
     * 获取筛选条件对应的属性图片
     * @param attrName 烙痕属性值（体质、防御等）
     */
    static getLaohenAttrImg(attrName: string) {
        return 'img/laohen/laohen_' + attrName + '.png';
    }

    /**
     * 获取筛选条件对应的属性图片
     * @param attrEnum 属性枚举
     * @returns 
     */
    static getLaohenAttrImgWithEnum(attrEnum: number) {
        return Laohen.getLaohenAttrImg(Laohen.attrName[attrEnum])
    }

    /**
     * 获取烙痕属性背景图片
     * @param attrEnum 烙痕对应属性的枚举值
     */
    static getLaohenAttrNavImg(attrEnum: number) {
        return 'img/laohen/laohen_nav_' + Laohen.attrName[attrEnum] + '.png';
    }

    /**
     * 获取烙痕卡面稀有度背景图片
     * @param rarityEnum 烙痕稀有度对应的枚举值
     */
    static getLaohenBgNavRarityImg(rarityEnum: number, noNav: boolean = false) {
        const enName = rarityEnName[rarityEnum]
        return noNav ? 'img/laohen/bg_' + enName + '.png' : 'img/laohen/bg_nav_' + enName + '.png';
    }

    /**
     * 获取烙痕稀有度图片（R,SR,SSR）
     * @param rarityEnum 烙痕稀有度对应的枚举值
     * @param xType 图片类型，（1,1.5,2）
     * @returns 
     */
    static getLaohenRarityImg(rarityEnum: number, xType: number) {
        const enName = rarityEnName[rarityEnum]
        if (xType === 1) {
            return 'img/laohen/attr/1x/40px-' + enName + '.png'
        } else if (xType === 1.5) {
            return 'img/laohen/attr/1.5x/60px-' + enName + '.png'
        }
        return 'img/laohen/attr/2x/80px-' + enName + '.png'
    }

    /**
     * 获取烙痕版面图片
     * @param laohenEnum 烙痕对应的枚举值
     */
    static getLaohenBg(laohenEnum: number) {
        return 'img/laohen/bg/' + laohenEnum + '.png';
    }

    /**
     * 获取烙痕技能对应的图片
     * @param laohenSkillEnum 
     */
    static getLaohenSkillImg(laohenSkillEnum: number) {
        return 'img/laohen/skill/' + laohenSkillEnum + '.png';
    }

    /**
     * 返回烙痕特质突破等级关联的角色特性文案
     * @param charName 角色名字
     * @param hxSkillName 烙痕唤醒技能名字
     */
    static getLaohenSpeLink(charName: string, hxSkillName: string) {
        return getSpeLink(charName, hxSkillName);
    }
}