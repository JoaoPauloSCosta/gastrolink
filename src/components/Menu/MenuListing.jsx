import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuListing = () => {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Egg Sandwich',
      description: 'Delicioso sanduíche com ovos, alface, tomate e maionese especial',
      price: 80.58,
      image: '/src/assets/images/product/vp-3.png',
      rating: 4.5,
      reviews: 120,
      category: 'Breakfast',
      deliveryTime: '30-45 min'
    },
    {
      id: 2,
      name: 'Grilled Chicken Quesadilla',
      description: 'Quesadilla recheada com frango grelhado, queijo e vegetais',
      price: 25.64,
      image: '/src/assets/images/product/vp-2.png',
      rating: 4.2,
      reviews: 98,
      category: 'Lunch',
      deliveryTime: '25-40 min'
    },
    // Add more menu items as needed
  ]);

  return (
    <section className="menu-section section-b-space">
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
                <div key={item.id} className="col-12">
                  <div className="product-box product-list">
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
                      <div className="details">
                        <span className="product-category">{item.category}</span>
                        <Link to={`/product/${item.id}`}>
                          <h5 className="name">{item.name}</h5>
                        </Link>
                        <p className="text-content">{item.description}</p>
                        <div className="product-rating">
                          <div className="rating">
                            {/* Add star rating component here */}
                            <span>{item.rating}</span>
                          </div>
                          <span className="reviews">({item.reviews} avaliações)</span>
                        </div>
                        <h6 className="delivery-time">
                          <i className="ri-time-line"></i> Tempo de entrega: {item.deliveryTime}
                        </h6>
                      </div>
                      <div className="price-box">
                        <h6 className="price">R$ {item.price.toFixed(2)}</h6>
                        <button className="btn btn-animation">
                          Adicionar ao carrinho
                        </button>
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

export default MenuListing;
