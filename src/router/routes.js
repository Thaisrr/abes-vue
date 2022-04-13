import Presentation from "@/pages/Presentation";
import NotFound from "@/pages/NotFound";
import DataBinding from "@/pages/DataBinding";
import Parent from "@/pages/Parent";
import Form from "@/pages/Form";
import ParentForm from "@/pages/ParentForm";

const routes = [
    {path: '/presentation', name: 'presentation', component: Presentation},
    {path: '/data-binding', name: 'binding', component: DataBinding},
    {path: '/communication', name: 'com', component: Parent},
    {path: '/form', name: 'form', component: Form},
    {path: '/parent-form', name: 'parent-form', component: ParentForm},
    {path: '/', redirect: '/presentation'},
    {path: '/:pathMatch(.*)*', name: '404', component: NotFound}
]

export default routes;