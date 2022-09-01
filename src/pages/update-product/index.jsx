import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters";
import AddProduct from "../../components/Product";
import { fetchProductById, updateProduct } from "../../services/product";
import { useParams } from "react-router-dom";

export default function UpdateProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchProductById(id).then((res) => {
      setProduct(res);
      setIsFetching(false);
    });
  }, []);
  const updateProductState = (e) => {
    setProduct((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const update = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateProduct(id, product)
      .then((x) => {})
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
        selectedCategory={product && product.category}
      />
      <div className="col-span-10">
        {isFetching ? (
          <div>Loading</div>
        ) : (
          <AddProduct
            product={product}
            updateProductInfo={updateProductState}
            submitCallback={update}
          />
        )}
      </div>
    </div>
  );
}
