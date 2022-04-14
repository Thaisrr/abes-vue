import Presentation from "@/pages/Presentation";
import NotFound from "@/pages/NotFound";
import DataBinding from "@/pages/DataBinding";
import Parent from "@/pages/Parent";
import Form from "@/pages/Form";
import ParentForm from "@/pages/ParentForm";
import Data from "@/pages/Data";
import Store from "@/pages/Store";

const routes = [
    {path: '/presentation', name: 'presentation', component: Presentation},
    {path: '/data-binding', name: 'binding', component: DataBinding},
    {path: '/communication', name: 'com', component: Parent},
    {path: '/form', name: 'form', component: Form},
    {path: '/parent-form', name: 'parent-form', component: ParentForm},
    {
        path: '/data',
        name: 'data',
        component: Data,
        meta: {mustBeAdmin: true}
    },
    {
        path: '/store',
        name: 'store',
        component: Store,
        beforeEnter: (to, from) => {
            console.log(`Moving from ${from.name} to ${to.name}`);
            /*
            Pour redireger : next ( comme dans beforeEach
            Pour annuler la navigation : return false
             */
        }
    },
    {path: '/', redirect: '/presentation'},
    {path: '/:pathMatch(.*)*', name: '404', component: NotFound}
]

export default routes;