import { StatItem, Statinfo } from 'components/userStats/userStats.styled';

export const StatsInfo = ({ name, value }) => {
  return (
    <StatItem>
      <Statinfo>{name}</Statinfo>
      <Statinfo>{value}</Statinfo>
    </StatItem>
  );
};
