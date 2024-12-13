import React from 'react'

const Navbar = () => {
  return (
    <>
    <header>
    <div className="container">
              <nav className="navbar navbar-expand-lg p-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#offcanvasNavbar">
                        <span className="navbar-toggler-icon">
                            <i classNames="ri-menu-line"></i>
                        </span>
                    </button>
                    <a href="/">
                     <img className="img-fluid logo" src="/src/assets/images/logo/logo.png" alt="logo" />
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
                                    <a className="nav-link" href="contact.html">Contatos</a>
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
                    <img src="/src/assets/images/gif/food.gif" alt="food-gif" className="img-fluid" />
                </div>
                <h2>Estamos procurando o melhor restaurante na sua região...</h2>
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
    </>
  )
}

export default Navbar
