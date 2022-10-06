import PropTypes from 'prop-types';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';

// import { Container } from './App.styled';
import userProfile from '../data/user.json';
import stats from '../data/data.json';

import { Box } from '../constans/index';

export const App = () => {
  return (
    <Box p={4} fontWeight="bold" fontSize="xl">
      <Profile userProfile={userProfile} />
      <Statistics stats={stats} title="upload stats" />
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
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
