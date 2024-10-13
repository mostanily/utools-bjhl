<template>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr">
        <div class="mw-parser-output">
            <div class="seed-breadcrumb">
                <div style="">
                    <router-link :to="{ name: 'index' }">首页</router-link> &gt;
                    <router-link :to="{ name: 'laohen_skill' }">技能图鉴</router-link> &gt;
                    <span style="font-weight:900">刻印技能/{{ getLaohenSkillDetaill($route.params.name).name }}</span>
                </div>
            </div>
            <div class="tabber tabberlive">
                <div class="half-skill">
                    <LaohenSkillDetaillCon :moveCurrLaohenSkillEnum="$route.params.name"></LaohenSkillDetaillCon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import LaohenSkillDetaillCon from './detail/LaohenSkillDetaillCon.vue';

export default defineComponent({
    components: {
        LaohenSkillDetaillCon
    },
    methods: {
        /**
         * 获取烙痕技能详情
         * @param laohenSkillEnum 烙痕技能对应的枚举值
         */
         getLaohenSkillDetaill(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillDetaill(laohenSkillEnum);
        }
    }
})
</script>

<style scoped>
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
</style>