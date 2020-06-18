/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from '../SideNav';
import useLocalState from '../../utils/sessionstorage';
// import Loader from 'react-loader';

import '../../styles/Dashboard.css';
import WeatherApp from '../Weather.app';

const FarmerDashboard = () => {
  const [localState, setLocalState] = useLocalState('user-id');
  return (
    <div>
      <div className="row my-5">
        <div className="col-5 col-lg-3 side">
          <SideNavigation />
        </div>
        <div className="col-7 col-lg-9 my-5">
          <h2>
            Welcome
            {' '}
            {`${localState.firstName} ${localState.lastName}`}
          </h2>
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
