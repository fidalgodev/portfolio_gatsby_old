import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import { animated } from 'react-spring';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  margin-right: 1.5rem;
  bottom: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: 0px 8px 15px var(--shadow-color);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 3rem;
    height: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-bottom: 2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--white);
  font-size: 1.2rem;
`;

const ScrollToTop = ({ style }) => {
  return (
    <StyledWrapper style={style} onClick={() => scroll.scrollToTop()}>
      <StyledIcon icon={faChevronUp} />
    </StyledWrapper>
  );
};

export default ScrollToTop;
