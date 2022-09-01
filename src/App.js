import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProductPage from "./pages/add-product";
import UpdateProductPage from "./pages/update-product";
import Home from "./pages/home";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-product" element={<AddProductPage />} />
        <Route path="update-product/:id" element={<UpdateProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
