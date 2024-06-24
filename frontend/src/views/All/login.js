// npms import
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../../App.css";
import logo from "../../images/logo-navbar.svg";

const Login = () => {
  return (
    <section class="gradient-form d-flex align-text-center" style={{height: 100 + "vh"}}>
      <div class="container py-5 h-100 my-auto">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10 shadow roundbg px-0">
            <div class="text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src={logo}
                        style={{ width: 185 + "px" }}
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-5 pb-1">We are The Divez Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Email address"
                          pattern="^[^0-9]*$"
                        />
                        <label class="form-label" for="form2Example11">
                          Username
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder="Password"
                        />
                        <label class="form-label" for="form2Example22">
                          Password
                        </label>
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1 col-12">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-info btn-block fa-lg text-white hover col-12"
                          type="button"
                        >
                          <strong>Log in</strong>
                        </button>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <Link to="/register">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-outline-info hover"
                        >
                          Create new
                        </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center Gradient roundbg shadow">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">We are more than just a company</h4>
                    <p class="small mb-0">
                      Divez is a leading provider of application
                      development and management services. We specialize in
                      creating customized applications tailored to meet the
                      unique needs of businesses and individuals. Our
                      comprehensive services ensure that clients not only
                      receive high-quality applications but also benefit from
                      expert management and support to optimize their software
                      use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
