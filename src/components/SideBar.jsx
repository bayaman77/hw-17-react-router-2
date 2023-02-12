import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Logo>PEAKSOFT</Logo>
      <NavList>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#33404e" : "#5ba2e1",
              background: isActive ? "#e3cff3" : "white",
            })}
            to="/courses"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#33404e" : "#5ba2e1",
              background: isActive ? "#e3cff3" : "white",
            })}
            to="/anouncements"
          >
            Anouncements
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#33404e" : "#5ba2e1",
              background: isActive ? "#e3cff3" : "white",
            })}
            to="/notifications"
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#33404e" : "#5ba2e1",
              background: isActive ? "#e3cff3" : "white",
            })}
            to="/schedule"
          >
            Schedule
          </NavLink>
        </li>
      </NavList>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  width: 17vw;
  background-color: #e6e4de;
`;

const Logo = styled.h2`
  padding: 40px;
  color: #822dc6;
  height: 20%;
`;

const NavList = styled.ul`
  margin-top: 50px;
  list-style: none;
  a {
    font-size: 20px;
    display: block;
    padding: 5px 20px;
    text-decoration: none;
  }
`;
