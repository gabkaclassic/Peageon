import {createRouter, createWebHistory} from "vue-router";
import  HomePage from '../js_part/pages/HomePage.vue'
import LoginPage from "@/js_part/pages/LoginPage.vue";
import RegistrationPage from "@/js_part/pages/RegistrationPage.vue";
import NotFoundPage from "@/js_part/pages/NotFoundPage.vue";
export default createRouter({
    mode: history,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            alias: '/home'
        },
        {
            path: '/login',
            component: LoginPage,
            alias: '/login'
        },
        {
            path: '/registration',
            component: RegistrationPage,
            alias: '/registry'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
            alias: '/notFound'
        }
    ]
})