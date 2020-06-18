import React from 'react';
import FarmProduceForm from '../FarmProduceForm';
import SideNavigation from '../SideNav';

const FarmProduce = () => (
  <div className="row order">
    <div className="col-5 col-lg-3 side">
      <SideNavigation />
    </div>
    <div className="col-7 col-lg-9 main">
      <FarmProduceForm />
    </div>
  </div>
);

export default FarmProduce;
