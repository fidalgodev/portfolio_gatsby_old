import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/utils/seo';

// Sections
import Header from '../sections/header/header';
import About from '../sections/about/about';
import Portfolio from '../sections/portfolio/portfolio';
import Contact from '../sections/contact/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
