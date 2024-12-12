import React from 'react'

const Navbar = () => {
  return (
    <>
    <header>
    <div className="container">
              <nav className="navbar navbar-expand-lg p-0">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#offcanvasNavbar">
                        <span className="navbar-toggler-icon">
                            <i classNames="ri-menu-line"></i>
                        </span>
                    </button>
                    <a href="index.html">
                     <img className="img-fluid logo" src="/src/assets/images/svg/logo.svg" alt="logo" />
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
                            <ul class="navbar-nav justify-content-center flex-grow-1">
                                <li className="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button"
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
    <section class="home-wrapper section-b-space">
            <div class="container text-center">
                <div class="loader-gif">
                    <img src="/src/assets/images/gif/food.gif" alt="food-gif" className="img-fluid" />
                </div>
                <h2>Estamos procurando o melhor restaurante na sua região...</h2>
            </div>
        </section>
    </>
  )
}

export default Navbar
