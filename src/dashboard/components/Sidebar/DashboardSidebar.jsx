import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  return (
    <div className="sidebar-main">
      <div id="sidebar-menu">
        <ul className="sidebar-links">
          <li className="sidebar-list">
            <Link className="sidebar-link sidebar-title link-nav" to="/dashboard">
              <i className="ri-home-line"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="sidebar-list">
            <Link className="sidebar-link sidebar-title" to="/dashboard/users">
              <i className="ri-user-3-line"></i>
              <span>Users</span>
            </Link>
          </li>

          <li className="sidebar-list">
            <Link className="sidebar-link sidebar-title" to="/dashboard/products">
              <i className="ri-store-2-line"></i>
              <span>Products</span>
            </Link>
          </li>

          <li className="sidebar-list">
            <Link className="sidebar-link sidebar-title" to="/dashboard/orders">
              <i className="ri-shopping-bag-line"></i>
              <span>Orders</span>
            </Link>
          </li>

          <li className="sidebar-list">
            <Link className="sidebar-link sidebar-title" to="/dashboard/coupons">
              <i className="ri-price-tag-3-line"></i>
              <span>Coupons</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
