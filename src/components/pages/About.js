import React from "react";
import PropTypes from "prop-types";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import styled from "styled-components";

const ImageContainer = styled.div`
  text-align: center;

  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Marlon</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum consequatur dolor esse similique maiores vel ipsa voluptatem
            neque nulla perferendis fugiat reiciendis illo consectetur
            voluptates, nemo, aspernatur minus fuga!
          </p>
          <p>
            Laborum harum eaque ad dicta sed corporis porro, repellendus aperiam
            libero rem quia! Velit nam reprehenderit explicabo molestiae dicta
            magnam dolores, voluptatibus eligendi reiciendis eum consequatur
            fugiat accusantium excepturi ullam?
          </p>
          <p>
            In, neque iste! Placeat laboriosam, rem unde eos sapiente neque.
            Labore, veniam. Cum corporis, porro unde aliquam omnis nihil
            cupiditate vitae beatae illo est autem totam sit labore reiciendis
            dolor.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            praesentium adipisci vel reprehenderit! Ea, expedita vel fugiat
            perferendis eveniet officia dolorum officiis laborum, tempore
            explicabo animi! Exercitationem tempora dicta totam!
          </p>
          <ImageContainer>
            <AboutImage />
          </ImageContainer>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptatibus, culpa excepturi quas iure eum dicta assumenda
            exercitationem. Assumenda, quas velit? Libero nisi error rerum sequi
            exercitationem facilis suscipit maxime.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Eum rerum quaerat et sequi cupiditate vero iusto molestiae impedit
            assumenda commodi porro deleniti, ad minima inventore. Dicta, quam
            provident ea impedit placeat, tempora deserunt nemo expedita
            aspernatur, architecto asperiores.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
