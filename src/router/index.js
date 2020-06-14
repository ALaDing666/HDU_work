import Vue from 'vue'
import VueRouter from 'vue-router'
// import Notify from '@/views/students/notify/Notify.vue'

const Notify = () =>
    import ('@/views/students/notify/Notify.vue')
const Employment = () =>
    import ('@/views/students/employment/Employment.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/employment'
    },
    {
        path: '/notify',
        name: 'Notify',
        component: Notify
    },
    {
        path: '/employment',
        name: 'Employment',
        component: Employment
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router