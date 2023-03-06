import {createRouter, createWebHistory} from "vue-router";
import  HomePage from '../pages/components/HomePage.vue'
export default createRouter({
    mode: history,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
    ]
})