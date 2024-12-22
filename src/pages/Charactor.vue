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
            <div class="resp-tabs">
                <ul class="resp-tabs-list clearfix" style="margin:10px 0 0">
                    <li v-for="jobType in jobTypes" :key="jobType.id"
                        :class="{ 'bili-list-style': true, 'active': jobType.id === currentActiveIndex }"
                        @click="setActiveClass(jobType.id)">
                        <span class="tab-panel">
                            <div style="display:flex;align-items:center;">
                                <div style="display: flex;"><img :alt="jobType.altName"
                                        :src="getJobTypeImg(jobType.jobName, 1)" decoding="async" width="24" height="24"
                                        :srcset="getJobTypeImg(jobType.jobName, 1.5) + ' 1.5x, ' + getJobTypeImg(jobType.jobName, 2) + ' 2x'"
                                        data-file-width="64" data-file-height="64"></div>
                                <div style="padding:0px 2px;font-size:16px;">{{ jobType.jobName }}</div>
                            </div>
                        </span>
                    </li>
                </ul>
                <div class="resp-tabs-container">
                    <div v-for="jobType in jobTypes" :key="jobType.id"
                        :class="{ 'resp-tab-content': true, 'display-block': jobType.id === currentActiveIndex, 'display-none': jobType.id !== currentActiveIndex }">
                        <div class="character-wrapper-main">
                            <div v-if="jobType.id === 1" style="display: none;"></div>
                            <div v-for="(charName, index) in jobType.charLists" :key="index" class="character-box-home">
                                <div>
                                    <router-link :to="{ name: 'detail', params: { name: charName } }"
                                        :title="'同调者/' + charName">
                                        <img :alt="'角色 ' + charName + ' 头像.png'" :src="getCharImg(charName, 1)"
                                            decoding="async" width="80" height="96"
                                            :srcset="getCharImg(charName, 1.5) + ' 1.5x, ' + getCharImg(charName, 2) + ' 2x'"
                                            data-file-width="181" data-file-height="218">
                                    </router-link>
                                </div>
                                <div style="position:absolute;top:-3px;">
                                    <router-link :to="{ name: 'detail', params: { name: charName } }"
                                        :title="'同调者/' + charName">
                                        <img :alt="'UI 头像缩略图 元素 ' + charAttr[char[charName].attr] + '.png'"
                                            :src="getCharAttrImg(char[charName].attr, 1)" decoding="async" width="80"
                                            height="30" :srcset="getCharAttrImg(char[charName].attr, 1.5) + ' 1.5x'"
                                            data-file-width="108" data-file-height="40"></router-link>
                                </div>
                                <div style="position:absolute;top:-4px;left:-4px;">
                                    <router-link :to="{ name: 'detail', params: { name: charName } }"
                                        :title="'同调者/' + charName">
                                        <img :alt="'UI 头像缩略图 职业 ' + char[charName].job + '.png'"
                                            :src="getJobTypeImg(char[charName].job, 1)" decoding="async" width="30"
                                            height="30"
                                            :srcset="getJobTypeImg(char[charName].job, 1) + ' 1.5x, ' + getJobTypeImg(char[charName].job, 1) + ' 2x'"
                                            data-file-width="64" data-file-height="64"></router-link>
                                </div>
                                <div style="position:absolute;bottom:0;">
                                    <router-link :to="{ name: 'detail', params: { name: charName } }"
                                        :title="'同调者/' + charName">
                                        <img :alt="'UI 头像缩略图 星级 ' + char[charName].star + '星.png'"
                                            :src="getCharStarImg(char[charName].star, 1)" decoding="async" width="80"
                                            height="3"
                                            :srcset="getCharStarImg(char[charName].star, 1.5) + ' 1.5x, ' + getCharStarImg(char[charName].star, 2) + ' 2x'"
                                            data-file-width="146" data-file-height="5"></router-link>
                                </div>
                                <div class="character-name-home">{{ charName }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobTypes: [
                {
                    id: 1,
                    altName: "UI 头像缩略图 职业 铁御.png",
                    jobName: "铁御",
                    charLists: []
                },
                {
                    id: 2,
                    altName: "UI 头像缩略图 职业 轻卫.png",
                    jobName: "轻卫",
                    charLists: []
                },
                {
                    id: 3,
                    altName: "UI 头像缩略图 职业 尖锋.png",
                    jobName: "尖锋",
                    charLists: []
                },
                {
                    id: 4,
                    altName: "UI 头像缩略图 职业 游徒.png",
                    jobName: "游徒",
                    charLists: []
                },
                {
                    id: 5,
                    altName: "UI 头像缩略图 职业 筑术师.png",
                    jobName: "筑术师",
                    charLists: []
                },
                {
                    id: 6,
                    altName: "UI 头像缩略图 职业 护佑者.png",
                    jobName: "护佑者",
                    charLists: []
                },
                {
                    id: 7,
                    altName: "UI 头像缩略图 职业 战术家.png",
                    jobName: "战术家",
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
            currentActiveIndex: 1
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
                this.allJobTypeToChar[job] = [...this.allJobTypeToChar[job], charName]
            }
            for (var i = 0; i < this.jobTypes.length; i++) {
                const value = this.jobTypes[i];
                const jobName = value.jobName;
                this.jobTypes[i].charLists = this.allJobTypeToChar[jobName];
            }
        },
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
        },
        setActiveClass(index) {
            this.currentActiveIndex = index
        }
    }
}
</script>
<style>
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

a {
    text-decoration: none;
    color: #0645ad;
    background: none;
}
</style>