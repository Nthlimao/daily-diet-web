import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import './styles.css';

const Sidebar = () => { 
    const location = useLocation();
    const pathname = location.pathname;    

    const links = [
        { to: '/dashboard', className: pathname === '/dashboard' ? 'menu-link active' : 'menu-link', icon: 'home minus-2-left' },
        { to: '/dashboard/atualizar-peso', className: pathname === '/dashboard/atualizar-peso' ? 'menu-link active' : 'menu-link', icon: 'weight'},
        { to: '/dashboard/atualizar-altura', className: pathname === '/dashboard/atualizar-altura' ? 'menu-link active' : 'menu-link', icon: 'ruler-vertical'},
    ];
    
    return (
    <div className="sidebar">
        <div className="sidebar-menu">
            {links.map((link, index) => (
                <Link to={link.to} className={link.className} key={index}><i className={'fas fa-' + link.icon}></i></Link>
            ))}
            <a href="//link-qualquer.com.br" className="menu-link"><i className="fas fa-utensils"></i></a>
        </div>
    </div>
    );
};

export default Sidebar;