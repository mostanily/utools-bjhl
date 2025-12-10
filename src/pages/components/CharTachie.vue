<!-- 角色立绘 -->
<template>
    <div class="character-img-wrapper">
        <div class="character-img-bg">
            <img ref="tachieBg" alt="角色 立绘 背景图片.png" src="/img/tachie.png" decoding="async" loading="lazy">
        </div>
        <div class="resp-tabs character-img-box">
            <ul class="resp-tabs-list clearfix" style="margin:0px;height:auto;">
                <li :class="{'bili-list-style': true, 'active': tachieIndex === 1}" @click="setTachieIndex(1)"><span class="tab-panel">{{ char[$route.params.name].tacgie.name }}</span></li>
                <template v-if="checkHasKey(char[$route.params.name], 'extraTacgie')">
                    <li v-for="(eTacgie, index) in char[$route.params.name].extraTacgie" 
                        :key="index" :class="{'bili-list-style': true, 'active': tachieIndex === index + 2}" 
                        @click="setTachieIndex(index + 2)">
                        <span class="tab-panel">{{ eTacgie.name }}</span>
                    </li>
                </template>
            </ul>
            <div class="resp-tabs-container">
                <div class="resp-tab-content" style="display: block;">
                    <OneTachie :class="{ 'display-block': tachieIndex === 1, 'display-none': tachieIndex !== 1 }" :tacgieObj="char[$route.params.name].tacgie"></OneTachie>
                    <template v-if="checkHasKey(char[$route.params.name], 'extraTacgie')">
                        <OneTachie v-for="(eTacgie, index) in char[$route.params.name].extraTacgie" 
                            :key="index" :class="{ 'display-block': tachieIndex === index + 2, 'display-none': tachieIndex !== index + 2 }" 
                            :tacgieObj="eTacgie"></OneTachie>
                    </template>
                    <div class="hidden-xs"
                        style="width:100%;height:100%;position:absolute;top:0;left:0;pointer-events: none;">
                        <div style="position:absolute;top:80px;left:30px;">
                            <table style="color:#ffffff;text-shadow:0 0 2px #282828;">
                                <tbody>
                                    <tr>
                                        <td><img :alt="'UI 头像缩略图 职业 ' + char[$route.params.name].job + '.png'"
                                                :src="getJobTypeImg(char[$route.params.name].job, 2)" decoding="async"
                                                loading="lazy" width="45" height="45"
                                                :srcset="getJobTypeImg(char[$route.params.name].job, 1.5) + ' 1.5x'"
                                                data-file-width="64" data-file-height="64">
                                            <img :alt="'Ui 元素 ' + charAttr[char[$route.params.name].attr] + '.png'"
                                                :src="getCharAttrImgV2(char[$route.params.name].attr, 2.5)"
                                                decoding="async" loading="lazy" width="45" height="45"
                                                :srcset="getCharAttrImgV2(char[$route.params.name].attr, 3) + ' 1.5x,' + getCharAttrImgV2(char[$route.params.name].attr, 3.5) + ' 2x'"
                                                data-file-width="76" data-file-height="76">
                                        </td>
                                        <td><span
                                                style="line-height:45px;font-size:35px;font-family:'Source Han Serif SC','Source Han Sans CN';">{{
                                                    $route.params.name }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span
                                                style="font-size:18px;font-weight:600;text-shadow:1px 1px 2px #000;padding-right:5px;">{{
                                                    char[$route.params.name].job }}·{{
                                                    charAttr[char[$route.params.name].attr] }}</span>
                                        </td>
                                        <td><span
                                                style="color:#adb4bd;font-size:20px;text-shadow:1px 1px 2px #000;font-family:monospace;letter-spacing:2px;">{{
                                                    char[$route.params.name].nameEn }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span
                                                style="color:#adb4bd;font-size:18px;text-shadow:1px 1px 2px #000;padding-right:5px;">{{
                                                    char[$route.params.name].tag.join('·') }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><img :alt="char[$route.params.name].star + '星.png'"
                                                :src="getCharStarImgV2(char[$route.params.name].star, 1)"
                                                decoding="async" loading="lazy" width="152" height="30"
                                                :srcset="getCharStarImgV2(char[$route.params.name].star, 1.5) + ' 1.5x'"
                                                data-file-width="222" data-file-height="44">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style="position:absolute;bottom:20px;left:20px;pointer-events: auto;">
                            <table class="wikitable">

                                <tbody>
                                    <tr style="display:none;">
                                        <th style="width:120px;">外装来源
                                        </th>
                                        <td style="width:200px;">
                                        </td>
                                    </tr>
                                    <tr style="display:none;">
                                        <th style="width:120px;">映像来源
                                        </th>
                                        <td style="width:200px;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style="width:120px;">原生世界
                                        </th>
                                        <td style="width:200px;"><a :title="char[$route.params.name].originWorld">{{
                                            char[$route.params.name].originWorld }}</a>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <th>姓名（国际服）
                                        </th>
                                        <td>Liuzhu
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>姓名（日服）
                                        </th>
                                        <td>旒珠（リュウジュ）
                                        </td>
                                    </tr> -->
                                    <tr>
                                        <th>原型来源
                                        </th>
                                        <td><a rel="nofollow" class="external text" target="_blank">{{
                                                char[$route.params.name].orginChar }}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>实装日期
                                        </th>
                                        <td>{{ char[$route.params.name].openDate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>获取途径
                                        </th>
                                        <td>
                                            <template v-for="(item, index) in char[$route.params.name].resourse"
                                                :key="index">
                                                {{ item }}<br>
                                            </template>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { defineComponent } from 'vue';
import OneTachie from './OneTachie.vue';
export default defineComponent({
    data() {
        return {
            char: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            attrName: window.$laohen.attrName,
            tachieIndex: 1
        }
    },
    components: {
        OneTachie
    },
    methods: {
        setTachieIndex(index) {
            this.tachieIndex = index
        },
        showChild(index) {
            return this.tachieIndex === index
        },
        checkHasKey(Obj, key) {
            return Object.keys(Obj).includes(key)
        },
        getCharAttrImgV2(attrName, xType) {
            return window.$commonUtil.getCharAttrImgV2(this.charAttr[attrName], xType)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        getCharStarImgV2(star, xType) {
            return window.$commonUtil.getCharStarImgV2(star, xType)
        }
    }

})
</script>

<style scoped>
.display-block {
    display: block;
}

.display-none {
    display: none;
}

.character-img-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
    padding-top: 56.2%;
    width: 100%;
}

.character-img-bg {
    position: absolute;
    top: 0;
    left: 0;
}

.character-img-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.resp-tabs.character-img-box>.resp-tabs-list {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    display: flex;
    overflow-x: auto;
    gap: 4px;
    flex-wrap: nowrap;
    justify-content: right;
    padding: 4px;
    width: 100%;
}

.clearfix:before {
    display: table;
    content: " ";
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
}

.resp-tabs.character-img-box>.resp-tabs-list>li {
    border: none;
    background: transparent;
}

.resp-tabs.character-img-box>.resp-tabs-list>li.active .tab-panel,
.resp-tabs.character-img-box>.resp-tabs-list>li:hover .tab-panel {
    background: #007aff;
    color: #fff;
}

.resp-tabs.character-img-box>.resp-tabs-list>li .tab-panel {
    padding: 0 20px;
    height: 30px;
    border-left: 4px solid #007aff;
    background: rgba(0, 0, 0, .5);
    color: #ddd;
    white-space: nowrap;
    line-height: 30px;
}

.resp-tabs-list li.active .tab-panel,
.tab-panel:hover {
    font-family: "Source Han Sans CN";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    font-weight: bold;
    background: #fff;
}

.tab-panel {
    display: block;
    height: auto;
    padding: 5px;
    min-width: 30px;
    text-decoration: none;
    width: auto;
    text-align: center;
    color: #fff;
}

.resp-tabs-list li {
    box-sizing: border-box;
    float: left;
    background: #525c66;
    border: 2px solid #525c66;
    margin: 0px;
}

.bili-list-style {
    list-style: none;
    float: left;
}

.resp-tabs.character-img-box>.resp-tabs-container>.resp-tab-content {
    position: relative;
    width: 100%;
    height: 100%;
}

.character-img-wrapper .wikitable {
    text-align: center;
}

table.wikitable {
    border: 1px solid #cccccc;
    margin: 10px 0;
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
}

.wikitable>tr>th,
.wikitable>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    font-family: "Microsoft YaHei", Arial, sans-serif, "PingFang SC";
    border-right: 1px solid #cccccc;
}

a,
a:visited {
    color: #006ee1;
}
</style>