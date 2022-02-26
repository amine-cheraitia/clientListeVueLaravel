require("./bootstrap");

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import router from "./router/index.js";
import CustomerIndex from "./components/CustomerIndex.vue";

const app = createApp({
    components: { CustomerIndex },
});

app.use(router);

app.mount("#app");
