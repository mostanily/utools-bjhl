<!-- 队长潜能 -->
<template>
    <div>
        <table class="wikitable" style="width:100%;margin:0;text-align:center;">
            <tbody>
                <tr>
                    <th style="width:20%">等级</th>
                    <th style="width:80%">加成</th>
                </tr>
                <tr>
                    <td>L0</td>
                    <td style="text-align:left;">作为队长时，自身获得20%刻印属性加成（包含体质、攻击、专精）</td>
                </tr>
                <tr>
                    <td>L1</td>
                    <td style="text-align:left;">作为队长时，队友获得20%刻印属性加成（包含体质、攻击、专精）</td>
                </tr>
                <tr>
                    <td>L2</td>
                    <td style="text-align:left;">作为队长且在场时：场上同调者体质提高20%</td>
                </tr>
                <tr>
                    <td>L3</td>
                    <td style="text-align:left;">作为队长时，自身的专精增伤转化率提高至110%</td>
                </tr>
                <tr>
                    <td>L4</td>
                    <td style="text-align:left;">
                        <PotentialContent :skillArr="charPotential.job[char[charName].job]"></PotentialContent>
                    </td>
                </tr>
                <tr>
                    <td>L5</td>
                    <td style="text-align:left;">自身攻击速度提高5%</td>
                </tr>
                <tr>
                    <td>L6</td>
                    <td style="text-align:left;">自身暴击率提高5%</td>
                </tr>
                <tr>
                    <td>L7</td>
                    <td style="text-align:left;">
                        <PotentialContent :skillArr="charPotential.attr[char[charName].attr]"></PotentialContent>
                        <PotentialContent v-if="checkSpeL7(charName)" :skillArr="charPotential.speL7.skillCon[charName]"></PotentialContent>
                    </td>
                </tr>
                <tr>
                    <td>L8</td>
                    <td style="text-align:left;">自身换至后备队后，再上场时间降低15秒</td>
                </tr>
                <tr>
                    <td>L9</td>
                    <td style="text-align:left;">
                        <PotentialContent :skillArr="charPotential.jl"></PotentialContent>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import PotentialContent from '../components/PotentialContent.vue';
export default defineComponent({
    components: {
        PotentialContent
    },
    props: ["charName"],
    data() {
        return {
            char: window.$commonUtil.allChar,
            charPotential: window.$commonUtil.charPotential
        }
    },
    methods: {
        checkSpeL7(charName) {
            return Object.keys(this.charPotential.speL7.skillCon).includes(charName)
        }
    }
})
</script>
<style scoped>
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