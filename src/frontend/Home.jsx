import React from 'react'

const Home = () => {
  return (
    <>
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
            <h2>Encontre restaurantes próximo a você</h2>
            <div className="search-section">
                <form className="auth-form search-head" target="_blank">
                    <div className="form-group">
                        <div className="form-input mb-0">
                            <input type="search" className="form-control search" id="inputusername"
                                placeholder="Pesquisar restaurantes"/>
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
                        <h6>Mapa Amplo</h6>
                    </div>
                </li>
                <li>
                    <div className="home-features-box">
                        <img className="img-fluid icon" src="/src/assets/images/svg/3d-rotate.svg" alt="3d-rotate"/>
                        <h6>Facilidade nos Pedidos</h6>
                    </div>
                </li>
                <li>
                    <div className="home-features-box">
                        <img className="img-fluid icon" src="/src/assets/images/svg/truck.svg" alt="truck"/>
                        <h6>Mais entregas</h6>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Home
