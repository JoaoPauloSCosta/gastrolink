import React from 'react';

const Address = () => {
  return (
    <div className="address-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-sm-4 g-3">
          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
            <div className="address-box">
              <div className="address-detail">
                <h4>Casa</h4>
                <p>Rua Exemplo, 123</p>
                <p>Cidade, Estado - CEP</p>
              </div>
              <div className="address-edit">
                <button className="edit-button">Editar</button>
                <button className="delete-button">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
