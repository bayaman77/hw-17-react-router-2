import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesHeader>
        <NavBar/>
      </CoursesHeader>
      <Container>
        <Outlet />
      </Container>
    </CoursesContainer>
  );
};

export default Courses;

const CoursesContainer = styled.div`
  width: 83vw;
  display: flex;
  flex-direction: column;
`;

const CoursesHeader = styled.div`
  background-color: #2c88d9;
  padding: 30px 20px;
`;


