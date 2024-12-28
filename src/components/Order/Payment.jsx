import React from 'react';

const Payment = () => {
  return (
    <div className="payment-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="payment-box">
              <div className="payment-header">
                <h2>Método de Pagamento</h2>
              </div>
              <div className="payment-options">
                <div className="payment-option">
                  <input type="radio" name="payment" id="credit" />
                  <label htmlFor="credit">
                    <i className="ri-bank-card-line"></i>
                    Cartão de Crédito
                  </label>
                </div>
                <div className="payment-option">
                  <input type="radio" name="payment" id="pix" />
                  <label htmlFor="pix">
                    <i className="ri-qr-code-line"></i>
                    PIX
                  </label>
                </div>
              </div>
              <div className="payment-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Número do Cartão" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="MM/AA" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="CVV" />
                  </div>
                </div>
                <button className="btn btn-animation w-100 mt-3">Pagar</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-summary">
              <h3>Resumo do Pedido</h3>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>R$ 150,00</span>
              </div>
              <div className="summary-item">
                <span>Entrega</span>
                <span>R$ 10,00</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>R$ 160,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
