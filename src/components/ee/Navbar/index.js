import logo from '../../../img/brainbox.png';
import EE from '../../../img/ee.png';
import EN from '../../../img/en.png';
import RU from '../../../img/ru.png';

import React, { useState, useEffect } from 'react';
import {LanImage, LanSwitcher, Nav, NavImage, NavLink, NavMenu} from "./NavbarElements";
import "./style.css"
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
        <>
            <LanSwitcher>
                <Link to={generateLink('')}><LanImage src={EE} alt="EE" /></Link>
                <Link to={generateLink('en')}><LanImage src={EN} alt="EN" /></Link>
                <Link to={generateLink('ru')}><LanImage src={RU} alt="RU" /></Link>
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
        </>
    );
};

export default EeNavbar;