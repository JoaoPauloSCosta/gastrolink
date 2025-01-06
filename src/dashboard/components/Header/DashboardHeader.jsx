import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <div className="header-wrapper m-0">
      <div className="header-logo-wrapper p-0">
        <div className="logo-wrapper">
          <Link to="/dashboard">
            <img className="img-fluid main-logo" src="/assets/images/logo/1.png" alt="logo" />
          </Link>
        </div>
      </div>

      <div className="nav-right col-xl-6 col-5 pull-right right-header p-0">
        <ul className="nav-menus">
          <li className="search-icon">
            <span className="header-search">
              <i className="ri-search-line"></i>
            </span>
          </li>

          <li className="profile-nav onhover-dropdown pe-0 me-0">
            <div className="media profile-media">
              <img className="user-profile rounded-circle" src="/assets/images/users/4.jpg" alt="" />
              <div className="user-name-hide media-body">
                <span>User Name</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHeader;
