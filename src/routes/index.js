import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './protected.route'
import { AuthenticatedRoute } from './authenticated.route';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <AuthenticatedRoute exact path="/login" component={Login}/>
            <AuthenticatedRoute exact path="/register" component={Register}/>
            <ProtectedRoute path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;