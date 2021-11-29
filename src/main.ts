import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./index.css";
import Frank from './components/frank.vue'
import Frank2 from './components/frank2.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Frank }, { path: '/xxx', component: Frank2 }
    ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");
