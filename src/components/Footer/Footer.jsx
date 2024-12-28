import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid-lg">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <Link to="/">
                  <img src="/assets/images/logo/logo.png" alt="Logo" className="img-fluid" />
                </Link>
                <p>O melhor da gastronomia na sua casa</p>
                <div className="social-links">
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h4>Links Rápidos</h4>
                <ul>
                  <li>
                    <Link to="/about">Sobre Nós</Link>
                  </li>
                  <li>
                    <Link to="/menu-grid">Menu</Link>
                  </li>
                  <li>
                    <Link to="/restaurant-listing">Restaurantes</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contato</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-links">
                <h4>Conta</h4>
                <ul>
                  <li>
                    <Link to="/profile">Meu Perfil</Link>
                  </li>
                  <li>
                    <Link to="/my-order">Meus Pedidos</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Lista de Desejos</Link>
                  </li>
                  <li>
                    <Link to="/saved-address">Endereços Salvos</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h4>Contato</h4>
                <ul>
                  <li>
                    <i className="ri-map-pin-line"></i>
                    <span>Rua Exemplo, 123 - São Paulo, SP</span>
                  </li>
                  <li>
                    <i className="ri-phone-line"></i>
                    <a href="tel:+551199999999">(11) 9999-9999</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:contato@gastrolink.com">contato@gastrolink.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 GastroLink. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
