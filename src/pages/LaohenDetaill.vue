<template>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr">
        <div class="mw-parser-output">
            <div class="seed-breadcrumb">
                <div style="">
                    <router-link :to="{ name: 'index' }">首页</router-link> &gt;
                    <router-link :to="{ name: 'laohen' }">记忆烙痕图鉴</router-link> &gt;
                    <span style="font-weight:900">记忆烙痕/{{ getLaohenDetail($route.params.name).name }}</span>
                </div>
            </div>
            <h2>
                <span class="mw-headline" id="基础信息">基础信息</span>
            </h2>
            <table class="wikitable" style="margin:0;">
                <tbody>
                    <tr>
                        <td>
                            <div style="display:flex;align-items:center; text-align:center;word-break:keep-all;">
                                <img :alt="rarityEnName[getLaohenDetail($route.params.name).rarity] + '.png'"
                                    :src="getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 1)"
                                    decoding="async" loading="lazy" width="40" height="40"
                                    :srcset="getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 1.5) + ' 1.5x,' + getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 2) + ' 2x'"
                                    data-file-width="128" data-file-height="128" style="margin: 0px;">
                                {{ getLaohenDetail($route.params.name).name }}
                            </div>
                        </td>
                        <td>
                            <div class="center">
                                <div class="floatnone"><img
                                        :alt="'烙痕 ' + attrName[getLaohenDetail($route.params.name).type] + '.png'"
                                        :src="getLaohenAttrImg(attrName[getLaohenDetail($route.params.name).type])"
                                        decoding="async" loading="lazy" width="40" height="40" data-file-width="86"
                                        data-file-height="86"></div>
                            </div>
                        </td>
                        <td>
                            <div
                                style="display: inline-block;text-align:center;border-style: solid;border-color:#32363f;border-width: 1px;padding:0px;">
                                <span style="background-color:#ffffff;color:#32363f;"> illust </span>
                                <div style="display: inline-block;background-color:#32363f;color:#939da7;height:100%;">
                                     {{ getLaohenIllust(getLaohenDetail($route.params.name).extraData.illust) }} </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1">获取途径：{{
                            getLaohenResourseName(getLaohenDetail($route.params.name).extraData.resourse) }}
                        </td>
                        <td></td>
                        <td v-if="checkHasKey(getLaohenDetail($route.params.name).extraData, 'skillLink')">
                            <div class="laohen-skill-resourse">
                                技能同调：
                                <img :alt="'UI 头像缩略图 职业 ' + allChar[getLaohenDetail($route.params.name).extraData.skillLink].job + '.png'" 
                                    :src="getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 1)"
                                    decoding="async" loading="lazy" width="20" height="20"
                                    :srcset="getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 1.5) + ' 1.5x,' + getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 2) + ' 2x'"
                                    data-file-width="64" data-file-height="64">
                                <img :alt="'Ui 元素 ' + charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr] + '.png'"
                                    :src="getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 1, true)" decoding="async" loading="lazy"
                                    width="20" height="20"
                                    :srcset="getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 1.5, true) + ' 1.5x,' + getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 2) + ' 2x'"
                                    data-file-width="76" data-file-height="76">
                                <router-link style="color:#646cff;" :to="{ name: 'detail', params: { name: getLaohenDetail($route.params.name).extraData.skillLink } }" :title="'同调者/' + getLaohenDetail($route.params.name).extraData.skillLink">{{ getLaohenDetail($route.params.name).extraData.skillLink }}
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p><br></p>
            <hr>
            <div class="tabber tabberlive">
                <div class="half-skill"
                    style="border: 1px solid #525c66;border-top: none;border-bottom: none;border-left: none;">
                    <h3>漫巡技能：</h3>
                    <div class="tabbertab" title="漫巡技能" data-hash="漫巡技能" style="">
                        <p class="mw-empty-elt"></p>
                        <div style="display:flex;flex-wrap:wrap;gap:4px;width:100%;max-width:480px;">
                            <div style="display:none"></div>
                            <router-link class="bili-tt skill-box"
                                v-for="(mx, index) in getLaohenDetail($route.params.name).mxSkill" :key="index"
                                :to="{ name: 'laohen_skill_detail', params: { name: mx } }"
                                @mouseenter="mouseCurrLaohenSkillEnum = mx">
                                <div class="skill-bg">
                                    <span>
                                        <img :alt="'烙痕技能 ' + rarityEnName[getLaohenSkillDetaill(mx).rarity] + '.png'"
                                            :src="getLaohenBgNavRarityImg([getLaohenSkillDetaill(mx).rarity])"
                                            decoding="async" loading="lazy" width="225" height="56"
                                            data-file-width="225" data-file-height="56">
                                    </span>
                                </div>
                                <div class="skill-detail">
                                    <div class="skill-icon">
                                        <img :src="getLaohenSkillImg(mx)" :alt="getLaohenSkillDetaill(mx).name + '.png'"
                                            decoding="async" loading="lazy" width="128" height="128"
                                            data-file-width="128" data-file-height="128">
                                    </div>
                                    <div class="skill-name">{{ getLaohenSkillDetaill(mx).name }}</div>
                                </div>
                            </router-link>
                        </div>
                        <p class="mw-empty-elt"></p>
                    </div>
                    <h3>烙痕唤醒：</h3>
                    <div class="tabbertab" title="漫巡技能" data-hash="漫巡技能" style="">
                        <p class="mw-empty-elt"></p>
                        <div style="display:flex;flex-wrap:wrap;gap:4px;width:100%;max-width:480px;">
                            <div style="display:none"></div>
                            <router-link v-for="(hx, index) in getLaohenDetail($route.params.name).hxSkill" :key="index"
                                :to="{ name: 'laohen_skill_detail', params: { name: hx } }" class="bili-tt skill-box"
                                @mouseenter="mouseCurrLaohenSkillEnum = hx">
                                <div class="skill-bg">
                                    <span>
                                        <img :alt="'烙痕技能 ' + rarityEnName[getLaohenSkillDetaill(hx).rarity] + '.png'"
                                            :src="getLaohenBgNavRarityImg([getLaohenSkillDetaill(hx).rarity])"
                                            decoding="async" loading="lazy" width="225" height="56"
                                            data-file-width="225" data-file-height="56">
                                    </span>
                                </div>
                                <div class="skill-detail">
                                    <div class="skill-icon">
                                        <img :src="getLaohenSkillImg(hx)" :alt="getLaohenSkillDetaill(hx).name + '.png'"
                                            decoding="async" loading="lazy" width="128" height="128"
                                            data-file-width="128" data-file-height="128">
                                    </div>
                                    <div class="skill-name">{{ getLaohenSkillDetaill(hx).name }}</div>
                                </div>
                            </router-link>
                        </div>
                        <p class="mw-empty-elt"></p>
                    </div>
                </div>
                <LaohenNav :moveCurrLaohenSkillEnum="mouseCurrLaohenSkillEnum"></LaohenNav>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import LaohenNav from './detail/LaohenNav.vue';

export default defineComponent({
    components: {
        LaohenNav
    },
    data() {
        return {
            rarityEnName: window.$laohen.rarityEnName,
            attrName: window.$laohen.attrName,
            mouseCurrLaohenSkillEnum: -1,
            allChar: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
        }
    },
    methods: {
        initDefLaohenSkillEnum(defEnum) {
            this.mouseCurrLaohenSkillEnum = defEnum
        },
        checkHasKey(Obj, key) {
            return Object.keys(Obj).includes(key)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        getCharAttrImg(attrName, xType, isOriginal) {
            return window.$commonUtil.getCharAttrImg(attrName, xType, isOriginal)
        },
        /**
         * 获取筛选条件对应的属性图片
         * @param attr 烙痕属性值（体质、防御等）
         */
        getLaohenAttrImg(attrName) {
            return window.$laohen.getLaohenAttrImg(attrName)
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
        /**
         * 获取烙痕稀有度对应的图片
         * @param rarityEnum 
         * @param xType 
         */
        getLaohenAttrRarity(rarityEnum, xType) {
            const enName = this.rarityEnName[rarityEnum]
            if (xType === 1) {
                return 'img/laohen/attr/1x/40px-' + enName + '.png';
            } else if (xType === 1.5) {
                return 'img/laohen/attr/1.5x/60px-' + enName + '.png';
            }
            return 'img/laohen/attr/2x/80px-' + enName + '.png';
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenBgNavRarityImg(rarityEnum) {
            return window.$laohen.getLaohenBgNavRarityImg(rarityEnum, true)
        },
        /**
         * 获取画师名称
         * @param illustEnum 画师枚举值，LaohenIllust.(x)
         * @returns 
         */
        getLaohenIllust(illustEnum) {
            return window.$laohen.getLaohenIllust(illustEnum)
        },
        /**
         * 获取烙痕来源名称
         * @param resourseEnum 来源枚举值
         * @returns 
         */
        getLaohenResourseName(resourseEnum) {
            return window.$laohen.getLaohenResourseName(resourseEnum)
        },
        /**
         * 获取烙痕技能详情
         * @param laohenSkillEnum 烙痕技能对应的枚举值
         */
        getLaohenSkillDetaill(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillDetaill(laohenSkillEnum);
        },
        /**
         * 获取烙痕技能对应的图片
         * @param laohenSkillEnum 
         */
        getLaohenSkillImg(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillImg(laohenSkillEnum)
        }
    }
})
</script>

<style>
.seed-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    padding: 0 .8rem;
    margin: .5rem 0;
    border: .1rem solid #525c66;
    border-left-width: .5rem;
    border-radius: .3em;
    background: #525c66;
    font-size: 1.4rem;
    line-height: 2.7rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, .13), 0 1px 3px rgba(0, 0, 0, .2);
}

.mw-parser-output h2 {
    border: none;
    background: #525c66;
    margin: 10px 0 5px;
    padding: 0px;
    text-align: center;
    line-height: 35px;
    font-weight: bold;
    color: #fff;
    font-family: "Source Han Serif SC", "Source Han Sans CN";
    font-size: 18px;
}

table.wikitable>tr>th,
table.wikitable>tr>td,
table.wikitable>*>tr>th,
table.wikitable>*>tr>td {
    border: 1px #ccc solid;
    padding: 5px 5px;
}

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    border-right: 1px solid #cccccc;
}

.center {
    width: 100%;
    text-align: center;
}

*.center * {
    margin-left: auto;
    margin-right: auto;
}

.mw-hide-empty-elt .mw-parser-output .mw-empty-elt {
    display: none;
}

.tabber .tabbertab {
    padding: 4px 4px 0 4px;
    border: 1px solid #525c66;
    border: none;
    background: #fff;
}

.skill-box {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-family: 'sans-serif';
}

a,
a:visited {
    color: #fff;
}

a:hover {
    color: rgb(0, 110, 225);
}

.half-skill {
    width: 49%;
    float: left;
    min-height: 280px;
}

.half-skill span>img {
    background-color: #666;
}

.skill-box .skill-bg {
    position: absolute;
}

.skill-box .skill-detail {
    position: absolute;
    padding: 3px;
    display: flex;
    align-items: center;
}

.skill-box .skill-icon {
    width: 46px;
    height: 46px;
    overflow: hidden;
}

.skill-box .skill-name {
    padding-left: 8px;
    color: #fff;
    vertical-align: middle;
}
</style>