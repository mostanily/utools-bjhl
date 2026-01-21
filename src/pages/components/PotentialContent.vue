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
                    {{ con.desc }}
                    <span>
                        <Toast :toastCon="con" :showToastIndex="index" :currIndex="currentIndex"></Toast>
                    </span>
                </span>
                <span v-else-if="con.repIndex !== -1" @mouseenter="currLaohenSkillEnum = con.repIndex" @mouseleave="currLaohenSkillEnum = -1">
                    <router-link :to="{ name: 'laohen_skill_detail', params: { name: con.repIndex } }" 
                        :style="'color: ' + getSkillNumColor(con.color)">
                        {{ con.desc }}
                    </router-link>
                    <LaohenSkillToast :rightX="0" :mouseCurrLaohenSkillEnum="currLaohenSkillEnum"></LaohenSkillToast>
                </span>
                <span v-else :style="'color: ' + getSkillNumColor(con.color)">
                    {{ con.desc }}
                </span>
            </template>
        </template>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Toast from './Toast.vue'
import LaohenSkillToast from './LaohenSkillToast.vue';
export default defineComponent({
    components: {
        Toast, LaohenSkillToast
    },
    props: ["skillArr"],
    data() {
        return {
            currentIndex: -1,
            currLaohenSkillEnum: -1,
            charPotential: window.$commonUtil.charPotential
        }
    },
    methods: {
        getSkillNumColor(colorEnum) {
            return window.$commonUtil.getSkillNumColor(colorEnum)
        }
    }
})
</script>