import { createApp } from 'vue'
import VueScrollTo from 'vue-scrollto'
//import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import router from './router.ts'
import utoolsUtil from './js/utoolsUtil'
import './js/extraCommon.ts'
const app = createApp(App)
//app.use(createPinia())
app.use(router)
app.use(VueScrollTo)

app.directive('tooltip', {
    beforeMount(el, binding) {
        // 创建提示框元素
        const tooltip = document.createElement('div');
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'black';
        tooltip.style.color = 'white';
        tooltip.style.borderRadius = '4px';
        tooltip.style.padding = '5px';
        tooltip.style.display = 'none';

        const tipsTitle = document.createElement('h4');
        tipsTitle.style.textAlign = 'center'
        tipsTitle.textContent = '公式';
        const tipsBody = document.createElement('p');
        tipsBody.textContent = binding.value;
        tooltip.appendChild(tipsTitle)
        tooltip.appendChild(tipsBody)

        // 将提示框添加到body中
        document.body.appendChild(tooltip);

        // 绑定鼠标事件来控制提示框的显示
        el.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
            tooltip.style.top = `${el.getBoundingClientRect().top + window.scrollY}px`;
            tooltip.style.left = `${el.getBoundingClientRect().left + el.offsetWidth + 10}px`;
        });

        el.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        // 保存提示框，以便在组件销毁时删除
        el._tooltip = tooltip;
    },
    unmounted(el) {
        // 移除提示框
        document.body.removeChild(el._tooltip);
    }
});

app.mount('#app')
utoolsUtil.init(router)