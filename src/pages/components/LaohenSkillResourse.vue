<template>
    <div v-for="(skillArr, name) in skillSourseLaohen" :key="name">
        <div v-if="skillSourseLaohen[name].length > 0">
            ◆&nbsp;{{ name }}<br>
            <template v-if="name === '队长刻印技能'">
                <div v-for="(con, index) in skillArr" :key="index" class="laohen-skill-resourse">
                    &nbsp;&nbsp;◇&nbsp;
                    <img :alt="'UI 头像缩略图 职业 ' + allChar[con].job + '.png'" :src="getJobTypeImg(allChar[con].job, 1)"
                        decoding="async" loading="lazy" width="20" height="20"
                        :srcset="getJobTypeImg(allChar[con].job, 1.5) + ' 1.5x,' + getJobTypeImg(allChar[con].job, 2) + ' 2x'"
                        data-file-width="64" data-file-height="64">
                    <img :alt="'Ui 元素 ' + charAttr[allChar[con].attr] + '.png'"
                        :src="getCharAttrImg(charAttr[allChar[con].attr], 1, true)" decoding="async" loading="lazy"
                        width="20" height="20"
                        :srcset="getCharAttrImg(charAttr[allChar[con].attr], 1.5, true) + ' 1.5x,' + getCharAttrImg(charAttr[allChar[con].attr], 2) + ' 2x'"
                        data-file-width="76" data-file-height="76">
                    <router-link :to="{ name: 'detail', params: { name: con } }" :title="'同调者/' + con">{{ con
                        }}</router-link>
                </div>
            </template>
            <template v-else>
                <div v-for="(laohenEnum, index) in skillArr" :key="index" class="laohen-skill-resourse">
                    &nbsp;&nbsp;◇&nbsp;
                    <img :alt="'烙痕 ' + laohenAttrType[getLaohenDetail(laohenEnum).type] + '.png'"
                        :src="getLaohenAttrImgWithEnum(getLaohenDetail(laohenEnum).type)" decoding="async"
                        loading="lazy" width="20" height="20" data-file-width="86" data-file-height="86">
                    <img :alt="rarityEnName[getLaohenDetail(laohenEnum).rarity] + '.png'"
                        :src="getLaohenRarityImg(getLaohenDetail(laohenEnum).rarity, 1)" decoding="async" loading="lazy"
                        width="20" height="20"
                        :srcset="getLaohenRarityImg(getLaohenDetail(laohenEnum).rarity, 1.5) + ' 1.5x,' + getLaohenRarityImg(getLaohenDetail(laohenEnum).rarity, 2) + ' 2x'"
                        data-file-width="128" data-file-height="128">
                    <router-link :to="{ name: 'laohen_detail', params: { name: laohenEnum } }"
                        :title="'记忆烙痕/' + getLaohenDetail(laohenEnum).name">{{ getLaohenDetail(laohenEnum).name
                        }}</router-link>
                </div>
            </template>
        </div>
    </div><br>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ["skillSourseLaohen"],
    data() {
        return {
            allChar: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            laohenAttrType: window.$laohen.attrName,
            rarityEnName: window.$laohen.rarityEnName
        }
    },
    methods: {
        /**
         * 获取筛选条件对应的属性图片
         * @param attrEnum 烙痕属性枚举值（1、2等）
         */
        getLaohenAttrImgWithEnum(attrEnum) {
            return window.$laohen.getLaohenAttrImgWithEnum(attrEnum)
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
        /**
         * 获取烙痕稀有度图片（R,SR,SSR）
         * @param rarityEnum 烙痕稀有度对应的枚举值
         * @param xType 图片类型，（1,1.5,2）
         */
        getLaohenRarityImg(rarityEnum, xType) {
            return window.$laohen.getLaohenRarityImg(rarityEnum, xType)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        getCharAttrImg(attrName, xType, isOriginal) {
            return window.$commonUtil.getCharAttrImg(attrName, xType, isOriginal)
        }
    }
})
</script>

<style scoped>
a, a:visited {
    color: rgb(0,110,225);
}
</style>