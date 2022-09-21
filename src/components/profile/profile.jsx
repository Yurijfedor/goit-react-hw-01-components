import PropTypes from 'prop-types';
import { UserText, UserName, UserAvatar } from './profile.styled';
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
      <Box display="flex" flexDirection="column" alignItems="center">
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </Box>
      <Box display="flex" bg="backgroundColorStats">
        <StatsInfo text="followers">{followers}</StatsInfo>
        <StatsInfo text="views">{views}</StatsInfo>
        <StatsInfo text="likes">{likes}</StatsInfo>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  userProfile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
