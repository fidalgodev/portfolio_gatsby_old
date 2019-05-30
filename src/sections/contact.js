import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import useDarkMode from 'use-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import Heading from '../components/UI/heading/heading';

const Email = styled.a`
  color: var(--text-highlight);
  font-size: 2rem;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 4rem;
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }
`;

const LogoImage = styled(Img)`
  width: 15%;
  margin-bottom: 1.5rem;
`;

const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

const Contact = () => {
  const { value: darkMode } = useDarkMode(false);
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    query {
      darkLogo: file(relativePath: { eq: "logo/logovertical_black.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lightLogo: file(relativePath: { eq: "logo/logovertical_white.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledSection fullHeight id="contact">
      <Contained>
        <Wrapper>
          <Heading
            title="Contact me"
            subtitle="If you want to <span>talk</span>, you can <span>find me</span> at:"
          />
          <Email href="mailto:hello@fidalgo.dev">hello@fidalgo.dev</Email>
          <SocialWrapper>
            <StyledLink rel="noreferrer">
              <StyledIcon icon={faGithub} />
            </StyledLink>
            <StyledLink rel="noreferrer">
              <StyledIcon icon={faFacebookF} />
            </StyledLink>
            <StyledLink rel="noreferrer">
              <StyledIcon icon={faLinkedinIn} />
            </StyledLink>
            <StyledLink rel="noreferrer">
              <StyledIcon icon={faInstagram} />
            </StyledLink>
            <StyledLink rel="noreferrer">
              <StyledIcon icon={faYoutube} />
            </StyledLink>
          </SocialWrapper>
          {darkMode ? (
            <LogoImage fluid={lightLogo.childImageSharp.fluid} />
          ) : (
            <LogoImage fluid={darkLogo.childImageSharp.fluid} />
          )}

          <CopyRight>Copyright © {new Date().getFullYear()}, Fidalgo</CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Contact;
