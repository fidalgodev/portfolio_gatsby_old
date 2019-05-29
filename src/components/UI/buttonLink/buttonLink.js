import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  outline: none;
  background: ${({ solid }) => (solid ? 'var(--primary)' : 'transparent')};
  color: ${({ solid }) => (solid ? 'var(--white)' : 'var(--text-highlight)')};
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  font-weight: 700;
  border: ${({ solid }) => (solid ? '1px transparent' : '1px solid')};
  border-radius: 10rem;
  font-size: 1rem;
  padding: 1rem 3.5rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: ${({ solid }) =>
    solid ? '0 5px 15px var(--shadow-btn)' : 'none'};
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ solid }) =>
      solid ? '0 6px 20px var(--shadow-btn)' : 'none'};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ solid }) =>
      solid ? '0 3px 10px var(--shadow-btn)' : 'none'};
  }
`;

const ButtonLink = ({ children, solid, ...rest }) => (
  <StyledLink solid={solid} target="_blank" {...rest}>
    {children}
  </StyledLink>
);

export default ButtonLink;
