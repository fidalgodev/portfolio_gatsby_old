import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const ScrollDownWrapper = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  bottom: 0;
  left: 50%;
  margin-bottom: 2rem;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

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
  return (
    <ScrollDownWrapper>
      <Link
        to="about-me"
        activeClass="active"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
      >
        <StyledIcon icon={faChevronDown} />
      </Link>
    </ScrollDownWrapper>
  );
};

export default ScrollDown;
