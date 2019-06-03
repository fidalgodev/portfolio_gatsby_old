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
  letter-spacing: 1.5px;
  border: ${({ solid }) => (solid ? '1px transparent' : '1px solid')};
  border-radius: 10rem;
  font-size: 1rem;
  padding: 1.2rem 2.8rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: ${({ solid }) =>
    solid ? '0px 8px 15px var(--shadow-color)' : 'none'};
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ solid }) =>
      solid ? '0px 15px 20px var(--shadow-btn)' : 'none'};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ solid }) =>
      solid ? '0 3px 10px var(--shadow-btn)' : 'none'};
  }

  @media ${props => props.theme.mediaQueries.small} {
    padding: 1.1rem 2.6rem;
  }
`;

const ButtonLink = ({ children, solid, ...rest }) => (
  <StyledLink solid={solid} {...rest}>
    {children}
  </StyledLink>
);

export default ButtonLink;
