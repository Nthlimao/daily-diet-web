import React from 'react';
import { useHistory  } from 'react-router-dom';
import auth from '../../auth';

const Dashboard = () => {
    const history = useHistory();

    return (
        <div className="container">
            <h3>Dashboard</h3>
            <button 
                onClick={() => {
                    auth.clean();
                    history.push("/login");
                }}
            >Sair</button>
    </div>
  );
}

export default Dashboard;