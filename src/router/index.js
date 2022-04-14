import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
    /*
    createWebHistory : demande une configuration du serveur
    createWebHashHistory : ajoute un # dans l'url
    Pour la config du serveur  :
    https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode
     */
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const is_authenticated = true; // information à récupérer via service, store...
    const authorized_routes = ['login', 'home'];
    if(to.meta.mustBeAdmin) {
        console.log('Route bloquée : doit être admin')
    }
    if( !authorized_routes.includes(to.name) && !is_authenticated ) {
        next({name: 'login'})
    } else next();
})

export default router;