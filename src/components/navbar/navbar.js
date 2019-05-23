import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Img from 'gatsby-image';
import NavItems from './navItems/navItems';
import Contained from '../elements/contained/contained';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
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

const Navbar = () => {
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
          <AnchorLink href="#header">
            <Img
              alt="Logo"
              title="Logo"
              fixed={logos.dark.childImageSharp.fixed}
            />
          </AnchorLink>
          <StyledNav>
            <NavItems />
          </StyledNav>
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
