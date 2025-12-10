<template>
    <div class="character-intro-box">
        <div class="character-intro-avatar">
            <img :alt="'角色 ' + $route.params.name + ' 头像.png'"
                :src="getCharImg($route.params.name, 1.5)"
                decoding="async" loading="lazy" width="100" height="120"
                :srcset="getCharImg($route.params.name, 1.5) + ' 1.5x, ' + getCharImg($route.params.name, 2) + ' 2x'"
                data-file-width="181" data-file-height="218">
        </div>
        <div class="character-intro-text" v-html="char[$route.params.name].introText"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            char: window.$commonUtil.allChar
        }
    },
    methods: {
        getCharImg(charName, xType) {
            return window.$commonUtil.getCharImg(charName, xType)
        },
    }
}    
</script>
<style scoped>
.character-intro-box {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 10px 0;
    padding: 5px 1.5%;
    border-left: 10px solid #60c1ff;
    background: rgba(100, 100, 100, .1);
    box-shadow: 1px 1px 5px rgb(0 0 0 / 15%);
}
.character-intro-avatar {
    overflow: hidden;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: #fff;
}
.character-intro-text {
    font-weight: bold;
    font-size: 1.4rem;
}    
</style>