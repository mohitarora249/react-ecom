import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "../index";

describe("testing Filters component ", () => {
  it("should render SHOP NAME text", async () => {
    render(<Filters />);
    const shopName = screen.getByText(/SHOP NAME/i);
    expect(shopName).toBeInTheDocument();
  });
});
