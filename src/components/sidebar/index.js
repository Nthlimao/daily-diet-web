import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import './styles.css';

const Sidebar = () => { 
    const location = useLocation();
    const pathname = location.pathname;    

    const setClassName = (path) => (path === pathname) ? 'menu-link active' : 'menu-link';

    const links = [
        { to: '/dashboard', className: setClassName('/dashboard'), icon: 'home minus-2-left' },
        { to: '/dashboard/adicionar-refeicao', className: setClassName('/dashboard/adicionar-refeicao'), icon: 'utensils'},
        { to: '/dashboard/atualizar-peso', className: setClassName('/dashboard/atualizar-peso'), icon: 'weight'},
        { to: '/dashboard/atualizar-altura', className: setClassName('/dashboard/atualizar-altura'), icon: 'ruler-vertical'},
    ];
    
    return (
    <div className="sidebar">
        <div className="sidebar-menu">
            {links.map((link, index) => (
                <Link to={link.to} className={link.className} key={index}><i className={'fas fa-' + link.icon}></i></Link>
            ))}
        </div>
    </div>
    );
};

export default Sidebar;