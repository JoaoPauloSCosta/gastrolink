import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign up attempt with:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="page-head-section">
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <div className="category-wrap">
              <div className="row g-3">
                <div className="col-xxl-6 col-lg-8 mx-auto">
                  <div className="category-box">
                    <div className="category-content">
                      <div className="logo-wrap">
                        <Link to="/">
                          <img className="img-fluid" src="/src/assets/images/svg/logo.svg" alt="logo" />
                        </Link>
                      </div>
                      <form className="custom-form" onSubmit={handleSubmit}>
                        <div className="user-info">
                          <h3>Criar Conta</h3>
                          <h6>Preencha os dados abaixo</h6>
                        </div>
                        <div className="input-box">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome completo"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input-box">
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input-box">
                          <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Senha"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input-box">
                          <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Confirmar senha"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input-box">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="terms" required />
                            <label className="form-check-label" htmlFor="terms">
                              Concordo com os <Link to="/terms">Termos e Condições</Link>
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-animation w-100">Criar conta</button>
                        <div className="other-log-in">
                          <h6>ou</h6>
                        </div>
                        <div className="log-in-button">
                          <ul>
                            <li>
                              <button className="btn google-button w-100">
                                <img src="/src/assets/images/icons/google.png" className="blur-up lazyloaded" alt="google" />
                                Cadastrar com Google
                              </button>
                            </li>
                            <li>
                              <button className="btn google-button w-100">
                                <img src="/src/assets/images/icons/facebook.png" className="blur-up lazyloaded" alt="facebook" />
                                Cadastrar com Facebook
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="sign-up-box">
                          <h4>Já tem uma conta?</h4>
                          <Link to="/signin">Entrar</Link>
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
    </section>
  );
};

export default SignUp;
