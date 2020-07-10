/* eslint-disable no-plusplus */
import React, { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { NotificationContainer } from "react-notifications";

import useLocalState from "../utils/sessionstorage";
import notification from "../utils/notifications";
import "../styles/Dashboard.css";

import "../styles/SignUp-In.css";
dotenv.config();

// CLOUDINARY DETAILS
const URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
console.log(URL);
console.log(UPLOAD_PRESET);

const FarmProduceForm = () => {
  const [localState, setLocalState] = useLocalState("user-id");
  const userId = localState.userId;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const data = {
    name,
    description,
    price,
    image,
  };
  const onNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onPriceChange = (e) => {
    const { value } = e.target;
    setPrice(value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file, "=--");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    console.log(URL);

    axios
      .post(URL, formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((img) => {
        setImage(img.data.url);
        console.log(img.data.url);
        console.log(img);
      })
      .catch((err) => err);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // SEND TO BACKEND
    console.log(data);
    if (!name || !description || !image || !price) {
      setError("Please provide the required information");
    } else {
      axios
        .post("https://frozen-peak-27970.herokuapp.com/api/products", data, {
          headers: { "Content-Type": "application/json" },
        })
        // .post("http://localhost:4000/api/products", data, {
        //   headers: { "Content-Type": "application/json" },
        // })
        .then((res) => {
          const data = res.data.message;
          notification("success", data);
        })
        .catch((err) => {
          console.log("error ---->>>", err.message);
        });
    }
  };
  return (
    <div className="info">
      <NotificationContainer />
      <h2 className="text-center">Add your Farm produce</h2>

      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            id=""
            type="text"
            className="form-control"
            value={name}
            onChange={onNameChange}
            placeholder="Name of produce"
          />
        </div>
        <div className="custom-file my-4">
          <label className="custom-file-label" htmlFor="imageUpload">
            <input
              id="imageUpload"
              type="file"
              className="custom-file-input"
              onChange={onFileChange}
              multiple="multiple"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            id=""
            type="text"
            className="form-control"
            value={description}
            onChange={onDescriptionChange}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <input
            id=""
            type="text"
            className="form-control"
            value={price}
            onChange={onPriceChange}
            placeholder="Price"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FarmProduceForm;
