import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your profile update logic here
    console.log('Profile update with:', userData);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="user-dashboard">
      <div className="container">
        <div className="row g-3">
          <div className="col-xxl-3 col-lg-4">
            <div className="dashboard-left-sidebar">
              <div className="profile-box">
                <div className="cover-image">
                  <img src="/src/assets/images/inner-page/cover-img.jpg" className="img-fluid blur-up lazyloaded" alt="cover" />
                </div>
                <div className="profile-contain">
                  <div className="profile-image">
                    <div className="position-relative">
                      <img src="/src/assets/images/inner-page/user/1.jpg" className="blur-up lazyloaded" alt="user" />
                      <div className="edit-icon">
                        <i className="ri-pencil-line"></i>
                      </div>
                    </div>
                  </div>
                  <div className="profile-detail">
                    <h5>{userData.name}</h5>
                    <h6>{userData.email}</h6>
                  </div>
                </div>
              </div>
              <ul className="nav nav-pills user-nav-pills">
                <li className="nav-item">
                  <Link className="nav-link active" to="/profile">
                    <i className="ri-user-line"></i> Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    <i className="ri-list-unordered"></i> Pedidos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/wishlist">
                    <i className="ri-heart-line"></i> Lista de Desejos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/saved-address">
                    <i className="ri-map-pin-line"></i> Endereços
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/payment-methods">
                    <i className="ri-bank-card-line"></i> Métodos de Pagamento
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-9 col-lg-8">
            <div className="dashboard-right-sidebar">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="profile-tab">
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-pane-header">
                          <h5>Meu Perfil</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="settings-box">
                            <div className="row g-3">
                              <div className="col-lg-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    placeholder="Nome completo"
                                  />
                                  <label>Nome completo</label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-floating">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                  />
                                  <label>Email</label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-floating">
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    placeholder="Telefone"
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
                                    value={userData.address}
                                    onChange={handleChange}
                                    placeholder="Endereço"
                                  />
                                  <label>Endereço</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="btn-box">
                            <button type="submit" className="btn btn-animation">Salvar alterações</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
