import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg p-3 ${
        darkMode ? "navbar-dark bg-dark text-light" : "navbar-light bg-grey"
      }`}
    >
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand">
          Blink Mobile
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={"nav-link " + (pathname === "/" && "active")}
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={"nav-link " + (pathname === "/cart" && "active")}
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-secondary">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorite"
                className={"nav-link " + (pathname === "/favorite" && "active")}
              >
                Favorite{" "}
                {favoriteIds.length > 0 && (
                  <span className="badge bg-secondary">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className="btn btn-outline-secondary ">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
