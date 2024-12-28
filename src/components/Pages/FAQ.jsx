import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="faq-contain">
              <h2>Perguntas Frequentes</h2>
              <div className="faq-accordion">
                <div className="accordion" id="accordionFAQ">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Como faço um pedido?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
                      <div className="accordion-body">
                        Para fazer um pedido, basta escolher o restaurante, selecionar os itens desejados e finalizar o pedido.
                      </div>
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

export default FAQ;
