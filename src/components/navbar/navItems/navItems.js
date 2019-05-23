import React from 'react';
import NavItem from './navItem/navItem';

const LINKS = ['About me', 'Portfolio', 'Contact'];

const NavItems = () => LINKS.map(link => <NavItem link={link} />);

export default NavItems;
