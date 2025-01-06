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
import DashboardLayout from './dashboard/DashboardLayout'
import DashboardHome from './dashboard/pages/Home/DashboardHome'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/signin" element={<><Header /><SignIn /><Footer /></>} />
        <Route path="/signup" element={<><Header /><SignUp /><Footer /></>} />
        <Route path="/profile" element={<><Header /><Profile /><Footer /></>} />
        <Route path="/menu-grid" element={<><Header /><MenuGrid /><Footer /></>} />
        <Route path="/menu-listing" element={<><Header /><MenuListing /><Footer /></>} />
        <Route path="/restaurant-listing" element={<><Header /><RestaurantListing /><Footer /></>} />
        <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/address" element={<><Header /><Address /><Footer /></>} />
        <Route path="/blog-details" element={<><Header /><BlogDetails /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />
        <Route path="/my-order" element={<><Header /><MyOrder /><Footer /></>} />
        <Route path="/offer" element={<><Header /><Offer /><Footer /></>} />
        <Route path="/order-tracking" element={<><Header /><OrderTracking /><Footer /></>} />
        <Route path="/payment" element={<><Header /><Payment /><Footer /></>} />
        <Route path="/saved-address" element={<><Header /><SavedAddress /><Footer /></>} />
        <Route path="/saved-card" element={<><Header /><SavedCard /><Footer /></>} />
        <Route path="/setting" element={<><Header /><Setting /><Footer /></>} />
        <Route path="/testimonial" element={<><Header /><Testimonial /><Footer /></>} />
        <Route path="/wishlist" element={<><Header /><Wishlist /><Footer /></>} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
