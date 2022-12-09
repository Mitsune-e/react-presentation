import styled from 'styled-components';

export const PageWrapper = styled.div<any>`
  min-height: 100%;

  @media (min-width: 1024px) {
    position: inherit;
    margin: 0 0 0 ${(p) => (p.marginLeft ? p.theme.sizes.navbar : '0px')};
    padding: 0px;
  }
`;

export const PageWrapperContent = styled.div<any>`
  overflow: auto;
  height: calc(100vh - ${(p) => (p.headerHidden ? '0px' : p.theme.sizes.header)});
  padding: ${(p) => (p.noPadding ? '0px' : '20px 20px 20px')};
`;
