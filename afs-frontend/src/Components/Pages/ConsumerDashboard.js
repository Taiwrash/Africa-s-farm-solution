/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import useLocalState from '../../utils/sessionstorage';
import SideNavigation from '../SideNav';

import '../../styles/Dashboard.css';

const ConsumerDashboard = () => {
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
          <div className="centered">
            <p className="text-center">You have not made any purchase</p>
            <p className="text-center">
              To view farm produce,
              <Link to="/products" className="ml-2 link">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
