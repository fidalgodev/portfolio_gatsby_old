import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledImage = styled(Img)`
  position: absolute !important;
  user-select: none;
  background-color: transparent;
  top: -30%;
  overflow: hidden;
  opacity: 0.5;
  right: -10%;
  width: 55%;
  transform: rotate(-15deg);
`;

const BackgroundLogo = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_background.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <StyledImage fluid={file.childImageSharp.fluid} />;
};

export default BackgroundLogo;
