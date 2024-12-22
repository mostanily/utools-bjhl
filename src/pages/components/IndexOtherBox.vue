<template>
    <div class="BOX-1-1" style="margin-top: 10px;">
        <div class="BOX-title-1">小工具</div>
        <div class="BOX-N" style="">
            <div class="BOX-AN-25" style="float:left;position:relative;height:30px;margin:5px 0px">
                <router-link :to="{ name: 'third_page' }" title="抽卡分析"><span class="BOX-AN2">抽卡分析</span></router-link>
                <div style="position: absolute;top: 0px;left:0px;">
                    <router-link :to="{ name: 'third_page' }" title="抽卡分析">
                        <img alt="UI 首页内容入口图标 9.png"
                            src="/img/1x/30px-UI_首页内容入口图标_9.png"
                            decoding="async" loading="lazy" width="30" height="30"
                            srcset="/img/1.5x/45px-UI_首页内容入口图标_9.png 1.5x, /img/2x/60px-UI_首页内容入口图标_9.png 2x"
                            data-file-width="70" data-file-height="70">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="BOX-1-1" style="margin-top: 10px;">
        <div class="BOX-title-1">打发时间</div>
        <div class="BOX-N" style="">
            <div class="BOX-AN-25" style="float:left;position:relative;height:30px;margin:5px 0px">
                <router-link :to="{ name: 'sl' }" title="扫雷"><span class="BOX-AN2">扫雷</span></router-link>
                <div style="position: absolute;top: 0px;left:0px;">
                    <router-link :to="{ name: 'sl' }" title="扫雷">
                        <img alt="UI 首页内容入口图标 9.png"
                            src="/img/1x/30px-UI_首页内容入口图标_9.png"
                            decoding="async" loading="lazy" width="30" height="30"
                            srcset="/img/1.5x/45px-UI_首页内容入口图标_9.png 1.5x, /img/2x/60px-UI_首页内容入口图标_9.png 2x"
                            data-file-width="70" data-file-height="70">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>