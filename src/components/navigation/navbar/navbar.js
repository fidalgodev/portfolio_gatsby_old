import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Contained } from '../../layout/elements';
import DesktopMenu from '../desktopMenu/desktopMenu';
import MobileMenu from '../mobileMenu/mobileMenu';
import Logo from './logo/logo';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
`;

const Navbar = ({ notOnePageSection }) => {
  const [isMobile, setisMobile] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);

  // Change navbar content accordingly
  const changeMobile = () => {
    window.matchMedia('(max-width: 37.5em)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };

  // Event listener on resize, so when it change we check o remove desktop menu/mobile menu
  // Better than CSS media query because we dont keep both DOM nodes
  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <StyledHeader>
      <Contained>
        <Wrapper isMobile={isMobile}>
          <Logo
            notOnePageSection={notOnePageSection}
            setMenuOpened={setMenuOpened}
          />
          {isMobile ? (
            <MobileMenu
              notOnePageSection={notOnePageSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
          ) : (
            <DesktopMenu notOnePageSection={notOnePageSection} />
          )}
        </Wrapper>
      </Contained>
    </StyledHeader>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
