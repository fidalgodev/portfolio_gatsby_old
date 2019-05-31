import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import useDarkMode from 'use-dark-mode';

import ScrollToTop from '../../../UI/scrollToTop/scrollToTop';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
`;

const GatsbyStyledLink = styled(GatsbyLink)`
  cursor: pointer;
  display: flex;
`;

const StyledLogo = styled(Img)``;

const Logo = ({ notOnePageSection, setMenuOpened }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { value: darkMode } = useDarkMode(false);
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    query {
      darkLogo: file(relativePath: { eq: "logo/logo_dark.png" }) {
        childImageSharp {
          fixed(height: 35, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lightLogo: file(relativePath: { eq: "logo/logo_light.png" }) {
        childImageSharp {
          fixed(height: 35, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  // Render dark or light logo
  const renderLogo = () => {
    return darkMode ? (
      <StyledLogo
        alt="Logo Light"
        title="Logo Light"
        fixed={lightLogo.childImageSharp.fixed}
      />
    ) : (
      <StyledLogo
        alt="Logo Dark"
        title="Logo Dark"
        fixed={darkLogo.childImageSharp.fixed}
      />
    );
  };

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return notOnePageSection ? (
    <GatsbyStyledLink to="/#about-me">{renderLogo()}</GatsbyStyledLink>
  ) : (
    <>
      <StyledLink
        to="header"
        smooth={true}
        duration={500}
        spy={true}
        // When header section is active, hide scroll to top When inactive, show scroll to top
        onSetActive={() => setShowScrollTop(false)}
        onSetInactive={() => setShowScrollTop(true)}
        onClick={() => setMenuOpened(false)}
      >
        {renderLogo()}
      </StyledLink>
      {showScrollTop && <ScrollToTop />}
    </>
  );
};

export default Logo;
