import React from 'react';
import FarmProduceForm from '../FarmProduceForm';
import SideNavigation from '../SideNav';

const FarmProduce = () => (
  <div className="row order">
    <div className="col-4 col-lg-3 side">
      <SideNavigation />
    </div>
    <div className="col-8 col-lg-9">
      <FarmProduceForm />
    </div>
  </div>
);

export default FarmProduce;
