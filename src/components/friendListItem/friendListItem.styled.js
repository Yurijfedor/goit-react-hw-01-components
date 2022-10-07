import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${prop => prop.theme.space[4]}px;
  gap: ${prop => prop.theme.space[4]}px;
`;

export const StatusOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${prop => prop.theme.radii.round};
  background-color: ${prop => prop.theme.colors.green};
`;

export const StatusOffline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${prop => prop.theme.radii.round};
  background-color: ${prop => prop.theme.colors.red};
`;

export const FriendsName = styled.p`
  font-size: ${prop => prop.theme.fontSizes.l};
`;
