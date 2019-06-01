import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const ScrollLink = ({ to, children }) => (
  <StyledLink to={to} spy={true} smooth={true}>
    {children}
  </StyledLink>
);

export default ScrollLink;
