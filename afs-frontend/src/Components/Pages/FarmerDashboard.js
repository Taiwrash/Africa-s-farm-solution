/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SideNavigation from "../SideNav";
import useLocalState from "../../utils/sessionstorage";
import { isEqual } from "lodash";
import axios from "axios";

// import Loader from 'react-loader';

import "../../styles/Dashboard.css";
import WeatherApp from "../Weather.app";

const FarmerDashboard = () => {
  const [localState, setLocalState] = useLocalState("user-id");
  const { userId } = localState;
  const [userData, setUserData] = useState([]);

  // const usePrevious = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });

  //   return ref.current;
  // };

  // const prevText = usePrevious(userData);

  useEffect(() => {
    axios
      .get(`https://frozen-peak-27970.herokuapp.com/api/view/${userId}`)
      // .get(`http://localhost:4000/api/view/${userId}`)
      .then((response) => {
        const { data } = response;
        const val = data.data;
        setUserData(val);
        console.log("dd", val);
      })
      .catch((error) => {
        console.log("error ---->>>", error.message);
      });
  }, [userId]);

  // useEffect(() => {
  //   if (!isEqual(text, prevText)) {
  //     setFullData([...fullData, text]);
  //   }
  // }, [userData, prevText]);

  return (
    <div>
      <div className="row my-5">
        <div className="col-5 col-lg-3 side">
          <SideNavigation
            email={userData.email}
            firstName={userData.firstName}
            lastName={userData.lastName}
          />
        </div>
        <div className="col-7 col-lg-9 my-5">
          <h2>Welcome {`${localState.firstName} ${localState.lastName}`}</h2>
          <WeatherApp />
        </div>
      </div>
    </div>
  );
};
export default FarmerDashboard;

// <div className="centered">
// {products ? (<p>Here it is</p>) : (   <div><p className="text-center">You have not added any farm produce</p>
// <p className="text-center">
//   To add farm produce,
//   <Link className="ml-2 link" to={`/dashboard/${localState.userId}/products/add`}>Click here</Link>
// </p> </div>)}
// </div>
