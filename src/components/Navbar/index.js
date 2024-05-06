import logo from '../../img/brainbox.png';

import React from "react";
import { Nav, NavLink, NavMenu, NavImage } from "./NavbarElements";
import "./style.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Link to="/"><NavImage src={logo} alt="React"/></Link>
                <NavMenu>
                    <NavLink to="/tolkimine" activeStyle>TÕLKIMINE</NavLink>
                    <NavLink to="/tellimine" activeStyle>TÕLKE TELLIMINE</NavLink>
                    <NavLink to="/hinnakiri" activeStyle>HINNAKIRI</NavLink>
                    <NavLink to="/kontakt" activeStyle>KONTAKT</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar