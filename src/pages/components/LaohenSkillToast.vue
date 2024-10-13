<template>
    <transition name="fade">
        <div v-if="mouseCurrLaohenSkillEnum !== -1" class="toast-box" :style="{ right: rightX + 'px' }">
            <LaohenSkillDetaillCon :moveCurrLaohenSkillEnum="mouseCurrLaohenSkillEnum"></LaohenSkillDetaillCon>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue';
import LaohenSkillDetaillCon from '../detail/LaohenSkillDetaillCon.vue';

export default defineComponent({
    components: {
        LaohenSkillDetaillCon
    },
    props: ["mouseCurrLaohenSkillEnum", "rightX"]
});
</script>

<style scoped>
.toast-box {
    width: 500px;
    padding: 10px;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
    border-color: black;
    border: 2px solid;
    z-index: 1;
    position: fixed;
    top: 10px;
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