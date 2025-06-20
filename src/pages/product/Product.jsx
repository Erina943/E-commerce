import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const { id, productName, productImage, price } = product;

  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h3 className="card-title">
          {" "}
          <Link to={`/product/${id}`} className="btn ">
            {" "}
            {productName}
          </Link>
        </h3>
        <p className="card-text">${price}</p>
        <button
          className="btn btn-outline-primary position-relative me-2"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={
            "btn btn-outline-primary position-relative " +
            (favoriteId && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};
export default Product;
