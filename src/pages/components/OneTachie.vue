<template>
    <div id="" class="tabber tabberlive">
        <ul class="tabbernav">
            <li v-for="(listName, index) in tacgieObj.listNames" :key="index"
                :class="{ 'tabberactive': tachieIndex === index + 1 }" @click="setTachieIndex(index + 1)"><a
                    style="cursor: pointer;" :title="listName" :data-hash="listName">{{ listName }}</a></li><wbr>
        </ul>
        <div v-for="(tacgiePath, index) in tacgieObj.imgs" :key="index"
            :class="{ 'tabbertab': true, 'display-block': tachieIndex === index + 1, 'display-none': tachieIndex !== index + 1 }"
            :title="tacgieObj.listNames[index]" :data-hash="tacgieObj.listNames[index]">
            <p class="mw-empty-elt"></p>
            <div class="enlarge" :data-img="'角色_' + tacgieObj.listNames[index] + '.png'" data-height="100%"
                style="max-height:100%;text-align:center;display:flex;">
                <img class="enlarge-img" ref="tachie" :alt="'角色 ' + tacgieObj.listNames[index] + '.png'"
                    :src="'https://patchwiki.biligame.com/images/bjhl/' + tacgiePath" decoding="async" loading="lazy">
            </div>
            <p class="mw-empty-elt"></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tachieIndex: 1
        }
    },
    props: ["tacgieObj"],
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    mounted() {
        this.handleResize()
    },
    methods: {
        setTachieIndex(index) {
            this.tachieIndex = index
        },
        handleResize() {
            this.$refs.tachie.forEach(tachieDom => {
                this.dealEachDom(tachieDom)
            })
        },
        dealEachDom(tachieDom) {
            //let clientH = window.innerHeight
            let clientW = window.innerWidth
            let needH = 688 * clientW / 1240
            if (needH <= 710) {
                tachieDom.style.height = `${needH - 40}px`
            } else {
                tachieDom.style.height = `688px`
            }
        }
    }
}
</script>
<style scoped>
.display-block {
    display: block;
}

.display-none {
    display: none;
}

.resp-tabs.character-img-box ul.tabbernav li.tabberactive a,
.resp-tabs.character-img-box ul.tabbernav li:hover a {
    background: transparent;
    color: #4299e0 !important;
}

.resp-tabs.character-img-box ul.tabbernav li a {
    padding: 4px 10px;
    background: transparent;
    text-shadow: 0 0 2px #000;
    font-weight: bold;
}

ul.tabbernav>li.tabberactive a:hover {
    border: none;
}

ul.tabbernav>li.tabberactive a {
    margin: 0;
    border: none;
    color: #525c66 !important;
}

.resp-tabs.character-img-box ul.tabbernav {
    position: absolute;
    top: 44px;
    right: 0;
    z-index: 999;
    padding: 0;
    background: transparent;
}

ul.tabbernav {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
    padding: 4px;
    background: #525c66;
    border: none;
    margin: 0;
    border-bottom: 1px solid #CCC;
    font: bold 12px Verdana, sans-serif;
}

ul.tabbernav li {
    list-style: none;
    margin: 0;
    display: inline-block;
}

.resp-tabs.character-img-box ul.tabbernav li a {
    padding: 4px 10px;
    background: transparent;
    text-shadow: 0 0 2px #000;
}

ul.tabbernav>li a:link {
    color: #FFF;
}

ul.tabbernav>li a {
    display: inline-block;
    margin: 0;
    background: #525c66;
    border: none;
    line-height: 26px;
}

ul.tabbernav li a {
    text-decoration: none;
    white-space: pre;
}

.resp-tabs.character-img-box .tabbertab {
    position: relative;
    padding: 10px;
    height: 100%;
    border: none;
    background-color: transparent;
}

.resp-tabs.character-img-box .tabbertab[title='3D'] {
    padding: 0;
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
    /* aspect-ratio: 1287/724; */
}

.mw-hide-empty-elt .mw-parser-output .mw-empty-elt {
    display: none;
}
</style>