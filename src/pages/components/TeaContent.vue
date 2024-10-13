<template>
    <div v-for="(tip, index) in commonContent" :key="index">
        {{ tip }}
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ["commonContent"]
})
</script>