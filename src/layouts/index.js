import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useTransition } from 'react-spring';
import { throttle } from 'lodash';

import GlobalStyles from '../utils/styles/global';
import theme from '../utils/styles/theme';
import SEO from '../components/utils/seo';

import Navbar from '../components/navigation/navbar';
import ScrollToTop from '../components/UI/scrollToTop';

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

const Layout = ({ children }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);

  // When scroll updates, check if scroll to top should be shown or not
  const scrollUpdated = () => {
    if (window.pageYOffset > (window.innerHeight / 4) * 3)
      setShowScrollTop(true);
    else {
      setShowScrollTop(false);
    }
  };

  // Throttled function
  const scrollUpdatedThrottle = throttle(scrollUpdated, 500);

  useEffect(() => {
    window.addEventListener('scroll', scrollUpdatedThrottle);

    return () => {
      window.removeEventListener('scroll', scrollUpdatedThrottle);
    };
  }, []);

  // Animation
  const ScrollTopTransition = useTransition(showScrollTop, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
        <Navbar />
        <StyledMain>{children}</StyledMain>
        {ScrollTopTransition.map(
          ({ item, key, props }) =>
            item && <ScrollToTop style={props} key={key} />
        )}
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
