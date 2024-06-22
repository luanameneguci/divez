// npms import
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// images import
import logo from '../../images/logo-navbar.svg';
import notificationicon from '../../images/notification.png';

// views import
import AdminDashboard from '../../views/admin/adminDashboard';
import AdminClientList from '../../views/admin/adminClientList';
import AdminClientDashboard from '../../views/admin/adminClientDashboard';
import AdminProductDashboard from '../../views/admin/adminProductDashboard';
import AdminProductList from '../../views/admin/adminProductList';
import AdminTicketList from '../../views/admin/adminTicketList';
import AdminSalesList from '../../views/admin/adminSalesList';
import AdminBudgetList from '../../views/admin/adminBudgetList';
import PackageAdd from '../../views/admin/packageAdd';
import ProductAdd from '../../views/admin/productAdd';
import ProductEdit from '../../views/admin/productEdit';

// styles import
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Menu = () => {
  return (
    <Router>
      <div className="App">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-3 px-0 bg-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mx-auto">
                <img src={logo} alt="logo divez" className="header-logo" />
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to="/" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/clients" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Clients</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Products</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tickets" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Tickets</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sales" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Sales</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/budgets" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                    <i className="fs-4 bi-house"></i> 
                    <span className="ms-1 d-none d-sm-inline">Budgets</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-10 h-25 bg-white">
            <div className="d-flex align-self-end flex-row-reverse px-4 py-2 me-3">
              <div>
                <div>
                  <span className="username-text">Username</span>
                </div>
                <div className="account-type">
                  <span className="account-text">Admin</span>
                </div>
              </div>
              <div className="my-auto me-3">
                <img src={notificationicon} alt="notifications button" className="notification-icon" />
              </div>
            </div>
            <div className="w-100 bg-light">
              <div className="row">
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/clients" element={<AdminClientList />} />
                  <Route path="/products" element={<AdminProductList />} />
                  <Route path="/tickets" element={<AdminTicketList />} />
                  <Route path="/sales" element={<AdminSalesList />} />
                  <Route path="/budgets" element={<AdminBudgetList />} />
                  <Route path="/client" element={<AdminClientDashboard />} />
                  <Route path="/addproduct" element={<ProductAdd />} />
                  <Route path="/editproduct" element={<ProductEdit />} />
                  <Route path="/addpackage" element={<PackageAdd />} />
                  <Route path="/product" element={<AdminProductDashboard />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Menu;
