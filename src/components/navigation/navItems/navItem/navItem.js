import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 1rem 0;
    font-size: 1.6rem;
  }
`;

const NavItem = ({ link, clicked }) => (
  <StyledLink
    onClick={clicked}
    to={`${link
      .split(' ')
      .join('-')
      .toLowerCase()}`}
    spy={true}
    smooth={true}
  >
    {link}
  </StyledLink>
);

export default NavItem;
