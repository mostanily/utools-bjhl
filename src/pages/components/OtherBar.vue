<template>
    <div class="par-pool" v-for="(ssr, index) in eachPool" :key="index">
        <router-link :to="{ name: isRole === 1 ?'detail' : 'laohen_detail', 
            params: { name: isRole === 1 ? ssr.name : laohenEnumToName.indexOf(ssr.name) } }" 
            :title=" isRole === 1 ? '同调者/' : '烙痕/' + ssr.name">
            <img :src="getCharImg(ssr.name, isRole)" :alt="ssr.name" height="120" style="height: 125px;">
            <span class="ssr-six-pool">{{ ssr.name }}「{{ ssr.dian }}」</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'OtherBar',
    props: ["eachPool", "isRole", "laohenEnumToName"],
    methods: {
        /**
         * 返回头像
         * @param charName 
         * @param isRole 
         */
        getCharImg(charName, isRole) {
            //返回角色头像
            return isRole === 1 ? window.$commonUtil.getCharImg(charName, 1) : this.getLaohenBg(charName)
        },
        /**
         * 获取烙痕版面图片
         * @param laohenEnum 烙痕对应的枚举值
         */
        getLaohenBg(laohenEnum) {
            return window.$laohen.getLaohenBg(this.$props.laohenEnumToName.indexOf(laohenEnum))
        }
    }
}
</script>
<style scoped>
.par-pool {
    cursor: pointer;
    float: left;
    margin-right: 3px;
    position: relative;
}

.ssr-six-pool {
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    text-align: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000, 2px 2px 4px #000;
}
</style>