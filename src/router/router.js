import {createRouter, createWebHistory} from "vue-router";
import  MainPage from '../js_part/pages/MainPage.vue'
import NotFoundPage from "@/js_part/pages/NotFoundPage.vue";
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
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
            alias: '/notFound'
        }
    ]
})