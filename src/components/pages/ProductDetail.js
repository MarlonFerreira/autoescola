import React from "react";
import PropTypes from "prop-types";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";
import HeroImage from "assets/hero.jpg";
import SpeedImage from "draws/Speed";
import styled from "styled-components";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Nome do serviço</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: "Nome do serviço" },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        blanditiis porro totam eos fuga eligendi architecto maxime, earum
        accusantium neque veniam dicta quas, atque quae animi rerum repellendus
        quis cum?
      </p>
      <p>
        Recusandae illum nobis quo laboriosam id? Commodi excepturi, deleniti
        odit cumque beatae nesciunt sequi dolorum nam nisi incidunt possimus
        eum, alias iusto error quas quidem accusantium ipsum. Dignissimos,
        voluptatem mollitia.
      </p>
      <p>
        Provident cumque nulla error sapiente eligendi, nisi fuga hic, ea
        accusamus est, voluptas quod? Voluptate recusandae quis neque eius totam
        assumenda sequi sint obcaecati. Dolorem accusantium dolore sunt nihil
        necessitatibus.
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça a sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            ut est iure, nihil veritatis officiis excepturi consequuntur nobis
            deserunt laborum libero nemo ducimus omnis at blanditiis
            reprehenderit aperiam. Cum, consectetur!
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage></SpeedImage>
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
