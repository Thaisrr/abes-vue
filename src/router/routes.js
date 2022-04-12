import Presentation from "@/pages/Presentation";
import NotFound from "@/pages/NotFound";

const routes = [
    {path: '/presentation', name: 'presentation', component: Presentation},
    {path: '/', redirect: '/presentation'},
    {path: '*', name: '404', component: NotFound}
]

export default routes;