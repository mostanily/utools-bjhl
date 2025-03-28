<template>
    <div id="headBox">
        <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN">
            <router-link :to="{ name: 'index' }" title="首页">首页</router-link> &gt; 记忆烙痕一览<span id="location"></span>
        </h1>
    </div>
    <hr>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr">
        <div class="mw-parser-output">
            <table class="wikitable" style="width:100%">
                <tbody>
                    <tr>
                        <th colspan="2" width="8%">稀有度
                        </th>
                        <td>
                            <li v-for="(rarity, index) in rarityEnName" :key="index"
                                @click="setSortFiled('rarity', index)" class="btn btn-default cardSelectOption" 
                                :style="sortField.rarity.includes(index) ? 'background-color: silver;color: #000;' : ''" 
                                role="button" :data-option="'1|' + rarity" data-group="1">{{ rarity }}
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">属性
                        </th>
                        <td>
                            <li v-for="(attr, index) in attrName" :key="index" @click="setSortFiled('type', index)" 
                                :style="sortField.type.includes(index) ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption" role="button" :data-option="'2|' + attr"
                                data-group="2">
                                <img :alt="'UI 属性 ' + attr + '.png'" :src="getLaohenAttrImg(attr)" decoding="async"
                                    loading="lazy" width="50" height="50" class="img-in-text" data-file-width="50"
                                    data-file-height="50">{{ attr }}
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">画师
                        </th>
                        <td class="mw-collapsible mw-made-collapsible">
                            <div class="mw-collapsible-content">
                                <li v-for="(illust, index) in IllustNames" :key="index"
                                    @click="setSortFiled('illust', index)" class="btn btn-default cardSelectOption"
                                    :style="sortField.illust.includes(index) ? 'background-color: silver;color: #000;' : ''"
                                    role="button" :data-option="'3|' + illust" data-group="3" style="">{{ illust }}
                                </li>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">来源
                        </th>
                        <td>
                            <li v-for="(resourse, index) in LaohenResourseName" :key="index"
                                @click="setSortFiled('resourse', index)" class="btn btn-default cardSelectOption"
                                :style="sortField.resourse.includes(index) ? 'background-color: silver;color: #000;' : ''"
                                role="button" :data-option="'4|' + resourse" data-group="4" style="">{{ resourse }}</li>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <LaohenSkillToast :rightX="needRightX" :mouseCurrLaohenSkillEnum="currLaohenSkillEnum">
                </LaohenSkillToast>
            </div>
            <div id="CardSelectTr" style="display:flex;flex-direction:column;gap:4px;">
                <div v-for="(laohen, index) in allLaohen" :key="index" class="divsort"
                    style="display:flex;border-radius:3px;padding:3px;width:fit-content;min-width:100%;">
                    <div style="width:192px;height:76px;margin-right:3px;position:relative;">
                        <div style="position:relative;width:192px;">
                            <router-link :title="'记忆烙痕/' + laohen.name"
                                :to="{ name: 'laohen_detail', params: { name: laohen.id } }">
                                <img :alt="'记忆烙痕 ' + laohen.name + ' 缩略图2.png'" :src="getLaohenBg(laohen.id)"
                                    decoding="async" loading="lazy" width="192" height="76" class="img-fit"
                                    data-file-width="192" data-file-height="76">
                            </router-link>
                        </div>
                        <div style="position:absolute;top:0;left:0;">
                            <router-link :title="'记忆烙痕/' + laohen.name"
                                :to="{ name: 'laohen_detail', params: { name: laohen.id } }">
                                <img :alt="'UI 烙痕缩略图2 属性 ' + attrName[laohen.type] + '.png'"
                                    :src="getLaohenAttrNavImg(laohen.type)" decoding="async" loading="lazy" width="44"
                                    height="76" class="img-fit" data-file-width="44" data-file-height="76">
                            </router-link>
                        </div>
                        <div style="position:absolute;top:0;right:0;">
                            <router-link :title="'记忆烙痕/' + laohen.name"
                                :to="{ name: 'laohen_detail', params: { name: laohen.id } }">
                                <img :alt="'UI 烙痕缩略图2 稀有度 ' + rarityEnName[laohen.rarity] + '.png'"
                                    :src="getLaohenBgNavRarityImg(laohen.rarity)" decoding="async" loading="lazy"
                                    width="105" height="76" class="img-fit" data-file-width="105" data-file-height="76">
                            </router-link>
                        </div>
                        <div
                            style="position:absolute;bottom:0;left:30%;font-weight:600;font-size:14px;font-family:SimHei;color:#fff;text-shadow: 0 1px #3c746d, 1px 0 #3c746d, -1px 0 #3c746d, 0 -1px #3c746d;">
                            {{ laohen.name }}</div>
                    </div>
                    <div style="display: flex;align-items: center;border:1px solid #000;margin-right:3px;height:76px;">
                        <div
                            style="background:#000;color:#FFF;width:20px;height:100%;writing-mode: vertical-rl;text-orientation: upright;text-align: center;letter-spacing:0px;">
                            核心技能</div>
                        <div style="padding:0 10px;">
                            <div style="position:relative;display:inline-block;">
                                <p>
                                    <router-link
                                        :to="{ name: 'laohen_skill_detail', params: { name: laohen.hxSkill[0] } }"
                                        @mouseenter="currLaohenSkillEnum = laohen.hxSkill[0]"
                                        @mouseleave="currLaohenSkillEnum = -1" @mousemove="updateMousePosition"
                                        style="display:inline-block;margin:2px;cursor:pointer;width:70px;height:50px;overflow:hidden;text-align: center;"
                                        class="bili-tt">
                                        <span>
                                            <img :alt="getLaohenSkillDetaill(laohen.hxSkill[0]).name + '.png'"
                                                :src="getLaohenSkillImg(laohen.hxSkill[0])"
                                                :title="getLaohenSkillDetaill(laohen.hxSkill[0]).name" decoding="async"
                                                loading="lazy" width="50" height="50" data-file-width="128"
                                                data-file-height="128">
                                        </span>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex;align-items: center;border:1px solid #000;margin-right:3px;height:76px;">
                        <div
                            style="background:#000;color:#FFF;width:20px;height:100%;writing-mode: vertical-rl;text-orientation: upright;text-align: center;letter-spacing:0px;">
                            技能</div>
                        <div style="padding:0 10px;width:540px;">
                            <div v-for="(skill, index) in laohen.mxSkill" :key="index"
                                style="position:relative;display:inline-block;">
                                <p>
                                    <router-link :to="{ name: 'laohen_skill_detail', params: { name: skill } }"
                                        @mouseenter="currLaohenSkillEnum = skill" @mouseleave="currLaohenSkillEnum = -1"
                                        @mousemove="updateMousePosition"
                                        style="display:inline-block;margin:2px;cursor:pointer;width:70px;height:50px;overflow:hidden;"
                                        class="bili-tt">
                                        <span>
                                            <img :alt="getLaohenSkillDetaill(skill).name + '.png'"
                                                :src="getLaohenSkillImg(skill)"
                                                :title="getLaohenSkillDetaill(skill).name" decoding="async"
                                                loading="lazy" width="50" height="50" data-file-width="128"
                                                data-file-height="128">
                                        </span>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        style="display: flex;align-items: center;border:1px solid #000;margin-right:3px;height:76px;flex-grow: 1;">
                        <div
                            style="background:#000;color:#FFF;width:20px;height:100%;writing-mode: vertical-rl;text-orientation: upright;text-align: center;letter-spacing:0px;">
                            其他
                        </div>
                        <div style="padding:0 5px;width:auto;min-width:180px;text-align: justify;">
                            来源：{{ LaohenResourseName[laohen.extraData.resourse] }}
                            <br>
                            画师：{{ IllustNames[laohen.extraData.illust] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button v-scroll-to="{ element: 'body', offset: -30 }" style="position: fixed;right: 10px;bottom: 10px;">Top ⇧</button>
    </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import LaohenSkillToast from './components/LaohenSkillToast.vue';

export default defineComponent({
    components: {
        LaohenSkillToast
    },
    data() {
        return {
            rarityEnName: window.$laohen.rarityEnName,
            IllustNames: window.$laohen.IllustNames,
            attrName: window.$laohen.attrName,
            LaohenResourseName: window.$laohen.LaohenResourseName,
            allLaohen: new Array,
            originLaohen: window.$laohen.allLaohen,
            currLaohenSkillEnum: -1,
            needRightX: 0,
            sortField: {
                rarity: new Array,
                type: new Array,
                illust: new Array,
                resourse: new Array
            }
        }
    },
    mounted() {
        this.sortLaohen()
    },
    methods: {
        setSortFiled(type, fieldEnum) {
            if (type === "rarity") {
                if (!this.sortField.rarity.includes(fieldEnum)) {
                    this.sortField.rarity.push(fieldEnum)
                } else {
                    this.sortField.rarity.splice(this.sortField.rarity.indexOf(fieldEnum), 1)
                }
            } else if (type === 'type') {
                if (!this.sortField.type.includes(fieldEnum)) {
                    this.sortField.type.push(fieldEnum)
                } else {
                    this.sortField.type.splice(this.sortField.type.indexOf(fieldEnum), 1)
                }
            } else if (type === 'illust') {
                if (!this.sortField.illust.includes(fieldEnum)) {
                    this.sortField.illust.push(fieldEnum)
                } else {
                    this.sortField.illust.splice(this.sortField.illust.indexOf(fieldEnum), 1)
                }
            } else if (type === 'resourse') {
                if (!this.sortField.resourse.includes(fieldEnum)) {
                    this.sortField.resourse.push(fieldEnum)
                } else {
                    this.sortField.resourse.splice(this.sortField.resourse.indexOf(fieldEnum), 1)
                }
            }
            this.sortLaohen()
        },
        sortLaohen() {
            const tempLaohen = computed(() => {
                //默认排序，稀有度倒叙，属性正序
                return [...this.originLaohen]
                    .sort((a, b) => b.rarity - a.rarity)
                    .sort((a, b) => a.type - b.type)
            });
            this.allLaohen = tempLaohen.value
            //根据导航，进行筛选数据
            if (this.sortField.rarity.length > 0) {
                const temp = new Array
                for (let key in this.allLaohen) {
                    if (this.sortField.rarity.includes(this.allLaohen[key].rarity)) {
                        temp.push(this.allLaohen[key])
                    }
                }
                this.allLaohen = temp
            }
            if (this.sortField.type.length > 0) {
                const temp = new Array
                for (let key in this.allLaohen) {
                    if (this.sortField.type.includes(this.allLaohen[key].type)) {
                        temp.push(this.allLaohen[key])
                    }
                }
                this.allLaohen = temp
            }
            if (this.sortField.illust.length > 0) {
                const temp = new Array
                for (let key in this.allLaohen) {
                    if (this.sortField.illust.includes(this.allLaohen[key].extraData.illust)) {
                        temp.push(this.allLaohen[key])
                    }
                }
                this.allLaohen = temp
            }
            if (this.sortField.resourse.length > 0) {
                const temp = new Array
                for (let key in this.allLaohen) {
                    if (this.sortField.resourse.includes(this.allLaohen[key].extraData.resourse)) {
                        temp.push(this.allLaohen[key])
                    }
                }
                this.allLaohen = temp
            }
        },
        updateMousePosition(event) {
            const halfW = window.innerWidth / 2
            if (event.clientX > halfW) {
                this.needRightX = this.winWidth - 500
            } else {
                this.needRightX = 0
            }
        },
        /**
         * 获取筛选条件对应的属性图片
         * @param attrName 烙痕属性值（体质、防御等）
         */
        getLaohenAttrImg(attrName) {
            return window.$laohen.getLaohenAttrImg(attrName)
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
        getLaohenBgNavRarityImg(rarityEnum) {
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
        }
    }
})
</script>

<style scoped>
.active-selected {
    background-color: silver;
    color: #333;
}

.mw-body .firstHeading {
    overflow: visible;
    border: none !important;
    padding-bottom: 0 !important;
    position: relative;
}

h1 {
    font-size: 1.8em;
    margin-bottom: 0.25em;
    padding: 0;
    font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
    line-height: 1.3;
}

h1>a {
    color: #333;
}

a:hover {
    color: #646cff;
}

@media (min-width: 982px) {
    .client-js #mw-content-text {
        margin-top: 2em;
    }
}

.mw-content-ltr {
    direction: ltr;
}

.wikitable>tr>th,
.wikitable>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}

table.wikitable>tr>th,
table.wikitable>*>tr>th {
    background: #424c55;
    height: auto;
    font-family: "Source Han Serif SC", "Source Han Sans CN", "sans-serif";
    color: white;
    border-right: 1px solid #cccccc;
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

.btn.queryParams,
.btn.cardSelectOption {
    margin: 0 5px 0 0;
    padding: 2px 8px;
    color: #FFF;
    background-color: #424c55;
    border: none;
}

.btn.queryParams+.btn.queryParams,
.btn.cardSelectOption+.btn.cardSelectOption {
    margin: 2px 5px 2px 0;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.img-in-text {
    vertical-align: text-top;
    width: 1.4em;
}
</style>