import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/js_part/web/view/pages/NotFoundPage.vue";
import GitoadPage from "@/js_part/web/view/pages/gitoad/GitoadPage.vue";
import MainPage from "@/js_part/web/view/pages/MainPage.vue";
import RepositoryPage from "@/js_part/web/view/pages/gitoad/RepositoryPage.vue";
export default createRouter({
    mode: history,
    history: createWebHistory(),
    // base: 'https://spoad-cb286.web.app',
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