import React from 'react';

const MyOrder = () => {
  return (
    <div className="order-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-12">
            <div className="order-tab">
              <div className="order-box">
                <div className="order-header">
                  <h4>Pedido #12345</h4>
                  <span className="status delivered">Entregue</span>
                </div>
                <div className="order-body">
                  <div className="order-details">
                    <p>Data: 27/12/2024</p>
                    <p>Total: R$ 150,00</p>
                  </div>
                  <div className="order-items">
                    <div className="item">
                      <span className="name">Item 1</span>
                      <span className="quantity">x2</span>
                      <span className="price">R$ 75,00</span>
                    </div>
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

export default MyOrder;
