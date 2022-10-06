import { UserText, UserName, UserAvatar, StatsList } from './profile.styled';
import { StatsInfo } from 'components/userStats/userStats';
import { Box } from '../../constans/index';

export const Profile = ({
  userProfile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  console.log(followers);
  return (
    <Box
      width="400px"
      pt={4}
      ml="auto"
      mr="auto"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box textAlign="center">
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </Box>
      <StatsList>
        <StatsInfo text="followers">{followers}</StatsInfo>
        <StatsInfo text="views">{views}</StatsInfo>
        <StatsInfo text="likes">{likes}</StatsInfo>
      </StatsList>
    </Box>
  );
};
