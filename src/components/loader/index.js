import React from 'react';
import './styles.css';

const Loader = ({ active = false }) => (
    <div className={active ? "loader-wrap active": "loader-wrap"}>
        <div className="loader-icon">
            <img src="images/loader.svg" />
        </div>
    </div>
);

export default Loader;