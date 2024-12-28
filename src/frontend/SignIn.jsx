import React from 'react'

const SignIn = () => {
  return (
    <>
      <body class="white-bg">


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
                <a target="_blank" href="#!" class="btn btn-sm theme-btn"> Login
                </a>
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
                                            <img src="/src/landing/assets/images/demo/1.png" alt="d-1"
                                                class="img-fluid demo-img"/>
                                            <h5 class="dropdown-item">Classic</h5>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="index2.html" class="demo-box" target="_blank">
                                            <img src="/src/landing/assets/images/demo/2.png" alt="d-2"
                                                class="img-fluid demo-img"/>
                                            <h5 class="dropdown-item">Elegance</h5>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="index3.html" class="demo-box" target="_blank">
                                            <img src="/src/landing/assets/images/demo/3.png" alt="d-3"
                                                class="img-fluid demo-img"/>
                                            <h5 class="dropdown-item">Compact</h5>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="index4.html" class="demo-box" target="_blank">
                                            <img src="/src/landing/assets/images/demo/4.png" alt="d-4"
                                                class="img-fluid demo-img"/>
                                            <h5 class="dropdown-item">Minimal</h5>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="index5.html" class="demo-box" target="_blank">
                                            <img src="/src/landing/assets/images/demo/5.png" alt="d-5"
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

<section class="page-head-section">
    <div class="container page-heading">
        <h2 class="h3 mb-3 text-white text-center">Login</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-star">
                <li class="breadcrumb-item">
                    <a href="index.html"><i class="ri-home-line"></i>Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
        </nav>
    </div>
</section>

<section class="login-hero-section section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-10 m-auto">
                <div class="login-data">
                    <form class="auth-form">
                        <h2>Sign in</h2>
                        <h5>
                            or
                            <a href="signup.html"><span class="theme-color">create an a account</span></a>
                        </h5>
                        <div class="form-input">
                            <input type="tel" class="form-control" placeholder="Enter your number"/>
                            <i class="ri-phone-line"></i>
                        </div>
                        <div class="form-input">
                            <input type="password" class="form-control" placeholder="Enter your password"/>
                            <i class="ri-lock-password-line"></i>
                        </div>
                        <a href="index.html" class="btn theme-btn submit-btn w-100 rounded-2">CONTINUE</a>
                        <p class="fw-normal content-color">
                            By creating an account, I accept the
                            <span class="fw-semibold">
                                Terms & Conditions & Privacy Policy</span>
                        </p>
                    </form>
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
                            <div>
                                <h5 class="footer-title">Company</h5>
                                <ul class="content">
                                    <li>
                                        <a class="nav-links" href="about.html">
                                            <h6>About us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="contact.html">
                                            <h6>Contact us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="offer.html">
                                            <h6>Offer</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="faq.html">
                                            <h6>FAQs</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>
                                <h5 class="footer-title">Account</h5>
                                <ul class="content">
                                    <li>
                                        <a class="nav-links" href="my-order.html">
                                            <h6>My orders</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="wishlist.html">
                                            <h6>Wishlist</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="checkout.html">
                                            <h6>Shopping Cart</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="saved-address.html">
                                            <h6>Saved Address</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>
                                <h5 class="footer-title">Useful links</h5>
                                <ul class="content">
                                    <li>
                                        <a class="nav-links" href="blog-grid-left-sidebar.html">
                                            <h6>Blogs</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="signin.html">
                                            <h6>Login</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="signup.html">
                                            <h6>Register</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="profile.html">
                                            <h6>Profile</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="setting.html">
                                            <h6>Settings</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>
                                <h5 class="footer-title">Top Brands</h5>
                                <ul class="content">
                                    <li>
                                        <a class="nav-links" href="menu-listing.html">
                                            <h6>PizzaBoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="menu-listing.html">
                                            <h6>Saladish</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="menu-listing.html">
                                            <h6>IcePops</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="menu-listing.html">
                                            <h6>Maxican Hoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-links" href="menu-listing.html">
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
        <div class="bottom-footer-part">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h6>@ Copyright 2024 ZOMO. All rights Reserved.</h6>
                <img class="img-fluid cards" src="assets/images/icons/footer-card.png" alt="card"/>
            </div>
        </div>
    </div>
</footer>

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



<script src="assets/js/bootstrap.bundle.min.js"></script>


<script src="assets/js/footer-accordion.js"></script>


<script src="assets/js/script.js"></script>
</body>
    </>
  )
}

export default SignIn
