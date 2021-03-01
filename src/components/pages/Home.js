import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

// import Container from "components/atoms/Container";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import HeroImage from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";
import ProductType from "types/ProductType";

const Home = ({ products }) => (
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
        <ProductGrid products={products} />
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
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          quos architecto at quod minima id, unde cumque ea reiciendis aliquid
          exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          quos architecto at quod minima id, unde cumque ea reiciendis aliquid
          exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum
          quos architecto at quod minima id, unde cumque ea reiciendis aliquid
          exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: PropTypes.arrayOf(ProductType),
};

Home.propTypes = {};

export default Home;
