import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../img/Logo.png";
import { InputSearch } from "./inputs/InputSearch";
import {BtnCase} from "./buttons/BtnCase"

export default function Header() {
	return (
		<header className="">
			<div className="header">
				<div className="logoContainer">
					<img src={Logo} alt="" className="logo" />
					<h1 className="title">Organick</h1>
				</div>
				<ul className="navLinks">
					<NavLink to={""} className="navLink">
						<p>Home</p>
					</NavLink>
					<NavLink to={""} className="navLink">
						<p>About</p>
					</NavLink>
					<NavLink to={""} className="navLink">
						<p>Pages</p>
					</NavLink>
					<NavLink to={""} className="navLink">
						<p>Shop</p>
					</NavLink>
					<NavLink to={""} className="navLink">
						<p>Projects</p>
					</NavLink>
					<NavLink to={""} className="navLink">
						<p>News</p>
					</NavLink>
				</ul>
				<div className="">
					<InputSearch />
					<BtnCase />
				</div>
			</div>
		</header>
	);
}
