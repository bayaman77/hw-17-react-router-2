import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Schedule = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Schedule Page</Title>
        <Link to="/notifications">
          <Button>Go to Notifications Page</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Schedule;

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
`;

const Title = styled.h2`
    font-weight: normal;
    margin-bottom: 50px;
`
