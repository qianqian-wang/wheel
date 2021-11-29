import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./index.scss";
import Home from './views/Home.vue'
import Docs from './views/Doc.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home }, { path: '/doc', component: Docs },

    ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");
