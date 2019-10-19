import React from 'react';
import './styles.css';

const Toolbar = () => (
    <div className="toolbar">
        <div className="external-links">
            <a href="https://github.com/NthlLima" target="_blank" rel="noopener noreferrer" id="github" className="transition"><i className="fab fa-github"></i></a>
        </div>
        <div className="download-links">
            <a href="https://github.com/NthlLima" className="transition">Download Android</a>
        </div>
    </div>
);

export default Toolbar;