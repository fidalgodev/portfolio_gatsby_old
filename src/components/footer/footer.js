import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 4rem;
  background-color: var(--footer);
  color: var(--navbar);
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>Copyright © {new Date().getFullYear()}, Fidalgo</StyledFooter>
  );
};

export default Footer;
