<template>
    <div style="background:#9FA9AF;padding:3px 10px;border-radius:5px;color:#FFF;">烙痕【{{
        getLaohenDetail(skill.unlock).name }}】特质强化
    </div>
    <hr style="margin:5px 0;background:#9FA9AF;">
    <div style="margin-bottom:20px;"><b>特质Ⅱ级解锁：</b>
        <skill-content :skillArr="skill.detail.specialContent[0]"></skill-content>
    </div>
    <div style="margin-bottom:20px;"><b>特质Ⅴ级解锁：</b>
        <skill-content :skillArr="skill.detail.specialContent[1]"></skill-content>
    </div>
    <div style="background:#9FA9AF;padding:3px 10px;border-radius:5px;color:#FFF;">
        技能{{ allSkill[charName][skill.repSkill].aliasNum }}
        【{{ allSkill[charName][skill.repSkill].name }}】→
        【{{ skill.detail.name }}】
    </div>
    <hr style="margin:5px 0;background:#9FA9AF;">
    <div style="display:flex;align-items:center;">
        <div style="padding:10px;"><img :alt="'技能 ' + skill.detail.aliasNum + '.png'"
                :src="getSpeRepSkillImg(skill.detail.aliasNum, 1)" decoding="async" width="50" height="50"
                :srcset="getSpeRepSkillImg(skill.detail.aliasNum, 1.5) + ' 1.5x,' + getSpeRepSkillImg(skill.detail.aliasNum, 2) + ' 2x'"
                data-file-width="128" data-file-height="128"></div>
        <div>
            <div style="margin-bottom:10px;display:flex;align-items:flex-end;">
                <div style="color:#323435;font-size:20px;font-weight:600;">{{ skill.detail.name }}</div>
                <div
                    style="background-color:#9FA9AF;padding:3px 10px;border-radius:3px;margin-left:5px;color:#fff;height: fit-content;">
                    {{ skill.detail.type }}</div>
            </div>
            <div style="margin-bottom:10px;display:flex;">
                <div v-for="(skillTanName, index) in skill.detail.skillTab" :key="index"
                    style="margin:3px 5px 3px 0;border-radius:3px;overflow:hidden;color:#fff;display:flex;">
                    <span style="background-color:#9FA9AF;padding:3px 10px;">{{ skillTanName[0]
                    }}</span>
                    <span style="background-color:#58666E;padding:3px 10px;">{{ skillTanName[1]
                    }}</span>
                </div>
            </div>
            <div style="margin-bottom:10px;">
                <template v-for="(tabName, index) in skill.detail.tab" :key="index">
                    <span
                        style="background-color:#9FA9AF;padding:3px 10px;border-radius:3px;margin:3px 0;color:#fff;">{{
                            tabName }}</span>&nbsp;
                </template>
            </div>
        </div>
    </div>
    <table class="wikitable" style="width:100%;text-align:center;margin:0px;">
        <tbody>
            <tr>
                <th style="width:10%">等级MAX</th>
                <th style="width:60%">技能效果</th>
            </tr>
            <tr>
                <td>LV{{ skill.detail.maxLevel }}</td>
                <td style="text-align:left;">
                    <skill-content :skillArr="skill.detail.content" :detailSkillArr="skill.detail"></skill-content>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { defineComponent } from 'vue';
import SkillContent from './SkillContent.vue'
export default defineComponent({
    components: {
        SkillContent
    },
    props: ["skill", "charName"],
    data() {
        return {
            laohenAttrType: window.$laohen.attrName,
            rarityEnName: window.$laohen.rarityEnName,
            allSkill: window.$commonUtil.allCharSkill
        }
    },
    methods: {
        getSpeRepSkillImg(aliasNum, xType) {
            return window.$commonUtil.getSpeRepSkillImg(aliasNum, this.$props.charName, xType)
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
    }
})    
</script>