import React from "react";
import { NavLink } from "react-router-dom";
import logout from "../utils/logout";
import "../styles/wrapper.css";

const Wrapper = () => (
  <nav
    id="idea"
    className="navbar navbar-expand-lg navbar-dark fixed-top scrolled"
  >
    <div className="container">
      <div className="navbar-header">
        <NavLink to="/" className="navbar-brand">
          AFS
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link break">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link break">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link break">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/00" className="nav-link break">
              Farmer Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/01" className="nav-link break">
              Consumer Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign-up" className="nav-link break">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign-in" className="nav-link break">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" onClick={logout} className="nav-link break">
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Wrapper;
