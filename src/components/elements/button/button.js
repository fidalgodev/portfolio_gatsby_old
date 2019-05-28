import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  background: var(--primary);
  color: var(--white);
  text-transform: uppercase;
  font-weight: 700;
  border: 1px transparent;
  border-radius: 10rem;
  font-size: 1.2rem;
  padding: 1.2rem 4.5rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: 0 5px 15px var(--shadow-btn);
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-btn);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px var(--shadow-btn);
  }
`;

const Button = ({ children, solid, ...rest }) => (
  <StyledButton solid={solid} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
