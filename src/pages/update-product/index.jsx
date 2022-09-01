import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters";
import AddProduct from "../../components/Product";
import { fetchProductById } from "../../services/product";
import { useParams } from "react-router-dom";

export default function UpdateProductPage() {
  const { id } = useParams();
  const selectedCategory = "";
  const categorySelected = () => {};
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchProductById(id).then((res) => {
      setProduct(res);
      setIsFetching(false);
    });
  }, []);
  return (
    <div className="grid grid-cols-12 p-10">
      <Filters
        categorySelect={categorySelected}
        selectedCategory={selectedCategory}
      />
      <div className="col-span-10">
        {isFetching ? (
          <div>Loading</div>
        ) : (
          <AddProduct isUpdateProductPage={true} product={product} />
        )}
      </div>
    </div>
  );
}
