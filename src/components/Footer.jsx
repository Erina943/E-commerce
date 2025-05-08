import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer
      className={` py-4 mt-5 mb-0 "  ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className=" container ">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3>About Us</h3>
            <p>
              Your one-stop shop for the latest <br /> mobiles and unbeatable
              deals. <br /> Stay connected, stay ahead!
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled ">
              <li>
                <Link
                  to="/"
                  className={` text-decoration-none ${
                    darkMode ? "bg-dark text-light" : "bg-light text-dark"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={` text-decoration-none ${
                    darkMode ? "bg-dark text-light" : "bg-light text-dark"
                  }`}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/favorite"
                  className={` text-decoration-none ${
                    darkMode ? "bg-dark text-light" : "bg-light text-dark"
                  }`}
                >
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-md-4 mb-3">
            <h3>Follow us </h3>
            <div className="d-flex gap-3 ">
              <a
                href="#"
                className={`  ${
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <FaInstagram size="20" />
              </a>
              <a
                href="#"
                className={`  ${
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <FaFacebookSquare size="20" />
              </a>
              <a
                href="#"
                className={`  ${
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <FaLinkedin size="20" />
              </a>
              <a
                href="#"
                className={`  ${
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <FaSquareXTwitter size="20" />
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          &copy; 2025 Blink Mobile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
