import styled from 'styled-components';

export const StatItem = styled.li`
  width: 100%;
  display: grid;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.primaryText}`};
  padding: ${p => p.theme.space[4]}px;
`;

export const StatText = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
`;

export const StatValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primaryText};
`;
