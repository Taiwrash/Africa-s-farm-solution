/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Loader from "react-loader";
import useLocalState from "../../utils/sessionstorage";
// import '../styles/Dashboard.css';
// import '../styles/EditProfile.css';

dotenv.config();

// CLOUDINARY DETAILS
const URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const EditDoctorProfileForm = () => {
  // session storage
  const [localState, setLocalState] = useLocalState("user-id");
  const { userId } = localState;
  const { firstName } = localState;
  const { lastName } = localState;
  const { email } = localState;

  const [image, setImage] = useState("");
  const [credential, setCredential] = useState("");
  const [mcdn, setMcdn] = useState("");
  const [address, setAddress] = useState("");

  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [loaded, setLoaded] = useState(true);
  const data = {
    image,
    credential,
    mcdn,
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

  const removePhoto = () => {
    setImage("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:4000/api", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="edit">
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
            <label htmlFor="CredentialURL">
              Credential URL
              <input
                id="address"
                type="text"
                value={credential}
                onChange={(event) => onChangeHandler(event, setCredential)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Address">
              MCDN Portfolio Number
              <input
                id="address"
                type="text"
                value={mcdn}
                onChange={(event) => onChangeHandler(event, setMcdn)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Address">
              Office Address
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

export default EditDoctorProfileForm;
