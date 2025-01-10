import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './Home.css';

const Home = () => {
  return (
    <div className="dark-theme">
      {/* Header */}
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="logo-container">
              <Link to="/" className="logo">
                ZOMO.
              </Link>
              <button className="location-btn">
                <i className="ri-map-pin-line"></i> Location
              </button>
            </div>
            
            <div className="nav-links">
              <Link to="/" className="active">Home</Link>
              <Link to="/order">Order</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="nav-right">
              <div className="cart-icon">
                <Link to="/cart">
                  <i className="ri-shopping-cart-line"></i>
                  <span className="cart-count">5</span>
                </Link>
              </div>
              <div className="user-profile">
                <img src="assets/images/icons/p5.png" alt="profile" />
                <div className="user-info">
                  <span>Hi, Mark Jecno</span>
                  <Link to="/account">My Account</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Discover restaurants that food deliver near you</h1>
            <div className="search-box">
              <div className="search-input">
                <i className="ri-search-line"></i>
                <input type="text" placeholder="Search for Restaurant" />
              </div>
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="hero-illustration">
            <img src="assets/images/delivery-guy.png" alt="Delivery" className="delivery-guy" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            <div className="category-item">
              <img src="assets/images/categories/salad.png" alt="Salad" />
              <span>Salad</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/biryani.png" alt="Biryani" />
              <span>Biryani</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/pizza.png" alt="Pizza" />
              <span>Pizza</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/chicken.png" alt="Chicken" />
              <span>Chicken</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/burger.png" alt="Burger" />
              <span>Burger</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/fries.png" alt="Fries" />
              <span>Fries</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/boritto.png" alt="Boritto" />
              <span>Boritto</span>
            </div>
            <div className="category-item">
              <img src="assets/images/categories/taco.png" alt="Taco" />
              <span>Taco</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
