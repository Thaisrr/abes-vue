import Presentation from "@/pages/Presentation";
import NotFound from "@/pages/NotFound";
import DataBinding from "@/pages/DataBinding";

const routes = [
    {path: '/presentation', name: 'presentation', component: Presentation},
    {path: '/data-binding', name: 'binding', component: DataBinding},
    {path: '/', redirect: '/presentation'},
    {path: '/:pathMatch(.*)*', name: '404', component: NotFound}
]

export default routes;