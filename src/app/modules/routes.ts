import { ROUTES } from "../../constants/routes";
import { Routes } from "../../types";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login/loadable";


const routes: Routes = [
    {
        key: ROUTES.LOGIN.key,
        name: ROUTES.LOGIN.name,
        path: ROUTES.LOGIN.path,
        exact: ROUTES.LOGIN.exact,
        isPrivate: ROUTES.LOGIN.isPrivate,
        component: Login
    },
    {
        key: ROUTES.DASHBOARD.key,
        name: ROUTES.DASHBOARD.name,
        path: ROUTES.DASHBOARD.path,
        exact: ROUTES.DASHBOARD.exact,
        isPrivate: ROUTES.DASHBOARD.isPrivate,
        component: Dashboard
    }
]

export default routes;