import React from 'react';
import './styles.css';

const Toolbar = () => (
    <div className="toolbar">
        <div className="external-links">
            <a href="https://dribbble.com/shots/2498203-Freelo-WP-Creative-WordPress-Portfolio-Theme" target="_blank" rel="noopener noreferrer" id="github" className="transition"><i className="fab fa-github"></i></a>
        </div>
        <div className="download-links">
            <a href="https://dribbble.com/shots/2498203-Freelo-WP-Creative-WordPress-Portfolio-Theme" className="transition">Download Android</a>
        </div>
    </div>
);

export default Toolbar;