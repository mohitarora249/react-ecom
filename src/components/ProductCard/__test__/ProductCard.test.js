import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../index";

const PRODUCT = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const MockProductCardComponent = ({ product }) => (
  <BrowserRouter>
    <ProductCard product={product} />
  </BrowserRouter>
);
describe("ProductCard", () => {
  it("should render product image", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const productImgElem = screen.getByRole("img");
    expect(productImgElem).toHaveAttribute("src", PRODUCT.image);
  });
  it("should render product title", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const productTitleElem = screen.getByText(PRODUCT.title);
    expect(productTitleElem).toBeInTheDocument();
  });
  it("should render product price", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const productPriceElem = screen.getByText(`$${PRODUCT.price}`);
    expect(productPriceElem).toBeInTheDocument();
  });
  it("should render product description", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const productDescriptionElem = screen.getByText(PRODUCT.description);
    expect(productDescriptionElem).toBeInTheDocument();
  });
  it("should render edit product link", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const editProductElem = screen.getByText(/edit product/i);
    expect(editProductElem).toBeInTheDocument();
  });
  it("should create /update-product/[id] link for edit product button", () => {
    render(<MockProductCardComponent product={PRODUCT} />);
    const editProductElem = screen.getByText(/edit product/i);
    expect(editProductElem).toHaveAttribute(
      "href",
      `/update-product/${PRODUCT.id}`
    );
  });
});
