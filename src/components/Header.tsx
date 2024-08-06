import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./../img/Logo.png"

export default function Header() {
    return (
        <header className='header'>
            <div className='logoContainer'>
                <img src={Logo} alt="Logo" className='logo'/>
                <h1 className='title'>Organick</h1>
            </div>
            <ul className='navLinks'>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>About</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>Pages</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>Shop</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>Projects</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} className='navLink'>
                        <p>News</p>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
