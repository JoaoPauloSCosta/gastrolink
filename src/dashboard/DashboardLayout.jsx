import React from 'react';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      {/* Header Component will go here */}
      <div className="page-header">
        {/* Header content will be moved to a separate component */}
      </div>

      <div className="page-body-wrapper">
        {/* Sidebar Component will go here */}
        <div className="sidebar-wrapper">
          {/* Sidebar content will be moved to a separate component */}
        </div>

        {/* Main Content Area */}
        <div className="page-body">
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
