import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }
`;

const NavItem = ({ link, clicked }) => (
  <StyledLink
    onClick={clicked}
    to={`${link
      .split(' ')
      .join('-')
      .toLowerCase()}`}
    activeClass="active"
    spy={true}
    offset={-55}
    hashSpy={true}
    smooth={true}
    duration={500}
  >
    {link}
  </StyledLink>
);

export default NavItem;
