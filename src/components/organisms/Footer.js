import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  /* display: block; */
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Marlon Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            corporis illo nulla. Non, illo, deserunt aperiam maxime, culpa
            pariatur tempora dolorum ipsam esse quaerat eaque obcaecati
            quibusdam eveniet rem exercitationem?
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (14) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            corporis illo nulla.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="https://www.facebook.com">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://www.linkedin.com">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://www.twitter.com">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
