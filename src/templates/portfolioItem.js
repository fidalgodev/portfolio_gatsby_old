import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Img from 'gatsby-image';

import ButtonLink from '../components/UI/buttonLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 12rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column !important;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  font-style: italic;
  margin: 0;
  margin-bottom: 3.5rem;
  color: var(--white);
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    background: var(--primary);
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  margin: 0 2rem;

  @media ${props => props.theme.mediaQueries.medium} {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  color: var(--text);
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1.7;
  transition: color 0.2s ease-out;

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--text-highlight);
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  margin-bottom: 4rem;
  font-size: 1.1rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const Image = styled(Img)`
  margin: 0 2rem;
  flex: 1 1 50%;

  @media ${props => props.theme.mediaQueries.medium} {
    order: 1;
    width: 100%;
    margin: 0rem;
  }
`;

const PortfolioItem = ({ portfolio }) => {
  const { title, live, source, stack, image } = portfolio.frontmatter;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <Content>
          <Text dangerouslySetInnerHTML={{ __html: portfolio.html }} />
          <Stack>{stack}</Stack>
          <ButtonsWrapper>
            <ButtonLink target="_blank" solid href={live} rel="noreferrer">
              <StyledIcon icon={faLink} />
              Visit
            </ButtonLink>
            <ButtonLink target="_blank" href={source} rel="noreferrer">
              <StyledIcon icon={faGithub} />
              Source
            </ButtonLink>
          </ButtonsWrapper>
        </Content>
        <Image fluid={image.childImageSharp.fluid} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default PortfolioItem;
