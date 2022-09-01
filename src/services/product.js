import {
  API_PRODUCTS,
  API_CATEGORY,
  API_PRODUCT_CATEGORY,
} from "../constants/endpoints";
import axios from "axios";

export const fetchProducts = () => {
  return axios
    .get(API_PRODUCTS)
    .then((res) => res.data)
    .catch((err) => err);
};

export const fetchCategories = () => {
  return axios
    .get(API_CATEGORY)
    .then((res) => res.data)
    .catch((err) => err);
};

export const fetchProductByCategory = (category) => {
  return axios
    .get(`${API_PRODUCT_CATEGORY}/${category}`)
    .then((res) => res.data)
    .catch((err) => err);
};
