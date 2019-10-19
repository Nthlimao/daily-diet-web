import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from './protected.route'

import Weight from '../pages/weight';
import Height from '../pages/height';

const DashboardRoutes = ({ match }) => (
    <Switch>
        <ProtectedRoute path={`${match.path}/atualizar-peso`}>
            <Weight/>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/atualizar-altura`}>
            <Height/>
        </ProtectedRoute>
    </Switch>
);

export default DashboardRoutes;