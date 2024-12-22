<template>
    <Charactor></Charactor>
    <IndexOtherBox></IndexOtherBox>
    <div class="center">
        <div class="floatnone">
            <img alt="WikiLogoFull.png" src="/img/1x/320px-WikiLogoFull.png" decoding="async" loading="lazy" width="320"
                height="96" srcset="/img/1.5x/480px-WikiLogoFull.png 1.5x, /img/2x/640px-WikiLogoFull.png 2x"
                data-file-width="799" data-file-height="240">
        </div>
    </div>
</template>

<script>
import Charactor from './Charactor.vue'
import IndexOtherBox from './components/IndexOtherBox.vue';

export default {
    components: {
        Charactor, IndexOtherBox
    }
}
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.center {
    width: 1280px;
    text-align: center;
    position: fixed;
    bottom: 50px;
}

*.center * {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

p {
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 1280px;
    line-height: 50px;
}
</style>
