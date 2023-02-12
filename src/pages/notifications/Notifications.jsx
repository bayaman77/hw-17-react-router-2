import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Notifications = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Notifications Page</Title>
        <Link to="/courses/materials">
          <Button>Go to Materials Page</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Notifications;

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
`;

const Title = styled.h2`
    font-weight: normal;
    margin-bottom: 50px;
`
