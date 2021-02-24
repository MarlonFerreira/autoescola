import React, { useState } from "react";
import PropTypes from "prop-types";

import Grid from "components/atoms/Grid";
import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import styled from "styled-components";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

// Para fazer todos os cards terem a mesma altura.
// Descomentar o conteudo do styled abaixo e adicionar min-height no StyledCard do Card.js
const Adjustment = styled.div`
  /* position: relative;
  height: 500px; */

  Button {
    /* position: absolute;
    bottom: 0; */
  }
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Adjustment key={product.id}>
            <Card>
              <CardMedia image={product.image} />
              <CardBody>
                <Heading>
                  <h6>{product.title}</h6>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button color="primary" variant="link">
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Adjustment>
        ))}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button
            onClick={() => {
              setShowAll(true);
            }}
            variant="outlined"
          >
            Lista completa de serviços
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
