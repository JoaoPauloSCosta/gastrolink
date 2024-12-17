import React from 'react'

const Header = () => {
  return (
   <>
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
                                <a href="checkout.html" className="btn btn-sm theme-btn w-100 d-block rounded-2">View
                                    Cart</a>
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
                                    <a className="dropdown-item" href="profile.html">Profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="my-order.html">My orders</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="saved-address.html">Saved Address</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="saved-card.html">Saved cards</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="setting.html">Settings</a>
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
                                <a className="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                <div className="dropdown-menu mt-0 border-0 bsb-zoomIn" aria-labelledby="accountDropdown">
                                    <div className="row row-cols-lg-5 row-cols-1 g-xl-4 g-3">
                                        <div className="col">
                                            <a href="index.html" className="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/1.png" alt="d-1"
                                                    className="img-fluid demo-img"/>
                                                <h5 className="dropdown-item">Classic</h5>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="index2.html" className="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/2.png" alt="d-2"
                                                    className="img-fluid demo-img"/>
                                                <h5 className="dropdown-item">Elegance</h5>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="index3.html" className="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/3.png" alt="d-3"
                                                    className="img-fluid demo-img"/>
                                                <h5 className="dropdown-item">Compact</h5>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="index4.html" className="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/4.png" alt="d-4"
                                                    className="img-fluid demo-img"/>
                                                <h5 className="dropdown-item">Minimal</h5>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="index5.html" className="demo-box" target="_blank">
                                                <img src="/src/assets/images/demo/5.png" alt="d-5"
                                                    className="img-fluid demo-img"/>
                                                <h5 className="dropdown-item">Mordern</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link dropdown-toggle" href="#!" id="orderMenu" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Order</a>
                                <ul className="dropdown-menu mt-0 border-0" aria-labelledby="orderMenu">
                                    <li>
                                        <a className="dropdown-item" href="menu-listing.html">Menu listing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="menu-grid.html">Menu grid</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="address.html">Address</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="confirm-order.html">Confirm order</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="offer.html">Offer</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="order-tracking.html">Order tracking</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="payment.html">Payment</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="restaurant-listing.html">Restaurant listing</a>
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
                          
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
   </>
  )
}

export default Header
