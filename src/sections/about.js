import React from 'react';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import ScrollLink from '../components/utils/scrollLink';
import Heading from '../components/UI/heading/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2;
  width: 85%;
  margin: 0 auto;
  text-align: center;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary-light);
    }
  }
`;

const CustomSpan = styled.span`
  position: relative;
  font-style: italic;
  color: var(--text-highlight);
  font-weight: 600;
  box-decoration-break: clone;
  background: var(--primary-light);

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
`;

// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { 'scroll-link': ScrollLink, span: CustomSpan },
}).Compiler;

const About = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  `);

  return (
    <StyledSection id="about-me">
      <Contained>
        <Wrapper>
          <Heading
            title="About me"
            subtitle="If you’re <span>wondering</span> who the f*** am I…"
          />
          <AboutText>
            {renderCustom(aboutMe.childMarkdownRemark.htmlAst)}
          </AboutText>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;
