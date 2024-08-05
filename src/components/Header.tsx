import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="">
                <div className="">
                    <img src="" alt="" />
                    <h1>Organick</h1>
                </div>
                <ul>
                    <NavLink to={''}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={''}>
                        <p>About</p>
                    </NavLink>
                    <NavLink to={''}>
                        <p>Pages</p>
                    </NavLink>
                    <NavLink to={''}>
                        <p>Shop</p>
                    </NavLink>
                    <NavLink to={''}>
                        <p>Projects</p>
                    </NavLink>
                    <NavLink to={''}>
                        <p>News</p>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}
