import React from 'react';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFile } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

import ScrollLink from '../components/utils/scrollLink';
import Heading from '../components/UI/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import ButtonLink from '../components/UI/buttonLink';

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
    width: 95%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const CustomSpan = styled.span`
  position: relative;
  font-style: italic;
  color: var(--white);
  font-weight: 600;
  display: inline-block;
  word-break: break-word;
  white-space: normal;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    background: var(--primary);
  }
`;

const StackTitle = styled.h2`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 2rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
`;

// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { 'scroll-link': ScrollLink, span: CustomSpan },
}).Compiler;

const About = () => {
  const { aboutMe, siteUrl } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        childMarkdownRemark {
          frontmatter {
            stack
            curriculum
            creativeCurriculum
          }
          htmlAst
        }
      }
      siteUrl: site {
        siteMetadata {
          siteUrl
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
            subtitle="If you’re <span>wondering</span> who <span>I am</span>…"
          />
          <AboutText>
            {renderCustom(aboutMe.childMarkdownRemark.htmlAst)}
            <StackTitle>
              My current <CustomSpan>stack</CustomSpan> of{' '}
              <CustomSpan>languages/technologies</CustomSpan> is:
            </StackTitle>
            <Stack>{aboutMe.childMarkdownRemark.frontmatter.stack}</Stack>
          </AboutText>
          <ButtonsWrapper>
            <ButtonLink
              solid
              target="_blank"
              rel="noreferrer"
              href={`${siteUrl.siteMetadata.siteUrl}/${
                aboutMe.childMarkdownRemark.frontmatter.creativeCurriculum
              }`}
            >
              <StyledIcon icon={faPaperPlane} />
              Resume
            </ButtonLink>
            <ButtonLink
              target="_blank"
              rel="noreferrer"
              href={`${siteUrl.siteMetadata.siteUrl}/${
                aboutMe.childMarkdownRemark.frontmatter.curriculum
              }`}
            >
              <StyledIcon icon={faFile} />
              Curriculum
            </ButtonLink>
          </ButtonsWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;
