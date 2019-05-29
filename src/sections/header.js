import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import BackgroundLogo from '../components/UI/backgroundLogo/backgroundLogo';
import ScrollDown from '../components/UI/scrollDown/scrollDown';
import Button from '../components/UI/button/button';

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 200;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  & span {
    font-weight: 600;
    color: var(--primary-light);
    transition: color 0.2s ease-out;
  }
`;

const SubTitle = styled.h2`
  color: var(--text);
  font-weight: 300;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  & span {
    font-weight: 600;
    font-style: italic;
    color: var(--text-highlight);
    transition: color 0.2s ease-out;
  }
`;

const Header = () => {
  return (
    <StyledSection fullHeight id="header">
      <BackgroundLogo />
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title>
              Hello ✌🏼,
              <br />
              I'm <span>Fidalgo</span>
            </Title>
            <SubTitle>
              A <span>self-taught</span> Front-end developer
            </SubTitle>
            <Link to="about-me" spy={true} smooth={true} duration={500}>
              <Button>About me</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Header;
