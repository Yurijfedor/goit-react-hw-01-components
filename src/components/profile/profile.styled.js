import styled from 'styled-components';

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${p => p.theme.radii.round};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[4]}px;
`;

export const UserText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
  margin-top: ${prop => prop.theme.space[3]}px;
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: ${prop => prop.theme.colors.backgroundColorStats};
  margin-top: ${prop => prop.theme.space[5]}px;
`;
