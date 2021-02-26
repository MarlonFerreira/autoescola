import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region CardBody

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CardMedia

const StyledMedia = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
  /* background-repeat: no-repeat; */
  /* background-color: #cccccc; */
  /* max-width: 950px; */
`;

export const CardMedia = ({ image, children }) => (
  <StyledMedia image={image}>{children}</StyledMedia>
);

CardMedia.defaultProps = {
  image: undefined,
  children: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

//#endregion

//#region CardMediaDescription
const StyledMediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }) => (
  <StyledMediaDescription>{children}</StyledMediaDescription>
);

CardMediaDescription.defaultProps = {
  children: undefined,
};

CardMediaDescription.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region Card

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.boder};
  overflow: hidden;
  /* min-height: 500px; */
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

//#endregion

// import React from "react";
// import PropTypes from "prop-types";

// import Heading from "components/atoms/Heading";
// import Button from "components/atoms/Button";
// import styled from "styled-components";

// const Root = styled.div`
//   background-color: #fff;
//   border-radius: 4px;
// `;

// const Body = styled.div`
//   padding: 16px;

//   h6 {
//     margin-top: 0;
//   }
// `;

// const Card = () => (
//   <Root>
//     <div />
//     <Body>
//       <Heading>
//         <h6>Titulo</h6>
//       </Heading>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       <div>
//         <Button color="primary" variant="link">
//           Saiba mais
//         </Button>
//       </div>
//     </Body>
//   </Root>
// );

// Card.defaultProps = {};

// Card.propTypes = {};

// export default Card;
