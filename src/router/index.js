import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../views/homE.vue'
import About from '../views/AbouT.vue'
import Services from '../views/ServiceS.vue'
import Contact from '../views/ContacT.vue'
Vue.use(VueRouter);
const routes=[
    {
        path: "/",
        name: "Home",
        component: Home ,
    },
    {
        path:"/about",
        name:"AbouT",
        component: About,
    },
    {
        path:"/services",
        name:"ServiceS",
        component: Services,
    },
    {
        path:"/contact",
        name:"ContacT",
        component: Contact,
    },
]
export default routes