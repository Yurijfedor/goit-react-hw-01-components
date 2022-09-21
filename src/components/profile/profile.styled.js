import styled from 'styled-components';

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${p => p.theme.radii.round};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const UserText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
`;
