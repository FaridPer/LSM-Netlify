// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-navbar">
      <div className="container">
        <a className="navbar-brand" href='/'><img src='/logo2.svg' alt="logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href='/'>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/juegos'>Juegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/recursos'>Recursos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
