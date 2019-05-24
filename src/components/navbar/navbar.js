import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import useDarkMode from 'use-dark-mode';

import Img from 'gatsby-image';
import NavItems from './navItems/navItems';
import { Contained } from '../elements/styled';
import DarkModeToggle from './darkModeToggle/darkModeToggle';

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
  justify-content: space-between;
  height: 6rem;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const Navbar = ({ showScrollUp, hideScrollTop }) => {
  const darkMode = useDarkMode(false);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "logo" } }) {
        nodes {
          name
          childImageSharp {
            fixed(height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const logos = data.allFile.nodes.reduce((acc, current) => {
    current.name.includes('dark')
      ? (acc.dark = current)
      : (acc.light = current);
    return acc;
  }, {});

  return (
    <StyledHeader>
      <Contained>
        <Wrapper>
          <StyledLink
            to="header"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={hideScrollTop}
            onSetInactive={showScrollUp}
          >
            <Img
              alt="Logo"
              title="Logo"
              fixed={
                darkMode.value
                  ? logos.light.childImageSharp.fixed
                  : logos.dark.childImageSharp.fixed
              }
            />
          </StyledLink>
          <StyledNav>
            <NavItems />
          </StyledNav>
          <DarkModeToggle darkMode={darkMode} />
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
