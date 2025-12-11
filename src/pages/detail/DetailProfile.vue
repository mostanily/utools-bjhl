<template>
    <div>
        <table class="wikitable" style="width:100%;margin:0;text-align:center;">
            <tbody>
                <tr>
                    <th>队长刻印技能</th>
                    <td>
                        <div style="width:100%;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
                            <div style="display:none"></div>
                            <router-link v-for="(skillEnum, index) in char[$route.params.name].skill" :key="index"
                                :to="{ name: 'laohen_skill_detail', params: { name: skillEnum } }"
                                @mouseenter="currLaohenSkillEnum = skillEnum" @mouseleave="currLaohenSkillEnum = -1"
                                @mousemove="updateMousePosition" class="bili-tt skill-box">
                                <div class="skill-bg">
                                    <span>
                                        <img :alt="'烙痕技能 ' + rarityEnName[getLaohenSkillDetaill(skillEnum).rarity] + '.png'"
                                            :src="getLaohenBgNavRarityImg([getLaohenSkillDetaill(skillEnum).rarity])"
                                            decoding="async" loading="lazy" width="225" height="56"
                                            data-file-width="225" data-file-height="56">
                                    </span>
                                </div>
                                <div class="skill-detail">
                                    <div class="skill-icon">
                                        <img :alt="getLaohenSkillDetaill(skillEnum).name + '.png'"
                                            :src="getLaohenSkillImg(skillEnum)" decoding="async" loading="lazy"
                                            width="128" height="128" data-file-width="128" data-file-height="128">
                                    </div>
                                    <div class="skill-name">{{ getLaohenSkillDetaill(skillEnum).name }}</div>
                                </div>
                            </router-link>
                        </div>
                    </td>
                </tr>
                <tr v-if="checkHasKey(char[$route.params.name], 'laohenLink')" class="laohen-link">
                    <th>核心关联</th>
                    <td>
                        <div class="divsort" style="display:flex;border-radius:3px;padding:3px;width:fit-content;min-width:100%;justify-content: center;">
                            <div style="width:192px;height:76px;margin-right:3px;position:relative;">
                                <div style="position:relative;width:192px;">
                                    <router-link :title="'记忆烙痕/' + getLaohenDetail(char[$route.params.name].laohenLink).name"
                                        :to="{ name: 'laohen_detail', params: { name: getLaohenDetail(char[$route.params.name].laohenLink).id } }">
                                        <img :alt="'记忆烙痕 ' + getLaohenDetail(char[$route.params.name].laohenLink).name + ' 缩略图2.png'" :src="getLaohenBg(getLaohenDetail(char[$route.params.name].laohenLink).id)"
                                            decoding="async" loading="lazy" width="192" height="76" class="img-fit"
                                            data-file-width="192" data-file-height="76">
                                    </router-link>
                                </div>
                                <div style="position:absolute;top:0;left:0;">
                                    <router-link :title="'记忆烙痕/' + getLaohenDetail(char[$route.params.name].laohenLink).name"
                                        :to="{ name: 'laohen_detail', params: { name: getLaohenDetail(char[$route.params.name].laohenLink).id } }">
                                        <img :alt="'UI 烙痕缩略图2 属性 ' + attrName[getLaohenDetail(char[$route.params.name].laohenLink).type] + '.png'"
                                            :src="getLaohenAttrNavImg(getLaohenDetail(char[$route.params.name].laohenLink).type)" decoding="async" loading="lazy" width="44"
                                            height="76" class="img-fit" data-file-width="44" data-file-height="76">
                                    </router-link>
                                </div>
                                <div style="position:absolute;top:0;right:0;">
                                    <router-link :title="'记忆烙痕/' + getLaohenDetail(char[$route.params.name].laohenLink).name"
                                        :to="{ name: 'laohen_detail', params: { name: getLaohenDetail(char[$route.params.name].laohenLink).id } }">
                                        <img :alt="'UI 烙痕缩略图2 稀有度 ' + rarityEnName[getLaohenDetail(char[$route.params.name].laohenLink).rarity] + '.png'"
                                            :src="getLaohenBgNavRarityImgNor(getLaohenDetail(char[$route.params.name].laohenLink).rarity)" decoding="async" loading="lazy"
                                            width="105" height="76" class="img-fit" data-file-width="105" data-file-height="76">
                                    </router-link>
                                </div>
                                <div
                                    style="position:absolute;bottom:0;left:30%;font-weight:600;font-size:14px;font-family:SimHei;color:#fff;text-shadow: 0 1px #3c746d, 1px 0 #3c746d, -1px 0 #3c746d, 0 -1px #3c746d;">
                                    {{ getLaohenDetail(char[$route.params.name].laohenLink).name }}</div>
                            </div>
                            <div style="display: flex;align-items: center;border:1px solid #000;margin-right:3px;height:76px;">
                                <div
                                    style="background:#000;color:#FFF;width:20px;height:100%;writing-mode: vertical-rl;text-orientation: upright;text-align: center;letter-spacing:0px;">
                                    核心技能</div>
                                <div style="padding:0 10px;">
                                    <div style="position:relative;display:inline-block;">
                                        <p>
                                            <router-link
                                                :to="{ name: 'laohen_skill_detail', params: { name: getLaohenDetail(char[$route.params.name].laohenLink).hxSkill[0] } }"
                                                @mouseenter="currLaohenSkillEnum = getLaohenDetail(char[$route.params.name].laohenLink).hxSkill[0]"
                                                @mouseleave="currLaohenSkillEnum = -1" @mousemove="updateMousePosition"
                                                style="display:inline-block;margin:2px;cursor:pointer;width:70px;height:50px;overflow:hidden;text-align: center;"
                                                class="bili-tt">
                                                <span>
                                                    <img :alt="getLaohenSkillDetaill(getLaohenDetail(char[$route.params.name].laohenLink).hxSkill[0]).name + '.png'"
                                                        :src="getLaohenSkillImg(getLaohenDetail(char[$route.params.name].laohenLink).hxSkill[0])"
                                                        :title="getLaohenSkillDetaill(getLaohenDetail(char[$route.params.name].laohenLink).hxSkill[0]).name" decoding="async"
                                                        loading="lazy" width="50" height="50" data-file-width="128"
                                                        data-file-height="128">
                                                </span>
                                            </router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style="margin:5px 0;background:#9FA9AF;">
                        <div style="margin-bottom:20px;text-align: center;"><b>图鉴解锁：</b>
                            <skill-content style="text-align: center;" :skillArr="getLaohenSpeLink($route.params.name, char[$route.params.name].laohenLink)[0]"></skill-content>
                        </div>
                        <div style="margin-bottom:20px;text-align: center;"><b>特质Ⅱ级解锁：</b>
                            <skill-content style="text-align: center;" :skillArr="getLaohenSpeLink($route.params.name, char[$route.params.name].laohenLink)[1]"></skill-content>
                        </div>
                        <div style="margin-bottom:20px;text-align: center;"><b>特质Ⅴ级解锁：</b>
                            <skill-content style="text-align: center;" :skillArr="getLaohenSpeLink($route.params.name, char[$route.params.name].laohenLink)[2]"></skill-content>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <LaohenSkillToast :rightX="needRightX" :mouseCurrLaohenSkillEnum="currLaohenSkillEnum">
            </LaohenSkillToast>
        </div>
    </div>
</template>

<script>
import LaohenSkillToast from '../components/LaohenSkillToast.vue';
import SkillContent from '../components/SkillContent.vue'

export default {
    components: {
        SkillContent, LaohenSkillToast
    },
    data() {
        return {
            char: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            rarityEnName: window.$laohen.rarityEnName,
            attrName: window.$laohen.attrName,
            currLaohenSkillEnum: -1,
            needRightX: 0,
        }
    },
    methods: {
        updateMousePosition(event) {
            const halfW = window.innerWidth / 2
            if (event.clientX > halfW) {
                this.needRightX = this.winWidth - 500
            } else {
                this.needRightX = 0
            }
        },
        getCharAttrImg(attrName, xType) {
            return window.$commonUtil.getCharAttrImg(this.charAttr[attrName], xType, true)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenBgNavRarityImg(rarityEnum) {
            return window.$laohen.getLaohenBgNavRarityImg(rarityEnum, true)
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
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
        checkHasKey(Obj, key) {
            return Object.keys(Obj).includes(key)
        },
        /**
         * 获取烙痕属性背景图片
         * @param attrEnum 烙痕对应属性的枚举值
         */
        getLaohenAttrNavImg(attrEnum) {
            return window.$laohen.getLaohenAttrNavImg(attrEnum)
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenBgNavRarityImgNor(rarityEnum) {
            return window.$laohen.getLaohenBgNavRarityImg(rarityEnum)
        },
        /**
         * 获取烙痕技能详情
         * @param laohenSkillEnum 烙痕技能对应的枚举值
         */
        getLaohenSkillDetaill(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillDetaill(laohenSkillEnum);
        },
        /**
         * 获取烙痕版面图片
         * @param laohenEnum 烙痕对应的枚举值
         */
        getLaohenBg(laohenEnum) {
            return window.$laohen.getLaohenBg(laohenEnum)
        },
        /**
         * 获取烙痕技能对应的图片
         * @param laohenSkillEnum 
         */
        getLaohenSkillImg(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillImg(laohenSkillEnum)
        },
        getLaohenSpeLink(charName, laohenId) {
            const laohenDetail = this.getLaohenDetail(laohenId)
            const hxSkillName = this.getLaohenSkillDetaill(laohenDetail.hxSkill[0]).name
            return window.$laohen.getLaohenSpeLink(charName, hxSkillName)
        }
    }
}
</script>

<style scoped>
a {
    color: dodgerblue;
}

.wikitable td>img {
    position: relative;
    top: 4px;
}

.skill-box {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-family: 'sans-serif';
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
tr.laohen-link>th,
tr.laohen-link>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}

tr.laohen-link>th,
tr.laohen-link>*>tr>th {
    background: #424c55;
    height: auto;
    font-family: "Source Han Serif SC", "Source Han Sans CN", "sans-serif";
    color: white;
    border-right: 1px solid #cccccc;
}

tr.laohen-link>th,
tr.laohen-link>td,
tr.laohen-link>*>tr>th,
tr.laohen-link>*>tr>td {
    border: 1px #ccc solid;
    padding: 5px 5px;
}

tr.laohen-link>td,
tr.laohen-link>*>tr>td {
    background-color: #fff;
    height: auto;
    border-right: 1px solid #cccccc;
}
</style>