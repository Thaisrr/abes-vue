import Presentation from "@/pages/Presentation";
import NotFound from "@/pages/NotFound";
import DataBinding from "@/pages/DataBinding";
import Parent from "@/pages/Parent";

const routes = [
    {path: '/presentation', name: 'presentation', component: Presentation},
    {path: '/data-binding', name: 'binding', component: DataBinding},
    {path: '/communication', name: 'com', component: Parent},
    {path: '/', redirect: '/presentation'},
    {path: '/:pathMatch(.*)*', name: '404', component: NotFound}
]

export default routes;