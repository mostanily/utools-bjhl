<template>
    <div >
        <template v-for="(con, index) in skillArr" :key="index">
            <span v-if="typeof con === 'string'">
                <template v-if="con === ''"><br></template>
                {{ con }}
            </span>
            <template v-else>
                <span v-if="con.withToast" 
                    :style="'text-decoration: underline;color: ' + getSkillNumColor(con.color)" 
                    @mouseenter="currentIndex = index" 
                    @mouseleave="currentIndex = -1">
                    {{ con.desc}}
                    <span>
                        <Toast :toastCon="con" :showToastIndex="index" :currIndex="currentIndex"></Toast>
                    </span>
                </span>
                <span v-else :style="'color: ' + getSkillNumColor(con.color)">
                    {{ con.desc}}
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
    props:["skillArr"],
    data() {
        return {
            currentIndex: -1
        }
    },
    methods: {
        getSkillNumColor(colorEnum) {
            return window.$commonUtil.getSkillNumColor(colorEnum)
        }
    }
})
</script>