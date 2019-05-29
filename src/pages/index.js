import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/utils/seo';

// Sections
import Header from '../sections/header';
import About from '../sections/about';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';

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
