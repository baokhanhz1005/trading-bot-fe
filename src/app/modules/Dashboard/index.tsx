
import { useEffect } from "react";
import { DashBoardModule } from "./styled";
import { DashboardProps } from "./type";
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import routes from "./routes";

export const Dashboard: React.FC<DashboardProps> = props => {

    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    return <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />
                })}
            </Switch>
            <Redirect to={'/1200001/general'} />

        </Router>
    );
}

