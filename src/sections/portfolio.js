import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from '../components/UI/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import PortfolioItem from '../templates/portfolioItem';

const PortfolioWrapper = styled.div`
  width: 100%;

  & > div:nth-child(odd) > div {
    flex-direction: row-reverse;
  }
`;

const Portfolio = () => {
  const { allFile: items } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/portfolio/" }
        }
        sort: { fields: [dir], order: DESC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                live
                source
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `);

  return (
    <StyledSection id="portfolio">
      <Contained>
        <Wrapper>
          <Heading
            title="Portfolio"
            subtitle={`Check <span>what</span> I've been doing <span>lately</span>`}
          />
          <PortfolioWrapper>
            {items.edges.map(item => (
              <PortfolioItem
                key={item.node.id}
                portfolio={item.node.childMarkdownRemark}
              />
            ))}
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Portfolio;
