import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
 
  display: flex;
  height: 100vh;
`;
