<template>
    <div>
        <template v-for="(con, index) in skillDetail.detail" :key="index">
            <span v-if="typeof con === 'string'">
                <template v-if="con === ''"><br></template>
                {{ con }}
            </span>
            <span v-else :style="'color: ' + getSkillNumColor(con.color)">
                {{ con.desc }}
            </span>
        </template>
    </div>
    <div>
        <template v-if="skillDetail.speSkillToast">
            <div v-for="(eachSpeCon, index) in skillDetail.speSkillToast" :key="index">
                <hr style="margin:8px 0;">
                <div style="margin:0;display:flex;flex-direction:column;gap:10px;">
                    <div>
                        <b>{{ eachSpeCon.title }}</b><br>
                        <span v-for="(speCon, conIndex) in eachSpeCon.con" :key="conIndex">
                            <template v-if="conIndex > 0">
                                <span v-if="typeof speCon === 'string'">
                                    {{ speCon }}<br>
                                </span>
                                <skill-content v-else :skillArr="speCon">
                                    <br>
                                </skill-content>
                            </template>
                        </span>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import SkillContent from './SkillContent.vue'

export default defineComponent({
    components: {
        SkillContent
    },
    props: ["skillDetail"],
    methods: {
        getSkillNumColor(colorEnum) {
            return window.$commonUtil.getSkillNumColor(colorEnum)
        }
    }
})
</script>