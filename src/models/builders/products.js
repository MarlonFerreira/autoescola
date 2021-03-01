import faker from "faker";

import CarPlaceholder from "stories/assets/card-placeholder.jpg";
import products from "./fixtures/products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      ...products[i],
      image: CarPlaceholder,
      // id: i + 1,
      // image: "",
      // title: faker.commerce.productName(),
      // summary: faker.commerce.productDescription(),
      // slang: faker.lorem.slug(),
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
