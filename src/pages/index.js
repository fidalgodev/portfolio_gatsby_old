import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { StyledSection } from '../layouts/elements';
import Heading from '../components/UI/heading';

const ImageWrapper = styled.div`
  width: 90%;

  margin: 0 auto;
`;

const StyledImg = styled(Img)`
  border-radius: 5px;
  box-shadow: 0 2rem 3rem var(--shadow-colorDark);
`;

const IndexPage = () => {
  const { setup } = useStaticQuery(graphql`
    query {
      setup: file(relativePath: { eq: "setup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1250, quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledSection fullHeight>
      <Heading
        title="setup"
        subtitle="Setup <span>details</span>, VS Code <span>theme</span>, font and <span>more</span>..."
      />
      <ImageWrapper>
        <StyledImg fluid={setup.childImageSharp.fluid} />
      </ImageWrapper>
    </StyledSection>
  );
};
export default IndexPage;
