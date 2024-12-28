import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantListing = () => {
  const [restaurants] = useState([
    {
      id: 1,
      name: 'Restaurante Italiano',
      image: '/src/assets/images/restaurant/1.jpg',
      rating: 4.5,
      reviews: 120,
      cuisine: 'Italiana',
      deliveryTime: '30-45 min',
      minimumOrder: 30.00,
      address: 'Rua das Flores, 123 - Centro',
      isOpen: true
    },
    {
      id: 2,
      name: 'Sushi Express',
      image: '/src/assets/images/restaurant/2.jpg',
      rating: 4.8,
      reviews: 250,
      cuisine: 'Japonesa',
      deliveryTime: '40-55 min',
      minimumOrder: 50.00,
      address: 'Av. Paulista, 1000 - Bela Vista',
      isOpen: true
    },
    // Add more restaurants as needed
  ]);

  return (
    <section className="restaurant-section section-b-space">
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-3 col-lg-4">
            <div className="restaurant-filter">
              <div className="filter-box">
                <div className="filter-title">
                  <h5>Filtros</h5>
                  <a href="#" className="clear-filter">Limpar tudo</a>
                </div>
                <div className="filter-content">
                  <div className="filter-category">
                    <h6 className="filter-heading">Cozinha</h6>
                    <ul>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="italiana" />
                          <label className="form-check-label" htmlFor="italiana">Italiana</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="japonesa" />
                          <label className="form-check-label" htmlFor="japonesa">Japonesa</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="brasileira" />
                          <label className="form-check-label" htmlFor="brasileira">Brasileira</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-rating">
                    <h6 className="filter-heading">Avaliação</h6>
                    <ul>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="rating4plus" />
                          <label className="form-check-label" htmlFor="rating4plus">4.0 ou mais</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="rating3plus" />
                          <label className="form-check-label" htmlFor="rating3plus">3.0 ou mais</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-lg-8">
            <div className="row g-4">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="col-12">
                  <div className="restaurant-box">
                    <div className="restaurant-image">
                      <Link to={`/restaurant/${restaurant.id}`}>
                        <img src={restaurant.image} className="img-fluid blur-up lazyload" alt={restaurant.name} />
                      </Link>
                      {restaurant.isOpen ? (
                        <span className="status open">Aberto</span>
                      ) : (
                        <span className="status closed">Fechado</span>
                      )}
                    </div>
                    <div className="restaurant-detail">
                      <div className="details">
                        <div className="restaurant-name">
                          <Link to={`/restaurant/${restaurant.id}`}>
                            <h5>{restaurant.name}</h5>
                          </Link>
                          <span className="cuisine">{restaurant.cuisine}</span>
                        </div>
                        <div className="restaurant-info">
                          <div className="rating-box">
                            <span className="rating">{restaurant.rating}</span>
                            <i className="ri-star-fill"></i>
                            <span className="reviews">({restaurant.reviews} avaliações)</span>
                          </div>
                          <div className="delivery-info">
                            <h6>
                              <i className="ri-time-line"></i> {restaurant.deliveryTime}
                            </h6>
                            <h6>
                              <i className="ri-money-dollar-circle-line"></i> Pedido mínimo: R$ {restaurant.minimumOrder.toFixed(2)}
                            </h6>
                          </div>
                        </div>
                        <p className="address">
                          <i className="ri-map-pin-line"></i> {restaurant.address}
                        </p>
                      </div>
                      <div className="restaurant-actions">
                        <Link to={`/restaurant/${restaurant.id}`} className="btn btn-animation">
                          Ver Cardápio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantListing;
