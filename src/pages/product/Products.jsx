import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products m-4 ">
      <div className="products-title">
        <h2 className="my-4">Available Products</h2>
      </div>
      <div className="products-list  d-flex flex-wrap justify-content-center text-center gap-2 ">
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
