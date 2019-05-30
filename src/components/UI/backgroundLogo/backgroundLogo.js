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
  right: -8%;
  width: 55%;
  transform: rotate(-15deg);

  @media ${props => props.theme.mediaQueries.largest} {
    top: -25%;
  }

  @media ${props => props.theme.mediaQueries.large} {
    top: -15%;
    right: -8%;
    width: 70%;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    top: -10%;
    width: 65%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    top: 0%;
    width: 65%;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    top: 0%;
    right: -12%;
    width: 80%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    top: 0%;
    right: -12%;
    width: 75%;
  }
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
