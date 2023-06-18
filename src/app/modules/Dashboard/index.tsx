import React from "react";
import { DashboardProps } from "./type";
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import routes from "./routes";
import { createStructuredSelector } from "reselect";
import { makeSelectUserAccount } from "../Login/selector";
import { ConnectedProps, connect } from "react-redux";
import { getLinkFromKey } from "utils/common";
import { ROUTES } from "constants/routes";

type PropsTypeRedux = ConnectedProps<typeof withConnect>;
type TDashboardCombineRedux = DashboardProps & PropsTypeRedux;

const Dashboard: React.FC<TDashboardCombineRedux> = props => {
    const { userInfo } = props;
    console.log('will handle', props)
    const userId = userInfo.userId || '';

    const url = getLinkFromKey(ROUTES.GENERAL.key, { userId }) || '';
    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    return <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                })}
                <Redirect to={'/1200002/general' || url} />
            </Switch>
        </Router>
    );
}
    
const mapStateToProps = createStructuredSelector({
    userInfo: makeSelectUserAccount(),
});

const withConnect = connect(
    mapStateToProps,
    null,
)

export default withConnect(Dashboard);

