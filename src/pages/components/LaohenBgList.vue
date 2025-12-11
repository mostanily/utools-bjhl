<template>
    <div class="memory-container">
        <div v-for="(laohen, index) in currAllLaohen" :key="index" class="divsort memory-box">
            <div class="memory-bg">
                <router-link :to="{ name: 'laohen_detail', params: { name: laohen.id } }" :title="'记忆烙痕/' + laohen.name">
                    <img :alt="'记忆烙痕 ' + laohen.name + ' 缩略图.png'"
                        :src="getLaohenBg(laohen.id)"
                        decoding="async" loading="lazy" width="436" height="136" data-file-width="436"
                        data-file-height="136"></router-link>
            </div>
            <div class="memory-bottom">
                <div class="memory-property">
                    <router-link :to="{ name: 'laohen_detail', params: { name: laohen.id } }" :title="'记忆烙痕/' + laohen.name">
                        <img :alt="'UI 烙痕缩略图 属性 ' + attrName[laohen.type] + '.png'"
                            :src="getLaohenListAttrImg(laohen.type)"
                            decoding="async" loading="lazy" width="412" height="75" data-file-width="412"
                            data-file-height="75"></router-link>
                </div>
                <div class="memory-quality">
                    <router-link :to="{ name: 'laohen_detail', params: { name: laohen.id } }" :title="'记忆烙痕/' + laohen.name">
                        <img :alt="'UI 烙痕缩略图 稀有度 ' + rarityEnName[laohen.rarity] + '.png'"
                            :src="getLaohenListRarityImg(laohen.rarity)"
                            decoding="async" loading="lazy"></router-link>
                </div>
                <div class="memory-name">{{ laohen.name }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: ["currAllLaohen"],
    data() {
        return {
            attrName: window.$laohen.attrName,
            rarityEnName: window.$laohen.rarityEnName,
        }
    },
    methods: {
        /**
         * 获取烙痕版面图片
         * @param laohenEnum 烙痕对应的枚举值
         */
        getLaohenBg(laohenEnum) {
            return window.$laohen.getLaohenBg(laohenEnum, true)
        },
        /**
         * 获取烙痕卡面稀有度背景图片
         * @param rarityEnum 烙痕稀有度对应的枚举值
         */
        getLaohenListRarityImg(rarityEnum) {
            return window.$laohen.getLaohenListRarityImg(rarityEnum)
        },
        /**
         * 获取烙痕图鉴列表属性背景图
         * @param attrEnum 烙痕对应属性的枚举值
         */
        getLaohenListAttrImg(attrEnum) {
            return window.$laohen.getLaohenListAttrImg(attrEnum)
        },
    }
})
</script>
<style scoped>
.memory-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.memory-box {
    position: relative;
    display: inline-block;
    width: calc(25% - 8px);
    margin-bottom: 3%;
    cursor: pointer;
}

.memory-bg {
    width: 100%;
    height: auto;
    overflow: hidden;
}

a,
a:visited {
    color: #006ee1;
}

.memory-bottom {
    position: absolute;
    width: 100%;
    height: auto;
    top: 79%;
}

.memory-property {
    width: 100%;
}

.memory-quality {
    position: absolute;
    width: 30%;
    bottom: 25%;
    left: 0;
}

.memory-name {
    position: absolute;
    bottom: 30%;
    left: 18%;
    font-weight: 600;
    font-size: 16px;
    font-family: SimHei;
    color: #fff;
}
</style>