import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/js_part/view/pages/NotFoundPage.vue";
import GitoadPage from "@/js_part/view/pages/GitoadPage.vue";
import MainPage from "@/js_part/view/pages/MainPage.vue";
import RepositoryPage from "@/js_part/view/pages/RepositoryPage.vue";
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
          path: '/gitoad/:repo',
          component: RepositoryPage,
          alias: '/:repo'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
            alias: '/notFound'
        },
    ]
})