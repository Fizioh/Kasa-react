import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/LOGO.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className='div_logo'>
                <img src={logo} alt="Logo" />
            </div>
            <nav className='nav'>
                <ul>
                    <li className='link_accueil'>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
                    </li>
                    <li className='link_apropos'>
                        <NavLink to="/apropos" end className={({ isActive }) => isActive ? 'active' : ''}>A Propos</NavLink>
                    </li>
                </ul>
            </nav>


        </header>
    )
}

export default Header;