<template>
    <div class="progress-bar-container">
        <div style="cursor: pointer;">
            <img :src="getCharImg(ssr.name, isRole)" :alt="ssr.name" height="40" style="height: 40px;">
        </div>
        <div :class="progressClass" :style="{ width: ssr.dian + '%' }">
        </div>
        <div class="chou-con">
            <span style="color: brown;">{{ checkIsWai(ssr) }}</span>
            「{{ ssr.poolName + '(' + ssr.time + ')' }}」<span style="font-weight: bold;">【{{ ssr.name }}】【{{ ssr.dian
                }}】</span>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    setup(props) {
        const progressValue = props.ssr.dian
        const progressClass = computed(() => {
            if (Number(progressValue) <= 30) {
                return props.isRole === 1 ? 'progress-bar progress-postion-role ou' : 'progress-bar progress-postion-laohen ou'
            } else if (Number(progressValue) <= 50) {
                return props.isRole === 1 ? 'progress-bar progress-postion-role normal' : 'progress-bar progress-postion-laohen normal'
            } else {
                return props.isRole === 1 ? 'progress-bar progress-postion-role fei' : 'progress-bar progress-postion-laohen fei'
            }
        })
        return { progressClass }
    },
    name: 'ProgressBar',
    props: ["ssr", "isRole", "laohenEnumToName"],
    data() {
        return {
            allLaohen: window.$laohen.allLaohen,
            waiStr: ''
        }
    },
    methods: {
        checkIsWai(ssr) {
            if (ssr.mustGet === true) {
                return ssr.desc
            }
            if (ssr.up && ssr.name !== ssr.up) {
                if (ssr.dian > 30) {
                    return "「歪」"
                } else if (ssr.dian >= 8 && ssr.dian <= 30) {
                    return "「小歪，不亏」"
                }
                return "「歪的好」"
            }
        },
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

<style>
.progress-bar-container>div.chou-con {
    color: #333;
    float: right;
}

.progress-bar-container {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar-container div {
    float: left;
    height: 40px;
    line-height: 40px;
}

.progress-bar {
    width: 80%;
    height: 40px;
    border-radius: 4px;
    transition: width 0.5s ease;
    text-align: center;
    line-height: 40px;
    /* Center the text vertically */
    color: beige;
}

.progress-postion-laohen {
    left: 100px;
}

.progress-postion-role {
    left: 30px;
}

.ou {
    background-color: #4caf50;
}

.normal {
    background-color: coral;
}

.fei {
    background-color: crimson;
}
</style>