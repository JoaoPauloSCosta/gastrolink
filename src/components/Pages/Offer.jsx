import React from 'react';

const Offer = () => {
  return (
    <div className="offer-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="offer-box">
              <div className="offer-image">
                <img src="/assets/images/offer.jpg" alt="offer" className="img-fluid" />
              </div>
              <div className="offer-content">
                <h3>Oferta Especial</h3>
                <h2>20% OFF</h2>
                <p>Em todos os pedidos acima de R$ 100,00</p>
                <button className="btn btn-animation">Pedir Agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
