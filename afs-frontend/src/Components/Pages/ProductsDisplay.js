/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductImage from "../ProductImage";
import useLocalState from "../../utils/sessionstorage";

const ProductsDisplay = () => {
  const [fullData, setFullData] = useState("");
  const [images, setImages] = useState([]);
  const [display, setDisplay] = useState("");

  const [id, setId] = useLocalState("product-id");

  const ENDPOINT = `http://localhost:4000/api/products/${id}`;

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then((response) => {
        const { data } = response;
        if (typeof data === "object" && !(data instanceof Array)) {
          setFullData(data);
          setImages(data.image);
        }
      })
      .catch((error) => error.message);
  }, [ENDPOINT]);

  const handleButton = (img) => {
    setDisplay(img);
  };

  return (
    <div className="main-wrapper">
      <div className="center">
        <ProductImage
          name={fullData.name}
          image={fullData.image}
          description={fullData.description}
          handleButton={handleButton}
          images={images}
          show={display}
        />
      </div>
    </div>
  );
};

export default ProductsDisplay;
