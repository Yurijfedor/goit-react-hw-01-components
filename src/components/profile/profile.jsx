import { ProfileContainer } from './profile.styled';
import { UserInfo } from './profile.styled';
import { StatsInfo } from 'components/userStats/userStats';
import { StatsList } from './profile.styled';

export const Profile = ({
  userProfile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserInfo>
      <StatsList>
        <StatsInfo name="followers" value={`${followers}`} />
        <StatsInfo name="views" value={`${views}`} />
        <StatsInfo name="likes" value={`${likes}`} />
      </StatsList>
    </ProfileContainer>
  );
};
