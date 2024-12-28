import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuGrid = () => {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Egg Sandwich',
      price: 80.58,
      image: '/src/assets/images/product/vp-3.png',
      rating: 4.5,
      reviews: 120,
      category: 'Breakfast'
    },
    {
      id: 2,
      name: 'Grilled Chicken Quesadilla',
      price: 25.64,
      image: '/src/assets/images/product/vp-2.png',
      rating: 4.2,
      reviews: 98,
      category: 'Lunch'
    },
    // Add more menu items as needed
  ]);

  return (
    <section className="menu-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-3 col-lg-4">
            <div className="menu-filter">
              <div className="filter-box">
                <div className="filter-title">
                  <h5>Filtros</h5>
                  <a href="#" className="clear-filter">Limpar tudo</a>
                </div>
                <div className="filter-content">
                  <div className="filter-category">
                    <h6 className="filter-heading">Categorias</h6>
                    <ul>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="breakfast" />
                          <label className="form-check-label" htmlFor="breakfast">Café da manhã</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="lunch" />
                          <label className="form-check-label" htmlFor="lunch">Almoço</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="dinner" />
                          <label className="form-check-label" htmlFor="dinner">Jantar</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-price">
                    <h6 className="filter-heading">Preço</h6>
                    <div className="range-slider">
                      {/* Add price range slider component here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-lg-8">
            <div className="row g-4">
              {menuItems.map((item) => (
                <div key={item.id} className="col-xxl-4 col-lg-6 col-md-4 col-6">
                  <div className="product-box">
                    <div className="product-image">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} className="img-fluid blur-up lazyload" alt={item.name} />
                      </Link>
                      <ul className="product-option">
                        <li>
                          <button className="wishlist">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                        <li>
                          <button className="view">
                            <i className="ri-eye-line"></i>
                          </button>
                        </li>
                        <li>
                          <button className="cart">
                            <i className="ri-shopping-cart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <span className="product-category">{item.category}</span>
                      <Link to={`/product/${item.id}`}>
                        <h5 className="name">{item.name}</h5>
                      </Link>
                      <div className="product-rating">
                        <div className="rating">
                          {/* Add star rating component here */}
                          <span>{item.rating}</span>
                        </div>
                        <span className="reviews">({item.reviews} avaliações)</span>
                      </div>
                      <h6 className="price">R$ {item.price.toFixed(2)}</h6>
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

export default MenuGrid;
