import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showModalHandler = () => {
    searchParams.set("modal", 'addNewMaterial');
    setSearchParams(searchParams);
  };

  const closeModalHandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  return (
    <MaterialsPage>
      <StyledButton onClick={showModalHandler}>Add new material</StyledButton>
      {searchParams.has("modal") && (
        <Modal onClose={closeModalHandler}>
          <TitleModal>Add new material</TitleModal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae
            soluta assumenda alias cupiditate necessitatibus tempore mollitia
            recusandae nisi consequuntur porro repudiandae cum, minima
            doloremque repellat similique quidem, quo atque.
          </p>
        </Modal>
      )}
      <MaterialsList>
        <Item>
          <p>Material 1</p>
          <Link to='/courses/materials/1/details'><Button>Details</Button></Link>
          
        </Item>
        <Item>
          <p>Material 2</p>
          <Link to='/courses/materials/2/details'><Button>Details</Button></Link>
        </Item>
      </MaterialsList>
    </MaterialsPage>
  );
};

export default Materials;

const StyledButton = styled.button`
  background-color: #e8833a;
  padding: 10px 40px;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  align-self: flex-end;
  cursor: pointer;
`;

const MaterialsList = styled.ul`
  list-style: none;
`;

const MaterialsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  margin: 15px 0;
  padding: 10px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const TitleModal = styled.h2`
  margin-bottom: 20px;
  font-weight: normal;
`;
