<template>
    <div v-if="moveCurrLaohenSkillEnum !== -1" style="position: relative;max-width:900px;">
        <div
            style="position: absolute;top: 0;width: 100%;height: 31px;display: flex;justify-content: flex-end;align-items: center;gap: 4px;padding: 0 10px;right: 0px;">
            <div v-if="getLaohenSkillDetaill(moveCurrLaohenSkillEnum).isJL" style="background-color:rgba(250, 150, 22);padding:2px 10px;border-radius:4px;color:#fff;">激励</div>
            <div style="background-color:#B1B1B1;padding:2px 10px;border-radius:4px;color:#fff;">
                {{ laohenSkillTypeName[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).skillType] }}
            </div>
        </div>
        <table class="wikitable" style="max-width:900px;">
            <tbody>
                <tr>
                    <th colspan="2" style="text-align:center;">{{ getLaohenSkillDetaill(moveCurrLaohenSkillEnum).name }}
                    </th>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center;">
                        <div class="center">
                            <div class="floatnone">
                                <img alt="Skill attack t.png" :src="getLaohenSkillImg(moveCurrLaohenSkillEnum)"
                                    decoding="async" loading="lazy" width="50" height="50">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th style="width:100px;">稀有度
                    </th>
                    <td>{{ getRarityName(getLaohenSkillDetaill(moveCurrLaohenSkillEnum).rarity, false) }}
                    </td>
                </tr>
                <tr>
                    <th>生效职业
                    </th>
                    <td>
                        <span v-for="(effectEnum, index) in getLaohenSkillDetaill(moveCurrLaohenSkillEnum).takeEffect"
                            :key="index" class="laohen-skill-take-effect">{{ getJobName(effectEnum) }}</span>
                    </td>
                </tr>
                <tr v-if="checkHasKey(getLaohenSkillDetaill(moveCurrLaohenSkillEnum), 'linkChar')">
                    <th>核心关联</th>
                    <td>
                        <div class="laohen-skill-resourse">
                            <img :alt="'UI 头像缩略图 职业 ' + allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].job + '.png'" 
                                :src="getJobTypeImg(allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].job, 1)"
                                decoding="async" loading="lazy" width="20" height="20"
                                :srcset="getJobTypeImg(allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].job, 1.5) + ' 1.5x,' + getJobTypeImg(allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].job, 2) + ' 2x'"
                                data-file-width="64" data-file-height="64">
                            <img :alt="'Ui 元素 ' + charAttr[allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].attr] + '.png'"
                                :src="getCharAttrImg(charAttr[allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].attr], 1, true)" decoding="async" loading="lazy"
                                width="20" height="20"
                                :srcset="getCharAttrImg(charAttr[allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].attr], 1.5, true) + ' 1.5x,' + getCharAttrImg(charAttr[allChar[getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar].attr], 2) + ' 2x'"
                                data-file-width="76" data-file-height="76">
                            <router-link style="color:#646cff;" :to="{ name: 'detail', params: { name: getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar } }" :title="'同调者/' + getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar">{{ getLaohenSkillDetaill(moveCurrLaohenSkillEnum).linkChar }}
                            </router-link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>技能描述</th>
                    <td>
                        <laohen-skill-content
                            :skillDetail="getLaohenSkillDetaill(moveCurrLaohenSkillEnum)"></laohen-skill-content>
                    </td>
                </tr>
                <tr>
                    <th>所需技能点
                    </th>
                    <td>{{ getLaohenSkillDetaill(moveCurrLaohenSkillEnum).useSkill.join("/") }}
                    </td>
                </tr>
                <tr>
                    <th>来源
                    </th>
                    <td>
                        <laohen-skill-resourse
                            :skillSourseLaohen="getLaohenSkillDetaill(moveCurrLaohenSkillEnum).sourseLaohen">
                        </laohen-skill-resourse>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import LaohenSkillContent from '../components/LaohenSkillContent.vue';
import LaohenSkillResourse from '../components/LaohenSkillResourse.vue';

export default defineComponent({
    props: ["moveCurrLaohenSkillEnum"],
    components: {
        LaohenSkillContent, LaohenSkillResourse
    },
    data() {
        return {
            laohenSkillTypeName: window.$laohen.laohenSkillTypeName,
            allChar: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
        }
    },
    methods: {
        /**
         * 获取烙痕技能详情
         * @param laohenSkillEnum 烙痕技能对应的枚举值
         */
        getLaohenSkillDetaill(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillDetaill(laohenSkillEnum);
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
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
        getLaohenSkillImg(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillImg(laohenSkillEnum)
        },
        getRarityName(rarity, needEn) {
            return window.$laohen.getRarityName(rarity, needEn)
        },
        getJobName(jobType) {
            return window.$laohen.getJobName(jobType)
        }
    }
})
</script>

<style>
.laohen-skill-take-effect {
    padding: 1px 10px;
    background: #B1B1B1;
    color: #FFF;
    border-radius: 5px;
    font-size: 12px;
    margin-right: 10px;
}

a,
a:visited {
    color: rgb(0, 110, 225);
}

a:hover {
    color: blueviolet;
}

table.wikitable {
    border: 1px solid #cccccc;
    margin: 0;
}

.floatnone {
    text-align: center;
}

.wikitable {
    background-color: #f8f9fa;
    color: #202122;
    margin: 1em 0;
    border: 1px solid #a2a9b1;
    border-collapse: collapse;
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
    text-align: center;
}

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    border-right: 1px solid #cccccc;
}

.laohen-skill-resourse {
    display: flex;
    align-items: center;
}

.laohen-skill-resourse img {
    margin: 0;
}
</style>