<template>
    <div id="headBox">
        <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN">
            <router-link :to="{ name: 'index' }" title="首页" style="color: #333;" >首页</router-link> &gt; 技能图鉴<span
                id="location"></span>
        </h1>
    </div>
    <hr>
    <div id="mw-content-text" class="mw-body-content mw-content-ltr">
        <div class="mw-parser-output">
            <table class="wikitable" style="width:100%">
                <tbody>
                    <tr>
                        <th colspan="2" width="8%">稀有度
                        </th>
                        <td>
                            <li v-for="(rarity, index) in rarityName" :key="index" @click="setSortFiled('rarity', index)"
                                :style="sortField.rarity.includes(index) ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption" role="button" :data-option="'1|' + rarity"
                                data-group="1">{{ rarity }}
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">适用职业
                        </th>
                        <td>
                            <li @click="setSortFiled('job', '0')" 
                                :style="sortField.job.includes('0') ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">全职业适用</li>
                            <li @click="setSortFiled('job', '123')" 
                                :style="sortField.job.includes('123') ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">□ 铁御 轻卫 尖锋</li>
                            <li @click="setSortFiled('job', '45')" 
                                :style="sortField.job.includes('45') ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">△ 游徒 筑术师</li>
                            <li @click="setSortFiled('job', '67')" 
                                :style="sortField.job.includes('67') ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">◇ 护佑者 战术家</li>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">来源
                        </th>
                        <td class="mw-collapsible mw-made-collapsible">
                            <div class="mw-collapsible-content">
                                <li @click="setSortFiled('resourse', '烙痕漫巡技能')" 
                                    :style="sortField.resourse.includes('烙痕漫巡技能') ? 'background-color: silver;color: #000;' : ''"
                                    class="btn btn-default cardSelectOption">烙痕漫巡技能</li>
                                <li @click="setSortFiled('resourse', '烙痕唤醒技能')" 
                                    :style="sortField.resourse.includes('烙痕唤醒技能') ? 'background-color: silver;color: #000;' : ''"
                                    class="btn btn-default cardSelectOption">烙痕唤醒技能</li>
                                <li @click="setSortFiled('resourse', '队长刻印技能')" 
                                    :style="sortField.resourse.includes('队长刻印技能') ? 'background-color: silver;color: #000;' : ''"
                                    class="btn btn-default cardSelectOption">队长刻印技能</li>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" width="8%">技能类型
                        </th>
                        <td>
                            <li @click="setSortFiled('skillType', 1)" 
                                :style="sortField.skillType.includes(1) ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">核心技能</li>
                            <li @click="setSortFiled('skillType', 0)" 
                                :style="sortField.skillType.includes(0) ? 'background-color: silver;color: #000;' : ''"
                                class="btn btn-default cardSelectOption">常规技能</li>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <LaohenSkillToast :rightX="needRightX" :mouseCurrLaohenSkillEnum="currLaohenSkillEnum">
                </LaohenSkillToast>
            </div>
            <div id="CardSelectTr" class="skill-container">
                <div v-for="(skill, index) in allLaohenSkill" :key="index" class="divsort skill-item" style="">
                    <div style="display:none"></div>
                    <router-link :to="{ name: 'laohen_skill_detail', params: { name: skill.id } }"
                        @mouseenter="currLaohenSkillEnum = skill.id" @mouseleave="currLaohenSkillEnum = -1"
                        @mousemove="updateMousePosition">
                        <div class="skill-bg">
                            <span>
                                <img :alt="'烙痕技能 ' + rarityEnName[skill.rarity] + '.png'"
                                    :src="getLaohenBgNavRarityImg(skill.rarity)" decoding="async" loading="lazy"
                                    width="225" height="56" data-file-width="225" data-file-height="56">
                            </span>
                        </div>
                        <div class="skill-detail">
                            <div class="skill-icon">
                                <router-link :to="{ name: 'laohen_skill_detail', params: { name: skill.id } }"
                                    :title="'刻印技能/' + skill.name">
                                    <img alt="Skill core 146 all.png" :src="getLaohenSkillImg(skill.id)"
                                        decoding="async" loading="lazy" width="128" height="128" data-file-width="128"
                                        data-file-height="128">
                                </router-link>
                            </div>
                            <div class="skill-name">{{ skill.name }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import LaohenSkillToast from './components/LaohenSkillToast.vue';

export default defineComponent({
    components: {
        LaohenSkillToast
    },
    data() {
        return {
            rarityEnName: window.$laohen.rarityEnName,
            rarityName: window.$laohen.rarityName,
            allLaohenSkill: new Array,
            originAllLaohenSkill: window.$laohen.allLaohenSkill,
            currLaohenSkillEnum: -1,
            needRightX: 0,
            sortField: {
                rarity: new Array,
                job: new Array,
                resourse: new Array,
                skillType: new Array
            },
        }
    },
    mounted() {
        this.sortLaohenSkill()
    },
    methods: {
        setSortFiled(type, fieldEnum) {
            if (type === "rarity") {
                if (!this.sortField.rarity.includes(fieldEnum)) {
                    this.sortField.rarity.push(fieldEnum)
                } else {
                    this.sortField.rarity.splice(this.sortField.rarity.indexOf(fieldEnum), 1)
                }
            } else if (type === 'job') {
                if (!this.sortField.job.includes(fieldEnum)) {
                    this.sortField.job.push(fieldEnum)
                } else {
                    this.sortField.job.splice(this.sortField.job.indexOf(fieldEnum), 1)
                }
            } else if (type === 'resourse') {
                if (!this.sortField.resourse.includes(fieldEnum)) {
                    this.sortField.resourse.push(fieldEnum)
                } else {
                    this.sortField.resourse.splice(this.sortField.resourse.indexOf(fieldEnum), 1)
                }
            } else if (type === 'skillType') {
                if (!this.sortField.skillType.includes(fieldEnum)) {
                    this.sortField.skillType.push(fieldEnum)
                } else {
                    this.sortField.skillType.splice(this.sortField.skillType.indexOf(fieldEnum), 1)
                }
            }
            this.sortLaohenSkill()
        },
        sortLaohenSkill() {
            const tempLaohenSkill = computed(() => {
                //默认排序，稀有度倒叙
                return [...this.originAllLaohenSkill]
                    .sort((a, b) => b.rarity - a.rarity)
            });
            this.allLaohenSkill = tempLaohenSkill.value
            //根据导航，进行筛选数据
            if (this.sortField.rarity.length > 0) {
                const temp = new Array
                for (let key in this.allLaohenSkill) {
                    if (this.sortField.rarity.includes(this.allLaohenSkill[key].rarity)) {
                        temp.push(this.allLaohenSkill[key])
                    }
                }
                this.allLaohenSkill = temp
            }
            if (this.sortField.job.length > 0) {
                //0 123 45 67
                const temp = new Array
                for (let key in this.allLaohenSkill) {
                    const takeEffectArr = computed(() => {
                        return [...this.allLaohenSkill[key].takeEffect].sort((a, b)=> a - b)
                    })
                    if (this.sortField.job.includes(takeEffectArr.value.join(""))) {
                        temp.push(this.allLaohenSkill[key])
                    }
                }
                this.allLaohenSkill = temp
            }
            if (this.sortField.resourse.length > 0) {
                for (let i in this.sortField.resourse) {
                    const sourseLaohenName = this.sortField.resourse[i]
                    const temp1 = new Array
                    for (let key in this.allLaohenSkill) {
                        if(this.allLaohenSkill[key].sourseLaohen[sourseLaohenName].length > 0) {
                            temp1.push(this.allLaohenSkill[key])
                        }
                    }
                    this.allLaohenSkill = temp1
                }
            }
            if (this.sortField.skillType.length > 0) {
                const temp = new Array
                for (let key in this.allLaohenSkill) {
                    if (this.sortField.skillType.includes(this.allLaohenSkill[key].skillType)) {
                        temp.push(this.allLaohenSkill[key])
                    }
                }
                this.allLaohenSkill = temp
            }
        },
        updateMousePosition(event) {
            const halfW = window.innerWidth / 2
            if (event.clientX > halfW) {
                this.needRightX = this.winWidth - 500
            } else {
                this.needRightX = 0
            }
        },
        /**
         * 获取烙痕技能对应的图片
         * @param laohenSkillEnum 
         */
        getLaohenSkillImg(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillImg(laohenSkillEnum)
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenBgNavRarityImg(rarityEnum) {
            return window.$laohen.getLaohenBgNavRarityImg(rarityEnum, true)
        }
    }
})
</script>

<style scoped>
.mw-content-ltr {
    direction: ltr;
}

.wikitable>tr>th,
.wikitable>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}

table.wikitable>tr>th,
table.wikitable>*>tr>th {
    background: #424c55;
    height: auto;
    font-family: "Source Han Serif SC", "Source Han Sans CN", "sans-serif";
    color: white;
    border-right: 1px solid #cccccc;
}

table.wikitable>tr>th,
table.wikitable>tr>td,
table.wikitable>*>tr>th,
table.wikitable>*>tr>td {
    border: 1px #ccc solid;
    padding: 5px 5px;
}

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    border-right: 1px solid #cccccc;
}

.btn.queryParams,
.btn.cardSelectOption {
    margin: 0 5px 0 0;
    padding: 2px 8px;
    color: #FFF;
    background-color: #424c55;
    border: none;
}

.btn.queryParams+.btn.queryParams,
.btn.cardSelectOption+.btn.cardSelectOption {
    margin: 2px 5px 2px 0;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

a:hover {
    color: #646cff;
}

.skill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 10px;
}

.skill-item {
    position: relative;
}

.skill-item {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-family: 'sans-serif';
    background-color: #666;
}

.skill-item .skill-bg {
    position: absolute;
}

.skill-item .skill-detail {
    position: absolute;
    padding: 3px;
    display: flex;
    align-items: center;
}

.skill-item .skill-icon {
    width: 46px;
    height: 46px;
    overflow: hidden;
}
</style>