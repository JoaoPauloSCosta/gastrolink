import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const Testimonial = () => {
  return (
    <div className="testimonial-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-box">
              <div className="testimonial-header text-center">
                <h2>O que nossos clientes dizem</h2>
              </div>
              <div className="testimonial-slider">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-image">
                        <img src="/assets/images/user1.jpg" alt="user" />
                      </div>
                      <div className="testimonial-content">
                        <p>"Excelente serviço! A comida chegou quente e no tempo previsto."</p>
                        <h4>João Silva</h4>
                        <span>Cliente</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-image">
                        <img src="/assets/images/user2.jpg" alt="user" />
                      </div>
                      <div className="testimonial-content">
                        <p>"Ótima variedade de restaurantes e preços justos."</p>
                        <h4>Maria Santos</h4>
                        <span>Cliente</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
