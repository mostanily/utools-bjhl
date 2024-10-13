<template>
    <div id="char-detail-tea" class="tabbertab" title="午后茶憩" data-hash="午后茶憩">
        <p class="mw-empty-elt"></p>
        <div class="tea">
            <div class="tabber tabberlive">
                <ul class="tabbernav">
                    <li :class="{ 'tabberactive': currentActiveIndex === 1 }" @click="setChildTeaActiveClass(1)"><a
                            title="茶憩成就" data-hash="茶憩成就" style="cursor: pointer;">茶憩成就</a></li><wbr>
                    <li :class="{ 'tabberactive': currentActiveIndex === 2 }" @click="setChildTeaActiveClass(2)"><a
                            title="解锁对话/高默契值配方" data-hash="解锁对话/高默契值配方" style="cursor: pointer;">解锁对话/高默契值配方</a></li><wbr>
                </ul>
                <div :class="{ 'tabbertab': true, 'display-block': currentActiveIndex === 1, 'display-none': currentActiveIndex !== 1 }"
                    title="茶憩成就" data-hash="茶憩成就" style="">
                    <table class="wikitable sortable jquery-tablesorter" style="margin:0;width:100%;">
                        <thead>
                            <tr>
                                <th style="width:30%;" class="headerSort" tabindex="0" role="columnheader button"
                                    title="升序排列">成就</th>
                                <th class="hidden-xs headerSort" style="width:40%;" tabindex="0"
                                    role="columnheader button" title="升序排列">提示</th>
                                <th class="headerSort" tabindex="0" role="columnheader button" title="升序排列">配方</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(tea, index) in allCharTea[$route.params.name]['achievement']" :key="index">
                                <td>
                                    {{ tea.name }}<div>{{ tea.limit }}</div>
                                </td>
                                <td class="hidden-xs">
                                    <tea-content :commonContent="tea.tips"></tea-content>
                                </td>
                                <td class="hidden-xs tea-achieve--recipe">
                                    <li v-for="(con, index) in tea.recipe" :key="index">{{ con }}</li>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div :class="{ 'tabbertab': true, 'display-block': currentActiveIndex === 2, 'display-none': currentActiveIndex !== 2 }"
                    title="解锁对话/高默契值配方" data-hash="解锁对话/高默契值配方">
                    <p>满加成为茶室家具4000舒适度+穹顶默契无间9级。<br>触发对话需要配方默契值大于330（无任何额外加成）。<br>触发对话不受休息室的舒适度和白荆穹顶提供的默契值加成影响。此处仅提供不同等级时默契值最高的配方以供参考。<br>
                    </p>
                    <table class="wikitable" style="width:100%;margin:0;text-align:center;">
                        <tbody>
                            <tr>
                                <th rowspan="2" style="width:14%;">默契值等级</th>
                                <th rowspan="2" style="width:30%;">配方</th>
                                <th colspan="3" style="width:41%;">参考默契值</th>
                                <th rowspan="2" style="width:15%;">是否可解锁对话</th>
                            </tr>
                            <tr>
                                <th style="width:5%;">无加成</th>
                                <th style="width:5%;">满家具加成</th>
                                <th style="width:5%;">满加成</th>
                            </tr>
                            <tr v-for="(rapport, index) in allCharTea[$route.params.name]['hignRapport']" :key="index">
                                <td>{{ rapport.needLevel }}</td>
                                <td class="tea-achieve--recipe" style="text-align:left;">
                                    <li v-for="(recipe, index) in rapport.recipe" :key="index">{{ recipe }}</li>
                                </td>
                                <td v-for="(ex,index) in rapport.ex" :key="index">{{ ex }}</td>
                                <td>是</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="mw-empty-elt"></p>
                </div>
            </div>
        </div>
        <p class="mw-empty-elt"></p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TeaContent from '../components/TeaContent.vue'

export default defineComponent({
    components: {
        TeaContent
    },
    data() {
        return {
            currentActiveIndex: 1,
            allCharTea: window.$commonUtil.allCharTea
        }
    },
    methods: {
        setChildTeaActiveClass(index) {
            this.currentActiveIndex = index
        }
    }
});
</script>
<style scoped>
img {
    margin: 0px 2px;
}
.character-tea--invitation-2 {
    position: relative;
    min-height: 511px;
}
.tea-achieve--recipe>li {
    display: list-item;
}
.character-tea--invitation-2 .character-tea--info-1 {
    position: absolute;
    bottom: 33%;
    right: 12%;
    min-width: 20%;
    height: fit-content;
    padding: 10px 15px;
}
.character-tea--invitation-2 .character-tea--info-1 .character-tea--info-1-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-image-slice: 57 fill;
    border-image-width: 45px 45px;
}
.character-tea--invitation-2 .character-tea--info-1 .character-tea--info-1-title {
    position: relative;
    color: #736350;
    font-size: 15px;
    z-index: 900;
    padding: 0 0 10px;
}
.character-tea--invitation-2 .character-tea--info-1 .character-tea--info-1-text {
    position: relative;
    color: #736350;
    font-size: 15px;
    z-index: 900;
    padding: 5px 0 10px;
    text-wrap: nowrap;
}
.img-character-tea--info-1-bg {
    height: 100%;
}
.character-tea--invitation-2 .character-tea--info-2 {
    position: absolute;
    width: 50%;
    height: 11%;
    bottom: 22%;
    right: 12%;
}
.character-tea--invitation-2 .character-tea--info-2 .character-tea--info-2-bg {
    position: relative;
    height: 100%;
}
.character-tea--invitation-2 .character-tea--info-2 .character-tea--info-2-bg>img {
    height: 100%;
}
.character-tea--invitation-2 .character-tea--info-2 .character-tea--info-2-text {
    display: flex;
    align-items: center;
    position: absolute;
    top: 16%;
    left: 4%;
    width: 82%;
    height: 70%;
    color: #8D8B8F;
    vertical-align: middle;
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 1.1;
}
.character-tea--invitation-3 {
    position: relative;
    min-height: 511px;
}
.character-tea--invitation-3 .character-tea--invitation-right {
    position: absolute;
    top: 20%;
    right: 12.67%;
    width: 36%;
    height: 56%;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-1 {
    position: relative;
    height: 50%;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-1 .character-tea--invitation-icon {
    position: absolute;
    top: 10%;
    left: 2%;
    max-width: 165px;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-1 .character-tea--invitation-title {
    position: absolute;
    top: 16%;
    right: 14%;
}
.character-tea--invitation-3 .character-tea--invitation-title {
    color: #b3a27f;
    font-size: 19px;
    font-weight: 600;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-1 .character-tea--invitation-recipe {
    position: absolute;
    top: 32%;
    left: 41%;
}
.character-tea--invitation-3 .character-tea--invitation-recipe {
    color: #e59295;
    padding: 5px 0 0 10px;
    list-style: none;
    margin: 0;
}
.character-tea--invitation-3 .character-tea--invitation-recipe > li {
    margin: 0 !important;
    line-height: 1.6 !important;
    font-size: 14px;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 {
    height: 50%;
    position: relative;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 .character-tea--invitation-icon {
    position: absolute;
    top: 4%;
    right: 10%;
    max-width: 165px;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 .character-tea--invitation-title {
    position: absolute;
    top: 7%;
    left: 5.5%;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 .character-tea--invitation-recipe {
    position: absolute;
    top: 23%;
    left: 5%;
}
.character-tea--invitation-3 .character-tea--invitation-detail {
    color: #e59295;
    font-size: 13px;
    text-align: justify;
}
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 .character-tea--invitation-hint,
.character-tea--invitation-3 .character-tea--invitation-right .character-tea--invitation-right-2 .character-tea--invitation-detail {
    position: absolute;
    top: 26%;
    left: 6%;
    padding-right: 1%;
    width: 45%;
}
</style>