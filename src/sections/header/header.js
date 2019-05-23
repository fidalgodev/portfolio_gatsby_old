import React from 'react';
import styled from 'styled-components';

import BackgroundLogo from './backgroundLogo';

const StyledSection = styled.section`
  display: flex;
  z-index: 8;
  background-color: var(--background);
  position: relative;
  min-height: calc(100vh - 6rem);
  width: 100%;
`;

const Header = () => {
  return (
    <StyledSection>
      <BackgroundLogo />
      Pedro
    </StyledSection>
  );
};

export default Header;
