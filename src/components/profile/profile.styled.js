import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const UserInfo = styled.div`
  display: inline-table;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${p => p.theme.radii.round};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundColorStats};
  padding: ${p => p.theme.space[0]};
`;

export const StatItem = styled.li`
  width: 100%;
  display: grid;
  border: ${p =>
    `${p.theme.borders.normal} ${(p = p.theme.colors.backgroundColorStats)}`};
`;

export const UserText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
`;
