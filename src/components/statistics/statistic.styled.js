import styled from 'styled-components';

export const TitleStatistics = styled.h2`
  font-size: ${prop => prop.theme.space[5]}px;
  color: ${prop => prop.theme.colors.secondaryText};
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-top: ${prop => prop.theme.space[5]}px;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: grid;
  text-align: center;
  font-size: ${prop => prop.theme.space[4]}px;
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
`;
