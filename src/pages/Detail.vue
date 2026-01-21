<template>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr" lang="zh-Hans-CN" dir="ltr">
        <div class="mw-parser-output">
            <div class="character-page">
                <div class="seed-breadcrumb">
                    <div style=""><router-link :to="{ name: 'index' }" title="首页">首页</router-link> &gt; <span
                            style="font-weight:900">同调者/{{ $route.params.name }}</span></div>
                </div>
                <FirstMeet></FirstMeet>
                <CharTachie></CharTachie>
                <div class="tabber tabberlive">
                    <ul class="tabbernav">
                        <li :class="{ 'tabberactive': currentActiveIndex === 1 }" @click="setParentActiveClass(1)"><a
                                title="初会" data-hash="初会" style="cursor: pointer;">初会</a></li><wbr>
                        <li :class="{ 'tabberactive': currentActiveIndex === 2 }" @click="setParentActiveClass(2)"><a
                                title="信息概览" data-hash="信息概览" style="cursor: pointer;">信息概览</a></li><wbr>
                        <li :class="{ 'tabberactive': currentActiveIndex === 3 }" @click="setParentActiveClass(3)"><a
                                title="队长潜能" data-hash="队长潜能" style="cursor: pointer;">队长潜能</a></li><wbr>        
                        <li :class="{ 'tabberactive': currentActiveIndex === 4 }" @click="setParentActiveClass(4)"><a
                                title="战斗技能" data-hash="战斗技能" style="cursor: pointer;">战斗技能</a></li><wbr>
                        <li :class="{ 'tabberactive': currentActiveIndex === 5 }" @click="setParentActiveClass(5)"><a
                                title="午后茶憩" data-hash="午后茶憩" style="cursor: pointer;">午后茶憩</a></li><wbr>
                    </ul>
                    <DetailIntro v-if="showChild(1)"></DetailIntro>
                    <Profile v-if="showChild(2)"></Profile>
                    <DetailPotential v-if="showChild(3)" :charName="$route.params.name"></DetailPotential>
                    <Skill v-if="showChild(4)"></Skill>
                    <Tea v-if="showChild(5)"></Tea>
                    <CharNav></CharNav>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from './detail/DetailProfile.vue';
import Skill from './detail/DetailSkill.vue';
import Tea from './detail/DetailTea.vue';
import DetailIntro from './detail/DetailIntro.vue';
import DetailPotential from './detail/DetailPotential.vue';
import CharNav from './detail/DetailCharNav.vue';
import CharTachie from './components/CharTachie.vue';
import FirstMeet from './components/FirstMeet.vue';

export default defineComponent({
    data() {
        return {
            currentActiveIndex: 1
        }
    },
    components: {
        Profile, Skill, Tea, DetailIntro, DetailPotential, CharNav, CharTachie, FirstMeet
    },
    methods: {
        setParentActiveClass(index: number) {
            this.currentActiveIndex = index
        },
        showChild(index: number) {
            return this.currentActiveIndex === index
        }
    }
});

</script>

<style>
.display-block {
    display: block;
}

.display-none {
    display: none;
}

a {
    color: rgb(12, 129, 231);
}

li {
    display: flex;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.seed-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    padding: 0 .8rem;
    margin: .5rem 0;
    border: .1rem solid #525c66;
    border-left-width: .5rem;
    border-radius: .3em;
    background: #525c66;
    font-size: 1.4rem;
    line-height: 2.7rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, .13), 0 1px 3px rgba(0, 0, 0, .2);
}

.seed-breadcrumb>div {
    flex: 1 0 auto;
    max-width: 100%;
    max-height: 2em;
    text-align: left;
}

.seed-breadcrumb>* {
    flex: 1 0 auto;
    max-width: 100%;
    color: #FFF;
}

.character-intro-box {
    width: auto;
    border-left: 10px solid #60c1ff;
    margin: 10px 0px;
    background: rgba(100, 100, 100, .1);
    padding: 5px;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 5px rgb(0 0 0 / 15%);
}

.character-intro-avatar {
    margin: 0px 15px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    flex-shrink: 0;
    background: #FFF;
}

.character-intro-text {
    font-size: 1.6rem;
    font-weight: bold;
}

img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    text-align: center;
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

ul.tabbernav {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
    padding: 4px;
    background: #525c66;
    border: none;
    margin: 0px;
}

ul.tabbernav li {
    list-style: none;
    margin: 0;
    display: inline-block;
}

ul.tabbernav li :hover {
    background-color: #ffffff;
    color: #292B2F;
}

ul.tabbernav>li.tabberactive a {
    background-color: #ffffff;
    color: #292B2F;
}

ul.tabbernav>li a {
    display: inline-block;
    margin: 0;
    background: #525c66;
    border: none;
    padding: 0 16px;
    line-height: 26px;
    text-decoration: none;
    white-space: pre;
}

.enlarge {
    user-select: none;
}

.enlarge-img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: scale-down;
}

.visible-lg,
.visible-md,
.visible-sm,
.visible-xs {
    display: none !important;
}

table {
    font-size: 100%;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
}

td {
    display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
}

td,
th {
    padding: 0;
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

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    border-right: 1px solid #cccccc;
}

ul.tabbernav>li.tabberactive a {
    margin: 0;
    border: none;
}

.tabber .tabbertab {
    padding: 4px;
    border: 1px solid #525c66;
    border-top: none;
}

ul.resp-tabs-list {
    padding-left: 0px;
}

.resp-tabs-list li {
    box-sizing: border-box;
    float: left;
    background: #525c66;
    border: 2px solid #525c66;
    margin: 0px;
    line-height: 20px;
    cursor: pointer;
}

p.mw-empty-elt {
    display: none;
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
}

.tea .resp-tabs-list li .tab-panel {
    padding: 10px 15px;
}

.tea-menu {
    position: relative;
    max-width: 410px;
    display: inline-block;
    user-select: none;
}

.tea-menu--cup-menu>.tea-menu--cup-menu-deco {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8%;
}

.tea-menu--cup-menu>.tea-menu--cup-menu-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #958973;
}

.tea-menu--cup-menu>.tea-menu--cup-menu-item>.tea-menu--cup-menu-item-name {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}

.tea-menu--cup-menu>.tea-menu--cup-menu-item>.tea-menu--cup-menu-item-resource {
    font-size: 12px;
}

.tea-menu--drink-menu>.tea-menu--drink-menu-deco {
    position: absolute;
    top: 2%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 36%;
}

.tea-menu--drink-menu .tea-menu--drink-menu-item {
    position: relative;
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #958973;
    margin: 1px 15px 18px 1px;
}

.tea-menu--drink-menu .tea-menu--drink-menu-item .tea-menu--drink-menu-item-name {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}

.tea-menu--drink-menu .tea-menu--drink-menu-item .tea-menu--drink-menu-item-resource {
    font-size: 12px;
}

.tea-menu--drink-menu .tea-menu--drink-menu-item .tea-menu--drink-menu-item-favor {
    position: absolute;
    width: 40%;
    bottom: 80%;
    right: 70%;
}

.tea-menu--condiment-menu .seed-scroll>div:nth-child(1) {
    margin-top: 0;
}

.tea-menu--condiment-menu .tea-menu--condiment-menu-type {
    position: relative;
    width: 100%;
    color: #FFF;
    text-align: center;
    font-weight: 600;
    margin: 24px 0 16px;
}

.tea-menu--condiment-menu .tea-menu--condiment-menu-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #958973;
}

.tea-menu--drink-menu .seed-scroll:after,
.tea-menu--condiment-menu .seed-scroll:after {
    content: '';
    flex: auto;
}

.tea-menu--drink-menu .seed-scroll,
.tea-menu--condiment-menu .seed-scroll {
    position: absolute;
    top: 10%;
    left: 12%;
    width: 80%;
    height: 72%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
    padding: 2%;
    scrollbar-color: #7e714c #292421;
    padding-top: 20px;
}

.tea-menu--condiment-menu .tea-menu--condiment-menu-item {
    position: relative;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #958973;
    margin-right: 6%;
}

.tea-menu--condiment-menu .tea-menu--condiment-menu-item .tea-menu--condiment-menu-item-name {
    font-size: 12px;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}

.tea-menu--condiment-menu .tea-menu--condiment-menu-item .tea-menu--condiment-menu-item-favor {
    position: absolute;
    width: 60%;
    bottom: 60%;
    right: 70%;
}

.tea-menu--condiment-menu .seed-scroll {
    flex-direction: column;
    justify-content: start;
    flex-wrap: nowrap;
}

.resp-tab-content {
    display: none;
}

.character-file-bg {
    display: flex;
    justify-content: center;
    padding: 5px 0 10px;
}

.character-file {
    background-color: #FFF;
    color: #303435;
    width: 100%;
    max-width: 800px;
    margin: 0px;
    word-break: normal;
    position: relative;
    text-align: left;
    border: 1px solid #404040;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.6);
}

.character-file--title {
    text-align: center;
    line-height: 1.5;
    font-weight: 700;
    font-size: 30px;
    padding-top: 5px;
    font-family: "Source Han Serif SC", "Source Han Sans CN";
}

.character-file--title-f {
    text-align: center;
    font-size: 15px;
    color: #8B9FAC;
    margin-bottom: 16px;
}

.character-file--text {
    padding: 10px 30px;
}

.character-file .wikitable {
    background-color: #FFF;
    color: #303435;
    border: none;
    margin: 0px;
    border-collapse: separate;
    width: 100%;
}

.character-file .wikitable td.character-file--label {
    text-align: left;
    vertical-align: top;
}

.character-file .wikitable td.character-file--text-b {
    padding: 0px 10px;
    font-weight: 500;
}

.character-file .wikitable td.character-file--photo {
    position: absolute;
    right: 10px;
    top: 0;
    max-width: 50%;
    display: flex;
    padding: 0;
}

.character-file .wikitable td {
    padding: 4px 8px;
    border: none;
}

.character-memory-file-bg {
    display: flex;
    justify-content: center;
    padding: 5px 0 10px;
}

.character-memory-file {
    background-color: #F7F7F7;
    color: #303435;
    width: 100%;
    max-width: 800px;
    margin: 0px;
    word-break: normal;
    position: relative;
    text-align: left;
    border: 1px solid #E1E4ED;
    box-shadow: 0 6px 12px 0 #34383F;
    padding-bottom: 20px;
}

.character-memory-file .character-memory-file--title {
    text-align: center;
    line-height: 1.5;
    font-weight: 700;
    font-size: 24px;
    background-color: #E1E4ED;
    color: #292B2F;
    font-family: "Source Han Serif SC", "Source Han Sans CN";
}

.character-memory-file .character-memory-file--text {
    padding: 30px 20px;
    text-align: justify;
    font-size: 15px;
    line-height: 1.7;
    color: #595862;
}

.equipment-info-wrapper {
    position: relative;
    font-size: 16px;
}

.equipment-info-box {
    position: absolute;
    color: #FFF;
    top: 10%;
    left: 5%;
    width: 40%;
}

.equipment-info-title {
    font-size: 2em;
    font-weight: 900;
    font-family: 'Source Han Serif SC', 'Source Han Sans CN';
}

.equipment-info-desc {
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 1em;
    margin: 10px 0;
    padding: 3px 5px;
}

.equipment-info-detail {
    font-size: 1em;
    text-shadow: 0 0 4px black;
}

.character-file .wikitable td.character-file--photo-b {
    position: absolute;
    right: 20px;
    top: 50px;
}

div.floatright,
table.floatright {
    margin: 0 0 0.5em 0.5em;
}

.character-page {
    max-width: 1240px;
}

.character-page h2 {
    border: none;
    background: #525c66;
    margin: 10px 0 5px;
    padding: 0px;
    text-align: center;
    line-height: 35px;
    font-weight: bold;
    color: #fff;
    font-family: "Source Han Serif SC", "Source Han Sans CN";
    font-size: 18px;
}
</style>