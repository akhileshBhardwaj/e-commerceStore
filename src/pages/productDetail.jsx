import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  console.log("This is a product detailes page", useParams());
  return <div>productDetail</div>;
};

export default ProductDetail;
