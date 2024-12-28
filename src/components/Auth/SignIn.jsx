import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign in attempt with:', formData);
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
                          <h3>Bem-vindo ao Gastrolink</h3>
                          <h6>Acesse sua conta</h6>
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
                          <div className="remember-box">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="remember" />
                              <label className="form-check-label" htmlFor="remember">Lembrar-me</label>
                            </div>
                            <Link to="/forgot-password" className="forgot">Esqueceu a senha?</Link>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-animation w-100">Entrar</button>
                        <div className="other-log-in">
                          <h6>ou</h6>
                        </div>
                        <div className="log-in-button">
                          <ul>
                            <li>
                              <button className="btn google-button w-100">
                                <img src="/src/assets/images/icons/google.png" className="blur-up lazyloaded" alt="google" />
                                Entrar com Google
                              </button>
                            </li>
                            <li>
                              <button className="btn google-button w-100">
                                <img src="/src/assets/images/icons/facebook.png" className="blur-up lazyloaded" alt="facebook" />
                                Entrar com Facebook
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="sign-up-box">
                          <h4>Não tem uma conta?</h4>
                          <Link to="/signup">Cadastre-se</Link>
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

export default SignIn;
