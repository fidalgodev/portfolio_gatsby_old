import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

const WORDS = [
  { id: 0, text: 'self-taught' },
  { id: 1, text: 'fast learner' },
  { id: 2, text: 'passionate' },
];

const Span = styled.span`
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
`;

const wordsTransition = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const spansTransition = useTransition(WORDS[index], span => span.id, {
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
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex(current => (current + 1) % WORDS.length),
        2500
      ),
    []
  );
  return (
    <Span>
      <i style={{ visibility: 'hidden' }}>self-taught</i>
      {spansTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Span>
  );
};

export default wordsTransition;
