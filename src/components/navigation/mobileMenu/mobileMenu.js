import React from 'react';
import styled from 'styled-components';

import HamburgerToggler from './hamburgerToggle/hamburgerToggle';
import SideDrawer from './sideDrawer/sideDrawer';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: var(--background);
  width: 100%;
  max-width: 100vw;
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

const MobileMenu = ({ notOnePageSection, menuOpened, setMenuOpened }) => {
  // If on 404 page, dont render menu, because menu links are from react-scroll, won't work there. Logo is prepared to be clicked and will work
  return notOnePageSection ? null : (
    <>
      <HamburgerToggler
        menuOpened={menuOpened}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && <SideDrawer setMenuOpened={() => setMenuOpened(false)} />}
    </>
  );
};

export default MobileMenu;
