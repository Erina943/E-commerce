import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Favorite from "./pages/favorite/Favorite";
import ProductDetail from "./pages/product/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <CartContextProvider>
        <Router>
          <Navbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
