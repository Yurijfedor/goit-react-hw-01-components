import styled from 'styled-components';

export const StatText = styled.span`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
`;

export const StatValue = styled.span`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primaryText};
`;

export const StatsItem = styled.li`
  width: 100%;
  display: grid;
  justify-content: center;
  border: ${prop => prop.theme.borders.normal};
  border-color: ${prop => prop.theme.colors.secondaryText};
  padding: ${prop => prop.theme.space[2]}px;
`;
