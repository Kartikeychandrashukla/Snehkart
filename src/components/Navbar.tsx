import React from 'react';
import logo from '../assets/snehkartlogo.jpeg';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <div className="logoIcon">
            <img src={logo} alt="Snekart logo" className="logoImg" />
          </div>
        </div>

        <ul className="navLinks">
          <li><a href="#home" className="navLink">Home</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfrB80mrCxmtaNI-jQrslwKOoN8UL24ElseG8oERA7bbILh_w/viewform" className="navLink">Contact Us</a></li>
          <li><a href="#services" className="navLink">Services</a></li>
        </ul>
      </nav>
      <div className="divider" />
    </header>
  );
};

export default Navbar;
