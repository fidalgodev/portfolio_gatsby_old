import styled from 'styled-components';

export const Contained = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;

  @media ${props => props.theme.mediaQueries.small} {
    padding: 0 3rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 0 2rem;
  }
`;

export const StyledSection = styled.section`
         display: flex;
         position: relative;
         align-items: center;
         overflow-x: hidden !important;
         overflow-y: hidden !important;
         justify-content: center;
         flex-direction: column;
         width: 100%;
         min-height: ${({ fullHeight }) =>
           fullHeight
             ? '100vh'
             : 'auto'}; /* Fallback for browsers that do not support Custom Properties */
         min-height: ${({ fullHeight }) =>
           fullHeight
             ? 'calc(var(--vh, 1vh) * 100)'
             : 'auto'}; /* Fallback for browsers that do not support Custom Properties */
         /* height: ${({ fullHeight }) =>
           fullHeight ? 'calc(var(--vh, 1vh) * 100)' : '100%'}; */
         /* min-height: ${({ fullHeight }) =>
           fullHeight ? '100vh' : '100%'}; */
       `;

export const Wrapper = styled.div`
  padding: 6rem 0rem;
  margin-top: 7rem;
  color: var(--text);
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  transition: color 0.2s ease-out;

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 6rem;
    padding: 4rem 0rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    padding: 3rem 0rem;
  }
`;
