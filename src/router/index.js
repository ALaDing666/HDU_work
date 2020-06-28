import Vue from 'vue'
import VueRouter from 'vue-router'
// import Notify from '@/views/students/notify/Notify.vue'

const Notify = () =>
    import ('@/views/students/notify/Notify.vue')
const Employment = () =>
    import ('@/views/students/employment/Employment.vue')
const Employ = () =>
    import ('@/views/students/employment/Employ.vue')

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
    },
    {
        path: '/employ',
        name: 'Employ',
        component: Employ
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router