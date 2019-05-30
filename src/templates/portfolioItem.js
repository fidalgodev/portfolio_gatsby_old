import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Img from 'gatsby-image';

import ButtonLink from '../components/UI/buttonLink/buttonLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  position: relative;
  font-style: italic;
  margin: 0;
  margin-bottom: 3rem;
  color: var(--white);

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
  margin-top: 1rem;
`;

const Text = styled.div`
  font-size: 1.6rem;
  color: var(--text);
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1.8;
`;

const Stack = styled.p`
  color: var(--text-highlight);
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  margin-bottom: 4rem;
  font-size: 1.1rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const Image = styled(Img)`
  margin: 0 2rem;
  flex: 1 1 50%;
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
            <ButtonLink solid href={live} rel="noreferrer">
              <StyledIcon icon={faLink} />
              Check live
            </ButtonLink>
            <ButtonLink href={source} rel="noreferrer">
              <StyledIcon icon={faGithub} />
              Source Code
            </ButtonLink>
          </ButtonsWrapper>
        </Content>
        <Image fluid={image.childImageSharp.fluid} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default PortfolioItem;
