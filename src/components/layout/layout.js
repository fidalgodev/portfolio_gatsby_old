import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import GlobalStyles from '../../utils/styles/global';
import theme from '../../utils/styles/theme';
import SEO from '../utils/seo';

import Navbar from '../navigation/navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Layout = ({ notOnePageSection, children }) => {
  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== 'undefined' && window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== 'undefined' &&
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    changeVhVariable();
    // window.addEventListener('resize', changeVhVariable);
    // return () => window.removeEventListener('resize', changeVhVariable);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SEO />
        <Navbar notOnePageSection={notOnePageSection} />
        <StyledMain>{children}</StyledMain>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
