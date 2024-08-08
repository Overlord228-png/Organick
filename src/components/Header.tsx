import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../img/Logo.png";
import { InputSearch } from "./inputs/InputSearch";
import BtnCase from "./buttons/BtnCase"

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header_block">
				<div className="header_block-left">
					<div className="logoContainer">
						<img src={Logo} alt="" className="logo" />
						<h1 className="title">Organick</h1>
					</div>
					<ul className="navLinks">
						<NavLink to={""} className="navLink">
							Home
						</NavLink>
						<NavLink to={"/About"} className="navLink">
							About
						</NavLink>
						<NavLink to={"/Pages"} className="navLink">
							Pages
						</NavLink>
						<NavLink to={"/Shop"} className="navLink">
							Shop
						</NavLink>
						<NavLink to={"/Projects"} className="navLink">
							Projects
						</NavLink>
						<NavLink to={"/News"} className="navLink">
							News
						</NavLink>
					</ul>
				</div>
				<div className="header_block-right">
					<InputSearch />
					<BtnCase count={0}/>
				</div>
			</div>
		</header>
	);
}
export default Header;