<template>
    <div>
        <router-link :to="{ name: 'detail', params: { name: charName } }" :title="'同调者/' + charName">
            <img :alt="'角色 ' + charName + ' 头像.png'" :src="getCharImg(charName, 1)" decoding="async" width="80"
                height="96" :srcset="getCharImg(charName, 1.5) + ' 1.5x, ' + getCharImg(charName, 2) + ' 2x'"
                data-file-width="181" data-file-height="218">
        </router-link>
    </div>
    <div style="position:absolute;top:-3px;">
        <router-link :to="{ name: 'detail', params: { name: charName } }" :title="'同调者/' + charName">
            <img :alt="'UI 头像缩略图 元素 ' + charAttr[char[charName].attr] + '.png'"
                :src="getCharAttrImg(char[charName].attr, 1)" decoding="async" width="80" height="30"
                :srcset="getCharAttrImg(char[charName].attr, 1.5) + ' 1.5x'" data-file-width="108"
                data-file-height="40"></router-link>
    </div>
    <div style="position:absolute;top:-4px;left:-4px;">
        <router-link :to="{ name: 'detail', params: { name: charName } }" :title="'同调者/' + charName">
            <img :alt="'UI 头像缩略图 职业 ' + char[charName].job + '.png'" :src="getJobTypeImg(char[charName].job, 1)"
                decoding="async" width="30" height="30"
                :srcset="getJobTypeImg(char[charName].job, 1) + ' 1.5x, ' + getJobTypeImg(char[charName].job, 1) + ' 2x'"
                data-file-width="64" data-file-height="64"></router-link>
    </div>
    <div style="position:absolute;bottom:0;">
        <router-link :to="{ name: 'detail', params: { name: charName } }" :title="'同调者/' + charName">
            <img :alt="'UI 头像缩略图 星级 ' + char[charName].star + '星.png'" :src="getCharStarImg(char[charName].star, 1)"
                decoding="async" width="80" height="3"
                :srcset="getCharStarImg(char[charName].star, 1.5) + ' 1.5x, ' + getCharStarImg(char[charName].star, 2) + ' 2x'"
                data-file-width="146" data-file-height="5"></router-link>
    </div>
    <div class="character-name-home">{{ charName }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ["charName"],
    data() {
        return {
            char: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
        }
    },
    methods: {
        getCharImg(charName, xType) {
            return window.$commonUtil.getCharImg(charName, xType)
        },
        getCharAttrImg(attrName, xType) {
            return window.$commonUtil.getCharAttrImg(this.charAttr[attrName], xType)
        },
        getCharStarImg(star, xType) {
            return window.$commonUtil.getCharStarImg(star, xType)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        }
    }
})
</script>

<style scoped>
.character-name-home {
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    width: 80px;
    margin: auto;
    color: #fff;
    text-align: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000, 2px 2px 4px #000;
}
</style>