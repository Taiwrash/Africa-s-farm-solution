/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Loader from "react-loader";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../styles/Products.css";

const Products = () => {
  const [fullData, setFullData] = useState(null);
  const [linkId, setLinkId] = useState(false);
  const [id, setId] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://frozen-peak-27970.herokuapp.com/api/products")
      .then((response) => {
        const { data } = response;
        console.log("sdmd", data);
        setFullData(data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error ---->>>", error.message);
      });
  }, []);

  console.log(fullData, "yfm,de");

  return (
    <div className="my-5 py-5" id="product-wrapper">
      <div className="container">
        {loaded ? (
          <div className="row">
            {/* <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div class="card-header text-center">Farmer's name</div>
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="">$Amount</p>
                <p className="">Purchase</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div class="card-header text-center">Farmer's name</div>
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="">Card link</p>
                <p className="">Another link</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 my-2">
            <div className="card">
              <div class="card-header text-center">Farmer's name</div>
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="">Card link</p>
                <p className="">Another link</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 my-2">
            <div className="card">
              <div class="card-header text-center">Farmer's name</div>
              <img
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="">Card link</p>
                <p className="">Another link</p>
              </div>
            </div>
          </div> */}
            {fullData.map(({ image, name, price, _id }) => (
              <div key={_id} className="col-6 col-lg-3  my-2">
                <div className="card">
                  <div class="card-header text-center">{"Location"}</div>
                  <img src={image[0]} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="">{name}</p>
                    <p className="">{"#" + price}</p>
                    <Link
                      to={`/checkout/${_id}`}
                      onClick={() => {
                        setId(_id);
                        setLinkId(true);
                      }}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader loaded={loaded} className="product-loader" />
        )}
      </div>
    </div>
  );
};

export default Products;

{
  /* // <div className="main-wrapper">
//       {loaded ? (
//         <div className="center">
//           <div className="row">
//             {fullData.map(({ image, name, price, _id }) => (
//               <div key={_id} className="col-6 col-lg-3 py-4 px-2.5">
//                 <div>
//                   <img
//                     id="pr-image"
//                     className="img-fluid"
//                     src={image[0]}
//                     alt="A product"
//                   />
//                 </div>
//                 <div className="grid">
//                   <p>{name}</p>
//                   <p>{price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <Loader loaded={loaded} className="product-loader" />
//       )}
//     </div> */
}
