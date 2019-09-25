import React from "react";
import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"
                className="nav-link"
              >
                Velkommen
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to="/verdensballetten"
                className="nav-link"
              >
                Verdensballetten
              </NavLink>
            </li>
            <li className="nav-item text-nowrap">
              <NavLink to="/events"
                className="nav-link"
              
              >
                Events og mødefaciliteter
              </NavLink>
          
            </li>
            <li className="nav-item text-nowrap">
              <NavLink to="/gæster" className="nav-link">
                Hvad siger vores gæster
              </NavLink>
            </li>
            <li className="nav-item text-nowrap">
              <NavLink to="/om"
                className="nav-link"
                
              >
                Om Møllerup Gods
              </NavLink>
              
            </li>
            <li className="nav-item text-nowrap">
              <NavLink to="/kontakt" className="nav-link">
                Kontakt os
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/webshop" className="nav-link">
                Webshop
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
