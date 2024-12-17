import React from 'react'

const NewCategories = () => {
  return (
    <>
      <body class="position-relative">
    <div class="skeleton-loader">
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg p-0">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#offcanvasNavbar">
                        <span class="navbar-toggler-icon">
                            <i class="ri-menu-line"></i>
                        </span>
                    </button>
                    <a href="index.html">
                        <img class="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo"/>
                    </a>
                    <a target="_blank" href="#!" data-bs-toggle="modal" data-bs-target="#location"
                        class="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1">
                        <i class="ri-map-pin-line"></i> Location
                    </a>
                    <div class="nav-option order-md-2">
                        <div class="dropdown-button">
                            <div class="cart-button">
                                <span>5</span>
                                <i class="ri-shopping-cart-line text-white cart-bag"></i>
                            </div>
                        </div>
                        <div class="profile-part dropdown-button order-md-2">
                            <img class="img-fluid profile-pic" src="/src/assets/images/icons/p5.png" alt="profile"/>
                            <div>
                                <h6 class="fw-normal">Olá, João</h6>
                                <h5 class="fw-medium">Minha Conta</h5>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSkeleton">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasSkeletonLabel">
                                Menu
                            </h5>
                            <button class="navbar-toggler btn-close" type="button" data-bs-toggle="collapse"
                                data-bs-target="#offcanvasSkeleton" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-center flex-grow-1">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Pedidos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <section class="home-wrapper">
            <div class="container text-center">
                <div class="loader-gif">
                    <img src="/src/assets/images/gif/food.gif" alt="food-gif" class="img-fluid"/>
                </div>
                <h2>Procurando restaurantes em sua região...</h2>
            </div>
        </section>
        <div class="categories-section">
            <div class="container">
                <div class="position-relative category-top">
                    <div class="swiper categories-no-arrow categories-style">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="restaurant-listing.html" class="food-categories">
                                    <span class="categories-img"></span>
                                    <h4 class="placeholder col-10"></h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="section-b-space">
            <div class="container">
                <div class="title placeholder-glow">
                    <span class="placeholder col-md-2 col-5"></span>
                    <p class="placeholder col-5 w-50"></p>
                </div>
                <div class="position-relative">
                    <div class="swiper banner1-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide placeholder-glow">
                                <div class="banner-part">
                                    <a href="offer.html" class="placeholder"></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="banner-part">
                                    <a href="offer.html" class="placeholder"></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="banner-part">
                                    <a href="offer.html" class="placeholder"></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="banner-part">
                                    <a href="offer.html" class="placeholder"></a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="banner-part">
                                    <a href="offer.html" class="placeholder"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg p-0">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#offcanvasNavbar">
                    <span class="navbar-toggler-icon">
                        <i class="ri-menu-line"></i>
                    </span>
                </button>
                <a href="index.html">
                    <img class="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo"/>
                </a>
                <a target="_blank" href="#!" data-bs-toggle="modal" data-bs-target="#location"
                    class="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1">
                    <i class="ri-map-pin-line"></i> Location
                </a>
                <div class="nav-option order-md-2">
                    <div class="dropdown-button">
                        <div class="cart-button">
                            <span>5</span>
                            <i class="ri-shopping-cart-line text-white cart-bag"></i>
                        </div>
                        <div class="onhover-box">
                            <ul class="cart-list">
                                <li class="product-box-contain">
                                    <div class="drop-cart">
                                        <a href="#!" class="drop-image">
                                            <img src="/src/assets/images/product/vp-3.png" class="blur-up lazyloaded" alt=""/>
                                        </a>
                                        <div class="drop-contain">
                                            <a href="#!">
                                                <h5>Egg Sandwich</h5>
                                            </a>
                                            <h6><span>1 x </span> $80.58</h6>
                                            <button class="close-button close_button">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-box-contain">
                                    <div class="drop-cart">
                                        <a href="#!" class="drop-image">
                                            <img src="/src/assets/images/product/vp-2.png" class="blur-up lazyloaded" alt=""/>
                                        </a>
                                        <div class="drop-contain">
                                            <a href="#!">
                                                <h5>Grilled Chicken Quesadilla</h5>
                                            </a>
                                            <h6><span>1 x </span> $25.64</h6>
                                            <button class="close-button close_button">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-box-contain">
                                    <div class="drop-cart">
                                        <a href="#!" class="drop-image">
                                            <img src="/src/assets/images/product/vp-4.png" class="blur-up lazyloaded" alt=""/>
                                        </a>
                                        <div class="drop-contain">
                                            <a href="#!">
                                                <h5>Spicy Ahi Roll</h5>
                                            </a>
                                            <h6><span>1 x </span> $12.00</h6>
                                            <button class="close-button close_button">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-box-contain">
                                    <div class="drop-cart">
                                        <a href="#!" class="drop-image">
                                            <img src="/src/assets/images/product/vp-5.png" class="blur-up lazyloaded" alt=""/>
                                        </a>
                                        <div class="drop-contain">
                                            <a href="#!">
                                                <h5>Spicy Dumplings</h5>
                                            </a>
                                            <h6><span>1 x </span> $16.28</h6>
                                            <button class="close-button close_button">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="product-box-contain">
                                    <div class="drop-cart">
                                        <a href="#!" class="drop-image">
                                            <img src="/src/assets/images/product/vp-6.png" class="blur-up lazyloaded" alt=""/>
                                        </a>
                                        <div class="drop-contain">
                                            <a href="#!">
                                                <h5>Chicken Nugget</h5>
                                            </a>
                                            <h6><span>1 x </span> $20.50</h6>
                                            <button class="close-button close_button">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="price-box">
                                <h5>Total :</h5>
                                <h4 class="theme-color fw-semibold">$155.00</h4>
                            </div>
                            <div class="button-group">
                                <a href="checkout.html" class="btn btn-sm theme-btn w-100 d-block rounded-2">View
                                    Cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="profile-part dropdown-button order-md-2">
                        <img class="img-fluid profile-pic" src="/src/assets/images/icons/p5.png" alt="profile"/>
                        <div>
                            <h6 class="fw-normal">Olá, João</h6>
                            <h5 class="fw-medium">Minha Conta</h5>
                        </div>
                        <div class="onhover-box onhover-sm">
                            <ul class="menu-list">
                                <li>
                                    <a class="dropdown-item" href="profile.html">Profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="my-order.html">My orders</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="saved-address.html">Saved Address</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="saved-card.html">Saved cards</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="setting.html">Settings</a>
                                </li>
                            </ul>
                            <div class="bottom-btn">
                                <a href="signin.html" class="theme-color fw-medium d-flex"><i
                                        class="ri-login-box-line me-2"></i>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button class="navbar-toggler btn-close" id="offcanvas-close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1">
                            <li class="nav-item dropdown mega-menu">
                                <a class="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                <div class="dropdown-menu mt-0 border-0 bsb-zoomIn" aria-labelledby="accountDropdown">
                                    <div class="row row-cols-lg-5 row-cols-1 g-xl-4 g-3">
                                        <div class="col">
                                            <a href="index.html" class="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/1.png" alt="d-1"
                                                    class="img-fluid demo-img"/>
                                                <h5 class="dropdown-item">Classic</h5>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="index2.html" class="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/2.png" alt="d-2"
                                                    class="img-fluid demo-img"/>
                                                <h5 class="dropdown-item">Elegance</h5>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="index3.html" class="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/3.png" alt="d-3"
                                                    class="img-fluid demo-img"/>
                                                <h5 class="dropdown-item">Compact</h5>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="index4.html" class="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/4.png" alt="d-4"
                                                    class="img-fluid demo-img"/>
                                                <h5 class="dropdown-item">Minimal</h5>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="index5.html" class="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/5.png" alt="d-5"
                                                    class="img-fluid demo-img"/>
                                                <h5 class="dropdown-item">Mordern</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle" href="#!" id="orderMenu" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Order</a>
                                <ul class="dropdown-menu mt-0 border-0" aria-labelledby="orderMenu">
                                    <li>
                                        <a class="dropdown-item" href="menu-listing.html">Menu listing</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="menu-grid.html">Menu grid</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="address.html">Address</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="confirm-order.html">Confirm order</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="offer.html">Offer</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="order-tracking.html">Order tracking</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="payment.html">Payment</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="restaurant-listing.html">Restaurant listing</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle" href="#!" id="blogMenu" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu mt-0 border-0" aria-labelledby="blogMenu">
                                    <li>
                                        <a class="dropdown-item" href="blog-grid-left-sidebar.html">Grid Left
                                            Sidebar</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="blog-grid-right-sidebar.html">Grid Right
                                            Sidebar</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="blog-list.html">Blog Listing</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#!" id="pagesMenu" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                <ul class="dropdown-menu mt-0 border-0" aria-labelledby="pagesMenu">
                                    <li><a class="dropdown-item" href="404.html">404</a></li>
                                    <li>
                                        <a class="dropdown-item" href="coming-soon.html">Coming soon</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="empty-cart.html">Empty Cart</a>
                                    </li>
                                    <li><a class="dropdown-item" href="faq.html">FAQs</a></li>
                                    <li><a class="dropdown-item" href="otp.html">OTP</a></li>
                                    <li>
                                        <a class="dropdown-item" href="signin.html">Sign in</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="signup.html">Sign up</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="testimonial.html">Testimonial</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    
    <section id="home" class="home-wrapper home2 section-b-space overflow-hidden">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <h2>Discover restaurants that food deliver near you</h2>
                    <div class="search-section">
                        <form class="auth-form search-head" target="_blank">
                            <div class="form-group">
                                <div class="form-input mb-0">
                                    <input type="search" class="form-control search" id="inputusername"
                                        placeholder="Search for Restaurant"/>
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>
                        </form>
                        <a class="btn theme-btn mt-0" href="#" role="button">Search</a>
                    </div>
                </div>
                <div class="col-lg-5 position-relative">
                    <img src="/src/assets/images/home-vector.png" class="img-fluid right-vector" alt="right-vector"/>
                </div>
            </div>
        </div>
    </section>
   
    <div class="categories-section">
        <img src="/src/assets/images/popcorn.png" class="img-fluid popcorn-img" alt=""/>
        <div class="container">
            <div class="position-relative category-top">
                <div class="swiper categories-no-arrow categories-style">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-1.png" alt="p-1"/>
                                <h4 class="dark-text">Pizza</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-2.png" alt="p-2"/>
                                <h4 class="dark-text">Chicken</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <h4 class="dark-text">Burger</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-5.png" alt="p-5"/>
                                <h4 class="dark-text">Fries</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-6.png" alt="p-6"/>
                                <h4 class="dark-text">Boritto</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-7.png" alt="p-7"/>
                                <h4 class="dark-text">Taco</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-8.png" alt="p-8"/>
                                <h4 class="dark-text">Muffin</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-9.png" alt="p-9"/>
                                <h4 class="dark-text">Meat</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-10.png" alt="p-5"/>
                                <h4 class="dark-text">Panner</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-11.png" alt="p-11"/>
                                <h4 class="dark-text">Hotdog</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-12.png" alt="p-12"/>
                                <h4 class="dark-text">Donuts</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-13.png" alt="p-13"/>
                                <h4 class="dark-text">Coffee</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-14.png" alt="p-14"/>
                                <h4 class="dark-text">Sandwich</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-15.png" alt="p-15"/>
                                <h4 class="dark-text">Noddle</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-16.png" alt="p-16"/>
                                <h4 class="dark-text">Pasta</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-17.png" alt="p-17"/>
                                <h4 class="dark-text">Meggi</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-18.png" alt="p-18"/>
                                <h4 class="dark-text">Momos</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-19.png" alt="p-19"/>
                                <h4 class="dark-text">Salad</h4>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="restaurant-listing.html" class="food-categories">
                                <img class="img-fluid categories-img" src="/src/assets/images/product/p-20.png" alt="p-20"/>
                                <h4 class="dark-text">Biryani</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <section class="section-b-space">
        <div class="container">
            <div class="title">
                <h2>Today’s Deal</h2>
                <div class="loader-line"></div>
                <div class="sub-title">
                    <p>Take a benefit from our latest offers.</p>
                </div>
            </div>
            <div class="position-relative">
                <div class="swiper banner1-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="banner-part">
                                <a href="offer.html">
                                    <img class="img-fluid banner-img" src="/src/assets/images/banner/banner1.jpg"
                                        alt="banner"/>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="banner-part">
                                <a href="offer.html">
                                    <img class="img-fluid banner-img" src="/src/assets/images/banner/banner2.jpg"
                                        alt="banner"/>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="banner-part">
                                <a href="offer.html">
                                    <img class="img-fluid banner-img" src="/src/assets/images/banner/banner3.jpg"
                                        alt="banner"/>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="banner-part">
                                <a href="offer.html">
                                    <img class="img-fluid banner-img" src="/src/assets/images/banner/banner4.jpg"
                                        alt="banner"/>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="banner-part">
                                <a href="offer.html">
                                    <img class="img-fluid banner-img" src="/src/assets/images/banner/banner5.jpg"
                                        alt="banner"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="restaurant-list section-b-space banner-section ratio3_2">
        <div class="container">
            <div class="title restaurant-title w-border pb-0">
                <h2>Featured Restaurants</h2>
                <div class="loader-line"></div>
                <ul class="nav nav-pills restaurant-tab tab-style2 w-100 border-0 m-0" id="Tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pill-delivery-tab" data-bs-toggle="pill"
                            data-bs-target="#delivery-tab">
                            Fast Delivery
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pill-rating-tab" data-bs-toggle="pill"
                            data-bs-target="#rating-tab">
                            Rating
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pill-veg-tab" data-bs-toggle="pill" data-bs-target="#veg-tab">
                            Pure Veg
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pill-cost-tab" data-bs-toggle="pill" data-bs-target="#cost-tab">
                            Cost
                        </button>
                    </li>
                </ul>
            </div>
            <div class="tab-content restaurant-content" id="TabContent">
                <div class="tab-pane fade show active" id="delivery-tab">
                    <div class="row g-lg-4 g-3">
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-9.png"
                                            alt="vp1"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New Jsercy</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-10.png" alt="vp-2"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">California</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-11.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i class="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-12.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Dallas</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-13.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Seattle</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-14.png"
                                            alt="vp16"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Atlanta</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge exclusive-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/crown.svg" alt="medal"/>
                                    <h6>Best seller</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-15.png" alt="vp-7"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Chicago</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge new-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Newest</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-16.png" alt="vp-8"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i class="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="rating-tab">
                    <div class="row g-lg-4 g-3">
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New Jsercy</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">California</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i class="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Dallas</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Seattle</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Atlanta</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge new-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Newest</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Chicago</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge exclusive-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/crown.svg" alt="medal"/>
                                    <h6>Best seller</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i class="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="veg-tab">
                    <div class="row g-lg-4 g-3">
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New Jsercy</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">California</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i class="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Dallas</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Seattle</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Atlanta</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Chicago</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i class="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="cost-tab">
                    <div class="row g-lg-4 g-3">
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New Jsercy</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">California</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i class="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Dallas</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Seattle</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i class="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Atlanta</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i class="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">Chicago</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i class="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="vertical-product-box">
                                <div class="seller-badge">
                                    <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div class="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img class="vertical-product-img-top w-100 bg-img"
                                            src="/src/assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div class="offers">
                                        <h6>upto $2</h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="vertical-product-body">
                                    <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 class="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 class="rating-star">
                                            <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 class="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 class="place">New York</h5>
                                        <ul class="distance">
                                            <li><i class="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i class="ri-time-fill icon"></i> 12 min</li>
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
   
    <section class="brand-section">
        <img class="img-fluid item-4" src="/src/assets/images/svg/item4.svg" alt="item-4"/>
        <div class="container">
            <div class="title">
                <h2>Brand For You</h2>
                <div class="loader-line"></div>
                <div class="sub-title">
                    <p>
                        Browse out top brands here to discover different food cuision.
                    </p>
                </div>
            </div>
            <div class="theme-arrow">
                <div class="swiper brands-logo">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand1.png" alt="brand1"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>La Pino’z</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand2.png" alt="brand2"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Mc'd</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand3.png" alt="brand3"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Starbucks</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand4.png" alt="brand2"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Pizza Hut</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand5.png" alt="brand2"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Wendy's</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand6.png" alt="brand6"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Burger King</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand7.png" alt="brand7"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Subway</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand8.png" alt="brand8"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Domino's</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand9.png" alt="brand9"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Taco Bell</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand10.png" alt="brand5"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>Chipotle</h4>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-box">
                                <a href="menu-listing.html" class="food-brands">
                                    <img class="img-fluid brand-img" src="/src/assets/images/icons/brand11.png"
                                        alt="brand11"/>
                                </a>
                                <a href="menu-listing.html">
                                    <h4>KFC</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next brand-next"></div>
                <div class="swiper-button-prev brand-prev"></div>
            </div>
        </div>
    </section>
    
    <section class="popular-restaurant section-b-space ratio3_2 overflow-hidden">
        <img class="img-fluid item-5" src="/src/assets/images/svg/item5.svg" alt="item-5"/>
        <div class="container">
            <div class="title">
                <h2>Popular Restaurants</h2>
                <div class="loader-line"></div>
                <div class="sub-title">
                    <p>Find nearby popular Restaurants.</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-1.png"
                                    alt="vp1"/>
                            </a>
                            <div class="offers">
                                <h6>upto $2</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Poultry Palace</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.9
                                </h6>
                            </div>
                            <h5 class="product-items">Chicken quesadilla, avocado....</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">New Jsercy</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 3.2 km</li>
                                    <li><i class="ri-time-fill icon"></i> 25 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="seller-badge new-badge">
                            <img class="img-fluid badge" src="/src/assets/images/svg/star-white.svg" alt="medal"/>
                            <h6>Newest</h6>
                        </div>
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-2.png"
                                    alt="vp-2"/>
                            </a>
                            <div class="offers">
                                <h6>upto $2</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Ribeye Junction</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                </h6>
                            </div>
                            <h5 class="product-items">Chicken quesadilla, avocado....</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">California</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                    <li><i class="ri-time-fill icon"></i> 10 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-3.png"
                                    alt="vp3"/>
                            </a>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">
                                        The Grill Master's Cafe
                                    </h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>4.3
                                </h6>
                            </div>
                            <h5 class="product-items">Bread, Eggs, Butter, Fries...</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">New York</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 5 km</li>
                                    <li><i class="ri-time-fill icon"></i> 40 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-4.png"
                                    alt="vp-4"/>
                            </a>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Cozy Cuppa Cafe</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                </h6>
                            </div>
                            <h5 class="product-items">cheesecake, waffles, Cakes,...</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">Dallas</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 4 km</li>
                                    <li><i class="ri-time-fill icon"></i> 30 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-5.png"
                                    alt="vp-5"/>
                            </a>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Mocha Magic Cafe</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                </h6>
                            </div>
                            <h5 class="product-items">Chinese, Momos, Dumplings,...</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">Seattle</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 1 km</li>
                                    <li><i class="ri-time-fill icon"></i> 8 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="product-img-top w-100 bg-img" src="/src/assets/images/product/vp-6.png"
                                    alt="vp16"/>
                            </a>
                            <div class="offers">
                                <h6>upto $2</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Latte Lounge</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.6
                                </h6>
                            </div>
                            <h5 class="product-items">
                                Chicken fingers, Chicken goujons,....
                            </h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">Atlanta</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 3 km</li>
                                    <li><i class="ri-time-fill icon"></i> 25 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="seller-badge exclusive-badge">
                            <img class="img-fluid badge" src="assets/images/svg/crown.svg" alt="medal"/>
                            <h6>Best seller</h6>
                        </div>
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-7.png"
                                    alt="vp-7"/>
                            </a>
                            <div class="offers">
                                <h6>upto $2</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">The Burger Barn</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.8
                                </h6>
                            </div>
                            <h5 class="product-items">
                                Burger, Garlic Bread, Sandwich....
                            </h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">Chicago</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 2.4 km</li>
                                    <li><i class="ri-time-fill icon"></i> 20 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vertical-product-box">
                        <div class="seller-badge">
                            <img class="img-fluid badge" src="/src/assets/images/svg/medal-fill.svg" alt="medal"/>
                            <h6>Exclusive</h6>
                        </div>
                        <div class="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img class="vertical-product-img-top w-100 bg-img" src="/src/assets/images/product/vp-8.png"
                                    alt="vp-8"/>
                            </a>
                            <div class="offers">
                                <h6>upto $2</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-product-body">
                            <div class="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                <a href="menu-listing.html">
                                    <h4 class="vertical-product-title">Wing Master</h4>
                                </a>
                                <h6 class="rating-star">
                                    <span class="star"><i class="ri-star-s-fill"></i></span>3.2
                                </h6>
                            </div>
                            <h5 class="product-items">Chicken quesadilla, avocado....</h5>
                            <div
                                class="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 class="place">New York</h5>
                                <ul class="distance">
                                    <li><i class="ri-map-pin-fill icon"></i> 1.8 km</li>
                                    <li><i class="ri-time-fill icon"></i> 12 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="app-section">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="app-img">
                    <img class="img-fluid phone" src="/src/assets/images/service-phone.png" alt="app-phone"/>
                </div>
                <div class="app-content">
                    <h2>Zomo App : Online & Mobile Ordering</h2>
                    <h5>
                        Get the app for free and place takeout orders online whenever you
                        want.
                    </h5>
                    <div class="app-buttons d-flex align-items-center gap-3">
                        <a href="https://www.apple.com/in/app-store/">
                            <img class="img-fluid app-btn" src="assets/images/svg/app-store.svg" alt="app-store"/>
                        </a>
                        <a href="https://play.google.com/store/apps">
                            <img class="img-fluid app-btn" src="assets/images/svg/google-play.svg" alt="google-play"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="footer-section section-t-space">
        <div class="subscribe-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="subscribe-part">
                            <h5>
                                Don't pass up our fantastic discounts. email offers from all
                                of our best eateries
                            </h5>
                            <div class="position-relative w-100">
                                <input type="email" class="form-control subscribe-form-control"
                                    placeholder="Enter your Email"/>
                                <a href="#" class="btn theme-btn subscribe-btn mt-0">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="main-footer">
                <div class="row g-3">
                    <div class="col-xl-4 col-lg-12">
                        <div class="footer-logo-part">
                            <img class="img-fluid logo" src="assets/images/svg/logo.svg" alt="logo"/>
                            <p>
                                Welcome to our online order website! Here, you can browse our
                                wide selection of products and place orders from the comfort
                                of your own home.
                            </p>
                            <div class="social-media-part">
                                <ul class="social-icon">
                                    <li>
                                        <a href="https://www.facebook.com/login/">
                                            <i class="ri-facebook-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/i/flow/login">
                                            <i class="ri-twitter-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login/">
                                            <i class="ri-linkedin-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/accounts/login/">
                                            <i class="ri-instagram-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/">
                                            <i class="ri-youtube-fill icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="row g-3">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 class="footer-title">Company</h5>
                                <ul class="content">
                                    <li>
                                        <a href="about.html">
                                            <h6>About us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <h6>Contact us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="offer.html">
                                            <h6>Offer</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <h6>FAQs</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 class="footer-title">Account</h5>
                                <ul class="content">
                                    <li>
                                        <a href="my-order.html">
                                            <h6>My orders</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">
                                            <h6>Wishlist</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">
                                            <h6>Shopping Cart</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="saved-address.html">
                                            <h6>Saved Address</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 class="footer-title">Useful links</h5>
                                <ul class="content">
                                    <li>
                                        <a href="blog-grid-left-sidebar.html">
                                            <h6>Blogs</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signin.html">
                                            <h6>Login</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signup.html">
                                            <h6>Register</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile.html">
                                            <h6>Profile</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="setting.html">
                                            <h6>Settings</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 class="footer-title">Top Brands</h5>
                                <ul class="content">
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>PizzaBoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>Saladish</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>IcePops</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>Maxican Hoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>La Foodie</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer-part">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h6>@ Copyright 2024 ZOMO. All rights Reserved.</h6>
                    <img class="img-fluid cards" src="/src/assets/images/icons/footer-card.png" alt="card"/>
                </div>
            </div>
        </div>
    </footer>
  
    <div class="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li class="active">
                <a href="index.html" class="menu-box">
                    <i class="ri-home-4-line"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="mobile-category">
                <a href="#!" class="menu-box">
                    <i class="ri-apps-line"></i>
                    <span>Category</span>
                </a>
            </li>
            <li>
                <a href="wishlist.html" class="menu-box">
                    <i class="ri-heart-3-line"></i>
                    <span>Wishlist</span>
                </a>
            </li>
            <li>
                <a href="checkout.html" class="menu-box">
                    <i class="ri-shopping-cart-2-line"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>
  
    <div class="modal fade location-modal" id="location" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h5 class="fw-semibold">Select a Location</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="search-section">
                        <form class="form_search" role="form">
                            <input type="search" placeholder="Search Location" class="nav-search nav-search-field"/>
                        </form>
                    </div>
                    <a href="#!" class="current-location">
                        <div class="current-address">
                            <i class="ri-focus-3-line focus"></i>
                            <div>
                                <h5>Use current-location</h5>
                                <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                            </div>
                        </div>
                        <i class="ri-arrow-right-s-line arrow"></i>
                    </a>
                    <h5 class="mt-sm-3 mt-2 fw-medium recent-title dark-text">
                        Recent Location
                    </h5>
                    <a href="#!" class="recent-location">
                        <div class="recant-address">
                            <i class="ri-map-pin-line theme-color"></i>
                            <div>
                                <h5>Bayshore</h5>
                                <h6>kingston St., Ottawa, Ontario, Canada</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn gray-btn" data-bs-dismiss="modal">Close</a>
                    <a href="#" class="btn theme-btn mt-0" data-bs-dismiss="modal">Save</a>
                </div>
            </div>
        </div>
    </div>

    <div class="theme-btns">
        <button type="button" class="btntheme mode-change-button">
            <i id="themeIcon" class="ri-moon-line icon mode-icon"></i>
            <span class="text-value">Dark</span>
        </button>
        <button type="button" id="rtl-btn" class="btntheme rtlBtnEl">
            <i class="ri-repeat-line icon"></i>
            <span class="text-value">RTL</span>
        </button>
    </div>
    
    <button class="scroll scroll-to-top">
        <i class="ri-arrow-up-s-line arrow"></i>
    </button>
   
    <div class="responsive-space"></div>
   
</body>
    </>
  )
}

export default NewCategories
