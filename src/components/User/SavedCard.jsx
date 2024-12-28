import React from 'react';

const SavedCard = () => {
  return (
    <div className="saved-card-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-12">
            <div className="card-box">
              <div className="card-header">
                <h2>Cartões Salvos</h2>
                <button className="btn btn-animation">Adicionar Novo</button>
              </div>
              <div className="card-list">
                <div className="card-item">
                  <div className="card-info">
                    <div className="card-type">
                      <i className="ri-visa-line"></i>
                    </div>
                    <div className="card-detail">
                      <h4>**** **** **** 1234</h4>
                      <p>Validade: 12/25</p>
                    </div>
                  </div>
                  <div className="card-actions">
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

export default SavedCard;
