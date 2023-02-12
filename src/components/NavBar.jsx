import React from "react";
import { NavLink}  from "react-router-dom";
import styled from "styled-components";

const NavBar = ({ nav, id }) => {

    const firstPath = nav ? `/courses/materials/${id}/details/submitted` : "/courses/materials"
    const secondPath = nav ? `/courses/materials/${id}/details/waiting` : "/courses/students"
    const thirdPath = nav ? `/courses/materials/${id}/details/late` : "/courses/ratings"
  return (
    <NavList>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#293b4b" : "white",
            borderBottom: isActive && "5px solid #f1c12a",
          })}
          to={firstPath}
        >
          {nav ? "Submitted" : "Material"}
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#293b4b" : "white",
            borderBottom: isActive && "5px solid #f1c12a",
          })}
          to={secondPath}
        >
          {nav ? "Waiting" : "Students"}
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#293b4b" : "white",
            borderBottom: isActive && "5px solid #f1c12a",
          })}
          to={thirdPath}
        >
          {nav ? "Late" : "Raitings"}
        </NavLink>
      </li>
    </NavList>
  );
};

export default NavBar;

const NavList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
  }
`;
