<template>
    <div style="width: 100%;float: left;">
        <h2><span></span><span class="mw-headline" id="烙痕导航">烙痕导航</span></h2>
        <div class="character-navi-color-wrapper">
            <div class="character-navi-color-box">
                <div style="background:#A0A4AE;"></div>R
            </div>
            <div class="character-navi-color-box">
                <div style="background:#FFEF50;"></div>SR
            </div>
            <div class="character-navi-color-box">
                <div style="background:linear-gradient(to right, #DD5E00, #FFA11B, #F3F853, #8BF784, #74E1C8, #9574CF);">
                </div>SSR
            </div>
        </div>
        <table class="wikitable character-navi-table">
            <tbody>
                <tr v-for="(enName, index) in jobToEn" :key="index">
                    <th>
                        <div style="display:flex;align-items:center;flex-wrap:wrap;justify-content:center;">
                            <div><img :alt="'UI 头像缩略图 职业 ' + enName + '.png'" :src="getLaohenAttrImg(enName)"
                                    decoding="async" width="40" height="40" data-file-width="64" data-file-height="64"></div>
                            <div
                                style="width:75px;padding:0px 5px 0px 3px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                                <div style="color:#ffffff;text-shadow:1px 1px 2px #000;font-family:monospace;font-size:20px;">
                                    {{ enName }}
                                </div>
                            </div>
                        </div>
                    </th>
                    <td>
                        <router-link v-for="(oneEachLaohen, index) in allJobTypeToChar[enName]" :key="index"
                            :to="{ name: 'laohen_detail', params: { name: oneEachLaohen.id } }" :title="'同调者/' + oneEachLaohen.name">
                            <span :class="'character-navi-character-name-' + oneEachLaohen.rarity">
                                {{ oneEachLaohen.name }}
                                <template v-if="index < allJobTypeToChar[enName].length - 1">&nbsp;·&nbsp;</template>
                            </span>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import LaohenSkillDetaillCon from './LaohenSkillDetaillCon.vue';

export default defineComponent({
    components: {
        LaohenSkillDetaillCon
    },
    data() {
        return {
            allLaohen: new Array,
            originLaohen: window.$laohen.allLaohen,
            jobToEn: window.$laohen.attrName,
            allJobTypeToChar: {
                "体质": new Array,
                "防御": new Array,
                "攻击": new Array,
                "专精": new Array,
                "终端": new Array
            }
        }
    },
    mounted() {
        this.sortLaohen()
    },
    methods: {
        sortLaohen() {
            const tempLaohen = computed(() => {
                //默认排序，稀有度倒叙，开放日期倒叙，属性正序
                return [...this.originLaohen]
                    .sort((a, b) => new Date(b.openDate) - new Date(a.openDate))
                    .sort((a, b) => b.rarity - a.rarity)
                    .sort((a, b) => a.type - b.type)
            });
            this.allLaohen = tempLaohen.value
            for(let laoenEnum in this.allLaohen) {
                const eachLaohen = this.allLaohen[laoenEnum]
                const typeName =this.jobToEn[eachLaohen.type]
                this.allJobTypeToChar[typeName].push(eachLaohen)
            }
        },
        /**
         * 获取筛选条件对应的属性图片
         * @param attrName 烙痕属性值（体质、防御等）
         */
         getLaohenAttrImg(attrName) {
            return window.$laohen.getLaohenAttrImg(attrName)
        }
    }
})
</script>

<style scoped>
.character-navi-color-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 4px;
}

.character-navi-color-box {
    display: flex;
    gap: 4px;
}

.character-navi-color-box>div {
    width: 20px;
    height: 20px;
}

.wikitable.character-navi-table {
    width: 100%;
    margin: 0;
}

table.wikitable {
    border: 1px solid #cccccc;
    margin: 0;
}

.wikitable.character-navi-table>*>tr>th {
    width: 15%;
}

table.wikitable>tr>th,
table.wikitable>tr>td,
table.wikitable>*>tr>th,
table.wikitable>*>tr>td {
    border: 1px #ccc solid;
    padding: 5px 5px;
}

table.wikitable>tr>th,
table.wikitable>*>tr>th {
    background: #424c55;
    height: auto;
    font-family: "Source Han Serif SC", "Source Han Sans CN", "sans-serif";
    color: white;
    border-right: 1px solid #cccccc;
}

.wikitable>tr>th,
.wikitable>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}

.wikitable.character-navi-table>*>tr>td {
    background: #424c55;
    color: #FFF;
    font-size: 15px;
    font-weight: 600;
    font-family: 黑体;
}

.character-navi-character-name-2 {
    background-image: linear-gradient(to right, #DD5E00, #FFA11B, #F3F853, #8BF784, #74E1C8, #9574CF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    color: #FFF;
}

.character-navi-character-name-1 {
    color: #FFEF50;
}

.character-navi-character-name-0 {
    color: #A0A4AE;
}
</style>