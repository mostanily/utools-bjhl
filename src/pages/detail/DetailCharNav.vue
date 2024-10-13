<template>
    <h2><span></span><span class="mw-headline" id="同调者导航">同调者导航</span></h2>
    <div class="character-navi-color-wrapper">
        <div class="character-navi-color-box">
            <div style="background:#A0A4AE;"></div>1星
        </div>
        <div class="character-navi-color-box">
            <div style="background:#9F97D4;"></div>4星
        </div>
        <div class="character-navi-color-box">
            <div style="background:#FFEF50;"></div>5星
        </div>
        <div class="character-navi-color-box">
            <div style="background:linear-gradient(to right, #DD5E00, #FFA11B, #F3F853, #8BF784, #74E1C8, #9574CF);">
            </div>6星
        </div>
    </div>
    <table class="wikitable character-navi-table">
        <tbody>
            <tr v-for="(enName, jobName) in jobToEn" :key="jobName">
                <th>
                    <div style="display:flex;align-items:center;flex-wrap:wrap;justify-content:center;">
                        <div><img :alt="'UI 头像缩略图 职业 ' + jobName + '.png'" :src="getJobTypeImg(jobName, 1)"
                                decoding="async" width="40" height="40"
                                :srcset="getJobTypeImg(jobName, 1.5) + ' 1.5x,' + getJobTypeImg(jobName, 2) + ' 2x'"
                                data-file-width="64" data-file-height="64"></div>
                        <div
                            style="width:75px;padding:0px 5px 0px 3px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
                            <div
                                style="color:#ffffff;text-shadow:1px 1px 2px #000;font-family:monospace;font-size:20px;">
                                {{ jobName }}</div>
                            <div class="" style="color:#c2c6ca;font-size:0.5em;letter-spacing:5px;">{{ enName }}</div>
                            <div class="visible-xs" style="color:#c2c6ca;font-size:0.5em;letter-spacing:0px;">{{ enName
                                }}
                            </div>
                        </div>
                    </div>
                </th>
                <td>
                    <router-link v-for="(oneCharName, index) in allJobTypeToChar[jobName]" :key="index"
                        :to="{ name: 'detail', params: { name: oneCharName } }" :title="'同调者/' + oneCharName">
                        <span :class="'character-navi-character-name-' + char[oneCharName].star">
                            {{ oneCharName }}
                            <template v-if="index < allJobTypeToChar[jobName].length - 1">&nbsp;·&nbsp;</template>
                        </span>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            char: window.$commonUtil.allChar,
            allJobTypeToChar: {
                "铁御": [],
                "轻卫": [],
                "尖锋": [],
                "游徒": [],
                "筑术师": [],
                "护佑者": [],
                "战术家": []
            },
            jobToEn: {
                "铁御": "DEFENDER",
                "轻卫": "RETALIATOR",
                "尖锋": "EDGE",
                "游徒": "ACTIVE",
                "筑术师": "MAGE",
                "护佑者": "DEDICATOR",
                "战术家": "TACTICIAN"
            }
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
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
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
    margin: 10px 0;
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

.character-navi-character-name-6 {
    background-image: linear-gradient(to right, #DD5E00, #FFA11B, #F3F853, #8BF784, #74E1C8, #9574CF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    color: #FFF;
}

.character-navi-character-name-5 {
    color: #FFEF50;
}

.character-navi-character-name-4 {
    color: #9F97D4;
}

.character-navi-character-name-1 {
    color: #A0A4AE;
}
</style>