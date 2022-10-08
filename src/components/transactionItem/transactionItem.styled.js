import styled from 'styled-components';

export const TableTdEl = styled.td`
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.backgroundColorStats};
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TableTrEl = styled.tr`
  &:nth-child(odd) {
    background: ${p => p.theme.colors.accent};
  }
  &:nth-child(even) {
    background: ${p => p.theme.colors.tableTrSecondaryBgColor};
  }
`;
