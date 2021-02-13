import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Marlon</p>
    </Hero>
  );

  // debug();

  expect(getByText("Marlon")).toBeInTheDocument();
  // expect(getByText("Marlon")).toBeTruthy();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
