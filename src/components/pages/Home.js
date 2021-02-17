import React from "react";
// import PropTypes from "prop-types";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
// import Container from "components/atoms/Container";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import HeroImage from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>A auto escola lider em aprovação 1.</li>
        <li>A auto escola lider em aprovação 2.</li>
        <li>A auto escola lider em aprovação 3.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    {/* <Container> */}
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>MLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Feature>
      </Grid>
    </Section>
    {/* </Container> */}
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Marlon Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            fugiat esse et, consectetur est nisi eum rem nesciunt ratione dolore
            saepe quas? Pariatur eum voluptatum asperiores eaque magnam. Facere,
            voluptas!
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
