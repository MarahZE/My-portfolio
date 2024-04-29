import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link as AnchorLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src= {logo} alt= ""/>
        <ul className="nav-menu">
            <li> <AnchorLink to="Header">Home </AnchorLink></li>
            <li> <AnchorLink to="About">About me </AnchorLink></li>
            <li> <AnchorLink to="Projects">Porjects </AnchorLink></li>
            <li> <AnchorLink to="Contact">Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar