import React from 'react';
import { Link } from 'react-router-dom';


const ProductImage = ({ description, name, image, images, show, handleButton }) => (
  <div className="row">
    <div className="col-12 col-md-3">
      <div className="left">
        {image.map((img) => (
          <button
            type="button"
            className="btn button mb-3"
            key={img}
            onClick={() => handleButton(img)}
          >
            <img
              src={img}
              alt="A product"
              className="img-fluid img"
            />
          </button>
        ))}
      </div>
    </div>

    <div className="col-12 col-md-9">
    <p>{name}</p>

      {!show ? (
        <img
          src={images[0]}
          alt="A product"
          className="img-fluid img"
        />
      ) : (
        <img
          src={show}
          alt="A product"
          className="img-fluid img"
        />
      )}
      <p>{description}</p>

      <div className="payment">Payment Methods</div>
      <div>Chat with the Farmer</div>
      <Link to="/products" className="link">Go Back</Link>
    </div>

  </div>
);

export default ProductImage;
