import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import useDarkMode from 'use-dark-mode';

import Img from 'gatsby-image';
import { Contained } from '../../layout/elements';
import DesktopMenu from '../desktopMenu/desktopMenu';
import MobileMenu from '../mobileMenu/mobileMenu';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: all 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
`;

const StyledLogo = styled(Img)``;

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
`;

const Navbar = ({ showScrollUp, hideScrollTop }) => {
  const darkMode = useDarkMode(false);
  const [isMobile, setisMobile] = useState(null);

  // Change navbar content accordingly
  const changeMobile = () => {
    window.matchMedia('(max-width: 37.5em)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    query {
      darkLogo: file(relativePath: { eq: "logo/logo_dark.png" }) {
        name
        childImageSharp {
          fixed(height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lightLogo: file(relativePath: { eq: "logo/logo_light.png" }) {
        name
        childImageSharp {
          fixed(height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <Contained>
        <Wrapper isMobile={isMobile}>
          <StyledLink
            to="header"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={hideScrollTop}
            onSetInactive={showScrollUp}
          >
            {darkMode.value ? (
              <StyledLogo
                alt="Logo"
                title="Logo"
                fixed={lightLogo.childImageSharp.fixed}
              />
            ) : (
              <StyledLogo
                alt="Logo"
                title="Logo"
                fixed={darkLogo.childImageSharp.fixed}
              />
            )}
          </StyledLink>
          {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </Wrapper>
      </Contained>
    </StyledHeader>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
