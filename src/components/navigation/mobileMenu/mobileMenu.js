import React from 'react';
import styled from 'styled-components';

import NavItems from '../navItems/navItems';
import HamburgerToggler from './hamburgerToggle/hamburgerToggle';
import DarkModeToggle from '../../UI/darkModeToggle/darkModeToggle';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: var(--background);
  width: 100%;
  height: 100vh;
  display: flex;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`;

const MobileMenu = ({ menuOpened, setMenuOpened }) => {
  return (
    <>
      <HamburgerToggler
        menuOpened={menuOpened}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened ? (
        <BackgroundWrapper>
          <Wrapper>
            <NavItems mobile clicked={() => setMenuOpened(false)} />
            <DarkModeToggle mobile />
          </Wrapper>
        </BackgroundWrapper>
      ) : null}
    </>
  );
};

export default MobileMenu;
