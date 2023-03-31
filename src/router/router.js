import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/js_part/pages/NotFoundPage.vue";
import FunctionalPage from "@/js_part/pages/FunctionalPage.vue";
export default createRouter({
    mode: history,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: FunctionalPage,
            alias: '/home'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
            alias: '/notFound'
        },
    ]
})