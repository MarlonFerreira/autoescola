import React from "react";
import { render, screen } from "test-utils";

import { useProducts, useProduct } from "./products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slang = "primeira-habilitacao-moto";

    const product = useProduct({ slang });

    expect(product.title).toEqual("1ª Habilitação Moto");
  });

  test("return undefined if product was no found", () => {
    const slang = "invalid slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
