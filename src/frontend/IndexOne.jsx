import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const IndexOne = () => {
  return (
    <>
       
        <body className="position-relative">
        <div className="skeleton-loader">
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg p-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#offcanvasNavbar">
                            <span className="navbar-toggler-icon">
                                <i className="ri-menu-line"></i>
                            </span>
                        </button>
                        <a href="index.html">
                            <img className="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo"/>
                        </a>
                        <a target="_blank" href="#!" data-bs-toggle="modal" data-bs-target="#location"
                            className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1">
                            <i className="ri-map-pin-line"></i> Localização
                        </a>
                        <div className="nav-option order-md-2">
                            <div className="dropdown-button">
                                <div className="cart-button">
                                    <span>5</span>
                                    <i className="ri-shopping-cart-line text-white cart-bag"></i>
                                </div>
                            </div>
                            <div className="profile-part dropdown-button order-md-2">
                                <img className="img-fluid profile-pic" src="/src/assets/images/icons/p5.png" alt="profile"/>
                                <div>
                                    <h6 className="fw-normal">Olá, João</h6>
                                    <h5 className="fw-medium">Minha Conta</h5>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSkeleton">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasSkeletonLabel">
                                    Menu
                                </h5>
                                <button className="navbar-toggler btn-close" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#offcanvasSkeleton" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#!" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#!" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Pedidos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contato</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="home-wrapper section-b-space">
                <div className="container text-center">
                    <div className="loader-gif">
                        <img src="/src/assets/images/gif/food.gif" alt="food-gif" className="img-fluid"/>
                    </div>
                    <h2>Procurando restaurantes na sua área...</h2>
                </div>
            </section>
            <section className="categories-section section-b-space">
                <div className="container">
                    <div className="title placeholder-glow">
                        <span className="placeholder col-md-2 col-5"></span>
                        <p className="placeholder col-5 w-50"></p>
                    </div>
                    <div className="theme-arrow">
                        <div className="swiper categories-slider categories-style">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide placeholder-glow">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner-section section-b-space">
                <div className="container">
                    <div className="title placeholder-glow">
                        <span className="placeholder col-md-2 col-5"></span>
                        <p className="placeholder col-5 w-50"></p>
                    </div>
                    <div className="position-relative">
                        <div className="swiper banner1-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide placeholder-glow">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg p-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#offcanvasNavbar">
                        <span className="navbar-toggler-icon">
                            <i className="ri-menu-line"></i>
                        </span>
                    </button>
                    <a href="index.html">
                        <img className="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo"/>
                    </a>
                    <a target="_blank" href="#!" data-bs-toggle="modal" data-bs-target="#location"
                        className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1">
                        <i className="ri-map-pin-line"></i> Localização
                    </a>
                    <div className="nav-option order-md-2">
                        <div className="dropdown-button">
                            <div className="cart-button">
                                <span>5</span>
                                <i className="ri-shopping-cart-line text-white cart-bag"></i>
                            </div>
                            <div className="onhover-box">
                                <ul className="cart-list">
                                    <li className="product-box-contain">
                                        <div className="drop-cart">
                                            <a href="#!" className="drop-image">
                                                <img src="/src/assets/images/product/vp-3.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
                                            <div className="drop-contain">
                                                <a href="#!">
                                                    <h5>Egg Sandwich</h5>
                                                </a>
                                                <h6><span>1 x </span> $80.58</h6>
                                                <button className="close-button close_button">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-box-contain">
                                        <div className="drop-cart">
                                            <a href="#!" className="drop-image">
                                                <img src="/src/assets/images/product/vp-2.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
                                            <div className="drop-contain">
                                                <a href="#!">
                                                    <h5>Grilled Chicken Quesadilla</h5>
                                                </a>
                                                <h6><span>1 x </span> $25.64</h6>
                                                <button className="close-button close_button">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-box-contain">
                                        <div className="drop-cart">
                                            <a href="#!" className="drop-image">
                                                <img src="/src/assets/images/product/vp-4.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
                                            <div className="drop-contain">
                                                <a href="#!">
                                                    <h5>Spicy Ahi Roll</h5>
                                                </a>
                                                <h6><span>1 x </span> $12.00</h6>
                                                <button className="close-button close_button">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-box-contain">
                                        <div className="drop-cart">
                                            <a href="#!" className="drop-image">
                                                <img src="/src/assets/images/product/vp-5.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
                                            <div className="drop-contain">
                                                <a href="#!">
                                                    <h5>Spicy Dumplings</h5>
                                                </a>
                                                <h6><span>1 x </span> $16.28</h6>
                                                <button className="close-button close_button">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-box-contain">
                                        <div className="drop-cart">
                                            <a href="#!" className="drop-image">
                                                <img src="/src/assets/images/product/vp-6.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
                                            <div className="drop-contain">
                                                <a href="#!">
                                                    <h5>Chicken Nugget</h5>
                                                </a>
                                                <h6><span>1 x </span> $20.50</h6>
                                                <button className="close-button close_button">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="price-box">
                                    <h5>Total :</h5>
                                    <h4 className="theme-color fw-semibold">$155.00</h4>
                                </div>
                                <div className="button-group">
                                    <a href="checkout.html" className="btn btn-sm theme-btn w-100 d-block rounded-2">Ver
                                        Carrinho</a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-part dropdown-button order-md-2">
                            <img className="img-fluid profile-pic" src="/src/assets/images/icons/p5.png" alt="profile"/>
                            <div>
                                <h6 className="fw-normal">Olá, João</h6>
                                <h5 className="fw-medium">Minha Conta</h5>
                            </div>
                            <div className="onhover-box onhover-sm">
                                <ul className="menu-list">
                                    <li>
                                        <a className="dropdown-item" href="profile.html">Perfil</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="my-order.html">Meus Pedidos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="saved-address.html">Endereços Salvos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="saved-card.html">Cartões salvos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="setting.html">Configurações</a>
                                    </li>
                                </ul>
                                <div className="bottom-btn">
                                    <a href="signin.html" className="theme-color fw-medium d-flex"><i
                                            className="ri-login-box-line me-2"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button className="navbar-toggler btn-close" id="offcanvas-close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                <li className="nav-item dropdown mega-menu">
                                    <a className="nav-link" href="#!" id="accountDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                   
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#!" id="orderMenu" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Pedidos</a>
                                    <ul className="dropdown-menu mt-0 border-0" aria-labelledby="orderMenu">
                                        <li>
                                            <a className="dropdown-item" href="menu-listing.html">listar Menu</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="menu-grid.html">Menu grid</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="address.html">Endereços</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="confirm-order.html">Confirmar Pedidos</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="offer.html">Promoções</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="order-tracking.html">Rastrear Pedidos</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="payment.html">Pagamentos</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="restaurant-listing.html">Listar Restaurantes</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#!" id="blogMenu" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu mt-0 border-0" aria-labelledby="blogMenu">
                                        <li>
                                            <a className="dropdown-item" href="blog-grid-left-sidebar.html">Grid Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="blog-grid-right-sidebar.html">Grid Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="blog-list.html">Blog Listing</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="pagesMenu" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu mt-0 border-0" aria-labelledby="pagesMenu">
                                        <li><a className="dropdown-item" href="404.html">404</a></li>
                                        <li>
                                            <a className="dropdown-item" href="coming-soon.html">Coming soon</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="empty-cart.html">Empty Cart</a>
                                        </li>
                                        <li><a className="dropdown-item" href="faq.html">FAQs</a></li>
                                        <li><a className="dropdown-item" href="otp.html">OTP</a></li>
                                        <li>
                                            <a className="dropdown-item" href="signin.html">Sign in</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="signup.html">Sign up</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="testimonial.html">Testimonial</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        
        <section id="home" className="home-wrapper section-b-space overflow-hidden">
            <div className="background-effect">
                <div className="main-circle">
                    <div className="main-circle circle-1">
                        <div className="main-circle circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="container text-center position-relative">
                <h1>Gastrolink</h1>
                <h2>Encontre restaurantes perto de você</h2>
                <div className="search-section">
                    <form className="auth-form search-head" target="_blank">
                        <div className="form-group">
                            <div className="form-input mb-0">
                                <input type="search" className="form-control search" id="inputusername"
                                    placeholder="Search for Restaurant"/>
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </form>
                    <a className="btn theme-btn mt-0" href="#" role="button">Search</a>
                </div>
                <ul className="home-features-list d-md-flex d-none">
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="/src/assets/images/svg/routing.svg" alt="routing"/>
                            <h6>Wide Map</h6>
                        </div>
                    </li>
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="/src/assets/images/svg/3d-rotate.svg" alt="3d-rotate"/>
                            <h6>Easiest Order</h6>
                        </div>
                    </li>
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="/src/assets/images/svg/truck.svg" alt="truck"/>
                            <h6>Most Delivery</h6>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section className="categories-section section-b-space">
            <img src="/src/assets/images/scooter.png" className="scooter-img img-fluid d-md-inline-block d-none"
                alt="animation-scooter"/>
            <div className="container">
                <div className="title">
                    <h2>Categories</h2>
                    <div className="loader-line"></div>
                    <div className="sub-title">
                        <p>
                            Browse out top categories here to discover different food cuision.
                        </p>
                    </div>
                </div>
                <div className="theme-arrow">
                    <div className="swiper categories-slider categories-style">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-1.png" alt="p-1"/>
                                    <h4 className="dark-text">Pizza</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-2.png" alt="p-2"/>
                                    <h4 className="dark-text">Chicken</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-3.png" alt="p-3"/>
                                    <h4 className="dark-text">Burger</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-5.png" alt="p-5"/>
                                    <h4 className="dark-text">Fries</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-6.png" alt="p-6"/>
                                    <h4 className="dark-text">Boritto</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-7.png" alt="p-7"/>
                                    <h4 className="dark-text">Taco</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-8.png" alt="p-8"/>
                                    <h4 className="dark-text">Muffin</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-9.png" alt="p-9"/>
                                    <h4 className="dark-text">Meat</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-10.png" alt="p-5"/>
                                    <h4 className="dark-text">Panner</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-11.png" alt="p-11"/>
                                    <h4 className="dark-text">Hotdog</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-12.png" alt="p-12"/>
                                    <h4 className="dark-text">Donuts</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-13.png" alt="p-13"/>
                                    <h4 className="dark-text">Coffee</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-14.png" alt="p-14"/>
                                    <h4 className="dark-text">Sandwich</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-15.png" alt="p-15"/>
                                    <h4 className="dark-text">Noddle</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-16.png" alt="p-16"/>
                                    <h4 className="dark-text">Pasta</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-17.png" alt="p-17"/>
                                    <h4 className="dark-text">Meggi</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-18.png" alt="p-18"/>
                                    <h4 className="dark-text">Momos</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-19.png" alt="p-19"/>
                                    <h4 className="dark-text">Salad</h4>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="restaurant-listing.html" className="food-categories">
                                    <img className="img-fluid categories-img" src="/src/assets/images/product/p-20.png" alt="p-20"/>
                                    <h4 className="dark-text">Biryani</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next categories-next"></div>
                    <div className="swiper-button-prev categories-prev"></div>
                </div>
            </div>
        </section>
    
        <section className="banner-section section-b-space">
            <div className="container">
                <div className="title">
                    <h2>Today’s Deal</h2>
                    <div className="loader-line"></div>
                    <div className="sub-title">
                        <p>Take a benefit from our latest offers.</p>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="swiper banner1-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/src/assets/images/banner/banner1.jpg"
                                            alt="banner"/>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/src/assets/images/banner/banner2.jpg"
                                            alt="banner"/>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/src/assets/images/banner/banner3.jpg"
                                            alt="banner"/>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/src/assets/images/banner/banner4.jpg"
                                            alt="banner"/>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/src/assets/images/banner/banner5.jpg"
                                            alt="banner"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="brand-section section-b-space">
            <img className="img-fluid item-4" src="/src/assets/images/svg/item4.svg" alt="item-4"/>
            <div className="container">
                <div className="title">
                    <h2>Brand For You</h2>
                    <div className="loader-line"></div>
                    <div className="sub-title">
                        <p>
                            Browse out top brands here to discover different food cuision.
                        </p>
                    </div>
                </div>
                <div className="theme-arrow">
                    <div className="swiper brands-logo">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand1.png" alt="brand1"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>La Pino’z</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand2.png" alt="brand2"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Mc'd</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand3.png" alt="brand3"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Starbucks</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand4.png" alt="brand2"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Pizza Hut</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand5.png" alt="brand2"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Wendy's</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand6.png" alt="brand6"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Burger King</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand7.png" alt="brand7"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Subway</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand8.png" alt="brand8"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Domino's</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand9.png" alt="brand9"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Taco Bell</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand10.png" alt="brand5"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Chipotle</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="/src/assets/images/icons/brand11.png"
                                            alt="brand11"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>KFC</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next brand-next"></div>
                    <div className="swiper-button-prev brand-prev"></div>
                </div>
            </div>
        </section>

        <section className="popular-restaurant banner-section section-b-space ratio3_2 overflow-hidden">
            <img className="img-fluid item-5" src="/src/assets/images/svg/item5.svg" alt="item-5"/>
            <div className="container">
                <div className="title">
                    <h2>Popular Restaurants</h2>
                    <div className="loader-line"></div>
                    <div className="sub-title">
                        <p>Find nearby popular Restaurants.</p>
                    </div>
                </div>
                <div className="row g-md-4 g-3">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                        alt="vp1"/>
                                </a>
                                <div className="offers">
                                    <h6>upto $2</h6>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>50% OFF</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Poultry Palace</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                    </h6>
                                </div>
                                <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">New Jsercy</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                        <li><i className="ri-time-fill icon"></i> 25 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="seller-badge new-badge">
                                <img className="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                <h6>Newest</h6>
                            </div>
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-2.png"
                                        alt="vp-2"/>
                                </a>
                                <div className="offers">
                                    <h6>upto $2</h6>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>50% OFF</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Ribeye Junction</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                    </h6>
                                </div>
                                <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">California</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                        <li><i className="ri-time-fill icon"></i> 10 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                        alt="vp3"/>
                                </a>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">
                                            The Grill Master's Cafe
                                        </h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                    </h6>
                                </div>
                                <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">New York</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                        <li><i className="ri-time-fill icon"></i> 40 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                        alt="vp-4"/>
                                </a>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                    </h6>
                                </div>
                                <h5 className="product-items">cheesecake, waffles, Cakes,...</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">Dallas</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                        <li><i className="ri-time-fill icon"></i> 30 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                        alt="vp-5"/>
                                </a>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                    </h6>
                                </div>
                                <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">Seattle</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                        <li><i className="ri-time-fill icon"></i> 8 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                        alt="vp16"/>
                                </a>
                                <div className="offers">
                                    <h6>upto $2</h6>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>50% OFF</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Latte Lounge</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                    </h6>
                                </div>
                                <h5 className="product-items">
                                    Chicken fingers, Chicken goujons,....
                                </h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">Atlanta</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                        <li><i className="ri-time-fill icon"></i> 25 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="seller-badge exclusive-badge">
                                <img className="img-fluid badge" src="/src/assets/images/svg/crown.svg" alt="medal"/>
                                <h6>Best seller</h6>
                            </div>
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-7.png"
                                        alt="vp-7"/>
                                </a>
                                <div className="offers">
                                    <h6>upto $2</h6>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>50% OFF</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">The Burger Barn</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                    </h6>
                                </div>
                                <h5 className="product-items">
                                    Burger, Garlic Bread, Sandwich....
                                </h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">Chicago</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                        <li><i className="ri-time-fill icon"></i> 20 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="vertical-product-box">
                            <div className="seller-badge">
                                <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                <h6>Exclusive</h6>
                            </div>
                            <div className="vertical-product-box-img">
                                <a href="menu-listing.html">
                                    <img className="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-8.png"
                                        alt="vp-8"/>
                                </a>
                                <div className="offers">
                                    <h6>upto $2</h6>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>50% OFF</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-product-body">
                                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                    <a href="menu-listing.html">
                                        <h4 className="vertical-product-title">Wing Master</h4>
                                    </a>
                                    <h6 className="rating-star">
                                        <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                    </h6>
                                </div>
                                <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                                <div
                                    className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                    <h5 className="place">New York</h5>
                                    <ul className="distance">
                                        <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                        <li><i className="ri-time-fill icon"></i> 12 min</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="restaurant-list section-b-space ratio3_2">
            <div className="container">
                <div className="title restaurant-title w-border pb-0">
                    <h2>Featured Restaurants</h2>
                    <div className="loader-line"></div>
                    <ul className="nav nav-pills restaurant-tab tab-style2 w-100 border-0 m-0" id="Tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pill-delivery-tab" data-bs-toggle="pill"
                                data-bs-target="#delivery-tab">
                                Fast Delivery
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pill-rating-tab" data-bs-toggle="pill"
                                data-bs-target="#rating-tab">
                                Rating
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pill-veg-tab" data-bs-toggle="pill" data-bs-target="#veg-tab">
                                Pure Veg
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pill-cost-tab" data-bs-toggle="pill" data-bs-target="#cost-tab">
                                Cost
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content restaurant-content" id="TabContent">
                    <div className="tab-pane fade show active" id="delivery-tab">
                        <div className="row g-lg-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-9.png"
                                                alt="vp1"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Poultry Palace</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New Jsercy</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-10.png" alt="vp-2"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Ribeye Junction</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">California</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 10 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-11.png"
                                                alt="vp3"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">
                                                    The Grill Master's Cafe
                                                </h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                                <li><i className="ri-time-fill icon"></i> 40 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-12.png"
                                                alt="vp-4"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            cheesecake, waffles, Cakes,...
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Dallas</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 30 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-13.png"
                                                alt="vp-5"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Seattle</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 8 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-14.png"
                                                alt="vp16"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Latte Lounge</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken fingers, Chicken goujons,....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Atlanta</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge exclusive-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/crown.svg" alt="medal"/>
                                        <h6>Best seller</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-15.png" alt="vp-7"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">The Burger Barn</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Burger, Garlic Bread, Sandwich....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Chicago</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 20 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge new-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                        <h6>Newest</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-16.png" alt="vp-8"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Wing Master</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                                <li><i className="ri-time-fill icon"></i> 12 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="rating-tab">
                        <div className="row g-lg-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                                alt="vp1"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Poultry Palace</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New Jsercy</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-2.png" alt="vp-2"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Ribeye Junction</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">California</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 10 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                                alt="vp3"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">
                                                    The Grill Master's Cafe
                                                </h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                                <li><i className="ri-time-fill icon"></i> 40 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                                alt="vp-4"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            cheesecake, waffles, Cakes,...
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Dallas</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 30 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                                alt="vp-5"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Seattle</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 8 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                                alt="vp16"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Latte Lounge</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken fingers, Chicken goujons,....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Atlanta</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge new-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                        <h6>Newest</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-7.png" alt="vp-7"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">The Burger Barn</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Burger, Garlic Bread, Sandwich....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Chicago</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 20 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge exclusive-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/crown.svg" alt="medal"/>
                                        <h6>Best seller</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Wing Master</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                                <li><i className="ri-time-fill icon"></i> 12 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="veg-tab">
                        <div className="row g-lg-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                                alt="vp1"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Poultry Palace</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New Jsercy</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-2.png" alt="vp-2"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Ribeye Junction</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">California</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 10 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                                alt="vp3"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">
                                                    The Grill Master's Cafe
                                                </h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                                <li><i className="ri-time-fill icon"></i> 40 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                                alt="vp-4"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            cheesecake, waffles, Cakes,...
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Dallas</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 30 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                                alt="vp-5"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Seattle</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 8 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                                alt="vp16"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Latte Lounge</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken fingers, Chicken goujons,....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Atlanta</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-7.png" alt="vp-7"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">The Burger Barn</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Burger, Garlic Bread, Sandwich....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Chicago</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 20 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Wing Master</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                                <li><i className="ri-time-fill icon"></i> 12 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cost-tab">
                        <div className="row g-lg-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                                alt="vp1"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Poultry Palace</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New Jsercy</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-2.png" alt="vp-2"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Ribeye Junction</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">California</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 10 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                                alt="vp3"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">
                                                    The Grill Master's Cafe
                                                </h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                                <li><i className="ri-time-fill icon"></i> 40 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                                alt="vp-4"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            cheesecake, waffles, Cakes,...
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Dallas</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 30 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                                alt="vp-5"/>
                                        </a>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Seattle</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                                <li><i className="ri-time-fill icon"></i> 8 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                                alt="vp16"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Latte Lounge</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken fingers, Chicken goujons,....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Atlanta</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                                <li><i className="ri-time-fill icon"></i> 25 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-7.png" alt="vp-7"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">The Burger Barn</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Burger, Garlic Bread, Sandwich....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">Chicago</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                                <li><i className="ri-time-fill icon"></i> 20 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="vertical-product-box">
                                    <div className="seller-badge">
                                        <img className="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                        <h6>Exclusive</h6>
                                    </div>
                                    <div className="vertical-product-box-img">
                                        <a href="menu-listing.html">
                                            <img className="vertical-product-img-top w-100 bg-img"
                                                src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                        </a>
                                        <div className="offers">
                                            <h6>upto $2</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4>50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-product-body">
                                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                            <a href="menu-listing.html">
                                                <h4 className="vertical-product-title">Wing Master</h4>
                                            </a>
                                            <h6 className="rating-star">
                                                <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                            </h6>
                                        </div>
                                        <h5 className="product-items">
                                            Chicken quesadilla, avocado....
                                        </h5>
                                        <div
                                            className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                            <h5 className="place">New York</h5>
                                            <ul className="distance">
                                                <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                                <li><i className="ri-time-fill icon"></i> 12 min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="app-section">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="app-img">
                        <img className="img-fluid phone" src="/src/assets/images/service-phone.png" alt="app-phone"/>
                    </div>
                    <div className="app-content">
                        <h2>Zomo App : Online & Mobile Ordering</h2>
                        <h5>
                            Get the app for free and place takeout orders online whenever you
                            want.
                        </h5>
                        <div className="app-buttons d-flex align-items-center gap-3">
                            <a href="https://www.apple.com/in/app-store/">
                                <img className="img-fluid app-btn" src="/src/assets/images/svg/app-store.svg" alt="app-store"/>
                            </a>
                            <a href="https://play.google.com/store/apps">
                                <img className="img-fluid app-btn" src="/src/assets/images/svg/google-play.svg" alt="google-play"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="footer-section section-t-space">
            <div className="subscribe-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscribe-part">
                                <h5>
                                    Don't pass up our fantastic discounts. email offers from all
                                    of our best eateries
                                </h5>
                                <div className="position-relative w-100">
                                    <input type="email" className="form-control subscribe-form-control"
                                        placeholder="Enter your Email"/>
                                    <a href="#" className="btn theme-btn subscribe-btn mt-0">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="main-footer">
                    <div className="row g-3">
                        <div className="col-xl-4 col-lg-12">
                            <div className="footer-logo-part">
                                <img className="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo"/>
                                <p>
                                Bem-vindo ao nosso site de pedidos online! Aqui, você pode navegar em nossa
ampla seleção de produtos e fazer pedidos do conforto
da sua casa.
                                </p>
                                <div className="social-media-part">
                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/login/">
                                                <i className="ri-facebook-fill icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/i/flow/login">
                                                <i className="ri-twitter-fill icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/login/">
                                                <i className="ri-linkedin-fill icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <i className="ri-instagram-fill icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/">
                                                <i className="ri-youtube-fill icon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row g-3">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h5 className="footer-title">Company</h5>
                                        <ul className="content">
                                            <li>
                                                <a className="nav-links" href="about.html">
                                                    <h6>About us</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="contact.html">
                                                    <h6>Contact us</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="offer.html">
                                                    <h6>Offer</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="faq.html">
                                                    <h6>FAQs</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h5 className="footer-title">Account</h5>
                                        <ul className="content">
                                            <li>
                                                <a className="nav-links" href="my-order.html">
                                                    <h6>Pedidos</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="wishlist.html">
                                                    <h6>Lista de Desejos</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="checkout.html">
                                                    <h6>Carrinho</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="saved-address.html">
                                                    <h6>Endereços Salvos</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h5 className="footer-title">Useful links</h5>
                                        <ul className="content">
                                            <li>
                                                <a className="nav-links" href="blog-grid-left-sidebar.html">
                                                    <h6>Blogs</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="signin.html">
                                                    <h6>Login</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="signup.html">
                                                    <h6>Register</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="profile.html">
                                                    <h6>Profile</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="setting.html">
                                                    <h6>Settings</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div>
                                        <h5 className="footer-title">Top Brands</h5>
                                        <ul className="content">
                                            <li>
                                                <a className="nav-links" href="menu-listing.html">
                                                    <h6>PizzaBoy</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="menu-listing.html">
                                                    <h6>Saladish</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="menu-listing.html">
                                                    <h6>IcePops</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="menu-listing.html">
                                                    <h6>Maxican Hoy</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-links" href="menu-listing.html">
                                                    <h6>La Foodie</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer-part">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <h6>@ Copyright 2025 Gastrolink. Todos os direitos reservados.</h6>
                        <img className="img-fluid cards" src="/src/assets/images/icons/footer-card.png" alt="card"/>
                    </div>
                </div>
            </div>
        </footer>
    
        <div className="mobile-menu d-md-none d-block mobile-cart">
            <ul>
                <li className="active">
                    <a href="index.html" className="menu-box">
                        <i className="ri-home-4-line"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="wishlist.html" className="menu-box">
                        <i className="ri-heart-3-line"></i>
                        <span>Lista de Desejos</span>
                    </a>
                </li>
                <li>
                    <a href="checkout.html" className="menu-box">
                        <i className="ri-shopping-cart-2-line"></i>
                        <span>Carrinho</span>
                    </a>
                </li>
                <li>
                    <a href="index.html" className="menu-box">
                        <i className="ri-user-line"></i>
                        <span>Perfil</span>
                    </a>
                </li>
            </ul>
        </div>
    
        <div className="theme-btns">
            <button type="button" className="btntheme mode-change-button">
                <i id="themeIcon" className="ri-moon-line icon mode-icon"></i>
                <span className="text-value">Dark</span>
            </button>
        </div>

        <button className="scroll scroll-to-top">
            <i className="ri-arrow-up-s-line arrow"></i>
        </button>

        <div className="modal fade location-modal" id="location" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h5 className="fw-semibold">Escolha a Localização</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="search-section">
                            <form className="form_search" role="form">
                                <input type="search" placeholder="Search Location" className="nav-search nav-search-field"/>
                            </form>
                        </div>
                        <a href="#!" className="current-location">
                            <div className="current-address">
                                <i className="ri-focus-3-line focus"></i>
                                <div>
                                    <h5>Use current-location</h5>
                                    <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                                </div>
                            </div>
                            <i className="ri-arrow-right-s-line arrow"></i>
                        </a>
                        <h5 className="mt-sm-3 mt-2 fw-medium recent-title dark-text">
                            Recent Location
                        </h5>
                        <a href="#!" className="recent-location">
                            <div className="recant-address">
                                <i className="ri-map-pin-line theme-color"></i>
                                <div>
                                    <h5>Bayshore</h5>
                                    <h6>kingston St., Ottawa, Ontario, Canada</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="btn gray-btn" data-bs-dismiss="modal">Fechar</a>
                        <a href="#" className="btn theme-btn mt-0" data-bs-dismiss="modal">Salvar</a>
                    </div>
                </div>
            </div>
        </div>
        </body>
      
    </>
  )
}

export default IndexOne
