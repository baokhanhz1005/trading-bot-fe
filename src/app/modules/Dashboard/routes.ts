import { ROUTES } from "../../../constants/routes";
import { Routes } from "../../../types";
import { General } from "./containers/General";



const routes: Routes = [
    {
        key: ROUTES.GENERAL.key,
        name: ROUTES.GENERAL.name,
        exact: ROUTES.GENERAL.exact,
        path: ROUTES.GENERAL.path,
        component: General,
    }
]

export default routes;