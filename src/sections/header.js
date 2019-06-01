import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSpring, useTransition, animated, config } from 'react-spring';

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

const Title = styled(animated.h1)`
  font-weight: 200;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 6rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 4rem;
  }

  & span {
    font-weight: 600;
    color: var(--primary-light);
    transition: color 0.2s ease-out;
  }
`;

const SubTitle = styled(animated.h2)`
  color: var(--text);
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.5rem;
  }

  & span {
    font-weight: 600;
    width: 110px;
    position: relative;
    display: inline-block;
    text-align: center;
    font-style: italic;
    color: var(--text-highlight);
    transition: color 0.2s ease-out;

    @media ${props => props.theme.mediaQueries.large} {
      width: 100px;
    }

    @media ${props => props.theme.mediaQueries.medium} {
      width: 95px;
    }

    @media ${props => props.theme.mediaQueries.small} {
      width: 90px;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
      width: 85px;
    }
  }
`;

const spans = [
  { id: 0, text: 'self-taught' },
  { id: 1, text: 'fast learner' },
  { id: 2, text: 'passionate' },
];

const Header = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const spansTransition = useTransition(spans[index], item => item.id, {
    config: config.stiff,
    delay: 450,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex(state => (state + 1) % spans.length),
        2500
      ),
    []
  );

  // Title animation
  const TitleProps = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  // Sub title animation
  const SubTitleProps = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  // Button animation
  const ButtonProps = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledSection fullHeight id="header">
      <BackgroundLogo />
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title style={TitleProps}>
              Hello{' '}
              <span role="img" aria-label="Cool hand emoji">
                ✌🏼
              </span>
              ,
              <br />
              I'm <span>Fidalgo</span>
            </Title>
            <SubTitle style={SubTitleProps}>
              A{' '}
              <span>
                <i style={{ visibility: 'hidden' }}>self-taught</i>
                {spansTransition.map(({ item, props, key }) => (
                  <animated.span key={key} style={props}>
                    {item.text}
                  </animated.span>
                ))}
              </span>{' '}
              Front-end developer
            </SubTitle>
            <Link to="about-me" spy={true} hashSpy={true} smooth={true}>
              <Button style={ButtonProps}>About me</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Header;
