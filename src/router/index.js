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

export default router;