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
