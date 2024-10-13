<template>
    <transition name="fade">
      <div v-if="showToastIndex === currIndex" class="toast-box">
        <p style="font-weight: bold;">{{ toastCon.title }}</p>
        <hr>
        <p>{{ toastCon.con }}</p>
      </div>
    </transition>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props:["toastCon", "showToastIndex", "currIndex"]
});
</script>

<style scoped>
.toast-box {
  width: 400px;
  position: absolute;
  padding: 10px;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  border-color: black;
  border: 2px solid;
}
 
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
 
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>