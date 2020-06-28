/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Loader from "react-loader";
import { NotificationContainer, NotificationManager } from 'react-notifications'

import useLocalState from "../utils/sessionstorage";
import notification from '../utils/notifications';

// import '../styles/Dashboard.css';
import 'react-notifications/lib/notifications.css'

import "../styles/EditProfile.css";


dotenv.config();

// CLOUDINARY DETAILS
const URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const EditFarmerProfileForm = () => {
  // session storage
  const [localState, setLocalState] = useLocalState("user-id");
  const { userId } = localState;
  const { firstName } = localState;
  const { lastName } = localState;
  const { email } = localState;

  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [genders] = useState([{ value: "Male" }, { value: "Female" }]);
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [success, setSuccess] = useState(false)
  const data = {
    image,
    gender,
    dob,
    number,
    address,
    state,
    country,
  };

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
  };

  const onFileChange = (e) => {
    e.preventDefault();
    // CLOUUDINARY UPLOAD
    setLoaded(false);
    const file = e.target.files[0];
    console.log(file, "=--");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    axios
      .post(URL, formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((img) => {
        setImage(img.data.url);
        setLoaded(true);
      })
      .catch((err) => err);
  };

console.log('now', image)

  const removePhoto = () => {
    setImage("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      // .post(`https://frozen-peak-27970.herokuapp.com/api/edit/${userId}`, data)
      .post(`http://localhost:4000/api/edit/${userId}`, data)
      .then((res) => {
        const  data  = res.data.message;
        notification('success', data)
      })
      .catch((err) => {
        const error = err.message
        notification('error',error)
      });
  };

  return (
    <div id="edit">
      <NotificationContainer/>

      <h2>EDIT MY PROFILE</h2>
      <p>
        <strong>NOTE</strong>: Values with (<span className="asterik">*</span>)
        cannot be changed
      </p>

      <form onSubmit={onFormSubmit} className="row">
        <div className="col-8">
          <div className="form-group">
            <label htmlFor="FirstName">
              First Name <span className="asterik">*</span>
              <input
                id="firstName"
                type="text"
                readOnly
                value={firstName}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="LastName">
              Last Name <span className="asterik">*</span>
              <input
                id="lastName"
                type="text"
                readOnly
                value={lastName}
                className="form-control "
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Email">
              Email <span className="asterik">*</span>
              <input
                id="email"
                type="email"
                readOnly
                value={email}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Gender">
              Gender
              <select
                id="gender"
                className="custom-select mb-3"
                value={gender}
                onChange={(event) => onChangeHandler(event, setGender)}
              >
                <option>Gender</option>
                {genders.map(({ value }) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="D.O.B">
              Date of birth
              <input
                id="dateOfBirth"
                type="date"
                value={dob}
                onChange={(event) => onChangeHandler(event, setDob)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group ">
            <label htmlFor="Phone Number">
              Phone Number
              <input
                id="phoneNumber"
                type="text"
                value={number}
                onChange={(event) => onChangeHandler(event, setNumber)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Address">
              Address
              <input
                id="address"
                type="text"
                value={address}
                onChange={(event) => onChangeHandler(event, setAddress)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="State">
              State/City
              <input
                id="state"
                type="text"
                value={state}
                onChange={(event) => onChangeHandler(event, setState)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Country">
              Country
              <input
                id="country"
                type="text"
                value={country}
                onChange={(event) => onChangeHandler(event, setCountry)}
                className="form-control"
              />
            </label>
          </div>
        </div>

        <div className="col-4">
          <Loader loaded={loaded} className="loader" />

          <button
            type="button"
            className="text-center profile-button mb-2 mx-2"
          >
            {image ? (
              <img src={image} alt="" className="img-fluid photo" />
            ) : (
              <i className="bx bxs-user" />
            )}
          </button>

          <label htmlFor="file" className="profile" onChange={onFileChange}>
            Upload Photo
            <input type="file" name="file" id="file" className="inputfile" />
          </label>
          <button type="button" className="remove-button" onClick={removePhoto}>
            Remove Photo
          </button>
        </div>
        <button type="submit" className="btn btn-block">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditFarmerProfileForm;
