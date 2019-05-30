import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 7rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 1rem;
  color: var(--primary-light);
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s ease-out;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: var(--text);
  font-weight: 400;
  transition: color 0.2s ease-out;

  & span {
    color: var(--text-highlight);
    font-style: italic;
    font-weight: 600;
    transition: color 0.2s ease-out;
  }
`;

const Heading = ({ title, subtitle }) => {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      <SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    </HeadingWrapper>
  );
};

export default Heading;
