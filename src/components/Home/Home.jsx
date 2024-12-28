import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 1, name: 'Pizza', image: '/assets/images/product/p-1.png' },
    { id: 2, name: 'Burger', image: '/assets/images/product/p-2.png' },
    { id: 3, name: 'Sushi', image: '/assets/images/product/p-3.png' },
    { id: 4, name: 'Pasta', image: '/assets/images/product/p-4.png' },
    { id: 5, name: 'Salad', image: '/assets/images/product/p-5.png' },
    { id: 6, name: 'Dessert', image: '/assets/images/product/p-6.png' },
    { id: 7, name: 'Drinks', image: '/assets/images/product/p-7.png' },
    { id: 8, name: 'Sandwich', image: '/assets/images/product/p-14.png' },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Pizza House',
      image: '/assets/images/product/vp-1.png',
      rating: 4.5,
      deliveryTime: '30-45 min',
      type: 'Italian',
      badge: { type: 'bestseller', text: 'Best Seller' }
    },
    {
      id: 2, 
      name: 'Burger King',
      image: '/assets/images/product/vp-2.png',
      rating: 4.2,
      deliveryTime: '20-35 min',
      type: 'Fast Food'
    },
    {
      id: 3,
      name: 'Sushi Bar',
      image: '/assets/images/product/vp-3.png', 
      rating: 4.8,
      deliveryTime: '40-55 min',
      type: 'Japanese'
    },
    {
      id: 4,
      name: 'Pasta Palace',
      image: '/assets/images/product/vp-4.png',
      rating: 4.3,
      deliveryTime: '25-40 min', 
      type: 'Italian',
      badge: { type: 'new', text: 'New' }
    }
  ];

  if (loading) {
    return (
      <div className="skeleton-loader">
        <section className="home-wrapper section-b-space">
          <div className="container text-center">
            <div className="loader-gif">
              <img src="/assets/images/gif/food.gif" alt="food-gif" className="img-fluid" />
            </div>
            <h2>Searching the most delicious dish in your area...</h2>
          </div>
        </section>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="home-wrapper section-b-space overflow-hidden">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="home-content">
                <div>
                  <h1>Find Your Favorite Food From Our <span className="text-primary">GastroLink</span></h1>
                  <p className="mt-4">Discover amazing restaurants and delicious food near you. Fast delivery to your doorstep!</p>
                  <Link to="/restaurants" className="btn btn-primary mt-4">
                    Order Now <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-image">
                <img src="/assets/images/home-banner.png" alt="banner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section-b-space">
        <img src="/assets/images/scooter.png" className="scooter-img img-fluid d-md-inline-block d-none" alt="animation-scooter" />
        <div className="container">
          <div className="title">
            <h2>Categories</h2>
            <div className="loader-line"></div>
            <div className="sub-title">
              <p>Explore our wide variety of food categories</p>
            </div>
          </div>
          <div className="theme-arrow">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.categories-next',
                prevEl: '.categories-prev'
              }}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 }
              }}
              className="categories-slider categories-style"
            >
              {categories.map(category => (
                <SwiperSlide key={category.id}>
                  <Link to="/restaurants" className="food-categories">
                    <img className="img-fluid categories-img" src={category.image} alt={category.name} />
                    <h4 className="dark-text">{category.name}</h4>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next categories-next"></div>
            <div className="swiper-button-prev categories-prev"></div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="popular-restaurant banner-section section-b-space ratio3_2 overflow-hidden">
        <img className="img-fluid item-5" src="/assets/images/svg/item5.svg" alt="item-5" />
        <div className="container">
          <div className="title">
            <h2>Popular Restaurants</h2>
            <div className="loader-line"></div>
            <div className="sub-title">
              <p>Top rated restaurants in your area</p>
            </div>
          </div>
          <div className="row g-md-4 g-3">
            {restaurants.map(restaurant => (
              <div key={restaurant.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="vertical-product-box">
                  {restaurant.badge && (
                    <div className={`seller-badge ${restaurant.badge.type}-badge`}>
                      <img className="img-fluid badge" 
                           src={`/assets/images/svg/${restaurant.badge.type === 'bestseller' ? 'crown' : 'star-white'}.svg`} 
                           alt="badge" />
                      <h6>{restaurant.badge.text}</h6>
                    </div>
                  )}
                  <div className="vertical-product-box-img">
                    <Link to="/menu">
                      <img className="product-img-top w-100 bg-img" src={restaurant.image} alt={restaurant.name} />
                    </Link>
                  </div>
                  <div className="vertical-product-content">
                    <div className="rating-box">
                      <span>{restaurant.rating} <i className="ri-star-fill"></i></span>
                      <span className="text-muted">({Math.floor(Math.random() * 500)} Reviews)</span>
                    </div>
                    <Link to="/menu" className="h4 fw-semibold">{restaurant.name}</Link>
                    <h6>{restaurant.type}</h6>
                    <div className="time-box">
                      <i className="ri-time-line"></i>
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
