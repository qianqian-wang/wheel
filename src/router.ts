import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Docs from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Docs, children: [
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: SwitchDemo },
                { path: 'switch', component: SwitchDemo },
            ]
        },

    ]
});