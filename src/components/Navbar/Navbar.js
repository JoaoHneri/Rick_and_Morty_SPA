import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
import Logo from '../../imagens/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscListFilter} from 'react-icons/vsc'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3">
          <img src={Logo} className="img" alt="Logo"/>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"><GiHamburgerMenu/></span>
          <span class="fas fa-times close text-dark"><VscListFilter/></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Personagens
            </NavLink>
            <NavLink to="/favorites" className="nav-link">
              Favoritos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;