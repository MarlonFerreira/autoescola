import React from "react";
import { render, screen, fireEvent } from "test-utils";
// import { screen } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

// test("with 6 products show only 3 items", () => {
//   render(<ProductGrid products={buildProducts(1)} />);

//   expect(screen.getAllByRole("heading").length).toBe(1);
// });

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    const { getAllByRole } = render(
      <ProductGrid products={buildProducts(size)} />
    );

    expect(getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all the products when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("Lista completa de serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
