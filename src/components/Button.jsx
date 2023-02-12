import React from 'react';
import styled from 'styled-components';

const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    background-color: #19ae9f;
    border-radius: 20px;
    padding: 10px 50px;
    border: none;
    color: white;
    cursor: pointer;
`