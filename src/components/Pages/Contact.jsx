import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-form">
              <h2>Entre em Contato</h2>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Nome" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-animation">Enviar</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-details">
              <h3>Informações de Contato</h3>
              <p><i className="ri-map-pin-line"></i> Endereço: Rua Exemplo, 123</p>
              <p><i className="ri-phone-line"></i> Telefone: (11) 1234-5678</p>
              <p><i className="ri-mail-line"></i> Email: contato@gastrolink.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
