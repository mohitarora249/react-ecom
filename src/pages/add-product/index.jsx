import React, { useState } from "react";
import { createProduct } from "../../services/product";
import Filters from "../../components/Filters";
import AddProduct from "../../components/Product";

const initialState = {
  title: "",
  price: "",
  description: "",
  category: "",
};
export default function AddProductPage() {
  const [product, setProduct] = useState({ ...initialState });

  const updateProductState = (e) => {
    setProduct((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    createProduct(product)
      .then((x) => {
        setProduct({ ...initialState });
      })
      .catch((e) => {
        console.log("err : ", e);
      });
  };

  const categorySelected = (val) => {
    setProduct((p) => ({ ...p, category: val }));
  };

  return (
    <div className="grid grid-cols-12 p-10">
      <Filters
        categorySelect={categorySelected}
        selectedCategory={product.category}
      />
      <div className="col-span-10">
        <AddProduct
          product={product}
          updateProductInfo={updateProductState}
          submitCallback={addProduct}
        />
      </div>
    </div>
  );
}
