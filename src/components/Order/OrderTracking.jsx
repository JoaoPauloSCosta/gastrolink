import React from 'react';

const OrderTracking = () => {
  return (
    <div className="tracking-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="tracking-box">
              <div className="tracking-header">
                <h2>Rastreamento do Pedido</h2>
                <p>Pedido #12345</p>
              </div>
              <div className="tracking-content">
                <div className="tracking-step completed">
                  <div className="step-icon">
                    <i className="ri-check-line"></i>
                  </div>
                  <div className="step-content">
                    <h4>Pedido Confirmado</h4>
                    <p>27/12/2024 15:30</p>
                  </div>
                </div>
                <div className="tracking-step active">
                  <div className="step-icon">
                    <i className="ri-bike-line"></i>
                  </div>
                  <div className="step-content">
                    <h4>Em Entrega</h4>
                    <p>27/12/2024 16:00</p>
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

export default OrderTracking;
