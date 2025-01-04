<template>
    <transition name="fade">
        <div v-if="showToastIndex === currIndex" class="toast-box">
            <p style="font-weight: bold;">{{ toastCon.title }}</p>
            <hr>
            <p v-if="toastCon.con !== ''">{{ toastCon.con }}</p>
            <div v-else>
                <template v-for="(con, index) in toastCon.conSpe" :key="index">
                    <span v-if="typeof con === 'string'">
                        <template v-if="con === ''"><br></template>
                        {{ con }}
                    </span>
                    <span v-else :style="'color: ' + getSkillNumColor(con.color)">
                        {{ con.desc }}
                    </span>
                </template>
            </div>
        </div>
    </transition>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: ["toastCon", "showToastIndex", "currIndex"],
    methods: {
        getSkillNumColor(colorEnum) {
            return window.$commonUtil.getSkillNumColor(colorEnum)
        }
    }
});
</script>

<style scoped>
.toast-box {
    width: 400px;
    position: absolute;
    padding: 10px;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
    border-color: black;
    border: 2px solid;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>