import React from 'react';

const SavedAddress = () => {
  return (
    <div className="saved-address-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-12">
            <div className="address-box">
              <div className="address-header">
                <h2>Endereços Salvos</h2>
                <button className="btn btn-animation">Adicionar Novo</button>
              </div>
              <div className="address-list">
                <div className="address-item">
                  <div className="address-detail">
                    <h4>Casa</h4>
                    <p>Rua Exemplo, 123</p>
                    <p>Cidade, Estado - CEP</p>
                    <p>Telefone: (11) 1234-5678</p>
                  </div>
                  <div className="address-actions">
                    <button className="edit-btn"><i className="ri-edit-line"></i></button>
                    <button className="delete-btn"><i className="ri-delete-bin-line"></i></button>
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

export default SavedAddress;
