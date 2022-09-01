import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/add-product";
import Home from "./pages/home";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-product" element={<Product />} />
        <Route path="edit-product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
