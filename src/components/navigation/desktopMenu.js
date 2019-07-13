import React from 'react';

import NavItems from './navItems/navItems';
import DarkModeToggle from '../UI/darkModeToggle';

const DesktopMenu = ({}) => {
  return (
    <>
      <NavItems />
      <DarkModeToggle />
    </>
  );
};

export default DesktopMenu;
