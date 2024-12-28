import React from 'react';

const Wishlist = () => {
  return (
    <div className="wishlist-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-12">
            <div className="wishlist-box">
              <div className="wishlist-header">
                <h2>Meus Favoritos</h2>
              </div>
              <div className="wishlist-items">
                <div className="wishlist-item">
                  <div className="item-image">
                    <img src="/assets/images/product1.jpg" alt="product" />
                  </div>
                  <div className="item-content">
                    <h4>Nome do Produto</h4>
                    <p>Restaurante XYZ</p>
                    <div className="item-price">
                      <span className="current">R$ 29,90</span>
                      <span className="original">R$ 39,90</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button className="btn btn-animation">Adicionar ao Carrinho</button>
                    <button className="remove-btn"><i className="ri-delete-bin-line"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
