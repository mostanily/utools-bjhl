<template>
    <div id="headBox">
        <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN">
            <router-link :to="{ name: 'index' }" title="首页" style="color: #333;">首页</router-link> &gt; 森罗映像<span
                id="location"></span>
        </h1>
    </div>
    <hr>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr">
        <div class="skin-container">
            <div v-for="(tachie, index) in allTachie" :key="index" class="divsort skin-box">
                <span class="bili-tt">
                    <div style="display:none"></div>
                    <div class="album-pic-box" style="">
                        <div class="album-pic-img" style="aspect-ratio:2050/954;">
                            <div class="enlarge" style="max-height:100%;text-align:center;display:flex;">
                                <photo-provider>
                                    <photo-consumer :src="'https://patchwiki.biligame.com/images/bjhl/' + tachie.navImg"
                                        :intro="'森罗映像_' + tachie.name + '_' + tachie.navName + '_立绘'"
                                        :download-name="'森罗映像_' + tachie.name + '_' + tachie.navName + '_立绘'">
                                        <img :alt="'森罗映像 ' + tachie.name + ' ' + tachie.navName + ' 立绘.png'"
                                            :src="'https://patchwiki.biligame.com/images/bjhl/' + tachie.navImg" decoding="async" loading="lazy" width="2050"
                                            height="954" class="enlarge-img" data-file-width="2050" data-file-height="954">
                                    </photo-consumer>
                                </photo-provider>
                            </div>
                        </div>
                        <div class="album-pic-name">
                            <router-link :to="{ name: 'detail', params: { name: tachie.name } }">{{ tachie.name }}·{{ tachie.navName }}</router-link>
                        </div>
                    </div>
                </span>
            </div>
        </div>
        <button v-scroll-to="{ element: 'body', offset: -30 }" style="position: fixed;right: 10px;bottom: 10px;">Top
            ⇧</button>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            allTachie: window.$commonUtil.tachieList
        }
    },
})
</script>
<style scoped>
h1 {
    font-size: 1.8em;
    margin-bottom: 0.25em;
    padding: 0;
    font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
    line-height: 1.3;
}

.mw-content-ltr {
    direction: ltr;
}

.skin-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 5px;
}

.skin-box {
    display: inline-block;
    cursor: pointer;
    position: relative;
    width: calc((100% - 24px) / 4);
}

.skin-box .album-pic-box {
    width: 100%;
    padding: 2%;
}

.album-pic-box {
    position: relative;
    padding: 0.5% 0.5% 1%;
    width: calc((100% - 24px) / 4);
    background: #FFF;
    box-shadow: rgba(0, 0, 0, .2) 1px 1px 3px 1px;
    vertical-align: middle;
}

.album-pic-img {
    display: flex;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    vertical-align: middle;
    cursor: pointer;
}

.album-pic-img>.enlarge {
    align-items: center;
    justify-content: center;
}

.enlarge {
    user-select: none;
}

.album-pic-img>.enlarge>img {
    max-height: -webkit-fill-available;
    height: fit-content;
    border: 1px solid #CCC;
}

.enlarge-img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: scale-down;
}

.album-pic-name {
    position: relative;
    overflow: hidden;
    padding-right: 24px;
    height: 28px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-family: 'Source Han Serif SC', 'Source Han Sans CN';
    line-height: 28px;
    cursor: default;
    color: #FFF;
    mix-blend-mode: difference;
}
</style>