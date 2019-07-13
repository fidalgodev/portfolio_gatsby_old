import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

import NavItem from './navItem/navItem';

const LINKS = [
  { name: 'Setup', to: '/' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Recommendations', to: '/recommendations' },
];

const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'flex-end')};
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-right: ${({ mobile }) => (mobile ? '0rem' : '4rem')};
  }
`;

const NavItems = ({ mobile, clicked }) => {
  // Animation
  const navItemsTrail = useTrail(LINKS.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      display: 'flex',
      cursor: 'pointer',
    },
  });

  return (
    <StyledNav mobile={mobile ? 1 : 0}>
      {navItemsTrail.map((propStyles, index) => (
        <animated.div key={LINKS[index].name} style={propStyles}>
          <NavItem to={LINKS[index].to} clicked={clicked}>
            {LINKS[index].name}
          </NavItem>
        </animated.div>
      ))}
    </StyledNav>
  );
};

export default NavItems;
