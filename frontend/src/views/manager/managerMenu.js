import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "../../App.css";
import logo from "../../images/logo-navbar.svg";
import notificationicon from "../../images/notification.png";

import ManagerProducts from "../../views/manager/managerProducts";
import FAQ from "../../views/buyer/faq";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menu = () => {
  return (
    <Router>
      <div className="row flex-nowrap px-0 mx-0 bg-light">
        <div className="col-auto col-md-3 col-xl-2 px-sm-3 px-0 bg-white fixed-top">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mx-auto">
              <img src={logo} alt="logo divez" className="header-logo" />
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="/" className="navbar-link text-decoration-none active-true align-middle px-5 py-2">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="navbar-link text-decoration-none text-black align-middle px-5 py-2">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto col-md-3 col-xl-2 px-sm-3 px-0"></div>
        <div className="col-10 h-25 bg-light px-0">
          <div className="d-flex align-self-end sticky-top flex-row-reverse bg-white px-5 py-2">
            <div>
              <div>
                <span className="username-text">Utilizador</span>
              </div>
              <div className="account-type">
                <span className="account-text">Admin</span>
              </div>
            </div>
            <div className="my-auto me-3">
              <img
                src={notificationicon}
                alt="notifications button"
                className="notification-icon"
              />
            </div>
          </div>

          <div className="mw-100 h-25 bg-light py-2 px-3">
            <div className="row dashboard-content">
                {/*Corrigir rotas*/}
              <Routes>
                <Route path="/" element={<ManagerProducts />} />
                <Route path="/faq" element={<FAQ />} />

              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Menu;
