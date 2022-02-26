import { createRouter, createWebHistory } from "vue-router";
import CustomerIndex from "../components/CustomerIndex.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/dashboard",
            name: "customors.index",
            component: CustomerIndex,
        },
    ],
});

export default router;
