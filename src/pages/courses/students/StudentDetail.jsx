import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";

const StudentDetail = () => {
  const param = useParams();
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <Title>Student Details Page </Title>
      <p>Student Name {param.id}</p>
    </Wrapper>
  );
};

export default StudentDetail;

const Wrapper = styled.div`
height: 100%;
  background-color: #fff;
  padding: 30px 20px;
`;

const Title = styled.p`
    margin: 20px 0;
`
