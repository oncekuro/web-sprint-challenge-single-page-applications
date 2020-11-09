import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Jumbotron } from "reactstrap";

export default function NavBar() {
  return (
    <StyledNav>
      <Jumbotron fluid>
        <StyledH1 className="display-3">Lambda Eats</StyledH1>
        <ul className="nav-links">
          <ButtonGroup>
            <Link to="/">
              <Button color="secondary" size="lg">
                Home
              </Button>
            </Link>
            <Link to="/">
              <Button color="secondary" size="lg">
                Directions
              </Button>
            </Link>
            <Link to="/Order">
              <Button color="secondary" size="lg">
                Order
              </Button>
            </Link>
          </ButtonGroup>
        </ul>
      </Jumbotron>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 10vh;
  background: #efefef;
  color: Red;
  max width: 1000px;
`;

const StyledH1 = styled.h1`
  font-weight: 600;
  margin: 0 auto;
  max width: 1000px;
`;

// const StyledH3 = styled.h3`
//   font-size: 1.9rem;
//   color: black;
// `;
