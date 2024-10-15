import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './pages/Index.vue'
import Detail from './pages/Detail.vue'
import Laohen from './pages/Laohen.vue'
import LaohenSkill from './pages/LaohenSkill.vue'
import LaohenDetaill from './pages/LaohenDetaill.vue'
import LaohenSkillDetaill from './pages/LaohenSkillDetaill.vue'
import ThirdPage from './pages/ThirdPage.vue'

const routes = [
    { path: '/', name: 'index', component: Index, alias: '/index' },
    { path: '/detail/:name', name: 'detail', component: Detail, alias: ['/:name'] },
    { path: '/laohen', name: 'laohen', component: Laohen },
    { path: '/laohen-skill', name: 'laohen_skill', component: LaohenSkill },
    { path: '/laohen/:name', name: 'laohen_detail', component: LaohenDetaill },
    { path: '/laohen-skill/:name', name: 'laohen_skill_detail', component: LaohenSkillDetaill },
    { path: '/lthird_page', name: 'third_page', component: ThirdPage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;