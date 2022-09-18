import {
  StatsList,
  StatItem,
  StatLabel,
  StatQuantity,
} from './userStats.styled';

export const UserStats = () => {
  return (
    <StatsList>
      <StatItem>
        <StatLabel>Followers</StatLabel>
        <StatQuantity>1000</StatQuantity>
      </StatItem>
      <StatItem>
        <StatLabel>Views</StatLabel>
        <StatQuantity>2000</StatQuantity>
      </StatItem>
      <StatItem>
        <StatLabel>Likes</StatLabel>
        <StatQuantity>3000</StatQuantity>
      </StatItem>
    </StatsList>
  );
};
