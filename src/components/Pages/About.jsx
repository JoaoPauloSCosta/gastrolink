import React from 'react';

const About = () => {
  return (
    <div className="about-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h2>Sobre Nós</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="btn btn-animation">Saiba Mais</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
              <img src="/assets/images/about.jpg" alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
