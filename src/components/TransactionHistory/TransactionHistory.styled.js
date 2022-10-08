import styled from 'styled-components';

export const TableEl = styled.table`
  width: 800px;
  font-size: ${p => p.theme.fontSizes.m};
  border-collapse: collapse;
  color: ${p => p.theme.colors.tableTextColor};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.theadBgColor};
`;

export const TableThEl = styled.th`
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[3]}px;
`;
