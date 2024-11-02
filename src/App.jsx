import React from "react";
import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import ProductNAv from "./Utils/Constant/ProductNAv";
import ProductCategory from "./Component/ProductCategory/ProductCategory";


const App = () => {
  return (
    <div>
      <Router>
        <ProductNAv/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products/:category" element={<ProductCategory/>} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
