import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './pages/Index.vue'
import Detail from './pages/Detail.vue'
import Laohen from './pages/Laohen.vue'
import LaohenSkill from './pages/LaohenSkill.vue'
import LaohenDetaill from './pages/LaohenDetaill.vue'
import LaohenSkillDetaill from './pages/LaohenSkillDetaill.vue'
import ThirdPage from './pages/ThirdPage.vue'
import SaoLei from './pages/games/SaoLei.vue'
import WZQ from './pages/games/WuZiQi.vue'

const routes = [
    { path: '/', name: 'index', component: Index, alias: '/index' },
    { path: '/detail/:name', name: 'detail', component: Detail, alias: ['/:name'] },
    { path: '/laohen', name: 'laohen', component: Laohen },
    { path: '/laohen-skill', name: 'laohen_skill', component: LaohenSkill },
    { path: '/laohen/:name', name: 'laohen_detail', component: LaohenDetaill },
    { path: '/laohen-skill/:name', name: 'laohen_skill_detail', component: LaohenSkillDetaill },
    { path: '/lthird_page', name: 'third_page', component: ThirdPage },
    { path: '/game/sl', name: 'sl', component: SaoLei },
    { path: '/game/wzq', name: 'wzq', component: WZQ }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;