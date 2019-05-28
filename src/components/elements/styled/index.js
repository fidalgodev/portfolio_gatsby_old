import styled from 'styled-components';

export const Contained = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: ${({ fullHeight }) =>
    fullHeight ? 'calc(100vh - 6rem)' : '100%'};
  width: 100%;
  margin-top: 6rem;

  &:last-of-type {
    margin-bottom: -4rem !important;
  }
`;

export const Wrapper = styled.div`
  padding: 8rem 0rem;
  color: var(--text);
`;
