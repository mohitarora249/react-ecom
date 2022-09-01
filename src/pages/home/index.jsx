import React, { useEffect, useState } from "react";
import { fetchProducts, fetchProductByCategory } from "../../services/product";
import ProductGrid from "../../components/ProductGrid";
import Filters from "../../components/Filters";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
      setIsFetching(false);
    });
  }, []);

  const categorySelected = (category) => {
    if (category === selectedCategory) {
      fetchProducts().then((res) => {
        setProducts(res);
        setSelectedCategory("");
      });
      return;
    }
    setSelectedCategory(category);
    fetchProductByCategory(category).then((res) => {
      setProducts(res);
    });
  };

  return (
    <div className="grid grid-cols-12 p-10">
      <Filters
        categorySelect={categorySelected}
        selectedCategory={selectedCategory}
      />
      <div className="col-span-10">
        {isFetching ? <div>Loading</div> : <ProductGrid products={products} />}
      </div>
    </div>
  );
};

export default Home;
