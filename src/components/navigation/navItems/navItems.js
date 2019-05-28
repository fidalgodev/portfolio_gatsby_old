import React from 'react';
import styled from 'styled-components';

import NavItem from './navItem/navItem';

const LINKS = ['About me', 'Portfolio', 'Contact'];

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-right: ${({ mobile }) => (mobile ? '0rem' : '4rem')};
  }
`;

const NavItems = ({ mobile, clicked }) => (
  <StyledNav mobile={mobile}>
    {LINKS.map(link => (
      <NavItem link={link} clicked={clicked} />
    ))}
  </StyledNav>
);

export default NavItems;
