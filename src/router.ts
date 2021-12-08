import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Docs from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStart.vue'
import Install from './views/Install.vue'
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Docs, children: [
                { path: "", component: SwitchDemo },
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        },
    ]
});