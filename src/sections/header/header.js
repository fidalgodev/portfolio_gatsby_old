import React from 'react';
import styled from 'styled-components';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../../components/elements/styled';

import BackgroundLogo from './backgroundLogo';
import ScrollDown from '../../components/elements/scrollDown/scrollDown';

const Header = () => {
  return (
    <StyledSection fullHeight noMargin id="header">
      <BackgroundLogo />
      <Contained>
        <Wrapper>
          <h1>Intro here</h1>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Header;
