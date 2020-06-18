import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleService = ({ icon, title, description }) => (
  <div className="col-md-6 col-lg-3 d-flex align-items-right mb-5 mb-lg-0">
    <div className="icon-box">
      <div className="icon">
        <i className={icon} />
      </div>
      <h4 className="title">
        <Link to="/services">{title}</Link>
      </h4>
      <p className="description">{description}</p>
    </div>
  </div>
);

SingleService.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SingleService;
