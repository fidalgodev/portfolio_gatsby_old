import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/utils/seo';

// Sections
import Header from '../sections/header/header';
import About from '../sections/about/about';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <About />
  </Layout>
);

export default IndexPage;
