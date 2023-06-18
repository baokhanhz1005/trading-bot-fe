// Libraries
import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, useLocation } from 'react-router-dom';
import routes from './routes';
import { GlobalStyle } from '../styles/global-styles';

export function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    const { key, component, path, isPrivate, exact } = route;

                    if (false) { // handle private 
                        return <></>
                    }
                    return <Route key={path} path={path} exact={exact} component={component} />
                })}
                <Redirect to={'/'} />
            </Switch>
            <GlobalStyle />
        </Router>
    )
}
