import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState({});

  // const data = {
  //   email,
  //   info,
  //   address,
  // };

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    //  SEND TO BACKEND
  };

  useEffect(() => {
    const Api = `https://frozen-peak-27970.herokuapp.com//api/products/_id`;
    // const Api = "http://localhost:4000/api/products/5efae3a08f8edf1fe42a2c7d";
    fetch(Api)
      .then((res) => res.json())
      .then((result) => {
        setInfo(result);
      });
    console.log(info);
  }, []);

  const config = {
    reference: info._id,
    email: email,

    amount: info.price * 100,
    publicKey: "pk_test_42b9a5dd2aced92bd955960c7a4741b819ba9e62",
     //secretKey: "sk_test_f7965348cd3f27e7a90ae01dc7174373d8c62586",
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      {" "}
      <div className="info">
        <h2 className="text-center">Welcome to Pay...</h2>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="form-control auth-input"
              value={email}
              onChange={(event) => onChangeHandler(event, setEmail)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Address..."
              className="form-control auth-input"
              onChange={(event) => onChangeHandler(event, setAddress)}
              value={address}
              required
            />
          </div>
        </form>
        <div className="register-button">
          <button
            type="submit"
            className="auth-button btn-block"
            onClick={() => {
              initializePayment();
            }}
          >
            Make Payment Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
