import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container-fluid-lg">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo/logo.png" alt="Logo" className="img-fluid" />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-line"></i>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu-grid">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurant-listing">Restaurantes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contato</Link>
              </li>
            </ul>

            <div className="header-options">
              <Link to="/wishlist" className="header-option">
                <i className="ri-heart-line"></i>
                <span className="badge">0</span>
              </Link>

              <Link to="/cart" className="header-option">
                <i className="ri-shopping-cart-line"></i>
                <span className="badge">0</span>
              </Link>

              <Link to="/signin" className="btn btn-outline">
                <i className="ri-user-line"></i>
                <span>Entrar</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
