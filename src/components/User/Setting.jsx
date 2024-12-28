import React from 'react';

const Setting = () => {
  return (
    <div className="setting-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="setting-box">
              <div className="setting-header">
                <h2>Configurações</h2>
              </div>
              <div className="setting-body">
                <div className="setting-item">
                  <div className="setting-title">
                    <h4>Notificações</h4>
                    <p>Gerenciar notificações por email e push</p>
                  </div>
                  <div className="setting-control">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="emailNotif" />
                      <label className="form-check-label" htmlFor="emailNotif">Email</label>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="pushNotif" />
                      <label className="form-check-label" htmlFor="pushNotif">Push</label>
                    </div>
                  </div>
                </div>
                <div className="setting-item">
                  <div className="setting-title">
                    <h4>Privacidade</h4>
                    <p>Gerenciar suas informações pessoais</p>
                  </div>
                  <div className="setting-control">
                    <button className="btn btn-outline">Alterar Senha</button>
                    <button className="btn btn-outline">Excluir Conta</button>
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

export default Setting;
