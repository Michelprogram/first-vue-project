import ComposterList from "@/components/ComposterList.vue"
import AboutPage from "@/components/AboutPage.vue"
import HomePage from "@/components/HomePage.vue"
import ComposterDetailPage from "@/components/ComposterDetailPage.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path : "/composters",
        name: "ComposterList",
        component : ComposterList
    },
    {
        path : "/about",
        name: "About",
        component : AboutPage
    },
    {
        path : "/",
        name: "Home",
        component : HomePage
    },
    {
        path: '/composter-detail/:id',
        name: "ComposterDetail",
        props: true,
        component: ComposterDetailPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router