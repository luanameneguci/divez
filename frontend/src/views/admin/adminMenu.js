import React from 'react';
import '../../App.css';
import logo from "../../images/logo-navbar.svg";
import notificationicon from "../../images/notification.png";
import AdminDashboard from './adminDashboard';
import AdminClientList from './adminClientList';
import AdminClientDashboard from './adminClientDashboard';
import AdminBudgetList from './adminBudgetList';
import AdminProductList from './adminProductList';
import AdminProductDashboard from './adminProductDashboard';
import AdminSalesDashboard from './adminSalesDashboard';
import ProductEdit from './productEdit';
import AdminTicketList from './adminTicketList';
import AdminSalesList from './adminSalesList';
import AdminBudgetReply from './adminBudgetReply';

/*O que falta*/
/*AdminTicketList - Modal está melhor
  AdminTicketChat - Falta fazer
  AdminDashboard - As cenas que o iuri fez não estão a mostrar corretamente no meu ecrã não sei pq, não consigo copiar
  e muito mais
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductAdd from './productAdd';
import PackageAdd from './packageAdd';

const Menu = () => {
    return (
        <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-3 px-0 bg-white">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a href="/" className="d-flex align-items-center pb-3 mx-auto">
            <img src={logo} alt="logo divez" className="header-logo" />
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none active-true align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Shop</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Managers</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Products</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Purchases</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Budget</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Inbox</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="navbar-link text-decoration-none text-black align-middle px-5 py-2"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Help</span>
              </a>
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
            <img
              src={notificationicon}
              alt="notifications button"
              className="notification-icon"
            />
          </div>
        </div>

        <div className="col-auto h-100">
          <div className="row">
            <AdminBudgetList />
          </div>
        </div>
      </div> 
    </div>
    );
}
export default Menu;