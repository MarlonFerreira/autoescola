import React from "react";
import { render, screen } from "test-utils";

import Home from "./Home";
import { buildProductList } from "models/builders/products";

test("renders Home page", () => {
  render(<Home products={buildProductList(6)} />);
  const linkElement = screen.getByText(/matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});
