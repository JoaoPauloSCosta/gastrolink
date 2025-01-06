import React from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
  return (
    <div className="row">
      {/* Welcome Card */}
      <div className="col-xxl-3 col-xl-4 col-md-4 col-12">
        <div className="card p-0">
          <div className="card-body">
            <div className="welcome-card">
              <h4>Welcome to Dashboard</h4>
              <p>Here's an overview of your restaurant's performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="col-xxl-9 col-xl-8 col-md-8 col-12">
        <div className="row">
          <div className="col-xxl-4 col-sm-6">
            <div className="card widgets-card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="widget-icon bg-primary">
                    <i className="ri-shopping-bag-line"></i>
                  </div>
                  <div className="widget-content">
                    <h5>Total Orders</h5>
                    <h3>250</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-sm-6">
            <div className="card widgets-card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="widget-icon bg-success">
                    <i className="ri-money-dollar-circle-line"></i>
                  </div>
                  <div className="widget-content">
                    <h5>Total Revenue</h5>
                    <h3>$15,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
