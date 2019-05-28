import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Heading from '../../components/elements/heading/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../../components/elements/styled';

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2;
  width: 85%;
  word-break: break-word;
  margin: 0 auto;
  text-align: center;

  & strong {
    color: var(--text-highlight);
    position: relative;
    font-weight: 600;

    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: rotate(-2deg);
      background: var(--primary-light);
    }
  }

  & em {
    color: var(--text-highlight);
    font-weight: 600;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 500;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary-light);
    }
  }
`;

const About = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);
  console.log(aboutMe);

  return (
    <StyledSection id="about-me">
      <Contained>
        <Wrapper>
          <Heading
            title="About me"
            subtitle="If you’re <span>wondering</span> who the f*** am I…"
          />
          <AboutText
            dangerouslySetInnerHTML={{
              __html: aboutMe.childMarkdownRemark.html,
            }}
          />
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;
