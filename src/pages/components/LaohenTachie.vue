<template>
    <div class="enlarge" :data-img="'记忆烙痕_' + getLaohenDetail($route.params.name).name + '_立绘.png'" data-height="auto"
        style="text-align:center;display:flex;">
        <photo-provider>
            <photo-consumer :src="'https://patchwiki.biligame.com/images/bjhl/' + getLaohenDetail($route.params.name).tacgie" 
                :intro="'记忆烙痕_' + getLaohenDetail($route.params.name).name + '_立绘'" 
                :download-name="'记忆烙痕_' + getLaohenDetail($route.params.name).name + '_立绘'">
                <img :alt="'记忆烙痕 ' + getLaohenDetail($route.params.name).name + ' 立绘.png'"
                    :src="'https://patchwiki.biligame.com/images/bjhl/' + getLaohenDetail($route.params.name).tacgie"
                    decoding="async" loading="lazy" width="1562" height="722" class="enlarge-img" data-file-width="1562"
                    data-file-height="722">
            </photo-consumer>
        </photo-provider>
    </div>
    <div class="hidden-xs">
        <table class="wikitable" style="width:100%;margin:8px 0;">
            <tbody>
                <tr>
                    <th colspan="6">
                        <img style="vertical-align: middle;"
                            :alt="rarityEnName[getLaohenDetail($route.params.name).rarity] + '.png'"
                            :src="getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 1)" decoding="async"
                            loading="lazy" width="30" height="30"
                            :srcset="getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 1.5) + ' 1.5x,' + getLaohenAttrRarity(getLaohenDetail($route.params.name).rarity, 2) + '  2x'"
                            data-file-width="128" data-file-height="128">
                        <img style="vertical-align: middle;"
                            :alt="'烙痕 ' + attrName[getLaohenDetail($route.params.name).type] + '.png'"
                            :src="getLaohenAttrImg(attrName[getLaohenDetail($route.params.name).type])" decoding="async"
                            loading="lazy" width="30" height="30" data-file-width="86" data-file-height="86"> {{
                                getLaohenDetail($route.params.name).name }}
                    </th>
                </tr>
                <tr>
                    <td colspan="6" style="text-align:center;">
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <th style="width:100px">illust</th>
                    <td style="width:20%;">{{ getLaohenIllust(getLaohenDetail($route.params.name).extraData.illust) }}
                    </td>
                    <th style="width:100px">实装日期</th>
                    <td style="width:20%;">{{ getFullYearMonthDay(getLaohenDetail($route.params.name).openDate) }}
                    </td>
                    <th style="width:100px">获取途径</th>
                    <td style="width:20%;">{{
                        getLaohenResourseName(getLaohenDetail($route.params.name).extraData.resourse) }}</td>
                </tr>
                <tr>
                    <template v-if="checkHasKey(getLaohenDetail($route.params.name).extraData, 'skillLink')">
                        <th style="width:100px">技能同调</th>
                        <td style="width:20%;">
                            <div class="laohen-skill-resourse">
                                <img :alt="'UI 头像缩略图 职业 ' + allChar[getLaohenDetail($route.params.name).extraData.skillLink].job + '.png'"
                                    :src="getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 1)"
                                    decoding="async" loading="lazy" width="20" height="20"
                                    :srcset="getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 1.5) + ' 1.5x,' + getJobTypeImg(allChar[getLaohenDetail($route.params.name).extraData.skillLink].job, 2) + ' 2x'"
                                    data-file-width="64" data-file-height="64">
                                <img :alt="'Ui 元素 ' + charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr] + '.png'"
                                    :src="getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 1, true)"
                                    decoding="async" loading="lazy" width="20" height="20"
                                    :srcset="getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 1.5, true) + ' 1.5x,' + getCharAttrImg(charAttr[allChar[getLaohenDetail($route.params.name).extraData.skillLink].attr], 2) + ' 2x'"
                                    data-file-width="76" data-file-height="76">
                                <router-link style="color:#646cff;"
                                    :to="{ name: 'detail', params: { name: getLaohenDetail($route.params.name).extraData.skillLink } }"
                                    :title="'同调者/' + getLaohenDetail($route.params.name).extraData.skillLink">{{
                                        getLaohenDetail($route.params.name).extraData.skillLink }}
                                </router-link>
                            </div>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            rarityEnName: window.$laohen.rarityEnName,
            attrName: window.$laohen.attrName,
            allChar: window.$commonUtil.allChar,
            charAttr: window.$commonUtil.charAttr,
        }
    },
    methods: {
        checkHasKey(Obj, key) {
            return Object.keys(Obj).includes(key)
        },
        getJobTypeImg(jobName, xType) {
            return window.$commonUtil.getJobTypeImg(jobName, xType)
        },
        getCharAttrImg(attrName, xType, isOriginal) {
            return window.$commonUtil.getCharAttrImg(attrName, xType, isOriginal)
        },
        getFullYearMonthDay(dateString) {
            let date = new Date(dateString)
            return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
        },
        /**
         * 获取筛选条件对应的属性图片
         * @param attr 烙痕属性值（体质、防御等）
         */
        getLaohenAttrImg(attrName) {
            return window.$laohen.getLaohenAttrImg(attrName)
        },
        /**
         * 获取烙痕详情
         * @param laohenEnum 
         */
        getLaohenDetail(laohenEnum) {
            return window.$laohen.getLaohenDetail(laohenEnum)
        },
        /**
         * 获取烙痕稀有度对应的图片
         * @param rarityEnum 
         * @param xType 
         */
        getLaohenAttrRarity(rarityEnum, xType) {
            const enName = this.rarityEnName[rarityEnum]
            if (xType === 1) {
                return 'img/laohen/attr/1x/40px-' + enName + '.png';
            } else if (xType === 1.5) {
                return 'img/laohen/attr/1.5x/60px-' + enName + '.png';
            }
            return 'img/laohen/attr/2x/80px-' + enName + '.png';
        },
        /**
         * 获取画师名称
         * @param illustEnum 画师枚举值，LaohenIllust.(x)
         * @returns 
         */
        getLaohenIllust(illustEnum) {
            return window.$laohen.getLaohenIllust(illustEnum)
        },
        /**
         * 获取烙痕来源名称
         * @param resourseEnum 来源枚举值
         * @returns 
         */
        getLaohenResourseName(resourseEnum) {
            return window.$laohen.getLaohenResourseName(resourseEnum)
        },
    }
})
</script>
<style scoped>
.enlarge {
    user-select: none;
}

.enlarge-img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: scale-down;
}

table.wikitable {
    border: 1px solid #cccccc;
    margin: 10px 0;
}

.wikitable {
    background-color: #f8f9fa;
    color: #202122;
    margin: 1em 0;
    border: 1px solid #a2a9b1;
    border-collapse: collapse;
}

table.wikitable>tr>th,
table.wikitable>tr>td,
table.wikitable>*>tr>th,
table.wikitable>*>tr>td {
    border: 1px #ccc solid;
    padding: 5px 5px;
}

table.wikitable>tr>th,
table.wikitable>*>tr>th {
    background: #424c55;
    height: auto;
    font-family: "Source Han Serif SC", "Source Han Sans CN", "sans-serif";
    color: white;
    border-right: 1px solid #cccccc;
}

table.wikitable>tr>td,
table.wikitable>*>tr>td {
    background-color: #fff;
    height: auto;
    font-family: "Microsoft YaHei", Arial, sans-serif, "PingFang SC";
    border-right: 1px solid #cccccc;
}

.wikitable>tr>th,
.wikitable>*>tr>th {
    background-color: #eaecf0;
    text-align: center;
}
</style>