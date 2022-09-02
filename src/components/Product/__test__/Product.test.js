import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../index";

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

describe("Product", () => {
  it("should render product name input element", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productNameInputBox = screen.getByPlaceholderText(
      /enter product name.../i
    );
    expect(productNameInputBox).toBeInTheDocument();
  });
  it("should render price input element", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productPriceInputBox = screen.getByPlaceholderText(/enter price.../i);
    expect(productPriceInputBox).toBeInTheDocument();
  });
  it("should render product description textarea", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productDescriptionTextArea =
      screen.getByPlaceholderText(/enter description.../i);
    expect(productDescriptionTextArea).toBeInTheDocument();
  });

  it("should be able to type product name", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productNameInputElem = screen.getByPlaceholderText(
      /enter product name.../i
    );
    fireEvent.change(productNameInputElem, {
      target: { value: PRODUCT.title },
    });
    expect(productNameInputElem.value).toBe(PRODUCT.title);
  });
  it("should be able to type product price", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productPriceInputElem =
      screen.getByPlaceholderText(/enter price.../i);
    fireEvent.change(productPriceInputElem, {
      target: { value: PRODUCT.price },
    });
    expect(+productPriceInputElem.value).toBe(PRODUCT.price);
  });
  it("should be able to type product description", async () => {
    render(
      <Product
        product={PRODUCT}
        updateProductInfo={jest.fn()}
        submitCallback={jest.fn()}
      />
    );
    const productDescriptionTextarea =
      screen.getByPlaceholderText(/enter description.../i);
    fireEvent.change(productDescriptionTextarea, {
      target: { value: PRODUCT.description },
    });
    expect(productDescriptionTextarea.value).toBe(PRODUCT.description);
  });
});
