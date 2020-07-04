import React from 'react';
import FarmProduceForm from '../FarmProduceForm';
import SideNavigation from '../SideNav';

const FarmProduce = () => (
  <div className="full">
      <SideNavigation />
      <div className="content">
      <FarmProduceForm />
      </div>
  </div>
);

export default FarmProduce;
