import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import DealerOperations from '../views/DealerOperations';
import Login from '../views/Login';
import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login}> </Route>
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="dealeroperations" component={DealerOperations}> </Route>
        </Route>
    </Router>
);