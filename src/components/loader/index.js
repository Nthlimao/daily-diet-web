import React from 'react';
import './styles.css';

const Loader = ({ active = false }) => (
    <div className={active ? "loader-wrap active": "loader-wrap"}>
        <div className="loader-icon">
            <img alt="carregando..." src="http://localhost:3000/images/loader.svg" />
        </div>
    </div>
);

export default Loader;