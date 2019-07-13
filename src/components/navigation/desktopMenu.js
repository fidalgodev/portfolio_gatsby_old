import React from 'react';

import NavItems from './navItems/navItems';
import DarkModeToggle from '../UI/darkModeToggle';

const DesktopMenu = ({ notOnePageSection }) => {
  return notOnePageSection ? null : (
    <>
      <NavItems />
      <DarkModeToggle />
    </>
  );
};

export default DesktopMenu;
