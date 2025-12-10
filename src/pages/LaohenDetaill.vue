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
            <LaohenTachie></LaohenTachie>
            <hr>
            <div class="tabber tabberlive">
                <ul class="tabbernav">
                    <li :class="{'tabberactive': hxIndex === 1}" @click="setHxIndex(1)"><a title="初见" data-hash="初见" style="cursor: pointer;">初见</a></li><wbr>
                    <li :class="{'tabberactive': hxIndex === 2}" @click="setHxIndex(2)"><a title="烙痕技能" data-hash="烙痕技能" style="cursor: pointer;">烙痕技能</a></li><wbr>
                </ul>
                <div :class="{'half-skill': true, 'display-block': hxIndex === 2, 'display-none': hxIndex !== 2}"
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
                <div :class="{'half-skill': true, 'display-block': hxIndex === 2, 'display-none': hxIndex !== 2}">
                    <LaohenSkillDetaillCon :moveCurrLaohenSkillEnum="mouseCurrLaohenSkillEnum"></LaohenSkillDetaillCon>
                </div>
                <LaohenNav></LaohenNav>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import LaohenNav from './detail/LaohenNav.vue';
import LaohenTachie from './components/LaohenTachie.vue';
import LaohenSkillDetaillCon from './detail/LaohenSkillDetaillCon.vue';

export default defineComponent({
    components: {
        LaohenNav, LaohenTachie, LaohenSkillDetaillCon
    },
    data() {
        return {
            rarityEnName: window.$laohen.rarityEnName,
            attrName: window.$laohen.attrName,
            mouseCurrLaohenSkillEnum: -1,
            allChar: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            hxIndex: 1
        }
    },
    methods: {
        setHxIndex (index) {
            this.hxIndex = index
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
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
        }
    }
})
</script>

<style>
.display-block {
    display: block;
}

.display-none {
    display: none;
}
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