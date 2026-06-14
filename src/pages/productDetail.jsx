import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialProducts } from "../data/Product";
import { Link } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);
  console.log("myPrduct:", product);

  return (
    <>
      <div className="container">
        <Link to={"/"}>
          <button>
            {" "}
            <ChevronLeft />{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
