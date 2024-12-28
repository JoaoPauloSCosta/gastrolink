import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Profile from './components/User/Profile'
import MenuGrid from './components/Menu/MenuGrid'
import MenuListing from './components/Menu/MenuListing'
import RestaurantListing from './components/Restaurant/RestaurantListing'
import Checkout from './components/Order/Checkout'
import About from './components/Pages/About'
import Address from './components/User/Address'
import BlogDetails from './components/Blog/BlogDetails'
import Contact from './components/Pages/Contact'
import FAQ from './components/Pages/FAQ'
import MyOrder from './components/Order/MyOrder'
import Offer from './components/Pages/Offer'
import OrderTracking from './components/Order/OrderTracking'
import Payment from './components/Order/Payment'
import SavedAddress from './components/User/SavedAddress'
import SavedCard from './components/User/SavedCard'
import Setting from './components/User/Setting'
import Testimonial from './components/Pages/Testimonial'
import Wishlist from './components/User/Wishlist'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu-grid" element={<MenuGrid />} />
            <Route path="/menu-listing" element={<MenuListing />} />
            <Route path="/restaurant-listing" element={<RestaurantListing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/address" element={<Address />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/saved-address" element={<SavedAddress />} />
            <Route path="/saved-card" element={<SavedCard />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
