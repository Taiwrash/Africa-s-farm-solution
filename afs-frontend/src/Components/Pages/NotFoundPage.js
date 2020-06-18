import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NotFound.css';

const NotFoundPage = () => (
  <div className="error-page">
    <div className="text-center">
      <h2>404 Error</h2>
      <Link to="/">
        <button type="button" className="btn btn-secondary-outline">Home</button>
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
