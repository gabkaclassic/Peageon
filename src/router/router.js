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
            component: HomePage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/registration',
            component: RegistrationPage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }
    ]
})