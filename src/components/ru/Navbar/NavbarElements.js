import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    color: #6a586e;
    padding: 0 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-bottom-color: #6a586e;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    white-space: nowrap;
    color: #6a586e;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    position: relative;
    transition: color 0.3s ease;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: #6a586e;
    padding: 5px 10px;
`;

export const NavImage = styled.img`
    height: 10vmin;
    pointer-events: none;
`;
export const LanImage = styled.img`
    height: 3vmin;
    pointer-events: none;
`;

export const NavMenu = styled.div`
    white-space: nowrap;
    color: #6a586e;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    position: relative;
    transition: color 0.3s ease;
    padding: 5px 10px;
`;
export const LanSwitcher = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px 5px 0;
`;