import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const ScrollLink = ({ to, children }) => (
  <StyledLink
    to={to}
    activeClass="active"
    spy={true}
    offset={-55}
    hashSpy={true}
    smooth={true}
    duration={500}
  >
    {children}
  </StyledLink>
);

export default ScrollLink;
