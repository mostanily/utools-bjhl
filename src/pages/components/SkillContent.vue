<template>
    <div>
        <template v-for="(con, index) in skillArr" :key="index">
            <span v-if="typeof con === 'string'">
                <template v-if="con === ''"><br></template>
                {{ con }}
            </span>
            <template v-else>
                <span v-if="con.withToast" :style="'text-decoration: underline;color: ' + getSkillNumColor(con.color)"
                    @mouseenter="currentIndex = index" @mouseleave="currentIndex = -1">
                    {{ setSkillCon(con, detailSkillArr) }}
                    <span>
                        <Toast :toastCon="con" :showToastIndex="index" :currIndex="currentIndex"></Toast>
                    </span>
                </span>
                <template v-else-if="con.isImg">
                    <img class="img-in-text" :src="con.desc" alt="状态图标" width="40" height="40">
                </template>
                <span v-else :style="'color: ' + getSkillNumColor(con.color)">
                    {{ setSkillCon(con, detailSkillArr) }}
                </span>
            </template>
        </template>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Toast from './Toast.vue'

export default defineComponent({
    components: {
        Toast
    },
    props: ["skillArr", "detailSkillArr"],
    data() {
        return {
            currentIndex: -1
        }
    },
    methods: {
        getSkillNumColor(colorEnum) {
            return window.$commonUtil.getSkillNumColor(colorEnum)
        },
        setSkillCon(con, detailSkillArr) {
            if (con.repIndex != -1 && detailSkillArr != null && Object.keys(detailSkillArr).includes("sizeLevel")) {
                let newConArr = new Array
                for (let index in this.detailSkillArr.sizeLevel) {
                    const currCon = this.detailSkillArr.sizeLevel[index]
                    const lv = Number(index) + 1
                    newConArr.push(`LV${lv}:${currCon[con.repIndex]}`)
                }
                return `(${newConArr.join('；')})`
            }
            return con.desc
        }
    }
})
</script>
<style scoped>
.img-in-text {
    vertical-align: text-top;
    width: 1.4em;
}
</style>