import React from 'react';
import DashboardRoutes from '../../routes/dashboard.route';
import { useRouteMatch } from 'react-router-dom';
import { Sidebar } from '../../components';
// import auth from '../../auth';

const Dashboard = () => {
    // const history = useHistory();
    const match = useRouteMatch();

    return (
        <div className="container">
            <Sidebar/>            
            <DashboardRoutes match={match} />
        </div>
  );
}

export default Dashboard;