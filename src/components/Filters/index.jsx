import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../services/product";

export default function Filters(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <ul className="col-span-2">
      <h2 className="text-3xl font-bold">SHOP NAME</h2>
      {categories.map((x, idx) => (
        <li
          className={`p-3 border border-gray-300 rounded cursor-pointer font-medium ${
            props.selectedCategory === x && "bg-gray-400"
          }`}
          onClick={() => props.categorySelect(x)}
          key={idx}
        >
          {x}
        </li>
      ))}
    </ul>
  );
}
