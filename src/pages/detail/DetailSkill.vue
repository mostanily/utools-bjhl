<template>
    <div id="char-detail-skill" class="tabbertab" title="战斗技能" data-hash="战斗技能">
        <p class="mw-empty-elt"></p>
        <div class="tabber tabberlive">
            <ul class="tabbernav">
                <li v-for="(skill, index) in allSkill[$route.params.name]" :key="index"
                    :class="{ 'tabberactive': currentActiveIndex === index }" @click="setChildSkillActiveClass(index)">
                    <a style="cursor: pointer;" :title="skill.name">{{ skill.name }}</a>
                </li><wbr>
            </ul>
            <div v-for="(skill, index) in allSkill[$route.params.name]" :key="index"
                :class="{ 'tabbertab': true, 'display-block': currentActiveIndex === index, 'display-none': currentActiveIndex !== index }"
                :title="skill.name">
                <p class="mw-empty-elt"></p>
                <div v-if="skill.aliasNum === '特性'">
                    <div style="margin-bottom:10px;display:flex;">
                        <div style="padding:10px;"><img :alt="'技能 ' + skill.aliasNum + '.png'"
                                :src="getSkillImg(skill.aliasNum, 1)" decoding="async" width="50" height="50"
                                :srcset="getSkillImg(skill.aliasNum, 1.5) + ' 1.5x,' + getSkillImg(skill.aliasNum, 2) + ' 2x'"
                                data-file-width="130" data-file-height="129">
                        </div>
                        <div>
                            <div style="margin-bottom:10px;display:flex;align-items:flex-end;">
                                <div style="color:#323435;font-size:20px;font-weight:600;">{{ skill.name }}</div>
                                <div
                                    style="background-color:#9FA9AF;padding:3px 10px;border-radius:3px;margin-left:5px;color:#fff;height: fit-content;">
                                    {{ skill.detail.type }}</div>
                            </div>
                        </div>
                    </div>
                    <div style="color:#717880;">
                        <div style="background:#9FA9AF;padding:3px 10px;border-radius:5px;color:#FFF;">普通攻击
                        </div>
                        <hr style="margin:5px 0;background:#9FA9AF;">
                        <div style="margin-bottom:10px;display:flex;">
                            <div v-for="(tabArr, index) in skill.detail.tab" :key="index"
                                style="margin:3px 5px 3px 0;border-radius:3px;overflow:hidden;color:#fff;display:flex;">
                                <span style="background-color:#9FA9AF;padding:3px 10px;">{{ tabArr[0] }}</span><span
                                    style="background-color:#58666E;padding:3px 10px;">{{ tabArr[1] }}</span>
                            </div>
                        </div>
                        <div style="margin-bottom:10px;">
                            <span v-for="(at, index) in skill.detail.atType" :key="index"
                                style="background-color:#9FA9AF;padding:3px 10px;border-radius:3px;margin:3px 5px 3px 0px;color:#fff;">{{
                                    at }}</span>
                        </div>
                        <div style="margin-bottom:20px;">
                            <skill-content :skillArr="skill.detail.content"></skill-content>
                        </div>
                        <div style="background:#9FA9AF;padding:3px 10px;border-radius:5px;color:#FFF;">战斗特性
                        </div>
                        <hr style="margin:5px 0;background:#9FA9AF;">
                        <div style="margin-bottom:20px;"><b>图鉴解锁：</b>
                            <skill-content :skillArr="skill.detail.specialContent[0]"></skill-content>
                        </div>
                        <div style="margin-bottom:20px;"><b>异核I级解锁：</b>
                            <skill-content :skillArr="skill.detail.specialContent[1]"></skill-content>
                        </div>
                        <div style="margin-bottom:20px;"><b>异核III级解锁：</b>
                            <skill-content :skillArr="skill.detail.specialContent[2]"></skill-content>
                        </div>
                        <div style="margin-bottom:20px;"><b>异核Ⅳ级解锁：</b>
                            <div><span>技能【{{ allSkill[$route.params.name][0].name }}】等级增加3级</span></div>
                        </div>
                        <div style="margin-bottom:20px;"><b>异核Ⅴ级解锁：</b>
                            <div><span>技能【{{ allSkill[$route.params.name][1].name }}】等级增加3级</span></div>
                        </div>
                    </div>
                </div>
                <div v-if="skill.aliasNum === '特性强化'">
                    <div style="margin-bottom:10px;display:flex;">
                        <div style="padding:10px;"><img :alt="'技能 ' + skill.aliasNum + '.png'"
                                :src="getSkillImg(skill.aliasNum, 1)" decoding="async" width="50" height="50"
                                :srcset="getSkillImg(skill.aliasNum, 1.5) + ' 1.5x,' + getSkillImg(skill.aliasNum, 2) + ' 2x'"
                                data-file-width="128" data-file-height="128"></div>
                        <div>
                            <div style="margin-bottom:10px;display:flex;align-items:flex-end;">
                                <div style="color:#323435;font-size:20px;font-weight:600;">{{ $route.params.name
                                    }}的特性强化</div>
                            </div>
                        </div>
                    </div>
                    <div style="color:#717880;">
                        <div style="margin-bottom:20px;">
                            <skill-content :skillArr="skill.detail.content"></skill-content>
                        </div>
                    </div>
                </div>
                <div v-if="skill.aliasNum !== '特性' && skill.aliasNum !== '特性强化'">
                    <div style="display:flex;align-items:center;">
                        <div style="padding:10px;"><img :alt="'技能 ' + skill.aliasNum + '.png'"
                                :src="getSkillImg(skill.aliasNum, 1)" decoding="async" width="50" height="50"
                                :srcset="getSkillImg(skill.aliasNum, 1.5) + ' 1.5x,' + getSkillImg(skill.aliasNum, 2) + ' 2x'"
                                data-file-width="128" data-file-height="128"></div>
                        <div>
                            <div style="margin-bottom:10px;display:flex;align-items:flex-end;">
                                <div style="color:#323435;font-size:20px;font-weight:600;">{{ skill.name }}</div>
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
                                <td>LV{{ skill.maxLevel }}</td>
                                <td style="text-align:left;">
                                    <skill-content :skillArr="skill.detail.content" :detailSkillArr="skill.detail"></skill-content>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="mw-empty-elt"></p>
            </div>
        </div>
        <p class="mw-empty-elt"></p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import SkillContent from '../components/SkillContent.vue'

export default defineComponent({
    components: {
        SkillContent
    },
    data() {
        return {
            currentActiveIndex: 0,
            allSkill: window.$commonUtil.allCharSkill
        }
    },
    methods: {
        setChildSkillActiveClass(index) {
            this.currentActiveIndex = index
        },
        getSkillImg(aliasNum, xType) {
            return window.$commonUtil.getSkillImg(aliasNum, this.$route.params.name, xType)
        }
    }
});
</script>

<style scoped></style>