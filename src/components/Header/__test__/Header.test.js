import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../index";

const MockHeaderComponent = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
describe("Header", () => {
  it("should render Assignment text", () => {
    render(<MockHeaderComponent />);
    const spanElem = screen.getByText(/assignment/i);
    expect(spanElem).toBeInTheDocument();
  });
  it("should render Home nav item with link /", () => {
    render(<MockHeaderComponent />);
    const homeNavLink = screen.getByText(/home/i);
    expect(homeNavLink).toHaveAttribute("href", `/`);
  });
  it("should render Add Product nav item with link /", () => {
    render(<MockHeaderComponent />);
    const addProductNavLink = screen.getByText(/add product/i);
    expect(addProductNavLink).toHaveAttribute("href", `/add-product`);
  });
});
