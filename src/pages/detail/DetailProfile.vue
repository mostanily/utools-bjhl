<template>
    <div>
        <table class="wikitable" style="width:100%;margin:0;text-align:center;">
            <tbody>
                <tr>
                    <th style="width:100px;">姓名
                    </th>
                    <td>{{ $route.params.name }}
                    </td>
                </tr>
                <tr>
                    <th>英文名
                    </th>
                    <td>{{ char[$route.params.name].nameEn }}
                    </td>
                </tr>
                <tr>
                    <th>职业
                    </th>
                    <td><img :alt="'UI 头像缩略图 职业 ' + char[$route.params.name].job + '.png'"
                            :src="getJobTypeImg(char[$route.params.name].job, 1)" decoding="async" width="20"
                            height="20"
                            :srcset="getJobTypeImg(char[$route.params.name].job, 1.5) + ' 1.5x,' + getJobTypeImg(char[$route.params.name].job, 2) + ' 2x'"
                            data-file-width="64" data-file-height="64"> {{ char[$route.params.name].job }}
                    </td>
                </tr>
                <tr>
                    <th>元素
                    </th>
                    <td><img :alt="'Ui 元素 ' + charAttr[char[$route.params.name].attr] + '.png'"
                            :src="getCharAttrImg(char[$route.params.name].attr, 1)" decoding="async" width="20"
                            height="20"
                            :srcset="getCharAttrImg(char[$route.params.name].attr, 1.5) + ' 1.5x,' + getCharAttrImg(char[$route.params.name].attr, 2) + ' 2x'"
                            data-file-width="76" data-file-height="76"> {{ charAttr[char[$route.params.name].attr] }}
                    </td>
                </tr>
                <tr>
                    <th>TAG
                    </th>
                    <td>{{ char[$route.params.name].tag.join('·') }}
                    </td>
                </tr>
                <tr>
                    <th>星级
                    </th>
                    <td>{{ char[$route.params.name].star }}星
                    </td>
                </tr>
                <tr>
                    <th>原生世界
                    </th>
                    <td><a href="#" :title="char[$route.params.name].originWorld">{{
                        char[$route.params.name].originWorld }}</a>
                    </td>
                </tr>
                <tr>
                    <th>CV
                    </th>
                    <td>{{ char[$route.params.name].cv }}
                    </td>
                </tr>
                <tr>
                    <th>原型来源
                    </th>
                    <td><a rel="nofollow" class="external text" href="#" target="_blank">{{
                        char[$route.params.name].orginChar }}</a>
                    </td>
                </tr>
                <tr>
                    <th>实装日期
                    </th>
                    <td>{{ char[$route.params.name].openDate }}
                    </td>
                </tr>
                <tr>
                    <th>获取途径
                    </th>
                    <td>
                        <template v-for="(item, index) in char[$route.params.name].resourse" :key="index">
                            {{ item }}<br>
                        </template>
                    </td>
                </tr>
                <tr>
                    <th>队长刻印技能</th>
                    <td>
                        <div style="width:100%;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
                            <div style="display:none"></div>
                            <router-link v-for="(skillEnum, index) in char[$route.params.name].skill" :key="index"
                                :to="{ name: 'laohen_skill_detail', params: { name: skillEnum } }"
                                @mouseenter="currLaohenSkillEnum = skillEnum" @mouseleave="currLaohenSkillEnum = -1"
                                @mousemove="updateMousePosition" class="bili-tt skill-box">
                                <div class="skill-bg">
                                    <span>
                                        <img :alt="'烙痕技能 ' + rarityEnName[getLaohenSkillDetaill(skillEnum).rarity] + '.png'"
                                            :src="getLaohenBgNavRarityImg([getLaohenSkillDetaill(skillEnum).rarity])"
                                            decoding="async" loading="lazy" width="225" height="56"
                                            data-file-width="225" data-file-height="56">
                                    </span>
                                </div>
                                <div class="skill-detail">
                                    <div class="skill-icon">
                                        <img :alt="getLaohenSkillDetaill(skillEnum).name + '.png'"
                                            :src="getLaohenSkillImg(skillEnum)" decoding="async" loading="lazy"
                                            width="128" height="128" data-file-width="128" data-file-height="128">
                                    </div>
                                    <div class="skill-name">{{ getLaohenSkillDetaill(skillEnum).name }}</div>
                                </div>
                            </router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <LaohenSkillToast :rightX="needRightX" :mouseCurrLaohenSkillEnum="currLaohenSkillEnum">
            </LaohenSkillToast>
        </div>
    </div>
</template>

<script>
import LaohenSkillToast from '../components/LaohenSkillToast.vue';

export default {
    components: {
        LaohenSkillToast
    },
    data() {
        return {
            char: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
            rarityEnName: window.$laohen.rarityEnName,
            currLaohenSkillEnum: -1,
            needRightX: 0,
        }
    },
    methods: {
        updateMousePosition(event) {
            const halfW = window.innerWidth / 2
            if (event.clientX > halfW) {
                this.needRightX = this.winWidth - 500
            } else {
                this.needRightX = 0
            }
        },
        getCharAttrImg(attrName, xType) {
            return window.$commonUtil.getCharAttrImg(this.charAttr[attrName], xType, true)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenBgNavRarityImg(rarityEnum) {
            return window.$laohen.getLaohenBgNavRarityImg(rarityEnum, true)
        },
        /**
         * 获取烙痕技能详情
         * @param laohenSkillEnum 烙痕技能对应的枚举值
         */
        getLaohenSkillDetaill(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillDetaill(laohenSkillEnum);
        },
        /**
         * 获取烙痕技能对应的图片
         * @param laohenSkillEnum 
         */
        getLaohenSkillImg(laohenSkillEnum) {
            return window.$laohen.getLaohenSkillImg(laohenSkillEnum)
        }
    }
}
</script>

<style scoped>
a {
    color: dodgerblue;
}

.wikitable td>img {
    position: relative;
    top: 4px;
}

.skill-box {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-family: 'sans-serif';
    background-color: #666;
}

.skill-box .skill-bg {
    position: absolute;
}

.skill-box .skill-detail {
    position: absolute;
    padding: 3px;
    display: flex;
    align-items: center;
}

.skill-box .skill-icon {
    width: 46px;
    height: 46px;
    overflow: hidden;
}

.skill-box .skill-name {
    padding-left: 8px;
    color: #fff;
    vertical-align: middle;
}
</style>