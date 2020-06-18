/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useLocalState from '../../utils/sessionstorage';
import '../../styles/SignUp-In.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [farmer, setFarmer] = useState(false);
  const [consumer, setConsumer] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [localState, setLocalState] = useLocalState('user-id');

  const data = {
    email,
    password,
  };

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
  };


  const onFormSubmit = (e) => {
    e.preventDefault();
    //  BACKEND CALL
    axios.post('http://localhost:4000/auth/login', data)
      .then((res) => {
        const tokens = res.data.token;
        const profile = jwtDecode(tokens);
        setLocalState(JSON.stringify(profile));
        const { role } = res.data;
        if (role === 'Consumer') {
          setConsumer(true);
        } else if (role === 'Farmer') {
          setFarmer(true);
        } else if (role === 'Doctor') {
          setDoctor(true);
        }
      })
      .catch((err) => err);
  };

  return (
    <div className="info">
      {consumer ? <Redirect to="/dashboard/01" /> : null}
      {farmer ? <Redirect to="/dashboard/00" /> : null}
      {doctor ? <Redirect to="/dashboard/02" /> : null}

      <h2 className="text-center">Login</h2>
      <p className="text-center">{data.service}</p>
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
            id="password"
            type="password"
            placeholder="Password"
            className="form-control auth-input"
            onChange={(event) => onChangeHandler(event, setPassword)}
            value={password}
            required
          />
        </div>
        <div className="register-button">
          <button type="submit" className="auth-button btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
