import {createRouter, createWebHistory} from "vue-router";
import  HomePage from '../pages/components/HomePage.vue'
import LoginPage from "@/pages/components/LoginPage.vue";
import RegistrationPage from "@/pages/components/RegistrationPage.vue";
import NotFoundPage from "@/pages/components/NotFoundPage.vue";
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