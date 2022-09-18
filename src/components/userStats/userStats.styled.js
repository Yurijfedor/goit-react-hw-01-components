import styled from 'styled-components';

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

export const Statinfo = styled.span`
  font-size: 25px;
  color: gray;
`;

export const StatQuantity = styled.span`
  color: gray;
  font-size: 25px;
`;
