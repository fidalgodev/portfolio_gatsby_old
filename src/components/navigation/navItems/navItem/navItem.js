import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 1rem 0;
    font-size: 1.6rem;
  }
`;

const NavItem = ({ children, clicked, ...rest }) => (
  <StyledLink activeClassName="active" onClick={clicked} {...rest}>
    {children}
  </StyledLink>
);

export default NavItem;
