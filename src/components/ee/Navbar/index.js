import logo from '../../../img/brainbox.png';

import React, { useState, useEffect } from 'react';
import {LanPicker, LanSwitcher, Nav, NavImage, NavLink, NavMenu} from "./NavbarElements";

import {Link, useLocation} from "react-router-dom";

const EeNavbar = () => {
    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);

    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    // Function to generate language-specific links
    const generateLink = (lang) => {
        const curfile = pathname.split("/").pop();
        if (lang === "") {
            return `/${curfile}`;
        } else {
            return `/${lang}/${curfile}`;
        }

    };

    return (
        <div>
            <LanSwitcher>
                <LanPicker to={generateLink('')}>EST</LanPicker>
                <LanPicker to={generateLink('en')}>ENG</LanPicker>
                <LanPicker to={generateLink('ru')}>RUS</LanPicker>
            </LanSwitcher>
            <Nav>
                <Link to="/"><NavImage src={logo} alt="React" /></Link>
                <NavMenu>
                    <NavLink to="/tolkimine" activeStyle>TÕLKIMINE</NavLink>
                    <NavLink to="/tellimine" activeStyle>TÕLKE TELLIMINE</NavLink>
                    <NavLink to="/hinnakiri" activeStyle>HINNAKIRI</NavLink>
                    <NavLink to="/kontakt" activeStyle>KONTAKT</NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default EeNavbar;