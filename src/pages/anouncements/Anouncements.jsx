import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Anouncements = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Anouncements Page</Title>
        <Link to="/courses/students">
          <Button>Go to Students Page</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Anouncements;

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
`;

const Title = styled.h2`
    font-weight: normal;
    margin-bottom: 50px;
`
