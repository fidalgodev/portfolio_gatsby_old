import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BackgroundWrapper = styled.div`
  position: absolute;
  top: -6rem;
  overflow: hidden;
  background-color: transparent;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const StyledImage = styled(Img)`
  position: absolute !important;
  user-select: none;
  top: -30%;
  opacity: 0.6;
  right: -10%;
  width: 55%;
  max-width: 100%;
  transform: rotate(-15deg);
`;

const BackgroundLogo = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <BackgroundWrapper>
      <StyledImage fluid={file.childImageSharp.fluid} />
    </BackgroundWrapper>
  );
};

export default BackgroundLogo;
