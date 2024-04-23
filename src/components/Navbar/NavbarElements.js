// Filename - ./components/Navbar.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    color: #6e5f70;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-bottom-color: #6e5f70;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    white-space: nowrap;
    color: #6e5f70;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    position: relative;
    transition: color 0.3s ease;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: #6e5f70;
    padding: 5px 10px;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavImage = styled.img`
    height: 10vmin;
    pointer-events: none;
`;

export const NavMenu = styled.div`
    white-space: nowrap;
    color: #6e5f70;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    position: relative;
    transition: color 0.3s ease;
    padding: 5px 10px;
`;