import { createRouter, createWebHistory } from "vue-router";
import CustomerIndex from "../components/CustomerIndex.vue";
import CustomerCreate from "../components/CustomerCreate.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/dashboard",
            name: "customers.index",
            component: CustomerIndex,
        },
        {
            path: "/customers/create",
            name: "customers.create",
            component: CustomerCreate,
        },
    ],
});

export default router;
