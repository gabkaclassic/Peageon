import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/js_part/pages/NotFoundPage.vue";
import GitoadPage from "@/js_part/pages/GitoadPage.vue";
import MainPage from "@/js_part/pages/MainPage.vue";
export default createRouter({
    mode: history,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
            alias: '/home'
        },
        {
            path: '/gitoad',
            component: GitoadPage,
            alias: '/gitoad'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
            alias: '/notFound'
        },
    ]
})