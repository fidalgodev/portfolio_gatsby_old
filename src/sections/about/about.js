import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  min-height: 100vh;
  background-color: red;
`;

const About = () => {
  return <StyledSection id="about-me">This is the about me</StyledSection>;
};

export default About;
