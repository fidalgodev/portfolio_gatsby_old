import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const ScrollDownWrapper = styled(animated.div)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  bottom: 0;
  left: 50%;
  margin-bottom: 3rem;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translate(-50%, -3px);
  }

  &:active {
    transform: translate(-50%, 1px);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--primary-light);
  font-size: 2rem;
`;

const ScrollDown = () => {
  const ScrollDownSpring = useSpring({
    config: config.wobbly,
    delay: 500,
    opacity: 1,
    transform: 'translate(-50%, 0px)',
    from: {
      opacity: 0,
      transform: 'translate(-50%, 40px)',
    },
  });
  return (
    <ScrollDownWrapper style={ScrollDownSpring}>
      <Link to="about-me" spy={true} smooth={true}>
        <StyledIcon icon={faChevronDown} />
      </Link>
    </ScrollDownWrapper>
  );
};

export default ScrollDown;
