import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = styled(AnchorLink)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  transition: all 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

const NavItem = ({ link }) => (
  <Link
    href={`#${link
      .split(' ')
      .join('-')
      .toLowerCase()}`}
  >
    {link}
  </Link>
);

export default NavItem;
