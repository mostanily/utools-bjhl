<template>
    <div class="BOX-1-1">
        <div class="BOX-title-1">常用内容</div>
        <div class="BOX-N" style="">
            <div class="box-sy">
                <div class="box-icon">
                    <div class="center">
                        <div class="floatnone">
                            <router-link :to="{ name: 'laohen' }">
                                <img alt="首页-记忆烙痕.png" src="/img/1x/120px-首页-记忆烙痕.png" decoding="async" loading="lazy"
                                    width="120" height="120"
                                    srcset="/img/1.5x/180px-首页-记忆烙痕.png 1.5x, /img/2x/225px-首页-记忆烙痕.png 2x"
                                    data-file-width="225" data-file-height="225">
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="box-icon">
                    <div class="center">
                        <div class="floatnone">
                            <router-link :to="{ name: 'laohen_skill' }">
                                <img alt="首页-技能图鉴.png" src="/img/1x/120px-首页-技能图鉴.png" decoding="async" loading="lazy"
                                    width="120" height="120"
                                    srcset="/img/1.5x/180px-首页-技能图鉴.png 1.5x, /img/2x/225px-首页-技能图鉴.png 2x"
                                    data-file-width="225" data-file-height="225">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="BOX-1-1">
        <div class="BOX-title-1">角色图鉴</div>
        <div class="main-line-wrap">
            <ul class="resp-tabs-list clearfix" style="margin:10px 0 0">
                <li :class="{ 'bili-list-style': true, 'active': 1 === showTypeActiveIndex }"
                    @click="setShowTypeActiveClass(1)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div class="job-name-item">按职业</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 2 === showTypeActiveIndex }"
                    @click="setShowTypeActiveClass(2)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div class="job-name-item">按元素</div>
                        </div>
                    </span>
                </li>
            </ul>
            <hr class="common-summary">
            <div class="resp-tabs">
                <ul class="resp-tabs-list clearfix" style="margin:10px 0 0">
                    <li v-for="jobType in jobTypes" :key="jobType.id"
                        :class="{ 'bili-list-style': true, 'active': jobType.id === currentActiveIndex }"
                        @click="setActiveClass(jobType.id)">
                        <span v-if="1 === showTypeActiveIndex" class="tab-panel">
                            <div style="display:flex;align-items:center;">
                                <div style="display: flex;"><img :alt="jobType.altName"
                                        :src="getJobTypeImg(jobType.jobName, 1)" decoding="async" width="24" height="24"
                                        :srcset="getJobTypeImg(jobType.jobName, 1.5) + ' 1.5x, ' + getJobTypeImg(jobType.jobName, 2) + ' 2x'"
                                        data-file-width="64" data-file-height="64"></div>
                                <div class="job-name-item">{{ jobType.jobName }}</div>
                            </div>
                        </span>
                        <span v-if="2 === showTypeActiveIndex" class="tab-panel">
                            <div style="display:flex;align-items:center;">
                                <div style="display: flex;"><img :alt="'UI 头像缩略图 元素 ' + jobType.attrName + '.png'"
                                        :src="getCharAttrImg(jobType.attrName, 1)" decoding="async" width="24" height="24"
                                        :srcset="getCharAttrImg(jobType.attrName, 1.5) + ' 1.5x'"
                                        data-file-width="64" data-file-height="64"></div>
                                <div class="job-name-item">{{ jobType.attrName }}</div>
                            </div>
                        </span>
                    </li>
                </ul>
                <div class="resp-tabs-container">
                    <div v-for="jobType in jobTypes" :key="jobType.id"
                        :class="{ 'resp-tab-content': true, 'display-block': jobType.id === currentActiveIndex, 'display-none': jobType.id !== currentActiveIndex }">
                        <div class="character-wrapper-main">
                            <div v-if="jobType.id === 1" style="display: none;"></div>
                            <div v-for="(charName, index) in (1 === showTypeActiveIndex ? jobType.charLists : allAttrToChar[jobType.attrName])" 
                                :key="index" class="character-box-home">
                                <single-char :charName="charName"></single-char>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleChar from './components/SingleChar.vue'
export default {
    components: {
        SingleChar
    },
    data() {
        return {
            jobTypes: [
                {
                    id: 1,
                    altName: "UI 头像缩略图 职业 铁御.png",
                    jobName: "铁御",
                    attrName: "炎",
                    charLists: []
                },
                {
                    id: 2,
                    altName: "UI 头像缩略图 职业 轻卫.png",
                    jobName: "轻卫",
                    attrName: "水",
                    charLists: []
                },
                {
                    id: 3,
                    altName: "UI 头像缩略图 职业 尖锋.png",
                    jobName: "尖锋",
                    attrName: "雷",
                    charLists: []
                },
                {
                    id: 4,
                    altName: "UI 头像缩略图 职业 游徒.png",
                    jobName: "游徒",
                    attrName: "霜",
                    charLists: []
                },
                {
                    id: 5,
                    altName: "UI 头像缩略图 职业 筑术师.png",
                    jobName: "筑术师",
                    attrName: "风",
                    charLists: []
                },
                {
                    id: 6,
                    altName: "UI 头像缩略图 职业 护佑者.png",
                    jobName: "护佑者",
                    attrName: "蚀",
                    charLists: []
                },
                {
                    id: 7,
                    altName: "UI 头像缩略图 职业 战术家.png",
                    jobName: "战术家",
                    attrName: "物理",
                    charLists: []
                }
            ],
            char: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            allJobTypeToChar: {
                "铁御": [],
                "轻卫": [],
                "尖锋": [],
                "游徒": [],
                "筑术师": [],
                "护佑者": [],
                "战术家": []
            },
            allAttrToChar: {
                "炎": [],
                "水": [],
                "雷": [],
                "霜": [],
                "风": [],
                "蚀": [],
                "物理": []
            },
            currentActiveIndex: 1,
            showTypeActiveIndex: 1
        }
    },
    mounted() {
        this.initJobTypes();
    },
    methods: {
        initJobTypes() {
            //先初始化各个角色的职业
            for (let charName in this.char) {
                const value = this.char[charName];
                const job = value.job;
                const attrName = this.charAttr[value.attr];
                this.allJobTypeToChar[job] = [...this.allJobTypeToChar[job], charName]
                this.allAttrToChar[attrName] = [...this.allAttrToChar[attrName], charName]
            }
            for (var i = 0; i < this.jobTypes.length; i++) {
                const value = this.jobTypes[i];
                const jobName = value.jobName;
                this.jobTypes[i].charLists = this.allJobTypeToChar[jobName];
            }
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        getCharAttrImg(attrName, xType) {
            return window.$commonUtil.getCharAttrImg(attrName, xType, true)
        },
        setActiveClass(index) {
            this.currentActiveIndex = index
        },
        setShowTypeActiveClass(index) {
            this.showTypeActiveIndex = index
        },
    }
}
</script>
<style scoped>
.BOX-N {
    padding: 5px 10px;
    width: 100%;
    overflow: hidden;
}

.BOX-AN2 {
    width: 88%;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding-left: 35px;
    padding-right: 5px;
    color: #404040;
}

.BOX-AN-25 {
    width: 25%;
}

.BOX-AN-25:hover,.BOX-AN2:hover {
    background-color: #000;
    color: #fff;
}

.box-sy {
    margin-left: -5px;
    margin-right: -5px;
    overflow: hidden;
}

.box-icon {
    float: left;
    padding: 15px 5px;
}

.center {
    width: 100%;
    text-align: center;
}

*.center * {
    margin-left: auto;
    margin-right: auto;
}

.job-name-item {
    padding:0px 2px;
    font-size:16px;
}

.active .job-name-item,.job-name-item:hover,.bili-list-style:hover {
    color: #000;
}

.BOX-title-1 {
    border: none;
    font-size: 18px;
    margin: 0px 0 5px;
    padding: 0px;
    line-height: 35px;
    background-image: url(/veinos.png), url(/ash.png), url(/grey.png);
    background-repeat: no-repeat, no-repeat, repeat-x;
    background-attachment: scroll, scroll, scroll;
    background-size: 84px 35px, 81px 35px, 100% 35px;
    background-position: left, right, center;
    background-clip: border-box, border-box, content-box;
    background-origin: padding-box, padding-box, padding-box;
    background-color: transparent;
    text-align: center;
    border-radius: 0px 0px 0px 0px;
    width: 100%;
    font-weight: bold;
    color: #fff;
    font-family: "Source Han Serif SC", "Source Han Sans CN";
}

.display-block {
    display: block;
}

.display-none {
    display: none;
}

.active {
    color: #4299e0;
}

.common-summary {
    width: 100%;
    float: left;
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

ul {
    margin: 10px 0 0;
    padding: 0;
    list-style-position: inside;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
    padding: 0;
}

.bili-list-style {
    height: 34px;
    display: flex;
}

.bili-list-style span {
    display: flex;
    padding-right: 5px;
    width: 100%;
}

.resp-tabs-list li {
    background: #525c66;
    border: 1px solid #404040;
    margin-bottom: 10px;
    box-sizing: border-box;
    float: left;
    list-style: none;
    cursor: pointer;
    background: #525c66;
    border: 1px solid #404040;
    width: 14.28%;
}

.character-wrapper-main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.character-box-home {
    display: inline-block;
    width: 80px;
    position: relative;
}

a {
    text-decoration: none;
    color: #0645ad;
    background: none;
}
</style>