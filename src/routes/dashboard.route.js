import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from './protected.route'

import Weight from '../pages/weight';
import Height from '../pages/height';
import Meal from '../pages/meal';

const DashboardRoutes = ({ match }) => (
    <Switch>
        <ProtectedRoute path={`${match.path}/atualizar-peso`}>
            <Weight/>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/atualizar-altura`}>
            <Height/>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/adicionar-refeicao`}>
            <Meal/>
        </ProtectedRoute>
    </Switch>
);

export default DashboardRoutes;