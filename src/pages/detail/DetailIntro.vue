<template>
    <div>
        <table class="wikitable" style="width:100%;margin:0;text-align:center;">
            <tbody>
                <tr>
                    <th colspan="4">基础属性</th>
                </tr>
                <tr>
                    <th colspan="1">基础减伤</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.base_damage_reduction }}%</td>
                </tr>
                <tr>
                    <th colspan="1">射程</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.range }}</td>
                </tr>
                <tr>
                    <th colspan="1">暴击率</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.critical_hit_rate }}%</td>
                </tr>
                <tr>
                    <th colspan="1">暴击伤害</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.critical_damage }}%</td>
                </tr>
                <tr>
                    <th colspan="1">战术移动</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.tactical_movement }}秒冷却</td>
                </tr>
                <tr v-if="char[$route.params.name].attrIntro.specialize_blocking_conversion_rates !== 0">
                    <th colspan="1">专精格挡转化率</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.specialize_blocking_conversion_rates }}%</td>
                </tr>
                <tr v-if="char[$route.params.name].attrIntro.specialize_cure_conversion_rates !== 0">
                    <th colspan="1">专精治愈转化率</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.specialize_cure_conversion_rates }}%</td>
                </tr>
                <tr>
                    <th colspan="1">专精增伤转化率</th>
                    <td colspan="3">{{ char[$route.params.name].attrIntro.specialize_damage_increase_conversion_rates }}%
                        <span style="color: #AAA;font-size: small;">（潜能等级L3：作为队长时，专精增伤转化率提升至110%）</span>
                    </td>
                </tr>
                <tr>
                    <th>最大位阶</th>
                    <th>体质加成（体能特训）</th>
                    <th>攻击加成（体能特训）</th>
                    <th>专精加成（体能特训）</th>
                </tr>
                <tr>
                    <td>{{ char[$route.params.name].attrIntro.max_rank }}</td>
                    <td>{{ char[$route.params.name].attrIntro.physique_bonus + char[$route.params.name].attrIntro.physical_fitness_physique_bonus }}%<span style="color: deepskyblue;">（{{ char[$route.params.name].attrIntro.physical_fitness_physique_bonus }}%）</span></td>
                    <td>{{ char[$route.params.name].attrIntro.attack_bonus + char[$route.params.name].attrIntro.physical_fitness_attack_bonus }}%<span style="color: deepskyblue;">（{{ char[$route.params.name].attrIntro.physical_fitness_attack_bonus }}%）</span></td>
                    <td>{{ char[$route.params.name].attrIntro.specialization_bonus + char[$route.params.name].attrIntro.physical_fitness_specialization_bonus }}%<span style="color: deepskyblue;">（{{ char[$route.params.name].attrIntro.physical_fitness_specialization_bonus }}%）</span></td>
                </tr>
            </tbody>
        </table>
        <table class="wikitable" style="width:100%;margin:0;text-align:center;">
            <tbody>
                <tr>
                    <th colspan="5">作为队长时初始刻印属性（最大位阶：{{ char[$route.params.name].attrIntro.max_rank }}）</th>
                </tr>
                <tr>
                    <th>体质</th>
                    <th>防御</th>
                    <th>攻击</th>
                    <th>专精</th>
                    <th>终端</th>
                </tr>
                <tr>
                    <td>{{ char[$route.params.name].attrIntro.physique }}</td>
                    <td>{{ char[$route.params.name].attrIntro.defense }}</td>
                    <td>{{ char[$route.params.name].attrIntro.attack }}</td>
                    <td>{{ char[$route.params.name].attrIntro.specialization }}</td>
                    <td>{{ char[$route.params.name].attrIntro.terminal }}</td>
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
            char: window.$commonUtil.allChar
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