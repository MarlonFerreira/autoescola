import React from "react";

import Hero from "../component/Hero";
import Heading from "../component/Heading";

import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A auto escola lider em aprovacao.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>A auto escola lider em aprovacao 1.</li>
      <li>A auto escola lider em aprovacao 2.</li>
      <li>A auto escola lider em aprovacao 3.</li>
    </ul>
  </Hero>
);
