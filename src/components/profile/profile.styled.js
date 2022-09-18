import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 600px;
  padding: 24px;
  background-color: teal;
  margin-left: auto;
  margin-right: auto;
`;

export const UserInfo = styled.div`
  display: inline-table;
  background-color: palevioletred;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  background-color: aqua;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 100%;
  display: grid;
  border: 1px solid gray;
`;
