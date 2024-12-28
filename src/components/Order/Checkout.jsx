import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Egg Sandwich',
      price: 80.58,
      quantity: 2,
      image: '/src/assets/images/product/vp-3.png'
    },
    {
      id: 2,
      name: 'Grilled Chicken Quesadilla',
      price: 25.64,
      quantity: 1,
      image: '/src/assets/images/product/vp-2.png'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'credit'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add checkout logic here
    console.log('Checkout data:', formData);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const deliveryFee = 10.00;
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <section className="checkout-section section-b-space">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="checkout-box">
              <div className="checkout-title">
                <h3>Finalizar Pedido</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="checkout-detail">
                  <div className="accordion" id="accordionCheckout">
                    {/* Delivery Address */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddress">
                          1. Endereço de Entrega
                        </button>
                      </h2>
                      <div id="collapseAddress" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-12">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Nome completo"
                                  required
                                />
                                <label>Nome completo</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Email"
                                  required
                                />
                                <label>Email</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-floating">
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Telefone"
                                  required
                                />
                                <label>Telefone</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleChange}
                                  placeholder="Endereço completo"
                                  required
                                />
                                <label>Endereço completo</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePayment">
                          2. Método de Pagamento
                        </button>
                      </h2>
                      <div id="collapsePayment" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          <div className="payment-method">
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                id="credit"
                                value="credit"
                                checked={formData.paymentMethod === 'credit'}
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor="credit">
                                Cartão de Crédito
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                id="debit"
                                value="debit"
                                checked={formData.paymentMethod === 'debit'}
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor="debit">
                                Cartão de Débito
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                id="pix"
                                value="pix"
                                checked={formData.paymentMethod === 'pix'}
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor="pix">
                                PIX
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-summary">
              <div className="summary-title">
                <h3>Resumo do Pedido</h3>
              </div>
              <div className="summary-content">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-img">
                      <img src={item.image} className="img-fluid blur-up lazyload" alt={item.name} />
                      <span className="quantity">{item.quantity}</span>
                    </div>
                    <div className="item-detail">
                      <h5>{item.name}</h5>
                      <h6>R$ {(item.price * item.quantity).toFixed(2)}</h6>
                    </div>
                  </div>
                ))}
                <div className="summary-total">
                  <div className="total-item">
                    <h4>Subtotal:</h4>
                    <h4>R$ {subtotal.toFixed(2)}</h4>
                  </div>
                  <div className="total-item">
                    <h4>Taxa de entrega:</h4>
                    <h4>R$ {deliveryFee.toFixed(2)}</h4>
                  </div>
                  <div className="total-item final">
                    <h3>Total:</h3>
                    <h3>R$ {total.toFixed(2)}</h3>
                  </div>
                </div>
                <button type="submit" className="btn btn-animation w-100" onClick={handleSubmit}>
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
