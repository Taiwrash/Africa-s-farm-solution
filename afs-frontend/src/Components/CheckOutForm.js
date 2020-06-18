/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/SignUp-In.css";

const onChangeHandler = (e, handler) => {
  const { value } = e.target;
  handler(value);
};

const CheckOutForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const data = {
    email,
    password,
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    //  SEND TO BACKEND
  };

  return (
    <div className="info">
      <h2 className="text-center">Welcome to pay</h2>
      <p className="text-center">{data.service}</p>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            id="email"
            type="email"
            placeholder="Email to get your order notifications"
            className="form-control auth-input"
            value={email}
            onChange={(event) => onChangeHandler(event, setEmail)}
            required
          />
        </div>

        <div className="form-group">
          <input
            id="password"
            type="text"
            placeholder="Your Address..."
            className="form-control auth-input"
            onChange={(event) => onChangeHandler(event, setAddress)}
            value={address}
            required
          />
        </div>

        <div className="form-group">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control auth-input"
            onChange={(event) => onChangeHandler(event, setPassword)}
            value={password}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
